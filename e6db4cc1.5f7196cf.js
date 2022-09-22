(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),i=(n(0),n(150)),r=["components"],c={id:"ex10",title:"Exercise 10"},s={unversionedId:"exercises/ex10",id:"exercises/ex10",isDocsHomePage:!1,title:"Exercise 10",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and submit on Gradescope to check your solution. You are encouraged to work at home to complete what you do not get through today, and ask questions on Piazza or in office hours.",source:"@site/docs\\exercises\\ex10.md",slug:"/exercises/ex10",permalink:"/cs220-f22/docs/exercises/ex10",version:"current"},l=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and submit on Gradescope to check your solution. You are encouraged to work at home to complete what you do not get through today, and ask questions on Piazza or in office hours."))),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Reinforces concepts learned in today's meeting:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Declare and initialize pointer variables"),Object(i.b)("li",{parentName:"ul"},"Use pointers to pass by reference")))),Object(i.b)("h3",{id:"part-1"},"Part 1"),Object(i.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into an undergraduate cluster computer. Update the course public repo with a ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," command.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing\n",Object(i.b)("inlineCode",{parentName:"p"},"ls exercises/ex10")," -- you should see a file named ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to your personal repo for the course and make a directory for today's exercise. Copy ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," from the public class repository (in the ",Object(i.b)("em",{parentName:"p"},"/exercises/ex10/")," directory) into your personal repo's directory for this exercise."))),Object(i.b)("h3",{id:"part-2"},"Part 2"),Object(i.b)("p",null,"In this part, you will be working on ",Object(i.b)("strong",{parentName:"p"},"passing.c"),". You are going to implement a ",Object(i.b)("inlineCode",{parentName:"p"},"getDate")," function that prompts for and collects input that is a date in MM/DD/YYYY format. You will practice how to pass variables by pointers and learn when you should pass by pointers instead of by value. Open ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," with a text editor. ","[NOTE: it will not compile until you complete many of the tasks below.]","  You will need to modify ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," as follows."),Object(i.b)("p",null,"First, add a declaration and definition for a function called ",Object(i.b)("inlineCode",{parentName:"p"},"getDate"),". The purpose of the function is to prompt for and collect input that is a date in MM/DD/YYYY form. The function should use three parameters to pass the input values back to the main calling function as integers, storing them in the provided variables. It should also ",Object(i.b)("inlineCode",{parentName:"p"},"return")," the number of values that were successfully read by the function. Your main job in this exercise is to figure out how to declare and use the parameters for this function, and how to call it from main."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TODO")," comments indicate where to add the declaration and definition."),Object(i.b)("h3",{id:"part-3"},"Part 3"),Object(i.b)("p",null,"After you have implemented the ",Object(i.b)("inlineCode",{parentName:"p"},"getDate")," function, you should complete\nthe code in the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," function. You will need to declare and\ninitialize an array of month names, called ",Object(i.b)("inlineCode",{parentName:"p"},"months"),".  "),Object(i.b)("p",null,"Next, fix the code at the point of the ",Object(i.b)("inlineCode",{parentName:"p"},"TODO")," comment in the while loop control so that it calls the getDate function, using the provided variables ",Object(i.b)("inlineCode",{parentName:"p"},"mon"),", ",Object(i.b)("inlineCode",{parentName:"p"},"day")," and ",Object(i.b)("inlineCode",{parentName:"p"},"yr"),". "),Object(i.b)("p",null,"Once you've completed the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," function, you should be able to run the\nprogram. You should run it with at least three test cases for successful date\nconversions and three test cases for unsuccessful inputs.  Make sure that\nall of your tests pass."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Remember to add and commit to your local repo copy as your work. Push to your remote repo when finished. Also scp and submit ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," to Gradescope to check your solution. Use ",Object(i.b)("inlineCode",{parentName:"p"},"exit")," to logout from your ugrad account when finished. If you continue to work on the program after class, make sure to keep your repo updated as well!"))))}d.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);