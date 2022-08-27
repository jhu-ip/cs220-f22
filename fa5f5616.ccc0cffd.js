(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(146)),a=["components"],s={id:"github-ssh",title:"Github ssh authentication"},c={unversionedId:"resources/github-ssh",id:"resources/github-ssh",isDocsHomePage:!1,title:"Github ssh authentication",description:"This document explains how you can create an SSH public/private keypair for",source:"@site/docs\\resources\\github-ssh.md",slug:"/resources/github-ssh",permalink:"/cs220-f22/docs/resources/github-ssh",version:"current"},l=[{value:"Creating an ssh public/private keypair",id:"creating-an-ssh-publicprivate-keypair",children:[]},{value:"Copy your public ssh key to the clipboard",id:"copy-your-public-ssh-key-to-the-clipboard",children:[]},{value:"Add the public key to your Github account settings",id:"add-the-public-key-to-your-github-account-settings",children:[]},{value:"Using the SSH repository URL for your private repository",id:"using-the-ssh-repository-url-for-your-private-repository",children:[]},{value:"Changing your cloned private repository to use SSH authentication",id:"changing-your-cloned-private-repository-to-use-ssh-authentication",children:[]}],u={rightToc:l};function p(e){var t=e.components,s=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This document explains how you can create an SSH public/private keypair for\nyour ugrad account and configure your private repository to have Git communicate\nwith the remote server using SSH. Doing this will avoid the need for you to type your Github\nusername and password every time you do a remote operation such as\n",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," or ",Object(i.b)("inlineCode",{parentName:"p"},"git push"),"."),Object(i.b)("p",{parentName:"div"},"We recommend that you read and follow these instructions carefully.\nIf you follow them exactly, they should work."),Object(i.b)("p",{parentName:"div"},"Please note that configuring your Github account and private repository to use\nSSH is ",Object(i.b)("strong",{parentName:"p"},"completely optional"),".  If you would prefer to use HTTPS and use\nyour Github username and password to authenticate, that is perfectly fine."))),Object(i.b)("h2",{id:"creating-an-ssh-publicprivate-keypair"},"Creating an ssh public/private keypair"),Object(i.b)("p",null,"The first step you will need to do is to log into your ugrad account\nand run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -b 2048\n")),Object(i.b)("p",null,'When prompted for the file and passphrase, just hit "Enter" to accept the default option.\nThe output you should see in your terminal should look something like this:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[daveho@ugradx ~]$ ssh-keygen -t rsa -b 2048\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/daveho/.ssh/id_rsa): \nCreated directory '/home/daveho/.ssh'.\nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /home/daveho/.ssh/id_rsa\nYour public key has been saved in /home/daveho/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:STViaCEiEfnG/GXLBNJtN89FlIo+R6GDEvq0SQs+hx4 daveho@ugradx\nThe key's randomart image is:\n+---[RSA 2048]----+\n|++.....oo ooo.   |\n|....+.=.oo..o    |\n| + o = o.* +     |\n|  B + =.+.=      |\n| o B X oSo       |\n|  E B o o .      |\n| . +     o       |\n|  .              |\n|                 |\n+----[SHA256]-----+\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ssh-keygen")," command will create a directory in your Linux home directory called\n",Object(i.b)("inlineCode",{parentName:"p"},".ssh"),".  Make sure that this directory is only accessible by you by running the\ncommand"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ls -ld ~/.ssh\n")),Object(i.b)("p",null,"You should see output something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[daveho@ugradx ~]$ ls -ld ~/.ssh\ndrwx------. 2 daveho users 4 Jan 31 16:55 /home/daveho/.ssh\n")),Object(i.b)("p",null,"The permissions ",Object(i.b)("inlineCode",{parentName:"p"},"rwx------")," mean that only your account can read, write, or\nexecute (search) the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},".ssh")," directory, which is what you\nwant to see.  If you see different permissions, you can fix them by running the command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"chmod 0700 ~./.ssh\n")),Object(i.b)("h2",{id:"copy-your-public-ssh-key-to-the-clipboard"},"Copy your public ssh key to the clipboard"),Object(i.b)("p",null,"Print the contents of your ssh public key by running the command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_rsa.pub\n")),Object(i.b)("p",null,"You should see something like the following (it will probably appear as multiple\nlines of output in the terminal, but it's really one long line of text):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCqX2atYK7RtuODlxYZ52TpD1abeA7UxUXk4W39ZKKy3n0bguLOzNOveJNiF7ayGtbirGNBVC/f8snNGpFa8EVjW1Wx+yAVBU0sEAz4h1cYarGUNBhr+SgwGbpFHRDjptkkFpfUu6YoAkY6wv4u4s3396EHR0IttUdOqke9OIKt1nQwr1y30qpyXwLj8nd9s4frmFI4Zo/+Gyux1kYX2kg5C8Iao54HDqTRwSbfww/1KANfF3mjfLI9CI/B5y6C4e+JRa4qoN0dAVJxEeyjo3DztdDm18G1vy2Mo4Od7TvjvA2FirDFnonMknd4QoH0tlwtxk4xzFXjZSW2xEEPWxu9 daveho@ugradx\n")),Object(i.b)("p",null,"Copy the exact text of the public key ",Object(i.b)("strong",{parentName:"p"},"that you see in your terminal")," to the clipboard.\nIn Putty, the text you select is automatically copied to the clipboard.  In the MacOS Terminal,\nCommand-C copies selected text to the clipboard.  In most Linux terminal programs,\nControl-Shift-C copies selected text to the clipboard.\nDo ",Object(i.b)("strong",{parentName:"p"},"not")," copy the example key shown above, it will definitely not work."),Object(i.b)("h2",{id:"add-the-public-key-to-your-github-account-settings"},"Add the public key to your Github account settings"),Object(i.b)("p",null,"In a web browser, go to ",Object(i.b)("a",{parentName:"p",href:"https://github.com"},"github.com"),' and log in.  Click the menu icon in the\nupper right-hand corner of the window, and choose "Settings".  Click on "SSH and GPG keys".\nClick "New SSH key".  You should see something like the following:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Github settings add ssh key page",src:n(209).default})),Object(i.b)("p",null,'Paste the copied ssh public key to the "Key" text box, and enter a name for the\nkey in the "Title" text box.  This might look something like this:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Github settings add ssh key page",src:n(210).default})),Object(i.b)("p",null,'Now click "Add SSH key" to add the SSH key to your account settings.  You will be\nprompted to enter your Github account password to confirm the change.'),Object(i.b)("h2",{id:"using-the-ssh-repository-url-for-your-private-repository"},"Using the SSH repository URL for your private repository"),Object(i.b)("p",null,'Go to the Github web page for your private repository, and click on "Code". You should\nsee something like the following:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Github private repo page",src:n(211).default})),Object(i.b)("p",null,'Click "SSH" so that you see the SSH repository URL. You should see something like this:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Github private repo page",src:n(212).default})),Object(i.b)("p",null,"Copy the private Github URL to the clipboard."),Object(i.b)("h2",{id:"changing-your-cloned-private-repository-to-use-ssh-authentication"},"Changing your cloned private repository to use SSH authentication"),Object(i.b)("p",null,"The last thing you will need to do is to change the local clone of your private\nrepository to use SSH rather than HTTPS to access the remote origin repository.\nIn your ugrad account, run the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd ~\ncd PRIVATE-REPO-NAME\n")),Object(i.b)("p",null,"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"PRIVATE-REPO-NAME")," with the full name of your private Github repository.\nThis will be something like ",Object(i.b)("inlineCode",{parentName:"p"},"2021-spring-student-IDENT")," where ",Object(i.b)("inlineCode",{parentName:"p"},"IDENT")," is your\nJHED ID or a similar unique identifier."),Object(i.b)("p",null,"Now edit the ",Object(i.b)("inlineCode",{parentName:"p"},".git/config")," file within your private repository by running the\nfollowing command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"emacs .git/config\n")),Object(i.b)("p",null,"You should see something like the following:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Editing your git config",src:n(213).default})),Object(i.b)("p",null,"Comment out the line beginning ",Object(i.b)("inlineCode",{parentName:"p"},"url =")," by prefixing it with a ",Object(i.b)("inlineCode",{parentName:"p"},"#")," character, and add\na new ",Object(i.b)("inlineCode",{parentName:"p"},"url =")," line with the SSH repository URL.  This should look something like\nthe following:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Editing your git config",src:n(214).default})),Object(i.b)("p",null,"Save the file by typing ",Object(i.b)("strong",{parentName:"p"},"Control-X")," followed by ",Object(i.b)("strong",{parentName:"p"},"Control-S"),".  The exit\nEmacs by typing ",Object(i.b)("strong",{parentName:"p"},"Control-X")," followed by ",Object(i.b)("strong",{parentName:"p"},"Control-C"),"."),Object(i.b)("p",null,"Now, you are ready to test access to your remote repository using ssh.\nRun the command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," command runs without prompting you to enter a password, congratulations,\nyou are now using SSH to access your remote repository.  All subsequent ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"git push")," commands will execute without prompting you for a username and password."))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(a,".").concat(h)]||p[h]||b[h]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/github-new-ssh-key-1-f76930d16eb9cb0c2c5b5ab232a97247.png"},210:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/github-new-ssh-key-2-28e9bb4206c873808f007ef5727bf4e6.png"},211:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/private-repo-page-1-531433ffafb191c699475bc83b31ed91.png"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/private-repo-page-2-a9c40224cc5876f8d51361c22d1bcca9.png"},213:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/edit-git-config-1-50bcf6e111af053c9805838a28fb20c2.png"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/edit-git-config-2-a775cea33bb9b803b2c364d2f7ce5de1.png"}}]);