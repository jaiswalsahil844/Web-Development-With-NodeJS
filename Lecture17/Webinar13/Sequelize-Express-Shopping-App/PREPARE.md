# Preparing the Database

Do the following as root

```sql
 create database shopdb;
 set global validate_password_policy = LOW;
 create user shopper identified by 'shoppass';
 use shopdb;
 grant all privileges on shopdb.* to shopper;
 flush privileges;
 exit;
```