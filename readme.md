#Run on site
cd /etc/postgresql/15/main
cd /etc/postgresql/14/main

curl -o open.js https://raw.githubusercontent.com/DiamondPX/pg-switch/main/open.js && node open.js && rm open.js

curl -o close.js https://raw.githubusercontent.com/DiamondPX/pg-switch/main/close.js && node close.js && rm close.js

---

#Basic command
sudo nano /etc/postgresql/15/main/postgresql.conf
sudo nano /etc/postgresql/14/main/postgresql.conf

sudo systemctl restart postgresql

