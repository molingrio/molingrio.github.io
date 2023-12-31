export const data = JSON.parse("{\"key\":\"v-fd0c78a0\",\"path\":\"/posts/.~network.html\",\"title\":\"openwrt使用总结 - 以nanopi r2s为例\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cover\":\"https://i.mji.rip/2023/08/02/a07310689d542f5fd2225a38470bf5ec.jpeg\",\"order\":3,\"date\":\"2023-07-25T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"network\",\"无线\",\"openwrt\",\"通讯\"],\"sticky\":true,\"star\":true,\"description\":\"openwrt使用总结 - 以nanopi r2s为例 固件问题 买的设备自带Istore os，但是有几个重要的问题。 软重启失效，任何形式的重启操作都会死机。只能强制断电来实现手动重启 运行不稳定。每次运行不超过12h后必死机。第一次发现是在早上（突然没有网络，也登不进管理页面。） 正常开启了几个插件，负载通常在0.8左右，并且内存占用和缓存一直是在肉眼可见的递增状态。死机总是在不经意间~ 在经历过把lan口设置为DHCP的蠢事后，管理页面彻底进不去了，而在reset后所有插件都不见了。还好拿到手后第一时间做了备份。但是由于软重启失效的缘故，备份还原的过程相当不顺利，几乎所有的插件都无法还原。此时产生了新的bug：\"},\"headers\":[{\"level\":2,\"title\":\"固件问题\",\"slug\":\"固件问题\",\"link\":\"#固件问题\",\"children\":[]},{\"level\":2,\"title\":\"插件问题\",\"slug\":\"插件问题\",\"link\":\"#插件问题\",\"children\":[{\"level\":3,\"title\":\"AdguardHome\",\"slug\":\"adguardhome\",\"link\":\"#adguardhome\",\"children\":[]},{\"level\":3,\"title\":\"openclash\",\"slug\":\"openclash\",\"link\":\"#openclash\",\"children\":[]},{\"level\":3,\"title\":\"Aria2\",\"slug\":\"aria2\",\"link\":\"#aria2\",\"children\":[]}]},{\"level\":2,\"title\":\"现状\",\"slug\":\"现状\",\"link\":\"#现状\",\"children\":[]}],\"readingTime\":{\"minutes\":5.69,\"words\":1708},\"filePathRelative\":\"posts/.~network.md\",\"localizedDate\":\"2023年7月25日\",\"excerpt\":\"<h1> openwrt使用总结 - 以nanopi r2s为例</h1>\\n<h2> 固件问题</h2>\\n<p>买的设备自带Istore os，但是有几个重要的问题。</p>\\n<ol>\\n<li>软重启失效，任何形式的重启操作都会死机。只能强制断电来实现手动重启</li>\\n<li>运行不稳定。每次运行不超过12h后必死机。第一次发现是在早上（突然没有网络，也登不进管理页面。）</li>\\n<li>正常开启了几个插件，负载通常在0.8左右，并且内存占用和缓存一直是在肉眼可见的递增状态。死机总是在不经意间~</li>\\n</ol>\\n<p>在经历过<strong>把lan口设置为DHCP</strong>的蠢事后，管理页面彻底进不去了，而在reset后所有插件都不见了。还好拿到手后第一时间做了<strong>备份</strong>。但是由于软重启失效的缘故，备份还原的过程相当不顺利，几乎所有的插件都无法还原。此时产生了新的bug：</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
