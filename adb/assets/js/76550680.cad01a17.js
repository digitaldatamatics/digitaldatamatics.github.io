"use strict";(self.webpackChunkdoc_generator=self.webpackChunkdoc_generator||[]).push([[713],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8795:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),l=r(3366),i=(r(7294),r(3905)),o=["components"],a={sidebar_position:1},s="Logger",c={unversionedId:"src/utils/logger/readme",id:"src/utils/logger/readme",isDocsHomePage:!1,title:"Logger",description:"Server side logging library for node js (with typescript)",source:"@site/docs/src/utils/logger/readme.md",sourceDirName:"src/utils/logger",slug:"/src/utils/logger/readme",permalink:"/docs/src/utils/logger/readme",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/src/utils/common-utils/docs/usage"},next:{title:"Setup",permalink:"/docs/src/utils/logger/docs/setup"}},u=[{value:"Version",id:"version",children:[],level:2},{value:"Tested environment",id:"tested-environment",children:[],level:2},{value:"Quick start",id:"quick-start",children:[],level:2},{value:"Run tests",id:"run-tests",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2},{value:"Useful links",id:"useful-links",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logger"},"Logger"),(0,i.kt)("p",null,"Server side logging library for node js (with typescript)"),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LTS")," : 0.0.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Current")," : 0.0.0")),(0,i.kt)("h2",{id:"tested-environment"},"Tested environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NodeJs")," : v14 +")),(0,i.kt)("h2",{id:"quick-start"},"Quick start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/src/utils/logger/docs/setup"},"Setup"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/src/utils/logger/docs/usage"},"Usage")))),(0,i.kt)("h2",{id:"run-tests"},"Run tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.techjini.com/techjini-development/CodeAlley/backend-skeleton/node-ts-skeleton/blob/master/docs/jest.md"},"Jest setup"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have following env variables set for db logging unit testing")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MONGODB_IP\nMONGODB_PORT\nMONGODB_USER_NAME\nMONGODB_PASSWORD\n")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.techjini.com/techjini-development/CodeAlley/backend-skeleton/node-ts-skeleton/blob/master/docs/typescript.md"},"Typescript setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.techjini.com/techjini-development/CodeAlley/backend-skeleton/node-ts-skeleton/blob/master/docs/ts-eslint.md"},"Typescript eslint"))))}d.isMDXComponent=!0}}]);