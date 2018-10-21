---
sidebar: auto
collapsable: false
sidebarDepth: 1
---

# MongoDB


## 1.Mongodb的配置

windows下需要配置path环境变量到 bin 目录

mongodb的数据库文件夹，新建一个db目录，用来保存所有数据文件。

用mongod.exe命令启动，启动时可以设置端口号，也可以不设置端口号

##### 不设端口：
```
mongod --dbpath E:\MongoDB\db
```
##### 设置端口：
```
mongod --dbpath E:\MongoDB\db --port=27020
```

##### 连接mongodb:

在cmd命令行直接执行命令：mongo

会直接连到一个测试库。


###### 查询所有的数据库：
```
    show databases;
```

###### 查询所有的集合：
```
    show collections;
```

###### 删除集合
```
db.集合名称.drop();
```

###### 在mongodb根目录下建立一个mongodb.conf的配置文件
```
#设置数据目录路径
dbpath = E:\MongoDB\db
#设置日志信息的文件路径
logpath = E:\MongoDB\logs
#打开日志输出操作
logappend = true
#不使用用户登录
noauth=true
#设置端口
port = 27020
```
在mongodb根目录下建立日志文件夹 : logs

在logs文件夹下建立一个日志文件：mongodb.log


重新启动MongoDB数据库：
```
mongod -f E:\MongoDB\mongodb.conf
```

###### 再次连接mongodb数据库，需要加上端口号
```
./mongo --port=27020
```

###### 关闭mongodb
```
    pkill mongod
```

进入mongo shell ：运行 
```
db.shutdownServer()
```
官方文档说可以使用killall mongo或kill  -15 PID来关闭。
或者在Mongo Javascript Shell中
```
>use admin
>db.shutdownServer( )
mongo默认处于test,如果直接运行会出现
> db.shutdownServer()
shutdown command only works with the admin database; try 'use admin'

```

MongoDB数据库一关系型数据库的概念对应关系

关系型数据库|  NoSql数据库
---|---
数据库 | 数据库
表     | 集合
行     | 成员
主键   | ObjectID (自动维护)



在整个行业中MongoDB是发展最好的一个NoSQL数据库。


#### 远程连接数据库
```
$ mongo  192.168.55.127:27020/myDB
```
或者启动 mongo shell时不连接任何mongod实例，通过 --nodb参数启动
```
$mongo --nodb

$conn = new Mongo("192.168.55.127:27020");
$db = conn.getDB("myDB");
```

## 2.数据操作

数据库最核心的功能CRUD,Mongodb里面也一样。
除了增加之外，其它的都很麻烦。

### 1.数据的增加：
```
db.集合.insert();

db.infos.insert({"url":"www.imongodb.com"});
```


### 保存存数组：
```
db.infos.insert([{"url":"www.imongodb.com"},
        {"url":"www.imongodb.com"}]);
```
### 使用javascript语句：
```
for(var i=0;i<1000;i++){
    db.infos.insert({"url":"www.imongodb.com" + i});
}
```

### 【数据查询】

基本语法：
```
db.集合名称.find({查询条件}[,{设置显示的字段}]);
```
范例： 

```
db.infos.find();  // 查询所有
```
查询出所有url为“www.imongodb.com”的数据
```
db.infos.find({"url":"www.imongodb.com"});
```

对于设置显示字段 称为数据的设影操作，如果不需要显示设为0，
显示设为1 。


范例：不显示“_id”
```
db.infos({"url":"www.imongodb.com"},{"_id":0});
db.infos({"url":"www.imongodb.com"},{"_id":0,"url":1});
```

数据格式化：
```
db.infos({"url":"www.imongodb.com"},{"_id":0,"url":1}).pretty();
```
### 关系查询：
关系表大式：大于（$gt）、小于（$lt） 、大于等于（$gte）、小于等于($lte)、不等于（$ne）;

等于的话就是：key:value
```
db.students.find({"name":"张三"}).pretty();
db.student.find({"set":"男"}).pretty();
```
范例：查询年龄大于19岁的学生
```
db.students.find({"age":{"$gt":19}}).pretty();
```
范例：查询成绩大于60分的学生
```
db.students.find({"score":{"$gte":60}}).pretty();
```
范例：查询不是王五的信息
```
db.students.find({"name":{"$ne":"王五"}}).pretty();
```

## 3.MongoDB用户管理

mongodb可以不使用用户名和密码。

但是如果要使用用户名和密码：
- 1.服务器启动时打开授权认证
- 2.需要配置用户名和密码

但是配置用户名和密码，一定是针对一个数据库的。

切换到相应数据库：
```sql
use zmdla
```

任何的用户都必须具有一个自已的操作角色

对于基础的角色：read  readWriter,
```sql
db.createUser({
    "user":"hello",
    "pwd":"java",
    "roles":[{"role":"readWrite","db":"zmdla"}]

});
```

在启动参数中把noauth=true,改为 auth=true;

再连接数据库，如果不用用户名和密码，能切换到数据库，但不能查询数据。

以用户名和密码连接：
```sql
mongo localhost:27020/zmdla -u hello -p java
```

如果要修改密码，必须关闭授权登录。

修改密码：
```sql
db.changeUserPassword("hello","happy");
```
### 角色

- 1.数据库角色： read 、readWrite、dbAdmin、dbOwner、userAdmin
- 2.集群角色：clusterAdmin,clusterManager ...
- 3.备份角色：backup ,restore
- 4.其他特殊权限： DBAdminAnyDatabase...    readAnyDatabase  角色+AnyDatabase


## 4.MongoDB阿基础操作

MongoDB中也有数据库的概念：

### 切换数据库：
```sql
use dbName;
```
如果不存在这个数据库，切换也不会报错，插入数据时，会自动创建数据库
和表。

### 显示数据库 ：
```sql
show databases;
```

### 创建一个集合： 
```sql
db.createCollection("user");
```
再次show databases; 就会显示出切换的数据库
```sql
db.user.find()  == select * from user;

db.user.insert({"name":"imongodb.com","age":1});
```
### 查看集合：
```sql
show collections;
```
### 【查询数据】
```sql
db.集合名称.find({条件});
```
从传统的数据来看(集合相当于表结构)，表结构一旦定义就必须按照定义的表结构进行添加数据。
MongoDB不一样，它可以自已随意扩充数据。


### 增加不规的数据
```sql
var userInfo = {"name":"www.imongodb.com","age":1,"address":"北京"};

db.user.insert(userInfo);
```
因为mongodb的表结构不确定，所以也就没有类似mysql的查看表结构的语法。


关于ID的问题：
    在MongoDB集合中的每一行记录都会生成一个 "_id":ObjectId("xxxxxx")数据，这个
组成是：时间戳 + 机器码 +进程PID + 计数器， 这个ID的信息是MongoDB数据库生成的。

范例：查看单独的一个文档信息
```sql
db.user.findOne();
```
### 删除数据：
```sql
db.user.remove({"xxx":"yyy"});
```
### 更新数据：
```sql
db.user.update({条件},{内容});
```

### 删除集合：
```sql
db.user.drop();
```
### 删除数据库：
```sql
db.dropDatabase();  删除当前所在的数据库
```

### 查看当前所在的数据库：
直接输入:
```sql
> db
```



