(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[1781],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return r?a.createElement(k,s(s({ref:t},d),{},{components:r})):a.createElement(k,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8627:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),s={id:"05-getting-pair-addresses",title:"Pair Addresses"},o={unversionedId:"guides/javascript-sdk/05-getting-pair-addresses",id:"version-V2/guides/javascript-sdk/05-getting-pair-addresses",isDocsHomePage:!1,title:"getPair",description:"The most obvious way to get the address for a pair is to call getPair on the factory. If the pair exists, this function will return its address, else address(0) (0x0000000000000000000000000000000000000000).",source:"@site/versioned_docs/version-V2/guides/javascript-sdk/05-getting-pair-addresses.md",sourceDirName:"guides/javascript-sdk",slug:"/guides/javascript-sdk/05-getting-pair-addresses",permalink:"/quickswap-docs/guides/javascript-sdk/05-getting-pair-addresses",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/javascript-sdk/05-getting-pair-addresses.md",version:"V2",sidebarPosition:5,frontMatter:{id:"05-getting-pair-addresses",title:"Pair Addresses"},sidebar:"defaultSidebar",previous:{title:"Trading",permalink:"/quickswap-docs/guides/javascript-sdk/04-trading"},next:{title:"Smart Contract Quick start",permalink:"/quickswap-docs/guides/smart-contract-integration/01-quick-start"}},c=[{value:"Examples",id:"examples",children:[{value:"TypeScript",id:"typescript",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The most obvious way to get the address for a pair is to call ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/01-factory#getpair"},"getPair")," on the factory. If the pair exists, this function will return its address, else ",(0,i.kt)("inlineCode",{parentName:"p"},"address(0)")," (",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "canonical" way to determine whether or not a pair exists.'),(0,i.kt)("li",{parentName:"ul"},"Requires an on-chain lookup.")),(0,i.kt)("h1",{id:"create2"},"CREATE2"),(0,i.kt)("p",null,"Thanks to some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32"},"fancy footwork in the factory"),", we can also compute pair addresses ",(0,i.kt)("em",{parentName:"p"},"without any on-chain lookups")," because of ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1014"},"CREATE2"),". The following values are required for this technique:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"/quickswap-docs/reference/smart-contracts/01-factory"},"factory address"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"salt")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keccak256(abi.encodePacked(token0, token1))"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keccak256(init_code)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token0")," must be strictly less than ",(0,i.kt)("inlineCode",{parentName:"li"},"token1")," by sort order.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be computed offline."),(0,i.kt)("li",{parentName:"ul"},"Requires the ability to perform ",(0,i.kt)("inlineCode",{parentName:"li"},"keccak256"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"This example makes use of the ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/SDK/01-getting-started"},"Uniswap SDK"),". In reality, the SDK computes pair addresses behind the scenes, obviating the need to compute them manually like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FACTORY_ADDRESS, INIT_CODE_HASH } from '@uniswap/sdk'\nimport { pack, keccak256 } from '@ethersproject/solidity'\nimport { getCreate2Address } from '@ethersproject/address'\n\nconst token0 = '0xCAFE000000000000000000000000000000000000' // change me!\nconst token1 = '0xF00D000000000000000000000000000000000000' // change me!\n\nconst pair = getCreate2Address(\n  FACTORY_ADDRESS,\n  keccak256(['bytes'], [pack(['address', 'address'], [token0, token1])]),\n  INIT_CODE_HASH\n)\n")))}d.isMDXComponent=!0}}]);