"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72188"],{4456:function(e,t,i){i.r(t),i.d(t,{areaExample:()=>h,baselineExample:()=>p,barExample:()=>d,histogramExample:()=>O,default:()=>C,frontMatter:()=>l,metadata:()=>s,candlestickExample:()=>g,assets:()=>c,lineExample:()=>x,toc:()=>m,contentTitle:()=>o});var s=JSON.parse('{"id":"series-types","title":"Series","description":"This article describes supported series types and ways to customize them.","source":"@site/docs/series-types.mdx","sourceDirName":".","slug":"/series-types","permalink":"/lightweight-charts/docs/next/series-types","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Getting started","permalink":"/lightweight-charts/docs/next/"},"next":{"title":"Chart types","permalink":"/lightweight-charts/docs/next/chart-types"}}'),r=i("85893"),a=i("50065"),n=i("30353");let l={sidebar_position:1},o="Series",c={},h=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const areaSeries = chart.addSeries(AreaSeries, { lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR, bottomColor: AREA_BOTTOM_COLOR });

const data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];

areaSeries.setData(data);

chart.timeScale().fitContent();
`,d=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const barSeries = chart.addSeries(BarSeries, { upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR });

const data = [
  { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
  { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
  { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
  { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
  { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
  { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
  { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
  { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
  { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
  { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
  { open: 10.96, high: 11.90, low: 10.80, close: 11.50, time: 1643291876 },
  { open: 11.50, high: 12.00, low: 11.30, close: 11.80, time: 1643378276 },
  { open: 11.80, high: 12.20, low: 11.70, close: 12.00, time: 1643464676 },
  { open: 12.00, high: 12.50, low: 11.90, close: 12.30, time: 1643551076 },
  { open: 12.30, high: 12.80, low: 12.10, close: 12.60, time: 1643637476 },
  { open: 12.60, high: 13.00, low: 12.50, close: 12.90, time: 1643723876 },
  { open: 12.90, high: 13.50, low: 12.70, close: 13.20, time: 1643810276 },
  { open: 13.20, high: 13.70, low: 13.00, close: 13.50, time: 1643896676 },
  { open: 13.50, high: 14.00, low: 13.30, close: 13.80, time: 1643983076 },
  { open: 13.80, high: 14.20, low: 13.60, close: 14.00, time: 1644069476 },
];

barSeries.setData(data);

chart.timeScale().fitContent();
`,p=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const baselineSeries = chart.addSeries(BaselineSeries, { baseValue: { type: 'price', price: 25 }, topLineColor: BASELINE_TOP_LINE_COLOR, topFillColor1: BASELINE_TOP_FILL_COLOR1, topFillColor2: BASELINE_TOP_FILL_COLOR2, bottomLineColor: BASELINE_BOTTOM_LINE_COLOR, bottomFillColor1: BASELINE_BOTTOM_FILL_COLOR1, bottomFillColor2: BASELINE_BOTTOM_FILL_COLOR2 });

const data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];

baselineSeries.setData(data);

chart.timeScale().fitContent();
`,g=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const candlestickSeries = chart.addSeries(CandlestickSeries, { upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false, wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR });

const data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];

candlestickSeries.setData(data);

chart.timeScale().fitContent();
`,O=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const histogramSeries = chart.addSeries(HistogramSeries, { color: HISTOGRAM_COLOR });

const data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922, color: 'red' }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722, color: 'red' }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922, color: 'red' }];

histogramSeries.setData(data);

chart.timeScale().fitContent();
`,x=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const lineSeries = chart.addSeries(LineSeries, { color: LINE_LINE_COLOR });

const data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];

lineSeries.setData(data);

chart.timeScale().fitContent();
`,m=[{value:"Supported types",id:"supported-types",level:2},{value:"Area",id:"area",level:3},{value:"Bar",id:"bar",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Line",id:"line",level:3},{value:"Custom series (plugins)",id:"custom-series-plugins",level:3},{value:"Customization",id:"customization",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"series",children:"Series"})}),"\n",(0,r.jsxs)(t.p,{children:["This article describes supported series types and ways to ",(0,r.jsx)(t.a,{href:"#customization",children:"customize"})," them."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-types",children:"Supported types"}),"\n",(0,r.jsx)(t.h3,{id:"area",children:"Area"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/AreaSeries",children:(0,r.jsx)(t.code,{children:"AreaSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData",children:(0,r.jsx)(t.code,{children:"SingleValueData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/AreaStyleOptions",children:(0,r.jsx)(t.code,{children:"AreaStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This series is represented with a colored area between the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/time-scale",children:"time scale"})," and line connecting all data points:"]}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:h}),"\n",(0,r.jsx)(t.h3,{id:"bar",children:"Bar"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/BarSeries",children:(0,r.jsx)(t.code,{children:"BarSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/BarData",children:(0,r.jsx)(t.code,{children:"BarData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/BarStyleOptions",children:(0,r.jsx)(t.code,{children:"BarStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This series illustrates price movements with vertical bars.\nThe length of each bar corresponds to the range between the highest and lowest price values.\nOpen and close values are represented with the tick marks on the left and right side of the bar, respectively:"}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:d}),"\n",(0,r.jsx)(t.h3,{id:"baseline",children:"Baseline"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/BaselineSeries",children:(0,r.jsx)(t.code,{children:"BaselineSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData",children:(0,r.jsx)(t.code,{children:"SingleValueData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions",children:(0,r.jsx)(t.code,{children:"BaselineStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This series is represented with two colored areas between the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions#basevalue",children:"the base value line"})," and line connecting all data points:"]}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:p}),"\n",(0,r.jsx)(t.h3,{id:"candlestick",children:"Candlestick"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/CandlestickSeries",children:(0,r.jsx)(t.code,{children:"CandlestickSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/CandlestickData",children:(0,r.jsx)(t.code,{children:"CandlestickData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/CandlestickStyleOptions",children:(0,r.jsx)(t.code,{children:"CandlestickStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This series illustrates price movements with candlesticks.\nThe solid body of each candlestick represents the open and close values for the time period. Vertical lines, known as wicks, above and below the candle body represent the high and low values, respectively:"}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:g}),"\n",(0,r.jsx)(t.h3,{id:"histogram",children:"Histogram"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/HistogramSeries",children:(0,r.jsx)(t.code,{children:"HistogramSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/HistogramData",children:(0,r.jsx)(t.code,{children:"HistogramData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/HistogramStyleOptions",children:(0,r.jsx)(t.code,{children:"HistogramStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This series illustrates the distribution of values with columns:"}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:O}),"\n",(0,r.jsx)(t.h3,{id:"line",children:"Line"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Series Definition"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/variables/LineSeries",children:(0,r.jsx)(t.code,{children:"LineSeries"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data format"}),": ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/LineData",children:(0,r.jsx)(t.code,{children:"LineData"})})," or ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",children:(0,r.jsx)(t.code,{children:"WhitespaceData"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Style options"}),": a mix of ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(t.code,{children:"SeriesOptionsCommon"})})," and ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/LineStyleOptions",children:(0,r.jsx)(t.code,{children:"LineStyleOptions"})})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This series is represented with a set of data points connected by straight line segments:"}),"\n","\n",(0,r.jsx)(n.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:x}),"\n",(0,r.jsx)(t.h3,{id:"custom-series-plugins",children:"Custom series (plugins)"}),"\n",(0,r.jsx)(t.p,{children:"The library enables you to create custom series types, also known as series plugins, to expand its functionality. With this feature, you can add new series types, indicators, and other visualizations."}),"\n",(0,r.jsxs)(t.p,{children:["To define a custom series type, create a class that implements the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/ICustomSeriesPaneView",children:(0,r.jsx)(t.code,{children:"ICustomSeriesPaneView"})})," interface. This class defines the rendering code that Lightweight Charts\u2122 uses to draw the series on the chart.\nOnce your custom series type is defined, it can be added to any chart instance using the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#addcustomseries",children:(0,r.jsx)(t.code,{children:"addCustomSeries()"})})," method. Custom series types function like any other series."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information, refer to the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/plugins/intro",children:"Plugins"})," article."]}),"\n",(0,r.jsx)(t.h2,{id:"customization",children:"Customization"}),"\n",(0,r.jsxs)(t.p,{children:["Each series type offers a unique set of customization options listed on the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesStyleOptionsMap",children:(0,r.jsx)(t.code,{children:"SeriesStyleOptionsMap"})})," page."]}),"\n",(0,r.jsx)(t.p,{children:"You can adjust series options in two ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Specify the default options using the corresponding parameter while creating a series:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Change default top & bottom colors of an area series in creating time\nconst series = chart.addSeries(AreaSeries, {\n    topColor: 'red',\n    bottomColor: 'green',\n});\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.a,{href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#applyoptions",children:(0,r.jsx)(t.code,{children:"ISeriesApi.applyOptions"})})," method to apply other options on the fly:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Updating candlestick series options on the fly\ncandlestickSeries.applyOptions({\n    upColor: 'red',\n    downColor: 'blue',\n});\n"})}),"\n"]}),"\n"]})]})}function C(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},30353:function(e,t,i){i.d(t,{ZP:()=>u});var s=i("85893"),r=i("67294"),a=i("31705"),n=i("44634"),l=i("79207"),o=i("57378"),c=i("6646");function h(e,t,i){e.addEventListener("resize",()=>{let e=t.getBoundingClientRect();i(e.width,e.height)},!0)}let d={3.8:async e=>{let t=await i.e("70967").then(i.bind(i,51083));return{module:t,createChart:(i,s)=>{let r=t.createChart(i,s);return h(e,i,r.resize.bind(r)),r},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},"4.0":async e=>{let t=await i.e("98966").then(i.bind(i,11413));return{module:t,createChart:(i,s)=>{let r=t.createChart(i,s);return h(e,i,r.resize.bind(r)),r},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},4.1:async e=>{let t=await i.e("85998").then(i.bind(i,1860));return{module:t,createChart:(i,s)=>{let r=t.createChart(i,s);return h(e,i,r.resize.bind(r)),r},createChartEx:(i,s,r)=>{let a=t.createChartEx(i,s,r);return h(e,i,a.resize.bind(a)),a},createYieldCurveChart:void 0,createOptionsChart:void 0}},4.2:async e=>{let t=await i.e("15373").then(i.bind(i,15757));return{module:t,createChart:(i,s)=>{let r=t.createChart(i,s);return h(e,i,r.resize.bind(r)),r},createChartEx:(i,s,r)=>{let a=t.createChartEx(i,s,r);return h(e,i,a.resize.bind(a)),a},createYieldCurveChart:void 0,createOptionsChart:void 0}},"5.0":async e=>{let t=await i.e("11191").then(i.bind(i,96473));return{module:t,createChart:(i,s)=>{let r=t.createChart(i,s);return h(e,i,r.resize.bind(r)),r},createChartEx:(i,s,r)=>{let a=t.createChartEx(i,s,r);return h(e,i,a.resize.bind(a)),a},createYieldCurveChart:(i,s)=>{let r=t.createYieldCurveChart(i,s);return h(e,i,r.resize.bind(r)),r},createOptionsChart:(i,s)=>{let r=t.createOptionsChart(i,s);return h(e,i,r.resize.bind(r)),r}}},current:async()=>{let e=await i.e("22433").then(i.bind(i,3768));return{module:e,createChart:(t,i)=>{let s=e.createChart(t,i);return h(window,t,s.resize.bind(s)),s},createChartEx:(t,i,s)=>{let r=e.createChartEx(t,i,s);return h(window,t,r.resize.bind(r)),r},createYieldCurveChart:(t,i)=>{let s=e.createYieldCurveChart(t,i);return h(window,t,s.resize.bind(s)),s},createOptionsChart:(t,i)=>{let s=e.createOptionsChart(t,i);return h(window,t,s.resize.bind(s)),s}}}},p={iframe:"iframe_R_Fr"};function g(e){let{script:t,iframeStyle:i}=e,{preferredVersion:a}=(0,o.J)(),n=c&&c.length>0?c["0"]:"",l=a?.name??n??"current",h=`
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
	`,g=r.useRef(null);return r.useEffect(()=>{let e=g.current,t=e?.contentWindow,i=e?.contentDocument;if(null===e||!t||!i)return;let s=async()=>{try{let{module:e,createChart:i,createChartEx:s,createYieldCurveChart:r,createOptionsChart:a}=await d[l](t);Object.assign(t,e),t.createChart=i,t.createChartEx=s,t.createYieldCurveChart=r,t.createOptionsChart=a,"current"===l&&(t.LineSeries=e.LineSeries,t.AreaSeries=e.AreaSeries,t.CandlestickSeries=e.CandlestickSeries,t.BarSeries=e.BarSeries,t.HistogramSeries=e.HistogramSeries),t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)s();else{let t=()=>{s(),e.removeEventListener("load",t)};e.addEventListener("load",t)}},[h]),(0,s.jsx)("iframe",{ref:g,srcDoc:h,className:p.iframe,style:i},t)}var O=i("98159");let x=()=>`${Math.random().toString(36).slice(2,11)}`,m=Object.keys(O.l.DARK),u=e=>{let{chart:t,replaceThemeConstants:i,hideableCode:o,chartOnly:c,chartOnTop:h=!1,iframeStyle:d,replaceTabs:u=!0,codeUsage:C,...j}=e,{children:f}=e,{colorMode:L}=(0,l.I)(),_=function(){let[e,t]=(0,r.useState)("");return(0,r.useEffect)(()=>t(x()),[]),e}();if(i&&"string"==typeof f&&(f=function(e,t){let i=t?O.l.DARK:O.l.LIGHT,s=e;for(let e of m)s=s.replace(RegExp(e,"g"),`'${i[e]}'`);return s}(f,"dark"===L)),u&&"string"==typeof f&&(f=f.replace(/\t/g,"    ")),f=f.replace(RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||o){let e=!c&&(0,s.jsx)(a.Z,{...j,children:f}),i=t&&(0,s.jsx)(n.Z,{fallback:(0,s.jsx)("div",{className:p.iframe,children:"\xa0"}),children:()=>(0,s.jsx)(g,{script:f,iframeStyle:d})}),r=o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{id:_,type:"checkbox",className:"toggle-hidden-lines"}),(0,s.jsx)("label",{className:"toggle-label",htmlFor:_,children:"Show all code"})]});return h?(0,s.jsxs)(s.Fragment,{children:[i,C,r,e]}):(0,s.jsxs)(s.Fragment,{children:[C,r,e,i]})}return(0,s.jsx)(a.Z,{...j,children:f})}},98159:function(e,t,i){i.d(t,{l:function(){return s}});let s={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6646:function(e){e.exports=JSON.parse('["5.0","4.2","4.1","4.0","3.8"]')}}]);