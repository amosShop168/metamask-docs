"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1180],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?t.createElement(g,i(i({ref:n},u),{},{components:a})):t.createElement(g,i({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78296:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var t=a(58168),r=(a(96540),a(15680)),l=a(4865),i=a(19365);const s={description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},o="Wallet API for Snaps",p={unversionedId:"reference/wallet-api-for-snaps",id:"reference/wallet-api-for-snaps",title:"Wallet API for Snaps",description:"See the Wallet API for Snaps reference.",source:"@site/snaps/reference/wallet-api-for-snaps.md",sourceDirName:"reference",slug:"/reference/wallet-api-for-snaps",permalink:"/1261-notifications/snaps/reference/wallet-api-for-snaps",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/wallet-api-for-snaps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Snaps API",permalink:"/1261-notifications/snaps/reference/snaps-api"},next:{title:"Snaps command line",permalink:"/1261-notifications/snaps/reference/cli"}},u={},m=[{value:"<code>wallet_getSnaps</code>",id:"wallet_getsnaps",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>wallet_requestSnaps</code>",id:"wallet_requestsnaps",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>wallet_snap</code>",id:"wallet_snap",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"<code>wallet_invokeSnap</code>",id:"wallet_invokesnap",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3}],c={toc:m},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"wallet-api-for-snaps"},"Wallet API for Snaps"),(0,r.yg)("p",null,"Dapps can install and communicate with Snaps using a subset of the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/concepts/wallet-api/#json-rpc-api"},"Wallet JSON-RPC API"),".\nThis page is a reference for those Snaps-specific methods."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"See the ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"Wallet JSON-RPC API interactive reference")," for the other\nmethods dapps can call.")),(0,r.yg)("h2",{id:"wallet_getsnaps"},(0,r.yg)("inlineCode",{parentName:"h2"},"wallet_getSnaps")),(0,r.yg)("p",null,"Returns the IDs of the dapp's permitted Snaps and some relevant metadata."),(0,r.yg)("h3",{id:"returns"},"Returns"),(0,r.yg)("p",null,"An object mapping the IDs of permitted Snaps to their metadata:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initialPermissions"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The initial permissions of the Snap, which will be requested when\nthe Snap is installed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"version"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The version of the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"enabled"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is enabled."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"blocked"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is blocked.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_getSnaps",\n  "params": []\n});\n'))),(0,r.yg)(i.A,{value:"Result",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n')))),(0,r.yg)("h2",{id:"wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"h2"},"wallet_requestSnaps")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/how-to/request-permissions#request-permissions-from-a-dapp"},"Requests permission")," for a dapp\nto communicate with the specified Snaps and attempts to install them if they're not already installed."),(0,r.yg)("p",null,"If the Snap version range is specified, MetaMask attempts to install a version of the Snap that\nsatisfies the range.\nIf a compatible version of the Snap is already installed, the request succeeds.\nIf an incompatible version is installed, MetaMask attempts to update the Snap to the latest version\nthat satisfies the range.\nThe request succeeds if the Snap is successfully installed."),(0,r.yg)("p",null,"If the installation of any Snap fails, this method returns the error that caused the failure."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"A dapp must call this method on Snap before calling ",(0,r.yg)("a",{parentName:"p",href:"#wallet_snap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_snap"))," or\n",(0,r.yg)("a",{parentName:"p",href:"#wallet_invokesnap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," on the Snap.")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"An object mapping the IDs of the requested Snaps to optional SemVer version ranges.\nThe SemVer version ranges use the same semantics as npm ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," ranges."),(0,r.yg)("h3",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,"An object mapping the IDs of permitted Snaps to their metadata:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initialPermissions"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The initial permissions of the Snap, which will be request when\nthe Snap is installed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"version"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The version of the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"enabled"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is enabled."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"blocked"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is blocked.")),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_requestSnaps",\n  "params": [\n    {\n      "npm:@metamask/example-snap": {},\n      "npm:fooSnap": {\n        "version": "^1.0.2"\n      }\n    }\n  ]\n});\n'))),(0,r.yg)(i.A,{value:"Result",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  },\n  "npm:fooSnap": {\n    "version": "1.0.5",\n    "id": "npm:fooSnap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n')))),(0,r.yg)("h2",{id:"wallet_snap"},(0,r.yg)("inlineCode",{parentName:"h2"},"wallet_snap")),(0,r.yg)("p",null,"Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,r.yg)("a",{parentName:"p",href:"#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,r.yg)("p",null,"This method is synonymous to ",(0,r.yg)("a",{parentName:"p",href:"#wallet_invokesnap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap")),"."),(0,r.yg)("h3",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"snapId"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap to invoke."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"object")," - The JSON-RPC request object to send to the invoked Snap.")),(0,r.yg)("h3",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,"The result of the Snap method call."),(0,r.yg)("h3",{id:"example-2"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_snap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'))),(0,r.yg)(i.A,{value:"Result",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")))),(0,r.yg)("h2",{id:"wallet_invokesnap"},(0,r.yg)("inlineCode",{parentName:"h2"},"wallet_invokeSnap")),(0,r.yg)("p",null,"Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,r.yg)("a",{parentName:"p",href:"#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,r.yg)("p",null,"This method is synonymous to ",(0,r.yg)("a",{parentName:"p",href:"#wallet_snap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_snap")),"."),(0,r.yg)("h3",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"snapId"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap to invoke."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"object")," - The JSON-RPC request object to send to the invoked Snap.")),(0,r.yg)("h3",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,"The result of the Snap method call."),(0,r.yg)("h3",{id:"example-3"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_invokeSnap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'))),(0,r.yg)(i.A,{value:"Result",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")))))}g.isMDXComponent=!0},19365:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>d});var t=a(58168),r=a(96540),l=a(20053),i=a(23104),s=a(47751),o=a(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:n,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,a=m.indexOf(n),t=u[a].value;t!==s&&(c(n),o(t))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;n=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;n=m[a]??m[m.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},u.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>m.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":s===n})}),a??n)})))}function m(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function c(e){const n=(0,s.u)(e);return r.createElement("div",{className:(0,l.A)("tabs-container",p.tabList)},r.createElement(u,(0,t.A)({},e,n)),r.createElement(m,(0,t.A)({},e,n)))}function d(e){const n=(0,o.A)();return r.createElement(c,(0,t.A)({key:String(n)},e))}},47751:(e,n,a)=>{a.d(n,{u:()=>c});var t=a(96540),r=a(56347),l=a(57485),i=a(31682),s=a(89466);function o(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??o(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function c(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,s.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),y=(()=>{const e=c??g;return u({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,l]),tabValues:l}}}}]);