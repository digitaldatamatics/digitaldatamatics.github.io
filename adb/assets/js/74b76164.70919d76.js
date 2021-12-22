"use strict";(self.webpackChunkdoc_generator=self.webpackChunkdoc_generator||[]).push([[1901],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1061:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},i="Docs Setup",u={unversionedId:"docs/docusaurus",id:"docs/docusaurus",isDocsHomePage:!1,title:"Docs Setup",description:"Set up",source:"@site/docs/docs/docusaurus.md",sourceDirName:"docs",slug:"/docs/docusaurus",permalink:"/docs/docs/docusaurus",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"VSCODE",permalink:"/docs/docs/vscode"},next:{title:"Package Scripts",permalink:"/docs/docs/package-scripts"}},p=[{value:"Set up",id:"set-up",children:[],level:2},{value:"package script",id:"package-script",children:[{value:"commands",id:"commands",children:[],level:3}],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"docs-setup"},"Docs Setup"),(0,c.kt)("h2",{id:"set-up"},"Set up"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation"},"ref"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-docusaurus@latest doc-generator classic\n\nnpm install --save-dev cpy-cli\n")),(0,c.kt)("h2",{id:"package-script"},"package script"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts":{\n      "copy-docs": "cpy \'readme.md\' \'src/**/*.{md,json}\' \'docs/**/*.{md,json}\' \'doc-generator/docs\' --parents",\n      "docs-init":"cd doc-generator && npm install",\n      "docs":"npm run copy-docs && cd doc-generator && npm start"\n  }\n\n}\n')),(0,c.kt)("h3",{id:"commands"},"commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"# one time init docs to install dependencies\nnpm run docs-init\n\n# run docs locally\nnpm run docs\n")))}d.isMDXComponent=!0}}]);