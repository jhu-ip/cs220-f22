(window.webpackJsonp=window.webpackJsonp||[]).push([[43,59],{101:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),l=a(176),n=a(184),o=a(185),d=a(46);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{var i=a(195)("./wk"+t+"data.json");e.push(s.a.createElement(o.a,{value:"w"+t},s.a.createElement(d.default,{days:i.days,videos:i.videos,slides:i.slides,questions:i.questions,exercises:i.exercises,resources:i.resources})))}catch(k){console.log("cannot read from ./data/wk"+t+"data.json")}var r=s.a.createElement(n.a,{defaultValue:"w7",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),c=new Array;for(t=8;t<=14;++t)try{var p=a(195)("./wk"+t+"data.json");c.push(s.a.createElement(o.a,{value:"w"+t},s.a.createElement(d.default,{days:p.days,videos:p.videos,slides:p.slides,questions:p.questions,exercises:p.exercises,resources:p.resources})))}catch(k){console.log("cannot read from ./data/wk"+t+"data.json")}var u=s.a.createElement(n.a,{defaultValue:"w12",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},c);return s.a.createElement(l.a,{title:"Schedule"},s.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses. See the\xa0",s.a.createElement("a",{href:"https://livejohnshopkins-my.sharepoint.com/:x:/g/personal/psimari2_jh_edu/EcUZ-ZTcHP5Pr8yi0RXkrRoBmU7t4RS7l81huU9vngzQwg?e=cPThWh",target:"_blank"},"tentative schedule"),"."),s.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},s.a.createElement(n.a,{block:"true",defaultValue:"c++",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},s.a.createElement(o.a,{value:"c"},r),s.a.createElement(o.a,{value:"c++"},u))))}},184:function(e,t,a){"use strict";var i=a(0),s=a.n(i),l=a(179),n=a(170),o=a(47),d=a.n(o);const r=37,c=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:p,groupId:u,className:k}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(l.a)(),[f,y]=Object(i.useState)(o),[x,b]=Object(i.useState)(!1);if(null!=u){const e=m[u];null!=e&&e!==f&&p.some((t=>t.value===e))&&y(e)}const _=e=>{y(e),null!=u&&h(u,e)},w=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||b(!0)},E=()=>{b(!1)};return Object(i.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",E),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",E)})),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},k)},p.map((e=>{let{value:t,label:a}=e;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(n.a)("tabs__item",d.a.tabItem,{"tabs__item--active":f===t}),style:x?{}:{outline:"none"},key:t,ref:e=>w.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case c:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case r:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(w,e.target,e),g(e)},onFocus:()=>_(t),onClick:()=>{_(t),b(!1)},onPointerDown:()=>b(!1)},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(a).filter((e=>e.props.value===f))[0]))}},185:function(e,t,a){"use strict";var i=a(0),s=a.n(i);t.a=function(e){return s.a.createElement("div",null,e.children)}},195:function(e,t,a){var i={"./wk10data.json":231,"./wk11data.json":232,"./wk12data.json":233,"./wk1data.json":234,"./wk2data.json":235,"./wk3data.json":236,"./wk4data.json":237,"./wk5data.json":238,"./wk6data.json":239,"./wk7data.json":240,"./wk8data.json":241,"./wk9data.json":242};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=l,e.exports=s,s.id=195},231:function(e){e.exports=JSON.parse('{"days":["Day 26 (10/31)","Day 27 (11/2)","Day 28 (11/4)"],"videos":[[{"title":"C++ reference","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4fcd7033-f754-429f-b55b-ae230027a516"},{"title":"C++ dynamic memory allocation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d9978853-6c9b-4cc3-b62d-ae230027a4cc"}],[{"title":"C++ classes","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5a1a7afe-6165-4e33-9567-ae230027a431"},{"title":"Default contructor and initializer list","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0e485b33-028d-45e6-be18-ae230027a3d3"}],[{"title":"Constructors and default arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62080530-d06e-4a0e-be06-ae230027a050"},{"title":"Destructors","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2ea9792a-afab-4319-85f1-ae2300279fe3"}]],"slides":[[{"title":"C++ reference","link":"../slides/day26_cpp_reference.pdf"},{"title":"C++ dynamic memory allocation","link":"../slides/day26_dynamic_memory_allocation.pdf"}],[{"title":"C++ classes","link":"../slides/day27_cpp_classes.pdf"},{"title":"Default contructor and initializer list","link":"../slides/day27_default_constructor.pdf"}],[{"title":"Constructors and default arguments","link":"../slides/day28_constructors.pdf"},{"title":"Destructors","link":"../slides/day28_destructors.pdf"}]],"questions":[[{"title":"Day 26","link":"../docs/questions/day26_questions"}],[{"title":"Day 27","link":"../docs/questions/day27_questions"}],[{"title":"Day 28","link":"../docs/questions/day28_questions"}]],"exercises":[[{"title":"Ex26","link":"../docs/exercises/ex26"}],[{"title":"Ex27","link":"../docs/exercises/ex27"}],[{"title":"Ex28","link":"../docs/exercises/ex28"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]]}')},232:function(e){e.exports=JSON.parse('{"days":["Day 29 (11/07)","Day 30 (11/09)","Day 31 (11/11)"],"videos":[[{"title":"Function overloading","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=40b7a01f-0464-4518-a181-acb50030e19e"},{"title":"Operator overloading","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc3f1b4-96ff-4eb4-9654-acb50030e116"}],[{"title":"Initialization and assignment","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c1b43c59-dcdf-4ca1-98e5-acb50030e09c"},{"title":"Rule of 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c799a676-cd5a-4e44-b322-acb50030e001"}],[{"title":"Template functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=50ef959c-0645-40e1-a0a6-acb50030df82"},{"title":"Template classes","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5ab193c0-8fb9-4616-bb13-acb50030df11"}]],"slides":[[{"title":"Function overloading","link":"../slides/day29_function_overloading.pdf"},{"title":"Operator overloading","link":"../slides/day29_operator_overloading.pdf"}],[{"title":"Initialization and assignment","link":"../slides/day30_initialization_assignments.pdf"},{"title":"Rule of 3","link":"../slides/day30_rule_of_3.pdf"}],[{"title":"Template functions","link":"../slides/day31_template_functions.pdf"},{"title":"Template classes","link":"../slides/day31_template_classes.pdf"}]],"questions":[[{"title":"Day 29","link":"../docs/questions/day29_questions"}],[{"title":"Day 30","link":"../docs/questions/day30_questions"}],[{"title":"Day 31","link":"../docs/questions/day31_questions"}]],"exercises":[[{"title":"Ex29","link":"../docs/exercises/ex29"}],[{"title":"Ex30","link":"../docs/exercises/ex30"}],[{"title":"Ex31","link":"../docs/exercises/ex31"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]]}')},233:function(e){e.exports=JSON.parse('{"days":["Day 32 (11/14)","Day 33 (11/16)","Day 34 (11/18)"],"videos":[[{"title":"Inheritance","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d1d4c44c-768a-4ab1-8678-acb50030deae"},{"title":"Polymorphism","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e2119fad-7921-4bf6-8ee6-acb50030de34"}],[{"title":"Dynamic Dispatch","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c9e7d9d8-675b-4763-bbad-acb50030ddc9"},{"title":"Function Hiding & Abstract Classes","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0604b46d-f2ad-4736-ac82-acb50030dd36"},{"title":"Virtual Destructors","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3418cd4d-507e-4e69-864a-acb50030daf0"}],[{"title":"OO Design & UML Diagrams","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9491df35-50b4-48b0-b40d-ad0a00ef2c4e"}]],"slides":[[{"title":"Inheritance","link":"../slides/day32_inheritance.pdf"},{"title":"Polymorphism","link":"../slides/day32_polymorphism.pdf"}],[{"title":"Dynamic Dispatch","link":"../slides/day33_dynamic_dispatch.pdf"},{"title":"Function Hiding & Abstract Classes","link":"../slides/day33_function_hiding_abstract_classes.pdf"},{"title":"Virtual Destructors","link":"../slides/day33_virtual_destructors.pdf"}],[{"title":"OO Design & UML Diagrams","link":"../slides/day34_oo_design_uml.pdf"},{"title":"Final Project","link":"#"}]],"questions":[[{"title":"Day 32","link":"../docs/questions/day32_questions"}],[{"title":"Day 33","link":"../docs/questions/day33_questions"}],[{"title":"Day 34","link":"../docs/questions/day34_questions"}]],"exercises":[[{"title":"Ex32","link":"../docs/exercises/ex32"}],[{"title":"Ex33","link":"../docs/exercises/ex33"}],[{"title":"NA","link":"#"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]]}')},234:function(e){e.exports=JSON.parse('{"days":["Day 1 (8/29)","Day 2 (8/31)","Day 3 (9/2)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bf3515d0-3a2c-4599-8fc2-ae220143ecfb"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Ex1 (Github account)","link":"../docs/exercises/ex1"}],[{"title":"Ex2","link":"../docs/exercises/ex2"}],[{"title":"Ex3-A","link":"../docs/exercises/ex3a"},{"title":"Ex3-B","link":"../docs/exercises/ex3b"}]],"resources":[[{"title":"Linux bootcamp","link":"https://cli-boot.camp/"},{"title":"Unix/Linux Tutorial","link":"https://www.cs.jhu.edu/~joanne/unix.html"},{"title":"Unix/Linux Referemce Card","link":"https://www.cs.jhu.edu/~joanne/unixRC.pdf"},{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"VS Code install walk-through","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9efa206a-6849-4bab-b630-ae3200303731"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"},{"title":"Creating a personal access token","link":"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"}]]}')},235:function(e){e.exports=JSON.parse('{"days":["Labor Day (9/5)","Day 4 (9/7)","Day 5 (9/9)"],"videos":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=45b14d44-3d4e-4fd7-b0c0-ae230027aef2"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=58f4d402-fd0d-4868-b805-ae230027ab93"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=06a4f1da-f6a1-4212-b686-ae230027ab33"}]],"slides":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"../slides/day04_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day05_arrays.pdf"},{"title":"Strings","link":"../slides/day05_c_strings.pdf"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"Day 4","link":"../docs/questions/day04_questions"}],[{"title":"Day 5","link":"../docs/questions/day05_questions"}]],"exercises":[[{"title":"N/A","link":"#"}],[{"title":"Ex4","link":"../docs/exercises/ex4"}],[{"title":"Ex5","link":"../docs/exercises/ex5"}]],"resources":[[],[],[]]}')},236:function(e){e.exports=JSON.parse('{"days":["Day 6 (9/12)","Day 7 (9/14)","Day 8 (9/16)"],"videos":[[{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ae149930-15ce-460c-a2df-ae230027aac0"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1de2958b-f8b8-4fae-ac47-ae230027aa77"}],[{"title":"Function declarations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bbef007b-88a8-4e42-bcc4-ae230027a8f4"},{"title":"Passing arrays to functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c18158bd-cf31-48c4-a2c0-ae230027a87e"},{"title":"Recursion","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=12215376-94e9-48dd-8d5a-ae230027937e"}],[{"title":"Separate compilation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76660996-f221-4bda-85bf-ae230027aa0b"},{"title":"Makefiles","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=956ae811-74a5-48f2-8d73-ae230027a9b0"},{"title":"Header guards","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76a9e1f6-07f3-483c-9341-ae230027a948"}]],"slides":[[{"title":"File I/O, assert, math functions","link":"../slides/day06_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day06_functions_command_line_arguments.pdf"}],[{"title":"Function declarations","link":"../slides/day07_function_declaration.pdf"},{"title":"Passing arrays to functions","link":"../slides/day07_passing_arrays_to_functions.pdf"},{"title":"Recursion","link":"../slides/day07_recursion.pdf"}],[{"title":"Separate compilation","link":"../slides/day08_separate_compilation.pdf"},{"title":"Makefiles","link":"../slides/day08_makefiles.pdf"},{"title":"Header guards","link":"../slides/day08_header_guards.pdf"}]],"questions":[[{"title":"Day 6","link":"../docs/questions/day06_questions"}],[{"title":"Day 7","link":"../docs/questions/day07_questions"}],[{"title":"Day 8","link":"../docs/questions/day08_questions"}]],"exercises":[[{"title":"Ex6","link":"../docs/exercises/ex6"}],[{"title":"Ex7","link":"../docs/exercises/ex7"}],[{"title":"Ex8","link":"../docs/exercises/ex8"}]],"resources":[[],[],[{"title":"C Makefile Cheat Sheet","link":"https://cppcheatsheet.com/notes/c_make.html"}]]}')},237:function(e){e.exports=JSON.parse('{"days":["Day 9 (9/19)","Day 10 (9/21)","Day 11 (9/23)"],"videos":[[{"title":"Multi-dimensional Arrays, GDB","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=67aec427-5035-40bb-a34f-ae230027a824"}],[{"title":"Pointer Basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7dd96f56-4676-4f7c-913d-ae230027a7a3"}],[{"title":"Dynamic Memory Allocation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=88e3945a-f1f2-4442-825e-ae230027a746"},{"title":"Valgrind","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f4c78306-67c7-4184-955f-ae230027a6b2"}]],"slides":[[{"title":"Multi-dimensional Arrays, GDB","link":"../slides/day09_multidimensional_arrays_gdb.pdf"}],[{"title":"Pointer Basics","link":"../slides/day10_pointers.pdf"}],[{"title":"Dynamic Memory Allocation","link":"../slides/day11_dynamic_memory_allocation.pdf"},{"title":"Valgrind","link":"../slides/day11_valgrind.pdf"}]],"questions":[[{"title":"Day 9","link":"../docs/questions/day09_questions"}],[{"title":"Day 10","link":"../docs/questions/day10_questions/"}],[{"title":"Day 11","link":"../docs/questions/day11_questions/"}]],"exercises":[[{"title":"Ex9","link":"../docs/exercises/ex09"}],[{"title":"Ex10","link":"../docs/exercises/ex10"}],[{"title":"Ex11","link":"../docs/exercises/ex11"}]],"resources":[[{"title":"GDB Cheat Sheet","link":"https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf"}],[{"title":"Binky the Pointer (video)","link":"https://www.youtube.com/watch?v=5VnDaHBi8dM"}],[{"title":"Valgrind switches to use: --leak-check=full --show-leak-kinds=all","link":"#"}]]}')},238:function(e){e.exports=JSON.parse('{"days":["Day 12 (9/26)","Day 13 (9/28)","Day 14 (9/30)"],"videos":[[{"title":"Pointer arithmetic","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d83163b7-7827-4bca-a6ca-ae2300279303"},{"title":"Dynamic 2D arrays","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5b124364-dcca-4e9b-b276-ae23002792a9"}],[{"title":"Lifetime/scope","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6fa78f1f-431c-40ea-95e2-ae230027a663"},{"title":"Structs","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=81f128ab-96f2-433e-b770-ae230027a5f4"},{"title":"Random number generation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e02cd998-bfde-4c4a-977a-ae23002791e7"}],[{"title":"Binary file I/O","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9a428f88-2a13-420b-b008-ae230027a35f"},{"title":"Bitwise operations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=373770ad-6472-4b72-b789-ae230027a246"}]],"slides":[[{"title":"Pointer arithmetic","link":"../slides/day12_pointer_arithmetic.pdf"},{"title":"Dynamic 2D arrays","link":"../slides/day12_more_pointers_dynamic_2d_arrays.pdf"}],[{"title":"Lifetime/scope","link":"../slides/day13_lifetime_scope.pdf"},{"title":"Structs","link":"../slides/day13_struct_type.pdf"},{"title":"Random numbers","link":"../slides/day13_random_numbers.pdf"}],[{"title":"Binary file I/O","link":"../slides/day14_binary_file_io.pdf"},{"title":"Bitwise operations","link":"../slides/day14_bitwise_operations.pdf"}]],"questions":[[{"title":"Day 12","link":"../docs/questions/day12_questions"}],[{"title":"Day 13","link":"../docs/questions/day13_questions"}],[{"title":"Day 14","link":"../docs/questions/day14_questions"}]],"exercises":[[{"title":"Ex12","link":"../docs/exercises/ex12"}],[{"title":"Ex13","link":"../docs/exercises/ex13"}],[{"title":"Ex14","link":"../docs/exercises/ex14"}]],"resources":[[],[],[]]}')},239:function(e){e.exports=JSON.parse('{"days":["Day 15 (10/3)","Day 16 (10/5)","Midterm Project (10/7)"],"videos":[[{"title":"Number representation, type conversion/casting","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9ce56b92-a382-468f-8c9e-ae230027a1af"}],[{"title":"Linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=254ea75c-12a1-456c-b91d-ae230027a0c6"}],[{"title":"Midterm Project","link":"../docs/assignments/midterm"}]],"slides":[[{"title":"Number representation, type conversion/casting","link":"../slides/day15_number_rep_type_conversions.pdf"}],[{"title":"Linked lists","link":"../slides/day16_linked_lists.pdf"}],[{"title":"N/A","link":"#"}]],"questions":[[{"title":"Day 15","link":"../docs/questions/day15_questions"}],[{"title":"Day 16","link":"../docs/questions/day16_questions"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"Ex15","link":"../docs/exercises/ex15/"}],[{"title":"Ex16","link":"../docs/exercises/ex16"}],[{"title":"N/A","link":"#"}]],"resources":[[{"title":"N/A","link":""}],[{"title":"N/A","link":""}],[{"title":"Midterm Exam Review Questions","link":"../res/MidtermReview.pdf"}]]}')},240:function(e){e.exports=JSON.parse('{"days":["Day 17 (9/10)","Day 18 (9/12)","Day 19 (9/14)"],"videos":[[{"title":"More linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=06994aeb-6743-4fcd-b69f-ae2300279d42"}],[{"title":"Work on midterm project","link":"#"}],[{"title":"Work on midterm project","link":"#"}]],"slides":[[{"title":"More linked lists","link":"../slides/day17_more_linked_lists.pdf"}],[{"title":"Work on midterm project","link":"#"}],[{"title":"Work on midterm project","link":"#"}]],"questions":[[{"title":"Day 17","link":"../docs/questions/day17_questions"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"Ex17","link":"../docs/exercises/ex17"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"resources":[[],[{"title":"Midterm Exam Review Questions Solution","link":"../res/MidtermReview-solutions.pdf"}],[]]}')},241:function(e){e.exports=JSON.parse('{"days":["Midterm Exam (10/17)","Day 22 (10/19)","Fall break (10/21)"],"videos":[[{"title":"Midterm exam day","link":"#"}],[{"title":"Intro to C++","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2760c264-312d-49f2-9e43-ae2300279acb"},{"title":"C++ strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=954ea030-61b3-482d-96e8-ae2300279a4f"}],[{"title":"Fall Break (no class)","link":"#"}]],"slides":[[{"title":"N/A","link":"#"}],[{"title":"Intro to C++","link":"../slides/day22_intro_cpp.pdf"},{"title":"C++ strings","link":"../slides/day22_cpp_strings.pdf"}],[{"title":"N/A","link":"#"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"Day 21","link":"../docs/questions/day22_questions"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"zooms":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]]}')},242:function(e){e.exports=JSON.parse('{"days":["Day 23 (10/24)","Day 24 (10/26)","Day 25 (10/28)"],"videos":[[{"title":"Intro to STL and templates","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=04905da6-f193-4a6e-9f3e-ae2300279736"}],[{"title":"More STL containers and iterators","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c08d312c-963d-485b-84bf-ae23002796be"},{"title":"STL algorithm","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c12342a6-6af3-4859-9da6-ae2300279661"}],[{"title":"C++ I/O stream and stringstream","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f35cdf8e-80d0-4d88-b9e3-ae2300279562"},{"title":"Intro to OO","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=090adf84-0330-4c2f-9c73-ae230027a599"}]],"slides":[[{"title":"Intro to STL and templates","link":"../slides/day23_stl_templates.pdf"}],[{"title":"More STL containers and iterators","link":"../slides/day24_more_stl_containers.pdf"},{"title":"STL algorithm","link":"../slides/day24_stl_algorithms.pdf"}],[{"title":"C++ I/O stream and stringstream","link":"../slides/day25_cpp_file_io_stringstream.pdf"},{"title":"Intro to OO","link":"../slides/day25_intro_to_oo.pdf"}]],"questions":[[{"title":"Day 23","link":"../docs/questions/day23_questions"}],[{"title":"Day 24","link":"../docs/questions/day24_questions"}],[{"title":"Day 25","link":"../docs/questions/day25_questions"}]],"exercises":[[{"title":"Ex23","link":"../docs/exercises/ex23"}],[{"title":"Ex24","link":"../docs/exercises/ex24"}],[{"title":"Ex25","link":"../docs/exercises/ex25"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]]}')},46:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),l=a(48),n=a.n(l);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources?s.a.createElement("table",{className:n.a.table},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,e.days[0]),s.a.createElement("th",null,e.days[1]),s.a.createElement("th",null,e.days[2]))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Videos"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Slides"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Recap Questions"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Exercise"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Additional Resources"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):s.a.createElement("div",null)}}}]);