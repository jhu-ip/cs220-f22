(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(153));const i={id:"ex12",title:"Exercise 12"},r={unversionedId:"exercises/ex12",id:"exercises/ex12",isDocsHomePage:!1,title:"Exercise 12",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and submit on Gradescope to check your solution. You are encouraged to work at home to complete what you do not get through today.",source:"@site/docs\\exercises\\ex12.md",slug:"/exercises/ex12",permalink:"/cs220-f22/docs/exercises/ex12",version:"current"},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]},{value:"Part 5",id:"part-5",children:[]}],s={rightToc:c};function l(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting, and submit on Gradescope to check your solution. You are encouraged to work at home to complete what you do not get through today."))),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Reinforces concepts learned in today's meeting:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Use pointer arithmetic to access array elements"),Object(o.b)("li",{parentName:"ul"},'Use pointer arithmetic to treat regions of a larger array as "sub-arrays"'),Object(o.b)("li",{parentName:"ul"},"Use pointer differences to compute indices of array elements based on their displacement from the base address"),Object(o.b)("li",{parentName:"ul"},"Use pointers to access subsets of a 2D array as 1D arrays")))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into an undergraduate cluster computer. Update the course public repo with a ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," command.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Confirm that you can access the template files for today\u2019s exercise by typing ",Object(o.b)("inlineCode",{parentName:"p"},"ls exercises/ex12")," -- you should see files named ",Object(o.b)("inlineCode",{parentName:"p"},"bsearch.c"),"\tand ",Object(o.b)("inlineCode",{parentName:"p"},"sudoku.c"),", as well as 3 plain text input puzzle files ",Object(o.b)("inlineCode",{parentName:"p"},"puzzle*.txt"),". There should also be files ",Object(o.b)("inlineCode",{parentName:"p"},"sudokuHelpers.h"),", ",Object(o.b)("inlineCode",{parentName:"p"},"sudokuHelpers.c"),", and a ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile")," for easy compilation and updating of the sudoku code.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to your personal repo for the course and make a directory for today's exercise. Then copy all the files from the public class repository (in the ",Object(o.b)("inlineCode",{parentName:"p"},"*/exercises/ex12/*")," directory) and put it in your personal repo's directory for today's exercise."))),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"bsearch.c")," with a text editor. To compile the code, use this command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra bsearch.c -g -o bsearch   \n")),Object(o.b)("p",null,"or use our alias:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"gccc bsearch.c -g -o bsearch\n")),Object(o.b)("p",null,"You will need to modify ",Object(o.b)("inlineCode",{parentName:"p"},"bsearch.c")," as follows."),Object(o.b)("p",null,"First, add a declaration and definition for a function called ",Object(o.b)("inlineCode",{parentName:"p"},"search"),".\nThe declaration should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"int *search(int *start, int *end, int search_val);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TODO")," comments indicate where to add the declaration and definition."),Object(o.b)("p",null,"This function implements a binary search to find an integer value ",Object(o.b)("inlineCode",{parentName:"p"},"search_val")," in a region of a sorted array of ",Object(o.b)("inlineCode",{parentName:"p"},"int")," values. The ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," parameters specify a range of elements to search, where ",Object(o.b)("inlineCode",{parentName:"p"},"start")," is a pointer to the inclusive start element, and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," is a pointer to the ",Object(o.b)("em",{parentName:"p"},"exclusive")," end element.  I.e., the pointers to the elements in the range to be searched are greater than or equal to ",Object(o.b)("inlineCode",{parentName:"p"},"start"),", and strictly less than ",Object(o.b)("inlineCode",{parentName:"p"},"end"),"."),Object(o.b)("p",null,"If the search is successful, the ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function should return a pointer to the element where ",Object(o.b)("inlineCode",{parentName:"p"},"search_val")," was located.  If the search is unsuccessful, the ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function should return ",Object(o.b)("inlineCode",{parentName:"p"},"NULL"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Recall that you implemented binary search in ",Object(o.b)("a",{parentName:"p",href:"ex7"},"Exercise 7"),". Note that in today's exercise, you are not required to implement the binary search using recursion. Either recursion or iteration is fine. However, keep in mind that for Ex 7 both of the range indices ",Object(o.b)("inlineCode",{parentName:"p"},"low")," and ",Object(o.b)("inlineCode",{parentName:"p"},"high")," were ",Object(o.b)("em",{parentName:"p"},"inclusive"),"."))),Object(o.b)("p",null,"Next, after you have implemented the ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function, you should complete the code in the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function.  You will see a block of code that looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"// example of a successful search\npos = search(arr1, arr1 + 10, 809);\nassert(pos != NULL);\nassert(*pos == 809);\nindex = // TODO: compute the index of the matching element\nassert(7 == index);\n")),Object(o.b)("p",null,"Fix the code at the point of the ",Object(o.b)("inlineCode",{parentName:"p"},"TODO")," comment so that it computes the index of the array element that ",Object(o.b)("inlineCode",{parentName:"p"},"pos")," points to, where ",Object(o.b)("inlineCode",{parentName:"p"},"pos")," is the result of a successful search.  Hint: this will involve a ",Object(o.b)("em",{parentName:"p"},"pointer difference")," computation."),Object(o.b)("p",null,"Once you've completed the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," function, you should be able to run the program.  If the tests pass, you will see the output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"All tests pass!\n")),Object(o.b)("p",null,"To finish this part of the exercise, add additional test cases to test the ",Object(o.b)("inlineCode",{parentName:"p"},"search")," function.  You should add at least three test cases for successful searches and three test cases for unsuccessful searches.  Make sure that\nall of your tests pass."),Object(o.b)("h3",{id:"part-4"},"Part 4"),Object(o.b)("p",null,"For the next part of this exercise, you'll be finishing the implementation of a sudoku checker program. The purpose of the program is to read an input puzzle file, where 0s represent empty cells. It should then check every row, column and cube to see if the puzzle is completely solved already, or not. You will only need to modify the ",Object(o.b)("inlineCode",{parentName:"p"},"sudokuHelper.c")," file,\nbut should take time first to read through the code in the other files and ask if you have any questions."),Object(o.b)("p",null,"There are several helper functions you need to complete, as indicated by ",Object(o.b)("inlineCode",{parentName:"p"},"TODO")," comments in the file. In both ",Object(o.b)("inlineCode",{parentName:"p"},"makeCol")," and ",Object(o.b)("inlineCode",{parentName:"p"},"makeCube")," you need to declare the unit array that will be populated and returned in\neach function. (Their declarations will be identical.) You should also carefully read through the provided code in each method to ask if you don't understand how they work."),Object(o.b)("p",null,"Next you'll need to call these functions from two other helpers, again where indicated by ",Object(o.b)("inlineCode",{parentName:"p"},"TODO")," comments in functions ",Object(o.b)("inlineCode",{parentName:"p"},"checkRows"),", ",Object(o.b)("inlineCode",{parentName:"p"},"checkCols")," and ",Object(o.b)("inlineCode",{parentName:"p"},"checkCubes"),". Once this is done correctly, you should be able to\ncompile everything with the Makefile and run the main program with each puzzle file as input. The first two are not correct/complete solutions, but ",Object(o.b)("inlineCode",{parentName:"p"},"puzzle3.txt")," is a completely solved puzzle."),Object(o.b)("h3",{id:"part-5"},"Part 5"),Object(o.b)("p",null,"Lastly, using the tools you learned in Ex 11 during the last class session, modify the ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile"),", adding the ",Object(o.b)("inlineCode",{parentName:"p"},"-g")," option to your compilation command(s) so that you can run ",Object(o.b)("inlineCode",{parentName:"p"},"gdb")," and ",Object(o.b)("inlineCode",{parentName:"p"},"valgrind")," on this code. Find a fix the memory leaks in ",Object(o.b)("inlineCode",{parentName:"p"},"sudokuHelpers.c")," for this final task. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Remember to add and commit to your local repo copy as your work. Push to your remote repo when finished. Also scp and submit to Gradescope to check your solution. Use ",Object(o.b)("inlineCode",{parentName:"p"},"exit")," to logout from your ugrad account when finished. If you continue to work on the program after class, make sure to keep your repo updated as well!"))))}l.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);