"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(h,p(p({ref:t},m),{},{components:n})):a.createElement(h,p({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<s;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},p="About the Snaps APIs",i={unversionedId:"learn/about-snaps/apis",id:"learn/about-snaps/apis",title:"About the Snaps APIs",description:"Learn about the Snaps APIs.",source:"@site/snaps/learn/about-snaps/apis.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/apis",permalink:"/1072-video-formats/snaps/learn/about-snaps/apis",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},sidebar:"snapsSidebar",previous:{title:"About Snaps",permalink:"/1072-video-formats/snaps/learn/about-snaps/"},next:{title:"Snaps files",permalink:"/1072-video-formats/snaps/learn/about-snaps/files"}},l={},o=[{value:"Snaps API",id:"snaps-api",level:2},{value:"MetaMask JSON-RPC API",id:"metamask-json-rpc-api",level:2},{value:"Dapp requests",id:"dapp-requests",level:3},{value:"Snap requests",id:"snap-requests",level:3},{value:"Custom JSON-RPC APIs",id:"custom-json-rpc-apis",level:2}],m={toc:o},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-the-snaps-apis"},"About the Snaps APIs"),(0,r.kt)("p",null,"Snaps, dapps, and MetaMask can communicate with each other using the ",(0,r.kt)("a",{parentName:"p",href:"#snaps-api"},"Snaps API"),",\n",(0,r.kt)("a",{parentName:"p",href:"#metamask-json-rpc-api"},"MetaMask JSON-RPC API"),", and ",(0,r.kt)("a",{parentName:"p",href:"#custom-json-rpc-apis"},"custom JSON-RPC APIs"),"."),(0,r.kt)("h2",{id:"snaps-api"},"Snaps API"),(0,r.kt)("p",null,"Snaps can access the global object ",(0,r.kt)("inlineCode",{parentName:"p"},"snap"),", which has one method: ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),".\nYou can use this object to make ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api"},"Snaps API")," requests.\nThese API methods allow Snaps to extend or modify the functionality of MetaMask."),(0,r.kt)("p",null,"To call each method, you must first ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/how-to/request-permissions"},"request permission")," in the Snap\nmanifest file.\nFor example, to call ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api#snap_notify"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_notify")),", first request the\n",(0,r.kt)("inlineCode",{parentName:"p"},"snap_notify")," permission:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_notify": {}\n}\n')),(0,r.kt)("p",null,"Your Snap can then call ",(0,r.kt)("inlineCode",{parentName:"p"},"snap_notify")," in its source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"await snap.request({\n  method: 'snap_notify',\n  params: {\n    type: 'inApp',\n    message: 'Hello, world!',\n  },\n});\n")),(0,r.kt)("h2",{id:"metamask-json-rpc-api"},"MetaMask JSON-RPC API"),(0,r.kt)("h3",{id:"dapp-requests"},"Dapp requests"),(0,r.kt)("p",null,"Dapps can install and communicate with Snaps using the following\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_getsnaps"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," - Gets the dapp's permitted Snaps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestsnaps"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))," - Requests permission to\ncommunicate with the specified Snaps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_snap"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_snap"))," - (Restricted) Calls the specified custom JSON-RPC\nAPI method of the specified Snap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_invokesnap"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," - (Restricted) Synonymous with ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_snap"),".")),(0,r.kt)("p",null,"A dapp must first request permission to communicate with a Snap using ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),".\nThe dapp can then call ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_snap")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_invokeSnap")," on the permitted Snap.\nFor example, to call ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_snap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"// Request permission to connect to the Snap.\nawait window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    'npm:hello-snap': {},\n  },\n});\n\n// Call the 'hello' method of the Snap using wallet_snap.\nconst response = await window.ethereum.request({\n  method: 'wallet_snap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(response); // 'world!'\n")),(0,r.kt)("h3",{id:"snap-requests"},"Snap requests"),(0,r.kt)("p",null,"Snaps can also call some MetaMask JSON-RPC API methods using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global, which is an\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," provider."),(0,r.kt)("p",null,"To expose ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," to the Snap execution environment, a Snap must first request the\n",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/permissions#endowmentethereum-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission.\nFor example, to call ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),", first request\nthe required permission:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n')),(0,r.kt)("p",null,"Your Snap can then call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," in its source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'await ethereum.request({\n  "method": "eth_requestAccounts"\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,r.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSnaps can only use it to make read requests, not to write to the blockchain or initiate transactions.\nSnaps can call all MetaMask API methods ",(0,r.kt)("strong",{parentName:"p"},"except")," the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestSnaps"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestPermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_revokePermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_revokePermissions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_addEthereumChain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_switchEthereumChain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_watchAsset"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_watchAsset"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_registerOnboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_registerOnboarding"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_scanQRCode"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_scanQRCode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/eth_sendRawTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/eth_decrypt"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_decrypt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet/reference/eth_getEncryptionPublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getEncryptionPublicKey")))),(0,r.kt)("h2",{id:"custom-json-rpc-apis"},"Custom JSON-RPC APIs"),(0,r.kt)("p",null,"Snaps can implement their own custom JSON-RPC APIs to communicate with dapps and other Snaps.\nTo do so, a Snap must expose the ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/entry-points#onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry\npoint and request the ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/permissions#endowmentrpc"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission."),(0,r.kt)("p",null,"The Snap's custom API is entirely up to you, as long as it's a valid\n",(0,r.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,r.kt)("admonition",{title:"Does my Snap need a custom API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,r.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/entry-points#ontransaction"},"transaction insights"),", you do not need to\nimplement a custom API.\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your Snap, you must implement a custom API.")),(0,r.kt)("p",null,"For example, to create a simple Snap with a custom API, first request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true // Enable dapps to make JSON-RPC requests.\n  }\n}\n')),(0,r.kt)("p",null,"Your Snap can then implement and expose a custom API using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a 'hello' JSON-RPC method to dapps.\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,r.kt)("p",null,"A dapp can then install the Snap and call the exposed method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// Request permission to connect to the Snap.\n// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    // Assuming the Snap is published to npm using the package name 'hello-snap'.\n    'npm:hello-snap': {},\n  },\n});\n\n// Invoke the 'hello' JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(response); // 'world!'\n")))}c.isMDXComponent=!0}}]);