(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(149));const i={id:"ex4-2",title:"Exercise 4-2"},o={unversionedId:"exercises/ex4-2",id:"exercises/ex4-2",isDocsHomePage:!1,title:"Exercise 4-2",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today.",source:"@site/docs\\exercises\\ex4-2.md",slug:"/exercises/ex4-2",permalink:"/cs220-f22/docs/exercises/ex4-2",version:"current"},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],s={rightToc:c};function l(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Reinforces concepts learned in today's lesson:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Dynamic memory allocation."),Object(r.b)("li",{parentName:"ul"},"Use valgrind to analyze the memory usage of existing code and identify and remove errors in the code.")))),Object(r.b)("h3",{id:"part-1"},"Part 1"),Object(r.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Type ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing\n",Object(r.b)("inlineCode",{parentName:"p"},"ls exercises/ex4-2")," -- you should see files named ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," and ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," inside."))),Object(r.b)("h3",{id:"part-2"},"Part 2"),Object(r.b)("p",null,"Grab copies of ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," and ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," from the public class repository (in the ",Object(r.b)("em",{parentName:"p"},"/exercises/ex4-2/")," directory) and put them in your personal repo.  To do so:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cd ~/cs220")," to move to your working copy of your personal repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cd exercises")," to change to your personal ",Object(r.b)("em",{parentName:"p"},"exercises")," directory.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make a new directory for today\u2019s exercise by typing ",Object(r.b)("inlineCode",{parentName:"p"},"mkdir ex4-2"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change to the new directory with ",Object(r.b)("inlineCode",{parentName:"p"},"cd ex4-2"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the source file to the current directory using: ",Object(r.b)("inlineCode",{parentName:"p"},"cp ~/cs220-sp21-public/exercises/ex4-2/* ."),"."))),Object(r.b)("h3",{id:"part-3"},"Part 3"),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," with a text editor. To compile the code, use this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra pairwise_sum.c -o pairwise_sum  -g\n")),Object(r.b)("p",null,"Note the use of ",Object(r.b)("inlineCode",{parentName:"p"},"-g"),", which enables debugging.  To run the program using valgrind:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"valgrind  --leak-check=full  ./pairwise_sum\n")),Object(r.b)("p",null,"Read the valgrind output and try to determine what is causing the errors that are reported. Modify ",Object(r.b)("inlineCode",{parentName:"p"},"pairwise_sum.c")," so that it still performs the desired task (described in comments at the top) but without any memory leaks or invalid reads or writes."),Object(r.b)("h3",{id:"part-4"},"Part 4"),Object(r.b)("p",null,"Do the same thing you did in Part 3, but for ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c"),".  Since ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," requires the math library, you will have to add the ",Object(r.b)("inlineCode",{parentName:"p"},"-lm")," flag for the compile command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra primes.c -o primes -lm -g\n")),Object(r.b)("p",null,"The valgrind command is essentially the same:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"valgrind  --leak-check=full  ./primes\n")),Object(r.b)("p",null,"Read the valgrind output and try to determine what is causing the errors that are reported. Modify ",Object(r.b)("inlineCode",{parentName:"p"},"primes.c")," so that it still performs the desired task (described in comments at the top) but without any memory leaks or invalid reads or writes."))}l.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);