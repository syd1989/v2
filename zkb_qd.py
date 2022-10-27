import requests, re, json, urllib3, os

#os.environ 获取环境变量
ck =os.environ["zkck"].split('&')
#split()：拆分字符串。通过指定分隔符对字符串进行切片，并返回分割后的字符串列表（list）
cookie=[ck[0]]
#print(mycookies)

#推送配置
# 企业微信推送参数
corpid = ''
agentid = ''
corpsecret = ''
touser = ''
# 推送加 token
plustoken = ''

def Push(contents):
    # 微信推送
    if all([corpid, agentid, corpsecret, touser]):
        token = \
        requests.get(f'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid={corpid}&corpsecret={corpsecret}').json()[
            'access_token']
        json = {"touser": touser, "msgtype": "text", "agentid": agentid, "text": {"content": "新赚吧签到\n" + contents}}
        resp = requests.post(f"https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token={token}", json=json)
        print('微信推送成功' if resp.json()['errmsg'] == 'ok' else '微信推送失败')

    if plustoken:
        headers = {'Content-Type': 'application/json'}
        json = {"token": plustoken, 'title': '新赚吧签到', 'content': contents.replace('\n', '<br>'), "template": "json"}
        resp = requests.post(f'http://www.pushplus.plus/send', json=json, headers=headers).json()
        print('push+推送成功' if resp['code'] == 200 else 'push+推送失败')

urllib3.disable_warnings()
for i in range(len(cookie)):
    print('开始第'+ str(i+1) +'个帐号签到'+'\n'+'***********************')
    f_url = 'https://v1.xianbao.net/'  # 获取formhash
    url = 'https://v1.xianbao.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=0&inajax=0'
    headers = {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1',
        'cookie': f'{cookie[i]}',
        'Host': 'v1.xianbao.net',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://v1.xianbao.net'
    }
    f_html = requests.post(url=f_url, headers=headers, verify=False).text
    formhash = str(re.findall('name="formhash" value="(.*?)" />', f_html, re.S)).replace('[', '').replace('\'', '').replace(']', '')
    data = {
    'formhash': f'{formhash}'
    }
    html = requests.post(url=url, headers=headers, data=data, verify=False).text
    result = re.findall('<div class="c">\r\n(.*?)<a href="plugin.php?', html, re.S)
    message = "".join(result)
    url_2 = 'https://v1.xianbao.net/home.php?mod=spacecp&ac=credit&showcredit=1'
    html_2 = requests.get(url=url_2, headers=headers, verify=False).text
    info = '用户名：' + "".join(re.findall('title="访问我的空间">(.*?)</a>', html_2, re.S)) + ' 果果:' + "".join(re.findall('src="/static/images/common/guoguo.gif" /> 果果: </em>(.*?)&nbsp; <a href="home.php?', html_2, re.S))
    sign_info = message + '\n' + info
    print(sign_info)
    Push(contents=sign_info)
