"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44137"],{22742:function(e,t,r){r.d(t,{ZP:function(){return o},d$:function(){return i}});var n=r(85893),a=r(50065);let i=[];function s(e){let t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"How to use the code sample"}),(0,n.jsx)("strong",{children:"The code presented below requires:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["That ",(0,n.jsx)(t.code,{children:"createChart"})," has already been imported. See ",(0,n.jsx)(t.a,{href:"/docs#creating-a-chart",children:"Getting Started"})," for more information,"]}),"\n",(0,n.jsxs)(t.li,{children:["and that there is an html div element on the page with an ",(0,n.jsx)(t.code,{children:"id"})," of ",(0,n.jsx)(t.code,{children:"container"}),"."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["Here is an example skeleton setup: ",(0,n.jsx)(t.a,{href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6",children:"Code Sandbox"}),".\nYou can paste the provided code below the ",(0,n.jsx)(t.code,{children:"// REPLACE EVERYTHING BELOW HERE"})," comment."]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."})})]})}function o(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},51407:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"demos/compare-multiple-series","title":"Compare multiple series","description":"An example of how to compare multiple series on a single price scale","source":"@site/tutorials/demos/compare-multiple-series.mdx","sourceDirName":"demos","slug":"/demos/compare-multiple-series","permalink":"/lightweight-charts/tutorials/demos/compare-multiple-series","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Compare multiple series","sidebar_label":"Compare multiple series","description":"An example of how to compare multiple series on a single price scale","pagination_prev":null,"pagination_next":null,"keywords":["compare","series"]},"sidebar":"tutorialsSidebar"}'),a=r("85893"),i=r("50065"),s=r("22742"),o=r("30353");let l={title:"Compare multiple series",sidebar_label:"Compare multiple series",description:"An example of how to compare multiple series on a single price scale",pagination_prev:null,pagination_next:null,keywords:["compare","series"]},c=void 0,d={},h=[];function O(e){let t={a:"a",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This Multi-Series Comparison Example illustrates how an assortment of data\nseries can be integrated into a single chart for comparisons. Simply use the\ncharting API ",(0,a.jsx)(t.code,{children:"addSeries"})," to create multiple series."]}),"\n",(0,a.jsxs)(t.p,{children:["If you would like an unique price scales for each individual series,\nparticularly when dealing with data series with divergent value ranges, then\ntake a look at the ",(0,a.jsx)(t.a,{href:"/lightweight-charts/tutorials/how_to/two-price-scales",children:"Two Price Scales Example"}),"."]}),"\n","\n",(0,a.jsx)(o.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,codeUsage:(0,a.jsx)(s.ZP,{}),children:"// remove-start\n// Lightweight Charts\u2122 Example: Compare multiple series\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/compare-multiple-series\n\n// remove-end\n// hide-start\nlet randomFactor = 25 + Math.random() * 25;\nconst samplePoint = i =>\n	i *\n		(0.5 +\n			Math.sin(i / 10) * 0.2 +\n			Math.sin(i / 20) * 0.4 +\n			Math.sin(i / randomFactor) * 0.8 +\n			Math.sin(i / 500) * 0.5) +\n	200;\n\nfunction generateLineData(numberOfPoints = 500) {\n	randomFactor = 25 + Math.random() * 25;\n	const res = [];\n	const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));\n	for (let i = 0; i < numberOfPoints; ++i) {\n		const time = (date.getTime() / 1000);\n		const value = samplePoint(i);\n		res.push({\n			time,\n			value,\n		});\n\n		date.setUTCDate(date.getUTCDate() + 1);\n	}\n\n	return res;\n}\n// hide-end\nconst chartOptions = {\n	layout: {\n		textColor: CHART_TEXT_COLOR,\n		background: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n	},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst lineSeriesOne = chart.addSeries(LineSeries, { color: LINE_LINE_COLOR });\n\nconst lineSeriesTwo = chart.addSeries(LineSeries, { color: LINE_LINE2_COLOR });\n\nconst lineSeriesThree = chart.addSeries(LineSeries, { color: LINE_LINE3_COLOR });\n\nconst lineSeriesOneData = generateLineData();\nconst lineSeriesTwoData = generateLineData();\nconst lineSeriesThreeData = generateLineData();\n\nlineSeriesOne.setData(lineSeriesOneData);\nlineSeriesTwo.setData(lineSeriesTwoData);\nlineSeriesThree.setData(lineSeriesThreeData);\n\nchart.timeScale().fitContent();\n"})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(O,{...e})}):O(e)}},30353:function(e,t,r){r.d(t,{ZP:()=>L});var n=r("85893"),a=r("67294"),i=r("31705"),s=r("44634"),o=r("79207"),l=r("57378"),c=r("6646");function d(e,t,r){e.addEventListener("resize",()=>{let e=t.getBoundingClientRect();r(e.width,e.height)},!0)}let h={3.8:async e=>{let t=await r.e("70967").then(r.bind(r,51083));return{module:t,createChart:(r,n)=>{let a=t.createChart(r,n);return d(e,r,a.resize.bind(a)),a},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},"4.0":async e=>{let t=await r.e("98966").then(r.bind(r,11413));return{module:t,createChart:(r,n)=>{let a=t.createChart(r,n);return d(e,r,a.resize.bind(a)),a},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},4.1:async e=>{let t=await r.e("85998").then(r.bind(r,1860));return{module:t,createChart:(r,n)=>{let a=t.createChart(r,n);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,n,a)=>{let i=t.createChartEx(r,n,a);return d(e,r,i.resize.bind(i)),i},createYieldCurveChart:void 0,createOptionsChart:void 0}},4.2:async e=>{let t=await r.e("15373").then(r.bind(r,15757));return{module:t,createChart:(r,n)=>{let a=t.createChart(r,n);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,n,a)=>{let i=t.createChartEx(r,n,a);return d(e,r,i.resize.bind(i)),i},createYieldCurveChart:void 0,createOptionsChart:void 0}},"5.0":async e=>{let t=await r.e("11191").then(r.bind(r,96473));return{module:t,createChart:(r,n)=>{let a=t.createChart(r,n);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,n,a)=>{let i=t.createChartEx(r,n,a);return d(e,r,i.resize.bind(i)),i},createYieldCurveChart:(r,n)=>{let a=t.createYieldCurveChart(r,n);return d(e,r,a.resize.bind(a)),a},createOptionsChart:(r,n)=>{let a=t.createOptionsChart(r,n);return d(e,r,a.resize.bind(a)),a}}},current:async()=>{let e=await r.e("22433").then(r.bind(r,3768));return{module:e,createChart:(t,r)=>{let n=e.createChart(t,r);return d(window,t,n.resize.bind(n)),n},createChartEx:(t,r,n)=>{let a=e.createChartEx(t,r,n);return d(window,t,a.resize.bind(a)),a},createYieldCurveChart:(t,r)=>{let n=e.createYieldCurveChart(t,r);return d(window,t,n.resize.bind(n)),n},createOptionsChart:(t,r)=>{let n=e.createOptionsChart(t,r);return d(window,t,n.resize.bind(n)),n}}}},O={iframe:"iframe_R_Fr"};function u(e){let{script:t,iframeStyle:r}=e,{preferredVersion:i}=(0,l.J)(),s=c&&c.length>0?c["0"]:"",o=i?.name??s??"current",d=`
		<style>
			html,
			body,
			#container {
				width: 100%;
				height: 100%;
				overflow: hidden;
				margin: 0;
			}
		</style>
		<div id="container"></div>
		<script>
			window.run = () => {
				${t}
			};
		</script>
	`,u=a.useRef(null);return a.useEffect(()=>{let e=u.current,t=e?.contentWindow,r=e?.contentDocument;if(null===e||!t||!r)return;let n=async()=>{try{let{module:e,createChart:r,createChartEx:n,createYieldCurveChart:a,createOptionsChart:i}=await h[o](t);Object.assign(t,e),t.createChart=r,t.createChartEx=n,t.createYieldCurveChart=a,t.createOptionsChart=i,"current"===o&&(t.LineSeries=e.LineSeries,t.AreaSeries=e.AreaSeries,t.CandlestickSeries=e.CandlestickSeries,t.BarSeries=e.BarSeries,t.HistogramSeries=e.HistogramSeries),t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)n();else{let t=()=>{n(),e.removeEventListener("load",t)};e.addEventListener("load",t)}},[d]),(0,n.jsx)("iframe",{ref:u,srcDoc:d,className:O.iframe,style:r},t)}var C=r("98159");let p=()=>`${Math.random().toString(36).slice(2,11)}`,m=Object.keys(C.l.DARK),L=e=>{let{chart:t,replaceThemeConstants:r,hideableCode:l,chartOnly:c,chartOnTop:d=!1,iframeStyle:h,replaceTabs:L=!0,codeUsage:_,...g}=e,{children:E}=e,{colorMode:R}=(0,o.I)(),b=function(){let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>t(p()),[]),e}();if(r&&"string"==typeof E&&(E=function(e,t){let r=t?C.l.DARK:C.l.LIGHT,n=e;for(let e of m)n=n.replace(RegExp(e,"g"),`'${r[e]}'`);return n}(E,"dark"===R)),L&&"string"==typeof E&&(E=E.replace(/\t/g,"    ")),E=E.replace(RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||l){let e=!c&&(0,n.jsx)(i.Z,{...g,children:E}),r=t&&(0,n.jsx)(s.Z,{fallback:(0,n.jsx)("div",{className:O.iframe,children:"\xa0"}),children:()=>(0,n.jsx)(u,{script:E,iframeStyle:h})}),a=l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{id:b,type:"checkbox",className:"toggle-hidden-lines"}),(0,n.jsx)("label",{className:"toggle-label",htmlFor:b,children:"Show all code"})]});return d?(0,n.jsxs)(n.Fragment,{children:[r,_,a,e]}):(0,n.jsxs)(n.Fragment,{children:[_,a,e,r]})}return(0,n.jsx)(i.Z,{...g,children:E})}},98159:function(e,t,r){r.d(t,{l:function(){return n}});let n={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6646:function(e){e.exports=JSON.parse('["5.0","4.2","4.1","4.0","3.8"]')}}]);