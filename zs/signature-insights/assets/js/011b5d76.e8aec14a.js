"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return t?s.createElement(f,o(o({ref:n},m),{},{components:t})):s.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(87462),a=(t(67294),t(3905));const r={description:"Resolve names to addresses and vice versa.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},o="Custom name resolution",i={unversionedId:"features/custom-name-resolution",id:"features/custom-name-resolution",title:"Custom name resolution",description:"Resolve names to addresses and vice versa.",source:"@site/snaps/features/custom-name-resolution.md",sourceDirName:"features",slug:"/features/custom-name-resolution",permalink:"/zs/signature-insights/snaps/features/custom-name-resolution",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-name-resolution.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Resolve names to addresses and vice versa.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Static files",permalink:"/zs/signature-insights/snaps/features/static-files"},next:{title:"Signature insights",permalink:"/zs/signature-insights/snaps/features/signature-insights"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to provide name resolution",id:"1-request-permission-to-provide-name-resolution",level:3},{value:"2. Implement custom name resolution",id:"2-implement-custom-name-resolution",level:3},{value:"Example",id:"example",level:2}],m={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-name-resolution"},"Custom name resolution"),(0,a.kt)("admonition",{type:"flaskOnly"}),(0,a.kt)("p",null,"You can implement custom domain resolution and reverse resolution using the following steps."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"1-request-permission-to-provide-name-resolution"},"1. Request permission to provide name resolution"),(0,a.kt)("p",null,"Request the ",(0,a.kt)("a",{parentName:"p",href:"/zs/signature-insights/snaps/reference/permissions#endowmentname-lookup"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:name-lookup"))," permission."),(0,a.kt)("p",null,"For example, to resolve Ethereum Mainnet domains, add the following to your Snap's manifest file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n    "endowment:name-lookup": {\n        "chains": ["eip155:1"]\n    }\n}\n')),(0,a.kt)("h3",{id:"2-implement-custom-name-resolution"},"2. Implement custom name resolution"),(0,a.kt)("p",null,"Export an ",(0,a.kt)("a",{parentName:"p",href:"/zs/signature-insights/snaps/reference/entry-points#onnamelookup"},(0,a.kt)("inlineCode",{parentName:"a"},"onNameLookup"))," entry point, which receives a\n",(0,a.kt)("inlineCode",{parentName:"p"},"chainId")," and either a ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),".\nThe following example implements a very basic resolution from Unstoppable Domains domain names to\nEthereum addresses in ",(0,a.kt)("inlineCode",{parentName:"p"},"onNameLookup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="snap/src/index.ts"',title:'"snap/src/index.ts"'},'import type { OnNameLookupHandler } from "@metamask/snaps-types";\n\nconst UNSTOPPABLE_API_KEY = "xxx";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n    const { chainId, domain } = request;\n\n    if (domain && chainId === "eip155:1") {\n        const response = await fetch(`https://api.unstoppabledomains.com/resolve/domains/${domain}`, {\n            headers: {\n                accept: "application/json",\n                authorization: `Bearer ${UNSTOPPABLE_API_KEY}`\n            },\n        });\n        const data = await response.json();\n        const resolvedAddress = data.records["crypto.ETH.address"];\n        if (address) {\n            return {\n                resolvedAddresses: [{ resolvedAddress, protocol: "Unstoppable Domains" }],\n            };\n        }\n    }\n\n    return null;\n};\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/name-lookup"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/name-lookup-example-snap")),"\npackage for a full example of implementing custom name resolution."))}c.isMDXComponent=!0}}]);