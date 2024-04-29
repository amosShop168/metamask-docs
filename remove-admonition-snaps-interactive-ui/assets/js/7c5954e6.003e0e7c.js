"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6373],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||c;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var a=n(58168),o=(n(96540),n(15680));const c={description:"Access a user's accounts and handle changed accounts.",sidebar_position:3},r="Access a user's accounts",s={unversionedId:"how-to/connect/access-accounts",id:"how-to/connect/access-accounts",title:"Access a user's accounts",description:"Access a user's accounts and handle changed accounts.",source:"@site/wallet/how-to/connect/access-accounts.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/access-accounts",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/connect/access-accounts",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/access-accounts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Access a user's accounts and handle changed accounts.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Detect MetaMask",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/connect/detect-metamask"},next:{title:"Manage networks",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/manage-networks"}},i={},u=[{value:"Create a connect button",id:"create-a-connect-button",level:2},{value:"Handle accounts",id:"handle-accounts",level:2},{value:"Disconnect a user&#39;s accounts",id:"disconnect-a-users-accounts",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"access-a-users-accounts"},"Access a user's accounts"),(0,o.yg)("p",null,"User accounts are used in a variety of contexts in Ethereum, including as identifiers and for\n",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/wallet/how-to/sign-data/"},"signing transactions"),".\nTo request a signature from a user or have a user approve a transaction, your dapp can\naccess the user's accounts using the\n",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,o.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,o.yg)("admonition",{title:"note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"eth_requestAccounts")," internally calls ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,o.yg)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"\nto ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/wallet/how-to/manage-permissions"},"request permission")," to call the restricted\n",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,o.yg)("inlineCode",{parentName:"a"},"eth_accounts"))," method.")),(0,o.yg)("p",null,"When accessing a user's accounts:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Only")," initiate a connection request in response to direct user action, such as\nselecting a ",(0,o.yg)("a",{parentName:"li",href:"#create-a-connect-button"},"connect button"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Always")," disable the connect button while the connection request is pending."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Never")," initiate a connection request on page load.")),(0,o.yg)("h2",{id:"create-a-connect-button"},"Create a connect button"),(0,o.yg)("admonition",{title:"Important",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"This section describes how to create a single connect button.\nWhen connecting to multiple wallets, use the ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/wallet/how-to/connect/"},"Connect to MetaMask")," guide to create\nmultiple connect buttons.")),(0,o.yg)("p",null,"We recommend providing a button to allow users to connect MetaMask to your dapp.\nSelecting this button should call ",(0,o.yg)("inlineCode",{parentName:"p"},"eth_requestAccounts")," to access the user's accounts."),(0,o.yg)("p",null,"For example, the following JavaScript code accesses the user's accounts when they select a connect\nbutton:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// You should only attempt to request the user\'s account in response to user interaction, such as\n// selecting a button. Otherwise, you pop-up spam the user like it\'s 1999. If you fail to retrieve\n// the user\'s account, you should encourage the user to initiate the attempt.\nconst ethereumButton = document.querySelector(".enableEthereumButton");\nconst showAccount = document.querySelector(".showAccount");\n\nethereumButton.addEventListener("click", () => {\n  getAccount();\n});\n\n// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can\n// select to initiate the request. MetaMask rejects any additional requests while the first is still\n// pending.\nasync function getAccount() {\n  const accounts = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({ method: "eth_requestAccounts" })\n      .catch((err) => {\n        if (err.code === 4001) {\n          // EIP-1193 userRejectedRequest error.\n          // If this happens, the user rejected the connection request.\n          console.log("Please connect to MetaMask.");\n        } else {\n          console.error(err);\n        }\n      });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n')),(0,o.yg)("p",null,"The following HTML code displays the button and the current account:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Display a connect button and the current account --\x3e\n<button class="enableEthereumButton">Enable Ethereum</button>\n<h2>Account: <span class="showAccount"></span></h2>\n')),(0,o.yg)("h2",{id:"handle-accounts"},"Handle accounts"),(0,o.yg)("p",null,"Use the ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,o.yg)("inlineCode",{parentName:"a"},"eth_accounts")),"\nRPC method to handle user accounts.\nListen to the ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/wallet/reference/provider-api#accountschanged"},(0,o.yg)("inlineCode",{parentName:"a"},"accountsChanged"))," provider event to\nbe notified when the user changes accounts."),(0,o.yg)("p",null,"The following code handles user accounts and detects when the user changes accounts:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'let currentAccount = null;\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({ method: "eth_accounts" })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    // Some unexpected error.\n    // For backwards compatibility reasons, if no accounts are available, eth_accounts returns an\n    // empty array.\n    console.error(err);\n  });\n\n// Note that this event is emitted on page load. If the array of accounts is non-empty, you\'re\n// already connected.\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handleAccountsChanged);\n\n// eth_accounts always returns an array.\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    // MetaMask is locked or the user has not connected any accounts.\n    console.log("Please connect to MetaMask.");\n  } else if (accounts[0] !== currentAccount) {\n    // Reload your interface with accounts[0].\n    currentAccount = accounts[0];\n    // Update the account displayed (see the HTML for the connect button)\n    showAccount.innerHTML = currentAccount;\n  }\n}\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"eth_accounts")," now returns the full list of accounts for which the user has permitted access to.\nPreviously, ",(0,o.yg)("inlineCode",{parentName:"p"},"eth_accounts")," returned at most one account in the ",(0,o.yg)("inlineCode",{parentName:"p"},"accounts"),' array.\nThe first account in the array will always be considered the user\'s "selected" account.')),(0,o.yg)("h2",{id:"disconnect-a-users-accounts"},"Disconnect a user's accounts"),(0,o.yg)("p",null,"Since ",(0,o.yg)("inlineCode",{parentName:"p"},"eth_requestAccounts")," internally calls ",(0,o.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," for permission to call\n",(0,o.yg)("inlineCode",{parentName:"p"},"eth_accounts"),", you can use ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_revokePermissions"},(0,o.yg)("inlineCode",{parentName:"a"},"wallet_revokePermissions")),"\nto revoke this permission, revoking your dapp's access to the user's accounts."),(0,o.yg)("p",null,"This is useful as a method for users to log out (or disconnect) from your dapp.\nYou can then use ",(0,o.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_getPermissions"},(0,o.yg)("inlineCode",{parentName:"a"},"wallet_getPermissions"))," to determine\nwhether the user is connected or disconnected to your dapp."),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/wallet/how-to/manage-permissions#revoke-permissions-example"},"how to revoke permissions")," for an example."))}d.isMDXComponent=!0}}]);