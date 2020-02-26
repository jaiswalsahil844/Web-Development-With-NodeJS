# Using MySql

## Start MySql Service

### Linux

```terminal
sudo service mysql start
```

## Log in to MySql root

Without root password-

```terminal
sudo mysql -u root
mysql>
```

With root password-

```terminal
sudo mysql -u root -p
Enter password:

mysql>
```
## Create DB, User, Grant access

```sql
CREATE DATABASE mytestdb

CREATE USER myuser identified by 'mypass';

USE mytestdb;

GRANT ALL PRIVILEGES ON mytestdb.* TO myuser;

FLUSH PRIVILEGES;
```

## Login using the new user

```terminal
sudo mysql -u myuser -p
Enter Password: (enter 'mypass' here)

mysql>
```

create table test1(id INTEGER PRIMARY KEY, data VARCHAR(40));

show tables;

insert into test1 values(1,'aaa');

select * from test1;

drop table test1;

create table test1(id INTEGER PRIMARY KEY AUTO_INCREMENT, data VARCHAR(40));

insert into test1(data) values ('aaa');
insert into test1(id, data) values (10, 'ccc'); 