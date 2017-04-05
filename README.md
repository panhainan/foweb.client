# Foweb.client Framework

**一个针对Foweb框架搭建的简单的前端页面架构（实现技术：AngularJS + BootStrap）**

`Foweb`主要提供`API`供`Foweb.client`调用，这里为了能使项目能够更加通用，因此进行了一些小的封装，正正继续完善中。

## 使用文档 ##

注意：这里演示采用的是前端开发利器：`WebStorm`，因为其在开发的时候便可通过运行一个静态服务器来将项目部署边开发边调试，而且代码提示补全功能很强大，就不详细介绍了。也可以使用`IDEA`，不过得装一些用于前端开发的插件。或者你使用`Tomcat`来部署运行看效果，不过注意得阅读下面的使用介绍。


将项目`download`下来或者`clone`下来，然后用`WebStorm`打开即可，下面进行相应的配置和修改。

然后找到文件 `common/constant.js`
可以看到如下代码：

	var web_project_name = "/foweb-web";
	var web_project_host = "http://localhost:8080";
	var cfg_form = {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
	var cfg_json = {headers: {'Content-Type': 'application/json;charset=utf-8;'}};

将其中的`web_project_name`和`web_project_host`修改成自己对应的服务器项目运行名和运行地址。其他不需要修改。

接着只需要将该项目部署到静态服务器上即可，点击菜单栏`Run` => `Edit Configurations...` 会出现`Run/Debug Configurations`窗口，然后点击左上角的+号，然后选择`JavaScript Debug`，然后在出现的界面中填写相关的信息：`Name`，`URL`即可。
`Name`：随意，建议填写为项目名；
`URL`：点击浏览，选中该项目根目录中的`index.html`。

点击`OK`保存。

到这里，配置已经完成了。（很简单的，只要修改`web_project_name`和`web_project_host`即可）

接下来，你需要启动项目对应的服务器端，然后启动该项目。打开浏览器输入URL（即刚刚填写的）`http://localhost:63343/foweb.client/index.html`

即可看到效果（首页显示：爷，你终于舍得出来了），然后点击导航栏的测试案例（点我），如果服务器端运行正常（即能够正常的获取到数据库中的信息）并且数据库中有信息，即可看到一个列表的记录显示。可以对列表进行查看、删除、上下页操作，还有新建，查看会跳转到另一个页面，这里可以对信息进行修改。

注意这里服务器端采用了`RESTful`（一种软件架构风格，设计风格）。

API实例：

	GET     /foweb-web/testbean/     返回分页的记录  
	
	POST    /foweb-web/testbean/     提交保存操作
	
	PUT     /foweb-web/testbean/     提交修改操作
	
	GET     /foweb-web/testbean/6    获取id为6的记录
	
	DELETE  /foweb-web/testbean/6    删除id为6的记录


整个这些操作都可以在`Web`控制台中看到请求日志，可以看到该`client`应用对`Server`应用发起的请求，这里能够正常请求到是因为在服务器端解决了跨域访问限制问题。

下面是配置的演示图：
（为防止图片在此加载不出来，附上图片地址：<a href="http://odhtjea8i.bkt.clouddn.com/foweb/webstorm_1.gif" target="_blank" >配置演示.gif</a>）
![配置演示](http://odhtjea8i.bkt.clouddn.com/foweb/webstorm_1.gif)

下面是运行`client`测试`CRUD`等操作的演示图：
（为防止图片在此加载不出来，附上图片地址：<a href="http://odhtjea8i.bkt.clouddn.com/foweb/webstorm_2.gif" target="_blank" >操作演示.gif</a>）
![操作演示](http://odhtjea8i.bkt.clouddn.com/foweb/webstorm_2.gif)

## 源码解释 ##

正在制作中。。。敬请等待！

## 感谢 ##

觉得好的希望能够star一下，给颗星星，谢谢！


# 如果觉得好，就请支持一下，谢谢！  

<div>
<div  style="float:left;"><img src="http://onxe6sbvc.bkt.clouddn.com/alpay.jpg" width="200px"></img></div>

<div  style="float:left;margin-left:50px"><img src="http://onxe6sbvc.bkt.clouddn.com/wxpay.png" width="200px" ></img></div>

</div>
