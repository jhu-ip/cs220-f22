(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(153)),i=["components"],l={id:"hw0",layout:"default",title:"Homework 0"},c={unversionedId:"assignments/hw0",id:"assignments/hw0",isDocsHomePage:!1,title:"Homework 0",description:"\x3c!--",source:"@site/docs\\assignments\\hw0.md",slug:"/assignments/hw0",permalink:"/cs220-f22/docs/assignments/hw0",version:"current"},b=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]}]}],s={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"admonition caution"},Object(o.b)("div",{class:"title"},"Caution"),Object(o.b)("div",{class:"content"},Object(o.b)("ul",null,Object(o.b)("li",null,"You are expected to work individually."),Object(o.b)("li",null,Object(o.b)("strong",null,"Due: Monday September 12th at 11pm EST (Baltimore time).")),Object(o.b)("li",null,Object(o.b)("em",null,"This assignment is worth 20 points."))))),Object(o.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(o.b)("div",{class:"admonition success"},Object(o.b)("div",{class:"title"},"Objectives"),Object(o.b)("div",{class:"content"},Object(o.b)("ul",null,Object(o.b)("li",null,"editing a C source file,"),Object(o.b)("li",null,"compiling and executing a C program.")),Object(o.b)("p",null,"Tools/technologies:"),Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("code",null,"git")),Object(o.b)("li",null,Object(o.b)("code",null,"zip")," up multiple files"),Object(o.b)("li",null,"transferring files from ugrad to a local machine using ",Object(o.b)("code",null,"scp"),"/",Object(o.b)("code",null,"pscp")),Object(o.b)("li",null,"submitting to Gradescope.")))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("div",{class:"admonition caution"},Object(o.b)("div",{class:"title"},"Caution"),Object(o.b)("div",{class:"content"},Object(o.b)("p",null,"You should receive an invitation to the jhu-ip organization and your private repository by ",Object(o.b)("strong",null,"Thu January 27th"),". If you haven't received it, post privately for all instructors on Piazza."))),Object(o.b)("p",null,"In your private git repository (created for you on Github under jhu-ip organization), create a new folder named ",Object(o.b)("strong",{parentName:"p"},"homework"),", then a subfolder named ",Object(o.b)("strong",{parentName:"p"},"hw0"),". In that ",Object(o.b)("em",{parentName:"p"},"hw0")," subfolder, create three separate C source files with names given below that output ",Object(o.b)("strong",{parentName:"p"},"exactly"),' the messages shown below. In each case, the desired output message should be followed by a newline ("\\n") character.'),Object(o.b)("div",{class:"admonition tip"},Object(o.b)("div",{class:"title"},"Tip"),Object(o.b)("div",{class:"content"},Object(o.b)("p",null,"The files you create can be copies of ",Object(o.b)("em",null,"hello_world.c")," from ",Object(o.b)("a",{href:"/docs/exercises/ex2"},"Exercise 2")," with very small modifications."))),Object(o.b)("p",null,"At the top of each source file, be sure to add two comment lines that indicate your name followed by your JHED ID, e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"//Homer Simpson\n//hsimp999\n")),Object(o.b)("p",null,"The behavior of each program is as follows:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"file name"),Object(o.b)("th",{parentName:"tr",align:null},"desired output"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"one.c")),Object(o.b)("td",{parentName:"tr",align:null},"The first prize goes to Jennifer.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"two.c")),Object(o.b)("td",{parentName:"tr",align:null},"The second prize goes to Gongqi.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"three.c")),Object(o.b)("td",{parentName:"tr",align:null},"The third prize goes to Pat.")))),Object(o.b)("p",null,"Compile and execute each of the three programs and ensure that they give the output exactly as shown. Finally, add all three source files to your git repository, commit them with an appropriate message, and push."),Object(o.b)("h3",{id:"part-2"},"Part 2"),Object(o.b)("p",null,"Create a text file named gitlog.txt which demonstrates your recent git activity by typing the command ",Object(o.b)("inlineCode",{parentName:"p"},"git log > gitlog.txt")),Object(o.b)("div",{class:"admonition tip"},Object(o.b)("div",{class:"title"},"Tip"),Object(o.b)("div",{class:"content"},Object(o.b)("p",null,"You can optionally view the contents of the newly created file by typing ",Object(o.b)("code",null,"less gitlog.txt")))),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"Create a ",Object(o.b)("em",{parentName:"p"},".zip")," file named ",Object(o.b)("em",{parentName:"p"},"hw0.zip")," which contains exactly the following four files: ",Object(o.b)("strong",{parentName:"p"},"three.c, two.c, one.c, gitlog.txt"),". Copy the ",Object(o.b)("em",{parentName:"p"},"hw0.zip")," file to your local machine, and submit it via Gradescope.  Specifically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the invitation email you should have received from ",Object(o.b)("a",{parentName:"li",href:"mailto:team@gradescope.com"},"team@gradescope.com")," (subject: \u201cWelcome to Gradescope for 601.220\u201d)."),Object(o.b)("li",{parentName:"ul"},"Follow the instructors to set your password."),Object(o.b)("li",{parentName:"ul"},"Upon logging in, click 601.220."),Object(o.b)("li",{parentName:"ul"},"Click Homework 0."),Object(o.b)("li",{parentName:"ul"},"Click Submit (or Resubmit if you have done this before)."),Object(o.b)("li",{parentName:"ul"},"Drag your zip file onto the Drag & Drop box (or click the box and select the zip file)."),Object(o.b)("li",{parentName:"ul"},"Click Upload. You should see a confirmation that the submission uploaded successfully.")),Object(o.b)("p",null,"When you submit, Gradescope conducts a series of automatic tests. These tests do basic things like check that you submitted the right files and that your ",Object(o.b)("inlineCode",{parentName:"p"},".c")," files compile properly. If you see error messages here (look for red), address them and resubmit. "),Object(o.b)("div",{class:"admonition tip"},Object(o.b)("div",{class:"title"},"Tip"),Object(o.b)("div",{class:"content"},Object(o.b)("p",null,"You may re-submit any number of times prior to the deadline; only your latest submission will be graded."))),Object(o.b)("p",null,"Two notes regarding automatic checks for programming assignments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Passing an automatic check is not itself worth points. (There might be a nominal, low point value like 0.01 associated with a check, but that will not count in the end.) The checks exist to help you and the graders find obvious errors. This will be true for most of the assignments; the actual grades are given manually by the graders, along with feedback comments.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The automatic checks cover some of the requirements set out in the assignment, but not all. For this assignment, you will notice that the ",Object(o.b)("em",{parentName:"p"},"third.c")," program is checked, but not the other two. In general, ",Object(o.b)("em",{parentName:"p"},"it is up to you to test your own work")," and ensure your programs satisfy all stated requirements. Passing all the automatic checks does not necessarily mean you will earn all the points."))))}u.isMDXComponent=!0}}]);