"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const s={description:"Display custom modals using the JavaScript SDK.",sidebar_position:4,tags:["JavaScript SDK"]},r="Display custom modals",i={unversionedId:"how-to/display/custom-modals",id:"how-to/display/custom-modals",title:"Display custom modals",description:"Display custom modals using the JavaScript SDK.",source:"@site/wallet/how-to/display/custom-modals.md",sourceDirName:"how-to/display",slug:"/how-to/display/custom-modals",permalink:"/1163-snaps-best-practices/wallet/how-to/display/custom-modals",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/custom-modals.md",tags:[{label:"JavaScript SDK",permalink:"/1163-snaps-best-practices/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:4,frontMatter:{description:"Display custom modals using the JavaScript SDK.",sidebar_position:4,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Display a dapp icon",permalink:"/1163-snaps-best-practices/wallet/how-to/display/icon"},next:{title:"Add a network",permalink:"/1163-snaps-best-practices/wallet/how-to/add-network"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a custom modal component",id:"1-create-a-custom-modal-component",level:3},{value:"2. Implement custom modal logic",id:"2-implement-custom-modal-logic",level:3},{value:"3. Test your custom modal",id:"3-test-your-custom-modal",level:3},{value:"Example",id:"example",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display-custom-modals"},"Display custom modals"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/concepts/sdk/"},"MetaMask SDK")," to display custom MetaMask modals."),(0,o.kt)("p",null,"When integrating a web dapp with MetaMask, you can enhance the user experience by customizing the\nlogic and user interface of the displayed modals, which initiate user interactions such as prompting\nthe user to install MetaMask.\nThis page describes how to create a custom modal in React, but you can adapt the implementation to\nother web frameworks such as Vue.js or pure HTML/JavaScript."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"MetaMask SDK set up in your JavaScript dapp.\nThis example uses the ",(0,o.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/react/"},"MetaMask React SDK"),"."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-create-a-custom-modal-component"},"1. Create a custom modal component"),(0,o.kt)("p",null,"Create a custom modal component that aligns with your dapp's design and functionality requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nconst CustomModal = ({ onClose }) => (\n    <div className="modal">\n        <button onClick={onClose}>Close</button>\n    </div>\n);\n\nexport default CustomModal;\n')),(0,o.kt)("h3",{id:"2-implement-custom-modal-logic"},"2. Implement custom modal logic"),(0,o.kt)("p",null,"When initializing ",(0,o.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/react/#3-wrap-your-project-with-metamaskprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaMaskProvider")),",\nuse the ",(0,o.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/reference/sdk-js-options#modals"},(0,o.kt)("inlineCode",{parentName:"a"},"modals"))," SDK option to set up custom behavior\nfor scenarios such as when MetaMask isn't installed.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskProvider } from "@metamask/sdk-react";\nimport CustomModal from "./CustomModal";\nimport ReactDOM from "react-dom";\n\nconst App = () => (\n    <MetaMaskProvider\n        sdkOptions={{\n            modals: {\n                install: ({ link }) => {\n                    let modalContainer = null;\n\n                    return {\n                        mount: () => {\n                            modalContainer = document.createElement("div");\n                            document.body.appendChild(modalContainer);\n\n                            ReactDOM.render(\n                                <CustomModal\n                                    onClose={() => {\n                                        ReactDOM.unmountComponentAtNode(\n                                            modalContainer\n                                        );\n                                        modalContainer.remove();\n                                    }}\n                                />,\n                                modalContainer\n                            );\n                        },\n                        unmount: () => {\n                            if (modalContainer) {\n                                ReactDOM.unmountComponentAtNode(modalContainer);\n                                modalContainer.remove();\n                            }\n                        },\n                    };\n                },\n            },\n        }}\n    >\n        {/* Other components */}\n    </MetaMaskProvider>\n);\n\nexport default App;\n')),(0,o.kt)("h3",{id:"3-test-your-custom-modal"},"3. Test your custom modal"),(0,o.kt)("p",null,"Test your dapp to ensure the custom modal operates as intended, especially in scenarios such as when\nMetaMask isn't installed."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom modal gif",src:a(5378).Z,width:"800",height:"360"}))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-with-custom-modal"},"example React dapp with a custom modal\nimplementation"),".\nThis example can serve as a starting point for understanding the approach, which you can then adapt\nto other web frameworks as needed."))}d.isMDXComponent=!0},5378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-modal-b06fd8cd12d48799411b83cb1d152460.gif"}}]);