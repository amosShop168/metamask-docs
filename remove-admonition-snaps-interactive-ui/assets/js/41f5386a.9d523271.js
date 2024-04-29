"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9631],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const s={description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},o="Install MetaMask Flask",i={unversionedId:"get-started/install-flask",id:"get-started/install-flask",title:"Install MetaMask Flask",description:"Install MetaMask Flask to start building your own Snaps.",source:"@site/snaps/get-started/install-flask.md",sourceDirName:"get-started",slug:"/get-started/install-flask",permalink:"/remove-admonition-snaps-interactive-ui/snaps/get-started/install-flask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/install-flask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Get started",permalink:"/remove-admonition-snaps-interactive-ui/snaps/get-started"},next:{title:"Snaps quickstart",permalink:"/remove-admonition-snaps-interactive-ui/snaps/get-started/quickstart"}},l={},p=[{value:"About MetaMask Flask",id:"about-metamask-flask",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"install-metamask-flask"},"Install MetaMask Flask"),(0,r.yg)("p",null,"To get started building your own Snaps, install the MetaMask Flask browser extension on\n",(0,r.yg)("a",{parentName:"p",href:"https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"},"Google Chrome"),"\nor\n",(0,r.yg)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/metamask-flask/"},"Mozilla Firefox"),"."),(0,r.yg)("p",null,"Install Flask in a new browser profile, or disable any existing installed versions of MetaMask\nbefore installing Flask.\nRunning multiple instances of MetaMask in the same browser profile can break dapp interactions."),(0,r.yg)("admonition",{title:"Developers only",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask Flask is an experimental tool only for developers.\nIf you are not a developer, you should not install MetaMask Flask.")),(0,r.yg)("admonition",{title:"Do not import accounts with funds to Flask",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"We do not recommend importing your Secret Recovery Phrase from MetaMask stable to MetaMask Flask.\nIf you import accounts with funds into Flask, you do so at your own risk.")),(0,r.yg)("h2",{id:"about-metamask-flask"},"About MetaMask Flask"),(0,r.yg)("p",null,"MetaMask Flask is an experimental playground that provides developers access to upcoming MetaMask features.\nWhile a small set of audited Snaps are allowlisted in the stable version of the MetaMask browser extension, MetaMask Flask is intended for developers building and testing Snaps locally or from npm.\nAlso, new Snaps API features are enabled in Flask for testing and developer feedback before they're enabled in MetaMask stable.\nThese features appear in the documentation with the ",(0,r.yg)("strong",{parentName:"p"},"Flask")," or ",(0,r.yg)("strong",{parentName:"p"},"FLASK ONLY")," tag.\nYou can also view Flask-specific features by looking for the ",(0,r.yg)("strong",{parentName:"p"},"[","FLASK","]")," label in the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-extension/blob/develop/CHANGELOG.md"},"MetaMask Extension changelog"),"."))}u.isMDXComponent=!0}}]);