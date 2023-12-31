import { defineComponent, ref, shallowRef, computed, onMounted, h } from "vue";
import { r, v, C } from "../app.589f1e43.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/shared";
import "@vueuse/core";
import "ts-debounce";
import "@waline/client/dist/pageview.mjs";
import "bcrypt-ts/browser";
const style = "";
const vuePlayground = "";
const R = (e) => JSON.parse(decodeURIComponent(e));
var S = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(e) {
  const i = r(), r$1 = ref(true), a = shallowRef(), l = shallowRef(), u = shallowRef(), o = computed(() => v({}, i, R(e.settings))), s = async () => {
    const [{ ReplStore: d, Repl: p }, { default: v2 }] = await Promise.all([import("@vue/repl"), import("@vue/repl/codemirror-editor")]);
    a.value = p, u.value = v2, l.value = new d({ serializedState: decodeURIComponent(e.files) }), o.value.vueVersion && await l.value.setVueVersion(o.value.vueVersion);
  };
  return onMounted(async () => {
    await s(), r$1.value = false;
  }), () => [h("div", { class: "vue-playground-wrapper" }, [e.title ? h("div", { class: "header" }, decodeURIComponent(e.title)) : null, h("div", { class: "repl-container" }, [r$1.value ? h(C, { class: "preview-loading", height: 192 }) : null, a.value ? h(a.value, { editor: u.value, store: l.value, autoResize: true, ...o.value, layout: "horizontal" }) : null])])];
} });
export {
  S as default
};
