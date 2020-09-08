(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(175)),o={id:"clock",title:"Clock",sidebar_label:"Clock"},c={id:"version-1.x.x/clock",title:"Clock",description:'Original Animated API makes an "animation" object a first class citizen.',source:"@site/versioned_docs/version-1.x.x/clock.md",permalink:"/react-native-reanimated/docs/clock",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/clock.md",version:"1.x.x",sidebar_label:"Clock",sidebar:"version-1.x.x/docs",previous:{title:"Value",permalink:"/react-native-reanimated/docs/value"},next:{title:"Timing",permalink:"/react-native-reanimated/docs/animations/timing"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Original ",Object(i.b)("inlineCode",{parentName:"p"},"Animated"),' API makes an "animation" object a first class citizen.\n',Object(i.b)("inlineCode",{parentName:"p"},"Animation")," object has many features and therefore requires quite a few JS<->Native bridge methods to be managed properly.\nIn ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated"),", clocks aim to replace that by providing more of a low level abstraction but also since clock nodes behave much like the animated values they make the implementation much less complex."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Animated.Clock")," node is a special type of ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.Value")," that can be updated in each frame to the timestamp of the current frame. When we take ",Object(i.b)("inlineCode",{parentName:"p"},"Clock")," node as an input, the value it returns is the current frame timestamp in milliseconds. Using special methods, clock nodes can be stopped and started and we can also test if clock has been started."),Object(i.b)("p",null,"Because ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.Clock")," just extends the ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.Value")," you can use it in the same places (operations) where you can pass any type of animated node."))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);