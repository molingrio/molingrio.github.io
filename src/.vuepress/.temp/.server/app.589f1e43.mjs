var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$3, inject, toRef, unref, getCurrentInstance, camelize, capitalize, shallowRef, Transition, watch, nextTick, onUnmounted, resolveComponent, TransitionGroup, provide, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isPlainObject, isLinkMailto, isLinkTel, isLinkExternal, ensureEndingSlash, removeEndingSlash } from "@vuepress/shared";
import { useRouter, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { tryOnMounted, tryOnUnmounted, noop, toValue, isClient } from "@vueuse/shared";
import { useElementSize, useWindowSize, useWindowScroll, useClipboard, useEventListener, useStorage, useToggle, useDebounceFn, useMutationObserver, useFullscreen, useScrollLock, useThrottleFn, usePreferredDark, useSessionStorage, onClickOutside, computedEager } from "@vueuse/core";
import "ts-debounce";
import { pageviewCount } from "@waline/client/dist/pageview.mjs";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-76636783.js"
  ).then(({ data }) => data),
  // path: /intro.html
  "v-184f4da6": () => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-92accd96.js"
  ).then(({ data }) => data),
  // path: /slides.html
  "v-2e3eac9e": () => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-b487f6a9.js"
  ).then(({ data }) => data),
  // path: /verification.html
  "v-3b3841c5": () => import(
    /* webpackChunkName: "v-3b3841c5" */
    "./assets/verification.html-84592901.js"
  ).then(({ data }) => data),
  // path: /demo/
  "v-1473bf53": () => import(
    /* webpackChunkName: "v-1473bf53" */
    "./assets/index.html-7f8ae818.js"
  ).then(({ data }) => data),
  // path: /demo/disable.html
  "v-4e65ec78": () => import(
    /* webpackChunkName: "v-4e65ec78" */
    "./assets/disable.html-779f2e1d.js"
  ).then(({ data }) => data),
  // path: /demo/encrypt.html
  "v-c151bf32": () => import(
    /* webpackChunkName: "v-c151bf32" */
    "./assets/encrypt.html-97677152.js"
  ).then(({ data }) => data),
  // path: /demo/markdown.html
  "v-438ffe52": () => import(
    /* webpackChunkName: "v-438ffe52" */
    "./assets/markdown.html-7764e131.js"
  ).then(({ data }) => data),
  // path: /demo/page.html
  "v-6e19edb7": () => import(
    /* webpackChunkName: "v-6e19edb7" */
    "./assets/page.html-58d76abf.js"
  ).then(({ data }) => data),
  // path: /posts/husky.html
  "v-7c9e35cc": () => import(
    /* webpackChunkName: "v-7c9e35cc" */
    "./assets/husky.html-bacc9a95.js"
  ).then(({ data }) => data),
  // path: /posts/dragonfruit.html
  "v-24b7c48d": () => import(
    /* webpackChunkName: "v-24b7c48d" */
    "./assets/dragonfruit.html-812c0eaf.js"
  ).then(({ data }) => data),
  // path: /posts/strawberry.html
  "v-f0ec4556": () => import(
    /* webpackChunkName: "v-f0ec4556" */
    "./assets/strawberry.html-a0b1cbde.js"
  ).then(({ data }) => data),
  // path: /posts/tomato.html
  "v-df8b6e0c": () => import(
    /* webpackChunkName: "v-df8b6e0c" */
    "./assets/tomato.html-49dff064.js"
  ).then(({ data }) => data),
  // path: /posts/elementslaw.html
  "v-6408b763": () => import(
    /* webpackChunkName: "v-6408b763" */
    "./assets/elementslaw.html-673a471a.js"
  ).then(({ data }) => data),
  // path: /posts/network.html
  "v-3ff14240": () => import(
    /* webpackChunkName: "v-3ff14240" */
    "./assets/network.html-36ad7211.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-11af1172.js"
  ).then(({ data }) => data),
  // path: /posts/
  "v-e1e3da16": () => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-2ffbac92.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d97545f8.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-d50ee0ce.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-b497b9d9.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-8e70138e.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-d52bf14b.js"
  ).then(({ data }) => data),
  // path: /category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-03d57386": () => import(
    /* webpackChunkName: "v-03d57386" */
    "./assets/index.html-8ab51895.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%A6%81%E7%94%A8/
  "v-83e1f92e": () => import(
    /* webpackChunkName: "v-83e1f92e" */
    "./assets/index.html-bbae9542.js"
  ).then(({ data }) => data),
  // path: /category/%E5%93%88%E5%A3%AB%E5%A5%87%E6%8B%85%E4%BB%BB%E8%AD%A6%E5%AF%9F%E7%9A%84%E5%8F%AF%E8%A1%8C%E6%80%A7%E7%A0%94%E7%A9%B6/
  "v-5e7d3ae0": () => import(
    /* webpackChunkName: "v-5e7d3ae0" */
    "./assets/index.html-feacfbe4.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/
  "v-1e447d61": () => import(
    /* webpackChunkName: "v-1e447d61" */
    "./assets/index.html-76e5354e.js"
  ).then(({ data }) => data),
  // path: /category/vpn/
  "v-65f6c1d3": () => import(
    /* webpackChunkName: "v-65f6c1d3" */
    "./assets/index.html-0130a288.js"
  ).then(({ data }) => data),
  // path: /tag/markdown/
  "v-484552dc": () => import(
    /* webpackChunkName: "v-484552dc" */
    "./assets/index.html-f288eb87.js"
  ).then(({ data }) => data),
  // path: /category/%E9%9A%8F%E7%AC%94/
  "v-60649a06": () => import(
    /* webpackChunkName: "v-60649a06" */
    "./assets/index.html-b78c104f.js"
  ).then(({ data }) => data),
  // path: /tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/
  "v-a378ad66": () => import(
    /* webpackChunkName: "v-a378ad66" */
    "./assets/index.html-b0b82e27.js"
  ).then(({ data }) => data),
  // path: /tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-7b167472": () => import(
    /* webpackChunkName: "v-7b167472" */
    "./assets/index.html-350582a6.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%8B%97%E7%8B%97/
  "v-a0483a7e": () => import(
    /* webpackChunkName: "v-a0483a7e" */
    "./assets/index.html-c0602d49.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%93%88%E5%A3%AB%E5%A5%87/
  "v-655561c6": () => import(
    /* webpackChunkName: "v-655561c6" */
    "./assets/index.html-2a3074b2.js"
  ).then(({ data }) => data),
  // path: /tag/%E8%AD%A6%E5%AF%9F/
  "v-551ba7a4": () => import(
    /* webpackChunkName: "v-551ba7a4" */
    "./assets/index.html-160393ff.js"
  ).then(({ data }) => data),
  // path: /tag/vpn/
  "v-b302fdee": () => import(
    /* webpackChunkName: "v-b302fdee" */
    "./assets/index.html-e25d1053.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%9C%BA%E5%9C%BA/
  "v-39cc843c": () => import(
    /* webpackChunkName: "v-39cc843c" */
    "./assets/index.html-d351e728.js"
  ).then(({ data }) => data),
  // path: /tag/emotion/
  "v-5a3e80fc": () => import(
    /* webpackChunkName: "v-5a3e80fc" */
    "./assets/index.html-7e9ce916.js"
  ).then(({ data }) => data),
  // path: /tag/damage/
  "v-49ab4c92": () => import(
    /* webpackChunkName: "v-49ab4c92" */
    "./assets/index.html-1c9a3a40.js"
  ).then(({ data }) => data),
  // path: /tag/ai/
  "v-0da0abf9": () => import(
    /* webpackChunkName: "v-0da0abf9" */
    "./assets/index.html-c6ddc06b.js"
  ).then(({ data }) => data),
  // path: /tag/aigc/
  "v-2826701d": () => import(
    /* webpackChunkName: "v-2826701d" */
    "./assets/index.html-6dcf5244.js"
  ).then(({ data }) => data),
  // path: /tag/stable-diffusion/
  "v-63ee6e4e": () => import(
    /* webpackChunkName: "v-63ee6e4e" */
    "./assets/index.html-6bdcc4de.js"
  ).then(({ data }) => data),
  // path: /tag/network/
  "v-49627fe2": () => import(
    /* webpackChunkName: "v-49627fe2" */
    "./assets/index.html-df462570.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%97%A0%E7%BA%BF/
  "v-40d48f2c": () => import(
    /* webpackChunkName: "v-40d48f2c" */
    "./assets/index.html-379018cf.js"
  ).then(({ data }) => data),
  // path: /tag/openwrt/
  "v-6f0097ee": () => import(
    /* webpackChunkName: "v-6f0097ee" */
    "./assets/index.html-251cbb81.js"
  ).then(({ data }) => data),
  // path: /tag/%E9%80%9A%E8%AE%AF/
  "v-9024c41e": () => import(
    /* webpackChunkName: "v-9024c41e" */
    "./assets/index.html-3761f172.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-CN","title":"MOLINGRIO \\t ©莫凌","description":"莫凌博客","head":[],"locales":{}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-96140ff4.js"
  )),
  // path: /intro.html
  "v-184f4da6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-184f4da6" */
    "./assets/intro.html-e1619435.js"
  )),
  // path: /slides.html
  "v-2e3eac9e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-2f4cd195.js"
  )),
  // path: /verification.html
  "v-3b3841c5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3b3841c5" */
    "./assets/verification.html-520308d2.js"
  )),
  // path: /demo/
  "v-1473bf53": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1473bf53" */
    "./assets/index.html-f9d81d52.js"
  )),
  // path: /demo/disable.html
  "v-4e65ec78": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4e65ec78" */
    "./assets/disable.html-2c1176fb.js"
  )),
  // path: /demo/encrypt.html
  "v-c151bf32": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c151bf32" */
    "./assets/encrypt.html-bf876363.js"
  )),
  // path: /demo/markdown.html
  "v-438ffe52": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-438ffe52" */
    "./assets/markdown.html-8ae8237d.js"
  )),
  // path: /demo/page.html
  "v-6e19edb7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6e19edb7" */
    "./assets/page.html-1ccb9879.js"
  )),
  // path: /posts/husky.html
  "v-7c9e35cc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7c9e35cc" */
    "./assets/husky.html-82df6fbe.js"
  )),
  // path: /posts/dragonfruit.html
  "v-24b7c48d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-24b7c48d" */
    "./assets/dragonfruit.html-710843d1.js"
  )),
  // path: /posts/strawberry.html
  "v-f0ec4556": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f0ec4556" */
    "./assets/strawberry.html-ee646e48.js"
  )),
  // path: /posts/tomato.html
  "v-df8b6e0c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-df8b6e0c" */
    "./assets/tomato.html-789992af.js"
  )),
  // path: /posts/elementslaw.html
  "v-6408b763": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6408b763" */
    "./assets/elementslaw.html-fa4f3b84.js"
  )),
  // path: /posts/network.html
  "v-3ff14240": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3ff14240" */
    "./assets/network.html-face676c.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /posts/
  "v-e1e3da16": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-fc56c7e8.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d8e9a019.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-dbcf72de.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-6fe96b5b.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e9483f18.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-0e2d15e2.js"
  )),
  // path: /category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-03d57386": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-03d57386" */
    "./assets/index.html-4c135ae0.js"
  )),
  // path: /tag/%E7%A6%81%E7%94%A8/
  "v-83e1f92e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-83e1f92e" */
    "./assets/index.html-46b121bf.js"
  )),
  // path: /category/%E5%93%88%E5%A3%AB%E5%A5%87%E6%8B%85%E4%BB%BB%E8%AD%A6%E5%AF%9F%E7%9A%84%E5%8F%AF%E8%A1%8C%E6%80%A7%E7%A0%94%E7%A9%B6/
  "v-5e7d3ae0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5e7d3ae0" */
    "./assets/index.html-91c40ba7.js"
  )),
  // path: /tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/
  "v-1e447d61": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1e447d61" */
    "./assets/index.html-eaba2231.js"
  )),
  // path: /category/vpn/
  "v-65f6c1d3": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-65f6c1d3" */
    "./assets/index.html-e04b4918.js"
  )),
  // path: /tag/markdown/
  "v-484552dc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-484552dc" */
    "./assets/index.html-e638fa4c.js"
  )),
  // path: /category/%E9%9A%8F%E7%AC%94/
  "v-60649a06": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-60649a06" */
    "./assets/index.html-c094f30c.js"
  )),
  // path: /tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/
  "v-a378ad66": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a378ad66" */
    "./assets/index.html-5d254e77.js"
  )),
  // path: /tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-7b167472": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7b167472" */
    "./assets/index.html-eb5f66a0.js"
  )),
  // path: /tag/%E7%8B%97%E7%8B%97/
  "v-a0483a7e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a0483a7e" */
    "./assets/index.html-3b8221ec.js"
  )),
  // path: /tag/%E5%93%88%E5%A3%AB%E5%A5%87/
  "v-655561c6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-655561c6" */
    "./assets/index.html-24d7ca12.js"
  )),
  // path: /tag/%E8%AD%A6%E5%AF%9F/
  "v-551ba7a4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-551ba7a4" */
    "./assets/index.html-871c7228.js"
  )),
  // path: /tag/vpn/
  "v-b302fdee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b302fdee" */
    "./assets/index.html-aebd9f3e.js"
  )),
  // path: /tag/%E6%9C%BA%E5%9C%BA/
  "v-39cc843c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-39cc843c" */
    "./assets/index.html-4f3f74c5.js"
  )),
  // path: /tag/emotion/
  "v-5a3e80fc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5a3e80fc" */
    "./assets/index.html-fa4f3ff8.js"
  )),
  // path: /tag/damage/
  "v-49ab4c92": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-49ab4c92" */
    "./assets/index.html-ec8a8290.js"
  )),
  // path: /tag/ai/
  "v-0da0abf9": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0da0abf9" */
    "./assets/index.html-063749b4.js"
  )),
  // path: /tag/aigc/
  "v-2826701d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2826701d" */
    "./assets/index.html-fe5abe31.js"
  )),
  // path: /tag/stable-diffusion/
  "v-63ee6e4e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-63ee6e4e" */
    "./assets/index.html-9750dbb1.js"
  )),
  // path: /tag/network/
  "v-49627fe2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-49627fe2" */
    "./assets/index.html-e8b3c688.js"
  )),
  // path: /tag/%E6%97%A0%E7%BA%BF/
  "v-40d48f2c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-40d48f2c" */
    "./assets/index.html-ee3e15a8.js"
  )),
  // path: /tag/openwrt/
  "v-6f0097ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6f0097ee" */
    "./assets/index.html-03c403c7.js"
  )),
  // path: /tag/%E9%80%9A%E8%AE%AF/
  "v-9024c41e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9024c41e" */
    "./assets/index.html-5cadced0.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page, siteLocale) => page.lang || siteLocale.lang || "en-US",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$3(pageComponent.value)
    ) : (
      // fallback content
      h$3(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return { b: b2, r: r2 };
};
var _a$1 = freb(fleb, 2), fl$1 = _a$1.b, revfl = _a$1.r;
fl$1[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$5 = 0; i$5 < 32768; ++i$5) {
  var x$2 = (i$5 & 43690) >> 1 | (i$5 & 21845) << 1;
  x$2 = (x$2 & 52428) >> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >> 4 | (x$2 & 3855) << 4;
  rev[i$5] = ((x$2 & 65280) >> 8 | (x$2 & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$5 = 0; i$5 < 144; ++i$5)
  flt[i$5] = 8;
for (var i$5 = 144; i$5 < 256; ++i$5)
  flt[i$5] = 9;
for (var i$5 = 256; i$5 < 280; ++i$5)
  flt[i$5] = 7;
for (var i$5 = 280; i$5 < 288; ++i$5)
  flt[i$5] = 8;
var fdt = new u8(32);
for (var i$5 = 0; i$5 < 32; ++i$5)
  fdt[i$5] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new u8(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, st, buf, dict) {
  var sl2 = dat.length, dl2 = dict ? dict.length : 0;
  if (!sl2 || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st.i != 2;
  var noSt = st.i;
  if (!buf)
    buf = new u8(sl2 * 3);
  var cbuf = function(l3) {
    var bl2 = buf.length;
    if (l3 > bl2) {
      var nbuf = new u8(Math.max(bl2 * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl2 * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl2) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl2 = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl2);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl2; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl$1[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl2 - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const u$2 = ({ name: e2 = "", color: t2 = "currentColor" }, { slots: n2 }) => {
  var o2;
  return h$3("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: t2, "aria-label": `${e2} icon` }, (o2 = n2.default) == null ? void 0 : o2.call(n2));
};
u$2.displayName = "IconBase";
const C$4 = ({ size: e2 = 48, stroke: t2 = 4, wrapper: n2 = true, height: o2 = 2 * e2 }) => {
  const i2 = h$3("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$3("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$3("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": t2, "stroke-linecap": "round" }, [h$3("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$3("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return n2 ? h$3("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${o2}px` }, i2) : i2;
};
C$4.displayName = "LoadingIcon";
const oe = (e2, { slots: t2 }) => {
  var n2;
  return (n2 = t2.default) == null ? void 0 : n2.call(t2);
}, pe$2 = (e2 = "") => {
  if (e2) {
    if (typeof e2 == "number")
      return new Date(e2);
    const t2 = Date.parse(e2.toString());
    if (!Number.isNaN(t2))
      return new Date(t2);
  }
  return null;
}, he$2 = (e2, t2) => {
  let n2 = 1;
  for (let o2 = 0; o2 < e2.length; o2++)
    n2 += e2.charCodeAt(o2), n2 += n2 << 10, n2 ^= n2 >> 6;
  return n2 += n2 << 3, n2 ^= n2 >> 11, n2 % t2;
}, p = Array.isArray, fe$2 = (e2) => typeof e2 == "function", ve$1 = (e2) => typeof e2 == "string";
var $$2 = (e2) => e2.startsWith("ftp://"), h$2 = (e2) => /^(https?:)?\/\//.test(e2), we$3 = /.md((\?|#).*)?$/, ye$2 = (e2, t2 = "/") => !!(h$2(e2) || $$2(e2) || e2.startsWith("/") && !e2.startsWith(t2) && !we$3.test(e2)), m$5 = (e2) => Object.prototype.toString.call(e2) === "[object Object]";
function $e$1() {
  const e2 = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e2.value = true;
  }), e2;
}
function ze$1(e2) {
  return $e$1(), computed(() => !!e2());
}
const Re$2 = (e2) => typeof e2 == "function", a$5 = (e2) => typeof e2 == "string", z$3 = (e2, t2) => a$5(e2) && e2.startsWith(t2), Pe$2 = (e2, t2) => a$5(e2) && e2.endsWith(t2), M$4 = Object.entries, _e$1 = Object.fromEntries, f$2 = Object.keys, v$5 = (e2, ...t2) => {
  if (t2.length === 0)
    return e2;
  const n2 = t2.shift() || null;
  return n2 && M$4(n2).forEach(([o2, i2]) => {
    o2 === "__proto__" || o2 === "constructor" || (m$5(e2[o2]) && m$5(i2) ? v$5(e2[o2], i2) : p(i2) ? e2[o2] = [...i2] : m$5(i2) ? e2[o2] = { ...i2 } : e2[o2] = n2[o2]);
  }), v$5(e2, ...t2);
}, R$3 = (e2) => (e2.endsWith(".md") && (e2 = `${e2.slice(0, -3)}.html`), !e2.endsWith("/") && !e2.endsWith(".html") && (e2 = `${e2}.html`), e2 = e2.replace(/(^|\/)(?:README|index).html$/i, "$1"), e2), A$5 = (e2) => {
  const [t2, n2 = ""] = e2.split("#");
  return t2 ? `${R$3(t2)}${n2 ? `#${n2}` : ""}` : e2;
}, N$2 = (e2) => m$5(e2) && a$5(e2.name), Te$1 = (e2, t2 = false) => e2 ? p(e2) ? e2.map((n2) => a$5(n2) ? { name: n2 } : N$2(n2) ? n2 : null).filter((n2) => n2 !== null) : a$5(e2) ? [{ name: e2 }] : N$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], g$4 = (e2, t2) => {
  if (e2) {
    if (p(e2) && e2.every(a$5))
      return e2;
    if (a$5(e2))
      return [e2];
    console.error(`Expect ${t2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, je$1 = (e2) => g$4(e2, "category"), Be$1 = (e2) => g$4(e2, "tag"), Oe$1 = (e2) => z$3(e2, "/");
let De$2 = class De {
  constructor() {
    __publicField(this, "containerElement");
    __publicField(this, "messageElements", {});
    const t2 = "message-container", n2 = document.getElementById(t2);
    n2 ? this.containerElement = n2 : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, n2 = 2e3) {
    const o2 = document.createElement("div"), i2 = Date.now();
    return o2.className = "message move-in", o2.innerHTML = t2, this.containerElement.appendChild(o2), this.messageElements[i2] = o2, n2 > 0 && setTimeout(() => {
      this.close(i2);
    }, n2), i2;
  }
  close(t2) {
    if (t2) {
      const n2 = this.messageElements[t2];
      n2.classList.remove("move-in"), n2.classList.add("move-out"), n2.addEventListener("animationend", () => {
        n2.remove(), delete this.messageElements[t2];
      });
    } else
      f$2(this.messageElements).forEach((n2) => this.close(Number(n2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
const P$4 = /#.*$/u, _$3 = (e2) => {
  const t2 = P$4.exec(e2);
  return t2 ? t2[0] : "";
}, b$1 = (e2) => decodeURI(e2).replace(P$4, "").replace(/(index)?\.(md|html)$/, ""), Ge$1 = (e2, t2) => {
  if (t2 === void 0)
    return false;
  const n2 = b$1(e2.path), o2 = b$1(t2), i2 = _$3(t2);
  return i2 ? i2 === e2.hash && (!o2 || n2 === o2) : n2 === o2;
};
const Fe$2 = (e2) => {
  const t2 = Buffer.from(e2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(t2, true)));
}, Ke$2 = (e2) => h$2(e2) ? e2 : `https://github.com/${e2}`, qe$1 = (e2) => !h$2(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, w = (e2, ...t2) => {
  const n2 = e2.resolve(...t2), o2 = n2.matched[n2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return n2;
  const { redirect: i2 } = o2, r2 = fe$2(i2) ? i2(n2) : i2, c2 = ve$1(r2) ? { path: r2 } : r2;
  return w(e2, { hash: n2.hash, query: n2.query, params: n2.params, ...c2 });
}, y$3 = (e2) => {
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(e2.button !== void 0 && e2.button !== 0)) {
    if (e2.currentTarget) {
      const t2 = e2.currentTarget.getAttribute("target");
      if (t2 != null && t2.match(/\b_blank\b/i))
        return;
    }
    return e2.preventDefault(), true;
  }
}, T$1 = (e2) => {
  const t2 = useRouter(), n2 = useRoute(), o2 = computed(() => w(t2, unref(e2))), i2 = computed(() => o2.value.fullPath === n2.fullPath), r2 = (c2 = {}) => y$3(c2) ? t2.push(unref(e2)).catch() : Promise.resolve();
  return { route: o2, href: computed(() => o2.value.href), isActive: i2, navigate: r2 };
};
defineComponent({ name: "RouterLink", props: { to: { type: String, required: true } }, slots: Object, setup(e2, { slots: t2 }) {
  const n2 = toRef(e2, "to"), o2 = T$1(n2);
  return () => {
    var i2;
    return h$3("a", { class: ["vp-link", { "vp-active": o2.isActive.value }], href: o2.href.value, onClick: o2.navigate }, (i2 = t2.default) == null ? void 0 : i2.call(t2, o2));
  };
} });
const j$2 = ({ to: e2 = "" }, { slots: t2 }) => {
  var n2;
  const o2 = useRouter(), i2 = (r2 = {}) => y$3(r2) ? o2.push(e2).catch() : Promise.resolve();
  return h$3("a", { class: "vp-link", href: withBase(A$5(e2)), onClick: i2 }, (n2 = t2.default) == null ? void 0 : n2.call(t2));
};
j$2.displayName = "VPLink";
const B$2 = () => h$3(u$2, { name: "github" }, () => h$3("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
B$2.displayName = "GitHubIcon";
const H$3 = () => h$3(u$2, { name: "gitlab" }, () => h$3("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
H$3.displayName = "GitLabIcon";
const O$2 = () => h$3(u$2, { name: "gitee" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
O$2.displayName = "GiteeIcon";
const D$2 = () => h$3(u$2, { name: "bitbucket" }, () => h$3("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
D$2.displayName = "BitbucketIcon";
const G$2 = () => h$3(u$2, { name: "source" }, () => h$3("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
G$2.displayName = "SourceIcon";
const Qe$2 = (e2, t2) => {
  const n2 = t2 ? t2._instance : getCurrentInstance();
  return m$5(n2 == null ? void 0 : n2.appContext.components) && (e2 in n2.appContext.components || camelize(e2) in n2.appContext.components || capitalize(camelize(e2)) in n2.appContext.components);
}, V$3 = () => ze$1(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), Xe$2 = () => {
  const e2 = V$3();
  return computed(() => e2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, Ze$2 = (e2) => {
  const t2 = useRouteLocale();
  return computed(() => e2[t2.value]);
};
const defaultDocument = isClient ? window.document : void 0;
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el22) => {
      scriptTag.value = el22;
      resolve(el22);
      return el22;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el2) {
      el2 = document2.createElement("script");
      el2.type = type;
      el2.async = async;
      el2.src = toValue(src);
      if (defer)
        el2.defer = defer;
      if (crossOrigin)
        el2.crossOrigin = crossOrigin;
      if (noModule)
        el2.noModule = noModule;
      if (referrerPolicy)
        el2.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el2 == null ? void 0 : el2.setAttribute(name, value));
      shouldAppend = true;
    } else if (el2.hasAttribute("data-loaded")) {
      resolveWithElement(el2);
    }
    el2.addEventListener("error", (event) => reject(event));
    el2.addEventListener("abort", (event) => reject(event));
    el2.addEventListener("load", () => {
      el2.setAttribute("data-loaded", "true");
      onLoaded(el2);
      resolveWithElement(el2);
    });
    if (shouldAppend)
      el2 = document2.head.appendChild(el2);
    if (!waitForScriptLoad)
      resolveWithElement(el2);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el2)
      document2.head.removeChild(el2);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
const badge = "";
const o$6 = ({ type: r2 = "info", text: e2 = "", vertical: i2, color: l2 }, { slots: t2 }) => {
  var a2;
  return h$3("span", { class: ["vp-badge", r2, { diy: l2 }], style: { verticalAlign: i2 ?? false, backgroundColor: l2 ?? false } }, ((a2 = t2.default) == null ? void 0 : a2.call(t2)) || e2);
};
o$6.displayName = "Badge";
const fontIcon = "";
var m$4 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"fas fa-"}${o2.icon}`;
    return n2.push("fa-fw fa-sm"), n2.push(o2.icon.includes(" ") ? o2.icon : t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), f$2(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$3("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$5 = () => h$3(u$2, { name: "back-to-top" }, () => [h$3("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$3("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$5.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var P$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 100 }, noProgress: Boolean }, setup(e2) {
  const r2 = usePageFrontmatter(), s2 = Ze$2({ "/": { "backToTop": "返回顶部" } }), a2 = shallowRef(), { height: n2 } = useElementSize(a2), { height: p2 } = useWindowSize(), { y: t2 } = useWindowScroll(), u2 = computed(() => r2.value.backToTop !== false && t2.value > e2.threshold), c2 = computed(() => t2.value / (n2.value - p2.value));
  return onMounted(() => {
    a2.value = document.body;
  }), () => h$3(Transition, { name: "fade" }, () => u2.value ? h$3("button", { type: "button", class: "vp-back-to-top-button", "aria-label": s2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, [e2.noProgress ? null : h$3("svg", { class: "vp-scroll-progress" }, h$3("circle", { cx: "50%", cy: "50%", style: { "stroke-dasharray": `calc(${Math.PI * c2.value * 100}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${4 * Math.PI}px)` } })), h$3(l$5)]) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Qe$2("Badge"))
      app.component("Badge", o$6);
    if (!Qe$2("FontIcon"))
      app.component("FontIcon", m$4);
  },
  setup: () => {
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
  },
  rootComponents: [
    () => h$3(P$3, {})
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
const autoCatalog = "";
let t$8 = () => null;
const n$9 = Symbol(""), a$4 = (o2) => {
  t$8 = o2;
}, c$3 = () => inject(n$9), l$4 = (o2) => {
  o2.provide(n$9, t$8);
};
var N$1 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(r2) {
  const u2 = c$3(), f2 = Ze$2({ "/": { "title": "目录", "empty": "暂无目录" } }), _2 = usePageData(), T2 = useRouter(), E2 = useSiteData(), O2 = (s2) => {
    const p2 = s2["I"];
    return typeof p2 > "u" || p2;
  }, b2 = () => {
    const s2 = r2.base || _2.value.path.replace(/\/[^/]+$/, "/"), p2 = T2.getRoutes(), h2 = [];
    return p2.filter(({ meta: t2, path: l2 }) => {
      if (!z$3(l2, s2) || l2 === s2)
        return false;
      if (s2 === "/") {
        const a2 = f$2(E2.value.locales).filter((n2) => n2 !== "/");
        if (l2 === "/404.html" || a2.some((n2) => z$3(l2, n2)))
          return false;
      }
      return (Pe$2(l2, ".html") && !Pe$2(l2, "/index.html") || Pe$2(l2, "/")) && O2(t2);
    }).map(({ path: t2, meta: l2 }) => {
      const a2 = t2.substring(s2.length).split("/").length;
      return { title: l2["t"] || "", icon: l2["i"], base: t2.replace(/\/[^/]+\/?$/, "/"), order: l2["O"] || null, level: Pe$2(t2, "/") ? a2 - 1 : a2, path: t2 };
    }).filter(({ title: t2, level: l2 }) => t2 && l2 <= r2.level).sort(({ title: t2, level: l2, path: a2, order: n2 }, { title: c2, level: o2, path: d2, order: i2 }) => l2 - o2 || (Pe$2(a2, "/index.html") ? -1 : Pe$2(d2, "/index.html") ? 1 : n2 === null ? i2 === null ? t2.localeCompare(c2) : i2 : i2 === null ? n2 : n2 > 0 ? i2 > 0 ? n2 - i2 : -1 : i2 < 0 ? n2 - i2 : 1)).forEach((t2) => {
      var l2;
      const { base: a2, level: n2 } = t2;
      switch (n2) {
        case 1:
          h2.push(t2);
          break;
        case 2: {
          const c2 = h2.find((o2) => o2.path === a2);
          c2 && (c2.children ?? (c2.children = [])).push(t2);
          break;
        }
        default: {
          const c2 = h2.find((o2) => o2.path === a2.replace(/\/[^/]+\/$/, "/"));
          if (c2) {
            const o2 = (l2 = c2.children) == null ? void 0 : l2.find((d2) => d2.path === a2);
            o2 && (o2.children ?? (o2.children = [])).push(t2);
          }
        }
      }
    }), h2;
  }, A2 = computed(() => b2());
  return () => h$3("div", { class: "vp-catalog" }, [h$3("h2", { class: "vp-catalog-main-title" }, f2.value.title), A2.value.length ? A2.value.map(({ children: s2 = [], icon: p2, path: h2, title: t2 }, l2) => [h$3("h3", { id: t2, class: ["vp-catalog-child-title", { "has-children": s2.length }] }, [h$3("a", { href: `#${t2}`, class: "header-anchor", "aria-hidden": true }, "#"), h$3(j$2, { class: "vp-catalog-title", to: h2 }, () => [r2.index ? `${l2 + 1}.` : null, p2 && u2 ? h$3(u2, { icon: p2 }) : null, t2 || h2])]), s2.length ? h$3("ul", { class: "vp-catalog-child-catalogs" }, s2.map(({ children: a2 = [], icon: n2, path: c2, title: o2 }, d2) => h$3("li", { class: "vp-child-catalog" }, [h$3("div", { class: ["vp-catalog-sub-title", { "has-children": a2.length }] }, [h$3("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h$3(j$2, { class: "vp-catalog-title", to: c2 }, () => [r2.index ? `${l2 + 1}.${d2 + 1}` : null, n2 && u2 ? h$3(u2, { icon: n2 }) : null, o2 || c2])]), a2.length ? h$3("div", { class: "v-sub-catalogs" }, a2.map(({ icon: i2, path: v2, title: $2 }, L2) => h$3(j$2, { class: "vp-sub-catalog", to: v2 }, () => [r2.index ? `${l2 + 1}.${d2 + 1}.${L2 + 1}` : null, i2 && u2 ? h$3(u2, { icon: i2 }) : null, $2 || v2]))) : null]))) : null]) : h$3("p", { class: "vp-empty-catalog" }, f2.value.empty)]);
} }), S$3 = defineClientConfig({ enhance: ({ app: r2 }) => {
  l$4(r2), Qe$2("AutoCatalog", r2) || r2.component("AutoCatalog", N$1);
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$3("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$3("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$3("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$3("span", [
      svg,
      h$3("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$3(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$ll3RQe8kJpPbzvU0NXSStuf27ZkZmr5MkNBOWenIwaODTxeVz1WgS"]}},"author":{"name":"Molingrio","url":"https://molingrio.github.io"},"logo":"/ml.png","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"src","footer":"——————Molingrio——————","displayFooter":true,"blog":{"description":"You can try a lot","intro":"/intro.html","medias":{"Baidu":"https://baidu.com","BiliBili":"https://bilibili.com","Bitbucket":"https://example.com","Dingding":"https://example.com","Discord":"https://example.com","Dribbble":"https://example.com","Email":"mailto:molingofficial@gmail.com","Evernote":"https://example.com","Facebook":"https://example.com","Flipboard":"https://example.com","Gitee":"https://example.com","GitHub":"https://example.com","Gitlab":"https://example.com","Gmail":"mailto:info@example.com","Instagram":"https://example.com","Lark":"https://example.com","Lines":"https://example.com","Linkedin":"https://example.com","Pinterest":"https://example.com","Pocket":"https://example.com","QQ":"https://example.com","Qzone":"https://example.com","Reddit":"https://example.com","Rss":"https://example.com","Steam":"https://example.com","Twitter":"https://example.com","Wechat":"https://example.com","Weibo":"https://example.com","Whatsapp":"https://example.com","Youtube":"https://example.com","Zhihu":"https://example.com","MrHope":"https://mister-hope.com"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/","/demo/",{"text":"快捷索引","icon":"pen-to-square","prefix":"/posts/","children":[{"text":"樱桃","icon":"pen-to-square","link":"cherry"},{"text":"机场","icon":"pen-to-square","link":"dragonfruit"},"tomato","strawberry"]},{"text":"项目教程","icon":"book","link":"https://theme-hope.vuejs.press/zh/"}],"sidebar":{"/":["",{"text":"如何使用","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"book","prefix":"posts/","children":"structure"},"intro","slides"]}}}}');
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const waline$1 = "";
const waline = "";
const e$6 = { "provider": "Waline", "dark": 'html[data-theme="dark"]', "serverURL": "https://waline-comment.vuejs.press" };
let n$8 = e$6;
const t$7 = Symbol(""), s$3 = () => inject(t$7), d$1 = s$3, g$3 = (o2) => {
  o2.provide(t$7, n$8);
};
const y$2 = { "/": { "placeholder": "请留言。(填写邮箱可在被回复时收到邮件提醒)" } };
import("./assets/waline-meta-3ab98778.js");
var E = defineComponent({ name: "WalineComment", props: { identifier: { type: String, required: true } }, setup(t2) {
  const e2 = d$1(), m2 = usePageFrontmatter(), p2 = usePageLang(), l2 = Ze$2(y$2);
  let n2;
  const i2 = !!e2.serverURL, s2 = computed(() => {
    if (!i2)
      return false;
    const d2 = e2.pageview !== false, r2 = m2.value.pageview;
    return !!r2 || d2 !== false && r2 !== false;
  }), u2 = computed(() => ({ lang: p2.value === "zh-CN" ? "zh-CN" : "en", locale: l2.value, dark: "html.dark", ...e2, path: t2.identifier }));
  return onMounted(() => {
    watch(() => t2.identifier, () => {
      n2 == null || n2(), s2.value && nextTick().then(() => {
        setTimeout(() => {
          n2 = pageviewCount({ serverURL: e2.serverURL, path: t2.identifier });
        }, e2.delay || 800);
      });
    }, { immediate: true });
  }), () => i2 ? h$3("div", { id: "comment", class: "waline-wrapper" }, h$3(defineAsyncComponent({ loader: async () => (await import("@waline/client/dist/component.mjs")).Waline, loadingComponent: C$4 }), u2.value)) : null;
} });
var v$4 = defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e2) {
  const m2 = s$3(), n2 = usePageData(), o2 = usePageFrontmatter(), t2 = m2.comment !== false, a2 = computed(() => o2.value.comment || t2 && o2.value.comment !== false);
  return () => h$3(E, { identifier: o2.value.commentID || n2.value.path, darkmode: e2.darkmode, style: { display: a2.value ? "block" : "none" } });
} }), C$3 = defineClientConfig({ enhance: ({ app: e2 }) => {
  g$3(e2), e2.component("CommentService", v$4);
} });
const button = "";
const S$2 = 800, u$1 = 2e3, M$3 = { "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, n$7 = false, P$2 = ['.theme-hope-content div[class*="language-"] pre'], m$3 = true;
const l$3 = /* @__PURE__ */ new Map(), T = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = Ze$2(M$3), g2 = usePageData(), i2 = Xe$2();
  const y2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.type = "button", e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p2 = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P$2.forEach((e2) => {
        document.querySelectorAll(e2).forEach(y2);
      }), o2();
    }, S$2);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$3.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$3.delete(t2);
      }, u$1);
      if (l$3.set(t2, c2), n$7)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$3) && p2(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$3) && p2();
    });
  });
};
var Y$2 = defineClientConfig({ setup: () => {
  T();
} });
const chart = "";
const g$2 = (e2, n2) => n2 === "json" ? JSON.parse(e2) : new Function(`let config,__chart_js_config__;
{
${e2}
__chart_js_config__=config;
}
return __chart_js_config__;`)();
var h$1 = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const n2 = shallowRef(), a2 = shallowRef(), o2 = ref(true);
  return onMounted(async () => {
    const [{ default: i2 }] = await Promise.all([import("chart.js/auto"), new Promise((c2) => setTimeout(c2, 800))]);
    i2.defaults.maintainAspectRatio = false;
    const s2 = g$2(Fe$2(e2.config), e2.type), l2 = a2.value.getContext("2d");
    new i2(l2, s2), o2.value = false;
  }), () => [e2.title ? h$3("div", { class: "chartjs-title" }, decodeURIComponent(e2.title)) : null, o2.value ? h$3(C$4, { class: "chartjs-loading", height: 192 }) : null, h$3("div", { ref: n2, class: "chartjs-wrapper", id: e2.id, style: { display: o2.value ? "none" : "block" } }, h$3("canvas", { ref: a2, height: 400 }))];
} });
const codeTabs = "";
const v$3 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var A$4 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: n2 }) {
  const d2 = ref(a2.active), o2 = shallowRef([]), i2 = () => {
    a2.tabId && (v$3.value[a2.tabId] = a2.data[d2.value].id);
  }, s2 = (e2 = d2.value) => {
    d2.value = e2 < o2.value.length - 1 ? e2 + 1 : 0, o2.value[d2.value].focus();
  }, c2 = (e2 = d2.value) => {
    d2.value = e2 > 0 ? e2 - 1 : o2.value.length - 1, o2.value[d2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), d2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), a2.tabId && (v$3.value[a2.tabId] = a2.data[d2.value].id);
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => v$3.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    d2.value = p2(), watch(() => v$3.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const l2 = a2.data.findIndex(({ id: u2 }) => u2 === e2);
        l2 !== -1 && (d2.value = l2);
      }
    });
  }), () => a2.data.length ? h$3("div", { class: "vp-code-tabs" }, [h$3("div", { class: "vp-code-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const l2 = t2 === d2.value;
    return h$3("button", { type: "button", ref: (u2) => {
      u2 && (o2.value[t2] = u2);
    }, class: ["vp-code-tab-nav", { active: l2 }], role: "tab", "aria-controls": `codetab-${a2.id}-${t2}`, "aria-selected": l2, onClick: () => {
      d2.value = t2, i2();
    }, onKeydown: (u2) => b2(u2, t2) }, n2[`title${t2}`]({ value: e2, isActive: l2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const l2 = t2 === d2.value;
    return h$3("div", { class: ["vp-code-tab", { active: l2 }], id: `codetab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": l2 }, n2[`tab${t2}`]({ value: e2, isActive: l2 }));
  })]) : null;
} });
const codeGroup = "";
const c$2 = ({ active: p2 = false }, { slots: r2 }) => {
  var e2;
  return h$3("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = r2.default) == null ? void 0 : e2.call(r2));
};
c$2.displayName = "CodeGroupItem";
const C$2 = defineComponent({ name: "CodeGroup", slots: Object, setup(p2, { slots: r2 }) {
  const e2 = ref(-1), t2 = shallowRef([]);
  const d2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, i2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, f2 = (a2, l2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = l2) : a2.key === "ArrowRight" ? (a2.preventDefault(), d2(l2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), i2(l2));
  };
  return () => {
    var a2;
    const l2 = (((a2 = r2.default) == null ? void 0 : a2.call(r2)) || []).filter((o2) => o2.type.name === "CodeGroupItem").map((o2) => (o2.props === null && (o2.props = {}), o2));
    return l2.length === 0 ? null : (e2.value < 0 || e2.value > l2.length - 1 ? (e2.value = l2.findIndex((o2) => "active" in o2.props), e2.value === -1 && (e2.value = 0)) : l2.forEach((o2, u2) => {
      o2.props.active = u2 === e2.value;
    }), h$3("div", { class: "code-group" }, [h$3("div", { class: "code-group-nav" }, l2.map((o2, u2) => {
      const s2 = u2 === e2.value;
      return h$3("button", { type: "button", ref: (v2) => {
        v2 && (t2.value[u2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = u2;
      }, onKeydown: (v2) => f2(v2, u2) }, o2.props.title);
    })), l2]));
  };
} });
const index$1 = "";
const q$2 = () => h$3(u$2, { name: "back" }, () => h$3("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$3 = () => h$3(u$2, { name: "home" }, () => h$3("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$5 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$2 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l$2 = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const codeDemo = "";
const L$2 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, $$1 = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, k$3 = (e2, s2, t2) => {
  const o2 = document.createElement(e2);
  return isPlainObject(s2) && f$2(s2).forEach((l2) => {
    if (l2.indexOf("data"))
      o2[l2] = s2[l2];
    else {
      const n2 = l2.replace("data", "");
      o2.dataset[n2] = s2[l2];
    }
  }), t2 && t2.forEach((l2) => {
    o2.appendChild(l2);
  }), o2;
}, S$1 = (e2) => ({ ...L$2, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L$2.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L$2.cssLib || [], ...e2.cssLib || []])) }), m$2 = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((o2) => {
    var l2;
    const n2 = document.createElement("script");
    n2.src = s2, (l2 = document.querySelector("body")) == null || l2.appendChild(n2), n2.onload = () => {
      o2();
    };
  });
  return e2[s2] = t2, t2;
}, V$2 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = k$3("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, H$2 = (e2, s2, t2) => {
  const o2 = t2.getScript();
  if (o2 && Array.from(s2.childNodes).every((l2) => l2.nodeName !== "SCRIPT")) {
    const l2 = document.createElement("script");
    l2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .vp-code-demo-display').shadowRoot;
${o2}}`)), s2.appendChild(l2);
  }
}, I = (e2) => {
  const s2 = f$2(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((o2) => {
    const l2 = s2.filter((n2) => $$1[o2].types.includes(n2));
    if (l2.length) {
      const n2 = l2[0];
      t2[o2] = [e2[n2].replace(/^\n|\n$/g, ""), $$1[o2].map[n2] || n2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), O$1 = (e2) => `<div id="app">
${x$1(e2)}
</div>`, J$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, q$1 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), A$3 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, F$2 = (e2, s2) => {
  const t2 = S$1(s2), o2 = e2.js[0] || "";
  return { ...t2, html: x$1(e2.html[0] || ""), js: o2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var l2;
    return t2.useBabel ? ((l2 = window.Babel.transform(o2, { presets: ["es2015"] })) == null ? void 0 : l2.code) || "" : o2;
  } };
}, G$1 = /<template>([\s\S]+)<\/template>/u, Y$1 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, K$3 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, U$1 = (e2, s2) => {
  const t2 = S$1(s2), o2 = e2.html[0] || "", l2 = G$1.exec(o2), n2 = Y$1.exec(o2), d2 = K$3.exec(o2), u2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [i2 = "", c2 = ""] = n2 ? [n2[4].replace(/^\n|\n$/g, ""), n2[3]] : [], [a2 = "", h2 = ""] = d2 ? [d2[4].replace(/^\n|\n$/g, ""), d2[3]] : [], f2 = c2 === "" && (h2 === "" || h2 === "css");
  return { ...t2, html: O$1(u2), js: q$1(i2), css: a2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var y2, p2;
    const g2 = s2.useBabel ? ((p2 = (y2 = window.Babel) == null ? void 0 : y2.transform(i2, { presets: ["es2015"] })) == null ? void 0 : p2.code) || "" : i2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${A$3(g2)};appOptions.template=\`${u2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, W$2 = (e2, s2) => {
  const t2 = S$1(s2);
  return { ...t2, html: O$1(""), js: J$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var o2, l2;
    const n2 = ((l2 = (o2 = window.Babel) == null ? void 0 : o2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : l2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${A$3(n2)}))`;
  } };
}, v$1 = {}, z$2 = (e2) => Promise.all([m$2(v$1, e2.babel), m$2(v$1, e2.react), m$2(v$1, e2.reactDOM)]), Q$1 = (e2) => {
  const s2 = [m$2(v$1, e2.vue)];
  return e2.useBabel && s2.push(m$2(v$1, e2.babel)), Promise.all(s2);
}, X$1 = (e2) => e2.useBabel ? m$2(v$1, e2.babel) : Promise.resolve();
var Z$2 = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, slots: Object, setup(e2, { slots: s2 }) {
  const [t2, o2] = useToggle(false), l2 = shallowRef(), n2 = shallowRef(), d2 = ref("0"), u2 = ref(false), i2 = computed(() => JSON.parse(e2.config ? Fe$2(e2.config) : "{}")), c2 = computed(() => {
    const p2 = JSON.parse(Fe$2(e2.code));
    return I(p2);
  }), a2 = computed(() => e2.type === "react" ? W$2(c2.value, i2.value) : e2.type === "vue" ? U$1(c2.value, i2.value) : F$2(c2.value, i2.value)), h2 = computed(() => a2.value.isLegal), f2 = (p2 = false) => {
    const g2 = l2.value.attachShadow({ mode: "open" }), j2 = document.createElement("div");
    j2.classList.add("code-demo-app"), g2.appendChild(j2), h2.value ? (p2 && (j2.innerHTML = a2.value.html), V$2(g2, a2.value), H$2(e2.id, g2, a2.value), d2.value = "0") : d2.value = "auto", u2.value = true;
  }, y2 = () => {
    switch (e2.type) {
      case "react":
        return z$2(a2.value).then(() => f2());
      case "vue":
        return Q$1(a2.value).then(() => f2());
      default:
        return X$1(a2.value).then(() => f2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      y2();
    }, 800);
  }), () => {
    var p2;
    return h$3("div", { class: "vp-code-demo", id: e2.id }, [h$3("div", { class: "vp-code-demo-header" }, [a2.value.isLegal ? h$3("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-code-demo-toggle-button", t2.value ? "down" : "end"], onClick: () => {
      d2.value = t2.value ? "0" : `${n2.value.clientHeight + 13.8}px`, o2();
    } }) : null, e2.title ? h$3("span", { class: "vp-code-demo-title" }, decodeURIComponent(e2.title)) : null, a2.value.isLegal && a2.value.jsfiddle !== false ? h$3("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$3("input", { type: "hidden", name: "html", value: a2.value.html }), h$3("input", { type: "hidden", name: "js", value: a2.value.js }), h$3("input", { type: "hidden", name: "css", value: a2.value.css }), h$3("input", { type: "hidden", name: "wrap", value: "1" }), h$3("input", { type: "hidden", name: "panel_js", value: "3" }), h$3("input", { type: "hidden", name: "resources", value: [...a2.value.cssLib, ...a2.value.jsLib].join(",") }), h$3("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$2, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !a2.value.isLegal || a2.value.codepen !== false ? h$3("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$3("input", { type: "hidden", name: "data", value: JSON.stringify({ html: a2.value.html, js: a2.value.js, css: a2.value.css, js_external: a2.value.jsLib.join(";"), css_external: a2.value.cssLib.join(";"), layout: a2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : a2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: a2.value.codepenEditors }) }), h$3("button", { type: "submit", innerHTML: o$5, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), u2.value ? null : h$3(C$4, { class: "vp-code-demo-loading" }), h$3("div", { ref: l2, class: "vp-code-demo-display", style: { display: h2.value && u2.value ? "block" : "none" } }), h$3("div", { class: "vp-code-demo-code-wrapper", style: { height: d2.value } }, h$3("div", { ref: n2, class: "vp-code-demo-codes" }, (p2 = s2.default) == null ? void 0 : p2.call(s2)))]);
  };
} });
const echarts = "";
const g$1 = (async () => {
}).constructor, v = (e2, i2, o2) => i2 === "js" ? g$1("myChart", `let width,height,option,__echarts_config__;
{
${e2}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(o2) : Promise.resolve({ option: JSON.parse(e2) });
var y$1 = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const i2 = ref(true), o2 = shallowRef();
  let t2;
  return useEventListener("resize", useDebounceFn(() => t2 == null ? void 0 : t2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((r2) => setTimeout(r2, 800))]).then(async ([r2]) => {
      t2 = r2.init(o2.value);
      const { option: s2, ...a2 } = await v(Fe$2(e2.config), e2.type, t2);
      t2.resize(a2), t2.setOption(s2), i2.value = false;
    });
  }), onUnmounted(() => {
    t2 == null || t2.dispose();
  }), () => [e2.title ? h$3("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, h$3("div", { class: "echarts-wrapper" }, [h$3("div", { ref: o2, class: "echarts-container", id: e2.id }), i2.value ? h$3(C$4, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var l$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, o$4 = { ...l$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, e$5 = { ...l$1, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-color": "#5c6ac4", "font-color": "#000" } } }, t$6 = { ...l$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } };
const f$1 = { ant: o$4, vue: t$6, pie: e$5 };
var y = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(r2) {
  let o2 = null;
  const d2 = shallowRef(), t2 = ref(true), n2 = ref(1), a2 = computed(() => f$1[r2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${r2.preset}`), f$1.vue)), l2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(Fe$2(r2.code)), n2.value = l2(window.innerWidth), t2.value = false, o2.draw(r2.id, { ...a2.value, scale: n2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = l2(window.innerWidth);
        n2.value !== e2 && (n2.value = e2, o2.draw(r2.id, { ...a2.value, scale: e2 }));
      }
    }, 100));
  }), () => [t2.value ? h$3(C$4, { class: "flowchart-loading", height: 192 }) : null, h$3("div", { ref: d2, class: ["flowchart-wrapper", r2.preset], id: r2.id, style: { display: t2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
let i$4 = {};
const o$3 = Symbol(""), r$2 = () => inject(o$3), t$5 = (e2) => {
  e2.provide(o$3, i$4);
};
const o$2 = { useMaxWidth: false }, L$1 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var k$2 = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const { themeVariables: d2, ...s2 } = r$2(), f2 = shallowRef(), m2 = computed(() => Fe$2(e2.code)), l2 = ref(""), i2 = ref(false), c2 = async () => {
    const [{ default: t2 }] = await Promise.all([import("mermaid"), new Promise((r2) => setTimeout(r2, 800))]);
    t2.initialize({ theme: "base", themeVariables: { ...L$1(i2.value), ...Re$2(d2) ? d2(i2.value) : d2 }, flowchart: o$2, sequence: o$2, journey: o$2, gantt: o$2, er: o$2, pie: o$2, ...s2, startOnLoad: false }), l2.value = (await t2.render(e2.id, m2.value)).svg;
  }, p2 = () => {
    const { body: t2 } = document, r2 = document.createElement("div");
    r2.classList.add("mermaid-preview"), r2.innerHTML = l2.value, t2.appendChild(r2), r2.addEventListener("click", () => {
      t2.removeChild(r2);
    });
  }, u2 = () => {
    const t2 = `data:image/svg+xml;charset=utf8,${l2.value.replace(/<br>/g, "<br />").replace(/%/g, "%25").replace(/"/g, "%22").replace(/'/g, "%27").replace(/&/g, "%26").replace(/#/g, "%23").replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/</g, "%3C").replace(/>/g, "%3E")}`, r2 = document.createElement("a");
    r2.setAttribute("href", t2), r2.setAttribute("download", `${e2.id}.svg`), r2.click();
  };
  return onMounted(() => {
    const t2 = document.documentElement, r2 = () => t2.classList.contains("dark") || t2.getAttribute("data-theme") === "dark";
    i2.value = r2(), c2(), useMutationObserver(t2, () => {
      i2.value = r2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, () => c2());
  }), () => [h$3("div", { class: "mermaid-actions" }, [h$3("button", { class: "preview-button", onClick: () => p2(), title: "preview", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>' }), h$3("button", { class: "download-button", onClick: () => u2(), title: "download", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>' })]), h$3("div", { ref: f2, class: "mermaid-wrapper" }, l2.value ? h$3("div", { class: "mermaid-content", innerHTML: l2.value }) : h$3(C$4, { class: "mermaid-loading", height: 96 }))];
} });
let o$1 = {};
const i$3 = Symbol(""), a$2 = () => inject(i$3), l = (e2) => {
  e2.provide(i$3, o$1);
};
const s$2 = { showCompileOutput: false, clearConsole: false, ssr: false };
let e$4 = s$2;
const n$6 = Symbol(""), r$1 = () => inject(n$6), t$4 = (o2) => {
  o2.provide(n$6, e$4);
};
const e$3 = () => import("reveal.js/plugin/highlight/highlight.esm.js"), o = () => import("reveal.js/plugin/markdown/markdown.esm.js"), r = () => import("reveal.js/plugin/math/math.esm.js"), t$3 = () => import("reveal.js/plugin/notes/notes.esm.js"), i$2 = () => import("reveal.js/dist/reveal.esm.js"), a$1 = () => import("reveal.js/plugin/search/search.esm.js"), n$5 = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const reveal = "";
const useReveal = () => [i$2(), o(), e$3(), r(), a$1(), t$3(), n$5()];
const index = "";
const leagueGothic = "";
const sourceSansPro = "";
var R$2 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const l2 = a$2(), t2 = usePageFrontmatter(), n2 = ref(""), s2 = ref(true), u2 = shallowRef();
  let i2 = null;
  const p2 = async (e2) => {
    const v2 = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...f2] = await Promise.all(v2), d2 = new c2.default(e2, { backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...l2, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide", plugins: [...f2.map(({ default: o2 }) => o2), ...l2.plugins ?? []] });
    return await d2.initialize(), d2;
  };
  return onMounted(async () => {
    const e2 = u2.value;
    e2 && (n2.value = Fe$2(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await p2(e2), s2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h$3("div", { class: "vp-reveal" }, [h$3("div", { ref: u2, class: ["reveal", "reveal-viewport"] }, h$3("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${n2.value}<\/script></section>` })), s2.value ? h$3(C$4, { class: "reveal-loading", height: 400 }) : null]);
} });
const playground = "";
var n$4 = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(o2) {
  return () => [h$3("div", { class: "vp-playground" }, [h$3("div", { class: "vp-playground-header" }, [o2.title ? h$3("div", { class: "vp-playground-title" }, decodeURIComponent(o2.title)) : null, h$3("div", { class: "vp-playground-actions" }, [h$3("a", { class: "vp-playground-action", href: decodeURIComponent(o2.link), target: "_blank", innerHTML: l$2 })])]), h$3("div", { class: "vp-playground-container" }, h$3("iframe", { src: decodeURIComponent(o2.link) }))])];
} });
const tabs = "";
const n$3 = useStorage("VUEPRESS_TAB_STORE", {});
var A$2 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: v2 }) {
  const l2 = ref(a2.active), r2 = shallowRef([]), o2 = () => {
    a2.tabId && (n$3.value[a2.tabId] = a2.data[l2.value].id);
  }, s2 = (e2 = l2.value) => {
    l2.value = e2 < r2.value.length - 1 ? e2 + 1 : 0, r2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : r2.value.length - 1, r2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), o2();
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => n$3.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => n$3.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const u2 = a2.data.findIndex(({ id: i2 }) => i2 === e2);
        u2 !== -1 && (l2.value = u2);
      }
    });
  }), () => a2.data.length ? h$3("div", { class: "vp-tabs" }, [h$3("div", { class: "vp-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const u2 = t2 === l2.value;
    return h$3("button", { type: "button", ref: (i2) => {
      i2 && (r2.value[t2] = i2);
    }, class: ["vp-tab-nav", { active: u2 }], role: "tab", "aria-controls": `tab-${a2.id}-${t2}`, "aria-selected": u2, onClick: () => {
      l2.value = t2, o2();
    }, onKeydown: (i2) => b2(i2, t2) }, v2[`title${t2}`]({ value: e2, isActive: u2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const u2 = t2 === l2.value;
    return h$3("div", { class: ["vp-tab", { active: u2 }], id: `tab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": u2 }, v2[`tab${t2}`]({ value: e2, isActive: u2 }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", h$1);
    app.component("CodeTabs", A$4);
    if (!Qe$2("CodeGroup", app))
      app.component("CodeGroup", C$2);
    if (!Qe$2("CodeGroupItem", app))
      app.component("CodeGroupItem", c$2);
    app.component("CodeDemo", Z$2);
    app.component("ECharts", y$1);
    app.component("FlowChart", y);
    t$5(app);
    app.component("Mermaid", k$2);
    l(app);
    app.component("Presentation", R$2);
    app.component("Playground", n$4);
    app.component("Tabs", A$2);
    t$4(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-8fdcfefc.js")));
  },
  setup: () => {
  }
});
let i$1 = {};
const t$2 = Symbol(""), n$2 = () => inject(t$2), s$1 = (o2) => {
  o2.provide(t$2, i$1);
};
const photoswipe = "";
const photoSwipe = "";
const P$1 = ".theme-hope-content :not(a) > img:not([no-view])", x = { "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, A$1 = 800, b = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', H$1 = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((l2) => Array.from(document.querySelectorAll(l2))).flat(), h = (e2) => new Promise((l2, m2) => {
  e2.complete ? l2({ type: "image", element: e2, src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt, msrc: e2.src }) : (e2.onload = () => l2(h(e2)), e2.onerror = (d2) => m2(d2));
}), N = () => {
  const { isSupported: e2, toggle: l2 } = useFullscreen(), m2 = n$2(), d2 = Ze$2(x), v2 = usePageData();
  let n2;
  const g2 = (a2) => {
    a2.on("uiRegister", () => {
      e2 && a2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        l2();
      } }), a2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, o2) => {
        r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), o2.on("change", () => {
          r2.setAttribute("href", o2.currSlide.data.src);
        });
      } }), a2.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (r2, o2) => {
        const t2 = [];
        let i2 = -1;
        for (let s2 = 0; s2 < o2.getNumItems(); s2++) {
          const c2 = document.createElement("div");
          c2.className = "photo-swipe-bullet", c2.onclick = (w2) => {
            o2.goTo(t2.indexOf(w2.target));
          }, t2.push(c2), r2.appendChild(c2);
        }
        o2.on("change", () => {
          i2 >= 0 && t2[i2].classList.remove("active"), t2[o2.currIndex].classList.add("active"), i2 = o2.currIndex;
        });
      } });
    });
  }, p2 = () => Promise.all([import("photoswipe"), nextTick().then(() => new Promise((a2) => setTimeout(a2, A$1)).then(() => H$1(P$1)))]).then(([{ default: a2 }, r2]) => {
    const o2 = r2.map((t2) => ({ html: b, element: t2, msrc: t2.src }));
    r2.forEach((t2, i2) => {
      const s2 = () => {
        n2 = new a2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...d2.value, ...m2, dataSource: o2, index: i2, ...{ closeOnVerticalDrag: true, wheelToZoom: false } }), g2(n2), n2.addFilter("thumbEl", () => t2), n2.addFilter("placeholderSrc", () => t2.src), n2.init();
      };
      t2.style.cursor = "zoom-in", t2.addEventListener("click", () => {
        s2();
      }), t2.addEventListener("keypress", ({ key: c2 }) => {
        c2 === "Enter" && s2();
      });
    }), r2.forEach((t2, i2) => {
      h(t2).then((s2) => {
        o2.splice(i2, 1, s2), n2 == null || n2.refreshSlideContent(i2);
      });
    });
  });
  onMounted(() => {
    useEventListener("wheel", () => {
      n2 == null || n2.close();
    }), p2(), watch(() => v2.value.path, () => p2());
  });
};
var M$2 = defineClientConfig({ enhance: ({ app: e2 }) => {
  s$1(e2);
}, setup: () => {
  N();
} });
const i = () => {
  const e2 = usePageData();
  return computed(() => e2.value.readingTime ?? null);
}, n$1 = typeof { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } } > "u" ? null : { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } }, a = (e2, o2) => {
  const { minutes: r2, words: l2 } = e2, { less1Minute: m2, word: c2, time: d2 } = o2;
  return { time: r2 < 1 ? m2 : d2.replace("$time", Math.round(r2).toString()), words: c2.replace("$word", l2.toString()) };
}, u = { words: "", time: "" }, s = () => n$1 ? Ze$2(n$1) : computed(() => null), L = () => {
  if (typeof n$1 > "u")
    return computed(() => u);
  const e2 = i(), o2 = s();
  return computed(() => e2.value && o2.value ? a(e2.value, o2.value) : u);
};
const e$2 = () => useThemeData(), m$1 = () => useThemeLocaleData(), t$1 = () => computed(() => !!e$2().value.pure);
var e$1 = defineComponent({ name: "EmptyComponent", setup: () => () => null });
const mobileBreakPoint = "719px";
const pcBreakPoint = "1440px";
const enableThemeColor = "false";
const pe$1 = {
  mobileBreakPoint,
  pcBreakPoint,
  enableThemeColor
};
const sidebarData = { "/demo/": ["page", "markdown", "disable", "encrypt"], "/posts/": ["elementslaw", "network", "strawberry", "husky", "dragonfruit", "tomato"] };
const Ne$1 = (e2) => {
  const { icon: a2 = "", color: t2, size: o2 } = e2, n2 = {};
  return t2 && (n2.color = t2), o2 && (n2.height = Number.isNaN(Number(o2)) ? o2 : `${o2}px`), isLinkHttp(a2) ? h$3("img", { class: "icon", src: a2, "no-view": "", style: n2 }) : Oe$1(a2) ? h$3("img", { class: "icon", src: withBase(a2), "no-view": "", style: n2 }) : h$3(resolveComponent("FontIcon"), e2);
};
Ne$1.displayName = "HopeIcon";
var V$1 = Ne$1, R$1 = ((e2) => (e2.type = "y", e2.title = "t", e2.shortTitle = "s", e2.icon = "i", e2.author = "a", e2.date = "d", e2.localizedDate = "l", e2.category = "c", e2.tag = "g", e2.isEncrypted = "n", e2.isOriginal = "o", e2.readingTime = "r", e2.excerpt = "e", e2.sticky = "u", e2.cover = "v", e2.index = "I", e2.order = "O", e2))(R$1 || {}), Ee$1 = ((e2) => (e2.article = "a", e2.home = "h", e2.slide = "s", e2.page = "p", e2))(Ee$1 || {});
const H = (e2, a2, t2 = false) => {
  const o2 = encodeURI(a2);
  let n2 = w(e2, A$5(o2));
  n2.name === "404" && (n2 = w(e2, o2));
  const { fullPath: s2, meta: r2, name: i2 } = n2;
  return { text: !t2 && r2[R$1.shortTitle] ? r2[R$1.shortTitle] : r2[R$1.title] || a2, link: i2 === "404" ? a2 : s2, ...r2[R$1.icon] ? { icon: r2[R$1.icon] } : {} };
}, Fa = () => {
  const e2 = useRouter(), a2 = useRoute();
  return (t2) => {
    if (t2)
      if (Oe$1(t2))
        a2.path !== t2 && e2.push(t2);
      else if (isLinkHttp(t2) || isLinkMailto(t2))
        window && window.open(t2);
      else {
        const o2 = a2.path.slice(0, a2.path.lastIndexOf("/"));
        e2.push(`${o2}/${encodeURI(t2)}`);
      }
  };
}, De$1 = () => {
  const e2 = m$1(), a2 = usePageFrontmatter();
  return computed(() => {
    const { author: t2 } = a2.value;
    return t2 ? Te$1(t2) : t2 === false ? [] : Te$1(e2.value.author, false);
  });
}, _a = () => {
  const e2 = usePageFrontmatter();
  return computed(() => je$1(e2.value.category).map((a2) => {
    var t2, o2;
    return { name: a2, path: ((o2 = (t2 = inject(Symbol.for("categoryMap"))) == null ? void 0 : t2.value.map[a2]) == null ? void 0 : o2.path) || "" };
  }));
}, Ga = () => {
  const e2 = usePageFrontmatter();
  return computed(() => Be$1(e2.value.tag).map((a2) => {
    var t2, o2;
    return { name: a2, path: ((o2 = (t2 = inject(Symbol.for("tagMap"))) == null ? void 0 : t2.value.map[a2]) == null ? void 0 : o2.path) || "" };
  }));
}, qa = () => {
  const e2 = usePageFrontmatter(), a2 = usePageData();
  return computed(() => {
    const t2 = pe$2(e2.value.date);
    if (t2)
      return t2;
    const { createdTime: o2 } = a2.value.git || {};
    return o2 ? new Date(o2) : null;
  });
}, Wa = () => {
  const e2 = m$1(), a2 = usePageData(), t2 = usePageFrontmatter(), o2 = De$1(), n2 = _a(), s2 = Ga(), r2 = qa(), i$12 = i(), d2 = L(), v2 = computed(() => ({ author: o2.value, category: n2.value, date: r2.value, localizedDate: a2.value.localizedDate, tag: s2.value, isOriginal: t2.value.isOriginal || false, readingTime: i$12.value, readingTimeLocale: d2.value, pageview: "pageview" in t2.value ? t2.value.pageview : true })), p2 = computed(() => "pageInfo" in t2.value ? t2.value.pageInfo : "pageInfo" in e2.value ? e2.value.pageInfo : null);
  return { info: v2, items: p2 };
}, { mobileBreakPoint: Ua, pcBreakPoint: Ya } = pe$1, Oe = (e2) => e2.endsWith("px") ? Number(e2.slice(0, -2)) : null, Z$1 = () => {
  const e2 = ref(false), a2 = ref(false), t2 = () => {
    e2.value = window.innerWidth <= (Oe(Ua) ?? 719), a2.value = window.innerWidth >= (Oe(Ya) ?? 1440);
  };
  return onMounted(() => {
    t2(), useEventListener("resize", t2, false), useEventListener("orientationchange", t2, false);
  }), { isMobile: e2, isPC: a2 };
}, Pe$1 = Symbol(""), U = () => {
  const e2 = inject(Pe$1);
  if (!e2)
    throw new Error("useDarkmode() is called without provider.");
  return e2;
}, Xa = (e2) => {
  const a2 = e$2(), t2 = usePreferredDark(), o2 = useStorage("vuepress-theme-hope-scheme", "auto"), n2 = computed(() => a2.value.darkmode || "switch"), s2 = computed(() => {
    const i2 = n2.value;
    return i2 === "disable" ? false : i2 === "enable" ? true : i2 === "auto" ? t2.value : i2 === "toggle" ? o2.value === "dark" : o2.value === "dark" || o2.value === "auto" && t2.value;
  }), r2 = computed(() => {
    const i2 = n2.value;
    return i2 === "switch" || i2 === "toggle";
  });
  e2.provide(Pe$1, { canToggle: r2, config: n2, isDarkmode: s2, status: o2 }), Object.defineProperties(e2.config.globalProperties, { $isDarkmode: { get: () => s2.value } });
}, Ka = () => {
  const { isDarkmode: e2 } = U(), a2 = (t2 = e2.value) => document.documentElement.setAttribute("data-theme", t2 ? "dark" : "light");
  onMounted(() => {
    watch(e2, a2, { immediate: true });
  });
};
var $ = defineComponent({ name: "AutoLink", inheritAttrs: false, props: { config: { type: Object, required: true }, exact: Boolean, noExternalLinkIcon: Boolean }, emits: ["focusout"], slots: Object, setup(e2, { attrs: a2, emit: t2, slots: o2 }) {
  const n2 = useRoute(), s2 = useSiteData(), r2 = toRef(e2, "config"), i2 = computed(() => isLinkHttp(r2.value.link)), d2 = computed(() => isLinkMailto(r2.value.link) || isLinkTel(r2.value.link)), v2 = computed(() => d2.value ? void 0 : r2.value.target || (i2.value ? "_blank" : void 0)), p2 = computed(() => v2.value === "_blank"), h2 = computed(() => !i2.value && !d2.value && !p2.value), b2 = computed(() => d2.value ? void 0 : r2.value.rel || (p2.value ? "noopener noreferrer" : void 0)), f2 = computed(() => r2.value.ariaLabel || r2.value.text), L2 = computed(() => {
    if (e2.exact)
      return false;
    const g2 = f$2(s2.value.locales);
    return g2.length ? g2.every((w2) => w2 !== r2.value.link) : r2.value.link !== "/";
  }), A2 = computed(() => h2.value ? r2.value.activeMatch ? new RegExp(r2.value.activeMatch).test(n2.path) : L2.value ? z$3(n2.path, r2.value.link) : n2.path === r2.value.link : false);
  return () => {
    const { before: g2, after: w2, default: B2 } = o2, { text: z2, icon: D2, link: x2 } = r2.value;
    return h2.value ? h$3(j$2, { to: x2, "aria-label": f2.value, ...a2, class: ["nav-link", { active: A2.value }, a2.class], onFocusout: () => t2("focusout") }, () => B2 ? B2() : [g2 ? g2() : h$3(V$1, { icon: D2 }), z2, w2 == null ? void 0 : w2()]) : h$3("a", { href: x2, rel: b2.value, target: v2.value, "aria-label": f2.value, ...a2, class: ["nav-link", a2.class], onFocusout: () => t2("focusout") }, B2 ? B2() : [g2 ? g2() : h$3(V$1, { icon: D2 }), z2, e2.noExternalLinkIcon ? null : h$3(ExternalLinkIcon), w2 == null ? void 0 : w2()]);
  };
} });
const j$1 = (e2, a2, t2 = false) => "activeMatch" in a2 ? new RegExp(a2.activeMatch).test(e2.path) : Ge$1(e2, a2.link) ? true : a2.children && !t2 ? a2.children.some((o2) => j$1(e2, o2)) : false, Ve = (e2, a2) => a2.type === "group" ? a2.children.some((t2) => t2.type === "group" ? Ve(e2, t2) : t2.type === "page" && j$1(e2, t2, true)) || "prefix" in a2 && Ge$1(e2, a2.prefix) : false, Re$1 = (e2, a2) => isString(e2.link) ? h$3($, { ...a2, config: e2 }) : h$3("p", a2, [h$3(V$1, { icon: e2.icon }), e2.text]), He$1 = (e2) => {
  const a2 = useRoute();
  return e2 ? h$3("ul", { class: "vp-sidebar-sub-headers" }, e2.map((t2) => {
    const o2 = j$1(a2, t2, true);
    return h$3("li", { class: "vp-sidebar-sub-header" }, [Re$1(t2, { class: ["vp-sidebar-link", "vp-heading", { active: o2 }] }), He$1(t2.children)]);
  })) : null;
}, me$1 = (e2 = "", a2 = "") => Oe$1(a2) ? a2 : `${ensureEndingSlash(e2)}${a2}`, Ja = (e2, a2) => {
  const t2 = usePageData();
  return { type: "heading", text: e2.title, link: `${t2.value.path}#${e2.slug}`, children: he$1(e2.children, a2) };
}, he$1 = (e2, a2) => a2 > 0 ? e2.map((t2) => Ja(t2, a2 - 1)) : [], je = (e2) => {
  const a2 = usePageData();
  return he$1(a2.value.headers, e2);
}, ge$1 = (e2, a2, t2 = "") => {
  const o2 = useRouter(), n2 = usePageData(), s2 = (r2, i2 = t2) => {
    var d2;
    const v2 = isString(r2) ? H(o2, me$1(i2, r2)) : r2.link ? { ...r2, ...isLinkExternal(r2.link) ? {} : { link: H(o2, me$1(i2, r2.link)).link } } : r2;
    if ("children" in v2) {
      const p2 = me$1(i2, v2.prefix), h2 = v2.children === "structure" ? sidebarData[p2] : v2.children;
      return { type: "group", ...v2, prefix: p2, children: h2.map((b2) => s2(b2, p2)) };
    }
    return { type: "page", ...v2, children: v2.link === n2.value.path ? he$1(((d2 = n2.value.headers[0]) == null ? void 0 : d2.level) === 1 ? n2.value.headers[0].children : n2.value.headers, a2) : [] };
  };
  return e2.map((r2) => s2(r2));
}, Qa = (e2, a2) => {
  const t2 = usePageData(), o2 = f$2(e2).sort((n2, s2) => s2.length - n2.length);
  for (const n2 of o2)
    if (z$3(decodeURI(t2.value.path), n2)) {
      const s2 = e2[n2];
      return s2 ? ge$1(s2 === "structure" ? sidebarData[n2] : s2 === "heading" ? je(a2) : s2, a2, n2) : [];
    }
  return console.warn(`${t2.value.path} is missing sidebar config.`), [];
}, Za = (e2, a2) => {
  const t2 = useRouteLocale();
  return e2 === false ? [] : e2 === "heading" ? je(a2) : e2 === "structure" ? ge$1(sidebarData[t2.value], a2, t2.value) : isArray(e2) ? ge$1(e2, a2) : isPlainObject(e2) ? Qa(e2, a2) : [];
}, Fe$1 = Symbol(""), el = () => {
  const e2 = usePageFrontmatter(), a2 = m$1(), t2 = computed(() => e2.value.home ? false : e2.value.sidebar ?? a2.value.sidebar ?? "structure"), o2 = computed(() => e2.value.headerDepth ?? a2.value.headerDepth ?? 2), n2 = computed(() => Za(t2.value, o2.value));
  provide(Fe$1, n2);
}, be$1 = () => {
  const e2 = inject(Fe$1);
  if (!e2)
    throw new Error("useSidebarItems() is called without provider.");
  return e2;
};
var al = defineComponent({ name: "PageFooter", setup() {
  const e2 = usePageFrontmatter(), a2 = m$1(), t2 = De$1(), o2 = computed(() => {
    const { copyright: r2, footer: i2 } = e2.value;
    return i2 !== false && !!(r2 || i2 || a2.value.displayFooter);
  }), n2 = computed(() => {
    const { footer: r2 } = e2.value;
    return r2 === false ? false : isString(r2) ? r2 : a2.value.footer || "";
  }), s2 = computed(() => "copyright" in e2.value ? e2.value.copyright : "copyright" in a2.value ? a2.value.copyright : t2.value.length ? `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${t2.value[0].name}` : false);
  return () => o2.value ? h$3("footer", { class: "vp-footer-wrapper" }, [n2.value ? h$3("div", { class: "vp-footer", innerHTML: n2.value }) : null, s2.value ? h$3("div", { class: "vp-copyright", innerHTML: s2.value }) : null]) : null;
} }), _e = defineComponent({ name: "NavbarDropdownLink", props: { config: { type: Object, required: true } }, slots: Object, setup(e2, { slots: a2 }) {
  const t2 = usePageData(), o2 = toRef(e2, "config"), n2 = computed(() => o2.value.ariaLabel || o2.value.text), s2 = ref(false);
  watch(() => t2.value.path, () => {
    s2.value = false;
  });
  const r2 = (i2) => {
    i2.detail === 0 && (s2.value = !s2.value);
  };
  return () => {
    var i2;
    return h$3("div", { class: ["dropdown-wrapper", { open: s2.value }] }, [h$3("button", { type: "button", class: "dropdown-title", "aria-label": n2.value, onClick: r2 }, [((i2 = a2.title) == null ? void 0 : i2.call(a2)) || h$3("span", { class: "title" }, [h$3(V$1, { icon: o2.value.icon }), e2.config.text]), h$3("span", { class: "arrow" }), h$3("ul", { class: "nav-dropdown" }, o2.value.children.map((d2, v2) => {
      const p2 = v2 === o2.value.children.length - 1;
      return h$3("li", { class: "dropdown-item" }, "children" in d2 ? [h$3("h4", { class: "dropdown-subtitle" }, d2.link ? h$3($, { config: d2, onFocusout: () => {
        d2.children.length === 0 && p2 && (s2.value = false);
      } }) : h$3("span", d2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, d2.children.map((h2, b2) => h$3("li", { class: "dropdown-subitem" }, h$3($, { config: h2, onFocusout: () => {
        b2 === d2.children.length - 1 && p2 && (s2.value = false);
      } }))))] : h$3($, { config: d2, onFocusout: () => {
        p2 && (s2.value = false);
      } }));
    }))])]);
  };
} });
const Ge = () => h$3(u$2, { name: "i18n" }, () => [h$3("path", { d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z" })]);
Ge.displayName = "I18nIcon";
const qe = (e2, a2, t2 = "") => isString(a2) ? H(e2, `${t2}${a2}`) : "children" in a2 ? { ...a2, ...a2.link && !isLinkExternal(a2.link) ? H(e2, `${t2}${a2.link}`) : {}, children: a2.children.map((o2) => qe(e2, o2, `${t2}${a2.prefix || ""}`)) } : { ...a2, link: isLinkExternal(a2.link) ? a2.link : H(e2, `${t2}${a2.link}`).link }, We = () => {
  const e2 = m$1(), a2 = useRouter(), t2 = () => (e2.value.navbar || []).map((n2) => qe(a2, n2)), o2 = ref(t2());
  return watch(e2, () => {
    o2.value = t2();
  }), o2;
}, ll = () => {
  const e2 = useRouter(), a2 = useRoute(), t2 = useRouteLocale(), o2 = useSiteLocaleData(), n2 = e$2(), s2 = m$1();
  return computed(() => {
    const r2 = f$2(o2.value.locales), i2 = M$4(n2.value.extraLocales ?? {});
    if (r2.length < 2 && !i2.length)
      return null;
    const { path: d2, fullPath: v2 } = e2.currentRoute.value, { navbarLocales: p2 } = s2.value;
    return { text: "", ariaLabel: p2 == null ? void 0 : p2.selectLangAriaLabel, children: [...r2.map((h2) => {
      var b2, f2, L2;
      const A2 = ((b2 = o2.value.locales) == null ? void 0 : b2[h2]) ?? {}, g2 = ((f2 = n2.value.locales) == null ? void 0 : f2[h2]) ?? {}, w2 = A2.lang || "", B2 = ((L2 = g2.navbarLocales) == null ? void 0 : L2.langName) ?? w2;
      let z2;
      if (w2 === o2.value.lang)
        z2 = d2;
      else {
        const D2 = d2.replace(t2.value, h2);
        z2 = e2.getRoutes().some((x2) => x2.path === D2) ? v2.replace(d2, D2) : g2.home ?? h2;
      }
      return { text: B2, link: z2 };
    }), ...i2.map(([h2, b2]) => ({ text: h2, link: b2.replace(":route", a2.path.replace(t2.value, "")) }))] };
  });
}, tl = () => {
  const e2 = m$1(), a2 = computed(() => e2.value.repo || null), t2 = computed(() => a2.value ? Ke$2(a2.value) : null), o2 = computed(() => a2.value ? qe$1(a2.value) : null), n2 = computed(() => t2.value ? e2.value.repoLabel ?? (o2.value === null ? "Source" : o2.value) : null);
  return computed(() => !t2.value || !n2.value || e2.value.repoDisplay === false ? null : { type: o2.value || "Source", label: n2.value, link: t2.value });
};
defineComponent({ name: "LanguageDropdown", setup() {
  const e2 = ll();
  return () => e2.value ? h$3("div", { class: "nav-item" }, h$3(_e, { class: "i18n-dropdown", config: e2.value }, { title: () => {
    var a2;
    return h$3(Ge, { "aria-label": (a2 = e2.value) == null ? void 0 : a2.ariaLabel, style: { width: "1rem", height: "1rem", verticalAlign: "middle" } });
  } })) : null;
} });
var ol = defineComponent({ name: "NavScreenDropdown", props: { config: { type: Object, required: true } }, setup(e2) {
  const a2 = usePageData(), t2 = toRef(e2, "config"), o2 = computed(() => t2.value.ariaLabel || t2.value.text), n2 = ref(false);
  watch(() => a2.value.path, () => {
    n2.value = false;
  });
  const s2 = (r2, i2) => i2[i2.length - 1] === r2;
  return () => [h$3("button", { type: "button", class: ["nav-screen-dropdown-title", { active: n2.value }], "aria-label": o2.value, onClick: () => {
    n2.value = !n2.value;
  } }, [h$3("span", { class: "title" }, [h$3(V$1, { icon: t2.value.icon }), e2.config.text]), h$3("span", { class: ["arrow", n2.value ? "down" : "end"] })]), h$3("ul", { class: ["nav-screen-dropdown", { hide: !n2.value }] }, t2.value.children.map((r2) => h$3("li", { class: "dropdown-item" }, "children" in r2 ? [h$3("h4", { class: "dropdown-subtitle" }, r2.link ? h$3($, { config: r2, onFocusout: () => {
    s2(r2, t2.value.children) && r2.children.length === 0 && (n2.value = false);
  } }) : h$3("span", r2.text)), h$3("ul", { class: "dropdown-subitem-wrapper" }, r2.children.map((i2) => h$3("li", { class: "dropdown-subitem" }, h$3($, { config: i2, onFocusout: () => {
    s2(i2, r2.children) && s2(r2, t2.value.children) && (n2.value = false);
  } }))))] : h$3($, { config: r2, onFocusout: () => {
    s2(r2, t2.value.children) && (n2.value = false);
  } }))))];
} }), rl = defineComponent({ name: "NavScreenLinks", setup() {
  const e2 = We();
  return () => e2.value.length ? h$3("nav", { class: "nav-screen-links" }, e2.value.map((a2) => h$3("div", { class: "navbar-links-item" }, "children" in a2 ? h$3(ol, { config: a2 }) : h$3($, { config: a2 })))) : null;
} });
const Ue = () => h$3(u$2, { name: "dark" }, () => h$3("path", { d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z" }));
Ue.displayName = "DarkIcon";
const Ye = () => h$3(u$2, { name: "light" }, () => h$3("path", { d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z" }));
Ye.displayName = "LightIcon";
const Xe$1 = () => h$3(u$2, { name: "auto" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z" }));
Xe$1.displayName = "AutoIcon";
const Ke$1 = () => h$3(u$2, { name: "enter-fullscreen" }, () => h$3("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
Ke$1.displayName = "EnterFullScreenIcon";
const Je$1 = () => h$3(u$2, { name: "cancel-fullscreen" }, () => h$3("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
Je$1.displayName = "CancelFullScreenIcon";
const Qe$1 = () => h$3(u$2, { name: "outlook" }, () => [h$3("path", { d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z" })]);
Qe$1.displayName = "OutlookIcon";
var Ze$1 = defineComponent({ name: "AppearanceSwitch", setup() {
  const { config: e2, status: a2 } = U(), t2 = () => {
    e2.value === "switch" ? a2.value = { light: "dark", dark: "auto", auto: "light" }[a2.value] : a2.value = a2.value === "light" ? "dark" : "light";
  };
  return () => h$3("button", { type: "button", id: "appearance-switch", onClick: () => t2() }, [h$3(Xe$1, { style: { display: a2.value === "auto" ? "block" : "none" } }), h$3(Ue, { style: { display: a2.value === "dark" ? "block" : "none" } }), h$3(Ye, { style: { display: a2.value === "light" ? "block" : "none" } })]);
} }), sl = defineComponent({ name: "AppearanceMode", setup() {
  const e2 = m$1(), { canToggle: a2 } = U(), t2 = computed(() => e2.value.outlookLocales.darkmode);
  return () => a2.value ? h$3("div", { class: "appearance-wrapper" }, [h$3("label", { class: "appearance-title", for: "appearance-switch" }, t2.value), h$3(Ze$1)]) : null;
} });
const fe$1 = "VUEPRESS_THEME_COLOR";
var il = defineComponent({ name: "ThemeColorPicker", props: { themeColor: { type: Object, required: true } }, setup(e2) {
  const a2 = (t2 = "") => {
    const o2 = document.documentElement.classList, n2 = f$2(e2.themeColor);
    if (!t2) {
      localStorage.removeItem(fe$1), o2.remove(...n2);
      return;
    }
    o2.remove(...n2.filter((s2) => s2 !== t2)), o2.add(t2), localStorage.setItem(fe$1, t2);
  };
  return onMounted(() => {
    const t2 = localStorage.getItem(fe$1);
    t2 && a2(t2);
  }), () => h$3("ul", { id: "theme-color-picker" }, [h$3("li", h$3("span", { class: "theme-color", onClick: () => a2() })), M$4(e2.themeColor).map(([t2, o2]) => h$3("li", h$3("span", { style: { background: o2 }, onClick: () => a2(t2) })))]);
} });
const F$1 = pe$1.enableThemeColor === "true", ul = F$1 ? _e$1(M$4(pe$1).filter(([e2]) => e2.startsWith("theme-"))) : {};
var cl = defineComponent({ name: "ThemeColor", setup() {
  const e2 = m$1(), a2 = computed(() => e2.value.outlookLocales.themeColor);
  return () => F$1 ? h$3("div", { class: "theme-color-wrapper" }, [h$3("label", { class: "theme-color-title", for: "theme-color-picker" }, a2.value), h$3(il, { themeColor: ul })]) : null;
} }), ea = defineComponent({ name: "ToggleFullScreenButton", setup() {
  const e2 = m$1(), { isSupported: a2, isFullscreen: t2, toggle: o2 } = useFullscreen(), n2 = computed(() => e2.value.outlookLocales.fullscreen);
  return () => a2 ? h$3("div", { class: "full-screen-wrapper" }, [h$3("label", { class: "full-screen-title", for: "full-screen-switch" }, n2.value), h$3("button", { type: "button", id: "full-screen-switch", class: "full-screen", ariaPressed: t2.value, onClick: () => o2() }, t2.value ? h$3(Je$1) : h$3(Ke$1))]) : null;
} }), aa = defineComponent({ name: "OutlookSettings", setup() {
  const e2 = e$2(), a2 = t$1(), t2 = computed(() => !a2.value && e2.value.fullscreen);
  return () => h$3(ClientOnly, () => [F$1 ? h$3(cl) : null, h$3(sl), t2.value ? h$3(ea) : null]);
} }), vl = defineComponent({ name: "NavScreen", props: { show: Boolean }, emits: ["close"], slots: Object, setup(e2, { emit: a2, slots: t2 }) {
  const o2 = usePageData(), { isMobile: n2 } = Z$1(), s2 = shallowRef(), r2 = useScrollLock(s2);
  return onMounted(() => {
    s2.value = document.body, watch(n2, (i2) => {
      !i2 && e2.show && (r2.value = false, a2("close"));
    }), watch(() => o2.value.path, () => {
      r2.value = false, a2("close");
    });
  }), onUnmounted(() => {
    r2.value = false;
  }), () => h$3(Transition, { name: "fade", onEnter: () => {
    r2.value = true;
  }, onAfterLeave: () => {
    r2.value = false;
  } }, () => {
    var i2, d2;
    return e2.show ? h$3("div", { id: "nav-screen" }, h$3("div", { class: "vp-nav-screen-container" }, [(i2 = t2.before) == null ? void 0 : i2.call(t2), h$3(rl), h$3("div", { class: "vp-outlook-wrapper" }, h$3(aa)), (d2 = t2.after) == null ? void 0 : d2.call(t2)])) : null;
  });
} }), pl = defineComponent({ name: "NavbarBrand", setup() {
  const e2 = useRouteLocale(), a2 = useSiteLocaleData(), t2 = m$1(), o2 = computed(() => t2.value.home || e2.value), n2 = computed(() => a2.value.title), s2 = computed(() => t2.value.navTitle ?? n2.value), r2 = computed(() => t2.value.logo ? withBase(t2.value.logo) : null), i2 = computed(() => t2.value.logoDark ? withBase(t2.value.logoDark) : null);
  return () => h$3(j$2, { to: o2.value, class: "vp-brand" }, () => [r2.value ? h$3("img", { class: ["vp-nav-logo", { light: !!i2.value }], src: r2.value, alt: n2.value }) : null, i2.value ? h$3("img", { class: ["vp-nav-logo dark"], src: i2.value, alt: n2.value }) : null, s2.value ? h$3("span", { class: ["vp-site-name", { "hide-in-pad": r2.value && t2.value.hideSiteNameOnMobile !== false }] }, s2.value) : null]);
} }), dl = defineComponent({ name: "NavbarLinks", setup() {
  const e2 = We();
  return () => e2.value.length ? h$3("nav", { class: "vp-nav-links" }, e2.value.map((a2) => h$3("div", { class: "nav-item hide-in-mobile" }, "children" in a2 ? h$3(_e, { config: a2 }) : h$3($, { config: a2 })))) : null;
} }), ml = defineComponent({ name: "RepoLink", components: { BitbucketIcon: D$2, GiteeIcon: O$2, GitHubIcon: B$2, GitLabIcon: H$3, SourceIcon: G$2 }, setup() {
  const e2 = tl();
  return () => e2.value ? h$3("div", { class: "nav-item vp-repo" }, h$3("a", { class: "vp-repo-link", href: e2.value.link, target: "_blank", rel: "noopener noreferrer", "aria-label": e2.value.label }, h$3(resolveComponent(`${e2.value.type}Icon`), { style: { width: "1.25rem", height: "1.25rem", verticalAlign: "middle" } }))) : null;
} });
const la = ({ active: e2 = false }, { emit: a2 }) => h$3("button", { type: "button", class: ["vp-toggle-navbar-button", { "is-active": e2 }], "aria-label": "Toggle Navbar", "aria-expanded": e2, "aria-controls": "nav-screen", onClick: () => a2("toggle") }, h$3("span", [h$3("span", { class: "vp-top" }), h$3("span", { class: "vp-middle" }), h$3("span", { class: "vp-bottom" })]));
la.displayName = "ToggleNavbarButton";
var hl = la;
const ye$1 = (e2, { emit: a2 }) => h$3("button", { type: "button", class: "vp-toggle-sidebar-button", title: "Toggle Sidebar", onClick: () => a2("toggle") }, h$3("span", { class: "icon" }));
ye$1.displayName = "ToggleSidebarButton", ye$1.emits = ["toggle"];
var gl = ye$1, bl = defineComponent({ name: "OutlookButton", setup() {
  const { isSupported: e2 } = useFullscreen(), a2 = e$2(), t2 = t$1(), o2 = usePageData(), { canToggle: n2 } = U(), s2 = ref(false), r2 = computed(() => !t2.value && a2.value.fullscreen && e2);
  return watch(() => o2.value.path, () => {
    s2.value = false;
  }), () => n2.value || r2.value || F$1 ? h$3("div", { class: "nav-item hide-in-mobile" }, n2.value && !r2.value && !F$1 ? h$3(Ze$1) : r2.value && !n2.value && !F$1 ? h$3(ea) : h$3("button", { type: "button", class: ["outlook-button", { open: s2.value }], tabindex: "-1", "aria-hidden": true }, [h$3(Qe$1), h$3("div", { class: "outlook-dropdown" }, h$3(aa))])) : null;
} }), fl = defineComponent({ name: "NavBar", emits: ["toggleSidebar"], slots: Object, setup(e2, { emit: a2, slots: t2 }) {
  const o2 = m$1(), { isMobile: n2 } = Z$1(), s2 = ref(false), r2 = computed(() => {
    const { navbarAutoHide: p2 = "mobile" } = o2.value;
    return p2 !== "none" && (p2 === "always" || n2.value);
  }), i2 = computed(() => o2.value.navbarLayout || { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }), d2 = { Brand: pl, Language: e$1, Links: dl, Repo: ml, Outlook: bl, Search: Qe$2("Docsearch") ? resolveComponent("Docsearch") : Qe$2("SearchBox") ? resolveComponent("SearchBox") : e$1 }, v2 = (p2) => d2[p2] ?? (Qe$2(p2) ? resolveComponent(p2) : e$1);
  return () => {
    var p2, h2, b2, f2, L2, A2;
    return [h$3("header", { id: "navbar", class: ["vp-navbar", { "auto-hide": r2.value, "hide-icon": o2.value.navbarIcon === false }] }, [h$3("div", { class: "vp-navbar-start" }, [h$3(gl, { onToggle: () => {
      s2.value && (s2.value = false), a2("toggleSidebar");
    } }), (p2 = t2.startBefore) == null ? void 0 : p2.call(t2), (i2.value.start || []).map((g2) => h$3(v2(g2))), (h2 = t2.startAfter) == null ? void 0 : h2.call(t2)]), h$3("div", { class: "vp-navbar-center" }, [(b2 = t2.centerBefore) == null ? void 0 : b2.call(t2), (i2.value.center || []).map((g2) => h$3(v2(g2))), (f2 = t2.centerAfter) == null ? void 0 : f2.call(t2)]), h$3("div", { class: "vp-navbar-end" }, [(L2 = t2.endBefore) == null ? void 0 : L2.call(t2), (i2.value.end || []).map((g2) => h$3(v2(g2))), (A2 = t2.endAfter) == null ? void 0 : A2.call(t2), h$3(hl, { active: s2.value, onToggle: () => {
      s2.value = !s2.value;
    } })])]), h$3(vl, { show: s2.value, onClose: () => {
      s2.value = false;
    } }, { before: () => {
      var g2;
      return (g2 = t2.screenTop) == null ? void 0 : g2.call(t2);
    }, after: () => {
      var g2;
      return (g2 = t2.screenBottom) == null ? void 0 : g2.call(t2);
    } })];
  };
} }), yl = defineComponent({ name: "SidebarChild", props: { config: { type: Object, required: true } }, setup(e2) {
  const a2 = useRoute();
  return () => [Re$1(e2.config, { class: ["vp-sidebar-link", `vp-sidebar-${e2.config.type}`, { active: j$1(a2, e2.config, true) }], exact: true }), He$1(e2.config.children)];
} }), kl = defineComponent({ name: "SidebarGroup", props: { config: { type: Object, required: true }, open: { type: Boolean, required: true } }, emits: ["toggle"], setup(e2, { emit: a2 }) {
  const t2 = useRoute(), o2 = computed(() => j$1(t2, e2.config)), n2 = computed(() => j$1(t2, e2.config, true));
  return () => {
    const { collapsible: s2, children: r2 = [], icon: i2, prefix: d2, link: v2, text: p2 } = e2.config;
    return h$3("section", { class: "vp-sidebar-group" }, [h$3(s2 ? "button" : "p", { class: ["vp-sidebar-heading", { clickable: s2 || v2, exact: n2.value, active: o2.value }], ...s2 ? { type: "button", onClick: () => a2("toggle"), onKeydown: (h2) => {
      h2.key === "Enter" && a2("toggle");
    } } : {} }, [h$3(V$1, { icon: i2 }), v2 ? h$3($, { class: "vp-sidebar-title", config: { text: p2, link: v2 }, noExternalLinkIcon: true }) : h$3("span", { class: "vp-sidebar-title" }, p2), s2 ? h$3("span", { class: ["vp-arrow", e2.open ? "down" : "end"] }) : null]), e2.open || !s2 ? h$3(ta, { key: d2, config: r2 }) : null]);
  };
} }), ta = defineComponent({ name: "SidebarLinks", props: { config: { type: Array, required: true } }, setup(e2) {
  const a2 = useRoute(), t2 = ref(-1), o2 = (n2) => {
    t2.value = n2 === t2.value ? -1 : n2;
  };
  return watch(() => a2.path, () => {
    const n2 = e2.config.findIndex((s2) => Ve(a2, s2));
    t2.value = n2;
  }, { immediate: true, flush: "post" }), () => h$3("ul", { class: "vp-sidebar-links" }, e2.config.map((n2, s2) => h$3("li", n2.type === "group" ? h$3(kl, { config: n2, open: s2 === t2.value, onToggle: () => o2(s2) }) : h$3(yl, { config: n2 }))));
} }), wl = defineComponent({ name: "SideBar", slots: Object, setup(e2, { slots: a2 }) {
  const t2 = useRoute(), o2 = m$1(), n2 = be$1(), s2 = shallowRef();
  return onMounted(() => {
    watch(() => t2.hash, (r2) => {
      const i2 = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t2.path}${r2}"]`);
      if (!i2)
        return;
      const { top: d2, height: v2 } = s2.value.getBoundingClientRect(), { top: p2, height: h2 } = i2.getBoundingClientRect();
      p2 < d2 ? i2.scrollIntoView(true) : p2 + h2 > d2 + v2 && i2.scrollIntoView(false);
    });
  }), () => {
    var r2, i2, d2;
    return h$3("aside", { ref: s2, id: "sidebar", class: ["vp-sidebar", { "hide-icon": o2.value.sidebarIcon === false }] }, [(r2 = a2.top) == null ? void 0 : r2.call(a2), ((i2 = a2.default) == null ? void 0 : i2.call(a2)) || h$3(ta, { config: n2.value }), (d2 = a2.bottom) == null ? void 0 : d2.call(a2)]);
  };
} }), Il = defineComponent({ name: "CommonWrapper", props: { containerClass: { type: String, default: "" }, noNavbar: Boolean, noSidebar: Boolean, noToc: Boolean }, slots: Object, setup(e2, { slots: a2 }) {
  const t2 = useRouter(), o2 = usePageData(), n2 = usePageFrontmatter(), s2 = m$1(), { isMobile: r2, isPC: i2 } = Z$1(), [d2, v2] = useToggle(false), [p2, h2] = useToggle(false), b2 = be$1(), f2 = ref(false), L2 = computed(() => e2.noNavbar || n2.value.navbar === false || s2.value.navbar === false ? false : !!(o2.value.title || s2.value.logo || s2.value.repo || s2.value.navbar)), A2 = computed(() => e2.noSidebar ? false : n2.value.sidebar !== false && b2.value.length !== 0 && !n2.value.home), g2 = computed(() => e2.noToc || n2.value.home ? false : n2.value.toc || s2.value.toc !== false && n2.value.toc !== false), w2 = { x: 0, y: 0 }, B2 = (c2) => {
    w2.x = c2.changedTouches[0].clientX, w2.y = c2.changedTouches[0].clientY;
  }, z2 = (c2) => {
    const _2 = c2.changedTouches[0].clientX - w2.x, ee = c2.changedTouches[0].clientY - w2.y;
    Math.abs(_2) > Math.abs(ee) * 1.5 && Math.abs(_2) > 40 && (_2 > 0 && w2.x <= 80 ? v2(true) : v2(false));
  }, D2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let x2 = 0;
  return useEventListener("scroll", useThrottleFn(() => {
    const c2 = D2();
    c2 <= 58 || c2 < x2 ? f2.value = false : x2 + 200 < c2 && !d2.value && (f2.value = true), x2 = c2;
  }, 300, true)), watch(r2, (c2) => {
    c2 || v2(false);
  }), onMounted(() => {
    const c2 = useScrollLock(document.body);
    watch(d2, (ee) => {
      c2.value = ee;
    });
    const _2 = t2.afterEach(() => {
      v2(false);
    });
    onUnmounted(() => {
      c2.value = false, _2();
    });
  }), () => h$3(Qe$2("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : oe, () => h$3("div", { class: ["theme-container", { "no-navbar": !L2.value, "no-sidebar": !A2.value && !(a2.sidebar || a2.sidebarTop || a2.sidebarBottom), "has-toc": g2.value, "hide-navbar": f2.value, "sidebar-collapsed": !r2.value && !i2.value && p2.value, "sidebar-open": r2.value && d2.value }, e2.containerClass, n2.value.containerClass || ""], onTouchStart: B2, onTouchEnd: z2 }, [L2.value ? h$3(fl, { onToggleSidebar: () => v2() }, { startBefore: () => {
    var c2;
    return (c2 = a2.navbarStartBefore) == null ? void 0 : c2.call(a2);
  }, startAfter: () => {
    var c2;
    return (c2 = a2.navbarStartAfter) == null ? void 0 : c2.call(a2);
  }, centerBefore: () => {
    var c2;
    return (c2 = a2.navbarCenterBefore) == null ? void 0 : c2.call(a2);
  }, centerAfter: () => {
    var c2;
    return (c2 = a2.navbarCenterAfter) == null ? void 0 : c2.call(a2);
  }, endBefore: () => {
    var c2;
    return (c2 = a2.navbarEndBefore) == null ? void 0 : c2.call(a2);
  }, endAfter: () => {
    var c2;
    return (c2 = a2.navbarEndAfter) == null ? void 0 : c2.call(a2);
  }, screenTop: () => {
    var c2;
    return (c2 = a2.navScreenTop) == null ? void 0 : c2.call(a2);
  }, screenBottom: () => {
    var c2;
    return (c2 = a2.navScreenBottom) == null ? void 0 : c2.call(a2);
  } }) : null, h$3(Transition, { name: "fade" }, () => d2.value ? h$3("div", { class: "vp-sidebar-mask", onClick: () => v2(false) }) : null), h$3(Transition, { name: "fade" }, () => r2.value ? null : h$3("div", { class: "toggle-sidebar-wrapper", onClick: () => h2() }, h$3("span", { class: ["arrow", p2.value ? "end" : "start"] }))), h$3(wl, {}, { ...a2.sidebar ? { default: () => a2.sidebar() } : {}, top: () => {
    var c2;
    return (c2 = a2.sidebarTop) == null ? void 0 : c2.call(a2);
  }, bottom: () => {
    var c2;
    return (c2 = a2.sidebarBottom) == null ? void 0 : c2.call(a2);
  } }), a2.default(), h$3(al)]));
} }), Tl = defineComponent({ name: "DropTransition", props: { type: { type: String, default: "single" }, delay: { type: Number, default: 0 }, duration: { type: Number, default: 0.25 }, appear: Boolean }, slots: Object, setup(e2, { slots: a2 }) {
  const t2 = (n2) => {
    n2.style.transition = `transform ${e2.duration}s ease-in-out ${e2.delay}s, opacity ${e2.duration}s ease-in-out ${e2.delay}s`, n2.style.transform = "translateY(-20px)", n2.style.opacity = "0";
  }, o2 = (n2) => {
    n2.style.transform = "translateY(0)", n2.style.opacity = "1";
  };
  return () => h$3(e2.type === "single" ? Transition : TransitionGroup, { name: "drop", appear: e2.appear, onAppear: t2, onAfterAppear: o2, onEnter: t2, onAfterEnter: o2, onBeforeLeave: t2 }, () => a2.default());
} });
const ke$1 = ({ custom: e2 }) => h$3(Content, { class: ["theme-hope-content", { custom: e2 }] });
ke$1.displayName = "MarkdownContent", ke$1.props = { custom: Boolean };
var Ll = ke$1;
const na = () => h$3(u$2, { name: "author" }, () => h$3("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
na.displayName = "AuthorIcon";
const oa = () => h$3(u$2, { name: "calendar" }, () => h$3("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
oa.displayName = "CalendarIcon";
const ra = () => h$3(u$2, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
ra.displayName = "CategoryIcon";
const sa = () => h$3(u$2, { name: "eye" }, () => h$3("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
sa.displayName = "EyeIcon";
const ia = () => h$3(u$2, { name: "fire" }, () => h$3("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
ia.displayName = "FireIcon";
const ua = () => h$3(u$2, { name: "print" }, () => h$3("path", { d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z" }));
ua.displayName = "PrintIcon";
const ca = () => h$3(u$2, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
ca.displayName = "TagIcon";
const va = () => h$3(u$2, { name: "timer" }, () => h$3("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
va.displayName = "TimerIcon";
const pa = () => h$3(u$2, { name: "word" }, () => [h$3("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), h$3("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
pa.displayName = "WordIcon";
const M$1 = () => {
  const e2 = m$1();
  return computed(() => e2.value.metaLocales);
};
var Sl = defineComponent({ name: "AuthorInfo", inheritAttrs: false, props: { author: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const a2 = M$1();
  return () => e2.author.length ? h$3("span", { class: "page-author-info", "aria-label": `${a2.value.author}${e2.pure ? "" : "🖊"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(na), h$3("span", e2.author.map((t2) => t2.url ? h$3("a", { class: "page-author-item", href: t2.url, target: "_blank", rel: "noopener noreferrer" }, t2.name) : h$3("span", { class: "page-author-item" }, t2.name))), h$3("span", { property: "author", content: e2.author.map((t2) => t2.name).join(", ") })]) : null;
} }), Cl = defineComponent({ name: "CategoryInfo", inheritAttrs: false, props: { category: { type: Array, required: true }, pure: Boolean }, setup(e2) {
  const a2 = useRouter(), t2 = usePageData(), o2 = M$1(), n2 = (s2, r2 = "") => {
    r2 && t2.value.path !== r2 && (s2.preventDefault(), a2.push(r2));
  };
  return () => e2.category.length ? h$3("span", { class: "page-category-info", "aria-label": `${o2.value.category}${e2.pure ? "" : "🌈"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ra), e2.category.map(({ name: s2, path: r2 }) => h$3("span", { class: ["page-category-item", { [`category${he$2(s2, 9)}`]: !e2.pure, clickable: r2 }], role: r2 ? "navigation" : "", onClick: (i2) => n2(i2, r2) }, s2)), h$3("meta", { property: "articleSection", content: e2.category.map(({ name: s2 }) => s2).join(",") })]) : null;
} }), $l = defineComponent({ name: "DateInfo", inheritAttrs: false, props: { date: { type: Object, default: null }, localizedDate: { type: String, default: "" }, pure: Boolean }, setup(e2) {
  const a2 = usePageLang(), t2 = M$1();
  return () => e2.date ? h$3("span", { class: "page-date-info", "aria-label": `${t2.value.date}${e2.pure ? "" : "📅"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(oa), h$3("span", h$3(ClientOnly, () => e2.localizedDate || e2.date.toLocaleDateString(a2.value))), h$3("meta", { property: "datePublished", content: e2.date.toISOString() || "" })]) : null;
} }), Ml = defineComponent({ name: "OriginalInfo", inheritAttrs: false, props: { isOriginal: Boolean }, setup(e2) {
  const a2 = M$1();
  return () => e2.isOriginal ? h$3("span", { class: "page-original-info" }, a2.value.origin) : null;
} }), Al = defineComponent({ name: "PageViewInfo", inheritAttrs: false, props: { pageview: { type: [Boolean, String], default: false }, pure: Boolean }, setup(e2) {
  const a2 = useRoute(), t2 = M$1(), o2 = shallowRef(), n2 = ref(0);
  return useMutationObserver(o2, () => {
    const s2 = o2.value.textContent;
    s2 && !isNaN(Number(s2)) && (n2.value = Number(s2));
  }, { childList: true }), () => e2.pageview ? h$3("span", { class: "page-pageview-info", "aria-label": `${t2.value.views}${e2.pure ? "" : "🔢"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(n2.value < 1e3 ? sa : ia), h$3("span", { ref: o2, id: "ArtalkPV", class: "waline-pageview-count", "data-path": isString(e2.pageview) ? e2.pageview : withBase(a2.path) }, "...")]) : null;
} }), Bl = defineComponent({ name: "ReadingTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const a2 = M$1(), t2 = computed(() => {
    if (!e2.readingTime)
      return null;
    const { minutes: o2 } = e2.readingTime;
    return o2 < 1 ? "PT1M" : `PT${Math.round(o2)}M`;
  });
  return () => {
    var o2, n2;
    return (o2 = e2.readingTimeLocale) != null && o2.time ? h$3("span", { class: "page-reading-time-info", "aria-label": `${a2.value.readingTime}${e2.pure ? "" : "⌛"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(va), h$3("span", (n2 = e2.readingTimeLocale) == null ? void 0 : n2.time), h$3("meta", { property: "timeRequired", content: t2.value })]) : null;
  };
} }), zl = defineComponent({ name: "TagInfo", inheritAttrs: false, props: { tag: { type: Array, default: () => [] }, pure: Boolean }, setup(e2) {
  const a2 = useRouter(), t2 = usePageData(), o2 = M$1(), n2 = (s2, r2 = "") => {
    r2 && t2.value.path !== r2 && (s2.preventDefault(), a2.push(r2));
  };
  return () => e2.tag.length ? h$3("span", { class: "page-tag-info", "aria-label": `${o2.value.tag}${e2.pure ? "" : "🏷"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(ca), e2.tag.map(({ name: s2, path: r2 }) => h$3("span", { class: ["page-tag-item", { [`tag${he$2(s2, 9)}`]: !e2.pure, clickable: r2 }], role: r2 ? "navigation" : "", onClick: (i2) => n2(i2, r2) }, s2)), h$3("meta", { property: "keywords", content: e2.tag.map(({ name: s2 }) => s2).join(",") })]) : null;
} }), xl = defineComponent({ name: "ReadTimeInfo", inheritAttrs: false, props: { readingTime: { type: Object, default: () => null }, readingTimeLocale: { type: Object, default: () => null }, pure: Boolean }, setup(e2) {
  const a2 = M$1();
  return () => {
    var t2, o2, n2;
    return (t2 = e2.readingTimeLocale) != null && t2.words ? h$3("span", { class: "page-word-info", "aria-label": `${a2.value.words}${e2.pure ? "" : "🔠"}`, ...e2.pure ? {} : { "data-balloon-pos": "down" } }, [h$3(pa), h$3("span", (o2 = e2.readingTimeLocale) == null ? void 0 : o2.words), h$3("meta", { property: "wordCount", content: (n2 = e2.readingTime) == null ? void 0 : n2.words })]) : null;
  };
} }), Nl = defineComponent({ name: "PageInfo", components: { AuthorInfo: Sl, CategoryInfo: Cl, DateInfo: $l, OriginalInfo: Ml, PageViewInfo: Al, ReadingTimeInfo: Bl, TagInfo: zl, WordInfo: xl }, props: { items: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"] }, info: { type: Object, required: true } }, setup(e2) {
  const a2 = t$1();
  return () => e2.items ? h$3("div", { class: "page-info" }, e2.items.map((t2) => h$3(resolveComponent(`${t2}Info`), { ...e2.info, pure: a2.value }))) : null;
} }), El = defineComponent({ name: "PrintButton", setup() {
  const e2 = e$2(), a2 = m$1();
  return () => e2.value.print === false ? null : h$3("button", { type: "button", class: "print-button", title: a2.value.metaLocales.print, onClick: () => {
    window.print();
  } }, h$3(ua));
} });
const Dl = ({ title: e2, level: a2, slug: t2 }) => h$3(j$2, { to: `#${t2}`, class: ["toc-link", `level${a2}`] }, () => e2), we$2 = (e2, a2) => {
  const t2 = useRoute();
  return e2.length && a2 > 0 ? h$3("ul", { class: "toc-list" }, e2.map((o2) => {
    const n2 = we$2(o2.children, a2 - 1);
    return [h$3("li", { class: ["toc-item", { active: Ge$1(t2, `#${o2.slug}`) }] }, Dl(o2)), n2 ? h$3("li", n2) : null];
  })) : null;
};
var Ol = defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, slots: Object, setup(e2, { slots: a2 }) {
  const t2 = useRoute(), o2 = usePageData(), n2 = M$1(), s2 = shallowRef(), r2 = ref("-1.7rem"), i2 = (v2) => {
    var p2;
    (p2 = s2.value) == null || p2.scrollTo({ top: v2, behavior: "smooth" });
  }, d2 = () => {
    if (s2.value) {
      const v2 = document.querySelector(".toc-item.active");
      v2 ? r2.value = `${v2.getBoundingClientRect().top - s2.value.getBoundingClientRect().top + s2.value.scrollTop}px` : r2.value = "-1.7rem";
    } else
      r2.value = "-1.7rem";
  };
  return onMounted(() => {
    watch(() => t2.hash, (v2) => {
      if (s2.value) {
        const p2 = document.querySelector(`#toc a.toc-link[href$="${v2}"]`);
        if (!p2)
          return;
        const { top: h2, height: b2 } = s2.value.getBoundingClientRect(), { top: f2, height: L2 } = p2.getBoundingClientRect();
        f2 < h2 ? i2(s2.value.scrollTop + f2 - h2) : f2 + L2 > h2 + b2 && i2(s2.value.scrollTop + f2 + L2 - h2 - b2);
      }
    }), watch(() => t2.fullPath, () => d2(), { flush: "post", immediate: true });
  }), () => {
    var v2, p2;
    const h2 = e2.items.length ? we$2(e2.items, e2.headerDepth) : o2.value.headers ? we$2(o2.value.headers, e2.headerDepth) : null;
    return h2 ? h$3("div", { class: "toc-place-holder" }, [h$3("aside", { id: "toc" }, [(v2 = a2.before) == null ? void 0 : v2.call(a2), h$3("div", { class: "toc-header" }, [n2.value.toc, h$3(El)]), h$3("div", { class: "toc-wrapper", ref: s2 }, [h2, h$3("div", { class: "toc-marker", style: { top: r2.value } })]), (p2 = a2.after) == null ? void 0 : p2.call(a2)])]) : null;
  };
} }), Pl = defineComponent({ name: "SkipLink", props: { content: { type: String, default: "main-content" } }, setup(e2) {
  const a2 = usePageData(), t2 = m$1(), o2 = shallowRef(), n2 = ({ target: s2 }) => {
    const r2 = document.querySelector(s2.hash);
    if (r2) {
      const i2 = () => {
        r2.removeAttribute("tabindex"), r2.removeEventListener("blur", i2);
      };
      r2.setAttribute("tabindex", "-1"), r2.addEventListener("blur", i2), r2.focus(), window.scrollTo(0, 0);
    }
  };
  return onMounted(() => {
    watch(() => a2.value.path, () => o2.value.focus());
  }), () => [h$3("span", { ref: o2, tabindex: "-1" }), h$3("a", { href: `#${e2.content}`, class: "vp-skip-link sr-only", onClick: n2 }, t2.value.routeLocales.skipToContent)];
} });
let n = null, e = null;
const m = { wait: () => n, pending: () => {
  n = new Promise((l2) => e = l2);
}, resolve: () => {
  e == null || e(), n = null, e = null;
} }, t = () => m;
var c$1 = defineComponent({ name: "FadeSlideY", slots: Object, setup(l2, { slots: o2 }) {
  const { resolve: s2, pending: i2 } = t();
  return () => h$3(Transition, { name: "fade-slide-y", mode: "out-in", onBeforeEnter: s2, onBeforeLeave: i2 }, () => {
    var r2;
    return (r2 = o2.default) == null ? void 0 : r2.call(o2);
  });
} });
const De2 = (r2, a2) => {
  const o2 = r2.replace(a2, "/").split("/"), i2 = [];
  let t2 = removeEndingSlash(a2);
  return o2.forEach((l2, n2) => {
    n2 !== o2.length - 1 ? (t2 += `${l2}/`, i2.push({ link: t2, name: l2 || "Home" })) : l2 !== "" && (t2 += l2, i2.push({ link: t2, name: l2 }));
  }), i2;
}, z$1 = (r2, { slots: a2 }) => {
  var o2, i2;
  const { bgImage: t2, bgImageDark: l2, bgImageStyle: n2, color: s2, description: p2, image: u2, imageDark: c2, header: v2, features: h2 = [] } = r2;
  return h$3("div", { class: "vp-feature-wrapper" }, [t2 ? h$3("div", { class: ["vp-feature-bg", { light: l2 }], style: [{ "background-image": `url(${t2})` }, n2] }) : null, l2 ? h$3("div", { class: "vp-feature-bg dark", style: [{ "background-image": `url(${l2})` }, n2] }) : null, h$3("div", { class: "vp-feature", style: s2 ? { color: s2 } : {} }, [((o2 = a2.image) == null ? void 0 : o2.call(a2, r2)) || [u2 ? h$3("img", { class: ["vp-feature-image", { light: c2 }], src: withBase(u2), alt: v2 }) : null, c2 ? h$3("img", { class: "vp-feature-image dark", src: withBase(c2), alt: v2 }) : null], ((i2 = a2.info) == null ? void 0 : i2.call(a2, r2)) || [v2 ? h$3("h2", { class: "vp-feature-header" }, v2) : null, p2 ? h$3("p", { class: "vp-feature-description", innerHTML: p2 }) : null], h2.length ? h$3("div", { class: "vp-features" }, h2.map(({ icon: k2, title: m2, details: S2, link: L2 }) => {
    const P2 = [h$3("h3", { class: "vp-feature-title" }, [h$3(V$1, { icon: k2 }), h$3("span", { innerHTML: m2 })]), h$3("p", { class: "vp-feature-details", innerHTML: S2 })];
    return L2 ? isLinkExternal(L2) ? h$3("a", { class: "vp-feature-item link", href: L2, role: "navigation", "aria-label": m2, target: "_blank" }, P2) : h$3(j$2, { class: "vp-feature-item link", to: L2, role: "navigation", "aria-label": m2 }, () => P2) : h$3("div", { class: "vp-feature-item" }, P2);
  })) : null])]);
};
z$1.displayName = "FeaturePanel";
var W$1 = z$1, Ie = defineComponent({ name: "HeroInfo", slots: Object, setup(r2, { slots: a2 }) {
  const o2 = usePageFrontmatter(), i2 = useSiteLocaleData(), t2 = computed(() => o2.value.heroFullScreen ?? false), l2 = computed(() => {
    const { heroText: u2, tagline: c2 } = o2.value;
    return { text: u2 ?? i2.value.title ?? "Hello", tagline: c2 ?? i2.value.description ?? "", isFullScreen: t2.value };
  }), n2 = computed(() => {
    const { heroText: u2, heroImage: c2, heroImageDark: v2, heroAlt: h2, heroImageStyle: k2 } = o2.value;
    return { image: c2 ? withBase(c2) : null, imageDark: v2 ? withBase(v2) : null, heroStyle: k2, alt: h2 || u2 || "hero image", isFullScreen: t2.value };
  }), s2 = computed(() => {
    const { bgImage: u2, bgImageDark: c2, bgImageStyle: v2 } = o2.value;
    return { image: a$5(u2) ? withBase(u2) : null, imageDark: a$5(c2) ? withBase(c2) : null, bgStyle: v2, isFullScreen: t2.value };
  }), p2 = computed(() => o2.value.actions ?? []);
  return () => {
    var u2, c2, v2;
    return h$3("header", { class: ["vp-hero-info-wrapper", { fullscreen: t2.value }] }, [((u2 = a2.heroBg) == null ? void 0 : u2.call(a2, s2.value)) || [s2.value.image ? h$3("div", { class: ["vp-hero-mask", { light: s2.value.imageDark }], style: [{ "background-image": `url(${s2.value.image})` }, s2.value.bgStyle] }) : null, s2.value.imageDark ? h$3("div", { class: "vp-hero-mask dark", style: [{ "background-image": `url(${s2.value.imageDark})` }, s2.value.bgStyle] }) : null], h$3("div", { class: "vp-hero-info" }, [((c2 = a2.heroImage) == null ? void 0 : c2.call(a2, n2.value)) || h$3(Tl, { appear: true, type: "group" }, () => [n2.value.image ? h$3("img", { key: "light", class: ["vp-hero-image", { light: n2.value.imageDark }], style: n2.value.heroStyle, src: n2.value.image, alt: n2.value.alt }) : null, n2.value.imageDark ? h$3("img", { key: "dark", class: "vp-hero-image dark", style: n2.value.heroStyle, src: n2.value.imageDark, alt: n2.value.alt }) : null]), ((v2 = a2.heroInfo) == null ? void 0 : v2.call(a2, l2.value)) ?? h$3("div", { class: "vp-hero-infos" }, [l2.value.text ? h$3(Tl, { appear: true, delay: 0.04 }, () => h$3("h1", { id: "main-title" }, l2.value.text)) : null, l2.value.tagline ? h$3(Tl, { appear: true, delay: 0.08 }, () => h$3("p", { class: "vp-description", innerHTML: l2.value.tagline })) : null, p2.value.length ? h$3(Tl, { appear: true, delay: 0.12 }, () => h$3("p", { class: "vp-actions" }, p2.value.map((h2) => h$3($, { class: ["vp-action", h2.type || "default"], config: h2, noExternalLinkIcon: true })))) : null])])]);
  };
} });
const _$2 = (r2, { slots: a2 }) => {
  var o2, i2, t2;
  const { bgImage: l2, bgImageDark: n2, bgImageStyle: s2, color: p2, description: u2, image: c2, imageDark: v2, header: h2, highlights: k2 = [], type: m2 = "un-order" } = r2;
  return h$3("div", { class: "vp-highlight-wrapper", style: p2 ? { color: p2 } : {} }, [l2 ? h$3("div", { class: ["vp-highlight-bg", { light: n2 }], style: [{ "background-image": `url(${l2})` }, s2] }) : null, n2 ? h$3("div", { class: "vp-highlight-bg dark", style: [{ "background-image": `url(${n2})` }, s2] }) : null, h$3("div", { class: "vp-highlight" }, [((o2 = a2.image) == null ? void 0 : o2.call(a2, r2)) || [c2 ? h$3("img", { class: ["vp-highlight-image", { light: v2 }], src: withBase(c2), alt: h2 }) : null, v2 ? h$3("img", { class: "vp-highlight-image dark", src: withBase(v2), alt: h2 }) : null], ((i2 = a2.info) == null ? void 0 : i2.call(a2, r2)) || [h$3("div", { class: "vp-highlight-info-wrapper" }, h$3("div", { class: "vp-highlight-info" }, [h2 ? h$3("h2", { class: "vp-highlight-header", innerHTML: h2 }) : null, u2 ? h$3("p", { class: "vp-highlight-description", innerHTML: u2 }) : null, ((t2 = a2.highlights) == null ? void 0 : t2.call(a2, k2)) || h$3(m2 === "order" ? "ol" : m2 === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, k2.map(({ icon: S2, title: L2, details: P2, link: T2 }) => {
    const $2 = [h$3(m2 === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [S2 ? h$3(V$1, { class: "vp-highlight-icon", icon: S2 }) : null, h$3("span", { innerHTML: L2 })]), P2 ? h$3(m2 === "no-order" ? "dd" : "p", { class: "vp-highlight-details", innerHTML: P2 }) : null];
    return h$3(m2 === "no-order" ? "div" : "li", { class: ["vp-highlight-item-wrapper", { link: T2 }] }, T2 ? ye$2(T2) ? h$3("a", { class: "vp-highlight-item link", href: T2, role: "navigation", "aria-label": L2, target: "_blank" }, $2) : h$3(j$2, { class: "vp-highlight-item link", to: T2, role: "navigation", "aria-label": L2 }, () => $2) : h$3("div", { class: "vp-highlight-item" }, $2));
  }))]))]])]);
};
_$2.displayName = "HighlightPanel";
var Se$1 = _$2, Pe = defineComponent({ name: "HomePage", slots: Object, setup(r2, { slots: a2 }) {
  const o2 = t$1(), i2 = usePageFrontmatter(), t2 = computed(() => {
    const { features: n2 } = i2.value;
    return isArray(n2) ? n2 : null;
  }), l2 = computed(() => {
    const { highlights: n2 } = i2.value;
    return isArray(n2) ? n2 : null;
  });
  return () => {
    var n2, s2, p2, u2;
    return h$3("main", { id: "main-content", class: ["vp-project-home ", { pure: o2.value }], "aria-labelledby": i2.value.heroText === null ? "" : "main-title" }, [(n2 = a2.top) == null ? void 0 : n2.call(a2), h$3(Ie), ((s2 = l2.value) == null ? void 0 : s2.map((c2) => "features" in c2 ? h$3(W$1, c2) : h$3(Se$1, c2))) || (t2.value ? h$3(Tl, { appear: true, delay: 0.24 }, () => h$3(W$1, { features: t2.value })) : null), (p2 = a2.center) == null ? void 0 : p2.call(a2), h$3(Tl, { appear: true, delay: 0.32 }, () => h$3(Ll)), (u2 = a2.bottom) == null ? void 0 : u2.call(a2)]);
  };
} }), we$1 = defineComponent({ name: "BreadCrumb", setup() {
  const r2 = useRouter(), a2 = usePageData(), o2 = useRouteLocale(), i2 = usePageFrontmatter(), t2 = m$1(), l2 = shallowRef([]), n2 = computed(() => (i2.value.breadcrumb || i2.value.breadcrumb !== false && t2.value.breadcrumb !== false) && l2.value.length > 1), s2 = computed(() => i2.value.breadcrumbIcon || i2.value.breadcrumbIcon !== false && t2.value.breadcrumbIcon !== false), p2 = () => {
    const u2 = r2.getRoutes(), c2 = De2(a2.value.path, o2.value).map(({ link: v2, name: h2 }) => {
      const k2 = u2.find((m2) => m2.path === v2);
      if (k2) {
        const { meta: m2, path: S2 } = w(r2, k2.path);
        return { title: m2[R$1.shortTitle] || m2[R$1.title] || h2, icon: m2[R$1.icon], path: S2 };
      }
      return null;
    }).filter((v2) => v2 !== null);
    c2.length > 1 && (l2.value = c2);
  };
  return onMounted(() => {
    p2(), watch(() => a2.value.path, p2);
  }), () => h$3("nav", { class: ["vp-breadcrumb", { disable: !n2.value }] }, n2.value ? h$3("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, l2.value.map((u2, c2) => h$3("li", { class: { "is-active": l2.value.length - 1 === c2 }, property: "itemListElement", typeof: "ListItem" }, [h$3(j$2, { to: u2.path, property: "item", typeof: "WebPage" }, () => [s2.value ? h$3(V$1, { icon: u2.icon }) : null, h$3("span", { property: "name" }, u2.title || "Unknown")]), h$3("meta", { property: "position", content: c2 + 1 })]))) : []);
} });
const K$2 = (r2) => {
  const a2 = useRouter();
  return r2 === false ? false : isString(r2) ? H(a2, r2, true) : isPlainObject(r2) ? r2 : null;
}, M = (r2, a2, o2) => {
  const i2 = r2.findIndex((t2) => t2.link === a2);
  if (i2 !== -1) {
    const t2 = r2[i2 + o2];
    return t2 != null && t2.link ? t2 : null;
  }
  for (const t2 of r2)
    if (t2.children) {
      const l2 = M(t2.children, a2, o2);
      if (l2)
        return l2;
    }
  return null;
};
var Te = defineComponent({ name: "PageNav", setup() {
  const r2 = m$1(), a2 = usePageFrontmatter(), o2 = be$1(), i2 = usePageData(), t2 = Fa(), l2 = computed(() => {
    const s2 = K$2(a2.value.prev);
    return s2 === false ? null : s2 || (r2.value.prevLink === false ? null : M(o2.value, i2.value.path, -1));
  }), n2 = computed(() => {
    const s2 = K$2(a2.value.next);
    return s2 === false ? null : s2 || (r2.value.nextLink === false ? null : M(o2.value, i2.value.path, 1));
  });
  return useEventListener("keydown", (s2) => {
    s2.altKey && (s2.key === "ArrowRight" ? n2.value && (t2(n2.value.link), s2.preventDefault()) : s2.key === "ArrowLeft" && l2.value && (t2(l2.value.link), s2.preventDefault()));
  }), () => l2.value || n2.value ? h$3("nav", { class: "vp-page-nav" }, [l2.value ? h$3($, { class: "prev", config: l2.value }, () => {
    var s2, p2;
    return [h$3("div", { class: "hint" }, [h$3("span", { class: "arrow start" }), r2.value.metaLocales.prev]), h$3("div", { class: "link" }, [h$3(V$1, { icon: (s2 = l2.value) == null ? void 0 : s2.icon }), (p2 = l2.value) == null ? void 0 : p2.text])];
  }) : null, n2.value ? h$3($, { class: "next", config: n2.value }, () => {
    var s2, p2;
    return [h$3("div", { class: "hint" }, [r2.value.metaLocales.next, h$3("span", { class: "arrow end" })]), h$3("div", { class: "link" }, [(s2 = n2.value) == null ? void 0 : s2.text, h$3(V$1, { icon: (p2 = n2.value) == null ? void 0 : p2.icon })])];
  }) : null]) : null;
} });
const xe$1 = { GitHub: ":repo/edit/:branch/:path", GitLab: ":repo/-/edit/:branch/:path", Gitee: ":repo/edit/:branch/:path", Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default" }, He = ({ docsRepo: r2, docsBranch: a2, docsDir: o2, filePathRelative: i2, editLinkPattern: t2 }) => {
  if (!i2)
    return null;
  const l2 = qe$1(r2);
  let n2;
  return t2 ? n2 = t2 : l2 !== null && (n2 = xe$1[l2]), n2 ? n2.replace(/:repo/, isLinkHttp(r2) ? r2 : `https://github.com/${r2}`).replace(/:branch/, a2).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(o2)}/${i2}`)) : null;
}, $e = () => {
  const r2 = m$1(), a2 = usePageData(), o2 = usePageFrontmatter();
  return computed(() => {
    const { repo: i2, docsRepo: t2 = i2, docsBranch: l2 = "main", docsDir: n2 = "", editLink: s2, editLinkPattern: p2 = "" } = r2.value;
    if (!(o2.value.editLink ?? s2 ?? true) || !t2)
      return null;
    const u2 = He({ docsRepo: t2, docsBranch: l2, docsDir: n2, editLinkPattern: p2, filePathRelative: a2.value.filePathRelative });
    return u2 ? { text: r2.value.metaLocales.editLink, link: u2 } : null;
  });
}, Be = () => {
  const r2 = useSiteLocaleData(), a2 = m$1(), o2 = usePageData(), i2 = usePageFrontmatter();
  return computed(() => {
    var t2, l2;
    return !(i2.value.lastUpdated ?? a2.value.lastUpdated ?? true) || !((t2 = o2.value.git) != null && t2.updatedTime) ? null : new Date((l2 = o2.value.git) == null ? void 0 : l2.updatedTime).toLocaleString(r2.value.lang);
  });
}, Ee = () => {
  const r2 = m$1(), a2 = usePageData(), o2 = usePageFrontmatter();
  return computed(() => {
    var i2;
    return o2.value.contributors ?? r2.value.contributors ?? true ? ((i2 = a2.value.git) == null ? void 0 : i2.contributors) ?? null : null;
  });
};
var Me$1 = defineComponent({ name: "PageTitle", setup() {
  const r2 = usePageData(), a2 = usePageFrontmatter(), o2 = m$1(), { info: i2, items: t2 } = Wa();
  return () => h$3("div", { class: "vp-page-title" }, [h$3("h1", [o2.value.titleIcon === false ? null : h$3(V$1, { icon: a2.value.icon }), r2.value.title]), h$3(Nl, { info: i2.value, ...t2.value === null ? {} : { items: t2.value } }), h$3("hr")]);
} });
const q = () => h$3(u$2, { name: "edit" }, () => [h$3("path", { d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z" }), h$3("path", { d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z" })]);
q.displayName = "EditIcon";
var Re = defineComponent({ name: "PageMeta", setup() {
  const r2 = m$1(), a2 = $e(), o2 = Be(), i2 = Ee();
  return () => {
    const { metaLocales: t2 } = r2.value;
    return h$3("footer", { class: "page-meta" }, [a2.value ? h$3("div", { class: "meta-item edit-link" }, h$3($, { class: "label", config: a2.value }, { before: () => h$3(q) })) : null, h$3("div", { class: "meta-item git-info" }, [o2.value ? h$3("div", { class: "update-time" }, [h$3("span", { class: "label" }, `${t2.lastUpdated}: `), h$3(ClientOnly, () => h$3("span", { class: "info" }, o2.value))]) : null, i2.value && i2.value.length ? h$3("div", { class: "contributors" }, [h$3("span", { class: "label" }, `${t2.contributors}: `), i2.value.map(({ email: l2, name: n2 }, s2) => [h$3("span", { class: "contributor", title: `email: ${l2}` }, n2), s2 !== i2.value.length - 1 ? "," : ""])]) : null])]);
  };
} }), Ae = defineComponent({ name: "NormalPage", slots: Object, setup(r2, { slots: a2 }) {
  const o2 = usePageFrontmatter(), i2 = usePageData(), { isDarkmode: t2 } = U(), l2 = m$1(), n2 = computed(() => o2.value.toc || o2.value.toc !== false && l2.value.toc !== false);
  return () => h$3("main", { id: "main-content", class: "vp-page" }, h$3(Qe$2("LocalEncrypt") ? resolveComponent("LocalEncrypt") : oe, () => {
    var s2, p2, u2, c2;
    return [(s2 = a2.top) == null ? void 0 : s2.call(a2), o2.value.cover ? h$3("img", { class: "page-cover", src: withBase(o2.value.cover), alt: i2.value.title, "no-view": "" }) : null, h$3(we$1), h$3(Me$1), n2.value ? h$3(Ol, { headerDepth: o2.value.headerDepth ?? l2.value.headerDepth ?? 2 }, { before: () => {
      var v2;
      return (v2 = a2.tocBefore) == null ? void 0 : v2.call(a2);
    }, after: () => {
      var v2;
      return (v2 = a2.tocAfter) == null ? void 0 : v2.call(a2);
    } }) : null, (p2 = a2.contentBefore) == null ? void 0 : p2.call(a2), h$3(Ll), (u2 = a2.contentAfter) == null ? void 0 : u2.call(a2), h$3(Re), h$3(Te), Qe$2("CommentService") ? h$3(resolveComponent("CommentService"), { darkmode: t2.value }) : null, (c2 = a2.bottom) == null ? void 0 : c2.call(a2)];
  }));
} }), Fe = defineComponent({ name: "Layout", setup() {
  const r2 = e$2(), a2 = m$1(), o2 = usePageData(), i2 = usePageFrontmatter(), { isMobile: t2 } = Z$1(), l2 = computed(() => {
    var n2, s2;
    return ((n2 = a2.value.blog) == null ? void 0 : n2.sidebarDisplay) || ((s2 = r2.value.blog) == null ? void 0 : s2.sidebarDisplay) || "mobile";
  });
  return () => [h$3(Pl), h$3(Il, {}, { default: () => i2.value.home ? h$3(Pe) : h$3(c$1, () => h$3(Ae, { key: o2.value.path })), ...l2.value !== "none" ? { navScreenBottom: () => h$3(resolveComponent("BloggerInfo")) } : {}, ...!t2.value && l2.value === "always" ? { sidebar: () => h$3(resolveComponent("BloggerInfo")) } : {} })];
} }), Ne = defineComponent({ name: "NotFoundHint", setup() {
  const r2 = m$1(), a2 = () => {
    const o2 = r2.value.routeLocales.notFoundMsg;
    return o2[Math.floor(Math.random() * o2.length)];
  };
  return () => h$3("div", { class: "not-found-hint" }, [h$3("p", { class: "error-code" }, "404"), h$3("h1", { class: "error-title" }, r2.value.routeLocales.notFoundTitle), h$3("p", { class: "error-hint" }, a2())]);
} }), Ce = defineComponent({ name: "NotFound", slots: Object, setup(r2, { slots: a2 }) {
  const o2 = useRouteLocale(), i2 = m$1(), { navigate: t2 } = useLink({ to: i2.value.home ?? o2.value });
  return () => [h$3(Pl), h$3(Il, { noSidebar: true }, () => {
    var l2;
    return h$3("main", { id: "main-content", class: "vp-page not-found" }, ((l2 = a2.default) == null ? void 0 : l2.call(a2)) || [h$3(Ne), h$3("div", { class: "actions" }, [h$3("button", { type: "button", class: "action-button", onClick: () => {
      window.history.go(-1);
    } }, i2.value.routeLocales.back), h$3("button", { type: "button", class: "action-button", onClick: () => t2() }, i2.value.routeLocales.home)])]);
  })];
} });
const icons = { "Baidu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1D2FE3"/><path fill="#fff" d="M239.022 704.978c.098-4.865-.314-9.772.162-14.591 5.178-52.464 197.571-253.377 249.641-259.233 42.996-4.833 75.768 16.545 99.824 49.144 37.893 51.351 82.81 95.455 131.292 136.237 52.903 44.503 56.525 99.801 32.6 158.592-23.425 57.56-75.34 69.833-127.771 58.804-84.971-17.874-168.158-13.744-253.37-4.536-86.35 9.333-133.788-39.4-132.378-124.417zM352.464 412.86c-3.58 50.707-17.93 96.128-75.9 98.12-58 1.995-80-41.432-79.275-91.71.81-49.705 13.416-104 76.851-102.136 53.84 1.625 74.74 45.8 78.324 95.726zm386 142.168c-68.494-1.735-84.188-43.331-82.635-93.812 1.46-47.519 10-97.628 73.299-96.65 61.395.95 81.6 43.207 81.553 98.668 0 53.156-19.818 89.398-72.217 91.794zm-45.235-278.345c-10.464 42.665-24.513 91.761-85.919 94.502-52.74 2.354-71.705-34.482-72.805-81.242-1.233-52.42 48-112.965 87.582-110.373 33.943 2.226 71.146 49.541 71.142 97.113zm-195.147-14c-7 46.274-13.63 100-71.562 101.351-57 1.306-73.567-47.922-73.638-97.109 0-48 12.128-99 69.345-101.426 59.45-2.493 67.11 51 75.855 97.184z"/><path fill="#1d3fe3" d="M479.52 663.165c0 12.194 1.498 24.61-.284 36.537-4.707 31.503 18.862 78.749-45.326 77.534-54.226-1.027-103.338-3.31-113.231-73.536-7.164-50.852 7.78-85.674 57.687-102.668 17.67-6.016 39.618 5.058 54.096-14.548 10.84-14.679-2.901-54.592 33.418-41.47 24.075 8.7 11.477 38.922 13.278 59.652 1.68 19.366.359 38.99.363 58.5zm175.45 41.902c4.291 39.657 5.093 78-64.709 73.503-60-3.912-95.56-20.794-86.293-85.624 4.287-29.991-21.148-83.238 22.19-84.867 42.71-1.606 13.57 50.41 20.825 77.622 5.276 19.794-3.984 46.774 29.753 48.193 41.337 1.738 28.383-30.022 31.099-51.604 1.209-9.61-.85-19.65.528-29.215 2.516-17.474-8.928-44.716 19.554-47.191 36.044-3.133 24.155 28.376 26.678 47.523 1.896 14.387.375 29.225.375 51.66z"/><path fill="#fff" d="M435.669 685.038c-2.255 24.07 5.605 53.68-33.623 52.136-34.594-1.362-35.274-31.818-38.513-53.078-4.028-26.448 11.38-48.18 40.785-50 41-2.564 27.097 30.764 31.35 51z"/></svg>', "BiliBili": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>', "Bitbucket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#205081"/><path fill="#fff" d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269 46.592-282.698.005-51.047-125-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139 0 20.908-79.705 37.716-177.966 37.564z"/><path fill="#fff" d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411 98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44 44 0 1 0 88.51 0 44 44 0 1 0-88.51 0z"/></svg>', "Dingding": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dingding-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1C9DF7"/><path fill="#fff" d="M760.551 442c0 5-5 13-7.767 20.713-23.302 49.192-82.85 145-82.85 145l-18.124 31.069h85.44L576.727 853.758l36.247-145h-67.316l23.302-95.796c-18.124 5-41.426 10-67.316 18.124 0 0-36.247 20.712-101-38.837 0 0-44.015-38.836-18.124-49.192 10-5 54.37-10 88.029-13 44.014-5.179 72.494-10 72.494-10s-139.81 2.59-173.468-2.589c-33.658-5-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-13 44.013 13 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-145 0 0 2.59-13 13-7.767 0 0 173.469 80.261 292.566 121.686 119 41.426 222.66 64.727 209.715 119z"/></svg>', "Discord": '<svg xmlns="http://www.w3.org/2000/svg" class="icon discord-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2DAAE1"/><path fill="#fff" d="m422.935 240.147 5.851 8.052c-113.039 34.253-165.649 84.585-165.649 84.585s13.645-8.052 37.024-18.123c66.28-30.215 118.865-38.267 142.244-40.286 3.91 0 7.819-1.994 9.76-1.994 38.966-6.058 81.816-6.058 126.658-2.02 58.462 8.053 122.749 24.157 187.061 62.423 0 0-48.7-48.338-155.862-82.566l7.767-10.071h1.968c13.308.233 91.757 4.246 173.416 68.481 0 0 89.634 169.144 89.634 376.555 1.942-2.02-50.668 92.637-189.003 96.65 0 0-23.405-28.194-40.933-52.35 81.84-24.157 113.013-76.534 113.013-76.534a313.796 313.796 0 0 1-72.106 38.267c-31.172 14.11-60.403 22.162-89.633 28.22-60.404 12.066-114.955 8.027-161.74 0a636.81 636.81 0 0 1-91.576-28.22c-13.644-6.033-29.23-12.065-44.817-22.137-1.941-2.02-3.883-2.02-5.85-4.039-1.943 0-1.943-2.02-1.943-2.02-11.702-6.032-17.528-10.07-17.528-10.07s29.23 52.376 109.104 76.532c-19.47 24.157-40.907 54.371-40.907 54.371-138.36-4.039-190.97-98.67-190.97-98.67 0-207.41 89.633-376.555 89.633-376.555 89.634-70.5 175.384-68.481 175.384-68.481zm213.961 233.017c-35.315 0-65 34.512-65 78s29.412 78 65 78 65-34.512 65-78-29.412-78-65-78zm-233.016 0c-35.315 0-65 34.512-65 78s29.412 78 65 78 64.726-34.512 64.726-78-29.411-78-64.726-78z"/></svg>', "Dribbble": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dribbble-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DC4373"/><path fill="#C13366" d="M716.668 302.752c-13.332 5.154-28.61 3.676-35.726-1.068-86.196-48.27-179.286-62.06-265.482-37.926C292.074 300.212 241.674 437.028 242 564.746c22.622 42.136 52.558 105.234 61.854 153.104l298.24 298.246c210.532-37.376 376.584-203.408 413.986-413.928L716.668 302.752z"/><path fill="#F0F1F1" d="M511.994 219.308c-161.592 0-293.058 131.31-293.058 292.696s131.466 292.684 293.058 292.684c161.598 0 293.07-131.292 293.07-292.684 0-161.386-131.472-292.696-293.07-292.696zm192.842 138.148c33.43 41.432 53.744 93.756 54.682 150.772-11.122-2.282-58.23-11.068-114.526-11.068-18.164 0-37.282.91-56.448 3.278a822.854 822.854 0 0 0-4.938-11.812c-4.972-11.692-10.326-23.29-15.874-34.72 86.642-35.696 128.436-85.238 137.104-96.45zm-192.842-92.33c62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-38.67-70.688-80.996-129.22-91.07-142.812a247.13 247.13 0 0 1 55.82-6.368zm-106.352 23.99c8.536 11.758 50.928 70.918 90.592 141.036-106.448 27.982-200.976 29.806-223.79 29.806h-2.424c16.39-75.534 67.424-138.298 135.622-170.842zM264.402 512.39c0-2.038.034-4.076.1-6.102 1.48.018 3.666.018 6.5.018 30.726 0 137.382-2.538 247.288-35.154a828.402 828.402 0 0 1 18.928 39.526 232.24 232.24 0 0 0-8.234 2.482C405.236 553.126 337.216 658.936 326.75 676.232c-38.778-43.696-62.348-101.058-62.348-163.842zm247.592 247.246c-56.786 0-109.192-19.232-151.01-51.48 7.074-13.868 58.412-106.3 194.026-153.5a1.806 1.806 0 0 1 .272-.09c34.006 88.53 48.408 162.834 52.358 185.862-29.432 12.374-61.752 19.208-95.646 19.208zm140.236-43.584c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/><path fill="#D1D1D1" d="M511.994 219.308c-.382 0-.758.028-1.142.028v45.804c.38 0 .758-.018 1.142-.018 62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-12.14-22.194-24.642-43.188-36.392-61.968V473.29c2.476-.706 4.954-1.41 7.434-2.144a828.402 828.402 0 0 1 18.928 39.526c-2.776.796-5.514 1.592-8.234 2.478a323.314 323.314 0 0 0-18.128 6.52v53.228a418.976 418.976 0 0 1 44.428-18.332c34.006 88.53 48.408 162.834 52.358 185.862-29.428 12.374-61.746 19.208-95.646 19.208-.382 0-.758-.024-1.142-.024v45.05c.382 0 .758.028 1.142.028 161.598 0 293.07-131.292 293.07-292.684.002-161.388-131.47-292.698-293.068-292.698zm71.614 269.316c-4.972-11.692-10.326-23.29-15.874-34.72 86.64-35.696 128.434-85.236 137.102-96.45 33.43 41.432 53.748 93.756 54.682 150.77-11.122-2.282-58.23-11.068-114.522-11.068-18.164 0-37.282.914-56.448 3.278-1.624-3.932-3.24-7.852-4.94-11.81zm68.622 227.428c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/></svg>', "Email": '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>', "Evernote": '<svg xmlns="http://www.w3.org/2000/svg" class="icon evernote-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#14cc45"/><path fill="#595757" d="M347.671 193.259v87.51h-87.51z"/><path fill="#595757" d="M788.047 323.645s3.65-77.491-73.84-103.02c0 0-89.479-12.867-151.41-11.91 0 0-8.595-53.23-103.33-53.23 0 0-89.556-1.244-89.892 70.526v61.671s2.848 14.991-27.833 14.991h-81.581s-34.28 5.282-34.28 72.934c0 0 3.133 120.082 41.322 200.24 0 0 9.398 34.667 58.228 46.577 0 0 95.822 25.477 123.991 21.722 0 0 58.228 22.137 62.008-111.874 0 0 3.755-19.935 6.266 11.392 0 0-1.89 68.948 57.607 72.702 0 0 45.723 12.557 73.892 10.045 0 0 37.568 2.15 37.568 64.158 0 0 13.152 71.665-34.435 71.665h-65.763s-18.149 4.428-18.149-21.877c0 0-4.997-21.878 26.305-21.878h15.534v-43.756h-43.082s-66.332-6.317-66.332 50.047v75.135s9.347 49.866 66.332 49.866h121.273s48.441.44 76.61-90.359c0-.078 48.52-182.323 22.991-435.767zM625.272 486.523c0-21.877 18.02-51.16 39.432-51.16s36.48 36.118 36.48 58.022c-28.79-7.897-45.827-9.606-75.912-6.862z"/></svg>', "Facebook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3c599b"/><path fill="#fff" d="M353.357 400.378h68.151v-66.235c0-29.206.737-74.247 21.952-102.142 22.348-29.542 53.026-49.622 105.794-49.622 85.976 0 122.18 12.263 122.18 12.263L654.4 295.61s-28.407-8.213-54.903-8.213c-26.512 0-50.243 9.5-50.243 35.995v76.988h108.687L650.352 499H549.254v342.602H421.508V499h-68.15v-98.622z"/></svg>', "Flipboard": '<svg xmlns="http://www.w3.org/2000/svg" class="icon flipboard-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#e12828"/><path fill="#fff" d="M263.487 261.893H445.92V809.17H263.487V261.893z"/><path fill="#fce9e9" d="M445.92 261.893h364.842v182.435H445.92V261.893z"/><path fill="#f6bebe" d="M445.92 444.328h182.435v182.435H445.92V444.328z"/></svg>', "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Gitlab": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E8F0FF"/><path fill="#E24329" d="m512 848.182 134.473-413.8H377.527L512 848.182z"/><path fill="#FC6D26" d="m512 848.182-134.473-413.8h-188.36L512 848.182z"/><path fill="#E24329" d="M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z"/><path fill="#FC6D26" d="m512 848.182 134.473-413.8h188.36L512 848.182z"/><path fill="#FCA326" d="m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z"/><path fill="#E24329" d="M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z"/></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>', "Instagram": '<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#181818"/><path fill="#fff" d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617 453.186 617 512s-46.186 105-105 105zM680.041 306.15c-21 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z"/><path fill="#FFF" d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126-12.604-184.845-4.2-63.015 0-126 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126 12.603 184.845 4.2 63.015 0 126-12.603 184.845z"/></svg>', "Lark": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lark-icon" viewBox="0 0 700 700"><path fill="#fdfdfd" d="M0 350C0 156.7 156.7 0 350 0s350 156.7 350 350-156.7 350-350 350S0 543.3 0 350Z"/><path fill="#326ffd" d="M94.683 255.472c-1.188.99-3.547 1.424-3.565 2.971-.892 77.877-1.647 155.803.853 233.645.135 4.185 3.811 7.709 6.987 10.437 8.041 6.906 16.845 13.026 26.179 18.048 15.915 8.564 32.118 16.959 49.299 22.567 22.582 7.37 45.902 12.712 69.402 16.176 16.45 2.425 33.243 1.892 49.863 1.404 85.699-2.518 170.495-42.242 226.974-107.047 13.128-15.062 24.349-31.701 35.801-48.072.482-.689-.29-1.655-.435-2.483-11.645 12.501-23.322 25.66-38.015 34.376-38.027 22.561-80.103 18.178-120.414 4.963-24.658-8.083-49.594-15.711-73.208-26.468-32.043-14.597-63.264-31.14-93.363-49.411-50.119-30.424-92.859-71.794-136.358-111.106Z"/><path fill="#00d5b8" d="M373.34 355.289c22.389-21.264 43.857-43.542 67.167-63.793 15.84-13.761 40.614-23.584 58.792-32.162-13.932-44.24-30.142-84.389-60.513-120.46-3.54-4.204-7.91-9.366-13.399-9.603-81.245-3.519-162.641-2.296-243.958-1.541-1.72.016-3.262 2.127-3.451 3.836-.209 1.893 1.026 3.902 2.457 5.159 21.134 18.566 43.735 35.416 64.865 53.985 52.859 46.45 91.839 105.023 128.04 164.579Z"/><path fill="#133c99" d="M302.636 406.089c63.531 28.909 161.471 77.441 225.923 24.345 10.473-8.628 22.415-16.393 29.694-27.844 19.077-30.011 31.761-63.645 48.432-95.056 8.019-15.112 17.249-23.738 28.765-36.905-17.982-10.513-43.141-16.899-63.455-18.431-44.467-3.354-94.982 6.952-129.899 36.91-29.717 25.495-55.957 54.804-84.849 81.23-16.051 14.681-36.135 24.874-54.611 35.751Z"/></svg>', "Lines": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lines-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#00C300"/><path fill="#fff" d="M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 287 727.52 455 752c11.52 2.4 27 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 19a1104 1104 0 0 0 274.56-202.56 251.52 251.52 0 0 0 75-175zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18-18v-139.2a17.76 17.76 0 0 1 18-18 18 18 0 0 1 18 18v120.48h51a19 19 0 0 1 18 19 18 18 0 0 1-18 18zm72-18a18 18 0 1 1-36.48 0v-139.2a18 18 0 0 1 36.48 0zm167.04 0a18 18 0 0 1-12.48 17.28H596a18 18 0 0 1-14.4-7.2l-69.6-96v85.92a18 18 0 1 1-36.48 0v-139.2A18 18 0 0 1 488 388.16h5.76a18 18 0 0 1 14.4 7.2l71.52 96v-85.92a18 18 0 1 1 36.48 0zm112.32-87.84a18 18 0 0 1 18 18 17.76 17.76 0 0 1-18 18h-51v32.64h51a19 19 0 0 1 18 19 18 18 0 0 1-18 18H656a18 18 0 0 1-18-18v-139.2a18 18 0 0 1 18-18.28h69.12a18 18 0 0 1 18 18 18 18 0 0 1-18 19h-49.44v32.64zm0 0"/></svg>', "Linkedin": '<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>', "Pinterest": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pinterest-icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M512 1023.147c282.773 0 512-228.288 512-509.888 0-281.622-229.227-509.91-512-509.91S0 231.637 0 513.26c0 281.6 229.227 509.888 512 509.888z"/><path fill="#CA242D" d="M512 3.35C229.248 3.35 0 231.658 0 513.258c0 216.128 134.848 400.789 325.312 475.05-4.63-40.277-8.427-102.378 1.685-146.453 9.28-39.872 59.84-253.483 59.84-253.483s-15.168-30.634-15.168-75.541c0-70.933 41.302-123.797 92.715-123.797 43.819 0 64.896 32.725 64.896 71.765 0 43.627-27.819 109.099-42.56 169.963-12.224 50.773 25.707 92.33 75.84 92.33 91.03 0 160.981-95.68 160.981-233.344 0-122.133-88.064-207.317-214.058-207.317-145.814 0-231.36 108.693-231.36 221.163 0 43.648 16.853 90.645 37.93 116.245a15.19 15.19 0 0 1 3.371 14.699c-3.797 15.936-12.65 50.773-14.336 57.92-2.09 9.216-7.573 11.328-17.28 6.698-64.043-29.781-104.085-122.538-104.085-197.653 0-160.747 117.162-308.459 338.389-308.459 177.408 0 315.627 125.888 315.627 294.614 0 175.829-111.254 317.269-265.472 317.269-51.84 0-100.715-26.859-117.163-58.752l-32.021 121.28c-11.371 44.48-42.56 99.883-63.638 133.867A516.01 516.01 0 0 0 511.168 1024c282.752 0 512-228.31 512-509.91C1024 231.66 794.752 3.35 512 3.35z"/></svg>', "Pocket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pocket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#EE4056"/><path fill="#fff" d="M716.52 309.066c12.549 0 23.172 4.394 31.87 13.182 8.697 8.788 13.023 19.48 13.023 32.006v150.4c0 33.975-6.568 66.41-19.705 97.307-13.138 30.918-30.76 57.487-52.89 79.685-22.106 22.197-48.562 39.864-79.367 52.888-30.804 13.024-63.081 19.547-96.876 19.547a246.897 246.897 0 0 1-97.215-19.547c-30.805-13.046-57.306-30.668-79.504-52.888-22.198-22.198-39.865-48.767-53.003-79.663a246.311 246.311 0 0 1-19.728-97.33V354.255c0-12.321 4.44-22.945 13.319-31.847a43.489 43.489 0 0 1 31.87-13.341H716.52zM512.574 617.339c9.06 0 16.989-3.216 23.738-9.581l117.103-112.415a32.622 32.622 0 0 0 10.691-24.62c0-9.469-3.33-17.533-9.966-24.191a32.958 32.958 0 0 0-24.237-10.012c-9.06 0-16.988 3.171-23.737 9.56l-93.547 89.808-93.614-89.809a33.185 33.185 0 0 0-23.443-9.559c-9.468 0-17.532 3.33-24.19 9.967-6.66 6.682-9.967 14.722-9.967 24.236 0 9.83 3.443 18.03 10.419 24.599l117.33 112.413c6.342 6.342 14.179 9.56 23.466 9.56l-.046.044z"/></svg>', "QQ": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>', "Qzone": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#0985DD"/><path fill="#fff" d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z"/></svg>', "Reddit": '<svg xmlns="http://www.w3.org/2000/svg" class="icon reddit-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#ff4501"/><path fill="#fff" d="M617.199 680.55c5.666 5.974 5.666 11.742 0 17.34-21.845 23.143-56.9 34.714-105.199 34.714s-83.354-11.571-105.199-34.714c-5.666-5.598-5.666-11.366 0-17.34a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38 16.93 18.295 46.728 27.408 89.361 27.408 42.325 0 72.09-9.113 89.361-27.409a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38zm-176.06-136.635c9.182 9.694 13.756 21.47 13.756 35.294 0 13.79-4.574 25.565-13.756 35.26a44.134 44.134 0 0 1-33.28 14.54c-13.073 0-24.234-4.847-33.587-14.54a49.015 49.015 0 0 1-13.995-35.26c0-14.2 4.642-26.147 13.995-35.84 9.353-9.728 20.514-14.575 33.587-14.575 13.04 0 24.132 5.051 33.28 15.12zm222.584 35.294c0 13.79-4.642 25.565-13.995 35.26a44.954 44.954 0 0 1-33.587 14.54c-13.04 0-24.132-4.847-33.28-14.54a49.493 49.493 0 0 1-13.756-35.26c0-13.824 4.574-25.669 13.756-35.567 9.148-9.9 20.24-14.848 33.28-14.848 13.073 0 24.234 4.847 33.587 14.575 9.353 9.693 13.995 21.64 13.995 35.84zM796.433 512c0-18.295-6.144-33.963-18.5-47.036a59.494 59.494 0 0 0-44.92-19.592c-17.647 0-32.768 6.724-45.465 20.138-45.841-33.587-100.66-51.507-164.455-53.725l33.314-158.482 105.746 25.19c0 13.825 4.573 25.6 13.755 35.295 9.148 9.694 20.241 14.54 33.314 14.54 13.04 0 24.235-4.915 33.553-14.813 9.353-9.899 13.995-21.743 13.995-35.567s-4.642-25.669-13.995-35.567a44.578 44.578 0 0 0-33.553-14.814c-19.046 0-33.143 9.318-42.325 27.99L550.06 228.112c-6.69-1.877-11.094 1.126-13.21 8.977l-36.488 174.695c-63.454 2.594-117.897 20.718-163.363 54.272a59.187 59.187 0 0 0-46.011-20.685c-17.613 0-32.598 6.52-44.92 19.592a66.082 66.082 0 0 0-18.5 47.036c0 13.073 3.243 25.02 9.762 35.84 6.52 10.82 15.258 19.046 26.18 24.644a152.303 152.303 0 0 0-3.174 31.335c0 53.009 24.678 98.372 74.035 136.09 49.323 37.682 108.715 56.524 178.176 56.524 69.769 0 129.365-18.842 178.688-56.525 49.357-37.717 74.001-83.08 74.001-136.09 0-11.946-1.229-22.561-3.686-31.914 10.581-5.598 19.046-13.722 25.395-24.337 6.315-10.65 9.49-22.528 9.49-35.567z"/></svg>', "Rss": '<svg xmlns="http://www.w3.org/2000/svg" class="icon rss-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#FD9B00"/><path fill="#fff" d="M687.981 740.39c0-225.92-183.617-409.777-409.21-409.777v-97.205c279.353 0 506.617 227.506 506.617 506.98H687.98zm-74.841 0h-97.538c0-63.567-24.688-123.245-69.43-167.993-44.762-44.856-104.24-69.556-167.54-69.556v-97.176c184.44 0 334.508 150.046 334.508 334.725zM346.038 605.166c37.35 0 67.514 30.357 67.514 67.39 0 37.146-30.163 67.177-67.514 67.177-37.219 0-67.458-30.03-67.458-67.176 0-37.034 30.24-67.391 67.458-67.391z"/></svg>', "Steam": '<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="488" fill="#fff"/><path fill="#13227a" d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z"/></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3397db"/><path fill="#fff" d="M808.325 346.204c-18.128 16.702-25.664 25.257-25.664 25.257s6.518 130.151-61.715 230.362-156.427 160.296-284.542 173.128c-128.114 12.832-211.623-39.31-211.623-39.31s56.012-3.259 91.86-16.906c35.644-13.85 86.97-49.901 86.97-49.901s-72.917-22.609-99.191-47.865c-26.275-25.46-32.793-40.532-32.793-40.532l72.103-1.019s-75.77-40.532-97.36-72.306-24.44-63.141-24.44-63.141l55.4 22.405s-46.032-62.938-52.55-111.82 8.352-75.159 8.352-75.159 23.423 44.199 119.967 93.082 178.017 46.032 178.017 46.032-31.163-108.154 64.363-156.02 161.11 32.997 161.11 32.997 16.703-4.481 29.127-9.166c12.425-4.48 30.348-12.832 30.348-12.832l-29.33 52.754 45.421-4.889s-5.703 8.147-23.83 24.85z"/></svg>', "Wechat": '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>', "Weibo": '<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#e6162d"/><path fill="#fff" d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z"/><path fill="#fff" d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 120 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z"/><path fill="#fff" d="M409.603 532.773c-119.77 14.249-106 128.31-106 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z"/></svg>', "Whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" class="icon whatsapp-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#31B84C"/><path fill="#fff" d="m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z"/></svg>', "Youtube": '<svg xmlns="http://www.w3.org/2000/svg" class="icon youtube-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DD1829"/><path fill="#fff" d="M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z"/></svg>', "Zhihu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#006CE2"/><path fill="#fff" d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z"/></svg>', "MrHope": '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "使用指南": { "path": "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "keys": ["v-3ff14240", "v-6408b763", "v-6e19edb7", "v-1473bf53", "v-4e65ec78", "v-c151bf32", "v-438ffe52"] }, "哈士奇担任警察的可行性研究": { "path": "/category/%E5%93%88%E5%A3%AB%E5%A5%87%E6%8B%85%E4%BB%BB%E8%AD%A6%E5%AF%9F%E7%9A%84%E5%8F%AF%E8%A1%8C%E6%80%A7%E7%A0%94%E7%A9%B6/", "keys": ["v-7c9e35cc"] }, "vpn": { "path": "/category/vpn/", "keys": ["v-24b7c48d"] }, "随笔": { "path": "/category/%E9%9A%8F%E7%AC%94/", "keys": ["v-df8b6e0c"] } } } }, "tag": { "/": { "path": "/tag/", "map": { "禁用": { "path": "/tag/%E7%A6%81%E7%94%A8/", "keys": ["v-4e65ec78"] }, "文章加密": { "path": "/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/", "keys": ["v-c151bf32"] }, "Markdown": { "path": "/tag/markdown/", "keys": ["v-438ffe52"] }, "页面配置": { "path": "/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", "keys": ["v-6e19edb7"] }, "使用指南": { "path": "/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "keys": ["v-6408b763", "v-6e19edb7"] }, "狗狗": { "path": "/tag/%E7%8B%97%E7%8B%97/", "keys": ["v-7c9e35cc"] }, "哈士奇": { "path": "/tag/%E5%93%88%E5%A3%AB%E5%A5%87/", "keys": ["v-7c9e35cc"] }, "警察": { "path": "/tag/%E8%AD%A6%E5%AF%9F/", "keys": ["v-7c9e35cc"] }, "vpn": { "path": "/tag/vpn/", "keys": ["v-24b7c48d"] }, "机场": { "path": "/tag/%E6%9C%BA%E5%9C%BA/", "keys": ["v-24b7c48d"] }, "emotion": { "path": "/tag/emotion/", "keys": ["v-df8b6e0c"] }, "damage": { "path": "/tag/damage/", "keys": ["v-df8b6e0c"] }, "ai": { "path": "/tag/ai/", "keys": ["v-6408b763"] }, "aigc": { "path": "/tag/aigc/", "keys": ["v-6408b763"] }, "stable diffusion": { "path": "/tag/stable-diffusion/", "keys": ["v-6408b763"] }, "network": { "path": "/tag/network/", "keys": ["v-3ff14240"] }, "无线": { "path": "/tag/%E6%97%A0%E7%BA%BF/", "keys": ["v-3ff14240"] }, "openwrt": { "path": "/tag/openwrt/", "keys": ["v-3ff14240"] }, "通讯": { "path": "/tag/%E9%80%9A%E8%AE%AF/", "keys": ["v-3ff14240"] } } } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-3ff14240", "v-df8b6e0c", "v-6408b763", "v-6e19edb7", "v-24b7c48d", "v-7c9e35cc", "v-184f4da6", "v-2e3eac9e", "v-3b3841c5", "v-1473bf53", "v-4e65ec78", "v-c151bf32", "v-438ffe52", "v-f0ec4556"] } }, "star": { "/": { "path": "/star/", "keys": ["v-3ff14240", "v-df8b6e0c", "v-6408b763", "v-6e19edb7"] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-3ff14240", "v-df8b6e0c", "v-6408b763", "v-24b7c48d", "v-7c9e35cc", "v-6e19edb7"] } } };
const _$1 = ref(categoryMap), k$1 = (e2 = "") => {
  const m2 = usePageData(), u2 = useRouter(), i2 = useRouteLocale();
  return computed(() => {
    var r2;
    const p2 = e2 || ((r2 = usePageFrontmatter().value.blog) == null ? void 0 : r2.key) || "";
    if (!p2)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const l2 = u2.getRoutes();
    if (!_$1.value[p2])
      throw new Error(`useBlogCategory: key ${p2} is invalid`);
    const n2 = _$1.value[p2][i2.value], o2 = { path: n2.path, map: {} };
    for (const a2 in n2.map) {
      const t2 = n2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const B2 of t2.keys) {
        const f2 = l2.find(({ name: s2 }) => s2 === B2);
        if (f2) {
          const s2 = w(u2, f2.path);
          o2.map[a2].items.push({ path: s2.path, info: s2.meta });
        }
      }
      m2.value.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const c = ref(typeMap), C$1 = (e2 = "") => {
  const m2 = useRouter(), u2 = useRouteLocale();
  return computed(() => {
    var i2;
    const r2 = e2 || ((i2 = usePageFrontmatter().value.blog) == null ? void 0 : i2.key) || "";
    if (!r2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!c.value[r2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const p2 = m2.getRoutes(), l2 = c.value[r2][u2.value], n2 = { path: l2.path, items: [] };
    for (const o2 of l2.keys) {
      const a2 = p2.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = w(m2, a2.path);
        n2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return n2;
  });
};
const message = "";
const Ze = "/assets/hero-197a9d2d.jpg";
const pe = Symbol.for("categoryMap"), A = () => {
  const l2 = inject(pe);
  if (!l2)
    throw new Error("useCategoryMap() is called without provider.");
  return l2;
}, Ke = () => {
  const l2 = k$1("category");
  provide(pe, l2);
}, V = () => {
  const l2 = e$2(), t2 = m$1();
  return computed(() => ({ ...l2.value.blog, ...t2.value.blog }));
}, ue = Symbol.for("tagMap"), G = () => {
  const l2 = inject(ue);
  if (!l2)
    throw new Error("useTagMap() is called without provider.");
  return l2;
}, Je = () => {
  const l2 = k$1("tag");
  provide(ue, l2);
}, Qe = (l2) => {
  const t2 = m$1();
  return computed(() => {
    const { [R$1.author]: i2 } = l2.value;
    return i2 ? Te$1(i2) : i2 === false ? [] : Te$1(t2.value.author, false);
  });
}, Xe = (l2) => {
  const t2 = A();
  return computed(() => je$1(l2.value[R$1.category]).map((i2) => ({ name: i2, path: t2.value.map[i2].path })));
}, e1 = (l2) => {
  const t2 = G();
  return computed(() => Be$1(l2.value[R$1.tag]).map((i2) => ({ name: i2, path: t2.value.map[i2].path })));
}, l1 = (l2) => computed(() => {
  const { [R$1.date]: t2 } = l2.value;
  return pe$2(t2);
}), a1 = (l2) => {
  const t2 = toRef(l2, "info"), i2 = V(), p2 = Qe(t2), o2 = Xe(t2), r2 = e1(t2), a$12 = l1(t2), n2 = s(), s$12 = computed(() => ({ author: p2.value, category: o2.value, date: a$12.value, localizedDate: t2.value[R$1.localizedDate] || "", tag: r2.value, isOriginal: t2.value[R$1.isOriginal] || false, readingTime: t2.value[R$1.readingTime] || null, readingTimeLocale: t2.value[R$1.readingTime] && n2.value ? a(t2.value[R$1.readingTime], n2.value) : null, pageview: l2.path })), c2 = computed(() => i2.value.articleInfo);
  return { info: s$12, items: c2 };
}, ve = Symbol(""), C = () => {
  const l2 = inject(ve);
  if (!l2)
    throw new Error("useArticles() is called without provider.");
  return l2;
}, t1 = () => {
  const l2 = C$1("article");
  provide(ve, l2);
}, de = Symbol(""), _ = () => {
  const l2 = inject(de);
  if (!l2)
    throw new Error("useStars() is called without provider.");
  return l2;
}, o1 = () => {
  const l2 = C$1("star");
  provide(de, l2);
}, me = Symbol(""), F = () => {
  const l2 = inject(me);
  if (!l2)
    throw new Error("useTimelines() is called without provider.");
  return l2;
}, i1 = () => {
  const l2 = C$1("timeline"), t2 = computed(() => {
    const i2 = [];
    return l2.value.items.forEach(({ info: p2, path: o2 }) => {
      const r2 = pe$2(p2[R$1.date]), a2 = r2 == null ? void 0 : r2.getFullYear(), n2 = r2 ? r2.getMonth() + 1 : null, s2 = r2 == null ? void 0 : r2.getDate();
      a2 && n2 && s2 && ((!i2[0] || i2[0].year !== a2) && i2.unshift({ year: a2, items: [] }), i2[0].items.push({ date: `${n2}/${s2}`, info: p2, path: o2 }));
    }), { ...l2.value, config: i2.reverse() };
  });
  provide(me, t2);
}, r1 = () => {
  t1(), Ke(), o1(), Je(), i1();
};
var s1 = defineComponent({ name: "SocialMedia", setup() {
  const l2 = V(), t2 = t$1(), i2 = computed(() => {
    const p2 = l2.value.medias;
    return p2 ? M$4(p2).map(([o2, r2]) => ({ name: o2, icon: icons[o2], url: r2 })) : [];
  });
  return () => i2.value.length ? h$3("div", { class: "vp-social-medias" }, i2.value.map(({ name: p2, icon: o2, url: r2 }) => h$3("a", { class: "vp-social-media", href: r2, rel: "noopener noreferrer", target: "_blank", "aria-label": p2, ...t2.value ? {} : { "data-balloon-pos": "up" }, innerHTML: o2 }))) : null;
} }), R = defineComponent({ name: "BloggerInfo", setup() {
  const l2 = V(), t2 = useSiteLocaleData(), i2 = m$1(), p2 = C(), o2 = A(), r2 = G(), a2 = F(), n2 = Fa(), s2 = computed(() => {
    var h2;
    return l2.value.name || ((h2 = Te$1(i2.value.author)[0]) == null ? void 0 : h2.name) || t2.value.title;
  }), c2 = computed(() => l2.value.avatar || i2.value.logo), y2 = computed(() => i2.value.blogLocales), m2 = computed(() => l2.value.intro);
  return () => {
    const { article: h2, category: v2, tag: b2, timeline: z2 } = y2.value, H2 = [[p2.value.path, p2.value.items.length, h2], [o2.value.path, f$2(o2.value.map).length, v2], [r2.value.path, f$2(r2.value.map).length, b2], [a2.value.path, a2.value.items.length, z2]];
    return h$3("div", { class: "vp-blogger-info", vocab: "https://schema.org/", typeof: "Person" }, [h$3("div", { class: "vp-blogger", ...m2.value ? { style: { cursor: "pointer" }, "aria-label": y2.value.intro, "data-balloon-pos": "down", role: "navigation", onClick: () => n2(m2.value) } : {} }, [c2.value ? h$3("img", { class: ["vp-blogger-avatar", { round: l2.value.roundAvatar }], src: withBase(c2.value), property: "image", alt: "Blogger Avatar" }) : null, s2.value ? h$3("div", { class: "vp-blogger-name", property: "name" }, s2.value) : null, l2.value.description ? h$3("div", { class: "vp-blogger-description", innerHTML: l2.value.description }) : null, m2.value ? h$3("meta", { property: "url", content: withBase(m2.value) }) : null]), h$3("div", { class: "vp-blog-counts" }, H2.map(([S2, Ie2, Le]) => h$3(j$2, { class: "vp-blog-count", to: S2 }, () => [h$3("div", { class: "count" }, Ie2), h$3("div", Le)]))), h$3(s1)]);
  };
} });
const W = () => h$3(u$2, { name: "category" }, () => h$3("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
W.displayName = "CategoryIcon";
const Y = () => h$3(u$2, { name: "tag" }, () => h$3("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
Y.displayName = "TagIcon";
const Z = () => h$3(u$2, { name: "timeline" }, () => h$3("path", { d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0" }));
Z.displayName = "TimelineIcon";
const fe = () => h$3(u$2, { name: "slides" }, () => h$3("path", { d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z" }));
fe.displayName = "SlideIcon";
const ge = () => h$3(u$2, { name: "sticky" }, () => [h$3("path", { d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z" })]);
ge.displayName = "StickyIcon";
const B$1 = () => h$3(u$2, { name: "article" }, () => h$3("path", { d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z" }));
B$1.displayName = "ArticleIcon";
const ye = () => h$3(u$2, { name: "book" }, () => h$3("path", { d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z" }));
ye.displayName = "BookIcon";
const he = () => h$3(u$2, { name: "link" }, () => h$3("path", { d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z" }));
he.displayName = "LinkIcon";
const be = () => h$3(u$2, { name: "project" }, () => h$3("path", { d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z" }));
be.displayName = "ProjectIcon";
const ke = () => h$3(u$2, { name: "friend" }, () => h$3("path", { d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z" }));
ke.displayName = "FriendIcon";
const K$1 = () => h$3(u$2, { name: "slide-down" }, () => h$3("path", { d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z" }));
K$1.displayName = "SlideDownIcon";
const ze = () => h$3("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", class: "empty-icon", viewBox: "0 0 1024 1024", innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>' });
ze.displayName = "EmptyIcon";
const xe = () => h$3(u$2, { name: "lock" }, () => h$3("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
xe.displayName = "LockIcon";
var n1 = defineComponent({ name: "ArticleItem", props: { info: { type: Object, required: true }, path: { type: String, required: true } }, slots: Object, setup(l2, { slots: t2 }) {
  const i2 = toRef(l2, "info"), { info: p2, items: o2 } = a1(l2);
  return () => {
    var r2, a2, n2;
    const { [R$1.title]: s2, [R$1.type]: c2, [R$1.isEncrypted]: y2 = false, [R$1.cover]: m2, [R$1.excerpt]: h2, [R$1.sticky]: v2 } = i2.value, b2 = p2.value;
    return h$3("div", { class: "vp-article-wrapper" }, h$3("article", { class: "vp-article-item", vocab: "https://schema.org/", typeof: "Article" }, [((r2 = t2.cover) == null ? void 0 : r2.call(t2, { cover: m2 })) || (m2 ? [h$3("img", { class: "vp-article-cover", src: withBase(m2) }), h$3("meta", { property: "image", content: withBase(m2) })] : []), v2 ? h$3(ge) : null, h$3(j$2, { to: l2.path }, () => {
      var z2;
      return ((z2 = t2.title) == null ? void 0 : z2.call(t2, { title: s2, isEncrypted: y2, type: c2 })) || h$3("header", { class: "vp-article-title" }, [y2 ? h$3(xe) : null, c2 === Ee$1.slide ? h$3(fe) : null, h$3("span", { property: "headline" }, s2)]);
    }), ((a2 = t2.excerpt) == null ? void 0 : a2.call(t2, { excerpt: h2 })) || (h2 ? h$3("div", { class: "vp-article-excerpt", innerHTML: h2 }) : null), h$3("hr", { class: "vp-article-hr" }), ((n2 = t2.info) == null ? void 0 : n2.call(t2, { info: b2 })) || h$3(Nl, { info: b2, ...o2.value ? { items: o2.value } : {} })]));
  };
} }), c1 = defineComponent({ name: "Pagination", props: { total: { type: Number, default: 10 }, perPage: { type: Number, default: 10 }, current: { type: Number, default: 1 } }, emits: ["updateCurrentPage"], setup(l2, { emit: t2 }) {
  let i2;
  const p2 = m$1(), o2 = ref(""), r2 = computed(() => p2.value.paginationLocales), a2 = computed(() => Math.ceil(l2.total / l2.perPage)), n2 = computed(() => !!a2.value && a2.value !== 1), s2 = computed(() => a2.value < 7 ? false : l2.current > 4), c2 = computed(() => a2.value < 7 ? false : l2.current < a2.value - 3), y2 = computed(() => {
    const { current: v2 } = l2;
    let b2 = 1, z2 = a2.value;
    const H2 = [];
    a2.value >= 7 && (v2 <= 4 && v2 < a2.value - 3 ? (b2 = 1, z2 = 5) : v2 > 4 && v2 >= a2.value - 3 ? (z2 = a2.value, b2 = a2.value - 4) : a2.value > 7 && (b2 = v2 - 2, z2 = v2 + 2));
    for (let S2 = b2; S2 <= z2; S2++)
      H2.push(S2);
    return H2;
  }), m2 = (v2) => t2("updateCurrentPage", v2), h2 = (v2) => {
    const b2 = parseInt(v2);
    b2 <= a2.value && b2 > 0 ? m2(b2) : i2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${r2.value.errorText.replace(/\$page/g, a2.value.toString())}`);
  };
  return onMounted(() => {
    i2 = new De$2();
  }), () => h$3("div", { class: "vp-pagination" }, n2.value ? h$3("div", { class: "vp-pagination-list" }, [h$3("div", { class: "vp-pagination-number " }, [l2.current > 1 ? h$3("div", { class: "prev", role: "navigation", unselectable: "on", onClick: () => m2(l2.current - 1) }, r2.value.prev) : null, s2.value ? [h$3("div", { role: "navigation", onClick: () => m2(1) }, 1), h$3("div", { class: "ellipsis" }, "...")] : null, y2.value.map((v2) => h$3("div", { key: v2, class: { active: l2.current === v2 }, role: "navigation", onClick: () => m2(v2) }, v2)), c2.value ? [h$3("div", { class: "ellipsis" }, "..."), h$3("div", { role: "navigation", onClick: () => m2(a2.value) }, a2.value)] : null, l2.current < a2.value ? h$3("div", { class: "next", role: "navigation", unselectable: "on", onClick: () => m2(l2.current + 1) }, r2.value.next) : null]), h$3("div", { class: "vp-pagination-nav" }, [h$3("label", { for: "navigation-text" }, `${r2.value.navigate}: `), h$3("input", { id: "navigation-text", value: o2.value, onInput: ({ target: v2 }) => {
    o2.value = v2.value;
  }, onKeydown: (v2) => {
    v2.key === "Enter" && (v2.preventDefault(), h2(o2.value));
  } }), h$3("button", { class: "vp-pagination-button", role: "navigation", title: r2.value.action, onClick: () => h2(o2.value) }, r2.value.action)])]) : []);
} }), J = defineComponent({ name: "ArticleList", props: { items: { type: Array, default: () => [] } }, setup(l2) {
  const t2 = useRoute(), i2 = useRouter(), p2 = V(), o2 = ref(1), r2 = computed(() => p2.value.articlePerPage || 10), a2 = computed(() => l2.items.slice((o2.value - 1) * r2.value, o2.value * r2.value)), n2 = (s2) => {
    o2.value = s2;
    const c2 = { ...t2.query };
    c2.page === s2.toString() || s2 === 1 && !c2.page || (s2 === 1 ? delete c2.page : c2.page = s2.toString(), i2.push({ path: t2.path, query: c2 }));
  };
  return onMounted(() => {
    const { page: s2 } = t2.query;
    n2(s2 ? Number(s2) : 1), import("./assets/pageview-b46facd5.js").then(({ updatePageview: c2 }) => {
      c2();
    }), watch(o2, () => {
      const c2 = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, c2);
      }, 100);
    }), watch(() => t2.query, ({ page: c2 }) => {
      n2(c2 ? Number(c2) : 1);
    });
  }), () => h$3("div", { id: "article-list", class: "vp-article-list" }, a2.value.length ? [...a2.value.map(({ info: s2, path: c2 }, y2) => h$3(Tl, { appear: true, delay: y2 * 0.04 }, () => h$3(n1, { key: c2, info: s2, path: c2 }))), h$3(c1, { current: o2.value, perPage: r2.value, total: l2.items.length, onUpdateCurrentPage: n2 })] : h$3(ze));
} }), Q = defineComponent({ name: "CategoryList", setup() {
  const l2 = usePageData(), t2 = A();
  return () => h$3("ul", { class: "vp-category-list" }, M$4(t2.value.map).map(([i2, { path: p2, items: o2 }]) => h$3("li", { class: ["vp-category", `vp-category${he$2(i2, 9)}`, { active: p2 === l2.value.path }] }, h$3(j$2, { to: p2 }, () => [i2, h$3("span", { class: "count" }, o2.length)]))));
} }), X = defineComponent({ name: "TagList", setup() {
  const l2 = usePageFrontmatter(), t2 = G(), i2 = (p2) => {
    var o2;
    return p2 === ((o2 = l2.value.blog) == null ? void 0 : o2.name);
  };
  return () => h$3("ul", { class: "tag-list-wrapper" }, M$4(t2.value.map).map(([p2, { path: o2, items: r2 }]) => h$3("li", { class: ["tag", `tag${he$2(p2, 9)}`, { active: i2(p2) }] }, h$3(j$2, { to: o2 }, () => [p2, h$3("span", { class: "tag-num" }, r2.length)]))));
} }), p1 = defineComponent({ name: "TimelineList", setup() {
  const l2 = m$1(), t2 = F(), i2 = Fa(), p2 = computed(() => l2.value.blogLocales.timeline);
  return () => h$3("div", { class: "timeline-list-wrapper" }, [h$3("div", { class: "timeline-list-title", onClick: () => i2(t2.value.path) }, [h$3(Z), h$3("span", { class: "num" }, t2.value.items.length), p2.value]), h$3("hr"), h$3("div", { class: "timeline-content" }, h$3("ul", { class: "timeline-list" }, t2.value.config.map(({ year: o2, items: r2 }, a2) => h$3(Tl, { appear: true, delay: 0.08 * (a2 + 1) }, () => h$3("li", [h$3("h3", { class: "timeline-year" }, o2), h$3("ul", { class: "timeline-year-wrapper" }, r2.map(({ date: n2, info: s2, path: c2 }) => h$3("li", { class: "timeline-item" }, [h$3("span", { class: "timeline-date" }, n2), h$3(j$2, { class: "timeline-title", to: c2 }, () => s2[R$1.title])])))])))))]);
} }), Me = defineComponent({ name: "InfoList", setup() {
  const l2 = m$1(), t2 = C(), i2 = A(), p2 = computed(() => f$2(i2.value.map).length), o2 = _(), r2 = G(), a2 = computed(() => f$2(r2.value.map).length), n2 = Fa(), s2 = ref("article"), c2 = computed(() => l2.value.blogLocales), y2 = [["article", B$1], ["category", W], ["tag", Y], ["timeline", Z]];
  return () => h$3("div", { class: "vp-blog-infos" }, [h$3("div", { class: "vp-blog-type-switcher" }, y2.map(([m2, h2]) => h$3("button", { type: "button", class: "vp-blog-type-button", onClick: () => {
    s2.value = m2;
  } }, h$3("div", { class: ["icon-wrapper", { active: s2.value === m2 }], "aria-label": c2.value[m2], "data-balloon-pos": "up" }, h$3(h2))))), h$3(Tl, () => s2.value === "article" ? h$3("div", { class: "vp-sticky-article-wrapper" }, [h$3("div", { class: "title", onClick: () => n2(t2.value.path) }, [h$3(B$1), h$3("span", { class: "num" }, t2.value.items.length), c2.value.article]), h$3("hr"), h$3("ul", { class: "vp-sticky-articles" }, o2.value.items.map(({ info: m2, path: h2 }, v2) => h$3(Tl, { appear: true, delay: 0.08 * (v2 + 1) }, () => h$3("li", { class: "vp-sticky-article" }, h$3(j$2, { to: h2 }, () => m2[R$1.title])))))]) : s2.value === "category" ? h$3("div", { class: "vp-category-wrapper" }, [p2.value ? h$3("div", { class: "title", onClick: () => n2(i2.value.path) }, [h$3(W), h$3("span", { class: "num" }, p2.value), c2.value.category]) : null, h$3("hr"), h$3(Tl, { delay: 0.04 }, () => h$3(Q))]) : s2.value === "tag" ? h$3("div", { class: "vp-tag-wrapper" }, [a2.value ? h$3("div", { class: "title", onClick: () => n2(r2.value.path) }, [h$3(Y), h$3("span", { class: "num" }, a2.value), c2.value.tag]) : null, h$3("hr"), h$3(Tl, { delay: 0.04 }, () => h$3(X))]) : h$3(Tl, () => h$3(p1)))]);
} }), D$1 = defineComponent({ name: "BlogWrapper", slots: Object, setup(l2, { slots: t2 }) {
  const { isMobile: i2 } = Z$1();
  return () => [h$3(Pl), h$3(Il, { noSidebar: true, noToc: true }, { default: () => t2.default(), navScreenBottom: () => h$3(R), ...i2.value ? { sidebar: () => h$3(Me) } : {} })];
} });
const we = () => h$3("aside", { class: "vp-blog-info-wrapper" }, [h$3(Tl, () => h$3(R)), h$3(Tl, { delay: 0.04 }, () => h$3(Me))]);
we.displayName = "InfoPanel";
var O = we, u1 = defineComponent({ name: "BlogPage", components: { CategoryList: Q, TagList: X }, setup() {
  const l2 = usePageData(), t2 = usePageFrontmatter(), i2 = A(), p2 = G(), o2 = computed(() => t2.value.blog || {}), r2 = computed(() => {
    const { key: n2 = "" } = o2.value;
    return n2 === "category" ? "CategoryList" : n2 === "tag" ? "TagList" : null;
  }), a2 = computed(() => {
    const { name: n2 = "", key: s2 = "" } = o2.value;
    return s2 === "category" ? n2 ? i2.value.map[n2].items : [] : s2 === "tag" ? n2 ? p2.value.map[n2].items : [] : [];
  });
  return () => h$3(D$1, () => h$3("div", { class: "vp-page vp-blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { id: "main-content", class: "vp-blog-main" }, [h$3(Tl, () => r2.value ? h$3(resolveComponent(r2.value)) : null), o2.value.name ? h$3(Tl, { appear: true, delay: 0.24 }, () => h$3(J, { key: l2.value.path, items: a2.value })) : null]), h$3(Tl, { delay: 0.16 }, () => h$3(O, { key: "blog" }))])));
} }), v1 = defineComponent({ name: "BlogHero", slots: Object, setup(l2, { slots: t2 }) {
  const i2 = usePageFrontmatter(), p2 = useSiteLocaleData(), o2 = shallowRef(), r2 = computed(() => i2.value.heroFullScreen ?? false), a2 = computed(() => {
    const { heroText: s2, heroImage: c2, heroImageDark: y2, heroAlt: m2, heroImageStyle: h2, tagline: v2 } = i2.value;
    return { text: s2 ?? p2.value.title ?? "Hello", image: c2 ? withBase(c2) : null, imageDark: y2 ? withBase(y2) : null, heroStyle: h2, alt: m2 || s2 || "hero image", tagline: v2 ?? "", isFullScreen: r2.value };
  }), n2 = computed(() => {
    const { bgImage: s2, bgImageDark: c2, bgImageStyle: y2 } = i2.value;
    return { image: isString(s2) ? withBase(s2) : s2 === false ? null : Ze, imageDark: isString(c2) ? withBase(c2) : null, bgStyle: y2, isFullScreen: r2.value };
  });
  return () => {
    var s2, c2;
    return i2.value.hero === false ? null : h$3("div", { ref: o2, class: ["vp-blog-hero", { fullscreen: r2.value, "no-bg": !n2.value.image }] }, [((s2 = t2.heroBg) == null ? void 0 : s2.call(t2, n2.value)) || [n2.value.image ? h$3("div", { class: ["vp-blog-mask", { light: n2.value.imageDark }], style: [{ background: `url(${n2.value.image}) center/cover no-repeat` }, n2.value.bgStyle] }) : null, n2.value.imageDark ? h$3("div", { class: "vp-blog-mask dark", style: [{ background: `url(${n2.value.imageDark}) center/cover no-repeat` }, n2.value.bgStyle] }) : null], ((c2 = t2.heroInfo) == null ? void 0 : c2.call(t2, a2.value)) || [h$3(Tl, { appear: true, type: "group", delay: 0.04 }, () => [a2.value.image ? h$3("img", { key: "light", class: ["vp-blog-hero-image", { light: a2.value.imageDark }], style: a2.value.heroStyle, src: a2.value.image, alt: a2.value.alt }) : null, a2.value.imageDark ? h$3("img", { key: "dark", class: "vp-blog-hero-image dark", style: a2.value.heroStyle, src: a2.value.imageDark, alt: a2.value.alt }) : null]), h$3(Tl, { appear: true, delay: 0.08 }, () => a2.value.text ? h$3("h1", { class: "vp-blog-hero-title" }, a2.value.text) : null), h$3(Tl, { appear: true, delay: 0.12 }, () => a2.value.tagline ? h$3("p", { class: "vp-blog-hero-description", innerHTML: a2.value.tagline }) : null)], a2.value.isFullScreen ? h$3("button", { type: "button", class: "slide-down-button", onClick: () => {
      window.scrollTo({ top: o2.value.clientHeight, behavior: "smooth" });
    } }, [h$3(K$1), h$3(K$1)]) : null]);
  };
} });
const d1 = ["link", "article", "book", "project", "friend"];
var m1 = defineComponent({ name: "ProjectPanel", components: { ArticleIcon: B$1, BookIcon: ye, FriendIcon: ke, LinkIcon: he, ProjectIcon: be }, setup() {
  const l2 = usePageFrontmatter(), t2 = t$1(), i2 = Fa(), p2 = (o2 = "", r2 = "icon") => d1.includes(o2) ? h$3(resolveComponent(`${o2}-icon`)) : isLinkHttp(o2) ? h$3("img", { class: "vp-project-image", src: o2, alt: r2 }) : Oe$1(o2) ? h$3("img", { class: "vp-project-image", src: withBase(o2), alt: r2 }) : h$3(V$1, { icon: o2 });
  return () => {
    var o2;
    return (o2 = l2.value.projects) != null && o2.length ? h$3("div", { class: "vp-project-panel" }, l2.value.projects.map(({ icon: r2, link: a2, name: n2, desc: s2 }, c2) => h$3("div", { class: ["vp-project-card", { [`project${c2 % 9}`]: !t2.value }], onClick: () => i2(a2) }, [p2(r2, n2), h$3("div", { class: "vp-project-name" }, n2), h$3("div", { class: "vp-project-desc" }, s2)]))) : null;
  };
} }), f1 = defineComponent({ name: "BlogHome", setup() {
  const l2 = C();
  return () => h$3("div", { class: "vp-page vp-blog" }, [h$3(v1), h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { id: "main-content", class: "vp-blog-main" }, [h$3(Tl, { appear: true, delay: 0.16 }, () => h$3(m1)), h$3(Tl, { appear: true, delay: 0.24 }, () => h$3(J, { items: l2.value.items }))]), h$3(Tl, { appear: true, delay: 0.16 }, () => h$3(O, { key: "blog" }))]), h$3(Tl, { appear: true, delay: 0.28 }, () => h$3(Ll))]);
} }), g1 = defineComponent({ name: "BlogHome", setup() {
  return () => h$3(D$1, () => h$3(f1));
} }), Se = defineComponent({ name: "ArticleType", setup() {
  const l2 = usePageData(), t2 = useRouteLocale(), i2 = m$1(), p2 = C(), o2 = _(), r2 = computed(() => {
    const a2 = i2.value.blogLocales;
    return [{ text: a2.all, path: p2.value.path }, { text: a2.star, path: o2.value.path }, ...[].map(({ key: n2, path: s2 }) => ({ text: a2[n2], path: s2.replace(/^\//, t2.value) }))];
  });
  return () => h$3("ul", { class: "vp-article-type-wrapper" }, r2.value.map((a2) => h$3("li", { class: ["vp-article-type", { active: a2.path === l2.value.path }] }, h$3(j$2, { to: a2.path }, () => a2.text))));
} }), y1 = defineComponent({ name: "BlogPage", setup() {
  const l2 = C$1(), t2 = usePageFrontmatter(), i2 = usePageData(), p2 = C(), o2 = _(), r2 = computed(() => {
    const { key: a2 = "", type: n2 } = t2.value.blog || {};
    return a2 === "star" ? o2.value.items : n2 === "type" && a2 ? l2.value.items : p2.value.items;
  });
  return () => h$3(D$1, () => h$3("div", { class: "vp-page vp-blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { id: "main-content", class: "vp-blog-main" }, [h$3(Tl, () => h$3(Se)), h$3(Tl, { appear: true, delay: 0.24 }, () => h$3(J, { key: i2.value.path, items: r2.value }))]), h$3(Tl, { delay: 0.16 }, () => h$3(O, { key: "blog" }))])));
} }), h1 = defineComponent({ name: "TimelineItems", setup() {
  const l2 = V(), t2 = m$1(), i2 = F(), p2 = computed(() => l2.value.timeline || t2.value.blogLocales.timelineTitle), o2 = computed(() => i2.value.config.map(({ year: r2 }) => ({ title: r2.toString(), level: 2, slug: r2.toString(), children: [] })));
  return () => h$3("div", { class: "timeline-wrapper" }, h$3("ul", { class: "timeline-content" }, [h$3(Tl, () => h$3("li", { class: "motto" }, p2.value)), h$3(Ol, { items: o2.value }), i2.value.config.map(({ year: r2, items: a2 }, n2) => h$3(Tl, { appear: true, delay: 0.08 * (n2 + 1), type: "group" }, () => [h$3("h3", { key: "title", id: r2, class: "timeline-year-title" }, h$3("span", r2)), h$3("li", { key: "content", class: "timeline-year-list" }, [h$3("ul", { class: "timeline-year-wrapper" }, a2.map(({ date: s2, info: c2, path: y2 }) => h$3("li", { class: "timeline-item" }, [h$3("span", { class: "timeline-date" }, s2), h$3(j$2, { class: "timeline-title", to: y2 }, () => c2[R$1.title])])))])]))]));
} }), b1 = defineComponent({ name: "Timeline", components: { ArticleType: Se, CategoryList: Q, TagList: X }, setup() {
  return () => h$3(D$1, () => h$3("div", { class: "vp-page vp-blog" }, h$3("div", { class: "blog-page-wrapper" }, [h$3("main", { id: "main-content", class: "vp-blog-main" }, [h$3(Tl, { appear: true, delay: 0.24 }, () => h$3(h1))]), h$3(Tl, { delay: 0.16 }, () => h$3(O, { key: "blog" }))])));
} });
const all$2 = "";
const g = () => h$3(u$2, { name: "lock" }, () => h$3("path", { d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z" }));
g.displayName = "LockIcon";
var k = defineComponent({ name: "PasswordModal", props: { full: Boolean }, emits: ["verify"], setup(l2, { emit: t2 }) {
  const o2 = usePageFrontmatter(), s2 = m$1(), n2 = ref(""), e2 = ref(false), a2 = ref(false), u2 = computed(() => s2.value.encryptLocales);
  let v2 = null;
  const c2 = () => {
    v2 && clearTimeout(v2), e2.value = false, t2("verify", n2.value, a2.value), nextTick().then(() => {
      e2.value = true, v2 = setTimeout(() => {
        e2.value = false;
      }, 1e3);
    });
  };
  return () => h$3("div", { class: ["vp-decrypt-layer", { expand: l2.full || o2.value.home }] }, h$3("div", { class: "vp-decrypt-modal" }, [h$3("div", { class: ["vp-decrypt-hint", { tried: e2.value }] }, e2.value ? u2.value.errorHint : h$3(g, { "aria-label": u2.value.iconLabel })), h$3("div", { class: "vp-decrypt-input" }, [h$3("input", { type: "password", value: n2.value, placeholder: u2.value.placeholder, onInput: ({ target: i2 }) => {
    n2.value = i2.value;
  }, onKeydown: ({ key: i2 }) => {
    i2 === "Enter" && c2();
  } })]), h$3("div", { class: "vp-remember-password" }, [h$3("input", { type: "checkbox", value: a2.value, onChange: () => a2.value = !a2.value }), u2.value.remember]), h$3("button", { type: "button", class: "vp-decrypt-submit", onClick: () => c2() }, "OK")]));
} });
const P = () => {
  const l2 = e$2();
  return computed(() => l2.value.encrypt || {});
}, S = "VUEPRESS_HOPE_GLOBAL_TOKEN", K = () => {
  const l2 = P(), t2 = useStorage(S, ""), o2 = useSessionStorage(S, ""), s2 = computed(() => {
    const { global: e2 = false, admin: a2 = [] } = l2.value;
    return e2 && a2.length > 0;
  }), n2 = computed(() => {
    if (s2.value) {
      if (t2.value)
        return l2.value.admin.some((e2) => compareSync(t2.value, e2));
      if (o2.value)
        return l2.value.admin.some((e2) => compareSync(o2.value, e2));
    }
    return false;
  });
  return { isEncrypted: s2, isDecrypted: n2, validate: (e2, a2 = false) => {
    (a2 ? t2 : o2).value = e2;
  } };
}, f = (l2 = "", t2) => !!l2 && compareSync(l2, t2), D = "VUEPRESS_HOPE_PATH_TOKEN", j = () => {
  const l2 = usePageData(), t2 = P(), o2 = useStorage(D, {}), s2 = useSessionStorage(D, {}), n2 = (a2) => isPlainObject(t2.value.config) ? f$2(t2.value.config).filter((u2) => z$3(decodeURI(a2), u2)).sort((u2, v2) => v2.length - u2.length) : [], e2 = (a2) => {
    const u2 = n2(a2);
    if (u2.length > 0) {
      const { config: v2 = {} } = t2.value;
      return { isEncrypted: true, isDecrypted: u2.some((c2) => o2.value[c2] && v2[c2].some((i2) => f(o2.value[c2], i2)) || s2.value[c2] && v2[c2].some((i2) => f(s2.value[c2], i2))) };
    }
    return { isDecrypted: false, isEncrypted: false };
  };
  return { status: computed(() => e2(l2.value.path)), getStatus: e2, validate: (a2, u2 = false) => {
    const { config: v2 = {} } = t2.value, c2 = n2(l2.value.path);
    for (const i2 of c2)
      if (v2[i2].filter((L2) => f(a2, L2))) {
        (u2 ? o2 : s2).value[i2] = a2;
        break;
      }
  } };
};
var z = defineComponent({ name: "GlobalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { isDecrypted: o2, isEncrypted: s2, validate: n2 } = K(), e2 = ref(false);
  return onMounted(() => {
    e2.value = true;
  }), () => h$3(c$1, () => s2.value ? e2.value ? o2.value ? t2.default() : h$3(k, { full: true, onVerify: n2 }) : null : t2.default());
} }), B = defineComponent({ name: "LocalEncrypt", slots: Object, setup(l2, { slots: t2 }) {
  const { status: o2, validate: s2 } = j(), n2 = ref(false);
  return onMounted(() => {
    n2.value = true;
  }), () => {
    const { isEncrypted: e2, isDecrypted: a2 } = o2.value;
    return e2 ? n2.value ? a2 ? t2.default() || null : h$3(k, { full: true, onVerify: s2 }) : null : t2.default() || null;
  };
} });
const all$1 = "";
const slidePage = "";
var d = defineComponent({ name: "SlidePage", setup() {
  const a2 = useRouter(), o2 = ref(false), n2 = shallowRef(), s2 = () => {
    o2.value = !o2.value;
  }, e2 = () => {
    o2.value = false;
  }, u2 = () => {
    e2(), window.history.go(-1);
  }, i2 = () => {
    e2(), a2.push("/");
  };
  return onClickOutside(n2, e2), () => h$3("div", { class: "vp-reveal-page" }, [h$3(Content), h$3("div", { ref: n2, class: ["vp-reveal-menu", { active: o2.value }] }, [h$3("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$3("span", { class: "icon" })), h$3("button", { type: "button", class: "back-button", onClick: () => u2() }, h$3(q$2)), h$3("button", { type: "button", class: "home-button", onClick: () => i2() }, h$3(a$3))])]);
} });
const all = "";
a$4(V$1);
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await t().wait();
      return scrollBehavior(...args);
    };
    Xa(app);
    app.component("HopeIcon", V$1);
    app.component("VPLink", j$2);
    app.component("BloggerInfo", R);
    app.component("GlobalEncrypt", z);
    app.component("LocalEncrypt", B);
  },
  setup: () => {
    Ka();
    el();
    r1();
  },
  layouts: {
    Layout: Fe,
    NotFound: Ce,
    BlogCategory: u1,
    BlogHome: g1,
    BlogType: y1,
    Timeline: b1,
    Slide: d
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  S$3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  C$3,
  Y$2,
  clientConfig9,
  M$2,
  clientConfig11
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "主页", "i": "home" }, ["/README.md"]],
  ["v-184f4da6", "/intro.html", { "v": "/assets/images/cover3.jpg", "e": "<h1> 介绍页</h1>\n<p>我是一个爱好科技的有远大抱负的苦命人。</p>\n<p>人工智能技术的快速发展已经成为了当今世界科技领域的热点话题。而在人工智能领域中，AIGC (Artificial Intelligence Global Community) 作为全球最大的人工智能社区之一，其发展前景备受关注。</p>\n<h2> 一、AIGC 的概述</h2>\n<p>AIGC 成立于2017年，是全球最大的人工智能社区之一。该社区致力于推动人工智能技术的发展和应用，并通过开展各种活动、交流和合作来促进各国在人工智能领域的合作与发展。目前，AIGC 在全球范围内拥有超过100万会员，覆盖了全球60多个国家和地区。</p>", "r": { "minutes": 8.4, "words": 2521 }, "y": "a", "t": "介绍页", "i": "circle-info" }, [":md"]],
  ["v-2e3eac9e", "/slides.html", { "e": "<!-- markdownlint-disable MD024 MD033 MD051 -->\n", "r": { "minutes": 4.51, "words": 1352 }, "y": "s", "t": "幻灯片页", "i": "person-chalkboard" }, [":md"]],
  ["v-3b3841c5", "/verification.html", { "e": "<p>verify_6c0c20b21d98ce1a6ba530da2971c609</p>\n", "r": { "minutes": 0, "words": 1 }, "y": "a", "t": "" }, [":md"]],
  ["v-1473bf53", "/demo/", { "c": ["使用指南"], "e": '<h2> 目录</h2>\n<ul>\n<li>\n<p><a href="/demo/markdown.html" target="blank">Markdown 展示</a></p>\n</li>\n<li>\n<p><a href="/demo/page.html" target="blank">页面展示</a></p>\n</li>\n<li>\n<p><a href="/demo/disable.html" target="blank">禁用展示</a></p>\n</li>\n<li>\n<p><a href="/demo/encrypt.html" target="blank">加密展示</a></p>\n</li>\n</ul>', "r": { "minutes": 0.14, "words": 41 }, "y": "a", "t": "主要功能与配置演示", "i": "laptop-code" }, ["/demo/README.md"]],
  ["v-4e65ec78", "/demo/disable.html", { "c": ["使用指南"], "g": ["禁用"], "e": "<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n", "r": { "minutes": 0.43, "words": 128 }, "y": "a", "t": "布局与功能禁用", "i": "gears", "O": 3 }, [":md"]],
  ["v-c151bf32", "/demo/encrypt.html", { "c": ["使用指南"], "g": ["文章加密"], "n": true, "r": { "minutes": 0.52, "words": 156 }, "y": "a", "t": "密码加密的文章", "i": "lock" }, [":md"]],
  ["v-438ffe52", "/demo/markdown.html", { "c": ["使用指南"], "g": ["Markdown"], "e": "<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n", "r": { "minutes": 3.43, "words": 1030 }, "y": "a", "t": "Markdown 展示", "i": "fab fa-markdown", "O": 2 }, [":md"]],
  ["v-6e19edb7", "/demo/page.html", { "a": "Ms.Molingrio", "d": 168912e7, "l": "2023年7月12日", "c": ["使用指南"], "g": ["页面配置", "使用指南"], "u": true, "v": "/assets/images/cover1.jpg", "e": "<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n", "r": { "minutes": 1.49, "words": 448 }, "y": "a", "t": "这是一条测试", "i": "file", "O": 1 }, [":md"]],
  ["v-7c9e35cc", "/posts/husky.html", { "d": 16892064e5, "l": "2023年7月13日", "c": ["哈士奇担任警察的可行性研究"], "g": ["狗狗", "哈士奇", "警察"], "e": "<p>以下是关于哈士奇担任警察的可行性研究的ppt提纲：</p>\n<h1> 哈士奇担任警察的可行性研究</h1>\n<h2> 背景介绍</h2>\n<ul>\n<li>近年来，越来越多的警局开始使用犬只作为辅助工具</li>\n<li>哈士奇因其聪明、灵活、勇敢等特点备受青睐</li>\n<li>但是，哈士奇是否真的适合担任警察？需要进行可行性研究</li>\n</ul>\n<h2> 研究内容</h2>\n<ol>\n<li>哈士奇在警察工作中的优缺点分析</li>\n<li>哈士奇训练方案设计</li>\n<li>哈士奇在实际工作中的表现评估</li>\n</ol>\n<h2> 哈士奇在警察工作中的优缺点分析</h2>", "r": { "minutes": 2.47, "words": 741 }, "y": "a", "t": "哈士奇担任警察的可行性研究", "i": "pen-to-square" }, [":md"]],
  ["v-24b7c48d", "/posts/dragonfruit.html", { "d": 16892928e5, "l": "2023年7月14日", "c": ["vpn"], "g": ["vpn", "机场"], "v": "/g.jpg", "e": '<h1> 廉价好用机场汇总</h1>\n<h2> <a href="https://1.fish" target="_blank" rel="noopener noreferrer">中国国际机场</a></h2>\n<p>提供试用流量<br>\n提供免流教程</p>\n<h2> <a href="https://dhh.wtf/#/register?code=oyDUr3Dv" target="_blank" rel="noopener noreferrer">大航海</a></h2>\n<p><code>1x</code> <code>3x</code> <code>0.1x</code></p>\n', "r": { "minutes": 0.8, "words": 240 }, "y": "a", "t": "廉价好用机场汇总", "i": "pen-to-square" }, [":md"]],
  ["v-f0ec4556", "/posts/strawberry.html", { "e": '<h1> 歌单</h1>\n<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="450" height="520" src="//music.163.com/outchain/player?type=0&amp;id=7199817011&amp;auto=1&amp;height=430"></iframe>\n', "r": { "minutes": 0.09, "words": 26 }, "y": "a", "t": "歌单" }, [":md"]],
  ["v-df8b6e0c", "/posts/tomato.html", { "d": 1689552e6, "l": "2023年7月17日", "c": ["随笔"], "g": ["emotion", "damage"], "u": true, "e": "<h1> 随笔</h1>\n<figure><figcaption></figcaption></figure>\n<h2> I</h2>\n<p>无尽的阴郁将光线吞没，沉默着，却隆隆作响。</p>\n<p>人们并不清楚自己的祖先从什么时候就已经出现了，也从不追究历史长河中究竟丧失了多少人。“寿命”就如同上帝给人们戴上的枷锁，但也如同流水一般，将万物更迭。新的事物以及思想因此不断地被创造。</p>\n<p>弗莱格听闻村里面的老人说，每个人的一辈子都是上天注定的，无论历史怎样顺延，每一个前进的步伐都好像是提前写入了剧本。老人同时哀叹自身的渺小与对未来的迷茫无力。当然，弗莱格本人是不太相信这些的。他觉得很多东西可以被上天注定，唯独命运不可以。每个人应当有着创造自己命运的能力与责任。因此，他也并不是一个循规蹈矩的人。他不希望每次站在河畔，山崖边的时候，看河流永远流向一个方向，看太阳照常起落，就如同再看一遍尘封的录像带一样。</p>", "r": { "minutes": 62.4, "words": 18719 }, "y": "a", "t": "随笔", "i": "pen-to-square" }, [":md"]],
  ["v-6408b763", "/posts/elementslaw.html", { "a": "Ms.Molingrio", "d": 16893792e5, "l": "2023年7月15日", "c": ["使用指南"], "g": ["ai", "aigc", "使用指南", "stable diffusion"], "u": true, "v": "/aa.jpg", "e": '<h1> 錾制元素法典 - Stable Difussion二次元通用模板</h1>\n<h2> 说明</h2>\n<p><code>Civitai&amp;社区图片常用/好用二次元parameters合集。</code></p>\n<p><code>本文中所有资料任何权益不属于整理者本人，形式上借鉴《元素法典》</code></p>\n<ul>\n<li><strong>除内容本身外，最终解释权归 錾制千秋yuno779 所有</strong></li>\n<li><strong>合集内容为二次元相关tag串合集，最好使用二次元模型而非3D</strong></li>\n<li><strong>大部分示例图为KawaICE模型生成:</strong><a href="https://civitai.com/models/51057/" target="_blank" rel="noopener noreferrer"><strong>https://civitai.com/models/51057/</strong></a></li>\n<li><strong>本tag集会持续整理，详情链接：<a href="https://civitai.com/models/62473" target="_blank" rel="noopener noreferrer">https://civitai.com/models/62473</a></strong></li>\n<li><strong>本parameters集不含有NSFW内容</strong></li>\n<li><strong>由于存在不良商家拿着本文去坑其小白的钱，故限制合集转载：</strong></li>\n<li><strong>《CIVITAI法典》第一发布链接：<a href="https://civitai.com/models/62473" target="_blank" rel="noopener noreferrer">https://civitai.com/models/62473</a></strong></li>\n<li><strong>其余均为转载，[允许任何不含盈利行为的转载]</strong></li>\n<li><strong>禁止任何形式以此获取收益，遇到不良商家请直接举报！</strong></li>\n</ul>', "r": { "minutes": 34.27, "words": 10281 }, "y": "a", "t": "錾制元素法典 - Stable Difussion二次元通用模板", "i": "file", "O": 2 }, [":md"]],
  ["v-3ff14240", "/posts/network.html", { "d": 16902432e5, "l": "2023年7月25日", "c": ["使用指南"], "g": ["network", "无线", "openwrt", "通讯"], "u": true, "v": "/q4.jpg", "e": "<h1> openwrt使用总结 - 以nanopi r2s为例</h1>\n<h2> 固件问题</h2>\n<p>买的设备自带Istore os，但是有几个重要的问题。</p>\n<ol>\n<li>软重启失效，任何形式的重启操作都会死机。只能强制断电来实现手动重启</li>\n<li>运行不稳定。每次运行不超过12h后必死机。第一次发现是在早上（突然没有网络，也登不进管理页面。）</li>\n<li>正常开启了几个插件，负载通常在0.8左右，并且内存占用和缓存一直是在肉眼可见的递增状态。死机总是在不经意间~</li>\n</ol>\n<p>在经历过<strong>把lan口设置为DHCP</strong>的蠢事后，管理页面彻底进不去了，而在reset后所有插件都不见了。还好拿到手后第一时间做了<strong>备份</strong>。但是由于软重启失效的缘故，备份还原的过程相当不顺利，几乎所有的插件都无法还原。此时产生了新的bug：</p>", "r": { "minutes": 5.66, "words": 1697 }, "y": "a", "t": "openwrt使用总结 - 以nanopi r2s为例", "O": 3 }, [":md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, []],
  ["v-e1e3da16", "/posts/", { "y": "p", "t": "Posts" }, []],
  ["v-5bc93818", "/category/", { "y": "p", "t": "分类", "I": 0 }, []],
  ["v-744d024e", "/tag/", { "y": "p", "t": "标签", "I": 0 }, []],
  ["v-e52c881c", "/article/", { "y": "p", "t": "文章", "I": 0 }, []],
  ["v-154dc4c4", "/star/", { "y": "p", "t": "收藏", "I": 0 }, []],
  ["v-01560935", "/timeline/", { "y": "p", "t": "时间轴", "I": 0 }, []],
  ["v-03d57386", "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { "y": "p", "t": "使用指南 分类", "I": 0 }, ["/category/使用指南/"]],
  ["v-83e1f92e", "/tag/%E7%A6%81%E7%94%A8/", { "y": "p", "t": "标签: 禁用", "I": 0 }, ["/tag/禁用/"]],
  ["v-5e7d3ae0", "/category/%E5%93%88%E5%A3%AB%E5%A5%87%E6%8B%85%E4%BB%BB%E8%AD%A6%E5%AF%9F%E7%9A%84%E5%8F%AF%E8%A1%8C%E6%80%A7%E7%A0%94%E7%A9%B6/", { "y": "p", "t": "哈士奇担任警察的可行性研究 分类", "I": 0 }, ["/category/哈士奇担任警察的可行性研究/"]],
  ["v-1e447d61", "/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/", { "y": "p", "t": "标签: 文章加密", "I": 0 }, ["/tag/文章加密/"]],
  ["v-65f6c1d3", "/category/vpn/", { "y": "p", "t": "vpn 分类", "I": 0 }, []],
  ["v-484552dc", "/tag/markdown/", { "y": "p", "t": "标签: Markdown", "I": 0 }, []],
  ["v-60649a06", "/category/%E9%9A%8F%E7%AC%94/", { "y": "p", "t": "随笔 分类", "I": 0 }, ["/category/随笔/"]],
  ["v-a378ad66", "/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { "y": "p", "t": "标签: 页面配置", "I": 0 }, ["/tag/页面配置/"]],
  ["v-7b167472", "/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { "y": "p", "t": "标签: 使用指南", "I": 0 }, ["/tag/使用指南/"]],
  ["v-a0483a7e", "/tag/%E7%8B%97%E7%8B%97/", { "y": "p", "t": "标签: 狗狗", "I": 0 }, ["/tag/狗狗/"]],
  ["v-655561c6", "/tag/%E5%93%88%E5%A3%AB%E5%A5%87/", { "y": "p", "t": "标签: 哈士奇", "I": 0 }, ["/tag/哈士奇/"]],
  ["v-551ba7a4", "/tag/%E8%AD%A6%E5%AF%9F/", { "y": "p", "t": "标签: 警察", "I": 0 }, ["/tag/警察/"]],
  ["v-b302fdee", "/tag/vpn/", { "y": "p", "t": "标签: vpn", "I": 0 }, []],
  ["v-39cc843c", "/tag/%E6%9C%BA%E5%9C%BA/", { "y": "p", "t": "标签: 机场", "I": 0 }, ["/tag/机场/"]],
  ["v-5a3e80fc", "/tag/emotion/", { "y": "p", "t": "标签: emotion", "I": 0 }, []],
  ["v-49ab4c92", "/tag/damage/", { "y": "p", "t": "标签: damage", "I": 0 }, []],
  ["v-0da0abf9", "/tag/ai/", { "y": "p", "t": "标签: ai", "I": 0 }, []],
  ["v-2826701d", "/tag/aigc/", { "y": "p", "t": "标签: aigc", "I": 0 }, []],
  ["v-63ee6e4e", "/tag/stable-diffusion/", { "y": "p", "t": "标签: stable diffusion", "I": 0 }, []],
  ["v-49627fe2", "/tag/network/", { "y": "p", "t": "标签: network", "I": 0 }, []],
  ["v-40d48f2c", "/tag/%E6%97%A0%E7%BA%BF/", { "y": "p", "t": "标签: 无线", "I": 0 }, ["/tag/无线/"]],
  ["v-6f0097ee", "/tag/openwrt/", { "y": "p", "t": "标签: openwrt", "I": 0 }, []],
  ["v-9024c41e", "/tag/%E9%80%9A%E8%AE%AF/", { "y": "p", "t": "标签: 通讯", "I": 0 }, ["/tag/通讯/"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h$3(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      {
        path: path.endsWith("/") ? (
          // redirect from `/index.html` to `/`
          path + "index.html"
        ) : (
          // redirect from `/foo` to `/foo.html`
          path.substring(0, path.length - 5)
        ),
        redirect: path
      },
      ...redirects.map((item) => ({
        path: item === ":md" ? (
          // redirect from `/foo.md` to `/foo.html`
          path.substring(0, path.length - 5) + ".md"
        ) : item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routePath = computedEager(() => router.currentRoute.value.path);
  const routeLocale = computedEager(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$3(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$3(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  C$4 as C,
  createVueApp,
  r$1 as r,
  v$5 as v
};
