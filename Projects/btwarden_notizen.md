Bieispiel mit Ubuntu 22.04 oder debian 12
```
apt update && apt upgrade -y

apt install docker.io docker-compose -y
docker-compose --version
apt install curl
curl -s -L -o bitwarden.sh     "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux"     && chmod +x bitwarden.sh
./bitwarden.sh install
./bitwarden.sh start
nano ./bwdata/env/global.override.env
./bitwarden.sh restart

Updates
apt update &6 apt upgrade -y
./bitwarden.sh updateself
./bitwarden.sh update
reboot
