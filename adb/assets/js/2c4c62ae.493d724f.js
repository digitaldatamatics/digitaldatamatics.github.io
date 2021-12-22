"use strict";(self.webpackChunkdoc_generator=self.webpackChunkdoc_generator||[]).push([[4285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={sidebar_position:8},i="Deno",c={unversionedId:"docs/deno",id:"docs/deno",isDocsHomePage:!1,title:"Deno",description:"- Need for cli to add skeleton components",source:"@site/docs/docs/deno.md",sourceDirName:"docs",slug:"/docs/deno",permalink:"/docs/docs/deno",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Package Scripts",permalink:"/docs/docs/package-scripts"},next:{title:"Schema to TS",permalink:"/docs/docs/schema-to-ts"}},u=[{value:"Install (style 1)",id:"install-style-1",children:[{value:"Env variable",id:"env-variable",children:[],level:3}],level:2},{value:"Install (style 2)",id:"install-style-2",children:[],level:2},{value:"Test",id:"test",children:[],level:2},{value:"Vscode setup",id:"vscode-setup",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deno"},"Deno"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Need for cli to add skeleton components")),(0,a.kt)("h2",{id:"install-style-1"},"Install (style 1)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/manual@v1.16.2/getting_started/installation"},"ref")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n")),(0,a.kt)("h3",{id:"env-variable"},"Env variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano  ~/.profile\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add below content in it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export DENO_INSTALL="/home/datamatics/.deno"\nexport PATH="$DENO_INSTALL/bin:$PATH"\n')),(0,a.kt)("h2",{id:"install-style-2"},"Install (style 2)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo snap install deno\n")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deno --version\n\ndeno run https://deno.land/std/examples/welcome.ts\n")),(0,a.kt)("h2",{id:"vscode-setup"},"Vscode setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Also install Deno extension")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'//.vscode/settings.json\n{\n    "deno.enable": true,\n    "deno.lint": true\n}\n')))}d.isMDXComponent=!0}}]);