#!/usr/bin/env bash

# install mongodb
sudo cp /vagrant/.provision/mongodb/mongodb.repo /etc/yum.repos.d/mongodb.repo
sudo yum -y install mongodb-org mongodb-org-server

# override config
sudo mv /etc/mongod.conf /etc/mongod.default.conf
sudo cp /vagrant/.provision/mongodb/mongod.conf /etc/mongod.conf
sudo mkdir /vagrant/logs/

sudo service mongod start
sudo chkconfig mongod on
