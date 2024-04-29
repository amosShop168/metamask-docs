"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6940],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(a),m=o,c=y["".concat(p,".").concat(m)]||y[m]||d[m]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(58168),o=(a(96540),a(15680));const r={description:"Submit your Snap for allowlisting on the MetaMask extension.",sidebar_position:8},i="Get allowlisted",s={unversionedId:"how-to/get-allowlisted",id:"how-to/get-allowlisted",title:"Get allowlisted",description:"Submit your Snap for allowlisting on the MetaMask extension.",source:"@site/snaps/how-to/get-allowlisted.md",sourceDirName:"how-to",slug:"/how-to/get-allowlisted",permalink:"/1261-notifications/snaps/how-to/get-allowlisted",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/get-allowlisted.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Submit your Snap for allowlisting on the MetaMask extension.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Publish a Snap",permalink:"/1261-notifications/snaps/how-to/publish-a-snap"},next:{title:"Connect to a Snap",permalink:"/1261-notifications/snaps/how-to/connect-to-a-snap"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Submit your Snap",id:"1-submit-your-snap",level:3},{value:"2. Allowlist review",id:"2-allowlist-review",level:3},{value:"3. Directory listing",id:"3-directory-listing",level:3},{value:"4. Distribute your Snap",id:"4-distribute-your-snap",level:3},{value:"5. Update your Snap",id:"5-update-your-snap",level:3}],u={toc:l},y="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(y,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"get-allowlisted"},"Get allowlisted"),(0,o.yg)("p",null,"Once you have built your Snap, tested it, and published it to npm, you can make it available to\nMetaMask users."),(0,o.yg)("p",null,"As part of the MetaMask Snaps Open Beta launch, individual Snaps must be put on an allowlist before users can install them.\nThis means that at this time, only selected, reviewed Snaps can be installed.\nIn the future, this system will be opened up."),(0,o.yg)("admonition",{title:"Important",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"By including a Snap on the allowlist, Consensys is not endorsing, recommending, or guaranteeing the\nsafety of a Snap for your use or use for any reason.\nAlways do your own research before installing a Snap.")),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"To be added to the allowlist, a Snap must: "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Have publicly available source code.\nYou don't need to publish your code with an open source license, but users should be able to read\nthe source code of the Snap package."),(0,o.yg)("li",{parentName:"ul"},"Be ",(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/how-to/publish-a-snap"},"published")," to npm."),(0,o.yg)("li",{parentName:"ul"},"Not impair our compliance with laws or regulations.")),(0,o.yg)("p",null,"Furthermore, if your Snap uses any of the following API methods related to key management, you must provide\nevidence of a third-party audit from an approved auditor:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/snaps-api#snap_getbip32entropy"},(0,o.yg)("inlineCode",{parentName:"a"},"snap_getBip32Entropy"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/snaps-api#snap_getbip32publickey"},(0,o.yg)("inlineCode",{parentName:"a"},"snap_getBip32PublicKey"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/snaps-api#snap_getbip44entropy"},(0,o.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/snaps-api#snap_getentropy"},(0,o.yg)("inlineCode",{parentName:"a"},"snap_getEntropy"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/1261-notifications/snaps/reference/snaps-api#snap_manageaccounts"},(0,o.yg)("inlineCode",{parentName:"a"},"snap_manageAccounts")))),(0,o.yg)("p",null,"The audit must cover the Snap source code that is to run within the Snaps system, and any modules\nused for key management.\nYou must provide the commit that was audited and the commit that has any fixes documented in the\naudit report."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"A list of approved third-party auditors and details about the audit process are available on the\n",(0,o.yg)("a",{parentName:"p",href:"https://consensys.notion.site/Audit-process-1acbc67819dc4631b7a3d6c664e387a3"},"MetaMask Snaps Builder Engagement Program"),".")),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("h3",{id:"1-submit-your-snap"},"1. Submit your Snap"),(0,o.yg)("p",null,"Fill out the ",(0,o.yg)("a",{parentName:"p",href:"https://go.metamask.io/snaps-directory-request"},"MetaMask Snaps Directory Information form"),".\nThe form requests information about your Snap, including the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap name")," - The name of your Snap.\nThis must match the ",(0,o.yg)("inlineCode",{parentName:"p"},"proposedName")," field in the Snap ",(0,o.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),'.\nYou cannot use these words in the name: "MetaMask," "Snap," "Meta," or "Mask."')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap builder name and URL")," - The company, project, or personal site for your brand, where users\ncan learn more about you.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap website URL")," - A website where users can interact with your Snap.\nIf your Snap does not require a website to be used, you can leave this blank.\nIf your Snap works with multiple websites, you can include the URLs of additional websites in the\n",(0,o.yg)("strong",{parentName:"p"},"long description"),", but this URL should be an official website designed to interact with your Snap.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap short description"),' - A one or two sentence description of your Snap.\nTry not to say "is a MetaMask Snap" \u2013 users already know this!')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap long description")," - A description of your Snap's features and how to use them.\nYou can use line breaks, lists, and URLs.\nYou cannot use HTML.\nIf applicable, describe quick steps to onboard and use the Snap.\nFor example: ",(0,o.yg)("em",{parentName:"p"},"After installing the Snap, visit the companion dapp at\n",(0,o.yg)("a",{parentName:"em",href:"https://voyager-snap.linea.build"},"https://voyager-snap.linea.build")," to connect an account and track your Linea Voyage progress."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"GitHub repository and npm package URLs")," - The public GitHub repo that hosts your Snap's\nsource code, and the npm package of your ",(0,o.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/how-to/publish-a-snap"},"published Snap"),".\nIf your Snap's source code is hosted on a different site, such as GitLab, you can link to that instead.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap version number to be allowlisted")," - The Snap version number as specified in ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json"),"\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),".\nMake sure that the version numbers match and that the Snap has been built with the correct ",(0,o.yg)("inlineCode",{parentName:"p"},"shasum"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Snap auditor and audit report")," - A PDF or URL of the ",(0,o.yg)("a",{parentName:"p",href:"#prerequisites"},"required audit report"),",\nif your Snap uses one or more of the key management API methods.\nIf your Snap doesn't require an audit, leave this field blank."),(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The audit report will be made public.\nYou can ask your auditor to publish the report on their website and provide the link to us."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Customer support details")," -\n",(0,o.yg)("a",{parentName:"p",href:"https://consensys.notion.site/Providing-User-Support-Information-cff79a7d896e4da6a2f8a17ce074e585"},"Customer support information"),"\nto ensure a smooth user experience for your Snap.\nThis allows MetaMask to escalate any issues that a user might encounter with your Snap.\nThe escalation contact will be kept confidential within MetaMask, and the rest of the information\nwill be public.\nYou must provide an escalation contact and at least one other customer support item.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Images")," - Screenshots or promotional images to help users get an idea of what your Snap can do.\nHere's your opportunity to provide compelling previews of your Snap!")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Demo video")," - A video walking through how to use your Snap.\nThis will help MetaMask review your Snap, and might also be used by the MetaMask marketing team."))),(0,o.yg)("h3",{id:"2-allowlist-review"},"2. Allowlist review"),(0,o.yg)("p",null,"Your Snap will be reviewed by the MetaMask Snaps team to ensure it is functional and well-designed.\nIf the Snap requires an audit, the team will review the audit report to ensure that all\nvulnerabilities with medium or higher risk have been addressed.\nAll Snaps require at least two approvals to be allowlisted."),(0,o.yg)("h3",{id:"3-directory-listing"},"3. Directory listing"),(0,o.yg)("p",null,"Once your Snap is on the allowlist, it will appear in the ",(0,o.yg)("a",{parentName:"p",href:"https://snaps.metamask.io"},"MetaMask Snaps Directory"),".\nYou can direct users to the directory to find and install your Snap. "),(0,o.yg)("h3",{id:"4-distribute-your-snap"},"4. Distribute your Snap"),(0,o.yg)("p",null,"You can deploy a companion dapp where users can learn about your Snap and install it, or you can\nintegrate your Snap with your existing dapp. "),(0,o.yg)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,o.yg)("a",{parentName:"p",href:"/1261-notifications/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"While testing your Snap, you might have designed your dapp to require MetaMask Flask.\nOnce your Snap is allowlisted, you should update your dapp to support any flavor of MetaMask,\nand show the orange MetaMask logo instead of the purple Flask logo. ")),(0,o.yg)("h3",{id:"5-update-your-snap"},"5. Update your Snap"),(0,o.yg)("p",null,"The allowlist uses strict versioning for all Snaps.\nAfter publishing a new version of your Snap to npm, you must re-submit it for allowlisting by\nfilling out the\n",(0,o.yg)("a",{parentName:"p",href:"https://go.metamask.io/snaps-directory-update-request"},"MetaMask Snaps Directory Information Update form"),".\nUsers will not be able to install a new version until it is allowlisted. "),(0,o.yg)("p",null,'You can also update any information about your Snap using the form.\nFor fields that you don\'t need to update, you can leave them blank or enter "N/A."\nWhen providing the new version to be allowlisted, you should also note whether previous versions of\nyour Snap should be removed from the allowlist (effectively, replaced with the new version).'))}d.isMDXComponent=!0}}]);