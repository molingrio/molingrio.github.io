import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { live2dPlugin } from 'vuepress-plugin-live2d-plus';



export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "MOLINGRIO 	 ©莫凌",
	description: "莫凌博客",
	theme,
	
	/*plugins: [
		live2dPlugin({
			enable: true,
			model: {
				url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
			},
			display: {
				position: 'left',
				width: '135px',
				height: '300px',
				xOffset: '35px',
				yOffset: '5px'
			},
			mobile: {
				show: false
			},
			react: {
				opacity: 0.8
			}
		}),
		["vuepress-plugin-live2d",
			{
			"modelName": "hijiki",
			"mobileShow": false
			}
		]
	]
*/
  // Enable it with pwa
  // shouldPrefetch: false,
});
/*
export default {
	  plugins: {
	  	live2dplus: {
		enable: true,
		model: {
			url: 'https://cdn.jsdelivr.net/gh/qsyyke/vscode-live2d-models/model-library/hibiki/hibiki.model.json'
		},
		display: {
			position: 'left',
            width: '135px',
            height: '300px',
            xOffset: '5%',
            yOffset: '5%'
		},
		mobile: {
			show: false
		},
		react: {
			opacity: 0.8
		}
	}
  },
};
*/