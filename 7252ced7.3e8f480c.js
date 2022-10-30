(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(163)),o=["components"],c={id:"ex28",title:"Exercise 28"},s={unversionedId:"exercises/ex28",id:"exercises/ex28",isDocsHomePage:!1,title:"Exercise 28",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by",source:"@site/docs\\exercises\\ex28.md",slug:"/exercises/ex28",permalink:"/cs220-f22/docs/exercises/ex28",version:"current"},p=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],l={rightToc:p};function d(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by\ndiscussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"C++ classes, fields & member functions"),Object(r.b)("li",{parentName:"ul"},"Access modifiers (public & private)"),Object(r.b)("li",{parentName:"ul"},"Dynamic memory allocation in C++"),Object(r.b)("li",{parentName:"ul"},"Alternate constructors"),Object(r.b)("li",{parentName:"ul"},"Destructors")))),Object(r.b)("p",null,"Today\u2019s exercise is a variation of what we did in the last exercise. Rather than having a vector inside the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class, we will have a dynamically allocated array that gets resized, as necessary. You will also create an alternate constructor (with default parameters) and (later) a destructor."),Object(r.b)("h3",{id:"part-1"},"Part 1"),Object(r.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into ugrad, then navigate to the public repo and type ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the starter code for today from the public repo ",Object(r.b)("inlineCode",{parentName:"p"},"exercises/ex28")," into your personal repo where desired. Then navigate to your personal repo folder for this exercise. You should see files named ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile"),", ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.[h/cpp]"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"main[1/2].cpp")," inside."))),Object(r.b)("h3",{id:"part-2"},"Part 2"),Object(r.b)("p",null,"Read the instructional comments in ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.h")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.cpp"),". Read ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp"),".  It shows an example of how to use the given code for the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class.\nTry to compile ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp"),".  It doesn\u2019t work because several things are missing from the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class, including definitions of the constructor, the ",Object(r.b)("inlineCode",{parentName:"p"},"add")," functions, and the ",Object(r.b)("inlineCode",{parentName:"p"},"clear")," function. Follow the instructions in the comments in ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.h")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.cpp")," to write these missing functions for which we have provided headers within the ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.h")," file.  You should not change anything in the ",Object(r.b)("inlineCode",{parentName:"p"},"grade_list.h")," file. Try to not reinvent the wheel when writing the add functions."),Object(r.b)("p",null,"You can compile and run the code using commands ",Object(r.b)("inlineCode",{parentName:"p"},"make main1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"./main1"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The capacity of the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," object should never be less than one. You should check for this when implementing the constructor."))),Object(r.b)("p",null,"When calling the constructor, the input parameter specifies the target ",Object(r.b)("inlineCode",{parentName:"p"},"capacity")," not the number of elements stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," object.\n:::"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When implementing the ",Object(r.b)("inlineCode",{parentName:"p"},"clear")," member function you should end up with a ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," object with zero elements but with a capacity of one."))),Object(r.b)("h3",{id:"part-3"},"Part 3"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind")," on ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp"),". Add a destructor to the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class in order to prevent the memory leak. This should free the memory for the array.  If that does not take care of everything, consider whether you wrote the clear function properly and if the add function is leaking memory when you resize."),Object(r.b)("h3",{id:"part-4"},"Part 4"),Object(r.b)("p",null,"Try to compile ",Object(r.b)("inlineCode",{parentName:"p"},"main2.cpp"),".  It doesn\u2019t work because several things are missing from the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class, including methods ",Object(r.b)("inlineCode",{parentName:"p"},"begin()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"end()")," that mimic the behaviour of an iterator using actual pointers, as well as a default constructor. Add the missing pieces to the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class (in ",Object(r.b)("inlineCode",{parentName:"p"},".h")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},".cpp")," files).  When you modify the ",Object(r.b)("inlineCode",{parentName:"p"},"GradeList")," class do not change the access modifier (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"private"),") of any of the members. Check to make sure this program does not have any memory leaks either, using ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind")," again."),Object(r.b)("p",null,"You can compile and run the code using commands ",Object(r.b)("inlineCode",{parentName:"p"},"make main2")," and ",Object(r.b)("inlineCode",{parentName:"p"},"./main2"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Remember to add and commit to your local repo copy as your work. Push to your remote repo when finished. ","[No need to submit to Gradescope to check your solution.]"," Use ",Object(r.b)("inlineCode",{parentName:"p"},"exit")," to logout from your ugrad account when finished. If you continue to work on the program after class, make sure to keep your repo updated as well!"))))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);