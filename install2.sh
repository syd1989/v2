cd ~
if [ $(command -v wget | grep -c "wget") -lt 1 -o $(command -v node | grep -c "node") -lt 1 -o $(command -v yarn | grep -c "yarn") -lt 1 ]
then yum update || apt update
yes | yum upgrade || yes | apt upgrade
yum update || apt update
yum install wget nodejs yarn -y || apt install wget nodejs yarn -y
fi
npm install -g pm2
yarn global add pm2

wget https://ghproxy.com/https://github.com/elecV2/elecV2P/archive/refs/tags/3.6.5.tar.gz
if [ ! -d elecV2P ]
then mkdir elecV2P
cz=安装
else cz=更新
fi
tar --extract --file=3.6.5.tar.gz --strip-components=1 --directory=elecV2P

cd ~/elecV2P
yarn
