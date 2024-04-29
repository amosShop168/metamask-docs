"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1343],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(y,r(r({ref:n},c),{},{components:t})):a.createElement(y,r({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const i={sidebar_position:6,description:"Call an action when your Snap is installed or updated."},r="Lifecycle hooks",s={unversionedId:"features/lifecycle-hooks",id:"features/lifecycle-hooks",title:"Lifecycle hooks",description:"Call an action when your Snap is installed or updated.",source:"@site/snaps/features/lifecycle-hooks.md",sourceDirName:"features",slug:"/features/lifecycle-hooks",permalink:"/remove-admonition-snaps-interactive-ui/snaps/features/lifecycle-hooks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/lifecycle-hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Call an action when your Snap is installed or updated."},sidebar:"snapsSidebar",previous:{title:"Data storage",permalink:"/remove-admonition-snaps-interactive-ui/snaps/features/data-storage"},next:{title:"Localization",permalink:"/remove-admonition-snaps-interactive-ui/snaps/features/localization"}},l={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to implement lifecycle hooks",id:"1-request-permission-to-implement-lifecycle-hooks",level:3},{value:"2. Run an action on installation",id:"2-run-an-action-on-installation",level:3},{value:"3. Run an action on update",id:"3-run-an-action-on-update",level:3},{value:"Example",id:"example",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"lifecycle-hooks"},"Lifecycle hooks"),(0,o.yg)("p",null,"You can implement lifecycle hooks to automatically run an action, such as displaying a dialog or\nnotification, when a user installs or updates your Snap."),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("h3",{id:"1-request-permission-to-implement-lifecycle-hooks"},"1. Request permission to implement lifecycle hooks"),(0,o.yg)("p",null,"Request the ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,o.yg)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks")),"\npermission.\nAdd the following to your Snap's manifest file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n')),(0,o.yg)("h3",{id:"2-run-an-action-on-installation"},"2. Run an action on installation"),(0,o.yg)("p",null,"To run an action when a user installs your Snap, expose the\n",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/entry-points#oninstall"},(0,o.yg)("inlineCode",{parentName:"a"},"onInstall"))," entry point and implement the action.\nFor example, you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"onInstall")," to perform any initialization that is required upon installation."),(0,o.yg)("p",null,"The following example displays an ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/snaps-api#alert-dialog"},"alert dialog")," upon installation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Installation successful"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n')),(0,o.yg)("h3",{id:"3-run-an-action-on-update"},"3. Run an action on update"),(0,o.yg)("p",null,"To run an action when a user updates your Snap, expose the\n",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/entry-points#onupdate"},(0,o.yg)("inlineCode",{parentName:"a"},"onUpdate"))," entry point and implement the action.\nFor example, you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"onUpdate")," to perform any migrations that are required upon update."),(0,o.yg)("p",null,"The following example displays an ",(0,o.yg)("a",{parentName:"p",href:"/remove-admonition-snaps-interactive-ui/snaps/reference/snaps-api#alert-dialog"},"alert dialog")," upon update:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Update successful"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n')),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/lifecycle-hooks"},(0,o.yg)("inlineCode",{parentName:"a"},"@metamask/lifecycle-hooks-example-snap")),"\npackage for a full example of implementing lifecycle hooks."))}u.isMDXComponent=!0}}]);