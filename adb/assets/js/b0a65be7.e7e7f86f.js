"use strict";(self.webpackChunkdoc_generator=self.webpackChunkdoc_generator||[]).push([[2940],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},i="Jest",l={unversionedId:"docs/jest",id:"docs/jest",isDocsHomePage:!1,title:"Jest",description:"Install",source:"@site/docs/docs/jest.md",sourceDirName:"docs",slug:"/docs/jest",permalink:"/adb/docs/docs/jest",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Typescript ESLint",permalink:"/adb/docs/docs/ts-eslint"},next:{title:"VSCODE",permalink:"/adb/docs/docs/vscode"}},u=[{value:"Install",id:"install",children:[],level:2},{value:"jest.config.ts",id:"jestconfigts",children:[],level:2},{value:"scripts",id:"scripts",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"jest"},"Jest"),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D jest ts-jest @types/jest\n")),(0,s.kt)("h2",{id:"jestconfigts"},"jest.config.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"jest --init\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In auto generated file, make following changes")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export default {\n    globals: {\n        "ts-jest": {\n        tsconfigFile: "tsconfig.json"\n        }\n    },\n    moduleFileExtensions: [\n        "ts",\n        "js"\n    ],\n    transform: {\n        "^.+\\\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"\n    },\n    testMatch: [\n        "**/test/**/*.test.(ts|js)"\n    ],\n    testEnvironment: "node",\n\n   //jest init defaults\n    clearMocks: true,\n    coverageDirectory: "coverage",\n    coverageProvider: "v8",\n\n};\n\n')),(0,s.kt)("h2",{id:"scripts"},"scripts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "test": "jest --forceExit --coverage --verbose"\n}\n')))}d.isMDXComponent=!0}}]);