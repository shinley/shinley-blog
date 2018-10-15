# 自动化部署工具Fabric
Fabric是一个基于python(python2.7, python3.4+)实现的SSH命令行工具库，使用它可以非常方便的执行应用部署和系统管理操作。它提供了基础的操作组件， 可以方便的进行本地和远程shell命令的执行，文件上传、下载以及完整执行日志输出。 

Fabric的作者也是paramiko的作者， 可以理解为Fabric是在paramiko的基础上做了更高一层的封装， 操作起来更加方便、简单。

Fabric既是一个python库， 也是一个命令行工具， 它的命令行工是不是Fabric， 而是fab. 
## Fabric安装
```Bash
pip install fabric
```
安装完成以后，在命令行执行以下命令，验证Fabric是否安装正确
```Bash
fab --help
```
如果能正常输出，说明安装正确。

## Fabric使用入门
新建fabfile.py文件，输入以下内容：
```python
from fabric.api import run, sudo, env

env.hosts = ['192.168.1.100', '192.168.1.101']
env.port = 22
env.user = 'shinley'

def hostname():
    run('hostname')

def ls(path='.'):
    run('ls {}'.format(path))

def tail(path='/etc/passwd', line=10):
    sudo('tail -n {0} {1}'.format(line, path))
```
下面我们使用fab命令执行这个文件， 当fab命令执行时，默认引用当前目录下的fabfile.py文件， 我们也可以通过 `-f` 参数指定其它名称的文件。
在这个例子中， 我们使用了Fabric提供的三个指令， 分别是 run、sudo、env, 作用如下:
- run :执行远程命令
- sudo : 以sudo权限执行远程命令
- env： 保存配置信息的字典 
