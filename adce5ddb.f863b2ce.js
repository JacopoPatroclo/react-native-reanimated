(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(175)),o={id:"timing",title:"Timing",sidebar_label:"Timing"},c={id:"version-1.x.x/animations/timing",title:"Timing",description:"`js",source:"@site/versioned_docs/version-1.x.x/animations/timing.md",permalink:"/react-native-reanimated/docs/animations/timing",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/animations/timing.md",version:"1.x.x",sidebar_label:"Timing",sidebar:"version-1.x.x/docs",previous:{title:"Clock",permalink:"/react-native-reanimated/docs/clock"},next:{title:"Decay",permalink:"/react-native-reanimated/docs/animations/decay"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"timing(\n  clock,\n  { finished, position, frameTime, time },\n  { toValue, duration, easing }\n);\n")),Object(a.b)("p",null,"Updates ",Object(a.b)("inlineCode",{parentName:"p"},"position")," node by running timing based animation from a given position to a destination determined by ",Object(a.b)("inlineCode",{parentName:"p"},"toValue"),". The animation is expected to last ",Object(a.b)("inlineCode",{parentName:"p"},"duration")," milliseconds and use ",Object(a.b)("inlineCode",{parentName:"p"},"easing")," function that could be set to one of the nodes exported by the ",Object(a.b)("inlineCode",{parentName:"p"},"Easing")," object.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"frameTime")," node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far), similar to the ",Object(a.b)("inlineCode",{parentName:"p"},"time")," node that just indicates the last clock time the animation node has been evaluated. Both of these variables are expected to be reset before restarting the animation. Finally ",Object(a.b)("inlineCode",{parentName:"p"},"finished")," node will be set to ",Object(a.b)("inlineCode",{parentName:"p"},"1")," when the position reaches the final value or when ",Object(a.b)("inlineCode",{parentName:"p"},"frameTime")," exceeds ",Object(a.b)("inlineCode",{parentName:"p"},"duration"),"."))}p.isMDXComponent=!0},175:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||a;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);