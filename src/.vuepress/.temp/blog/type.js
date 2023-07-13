export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-df8b6e0c","v-7c9e35cc","v-f0ec4556","v-24b7c48d","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-184f4da6","v-2e3eac9e","v-1473bf53","v-4e65ec78","v-c151bf32","v-438ffe52"]}},"star":{"/":{"path":"/star/","keys":["v-7bbc18fc","v-6e19edb7","v-df8b6e0c","v-696d9fb1"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-7c9e35cc","v-6e19edb7","v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

