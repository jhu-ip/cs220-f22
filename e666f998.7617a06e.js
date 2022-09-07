(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),r=(n(0),n(142)),o=["components"],c={id:"ex5-2",title:"Exercise 5-2"},s={unversionedId:"exercises/ex5-2",id:"exercises/ex5-2",isDocsHomePage:!1,title:"Exercise 5-2",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours.",source:"@site/docs\\exercises\\ex5-2.md",slug:"/exercises/ex5-2",permalink:"/cs220-f22/docs/exercises/ex5-2",version:"current"},p=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting and earlier:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"arrays & strings"),Object(r.b)("li",{parentName:"ul"},"function writing"),Object(r.b)("li",{parentName:"ul"},"bit operations (AND, OR, XOR, SHIFT)")))),Object(r.b)("h3",{id:"part-1"},"Part 1"),Object(r.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Type ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(r.b)("inlineCode",{parentName:"p"},"ls exercises/ex5-2")," -- you should see the file ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c")," from the public class repository (in the ",Object(r.b)("inlineCode",{parentName:"p"},"/exercises/ex5-2/")," directory) to your personal repo in a new directory named ",Object(r.b)("inlineCode",{parentName:"p"},"ex5-2")," under ",Object(r.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),". "))),Object(r.b)("h3",{id:"part-2"},"Part 2"),Object(r.b)("p",null,"The c file that you just copied to your ",Object(r.b)("inlineCode",{parentName:"p"},"~/cs220/ex5-2")," directory is named ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c"),".  The file contains some comments on each step you need to complete. Here is a description of what you need to complete:"),Object(r.b)("p",null,"Sam and Chloe are friends. They want to encrypt their conversation messages so that they can keep their communications confidential. Your job is to help them implement the encryption mechanism they have in mind: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Every message is represented in binary; that is each and every message only includes 0s and 1s and is no longer than 32 bits long. Then it is written down ",Object(r.b)("inlineCode",{parentName:"li"},"n")," times, shifted to the left by ",Object(r.b)("inlineCode",{parentName:"li"},"1, 2, ..., n\u20101")," bits for each copy. Finally, the columns are XORed together to produce the final encrypted message.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),": Let us say the plain message is 1001011 and n = 4. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      1 0 0 1 0 1 1    shift 0 (plain message)\n    1 0 0 1 0 1 1 0    shift 1\n  1 0 0 1 0 1 1 0 0    shift 2\n1 0 0 1 0 1 1 0 0 0    shift 3 \n------------------------------\n1 1 1 0 1 0 1 0 0 1 \u2190 final encoded message (XORed) \n")),Object(r.b)("p",null,"Write a C program to perform this encryption. If the entered message contains anything other than 0s/1s and/or n<=0, your program should print a sensible message and exit with code 1."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("inlineCode",{parentName:"p"},"encrypt.c")," for editing using ",Object(r.b)("inlineCode",{parentName:"p"},"emacs")," or ",Object(r.b)("inlineCode",{parentName:"p"},"vim"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Read the source code and the comments.  Your instructions are in the comments.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Modify the source files and test by:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"* Compiling with `gcc -Wall -Wextra -std=c99 -pedantic encrypt.c -o encrypt` \n")),Object(r.b)("p",{parentName:"li"},"or using your alias: ",Object(r.b)("inlineCode",{parentName:"p"},"gccc encrypt.c -o encrypt"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"* Execute **./encrypt** and test your code.\n")))))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=i,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);