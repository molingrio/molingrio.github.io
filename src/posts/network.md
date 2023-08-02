---
# 你可以自定义封面图片

cover: https://i.mji.rip/2023/08/02/a07310689d542f5fd2225a38470bf5ec.jpeg

# 这是侧边栏的顺序

order: 3
# 设置写作时间

date: 2023-07-25

# 一个页面可以有多个分类

category: 
    - 使用指南

  # 一个页面可以有多个标签

tag: 
    - network
    - 无线
    - openwrt
    - 通讯

  # 此页面会在文章列表置顶

sticky: true

  # 此页面会出现在文章收藏中

star: true
---

# openwrt使用总结 - 以nanopi r2s为例

## 固件问题

买的设备自带Istore os，但是有几个重要的问题。

1. 软重启失效，任何形式的重启操作都会死机。只能强制断电来实现手动重启
2. 运行不稳定。每次运行不超过12h后必死机。第一次发现是在早上（突然没有网络，也登不进管理页面。）
3. 正常开启了几个插件，负载通常在0.8左右，并且内存占用和缓存一直是在肉眼可见的递增状态。死机总是在不经意间~

在经历过**把lan口设置为DHCP**的蠢事后，管理页面彻底进不去了，而在reset后所有插件都不见了。还好拿到手后第一时间做了**备份**。但是由于软重启失效的缘故，备份还原的过程相当不顺利，几乎所有的插件都无法还原。此时产生了新的bug：

1. 状态页面一直提示我dns设置错误，连接失败
2. 安装包时会提示一堆下载失败的提示。

至此，这个系统卡已经报废了。我需要再找个tf卡刷固件。

我使用了[**balenaEtcher**](https://etcher.balena.io/)。刷固件方法很简单，就是进入工具——选盘(TF)——选择固件（.img / .gz）——刷写。不过建议先把卡手动格式化一下。这个[**rufus**](https://rufus.ie/)工具是自动格式化的，会更简便一点。

试了很多个第三方包，不知道是不是我的问题，无一例外全都无法启动。TF卡用的没问题，是sandisk ultra (c10).幸运的是，[**friendlywrt**](https://dl.friendlyelec.com/nanopir2c)官方包就没问题。插进去没过多久立马可以进管理页面。我使用的是`rk3328-sd-friendlywrt - 22.03-20230524.img.gz`.经过测试，没有任何上述的网络问题，执行`opkg update`的时候也丝滑流畅。我在导入原先的备份包时，只生效了一部分插件。openclash应该没问题，如果没有那就先安装一遍依赖再导入一次。而adguardhome就完全不起作用了。需要自己**手动安装**。

## 插件问题

### AdguardHome

#### Luci-app以及核心

第一步当然是安装插件的图形界面：

[**luci-app-adguardhome**](https://github.com/kangwenhang/luci-app-adguardhome)

下载后opkg命令安装，当然也可以用快捷方式![20230726012136](https://i.mji.rip/2023/08/02/7f0810559362362393595ba023424056.png)

刷新或重启，“服务”中有adguardhome后，**核心**推荐在这里下载安装。

因为苦于**核心更新报错**，这个还是相对稳妥的。![20230726012431](https://i.mji.rip/2023/08/02/891acd94913b44497e53b332a4ad9f10.png)

安装完毕后，如果仍然不识别核心版本，可以修改一下路径。

![20230726013117](https://i.mji.rip/2023/08/02/7699c9145cb8dae220bc4862f0398fee.png)

执行文件的文件名就叫`AdGuardHome`，没有扩展名。

默认执行文件的路径是`/user/bin/AdGuardHome/AdGuardHome`，(路径包含文件)

但是通过系统内的软件包管理页面下载的AdGuardHome的执行文件路径是`/user/bin/AdGuardHome`，无法创建一个和已有文件夹同名的文件。

明白这一点，就很重要。

- 如果出现了错误，在已安装包的列表里先删除`adguardhome`

- 在终端执行命令：

```sh
rm -f /usr/bin/AdGuardHome
```

如果有Linkease，可以在文件管理直接删除文件夹。

Linkease安装一条代码搞定：

```sh
sh -c "$(curl -sSL http://fw.koolcenter.com/binary/LinkEase/Openwrt/install_linkease.sh)"
```

**[Linkease官方文档](https://doc.linkease.com/zh/guide/linkease_storage/store.html#_7-openwrt)**

- 重新下载包`adguardhome`

- 执行文件路径改为`/user/bin/AdGuardHome`

大功告成！现在你应该可以看到版本号了。

收个尾。执行文件路径和工作目录重名了，把工作目录随意改改就行。

![20230726020134](https://i.mji.rip/2023/08/02/1c5c11059a4abdfcaee61af098e2ab6c.png)

保存并应用！通过端口进入管理页面。

#### 基本设置

- 上游dns地址：经测试全部可用

```txt
223.5.5.5
114.114.114.114
8.8.8.8
8.8.4.4
101.226.4.6
120.196.165.24
https://dns10.quad9.net/dns-query
https://dns.google/dns-query
https://doh.360.cn/dns-query
https://doh-jp.blahdns.com/dns-query
https://dns.alidns.com/dns-query
tls://dns.alidns.com
tls://dns.google
tls://1dot1dot1dot1.cloudflare-dns.com
```

- 选择并行请求。

- Bootstrap DNS 服务器：前两个填写当地运营商的dns，可从[**这里**](https://dns.jiayongluyou.com/)查阅

- 别忘了最后点击**应用**。

- DNS拦截列表（黑名单）：

  ```
  https://anti-ad.net/easylist.txt
  https://easylist-downloads.adblockplus.org/easylist.txt
  https://raw.githubusercontent.com/banbendalao/ADgk/master/kill-baidu-ad.txt
  https://sub.adtchrome.com/adt-chinalist-easylist.txt
  https://raw.githubusercontent.com/vokins/yhosts/master/hosts
  ```

  从此AdGuardHome的设置就告一段落。

### openclash

#### 安装

[**github主站(内核)**](https://github.com/vernesong/OpenClash)

[**luci-app-openclash(图形界面)**](https://github.com/frainzy1477/luci-app-clash/releases)：

下载安装Luc 控制接口ipk **luci-app-clash**然后在更新页下载新的clash内核。

不过用我之前的备份应该能够恢复。

#### 配合AdGuardHome使用

- 在设置好之后，adguardhome的控制台是接收不到任何数据的。

因此，我们要在覆写设置（全局设置）下的DNS设置，勾选“自定义上游DNS服务器”。

![20230726155248](https://i.mji.rip/2023/08/02/8c1e8325e1516e9066806ba0968bc117.png)

- 向下滑动，上游dns服务器设置为**Localhost:监听端口**.

![20230726155907](https://i.mji.rip/2023/08/02/34d928417690d8640278565017d01138.png)

- 应用配置。

![20230726160051](https://i.mji.rip/2023/08/02/5763e9856ee3d178ac950328bf385fad.png)

这样就可以正常运作了。

![20230726160245](https://i.mji.rip/2023/08/02/7fb2c46cca79225ea9442891c3a549e2.png)

原理大概是这样的：

![20230726182601](https://i.mji.rip/2023/08/02/afc246bd9bdc8f218b3c15428cb46521.png)

可以根据AdGuardHome监听的地址添加到openclash的自定义上游DNS服务器中。

网上的另一个版本是使用Openclash作为AdGuardHome的上游DNS服务器，但我认为那并不是更好的解决方法。

#### 游戏能够打开但是无法进入游戏

使用TUN模式。

#### 带宽只能跑一半

普通bug，重启插件，重设配置，重启r2s，速度恢复即可停止操作。然而TUN模式本来就对速度影响比较大，目前仅能跑80%速度。当然可能有各方面的原因，需要各位去探索。

### Aria2

我没有手动安装过，是从备份里成功恢复的一个插件。

可以直接在系统软件包管理页面安装，没有难度。

- 如果缺少一个webui管理页面，可下载[**AriaNG**](https://github.com/mayswind/AriaNg/releases/tag/1.3.6)，解压，把里面的`Index.html`和`license`上传到`/www/aria2`目录下。
  访问[http://192.168.100.1/aria2](http://192.168.100.1/aria2)即可进入管理页面。

- 如果下载失败怎么办？

  ![20230726185959](https://i.mji.rip/2023/08/02/7a2eb1b9d6855f5e78fa558f902a44ad.png)

附加选项里添加这一条（忽略证书检查）

```txt
check-certificate=false
```

- 如果aria2无法启动怎么办？

  确保下载目录和配置文件目录填写正确，并且该文件夹存在。

## 现状

该方案已经稳定运行几天，负载极低，温度50℃∓。

考虑到不稳定性，此类设备不建议长时间运行.

进入系统—计划任务，添加一条代码。

```sh
45 4 * * * sleep 70 && touch /etc/banner && reboot
```

意思是，每日凌晨4：45分自动重启一次。

基本上将死机概率降低到很小。

参考地址：[CSDN](https://blog.csdn.net/x_qingh/article/details/125508580)
