(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(140)),o=["components"],s={id:"day16_questions",title:"Day 16 Recap Questions","reference solutions":"1. HEAD -> [Node 1 | next-]-> [Node 2 | next-]-> ... [Node n | next-]-> NULL 2. Array is linear in memory, so it is faster in access by indexing, but it has a fixed size and inserting new element is expensive. Linked list has a dynamic size and we can insert new element more efficiently, but it requires more memory spaces and is slower in access (by traversing the whole list). 3. HEAD is a just pointer to the first node or NULL if it is an empty list, while a node contains the data and a pointer to the next node or NULL if it is a tail. 4. We traverse the list starting from the HEAD pointer, advance using the next pointer until it reaches the end (i.e. NULL). Increase the length by 1 for each advancement. 5. First, we allocate a new node for the new data and set its next pointer to be the same as the current node's next pointer, where current node is the node that we want to insert data after it. Last, we update the current node's next pointer to point to this new node."},c={unversionedId:"questions/day16_questions",id:"questions/day16_questions",isDocsHomePage:!1,title:"Day 16 Recap Questions",description:"1. Describe the linked list structure by a diagram.",source:"@site/docs\\questions\\day16_questions.md",slug:"/questions/day16_questions",permalink:"/cs220-f22/docs/questions/day16_questions",version:"current"},l=[],u={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Describe the linked list structure by a diagram."),Object(a.b)("li",{parentName:"ol"},"Compare arrays and linked lists. Write down their pros and cons."),Object(a.b)("li",{parentName:"ol"},"What is a linked list's head? How is it different from a node? Explain. "),Object(a.b)("li",{parentName:"ol"},"How do you calculate ",Object(a.b)("inlineCode",{parentName:"li"},"length")," of a linked list?"),Object(a.b)("li",{parentName:"ol"},"How do you implement ",Object(a.b)("inlineCode",{parentName:"li"},"add_after")," of a linked list?")))}d.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);