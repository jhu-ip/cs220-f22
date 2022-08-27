(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(146));const i={id:"ex11-2",title:"Exercise 11-2"},o={unversionedId:"exercises/ex11-2",id:"exercises/ex11-2",isDocsHomePage:!1,title:"Exercise 11-2",description:"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work.",source:"@site/docs\\exercises\\ex11-2.md",slug:"/exercises/ex11-2",permalink:"/cs220-f22/docs/exercises/ex11-2",version:"current"},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]},{value:"Part 5",id:"part-5",children:[]}],l={rightToc:c};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work."))),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting:"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"writing template classes")))),Object(a.b)("h3",{id:"part-1"},"Part 1"),Object(a.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(a.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(a.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Type ",Object(a.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(a.b)("inlineCode",{parentName:"p"},"ls exercises/ex11-2")," -- you should see files named ",Object(a.b)("inlineCode",{parentName:"p"},"Makefile"),", ",Object(a.b)("inlineCode",{parentName:"p"},"README"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"main1.cpp")," inside. We will also make directory ",Object(a.b)("inlineCode",{parentName:"p"},"ex11-1-sol")," available the morning of this exercise.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy the above files from the public class repository (in the ",Object(a.b)("inlineCode",{parentName:"p"},"/exercises/ex11-2/")," directory) to your personal repo in a new directory named ",Object(a.b)("inlineCode",{parentName:"p"},"ex11-2")," under ",Object(a.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),"."))),Object(a.b)("h3",{id:"part-2"},"Part 2"),Object(a.b)("p",null,"Read ",Object(a.b)("inlineCode",{parentName:"p"},"main1.cpp"),".  It shows an example of how to use a new template class named ",Object(a.b)("inlineCode",{parentName:"p"},"my_set"),". Before you can compile and run the code using commands ",Object(a.b)("inlineCode",{parentName:"p"},"make")," and   ",Object(a.b)("inlineCode",{parentName:"p"},"./main1"),", you will need to transform your completed files ",Object(a.b)("inlineCode",{parentName:"p"},"int_node.h"),", ",Object(a.b)("inlineCode",{parentName:"p"},"int_set.h")," and ",Object(a.b)("inlineCode",{parentName:"p"},"int_set.cpp")," from Exercise 11-1. ",Object(a.b)("mark",null,"(If you didn't complete Exercise 11-1 yet, use the files provided in the ",Object(a.b)("inlineCode",{parentName:"p"},"ex11-1-sol")," folder as a starting point for this exercise.)")),Object(a.b)("p",null,"If using your own solution files Exercise 11-1, copy them over to your Exercise 11-2 folder. This will serve as the remainder of your starter code for Exercise 11-2."),Object(a.b)("h3",{id:"part-3"},"Part 3"),Object(a.b)("p",null,"Next, follow the instructional comments in ",Object(a.b)("inlineCode",{parentName:"p"},"README"),"."),Object(a.b)("h3",{id:"part-4"},"Part 4"),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"valgrind")," on ",Object(a.b)("inlineCode",{parentName:"p"},"main1.cpp"),". Fix any memory leaks that it finds."),Object(a.b)("h3",{id:"part-5"},"Part 5"),Object(a.b)("p",null,"Add additional testing code in ",Object(a.b)("inlineCode",{parentName:"p"},"main1.cpp")," to more fully test your code, then re-run ",Object(a.b)("inlineCode",{parentName:"p"},"valgrind"),"."))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);