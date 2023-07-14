export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6408b763","v-6e19edb7","v-df8b6e0c","v-24b7c48d","v-7c9e35cc","v-f0ec4556","v-184f4da6","v-2e3eac9e","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52"]}},"star":{"/":{"path":"/star/","keys":["v-6408b763","v-6e19edb7","v-df8b6e0c"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6408b763","v-24b7c48d","v-7c9e35cc","v-6e19edb7","v-df8b6e0c","v-f0ec4556"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

