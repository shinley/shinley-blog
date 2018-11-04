# Subprocess调用shell命令

我们在写python脚本的时间，很多时候，我们需要执行linux shell命令。 这时候我们可以使用subprocess.

Subprocess模块最在python2.4版本中引用的， 正如它名字所反映的， 这个模块用于创建和管理子进程 。Subprocess提供了很多的便利函数， 这些便利函数都是对Popen这个类的封装。

## subprocess的函数
1. call
它的定义如下
```python
subprocess.call(args, *, stdin=None, stout=None, stder=None, shell=False)
```
call函数将运行由args参数指定的命令直到命令结束。call函数的返回值是命令退出的状态码。


```python
import subprocess

subprocess.call(['ls', '-l'])

subprocess.call('exit 1', shell=True)
```
call函数执行的外部命令以一个字符串列表的形式进行传递， 如果设置了shell=True, 则可以使用一个字符串命令，而不是一个字符串列表来运行子进程 。 如果设置了shell=True, Python将先运行一个shell， 再用shell来解释整个字符串。

2. check_call

check_all函数的作用与call函数类似， 区别在于异常性交下返回的形式不同。对于call函数。 可以通过捕获call命令的返回值 判断命令是否执行成功。如果成功返回0， 否则返回非0; 对于check_all函数， 如果执行成功返回0 ， 如果执行失败， 抛出subprocess.CalledProcessError异常。

3. check_output
上面两个函数 call和check_call函数直接将命令的输出结果输出到命令行终端， 在实际工作中，我们有时候会需要对命令的结果做进一步的处理，这个时候我们可以使用check_output

```python
output = subprocess.check_output(['df', '-h'])
lines = output.split('\n')
for line in lines[1:-1]
  if line:
    print(line.split()[-2])
```

check_output 函数的返回值是命令行的执行结果， 显然无法像call函数一样通过返回退出状态码表示异常情奖品， 因此, checkout_output函数通过抛出一个subprocess.CalledProcessError异常来表示命令执行出错。
