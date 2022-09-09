(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(0),n(143)),i=["components"],c={id:"day27_questions",title:"Day 27 Recap Questions","reference solutions":"1. When the relative functionality is part of the object 2. A public field/member can be accessed freely by any code with access to the class definition. A private field/member can only be accessed from other member functions in the class. 3. private 4. Cannot define member functions in a C struct. However, a C++ struct is like a C++ class but all members are default public, so it can have member functions. 5. A member function that C++ calls when you declare a new variable 6. Objects can be initialized, instead of having the default constructor called first and then having the value reset."},s={unversionedId:"questions/day27_questions",id:"questions/day27_questions",isDocsHomePage:!1,title:"Day 27 Recap Questions",description:"1. What is object-oriented programming?",source:"@site/docs\\questions\\day27_questions.md",slug:"/questions/day27_questions",permalink:"/cs220-f22/docs/questions/day27_questions",version:"current"},u=[],l={rightToc:u};function f(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What is object-oriented programming?"),Object(o.b)("li",{parentName:"ol"},"What is the difference between a public and a private field/member function?"),Object(o.b)("li",{parentName:"ol"},"Do class fields and member functions default to public or private?"),Object(o.b)("li",{parentName:"ol"},"Can we define member functions in a struct in C? How does C++ handle structs? Can we do that in C++?"),Object(o.b)("li",{parentName:"ol"},"What is a default constructor?"),Object(o.b)("li",{parentName:"ol"},"Why is using an initializer list in a class constructor a better choice than not using one?")))}f.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),b=r,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);