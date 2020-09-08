(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(175)),o={id:"view",title:"View, Props, etc",sidebar_label:"View, Props, etc"},c={id:"version-1.x.x/view",title:"View, Props, etc",description:"Follow the original Animated library guides to learn how values can be connected to View attributes.",source:"@site/versioned_docs/version-1.x.x/view.md",permalink:"/react-native-reanimated/docs/view",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/view.md",version:"1.x.x",sidebar_label:"View, Props, etc",sidebar:"version-1.x.x/docs",previous:{title:"Event handling with reanimated nodes",permalink:"/react-native-reanimated/docs/event"},next:{title:"Animated.Code",permalink:"/react-native-reanimated/docs/code"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Follow the original ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," library guides to learn how values can be connected to View attributes.\nSimilarly with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," you need to use components prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.")," (remember to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"getting-started.md#installation"}),"import")," ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," from reanimated package). For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Animated from 'react-native-reanimated';\n\n// use\n<Animated.View/>\n// instead of\n<View/>\n")))}s.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);