# cron "35 4 * * *" 
# new Env('爱奇艺签到')
import requests,os, random, string, hashlib, time, json
from json import dumps

#os.environ 获取环境变量 配置文件也可获取
P00001 =os.environ["P00001"]
P00003 =os.environ["P00003"]
dfp =os.environ["dfp"]

#print(P00001)
#print(P00003)
#print(dfp)

# 企业微信推送
base_url = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?'
req_url = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='
corpid = 'ww6eb36a9b1aeafec3'  # 企业ID， 登陆企业微信，在我的企业-->企业信息里查看
corpsecret = 'pDojiHEUXQm3kKyVP7dkje-6I8NYTT1fkFvQLM40QT8'  # 自建应用，每个自建应用里都有单独的secret
agentid = 1000002  # 填写你的应用ID，不加引号，是个整型常数,就是AgentId
touser = "WangDong"  # 指定接收消息的成员，成员ID列表（多个接收者用‘|’分隔，最多支持1000个）。特殊情况：指定为”@all”，则向该企业应用的全部成员发送
toparty = "@all"  # 指定接收消息的部门，部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为”@all”时忽略本参数
totag = "@all"  # 指定接收消息的标签，标签ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为”@all”时忽略本参数


############################################
# 任务列表
tasks = []

# 企业微信
def get_access_token():
    urls = base_url + 'corpid=' + corpid + '&corpsecret=' + corpsecret
    resp = requests.get(urls).json()
    access_token = resp['access_token']
    return access_token

def run(msg):
    data = {
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "text",
        "agentid": agentid,
        "text": {
            "content": msg
            },
        "safe": 0,
        "enable_id_trans": 0,
        "enable_duplicate_check": 0,
        "duplicate_check_interval": 1800
    }
    data = json.dumps(data)
    req_urls = req_url + get_access_token()
    resp = requests.post(url=req_urls, data=data).text
    print(resp)
    return resp


# 随机字符串 a-z A-Z 0-9
def strRandom(num):
    return ''.join(random.sample(string.ascii_letters + string.digits, num))


# md5加密
def md5(data):
    return hashlib.md5(bytes(data, encoding='utf-8')).hexdigest()


# 13位时间戳
def time_13():
    return round(time.time() * 1000)


# 拼接 连接符 数据 特殊符号（可不填）
def k(c, t, e=None):
    buf = []
    for key, value in t.items():
        buf.append('='.join([key, str(value)]))
    if e != None:
        buf.append(e)
        return (md5(c.join(buf)))
    return (c.join(buf))


# 登录
def login():
    global title
    url = "https://serv.vip.iqiyi.com/vipgrowth/query.action?P00001=" + P00001
    res = requests.get(url).json()
    if res['code'] == 'A00000':
        level = res['data']['level']  # VIP等级
        growthvalue = res['data']['growthvalue']  # 当前VIP成长值
        distance = res['data']['distance']  # 升级需要成长值
        deadline = res['data']['deadline']  # VIP到期时间
        today_growth_value = res['data']['todayGrowthValue']  # 今日获得的成长值
        logbuf = (
            f"VIP 等级: {level}\n当前成长值: {growthvalue}\n升级需成长值: {distance}\n今日成长值: {today_growth_value}\n当月成长值：{monthlyGrowthValue}\nVIP 到期时间: {deadline}")
        title = f"爱奇艺签到:今日成长值+{today_growth_value},预计还需{int(distance / today_growth_value) + 1}天升级"
    else:
        logbuf = (res['msg'])
    print(logbuf)
    return logbuf


# 签到
def Checkin():
    sign_date = {
        "agentType": "1",
        "agentversion": "1.0",
        "appKey": "basic_pcw",
        "authCookie": P00001,
        "qyid": md5(strRandom(16)),
        "task_code": "natural_month_sign",
        "timestamp": time_13(),
        "typeCode": "point",
        "userId": P00003
    }
    post_date = {
        "natural_month_sign": {
            "agentType": "1",
            "agentversion": "1",
            "authCookie": P00001,
            "qyid": md5(strRandom(16)),
            "taskCode": "iQIYI_mofhr",
            "verticalCode": "iQIYI"
        }
    }
    sign = k('|', sign_date, "UKobMjDMsDoScuWOfp6F")
    url = f"https://community.iqiyi.com/openApi/task/execute?{k('&', sign_date)}&sign={sign}"
    header = {
        'Content-Type': 'application/json'
    }
    res = requests.post(url, headers=header, data=dumps(post_date)).json()
    if res['code'] == 'A00000':
        if res['data']['code'] == 'A0000':
            quantity = res['data']['data']['rewards'][0]['rewardCount']  # 积分
            addgrowthvalue = res['data']['data']['rewards'][1]['rewardCount']  # 新增成长值
            continued = res['data']['data']['signDays']  # 签到天数
            logbuf = (f"签到成功: 获得积分{quantity}, 成长值{addgrowthvalue}，累计签到{continued}天")
        else:
            logbuf = (f"签到失败：{res['data']['msg']}")
    else:
        logbuf = (f"签到失败：{res['message']}")
    print(logbuf)
    return logbuf


# 网页端签到任务
def WebCheckin():
    web_sign_date = {
        "agenttype": "1",
        "agentversion": "0",
        "appKey": "basic_pca",
        "appver": "0",
        "authCookie": P00001,
        "channelCode": "sign_pcw",
        "dfp": dfp,
        "scoreType": "1",
        "srcplatform": "1",
        "typeCode": "point",
        "userId": P00003,
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "verticalCode": "iQIYI"
    }
    sign = k('|', web_sign_date, "DO58SzN6ip9nbJ4QkM8H")
    url = f"https://community.iqiyi.com/openApi/score/add?{k('&', web_sign_date)}&sign={sign}"
    res = requests.get(url).json()
    if res['code'] == 'A00000':
        if res['data'][0]['code'] == 'A0000':
            quantity = res['data'][0]['score']  # 积分
            continued = res['data'][0]['continuousValue']  # 累计签到天数
            logbuf = (f"网页端签到成功: 获得积分{quantity}, 累计签到{continued}天")
        else:
            logbuf = (f"网页端签到失败：{res['data'][0]['message']}")
    else:
        logbuf = (f"网页端签到失败：{res['message']}")
    print(logbuf)
    return logbuf


# 网页端访问热点首页任务
def Webtask():
    web_sign_date = {
        "agenttype": "1",
        "agentversion": "0",
        "appKey": "basic_pca",
        "appver": "0",
        "authCookie": P00001,
        "channelCode": "paopao_pcw",
        "dfp": dfp,
        "scoreType": "1",
        "srcplatform": "1",
        "typeCode": "point",
        "userId": P00003,
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "verticalCode": "iQIYI"
    }
    sign = k('|', web_sign_date, "DO58SzN6ip9nbJ4QkM8H")
    url = f"https://community.iqiyi.com/openApi/task/complete?{k('&', web_sign_date)}&sign={sign}"
    res = requests.get(url).json()
    if res['code'] == 'A00000':
        logbuf = (f"网页端访问任务成功：{res['message']}")
        print(logbuf)
        # 领取奖励
        url = f"https://community.iqiyi.com/openApi/score/getReward?{k('&', web_sign_date)}&sign={sign}"
        res = requests.get(url).json()
        print(res)
        if res['code'] == 'A00000':
            logbuf = (f"网页端访问任务成功：获得{res['data']['score']}积分")
        else:
            logbuf = (f"网页端访问任务失败：{res['message']}")
    else:
        logbuf = (f"网页端访问任务失败：{res['message']}")
    print(logbuf)
    return logbuf


# 抽奖
def Lottery():
    url = f"https://iface2.iqiyi.com/aggregate/3.0/lottery_activity?app_k=0&app_v=0&platform_id=0&dev_os=0&dev_ua=0&net_sts=0&qyid=0&psp_uid=0&psp_cki={P00001}&psp_status=0&secure_p=0&secure_v=0&req_sn=0"
    res = requests.get(url).json()
    if res['code'] == 0:
        try:
            logbuf = (f"抽奖失败：{res['kv']['msg']}")
        except:
            logbuf = (f"抽奖成功：{res['title']}-{res['awardName']},剩余抽奖次数{res['daysurpluschance']}次")
            print(logbuf)
            return [int(res['daysurpluschance']), logbuf]
    elif res['code'] == 3:
        logbuf = ("抽奖失败：Cookie失效")
    else:
        logbuf = ("抽奖失败：未知错误")
    print(logbuf)
    return [0, logbuf]


# 任务
# 获取任务列表及状态 0：待领取 1：已完成 2：未开始 4：进行中
def query_user_task():
    global tasks, monthlyGrowthValue
    url = "https://tc.vip.iqiyi.com/taskCenter/task/queryUserTask"
    params = {"P00001": P00001}
    res = requests.get(url=url, params=params).json()
    if res['code'] == "A00000":
        monthlyGrowthValue = res['data']['monthlyGrowthReward']
        tasks.clear()
        for taskgroup in ['actively', 'daily']:  # in res['data']['tasks']:
            for item in res['data']['tasks'][taskgroup]:
                tasks.append({"name": item['name'], "taskCode": item['taskCode'], "status": item['status']})
    else:
        print(f"获取任务列表失败：{res['msg']}")


def joinTask(taskCode):
    url = f"https://tc.vip.iqiyi.com/taskCenter/task/joinTask?taskCode={taskCode}&lang=zh_CN&platform=0000000000000000&P00001={P00001}"
    res = requests.get(url).json()
    if res['code'] == 'A00000':
        return [True]
    else:
        return [False, res['msg']]


def notifyTask(taskCode):
    url = f"https://tc.vip.iqiyi.com/taskCenter/task/notify?taskCode={taskCode}&lang=zh_CN&platform=0000000000000000&P00001={P00001}"
    requests.get(url)


def getTaskRewards(taskCode):
    url = f"https://tc.vip.iqiyi.com/taskCenter/task/getTaskRewards?taskCode={taskCode}&lang=zh_CN&platform=0000000000000000&P00001={P00001}"
    res = requests.get(url).json()
    if res['msg'] == "成功":
        if res['code'] == 'A00000':
            if res['dataNew'] != []:
                logbuf = (f"{res['dataNew'][0]['name']} {res['dataNew'][0]['value']}")
            else:
                logbuf = "可能未完成"
        else:
            logbuf = (f"{res['msg']}")
    else:
        logbuf = ("cookie无效/接口失效")
    return logbuf


def perform_task():
    luckbuf = []
    query_user_task()  # 获取任务列表
    for task in tasks:
        if task['status'] == 2:
            result = joinTask(task['taskCode'])
            if result[0]:
                notifyTask(task['taskCode'])
                logbuf = f"开始{task['name']}任务"
            else:
                logbuf = f"{task['name']}任务：{result[1]}"
            print(logbuf)
            luckbuf.append(logbuf)
            time.sleep(1)
    time.sleep(10)
    query_user_task()  # 重新获取任务列表
    for task in tasks:
        if task['status'] == 0:
            logbuf = f"{task['name']}任务已完成：{getTaskRewards(task['taskCode'])}"
            print(logbuf)
            luckbuf.append(logbuf)
            time.sleep(1)
        if task['status'] == 4:
            logbuf = f"{task['name']}任务正在进行中，需要手动完成"
            print(logbuf)
            luckbuf.append(logbuf)
    return ("\n".join(luckbuf))


# 主程序
def main():
    log = []
    startime = time_13()
    log.append(Checkin())  # 签到
    time.sleep(1)
    log.append(WebCheckin())  # 网页端签到
    time.sleep(1)
    log.append(Webtask())  # 网页端访问热点首页
    time.sleep(1)
    while True:
        lucknum = Lottery()  # 抽奖
        if lucknum[0] != 0:
            log.append(lucknum[1])
            time.sleep(2)
        else:
            log.append(lucknum[1])
            break
    log.append(perform_task())  # 做任务
    log.insert(0, login())  # 登录信息
    endtime = time_13()
    duration = (endtime - startime) / 1000
    logbuf = f"共耗时{duration}秒"
    print(logbuf)
    log.append(logbuf)
    print("***END***")


def main_handler(event, context):
    return main()


if __name__ == '__main__':
    main()