(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3519],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7472:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"02-custom-interface-linking",title:"Custom Linking",tags:"frontend integration, documentation"},o={unversionedId:"guides/interface-integration/02-custom-interface-linking",id:"version-V2/guides/interface-integration/02-custom-interface-linking",isDocsHomePage:!1,title:"Query Parameters",description:"The Uniswap front-end supports URL query parameters to allow for custom linking to the Uniswap frontend. Users and developers can use these query parameters to link to the Uniswap frontend with custom prefilled settings.",source:"@site/versioned_docs/version-V2/guides/interface-integration/02-custom-interface-linking.md",sourceDirName:"guides/interface-integration",slug:"/guides/interface-integration/02-custom-interface-linking",permalink:"/quickswap-docs/guides/interface-integration/02-custom-interface-linking",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/interface-integration/02-custom-interface-linking.md",version:"V2",sidebarPosition:2,frontMatter:{id:"02-custom-interface-linking",title:"Custom Linking",tags:"frontend integration, documentation"},sidebar:"defaultSidebar",previous:{title:"Using the API",permalink:"/quickswap-docs/guides/interface-integration/01-using-the-api"},next:{title:"Iframe Integration",permalink:"/quickswap-docs/guides/interface-integration/03-iframe-integration"}},p=[{value:"Global",id:"global",children:[{value:"Theme Options",id:"theme-options",children:[]},{value:"Example Usage",id:"example-usage",children:[]}]},{value:"Swap Page",id:"swap-page",children:[{value:"Defaults",id:"defaults",children:[]},{value:"Constraints",id:"constraints",children:[]},{value:"Setting Amounts",id:"setting-amounts",children:[]},{value:"Example Usage",id:"example-usage-1",children:[]}]},{value:"Pool Page",id:"pool-page",children:[{value:"Add Liquidity",id:"add-liquidity",children:[]},{value:"Example Usage",id:"example-usage-2",children:[]}]},{value:"Remove Liquidity",id:"remove-liquidity",children:[{value:"Example Usage",id:"example-usage-3",children:[]}]}],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Uniswap front-end supports URL query parameters to allow for custom linking to the Uniswap frontend. Users and developers can use these query parameters to link to the Uniswap frontend with custom prefilled settings."),(0,i.kt)("p",null,"Each Page has specific available URL parameters that can be set. Global parameters can be used on all pages."),(0,i.kt)("p",null,"A parameter used on an incorrect page will have no effect on frontend settings. Parameters not set with a URL parameter will be set to standard frontend defaults."),(0,i.kt)("h2",{id:"global"},"Global"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"theme"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets them to dark or light mode.")))),(0,i.kt)("h3",{id:"theme-options"},"Theme Options"),(0,i.kt)("p",null,"Theme can be set as ",(0,i.kt)("inlineCode",{parentName:"p"},"light")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dark"),"."),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://app.uniswap.org/#/swap?theme=dark")),(0,i.kt)("h2",{id:"swap-page"},"Swap Page"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"inputCurrency"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Input currency that will be swapped for output currency.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"outputCurrency"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address or ETH")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Output currency that input currency will be swapped for.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"exactAmount"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The custom token amount to buy or sell.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"exactField"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The field to set custom token amount for. Must be ",(0,i.kt)("inlineCode",{parentName:"td"},"input")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"output"),".")))),(0,i.kt)("h3",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"ETH defaults as the input currency. When a different token is selected for either input or output ETH will default as the opposite selected currency."),(0,i.kt)("h3",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"Addresses must be valid ERC20 addresses. Slippage and amount values must be valid numbers accepted by the frontend ","(","or error will prevent from swapping",")",". Slippage can 0, or within the range 10-",">","9999 bips ","(","which converts to 0%, 0.01%-",">","99%",")"),(0,i.kt)("p",null,"When selecting ETH as the output currency a user must also choose an inputCurrency that is not ETH ","(","to prevent ETH being populated in both fields",")"),(0,i.kt)("h3",{id:"setting-amounts"},"Setting Amounts"),(0,i.kt)("p",null,"Two parameters, exactField and exactAmount can be used to set specific token amounts to be sold or bought. Both fields must be set in the URL or there will be no effect on the settings."),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x0F5D2fB29fb7d3CFeE444a200298f468908cC942")),(0,i.kt)("h2",{id:"pool-page"},"Pool Page"),(0,i.kt)("p",null,"The Pool page is made up of 2 subroutes: ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),"."),(0,i.kt)("h3",{id:"add-liquidity"},"Add Liquidity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Token0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pool to withdraw liquidity from. ","(","Must be an ERC20 address with an existing token",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Token1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pool to withdraw liquidity from. ","(","Must be an ERC20 address with an existing token",")")))),(0,i.kt)("h3",{id:"example-usage-2"},"Example Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://app.uniswap.org/#/add/0x6B175474E89094C44Da98b954EedeAC495271d0F-0xdAC17F958D2ee523a2206206994597C13D831ec7")),(0,i.kt)("h2",{id:"remove-liquidity"},"Remove Liquidity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Token0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pool to withdraw liquidity from. ","(","Must be an ERC20 address with an existing token",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Token1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pool to withdraw liquidity from. ","(","Must be an ERC20 address with an existing token",")")))),(0,i.kt)("p",null,"Dash seperated."),(0,i.kt)("h3",{id:"example-usage-3"},"Example Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://app.uniswap.org/#/remove/0x6B175474E89094C44Da98b954EedeAC495271d0F-0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")))}s.isMDXComponent=!0}}]);