(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=(n(0),n(153));const a={id:"ex2",title:"Exercise 2"},o={unversionedId:"exercises/ex2",id:"exercises/ex2",isDocsHomePage:!1,title:"Exercise 2",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today.",source:"@site/docs\\exercises\\ex2.md",slug:"/exercises/ex2",permalink:"/cs220-f22/docs/exercises/ex2",version:"current"},c=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]}]}],l={rightToc:c};function s(e){let{components:t,...n}=e;return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, but you need not hand it in. You are encouraged to work at home to complete what you do not get through today."))),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This exercise should help you gain familiarity with "),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"The basic structure of a C program"),Object(i.b)("li",{parentName:"ul"},"C integer variables"),Object(i.b)("li",{parentName:"ul"},"Basic text input and output in C"),Object(i.b)("li",{parentName:"ul"},"Arithmetic on integer values in C")))),Object(i.b)("h3",{id:"part-1"},"Part 1"),Object(i.b)("p",null,"Start by going to the following website in a web browser: ",Object(i.b)("a",{parentName:"p",href:"https://www.onlinegdb.com/online_c_compiler"},"https://www.onlinegdb.com/online_c_compiler")),Object(i.b)("p",null,'This website is a simple online IDE for C programs.  You will see a "hello, world" program in the text editor, in a source file called ',Object(i.b)("inlineCode",{parentName:"p"},"main.c"),"."),Object(i.b)("p",null,'Click the green "\u25b6 Run" button just above the text editor.  The program will be compiled, and then you will see the output ',Object(i.b)("inlineCode",{parentName:"p"},"Hello World")," in the console window below the text editor!"),Object(i.b)("p",null,"We're using this online programming environment for this exercise in order to make sure that everyone can start working on C programs right away, even if they don't yet have an account on the CS ugrad machines.  All subsequent exercises (and assignments) will be done on the ugrad machines."),Object(i.b)("h3",{id:"part-2"},"Part 2"),Object(i.b)("p",null,"To get started, change the program so that it looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main(void) {\n    int value;\n    printf("enter an integer: ");\n    scanf("%d", &value);\n    printf("you entered: %d\\n", value);\n    return 0;\n}\n')),Object(i.b)("p",null,'Click the green "\u25b6 Run" button.  The program should compile, and then the program will start running.  You can use the console window (below the text editor) to interact with the program.  Enter the value "42", and press "Enter".  You should see the output ',Object(i.b)("inlineCode",{parentName:"p"},"you entered: 42")," in the console window."),Object(i.b)("p",null,"You have written a C program which reads user input, and executed it interactively. Congratulations!"),Object(i.b)("h3",{id:"part-3"},"Part 3"),Object(i.b)("p",null,"Your main task for this exercise is to write a program which"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"prompts the user to enter two integer values, and then"),Object(i.b)("li",{parentName:"ul"},"prints out the sum, difference, product, quotient (using integer division), and remainder, in the format specified below")),Object(i.b)("p",null,"Here is an example run of the program, with ",Object(i.b)("b",null,"bold")," text used to indicate the input entered by the user:"),Object(i.b)("pre",null,"Enter two integers: ",Object(i.b)("b",null,"11 3"),Object(i.b)("br",null),"11 + 3 = 14",Object(i.b)("br",null),"11 - 3 = 8",Object(i.b)("br",null),"11 * 3 = 33",Object(i.b)("br",null),"11 / 3 = 3",Object(i.b)("br",null),"11 % 3 = 2",Object(i.b)("br",null)),Object(i.b)("p",null,"Note that when asked to read two values, the ",Object(i.b)("inlineCode",{parentName:"p"},"scanf")," function doesn't care whether you enter both values on the same line, or on different lines.  In the example session above, both values were entered on the same line."),Object(i.b)("p",null,"One slightly tricky issue in producing the correct output is printing a literal ",Object(i.b)("inlineCode",{parentName:"p"},"%")," character using ",Object(i.b)("inlineCode",{parentName:"p"},"printf"),".  In a ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," format string, the ",Object(i.b)("inlineCode",{parentName:"p"},"%")," character usually is the start of a format specifier.  However, you can have ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," generate a literal ",Object(i.b)("inlineCode",{parentName:"p"},"%")," character by specifying ",Object(i.b)("em",{parentName:"p"},"two")," ",Object(i.b)("inlineCode",{parentName:"p"},"%")," characters in the format string.  I.e., the code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'printf("%%");\n')),Object(i.b)("p",null,"will print a single ",Object(i.b)("inlineCode",{parentName:"p"},"%")," character to the standard output."))}s.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);