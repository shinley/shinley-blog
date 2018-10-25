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

## 5.逻辑运算
逻辑运算主要就是三种类型 

- 与（$and） 
- 或（$or）
- 非（$not、$nor）

范例：查询年龄在19~20岁的学生
```sql
db.students.find({"age":{"$gte":19,"$lte":20}}).pretty();
```
范例：查询不是19岁的学生
```sql
db.students.find({"age":{"$ne":19}});
```

范例： 查询年龄大于19岁，或者成绩大于90分的学生信息
```sql
db.student.find({"$or":[
    {"age":{"$gt":19}},
    {"score":{"$gt":90}}
]}).pretty();;
```
范例：也可以进行求反的操作
```sql
db.student.find({"$nor":[
    {"age":{"$gt":19}},
    {"score":{"$gt":90}}
]}).pretty();
```

## 6.条件过滤 $where

范例：查询年龄大于20岁的人
```sql
db.students.find({"where":"this.age>20"});
```
简写为:
```sql
db.students.find("this.age>20");
```
对数据量大的查询不适用。


## 7.范围查询

- $in  在范围 中      
- $nin 不在范围中

范例：查询姓名是 张三，李四、王五的信息

```sql
db.student.find({"name":{"$in":["张三","李四","王五"]}}).pretty();
```

不在范围的查询
```sql
db.student.find({"name":{"$nin":["张三","李四","王五"]}}).pretty();
```


## 8.分页显示

- skip(n) 表示跨过多少数据
- limit(n) 表示取出的数据个数

例：分页显示（第一页skip(0) ,limit(5)）

```sql
db.students.find().skip(0).limit(5).sort({"age":-1});
```

## 嵌套集合运算
在MongoDB数据里面每一个集合数据可以继续保存其它的集合数据
```sql
db.user.insert({
                "name":"张三"，
                "parents":[
                            {
                            "name":"父亲",
                            "age":51,
                            "job":"局长"
                            },
                            {
                            "name":"母亲",
                            "age":50,
                            "job":"工人"
                            }
                        ]});
```

此时给出的内容是嵌套集合，而这种集合的数据判断只能通过$elemtMatch

范例：查询出年龄大于等于19岁并且父母有人是局长的信息
```sql
db.students.find({"$and"
    [
        {"age":{"gte":19}},
        {"parents":{"$elemMatch":{"job":"局长"}}}
    ]
}).pretty();
```

## 10.求模运算
模的运算使用 $mod  来完成。 

语法：
```sql
{ $mod:[数字，余数]}

db.students.find({"age":{"$mod":[20,0]}}).pretty();
```
## 11.删除数据
使用remove
- 参数1 ：删除条件：满足条件的数据被删除
- 参数2 ：是否只删除一条数据，如果设为true或1，则只删除一条数据

范例：清空infos的数据. 
```sql
db.infos.remove({});     // 注意参数带一对花括号，匹配所有对象
```
范例：删除所有姓名带有“谷”的信息

```sql
db.students.remove({"name":/谷/});
```

范例： 删除姓名带有高的信息，要求只删一个
```sql
db.students.remove({"name":/高/}，true);
```
删除集合
```
db.students.drop();
```
## 12.数据更新操作
MongoDB对于数据的更新提供了两类函数：
- save()
- update()

使用update()方法  最常用的方式

语法：
```sql
db.集合.update(更新条件，新的对象数据，upsert, multi);
```
    upsert     如果数据不存在，则新增一条数据， true 为新增 false 为不增加
    multi        表示是否只更新 满足条件的第一条记录，如果设置为false,只更新第一条，如果为true 全部更新

范例：将年龄是19岁的人的成绩更新为100分
```sql
    db.students.update({"age":19},{"$set":{"score":100}},false,false);   //只更新一行
    db.students.update({"age":19},{"$set":{"score":100}},false,false);  //更新所有满足条件的
```
范例： 更新不存在的数据
```sql
    db.students.update({"age":30},{"$set":{"name":"不存在"}},true,false);
```

由于不存在30岁的学生信息，upsert又设置为true，所以会新增一条

使用save()方法更新
```sql
db.students.save({"_id":ObjectedId("xxx"),"age":50});
```

对应的id数据如果存在，就会更新数据，如果不存在，就会新增数据

## 13.数据排序

 MongoDB使用 sort() 函数  
- 升序  1 
- 降序 -1

范例：成绩降序排序
```
db.students.find().sort({"score":-1}).pretty();
```

自然排序： 使用数据库保存的顺序 

```
db.students.find().sort({"$natural": -1}).pretty();
```

## 14.数组
造数据：
```sql
db.students.insert({"name":"学霸"，"age":20,"course":["语文","数学","英语","物理","物理"]});
```

范例：查询同时参加语文和数学课程的学生
```sql
db.students.find("course":{"$all":["语文","数学"]});
```
$all 可以用在数组上，也可以用在一个数据的匹配上
范例：查询学生地址是海淀区的信息
```sql
db.students.find({"address":{"$all":[海淀区]}});
```
范例：查询数组中第二个内容为数学的信息
```sql
db.students.find({"course.1":"数学"});
```
范例：查询出只参加两门课程的学生
```sql
db.students.find({"course":{"$size":2}})
```
范例： 查询年龄为19岁，且只显示两门参加的课程
```sql
db.students.find({"age":19},{"course":{"$slice":2}});
```
以上是取前两门的课程 ，也可以取后两门的课程 $slice值为 -2
```sql
db.students.find({"age":19},{"course":{"$slice":-2}});
```
或者取中间部分的信息
```sql
db.students.find({"age":19},{"course":{"$slice":[1,2]}});
```
以上第一个数字，表示跳过的数据量，
第二个数字，表示返回的数据量

# 修改器


数据的修秘诀会牵涉到内容的变更，结构的变更，所以就有了修改器
 1. $inc    
主要针对一个数字字段，增加某个数字字段
        语法：{"$inc":{"成员"："内容"}}
范例：将所有19岁的人成绩减少30分,年龄加1
db.students.update({"age":19},{"$inc":{"score":-30,"age":1}},false,true);

 2. $set      
进行内容的重新设

语法：
```sql
{"$set":{"成员":"内容"}}
```
范例：将所有年龄20岁的人，分数改为89
```sql
db.students.update({"age":20},{"$set":{"score":89}});
```
 3. $unset 
删除某个成员
语法：
```sql
{"$unset":{"成员":"内容"}}
```
范例：将张三的年龄和分数信息删除
```sql
db.students.update({"name":"张三"},{"$unset":{"age":1,"score":1}});
```
4. $push 
将内容追加到指定的成员中（基本上是数组）
语法：
```sql
{"$push":{"成员":"内容"}}
```
范例：向张三添加课程信息
```sql
db.students.update({"name":"张三"}，{"$push":{"course":"语文"}});
```
5. $pushAll 一次追加多个内容到数组中
语法：
```sql
${"$pushAll":{"成员":数组内容}}
```
范例：向王五的信息里添加多个课程内容
```sql
db.students.update({"name":"王五"}，{"$pushAll":{"course":["美术","音乐"]}});
```
6. $addToSet 
向数组里面增加一个新的内容，只有当内容不存在时才会增加

语法： 
```sql
{"$addToSet":{"成员":"内容"}}
```
范例：向王五的信息增加新的内容
```sql
db.students.update({"name":"王五"}，{"$addToSet":{"course":"美术"}});
```
7. $pop 删除数据内的数组
语法：
```sql
{"$pop":{"成员":"内容"}} 内容如果设置为-1 ，删除第一个，1 删除最后一个
```
范例：删除王五的一个课程
```sql
db.students.update({"name":"王五"}，{"$pop":{"course":1}});
```
8. $pull 从数组内删除一个指定内容的数据
语法：
```sql
{"$pull":{"成员":"内容"}}
```
范例：删除王五的音乐课程
```sql
db.students.update({"name":"王五"}，{"$pull":"音乐"});
```
9. $pullAll  
一次性删除多个内容

语法：
```sql
{"$pullAll":{"成员":[内容1，内容2 ]}}
```
范例：删除王五的多个课程 
```sql
db.students.update({"name":"王五"}，{"$pullAll":{"course":["语文","数学"]}});
```
10. $rename  为成员名称重命名
语法：
```sql
{"$rename":{"旧的成员名称"："新的成员名称"}}
```
范例：将张三的成员名称修改为“xingming”
```sql
db.students.find({"name":"张三"}，{"$rename":{"name":"xingming"}});
```

## 16.游标
游标指数据可以一行行的进行操作，类似于ResultSet

mongodb使用find()函数，就可以返回游标了。

使用两个函数操作：

- 判断是否有下一行数据：hasNext()
- 取出当前数据： next()

例：
```sql
var cursor = db.students.find();
cursor.hasNext();
cursor.next();
```
例：运用循环操作
```
var cursor = db.students.find();
while(cursor.hasNext()){
    var doc = cursor.next();
    print(doc.name);
 //   printjson(doc);
}
```
## 17.正则运算(模糊查询)
如果要想实现模糊查询，那么必须要使用正则表达式

- 基础语法： {key:正则标记}
- 完整语法：{key:{"regex":正则标记，"$options":选项}}

对于options主要是设置正则的信息查询的标记

- i        忽略字母大小写
- m     多行查找
- x      空白字符除了被转义或在字符类中以外的完全被忽略
- s     匹配所有的字符（.）包括换行内容

范例： 查询以“谷”开头的姓名
```sql
db.students.find({"name": /谷/}).pretty();
```
范例：查询姓名含有字母A的，不区分大小写
```sql
db.students.find({"name":/a/i}).pretty();
```
完整语法这样写：
```sql
db.students.find().pretty({"name":{"$regex": /a/i}});
```
 查询数组数据
```sql
db.students.find({"course": /语/}).pretty();
```

## 18.判断某个字段是否存在
使用 $exists

范例：查找具有 course属性的对象
```sql
db.students.find({"course":{"$exists":true}}).pretty();
```