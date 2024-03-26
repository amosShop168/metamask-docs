"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),s=r(85162);const i={description:"Get the base fee history."},l="Get the base fee history",u={unversionedId:"gas-api/api-reference/basefeehistory",id:"gas-api/api-reference/basefeehistory",title:"Get the base fee history",description:"Get the base fee history.",source:"@site/services/gas-api/api-reference/basefeehistory.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/basefeehistory",permalink:"/1072-video-formats/services/gas-api/api-reference/basefeehistory",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/basefeehistory.md",tags:[],version:"current",frontMatter:{description:"Get the base fee history."},sidebar:"servicesSidebar",previous:{title:"API reference",permalink:"/1072-video-formats/services/gas-api/api-reference/"},next:{title:"Get the base fee percentile",permalink:"/1072-video-formats/services/gas-api/api-reference/basefeepercentile"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],f={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-the-base-fee-history"},"Get the base fee history"),(0,n.kt)("p",null,"Returns the base fee history of the specified blockchain network for the previous 500 blocks."),(0,n.kt)("p",null,"The base fee is a part of the EIP-1559 upgrade to the Ethereum network, and it represents the\nminimum price a user must pay for their transaction to be included in a block."),(0,n.kt)("p",null,"This method can be useful for applications that need to display or analyze the historical base fee\ndata for a specific blockchain network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GET")," ",(0,n.kt)("inlineCode",{parentName:"p"},"https://gas.api.infura.io/networks/${chainId}/baseFeeHistory")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chainId"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - ID of the chain to query")),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"Array of historical base fees."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("p",null,"Include your ",(0,n.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the APIs."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"cURL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n   -u <API-KEY>:<API-KEY-SECRET> \\\n    'https://gas.api.infura.io/networks/1/baseFeeHistory'\n"))),(0,n.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\n\nconst apiKey = \'<API-KEY>\'; // replace with your API key\nconst apiKeySecret = \'<API-KEY-SECRET>\'; // replace with your API key secret\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/baseFeeHistory`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Base fee history:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n')))),(0,n.kt)("h3",{id:"response"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "14.585610312",\n  "16.407222984",\n  "16.687763116",\n  "16.357094117",\n  "15.82929799",\n  "15.21546789",\n  "17.113938208",\n  "16.92324819",\n  ...\n]\n')))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(87462),n=r(67294),o=r(86010),s=r(12466),i=r(70989),l=r(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:f}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=c[r].value;a!==i&&(f(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function p(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=(0,i.Y)(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},n.createElement(c,(0,a.Z)({},e,t)),n.createElement(p,(0,a.Z)({},e,t)))}function d(e){const t=(0,l.Z)();return n.createElement(f,(0,a.Z)({key:String(t)},e))}},70989:(e,t,r)=>{r.d(t,{Y:()=>f});var a=r(67294),n=r(16550),o=r(91980),s=r(67392),i=r(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??l(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[f,d]=p({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=f??m;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}}}]);