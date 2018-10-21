(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{172:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"自动化部署工具fabric"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署工具fabric","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化部署工具Fabric")]),t._v(" "),s("p",[t._v("Fabric是一个基于python(python2.7, python3.4+)实现的SSH命令行工具库，使用它可以非常方便的执行应用部署和系统管理操作。它提供了基础的操作组件， 可以方便的进行本地和远程shell命令的执行，文件上传、下载以及完整执行日志输出。")]),t._v(" "),s("p",[t._v("Fabric的作者也是paramiko的作者， 可以理解为Fabric是在paramiko的基础上做了更高一层的封装， 操作起来更加方便、简单。")]),t._v(" "),s("p",[t._v("Fabric既是一个python库， 也是一个命令行工具， 它的命令行工是不是Fabric， 而是fab.")]),t._v(" "),s("h2",{attrs:{id:"fabric安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fabric安装","aria-hidden":"true"}},[t._v("#")]),t._v(" Fabric安装")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" fabric\n")])])]),s("p",[t._v("安装完成以后，在命令行执行以下命令，验证Fabric是否安装正确")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("fab --help\n")])])]),s("p",[t._v("如果能正常输出，说明安装正确。")]),t._v(" "),s("h2",{attrs:{id:"fabric使用入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fabric使用入门","aria-hidden":"true"}},[t._v("#")]),t._v(" Fabric使用入门")]),t._v(" "),s("p",[t._v("新建fabfile.py文件，输入以下内容：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" fabric"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" run"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sudo"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" env\n\nenv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hosts "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'192.168.1.100'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'192.168.1.101'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nenv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("22")]),t._v("\nenv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'shinley'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("hostname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    run"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'hostname'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("ls")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    run"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'ls {}'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token builtin"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tail")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v("'/etc/passwd'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sudo"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'tail -n {0} {1}'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token builtin"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("下面我们使用fab命令执行这个文件， 当fab命令执行时，默认引用当前目录下的fabfile.py文件， 我们也可以通过 "),s("code",[t._v("-f")]),t._v(" 参数指定其它名称的文件。\n在这个例子中， 我们使用了Fabric提供的三个指令， 分别是 run、sudo、env, 作用如下:")]),t._v(" "),s("ul",[s("li",[t._v("run :执行远程命令")]),t._v(" "),s("li",[t._v("sudo : 以sudo权限执行远程命令")]),t._v(" "),s("li",[t._v("env： 保存配置信息的字典")])])])}],!1,null,null,null);r.options.__file="fabric.md";a.default=r.exports}}]);