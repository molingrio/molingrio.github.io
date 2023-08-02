<template><div><h1 id="openwrt使用总结-以nanopi-r2s为例" tabindex="-1"><a class="header-anchor" href="#openwrt使用总结-以nanopi-r2s为例" aria-hidden="true">#</a> openwrt使用总结 - 以nanopi r2s为例</h1>
<h2 id="固件问题" tabindex="-1"><a class="header-anchor" href="#固件问题" aria-hidden="true">#</a> 固件问题</h2>
<p>买的设备自带Istore os，但是有几个重要的问题。</p>
<ol>
<li>软重启失效，任何形式的重启操作都会死机。只能强制断电来实现手动重启</li>
<li>运行不稳定。每次运行不超过12h后必死机。第一次发现是在早上（突然没有网络，也登不进管理页面。）</li>
<li>正常开启了几个插件，负载通常在0.8左右，并且内存占用和缓存一直是在肉眼可见的递增状态。死机总是在不经意间~</li>
</ol>
<p>在经历过<strong>把lan口设置为DHCP</strong>的蠢事后，管理页面彻底进不去了，而在reset后所有插件都不见了。还好拿到手后第一时间做了<strong>备份</strong>。但是由于软重启失效的缘故，备份还原的过程相当不顺利，几乎所有的插件都无法还原。此时产生了新的bug：</p>
<ol>
<li>状态页面一直提示我dns设置错误，连接失败</li>
<li>安装包时会提示一堆下载失败的提示。</li>
</ol>
<p>至此，这个系统卡已经报废了。我需要再找个tf卡刷固件。</p>
<p>我使用了<a href="https://etcher.balena.io/" target="_blank" rel="noopener noreferrer"><strong>balenaEtcher</strong><ExternalLinkIcon/></a>。刷固件方法很简单，就是进入工具——选盘(TF)——选择固件（.img / .gz）——刷写。不过建议先把卡手动格式化一下。这个<a href="https://rufus.ie/" target="_blank" rel="noopener noreferrer"><strong>rufus</strong><ExternalLinkIcon/></a>工具是自动格式化的，会更简便一点。</p>
<p>试了很多个第三方包，不知道是不是我的问题，无一例外全都无法启动。TF卡用的没问题，是sandisk ultra (c10).幸运的是，<a href="https://dl.friendlyelec.com/nanopir2c" target="_blank" rel="noopener noreferrer"><strong>friendlywrt</strong><ExternalLinkIcon/></a>官方包就没问题。插进去没过多久立马可以进管理页面。我使用的是<code v-pre>rk3328-sd-friendlywrt - 22.03-20230524.img.gz</code>.经过测试，没有任何上述的网络问题，执行<code v-pre>opkg update</code>的时候也丝滑流畅。我在导入原先的备份包时，只生效了一部分插件。openclash应该没问题，如果没有那就先安装一遍依赖再导入一次。而adguardhome就完全不起作用了。需要自己<strong>手动安装</strong>。</p>
<h2 id="插件问题" tabindex="-1"><a class="header-anchor" href="#插件问题" aria-hidden="true">#</a> 插件问题</h2>
<h3 id="adguardhome" tabindex="-1"><a class="header-anchor" href="#adguardhome" aria-hidden="true">#</a> AdguardHome</h3>
<h4 id="luci-app以及核心" tabindex="-1"><a class="header-anchor" href="#luci-app以及核心" aria-hidden="true">#</a> Luci-app以及核心</h4>
<p>第一步当然是安装插件的图形界面：</p>
<p><a href="https://github.com/kangwenhang/luci-app-adguardhome" target="_blank" rel="noopener noreferrer"><strong>luci-app-adguardhome</strong><ExternalLinkIcon/></a></p>
<p>下载后opkg命令安装，当然也可以用快捷方式<img src="https://i.mji.rip/2023/08/02/7f0810559362362393595ba023424056.png" alt="20230726012136" loading="lazy"></p>
<p>刷新或重启，“服务”中有adguardhome后，<strong>核心</strong>推荐在这里下载安装。</p>
<p>因为苦于<strong>核心更新报错</strong>，这个还是相对稳妥的。<img src="https://i.mji.rip/2023/08/02/891acd94913b44497e53b332a4ad9f10.png" alt="20230726012431" loading="lazy"></p>
<p>安装完毕后，如果仍然不识别核心版本，可以修改一下路径。</p>
<figure><img src="https://i.mji.rip/2023/08/02/7699c9145cb8dae220bc4862f0398fee.png" alt="20230726013117" tabindex="0" loading="lazy"><figcaption>20230726013117</figcaption></figure>
<p>执行文件的文件名就叫<code v-pre>AdGuardHome</code>，没有扩展名。</p>
<p>默认执行文件的路径是<code v-pre>/user/bin/AdGuardHome/AdGuardHome</code>，(路径包含文件)</p>
<p>但是通过系统内的软件包管理页面下载的AdGuardHome的执行文件路径是<code v-pre>/user/bin/AdGuardHome</code>，无法创建一个和已有文件夹同名的文件。</p>
<p>明白这一点，就很重要。</p>
<ul>
<li>
<p>如果出现了错误，在已安装包的列表里先删除<code v-pre>adguardhome</code></p>
</li>
<li>
<p>在终端执行命令：</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/bin/AdGuardHome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有Linkease，可以在文件管理直接删除文件夹。</p>
<p>Linkease安装一条代码搞定：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> http://fw.koolcenter.com/binary/LinkEase/Openwrt/install_linkease.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><a href="https://doc.linkease.com/zh/guide/linkease_storage/store.html#_7-openwrt" target="_blank" rel="noopener noreferrer">Linkease官方文档<ExternalLinkIcon/></a></strong></p>
<ul>
<li>
<p>重新下载包<code v-pre>adguardhome</code></p>
</li>
<li>
<p>执行文件路径改为<code v-pre>/user/bin/AdGuardHome</code></p>
</li>
</ul>
<p>大功告成！现在你应该可以看到版本号了。</p>
<p>收个尾。执行文件路径和工作目录重名了，把工作目录随意改改就行。</p>
<figure><img src="https://i.mji.rip/2023/08/02/1c5c11059a4abdfcaee61af098e2ab6c.png" alt="20230726020134" tabindex="0" loading="lazy"><figcaption>20230726020134</figcaption></figure>
<p>保存并应用！通过端口进入管理页面。</p>
<h4 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置" aria-hidden="true">#</a> 基本设置</h4>
<ul>
<li>上游dns地址：经测试全部可用</li>
</ul>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>223.5.5.5
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>选择并行请求。</p>
</li>
<li>
<p>Bootstrap DNS 服务器：前两个填写当地运营商的dns，可从<a href="https://dns.jiayongluyou.com/" target="_blank" rel="noopener noreferrer"><strong>这里</strong><ExternalLinkIcon/></a>查阅</p>
</li>
<li>
<p>别忘了最后点击<strong>应用</strong>。</p>
</li>
<li>
<p>DNS拦截列表（黑名单）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://anti-ad.net/easylist.txt
https://easylist-downloads.adblockplus.org/easylist.txt
https://raw.githubusercontent.com/banbendalao/ADgk/master/kill-baidu-ad.txt
https://sub.adtchrome.com/adt-chinalist-easylist.txt
https://raw.githubusercontent.com/vokins/yhosts/master/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从此AdGuardHome的设置就告一段落。</p>
</li>
</ul>
<h3 id="openclash" tabindex="-1"><a class="header-anchor" href="#openclash" aria-hidden="true">#</a> openclash</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<p><a href="https://github.com/vernesong/OpenClash" target="_blank" rel="noopener noreferrer"><strong>github主站(内核)</strong><ExternalLinkIcon/></a></p>
<p><a href="https://github.com/frainzy1477/luci-app-clash/releases" target="_blank" rel="noopener noreferrer"><strong>luci-app-openclash(图形界面)</strong><ExternalLinkIcon/></a>：</p>
<p>下载安装Luc 控制接口ipk <strong>luci-app-clash</strong>然后在更新页下载新的clash内核。</p>
<p>不过用我之前的备份应该能够恢复。</p>
<h4 id="配合adguardhome使用" tabindex="-1"><a class="header-anchor" href="#配合adguardhome使用" aria-hidden="true">#</a> 配合AdGuardHome使用</h4>
<ul>
<li>在设置好之后，adguardhome的控制台是接收不到任何数据的。</li>
</ul>
<p>因此，我们要在覆写设置（全局设置）下的DNS设置，勾选“自定义上游DNS服务器”。</p>
<figure><img src="https://i.mji.rip/2023/08/02/8c1e8325e1516e9066806ba0968bc117.png" alt="20230726155248" tabindex="0" loading="lazy"><figcaption>20230726155248</figcaption></figure>
<ul>
<li>向下滑动，上游dns服务器设置为<strong>Localhost:监听端口</strong>.</li>
</ul>
<figure><img src="https://i.mji.rip/2023/08/02/34d928417690d8640278565017d01138.png" alt="20230726155907" tabindex="0" loading="lazy"><figcaption>20230726155907</figcaption></figure>
<ul>
<li>应用配置。</li>
</ul>
<figure><img src="https://i.mji.rip/2023/08/02/5763e9856ee3d178ac950328bf385fad.png" alt="20230726160051" tabindex="0" loading="lazy"><figcaption>20230726160051</figcaption></figure>
<p>这样就可以正常运作了。</p>
<figure><img src="https://i.mji.rip/2023/08/02/7fb2c46cca79225ea9442891c3a549e2.png" alt="20230726160245" tabindex="0" loading="lazy"><figcaption>20230726160245</figcaption></figure>
<p>原理大概是这样的：</p>
<figure><img src="https://i.mji.rip/2023/08/02/afc246bd9bdc8f218b3c15428cb46521.png" alt="20230726182601" tabindex="0" loading="lazy"><figcaption>20230726182601</figcaption></figure>
<p>可以根据AdGuardHome监听的地址添加到openclash的自定义上游DNS服务器中。</p>
<p>网上的另一个版本是使用Openclash作为AdGuardHome的上游DNS服务器，但我认为那并不是更好的解决方法。</p>
<h4 id="游戏能够打开但是无法进入游戏" tabindex="-1"><a class="header-anchor" href="#游戏能够打开但是无法进入游戏" aria-hidden="true">#</a> 游戏能够打开但是无法进入游戏</h4>
<p>使用TUN模式。</p>
<h4 id="带宽只能跑一半" tabindex="-1"><a class="header-anchor" href="#带宽只能跑一半" aria-hidden="true">#</a> 带宽只能跑一半</h4>
<p>普通bug，重启插件，重设配置，重启r2s，速度恢复即可停止操作。然而TUN模式本来就对速度影响比较大，目前仅能跑80%速度。当然可能有各方面的原因，需要各位去探索。</p>
<h3 id="aria2" tabindex="-1"><a class="header-anchor" href="#aria2" aria-hidden="true">#</a> Aria2</h3>
<p>我没有手动安装过，是从备份里成功恢复的一个插件。</p>
<p>可以直接在系统软件包管理页面安装，没有难度。</p>
<ul>
<li>
<p>如果缺少一个webui管理页面，可下载<a href="https://github.com/mayswind/AriaNg/releases/tag/1.3.6" target="_blank" rel="noopener noreferrer"><strong>AriaNG</strong><ExternalLinkIcon/></a>，解压，把里面的<code v-pre>Index.html</code>和<code v-pre>license</code>上传到<code v-pre>/www/aria2</code>目录下。<br>
访问<a href="http://192.168.100.1/aria2" target="_blank" rel="noopener noreferrer">http://192.168.100.1/aria2<ExternalLinkIcon/></a>即可进入管理页面。</p>
</li>
<li>
<p>如果下载失败怎么办？</p>
<figure><img src="https://i.mji.rip/2023/08/02/7a2eb1b9d6855f5e78fa558f902a44ad.png" alt="20230726185959" tabindex="0" loading="lazy"><figcaption>20230726185959</figcaption></figure>
</li>
</ul>
<p>附加选项里添加这一条（忽略证书检查）</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>check-certificate=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>如果aria2无法启动怎么办？</p>
<p>确保下载目录和配置文件目录填写正确，并且该文件夹存在。</p>
</li>
</ul>
<h2 id="现状" tabindex="-1"><a class="header-anchor" href="#现状" aria-hidden="true">#</a> 现状</h2>
<p>该方案已经稳定运行几天，负载极低，温度50℃∓。</p>
<p>考虑到不稳定性，此类设备不建议长时间运行.</p>
<p>进入系统—计划任务，添加一条代码。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">45</span> <span class="token number">4</span> * * * <span class="token function">sleep</span> <span class="token number">70</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> /etc/banner <span class="token operator">&amp;&amp;</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思是，每日凌晨4：45分自动重启一次。</p>
<p>基本上将死机概率降低到很小。</p>
<p>参考地址：<a href="https://blog.csdn.net/x_qingh/article/details/125508580" target="_blank" rel="noopener noreferrer">CSDN<ExternalLinkIcon/></a></p>
</div></template>


