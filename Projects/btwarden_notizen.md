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

dort subdomain eintragen, die vorher eingerichtet wurde beim Provider und in Ngnix Proxy Manager:
globalSettings__baseServiceUri__vault=http://bitw.deine_domain.com
globalSettings__baseServiceUri__cloudRegion=EU
sowie Email Einträge
.....
Speichern, Schliessen

./bitwarden.sh restart

Updates
apt update &6 apt upgrade -y
./bitwarden.sh updateself
./bitwarden.sh update
reboot
