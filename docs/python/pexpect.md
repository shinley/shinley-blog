# 自动化交互式的命令行pexpect

在linux下有一个expect软件，它和pexpect实现了相同的功能，不过expect可以在shell脚本中使用， Pexpect 是个纯 Python 语言实现的模块，它可以在python脚本中使用。
使用它们都可以轻松方便的实现与 ssh、ftp、passwd 和 telnet 等程序的自动交互。 

比如我们在工作中，公司为了安全，登录线上服务器，一般都会使用跳板机。我们首先登录跳板机，然后在从跳板机上再访问我们的目标服务器。 在我所在的公司的测试环境都要通过跳板机登录， 所以每天如果频繁的登录测试环境，就要不停的使用ssh登录我们的跳板机， 然后在交互式命令行输入密码，才能登录上我们的跳板机。机械重复的事情，最终会变得索然无味。

我们使用pexpect就可以简化这种操作，让脚本替我们输入用户名和密码，简化我们使用的交互式的命令。

我们以登录某台linux服务器为例, 登录时会提示输入密码, 如图所示:

<img :src="$withBase('/pexpect/lg.jpg')">

我们就用pexpect来简化我们的登录服务器的动作

首先，安装pexpect:

```Bash
pip install pexpect
```

编写lg.py脚本文件

```python
#!/usr/bin/env python3
import pexpect
try:
  passwd="chen"
  process = pexpect.spawn('/usr/bin/ssh chenxinlei@192.168.55.107')
  pexpect.expect("")

```