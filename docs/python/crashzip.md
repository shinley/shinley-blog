# 暴力破解zip压缩包的密码

我们知道， 在windows下创建一个zip格式的压缩包时，可以设置一个密码。当解压这个压缩包时，只有输入正确的密码，才可以解压这个压缩包。这样可以在一定程序上实现对私密文件的保护。

如果我们在网上下载了一个zip的压缩包，解压时却需要输入密码，估计大多数人都会立即删除这个文件， 因为对一个人来说很难通过手动输入的方式，破解这个压缩包的密码。

但是我们可以通过python通过不停的尝试密码，来破解这个压缩包的密码，我们使用的库叫 zipfile.

我们先看一个示例：
```python
import zipfile
my_zip_file = zipfile.ZipFile("test.zip")
my_zip_file.namelist()
```
上面的示例， 通过zipfile模块读取zip文件，并获取zip压缩包中的文件列表

## zipfile常用的方法
- namelist 返回zip文件夹中包含的所有文件和文件夹的字符串列表：
- extract  从zip文件中提取单个文件
- extractall 从zip文件中提取所有文件

## 创建zip文件
若想创建一个zip文件， 必须以写模式打开zip文件，然后通过write方法添加文件

```python
import zipfile
newZip = zipfile.ZipFile('new.zip', 'w')
newZip.write('test.txt')
newZip.close()
```

## 暴力破解zip压缩包密码
使用python的zipfile模块大大降低了破解压缩包的难度， 其实暴力破解zip压缩包的密码的思路很简单：就是使用程序不停的尝试不同的密码。

在上面我们列举了zipfile的常用方法， 有两个关于解压的方法 extract和extractall, 这两个方法可以接收一个密码的参数，我们在解压时，如果需要输入密码，只需把密码当参数传进去即可。

假如有一个test.zip的压缩包，它的密码是 123456， 我们可以通过如下方法解压：
```python
import zipfile

f = zipfile.ZipFile('test.zip')
f.extractall(pwd='123456')
```
当密码输错时，会报 RuntimeError的异常信息。

使用python进行密码破解时， 如果密码错误，只需要try catch 异常信息，然后忽略掉，再进行下一次的尝试就可以了。

对于这种破解方式， 我们首先需要把所有可能在的密码放到一个密码文件中， 然后读取这个文件中的密码逐个尝试。

```python
import zipfile
f = zipfile.ZipFile('test.zip')
with open('passwd.txtg') as pw:
  for line in pw:
    try:
      f.extractall(pwd=line.strip())
      print("密码是:" + line)
    expect:
      pass
```
以上示例， 当密码正确时，就会把密码打印出来。 密码错误时， 会抛异常。 由于我们使用了try catch ， 所以密码错误时，异常会被catch住， 并被忽略， 然后进行一次尝试。

如果你的密码文件中，没有zip文件的密码， 也是破解不了的。但是绝大多数人都长期使用弱密码， 所以只要你的密码集合足够大， 总是可以将所有可能的密码包括进来。

::: tip
近年来网上泄露了很多知名网站的用户数据， 我们可以从网上下载这些数据，然后使用这些数据做为密码文件。
:::



