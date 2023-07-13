import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "快捷索引",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "机场", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "项目教程",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
