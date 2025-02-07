"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21394"],{42241:function(e,i,n){n.r(i),n.d(i,{default:()=>d,frontMatter:()=>t,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"api/interfaces/ChartOptionsBase","title":"Interface: ChartOptionsBase","description":"Represents common chart options","source":"@site/versioned_docs/version-5.0/api/interfaces/ChartOptionsBase.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/ChartOptionsBase","permalink":"/lightweight-charts/docs/api/interfaces/ChartOptionsBase","draft":false,"unlisted":false,"tags":[],"version":"5.0","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),s=n("85893"),r=n("50065");let t={pagination_next:null,pagination_prev:null},c="Interface: ChartOptionsBase",a={},o=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"width",id:"width",level:3},{value:"Default Value",id:"default-value",level:4},{value:"height",id:"height",level:3},{value:"Default Value",id:"default-value-1",level:4},{value:"autoSize",id:"autosize",level:3},{value:"layout",id:"layout",level:3},{value:"leftPriceScale",id:"leftpricescale",level:3},{value:"rightPriceScale",id:"rightpricescale",level:3},{value:"overlayPriceScales",id:"overlaypricescales",level:3},{value:"timeScale",id:"timescale",level:3},{value:"crosshair",id:"crosshair",level:3},{value:"grid",id:"grid",level:3},{value:"handleScroll",id:"handlescroll",level:3},{value:"handleScale",id:"handlescale",level:3},{value:"kineticScroll",id:"kineticscroll",level:3},{value:"trackingMode",id:"trackingmode",level:3},{value:"localization",id:"localization",level:3}];function h(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"interface-chartoptionsbase",children:"Interface: ChartOptionsBase"})}),"\n",(0,s.jsx)(i.p,{children:"Represents common chart options"}),"\n",(0,s.jsx)(i.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsImpl",children:(0,s.jsx)(i.code,{children:"ChartOptionsImpl"})})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"width",children:"width"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"width"}),": ",(0,s.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Width of the chart in pixels"}),"\n",(0,s.jsx)(i.h4,{id:"default-value",children:"Default Value"}),"\n",(0,s.jsxs)(i.p,{children:["If ",(0,s.jsx)(i.code,{children:"0"})," (default) or none value provided, then a size of the widget will be calculated based its container's size."]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"height",children:"height"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"height"}),": ",(0,s.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Height of the chart in pixels"}),"\n",(0,s.jsx)(i.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,s.jsxs)(i.p,{children:["If ",(0,s.jsx)(i.code,{children:"0"})," (default) or none value provided, then a size of the widget will be calculated based its container's size."]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"autosize",children:"autoSize"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"autoSize"}),": ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Setting this flag to ",(0,s.jsx)(i.code,{children:"true"})," will make the chart watch the chart container's size and automatically resize the chart to fit its container whenever the size changes."]}),"\n",(0,s.jsxs)(i.p,{children:["This feature requires ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:(0,s.jsx)(i.code,{children:"ResizeObserver"})})," class to be available in the global scope.\nNote that calling code is responsible for providing a polyfill if required. If the global scope does not have ",(0,s.jsx)(i.code,{children:"ResizeObserver"}),", a warning will appear and the flag will be ignored."]}),"\n",(0,s.jsxs)(i.p,{children:["Please pay attention that ",(0,s.jsx)(i.code,{children:"autoSize"})," option and explicit sizes options ",(0,s.jsx)(i.code,{children:"width"})," and ",(0,s.jsx)(i.code,{children:"height"})," don't conflict with one another.\nIf you specify ",(0,s.jsx)(i.code,{children:"autoSize"})," flag, then ",(0,s.jsx)(i.code,{children:"width"})," and ",(0,s.jsx)(i.code,{children:"height"})," options will be ignored unless ",(0,s.jsx)(i.code,{children:"ResizeObserver"})," has failed. If it fails then the values will be used as fallback."]}),"\n",(0,s.jsxs)(i.p,{children:["The flag ",(0,s.jsx)(i.code,{children:"autoSize"})," could also be set with and unset with ",(0,s.jsx)(i.code,{children:"applyOptions"})," function."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const chart = LightweightCharts.createChart(document.body, {\n    autoSize: true,\n});\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"layout",children:"layout"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"layout"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LayoutOptions",children:(0,s.jsx)(i.code,{children:"LayoutOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Layout options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"leftpricescale",children:"leftPriceScale"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"leftPriceScale"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions",children:(0,s.jsx)(i.code,{children:"PriceScaleOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Left price scale options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"rightpricescale",children:"rightPriceScale"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"rightPriceScale"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions",children:(0,s.jsx)(i.code,{children:"PriceScaleOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Right price scale options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"overlaypricescales",children:"overlayPriceScales"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"overlayPriceScales"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/OverlayPriceScaleOptions",children:(0,s.jsx)(i.code,{children:"OverlayPriceScaleOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Overlay price scale options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"timescale",children:"timeScale"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"timeScale"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HorzScaleOptions",children:(0,s.jsx)(i.code,{children:"HorzScaleOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Time scale options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"crosshair",children:"crosshair"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"crosshair"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CrosshairOptions",children:(0,s.jsx)(i.code,{children:"CrosshairOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The crosshair shows the intersection of the price and time scale values at any point on the chart."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"grid",children:"grid"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"grid"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/GridOptions",children:(0,s.jsx)(i.code,{children:"GridOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"A grid is represented in the chart background as a vertical and horizontal lines drawn at the levels of visible marks of price and the time scales."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"handlescroll",children:"handleScroll"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"handleScroll"}),": ",(0,s.jsx)(i.code,{children:"boolean"})," | ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HandleScrollOptions",children:(0,s.jsx)(i.code,{children:"HandleScrollOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Scroll options, or a boolean flag that enables/disables scrolling"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"handlescale",children:"handleScale"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"handleScale"}),": ",(0,s.jsx)(i.code,{children:"boolean"})," | ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HandleScaleOptions",children:(0,s.jsx)(i.code,{children:"HandleScaleOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Scale options, or a boolean flag that enables/disables scaling"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"kineticscroll",children:"kineticScroll"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"kineticScroll"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/KineticScrollOptions",children:(0,s.jsx)(i.code,{children:"KineticScrollOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Kinetic scroll options"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"trackingmode",children:"trackingMode"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"trackingMode"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/TrackingModeOptions",children:(0,s.jsx)(i.code,{children:"TrackingModeOptions"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Represent options for the tracking mode's behavior."}),"\n",(0,s.jsx)(i.p,{children:"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"localization",children:"localization"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"localization"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase",children:(0,s.jsx)(i.code,{children:"LocalizationOptionsBase"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Basic localization options"})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return t}});var l=n(67294);let s={},r=l.createContext(s);function t(e){let i=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);