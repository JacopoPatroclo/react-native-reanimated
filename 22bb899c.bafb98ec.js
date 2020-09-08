(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{175:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(175)),i={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},c={id:"api/nativeMethods/scrollTo",title:"scrollTo",description:"Due to time constraints we weren't able to finish this page.",source:"@site/docs/api/nativeMethods/scrollTo.md",permalink:"/react-native-reanimated/docs/next/api/nativeMethods/scrollTo",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/nativeMethods/scrollTo.md",version:"next",sidebar_label:"scrollTo",sidebar:"docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/next/api/nativeMethods/measure"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Due to time constraints we weren't able to finish this page.")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"animatedref"},Object(a.b)("inlineCode",{parentName:"h4"},"animatedRef")),Object(a.b)("h3",{id:"returns"},"Returns"),Object(a.b)("p",null,"void"),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Comp = () => {\n  const aref = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * 100, true);\n  });\n\n  const items = Array.from(Array(10).keys());\n\n  return (\n    <View>\n      <Button\n        title=\"scroll down\"\n        onPress={() => {\n          scroll.value = scroll.value + 1;\n          if (scroll.value >= 10) scroll.value = 0;\n        }}\n      />\n      <View style={{ width: 120, height: 200, backgroundColor: 'green' }}>\n        <ScrollView\n          ref={aref}\n          style={{ backgroundColor: 'orange', width: 120 }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                width: 100,\n                height: 100,\n                margin: 10,\n              }}\n            />\n          ))}\n        </ScrollView>\n      </View>\n    </View>\n  );\n};\n")))}u.isMDXComponent=!0}}]);