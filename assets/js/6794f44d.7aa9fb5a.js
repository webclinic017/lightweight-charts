"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80159"],{76914:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"time-zones","title":"Working with time zones","description":"This doc describes what do you need to do if you want to add time zone support to your chart.","source":"@site/versioned_docs/version-4.0/time-zones.md","sourceDirName":".","slug":"/time-zones","permalink":"/lightweight-charts/docs/4.0/time-zones","draft":false,"unlisted":false,"tags":[],"version":"4.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Time scale","permalink":"/lightweight-charts/docs/4.0/time-scale"},"next":{"title":"From v2 to v3","permalink":"/lightweight-charts/docs/4.0/migrations/from-v2-to-v3"}}'),i=o("85893"),s=o("50065");let r={sidebar_position:4},a="Working with time zones",d={},l=[{value:"Background",id:"background",level:2},{value:"How to add time zone support to your chart",id:"how-to-add-time-zone-support-to-your-chart",level:2},{value:"<code>Date</code> solution",id:"date-solution",level:3},{value:"Note about converting to a &quot;local&quot; time zone",id:"note-about-converting-to-a-local-time-zone",level:4},{value:"<code>date-fns-tz</code> solution",id:"date-fns-tz-solution",level:3},{value:"<code>tzdata</code> solution",id:"tzdata-solution",level:3},{value:"Why we didn&#39;t implement it in the library",id:"why-we-didnt-implement-it-in-the-library",level:2},{value:"Note about converting business days",id:"note-about-converting-business-days",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"working-with-time-zones",children:"Working with time zones"})}),"\n",(0,i.jsx)(t.p,{children:"This doc describes what do you need to do if you want to add time zone support to your chart."}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(t.p,{children:["By default, ",(0,i.jsx)(t.code,{children:"lightweight-charts"})," doesn't support time zones of any kind, just because JavaScript doesn't have an API to do that.\nThings that the library uses internally includes an API to:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Format a date"}),"\n",(0,i.jsx)(t.li,{children:"Get a date and/or time parts of a date object (year, month, day, hours, etc)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Out of the box we could rely on 2 APIs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",children:"Date"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"Intl"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["And even if to format a date we could (and we do) use ",(0,i.jsx)(t.code,{children:"Date"})," object with its ",(0,i.jsx)(t.code,{children:"toLocaleString"})," method (and we could even pass a ",(0,i.jsx)(t.code,{children:"timeZone"})," field as an option),\nbut how about date/time field?"]}),"\n",(0,i.jsxs)(t.p,{children:["All to solve this it seems that the only solution we have is ",(0,i.jsx)(t.code,{children:"Date"}),"'s getters, e.g. ",(0,i.jsx)(t.code,{children:"getHours"}),". Here we could use 2 APIs:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["UTC-based methods like ",(0,i.jsx)(t.code,{children:"getUTCHours"})," to get the date/time in UTC"]}),"\n",(0,i.jsxs)(t.li,{children:["Client-based methods like ",(0,i.jsx)(t.code,{children:"getHours"})," to get the date/time in ",(0,i.jsx)(t.em,{children:"a local (for the client)"})," time zone"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["As you can see we just unable to get date/time parts in desired time zone without using custom libraries (like ",(0,i.jsx)(t.code,{children:"date-fns"}),") out of the box."]}),"\n",(0,i.jsx)(t.p,{children:"Because of this we decided not to handle time zones in the library. The library treats all dates and times as UTC internally."}),"\n",(0,i.jsx)(t.p,{children:"But don't worry - it's easy to add time-zone support in your own code!"}),"\n",(0,i.jsx)(t.h2,{id:"how-to-add-time-zone-support-to-your-chart",children:"How to add time zone support to your chart"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TL;DR"}),' - time for every bar should be "corrected" by a time zone offset.']}),"\n",(0,i.jsx)(t.p,{children:"The only way to do this is to change a time in your data."}),"\n",(0,i.jsx)(t.p,{children:"As soon as the library relies on UTC-based methods, you could change a time of your data item so in UTC it could be as it is in desired time zone."}),"\n",(0,i.jsx)(t.p,{children:"Let's consider an example."}),"\n",(0,i.jsxs)(t.p,{children:["Lets say you have a bar with time ",(0,i.jsx)(t.code,{children:"2021-01-01T10:00:00.000Z"})," (a string representation is just for better readability).\nAnd you want to display your chart in ",(0,i.jsx)(t.code,{children:"Europe/Moscow"})," time zone."]}),"\n",(0,i.jsxs)(t.p,{children:["According to tz database, for ",(0,i.jsx)(t.code,{children:"Europe/Moscow"})," time zone a time offset at this time is ",(0,i.jsx)(t.code,{children:"UTC+03:00"}),", i.e. +3 hours (pay attention that you cannot use the same offset all the time, because of DST and many other things!)."]}),"\n",(0,i.jsxs)(t.p,{children:["By this means, the time for ",(0,i.jsx)(t.code,{children:"Europe/Moscow"})," is ",(0,i.jsx)(t.code,{children:"2021-01-01 13:00:00.000"})," (so basically you want to display this time over the UTC one)."]}),"\n",(0,i.jsxs)(t.p,{children:["To display your chart in the ",(0,i.jsx)(t.code,{children:"Europe/Moscow"})," time zone you would need to adjust the time of your data by +3 hours. So ",(0,i.jsx)(t.code,{children:"2021-01-01T10:00:00.000Z"})," would become ",(0,i.jsx)(t.code,{children:"2021-01-01T13:00:00.000Z"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Note that due a time zone offset the date could be changed as well (not only time part)."}),"\n",(0,i.jsx)(t.p,{children:"This looks tricky, but hopefully you need to implement it once and then just forget this ever happened \uD83D\uDE00"}),"\n",(0,i.jsxs)(t.h3,{id:"date-solution",children:[(0,i.jsx)(t.code,{children:"Date"})," solution"]}),"\n",(0,i.jsxs)(t.p,{children:["One of possible solutions (and looks like the most simplest one) is to use approach from ",(0,i.jsx)(t.a,{href:"https://stackoverflow.com/a/54127122/3893439",children:"this answer on StackOverflow"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// you could use this function to convert all your times to required time zone\nfunction timeToTz(originalTime, timeZone) {\n    const zonedDate = new Date(new Date(originalTime * 1000).toLocaleString('en-US', { timeZone }));\n    return zonedDate.getTime() / 1000;\n}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"note-about-converting-to-a-local-time-zone",children:'Note about converting to a "local" time zone'}),"\n",(0,i.jsx)(t.p,{children:"If you don't need to work with time zones in general, but only needs to support a client time zone (i.e. local), you could use the following trick:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"function timeToLocal(originalTime) {\n    const d = new Date(originalTime * 1000);\n    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;\n}\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"date-fns-tz-solution",children:[(0,i.jsx)(t.code,{children:"date-fns-tz"})," solution"]}),"\n",(0,i.jsxs)(t.p,{children:["You could also achieve the result by using ",(0,i.jsx)(t.a,{href:"https://github.com/marnusw/date-fns-tz",children:(0,i.jsx)(t.code,{children:"date-fns-tz"})})," library in the following way:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { utcToZonedTime } from 'date-fns-tz';\n\nfunction timeToTz(originalTime, timeZone) {\n    const zonedDate = utcToZonedTime(new Date(originalTime * 1000), timeZone);\n    return zonedDate.getTime() / 1000;\n}\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"tzdata-solution",children:[(0,i.jsx)(t.code,{children:"tzdata"})," solution"]}),"\n",(0,i.jsxs)(t.p,{children:["If you have lots of data items and the performance of other solutions doesn't fit your requirements you could try to implement more complex solution by using raw ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/tzdata",children:(0,i.jsx)(t.code,{children:"tzdata"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The better performance could be achieved with this approach because:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["you don't need to parse dates every time you want to get an offset so you could use ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Upper_and_lower_bounds",children:"lowerbound algorithm"})," (which is ",(0,i.jsx)(t.code,{children:"O(log N)"}),") to find an offset of very first data point quickly"]}),"\n",(0,i.jsx)(t.li,{children:"after you found an offset, you go through all data items and check whether an offset should be changed or not to the next one (based on a time of the next time shift)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"why-we-didnt-implement-it-in-the-library",children:"Why we didn't implement it in the library"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Date"})," solution is quite slow (in our tests it took more than 20 seconds for 100k points)"]}),"\n",(0,i.jsxs)(t.li,{children:["Albeit ",(0,i.jsx)(t.code,{children:"date-fns-tz"})," solution is a bit faster that the solution with ",(0,i.jsx)(t.code,{children:"Date"})," but it is still very slow (~17-18 seconds for 100k points) and additionally it requires to add another set of dependencies to the package"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tzdata"})," solution requires to increase the size of the library by ",(0,i.jsx)(t.a,{href:"https://bundlephobia.com/package/tzdata",children:"more than 31kB min.gz"})," (which is almost the size of the whole library!)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Keep in mind that time zones feature is not an issue for everybody so this is up to you to decide whether you want/need to support it or not and so far we don't want to sacrifice performance/package size for everybody by this feature."}),"\n",(0,i.jsx)(t.h2,{id:"note-about-converting-business-days",children:"Note about converting business days"}),"\n",(0,i.jsxs)(t.p,{children:["If you're using a business day for your time (either ",(0,i.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/BusinessDay",children:"object"})," or ",(0,i.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/type-aliases/Time",children:"string"})," representation), for example because of DWM nature of your data,\nmost likely you ",(0,i.jsx)(t.strong,{children:"shouldn't"})," convert that time to a zoned one, because this time represents a day."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return r}});var n=o(67294);let i={},s=n.createContext(i);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);