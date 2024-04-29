"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[242],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,y=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return a?t.createElement(y,i(i({ref:n},l),{},{components:a})):t.createElement(y,i({ref:n},l))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},18841:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const o={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},i="Create an account management companion dapp",c={unversionedId:"features/custom-evm-accounts/create-companion-dapp",id:"features/custom-evm-accounts/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/features/custom-evm-accounts/create-companion-dapp.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-companion-dapp",permalink:"/1261-notifications/snaps/features/custom-evm-accounts/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/1261-notifications/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/1261-notifications/snaps/features/custom-evm-accounts/create-account-snap"},next:{title:"Security guidelines",permalink:"/1261-notifications/snaps/features/custom-evm-accounts/security"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create a KeyringSnapRpcClient",id:"2-create-a-keyringsnaprpcclient",level:3},{value:"3. Call Account Management API methods",id:"3-call-account-management-api-methods",level:3},{value:"Example",id:"example",level:2}],l={toc:s},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.yg)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nCall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.yg)("admonition",{title:"see also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"An ",(0,r.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/features/custom-evm-accounts/create-account-snap"},"account management Snap")," set up."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.yg)("p",null,"Install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.yg)("h3",{id:"2-create-a-keyringsnaprpcclient"},"2. Create a KeyringSnapRpcClient"),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { KeyringSnapRpcClient } from "@metamask/keyring-api";\nimport { defaultSnapOrigin as snapId } from "../config";\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n')),(0,r.yg)("h3",{id:"3-call-account-management-api-methods"},"3. Call Account Management API methods"),(0,r.yg)("p",null,"You can now use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient")," to invoke\n",(0,r.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/reference/keyring-api/account-management/"},"Account Management API")," methods on your Snap."),(0,r.yg)("p",null,"For example, to call ",(0,r.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/reference/keyring-api/account-management/#keyringlist_accounts"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}u.isMDXComponent=!0}}]);