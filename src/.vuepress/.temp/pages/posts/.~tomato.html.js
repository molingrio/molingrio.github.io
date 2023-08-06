export const data = JSON.parse("{\"key\":\"v-50ffebac\",\"path\":\"/posts/.~tomato.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"posts/.~tomato.md\",\"excerpt\":\"\",\"autoDesc\":true}")

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
