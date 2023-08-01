import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="廉价好用机场汇总" tabindex="-1"><a class="header-anchor" href="#廉价好用机场汇总" aria-hidden="true">#</a> 廉价好用机场汇总</h1><h2 id="中国国际机场" tabindex="-1"><a class="header-anchor" href="#中国国际机场" aria-hidden="true">#</a> <a href="https://1.fish" target="_blank" rel="noopener noreferrer">中国国际机场`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>提供试用流量<br> 提供免流教程</p><h2 id="大航海" tabindex="-1"><a class="header-anchor" href="#大航海" aria-hidden="true">#</a> <a href="https://dhh.wtf/#/register?code=oyDUr3Dv" target="_blank" rel="noopener noreferrer">大航海`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p><code>1x</code> <code>3x</code> <code>0.1x</code></p><ol><li><a href="https://t.me/DHH6666" target="_blank" rel="noopener noreferrer">Telegram群组`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>关于流量倍率，节点的流量倍率均标注于节点名称后方，如x10，则您使用1G流量将会以10G流量扣费。</li><li>原则上不限制设备数量，但是严禁共享节点。</li><li>如无法使用节点，可通过工单反馈，建议提供使用的浏览器，软件，以及节点等信息，如未提供任何信息，可能会直接被关闭工单。</li></ol><h2 id="冲浪猫" tabindex="-1"><a class="header-anchor" href="#冲浪猫" aria-hidden="true">#</a> <a href="https://clm.lol/#/register?code=dJWBPLud" target="_blank" rel="noopener noreferrer">冲浪猫`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p><code>1x</code><br> 动态流媒体解锁 :<br> 当节点的解锁失效后能在十分钟内自动更换IP，无需人工干扰，真正做到长期稳定流媒体解锁。 同时我们全部节点解锁<code>ChatGPT</code>、<code>NewBing</code>！！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/dragonfruit.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dragonfruit_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "dragonfruit.html.vue"]]);
export {
  dragonfruit_html as default
};
