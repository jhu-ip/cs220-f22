(window.webpackJsonp=window.webpackJsonp||[]).push([[32,45],{161:function(e,t,a){"use strict";var l=a(0),s=a.n(l),n=a(156),i=a(147),o=a(48),r=a.n(o);const c=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:u,groupId:m,className:p}=e,{tabGroupChoices:h,setTabGroupChoices:k}=Object(n.a)(),[f,E]=Object(l.useState)(o),[b,w]=Object(l.useState)(!1);if(null!=m){const e=h[m];null!=e&&e!==f&&u.some((t=>t.value===e))&&E(e)}const y=e=>{E(e),null!=m&&k(m,e)},x=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||w(!0)},v=()=>{w(!1)};return Object(l.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",v),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",v)})),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},u.map((e=>{let{value:t,label:a}=e;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",r.a.tabItem,{"tabs__item--active":f===t}),style:b?{}:{outline:"none"},key:t,ref:e=>x.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(x,e.target,e),g(e)},onFocus:()=>y(t),onClick:()=>{y(t),w(!1)},onPointerDown:()=>w(!1)},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(a).filter((e=>e.props.value===f))[0]))}},162:function(e,t,a){"use strict";var l=a(0),s=a.n(l);t.a=function(e){return s.a.createElement("div",null,e.children)}},172:function(e,t,a){var l={"./wk1data.json":190,"./wk2data.json":191,"./wk3data.json":192};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}s.keys=function(){return Object.keys(l)},s.resolve=n,e.exports=s,s.id=172},190:function(e){e.exports=JSON.parse('{"days":["Day 1 (8/29)","Day 2 (8/31)","Day 3 (9/2)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bf3515d0-3a2c-4599-8fc2-ae220143ecfb"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Ex1 (Github account)","link":"../docs/exercises/ex1"}],[{"title":"Ex2","link":"../docs/exercises/ex2"}],[{"title":"Ex3-A","link":"../docs/exercises/ex3a"},{"title":"Ex3-B","link":"../docs/exercises/ex3b"}]],"resources":[[{"title":"Linux bootcamp","link":"https://cli-boot.camp/"},{"title":"Unix/Linux Tutorial","link":"https://www.cs.jhu.edu/~joanne/unix.html"},{"title":"Unix/Linux Referemce Card","link":"https://www.cs.jhu.edu/~joanne/unixRC.pdf"},{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"VS Code install walk-through","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9efa206a-6849-4bab-b630-ae3200303731"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"},{"title":"Creating a personal access token","link":"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"}]]}')},191:function(e){e.exports=JSON.parse('{"days":["Labor Day (9/5)","Day 4 (9/7)","Day 5 (9/9)"],"videos":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=45b14d44-3d4e-4fd7-b0c0-ae230027aef2"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=58f4d402-fd0d-4868-b805-ae230027ab93"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=06a4f1da-f6a1-4212-b686-ae230027ab33"}]],"slides":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"../slides/day04_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day05_arrays.pdf"},{"title":"Strings","link":"../slides/day05_c_strings.pdf"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"Day 4","link":"../docs/questions/day04_questions"}],[{"title":"Day 5","link":"../docs/questions/day05_questions"}]],"exercises":[[{"title":"N/A","link":"#"}],[{"title":"Ex4","link":"../docs/exercises/ex4"}],[{"title":"Ex5","link":"../docs/exercises/ex5"}]],"resources":[[],[],[]]}')},192:function(e){e.exports=JSON.parse('{"days":["Day 6 (9/10)","Day 7 (9/12)","Day 8 (9/14)"],"videos":[[{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ae149930-15ce-460c-a2df-ae230027aac0"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1de2958b-f8b8-4fae-ac47-ae230027aa77"}],[{"title":"Function declarations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bbef007b-88a8-4e42-bcc4-ae230027a8f4"},{"title":"Passing arrays to functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c18158bd-cf31-48c4-a2c0-ae230027a87e"},{"title":"Recursion","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=12215376-94e9-48dd-8d5a-ae230027937e"}],[{"title":"Separate compilation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76660996-f221-4bda-85bf-ae230027aa0b"},{"title":"Makefiles","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=956ae811-74a5-48f2-8d73-ae230027a9b0"},{"title":"Header guards","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76a9e1f6-07f3-483c-9341-ae230027a948"}]],"slides":[[{"title":"File I/O, assert, math functions","link":"../slides/day06_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day06_functions_command_line_arguments.pdf"}],[{"title":"Function declarations","link":"../slides/day07_function_declaration.pdf"},{"title":"Passing arrays to functions","link":"../slides/day07_passing_arrays_to_functions.pdf"},{"title":"Recursion","link":"../slides/day07_recursion.pdf"}],[{"title":"Separate compilation","link":"../slides/day08_separate_complication.pdf"},{"title":"Makefiles","link":"../slides/day08_makefiles.pdf"},{"title":"Header guards","link":"../slides/day08_header_guards.pdf"}]],"questions":[[{"title":"Day 6","link":"../docs/questions/day06_questions"}],[{"title":"Day 7","link":"../docs/questions/day07_questions"}],[{"title":"Day 8","link":"../docs/questions/day08_questions"}]],"exercises":[[{"title":"Ex6","link":"../docs/exercises/ex6"}],[{"title":"Ex7","link":"../docs/exercises/ex7"}],[{"title":"Ex8","link":"../docs/exercises/ex8"}]],"resources":[[],[],[{"title":"C Makefile Cheat Sheet","link":"https://cppcheatsheet.com/notes/c_make.html"}]]}')},47:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(49),i=a.n(n);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources?s.a.createElement("table",{className:i.a.table},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,e.days[0]),s.a.createElement("th",null,e.days[1]),s.a.createElement("th",null,e.days[2]))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Videos"),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.videos[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.videos[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.videos[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Slides"),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.slides[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.slides[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.slides[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Recap Questions"),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.questions[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.questions[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.questions[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Exercise"),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.exercises[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.exercises[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.exercises[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Additional Resources"),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.resources[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.resources[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:i.a.li},e.resources[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):s.a.createElement("div",null)}},91:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(153),i=a(161),o=a(162),r=a(47);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{let l=a(172)("./wk"+t+"data.json");e.push(s.a.createElement(o.a,{value:"w"+t},s.a.createElement(r.default,{days:l.days,videos:l.videos,slides:l.slides,questions:l.questions,exercises:l.exercises,resources:l.resources})))}catch(u){console.log("cannot read from ./data/wk"+t+"data.json")}var l=s.a.createElement(i.a,{defaultValue:"w3",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),c=new Array;for(t=8;t<=14;++t)try{let e=a(172)("./wk"+t+"data.json");c.push(s.a.createElement(o.a,{value:"w"+t},s.a.createElement(r.default,{days:e.days,videos:e.videos,slides:e.slides,questions:e.questions,exercises:e.exercises,resources:e.resources})))}catch(u){console.log("cannot read from ./data/wk"+t+"data.json")}var d=s.a.createElement(i.a,{defaultValue:"w8",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},c);return s.a.createElement(n.a,{title:"Schedule"},s.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses. See the\xa0",s.a.createElement("a",{href:"https://livejohnshopkins-my.sharepoint.com/:x:/g/personal/psimari2_jh_edu/EcUZ-ZTcHP5Pr8yi0RXkrRoBmU7t4RS7l81huU9vngzQwg?e=cPThWh",target:"_blank"},"tentative schedule"),"."),s.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},s.a.createElement(i.a,{block:"true",defaultValue:"c",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},s.a.createElement(o.a,{value:"c"},l),s.a.createElement(o.a,{value:"c++"},d))))}}}]);