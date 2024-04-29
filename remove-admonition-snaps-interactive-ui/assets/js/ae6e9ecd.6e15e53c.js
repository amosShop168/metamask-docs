"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5693],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},a="Restrict a Snap's RPC API methods",s={unversionedId:"how-to/restrict-rpc-api",id:"how-to/restrict-rpc-api",title:"Restrict a Snap's RPC API methods",description:"Restrict your Snap's RPC API methods.",source:"@site/snaps/how-to/restrict-rpc-api.md",sourceDirName:"how-to",slug:"/how-to/restrict-rpc-api",permalink:"/remove-admonition-snaps-interactive-ui/snaps/how-to/restrict-rpc-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/restrict-rpc-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Use environment variables",permalink:"/remove-admonition-snaps-interactive-ui/snaps/how-to/use-environment-variables"},next:{title:"Test a Snap",permalink:"/remove-admonition-snaps-interactive-ui/snaps/how-to/test-a-snap"}},p={},c=[{value:"Restrict the whole API",id:"restrict-the-whole-api",level:2},{value:"Restrict by method and origin",id:"restrict-by-method-and-origin",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"restrict-a-snaps-rpc-api-methods"},"Restrict a Snap's RPC API methods"),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"dapps")," caveat of the ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/permissions#endowmentrpc"},(0,o.yg)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission\nis set to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", any dapp can call the Snap's RPC API by default.\nYou can ",(0,o.yg)("a",{parentName:"p",href:"#restrict-the-whole-api"},"restrict the whole API")," to specific dapp origins or\n",(0,o.yg)("a",{parentName:"p",href:"#restrict-by-method-and-origin"},"restrict the API by method and origin"),"."),(0,o.yg)("h2",{id:"restrict-the-whole-api"},"Restrict the whole API"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"endowment:rpc")," permission has an optional\n",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/permissions#allowed-origins"},(0,o.yg)("inlineCode",{parentName:"a"},"allowedOrigins"))," caveat.\nYou can use this to restrict the domains that are allowed to make calls to the Snap's RPC API."),(0,o.yg)("h2",{id:"restrict-by-method-and-origin"},"Restrict by method and origin"),(0,o.yg)("p",null,"Sometimes a more granular control is required, such as filtering by method ",(0,o.yg)("em",{parentName:"p"},"and")," caller origin."),(0,o.yg)("p",null,"You can restrict by method and origin using the ",(0,o.yg)("inlineCode",{parentName:"p"},"origin")," parameter of the\n",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/entry-points#onrpcrequest"},(0,o.yg)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point.\nFor example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler, UnauthorizedError } from "@metamask/snaps-sdk";\n\ntype MethodPermission = "*" | string[];\n\nconst RPC_PERMISSIONS: Record<string, MethodPermission> = {\n  hello: "*",\n  secureMethod: [\n    "https://metamask.io",\n    "https://www.mydomain.com",\n  ]\n};\n\nconst isAllowed = (method: string, origin: string) => {\n  return RPC_PERMISSIONS[method] === "*" || RPC_PERMISSIONS[method].includes(origin);\n};\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Check permissions.\n  if (!isAllowed(request.method, origin)) {\n    throw new UnauthorizedError(`Method ${request.method} not authorized for origin ${origin}.`);\n  }\n\n  switch (request.method) {\n    case "hello":\n      return "world!";\n\n    case "secureMethod":\n      return "The secret is: 42";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')),(0,o.yg)("p",null,"You can construct more powerful filtering methods using regular expressions or any other logic of\nyour choice."))}m.isMDXComponent=!0}}]);