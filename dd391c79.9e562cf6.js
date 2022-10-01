(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=(n(0),n(155));const r={id:"ex4-1",title:"Exercise 4-1"},o={unversionedId:"exercises/ex4-1",id:"exercises/ex4-1",isDocsHomePage:!1,title:"Exercise 4-1",description:"This is an in-class exercise. An exercise page like this one will contain",source:"@site/docs\\exercises\\ex4-1.md",slug:"/exercises/ex4-1",permalink:"/cs220-f22/docs/exercises/ex4-1",version:"current"},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],l={rightToc:c};function s(e){let{components:t,...n}=e;return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain\na brief description but is intended to be supplemented by discussion\nduring our meeting time. Complete the exercise to the best of your ability\nin the time given. Feel free to talk with other students as you work,\nand do not be afraid to ask questions if you get stuck. Aim to complete as\nmuch as possible during our meeting, but you need not hand it in. You are\nencouraged to work at home to complete what you do not get through today."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Reinforces concepts learned in today's meeting:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Declare and initialize pointer variables"),Object(i.b)("li",{parentName:"ul"},"Use pointers to pass by reference")))),Object(i.b)("h3",{id:"part-1"},"Part 1"),Object(i.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into an undergraduate cluster computer.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Confirm that your personal working git repository and the public course git repository are both cloned and accessible.  If this is not the case, ask for assistance.  You may need to redo steps from week 1 exercises. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate into ",Object(i.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Type ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing\n",Object(i.b)("inlineCode",{parentName:"p"},"ls exercises/ex4-1")," -- you should see a file named ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c"),"."))),Object(i.b)("h3",{id:"part-2"},"Part 2"),Object(i.b)("p",null,"Grab a copy of ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," from the public class repository (in the ",Object(i.b)("em",{parentName:"p"},"/exercises/ex4-1/")," directory) and put it in your personal repo. To do so:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cd ~/cs220")," to move to your working copy of your personal repo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cd exercises")," to change to your personal ",Object(i.b)("inlineCode",{parentName:"p"},"exercises")," directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make a new directory for today\u2019s exercise by typing ",Object(i.b)("inlineCode",{parentName:"p"},"mkdir ex4-1"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change to the new directory with ",Object(i.b)("inlineCode",{parentName:"p"},"cd ex4-1"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the source file to the current directory using: ",Object(i.b)("inlineCode",{parentName:"p"},"cp ~/cs220-sp21-public/exercises/ex4-1/passing.c .")))),Object(i.b)("h3",{id:"part-3"},"Part 3"),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," with a text editor. ","[NOTE: it will not compile until you complete many\nof the tasks below.]","  You will need to modify ",Object(i.b)("inlineCode",{parentName:"p"},"passing.c")," as follows."),Object(i.b)("p",null,"First, add a declaration and definition for a function called ",Object(i.b)("inlineCode",{parentName:"p"},"getDate"),". The purpose of the function is to prompt for and collect input that is a date in MM/DD/YYYY form. The function should use three parameters to pass the input values back to the main calling function as integers, storing them in the provided variables. It should also ",Object(i.b)("inlineCode",{parentName:"p"},"return")," the number of values that were successfully read by the function. Your main job in this exercise is to figure out how to declare and use the parameters for this function, and how to call it from main."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TODO")," comments indicate where to add the declaration and definition."),Object(i.b)("h3",{id:"part-4"},"Part 4"),Object(i.b)("p",null,"After you have implemented the ",Object(i.b)("inlineCode",{parentName:"p"},"getDate")," function, you should complete\nthe code in the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," function. You will need to declare and\ninitialize an array of month names, called ",Object(i.b)("inlineCode",{parentName:"p"},"months"),".  "),Object(i.b)("p",null,"Next, fix the code at the point of the ",Object(i.b)("inlineCode",{parentName:"p"},"TODO")," comment in the while loop control so that it calls the getDate function, using the provided variables ",Object(i.b)("inlineCode",{parentName:"p"},"mon"),", ",Object(i.b)("inlineCode",{parentName:"p"},"day")," and ",Object(i.b)("inlineCode",{parentName:"p"},"yr"),". "),Object(i.b)("p",null,"Once you've completed the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," function, you should be able to run the\nprogram. You should run it with at least three test cases for successful date\nconversions and three test cases for unsuccessful inputs.  Make sure that\nall of your tests pass."))}s.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);