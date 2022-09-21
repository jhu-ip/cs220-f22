(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),o=(n(0),n(149)),r=["components"],c={id:"ex10-3",title:"Exercise 10-3"},p={unversionedId:"exercises/ex10-3",id:"exercises/ex10-3",isDocsHomePage:!1,title:"Exercise 10-3",description:"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work.",source:"@site/docs\\exercises\\ex10-3.md",slug:"/exercises/ex10-3",permalink:"/cs220-f22/docs/exercises/ex10-3",version:"current"},l=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],b={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"C++ classes, fields & member functions"),Object(o.b)("li",{parentName:"ul"},"Operator overloading"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"friend")," keyword")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A complex number ",Object(o.b)("inlineCode",{parentName:"p"},"c")," is represented by a pair of real numbers ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," as ",Object(o.b)("inlineCode",{parentName:"p"},"c =  a  + b*i"),", where ",Object(o.b)("inlineCode",{parentName:"p"},"i")," is the complex root of unity satisfying ",Object(o.b)("inlineCode",{parentName:"p"},"i*i=-1"),". In this representation, ",Object(o.b)("inlineCode",{parentName:"p"},"a"),' is the "real" component of ',Object(o.b)("inlineCode",{parentName:"p"},"c")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b"),' is the "imaginary" component. Like real numbers, complex numbers support arithmetic operations:'),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Addition: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)+(f+g*i) = (a+f) + (b+g)*i")),Object(o.b)("li",{parentName:"ul"},"Subtraction: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)-(f+g*i) = (a-f) + (b-g)*i")),Object(o.b)("li",{parentName:"ul"},"Scalar multiplication: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)*f = f*(a+b*i) = (a*f) + (b*f)*i")),Object(o.b)("li",{parentName:"ul"},"Scalar division: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)/f = (a/f) + (b/f)*i")),Object(o.b)("li",{parentName:"ul"},"Complex multiplication: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)*(f+g*i) = (a*f-b*g) + (a*g+b*f)*i"))),Object(o.b)("p",{parentName:"div"},"In addition we can compute the conjugate of a complex number, ",Object(o.b)("inlineCode",{parentName:"p"},"Conjugate(a+b*i) = a-b*i")," (itself a complex number) and we can also compute its square norm ",Object(o.b)("inlineCode",{parentName:"p"},"SquareNorm(a+b*i) = a*a + b*b")," (a non-negative real value)."),Object(o.b)("p",{parentName:"div"},"Using the conjugate and the square norm, we can compute the reciprocal of a complex number, which allows us to do complex division:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Reciprocal: ",Object(o.b)("inlineCode",{parentName:"li"},"1/(a+b*i) = (a-b*i)/(a*a+b*b)")),Object(o.b)("li",{parentName:"ul"},"Complex division: ",Object(o.b)("inlineCode",{parentName:"li"},"(a+b*i)/(f+g*i) = (a+b*i)*(f-g*i)/(f*f+g*g)"))))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(o.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(o.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Type ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(o.b)("inlineCode",{parentName:"p"},"ls exercises/ex10-3")," -- you should see files named ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile"),", ",Object(o.b)("inlineCode",{parentName:"p"},"complex.[h/cpp]"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"main.cpp")," inside.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the above files from the public class repository (in the ",Object(o.b)("inlineCode",{parentName:"p"},"/exercises/ex10-3/")," directory) to your personal repo in a new directory named ",Object(o.b)("inlineCode",{parentName:"p"},"ex10-3")," under ",Object(o.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),"."))),Object(o.b)("h3",{id:"part-2"},"Part 2"),Object(o.b)("p",null,"Read the instructional comments in ",Object(o.b)("inlineCode",{parentName:"p"},"complex.h")," and ",Object(o.b)("inlineCode",{parentName:"p"},"complex.cpp"),". Read ",Object(o.b)("inlineCode",{parentName:"p"},"main.cpp"),".  It shows an example of how to use the given code for the ",Object(o.b)("inlineCode",{parentName:"p"},"Complex")," class. You can compile and run the code using commands ",Object(o.b)("inlineCode",{parentName:"p"},"make main")," and ",Object(o.b)("inlineCode",{parentName:"p"},"./main"),"."),Object(o.b)("p",null,"The first task is to overload and implement the ",Object(o.b)("inlineCode",{parentName:"p"},"operator<<")," function for print out. After your implementation, you can uncomment the related parts in ",Object(o.b)("inlineCode",{parentName:"p"},"main.c"),", compile and test your implementation. (Note: remember to use the ",Object(o.b)("inlineCode",{parentName:"p"},"friend")," keyword.)"),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"Follow the instructions in the comments in ",Object(o.b)("inlineCode",{parentName:"p"},"complex.h")," and ",Object(o.b)("inlineCode",{parentName:"p"},"complex.cpp")," to write some missing functions for which we have provided headers within the ",Object(o.b)("inlineCode",{parentName:"p"},"complex.h")," file.  You should not change anything in the ",Object(o.b)("inlineCode",{parentName:"p"},"complex.h")," file. Try to not reinvent the wheel when writing the add functions. After your implementation, you can uncomment the related parts in ",Object(o.b)("inlineCode",{parentName:"p"},"main.c"),", compile and test your implementation."),Object(o.b)("h3",{id:"part-4"},"Part 4"),Object(o.b)("p",null,"However, when we multiply a ",Object(o.b)("inlineCode",{parentName:"p"},"float")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"Complex")," class, it will not work as we have not overloaded the ",Object(o.b)("inlineCode",{parentName:"p"},"operator*")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"float"),". It can be done by adding a non-member functions to allow a ",Object(o.b)("inlineCode",{parentName:"p"},"float")," multiply with ",Object(o.b)("inlineCode",{parentName:"p"},"Complex"),". Finish the implementation in ",Object(o.b)("inlineCode",{parentName:"p"},"complex.cpp")," prototyped in ",Object(o.b)("inlineCode",{parentName:"p"},"complex.h"),". After your implementation, you can uncomment the related parts in ",Object(o.b)("inlineCode",{parentName:"p"},"main.c"),", compile and test your implementation."))}m.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||s[d]||o;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);