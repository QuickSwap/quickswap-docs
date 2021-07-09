(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[8353],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5584:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n,a=r(2122),i=r(9756),o=(r(7294),r(3905)),s={id:"06-getting-pair-addresses",title:"Pair Addresses"},c={unversionedId:"guides/smart-contract-integration/06-getting-pair-addresses",id:"version-V2/guides/smart-contract-integration/06-getting-pair-addresses",isDocsHomePage:!1,title:"getPair",description:"The most obvious way to get the address for a pair is to call getPair on the factory. If the pair exists, this function will return its address, else address(0) (0x0000000000000000000000000000000000000000).",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/06-getting-pair-addresses.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/06-getting-pair-addresses",permalink:"/quickswap-docs/guides/smart-contract-integration/06-getting-pair-addresses",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/06-getting-pair-addresses.md",version:"V2",sidebarPosition:6,frontMatter:{id:"06-getting-pair-addresses",title:"Pair Addresses"},sidebar:"defaultSidebar",previous:{title:"Flash Swaps",permalink:"/quickswap-docs/guides/smart-contract-integration/05-using-flash-swaps"},next:{title:"Supporting meta transactions",permalink:"/quickswap-docs/guides/smart-contract-integration/07-supporting-meta-transactions"}},d=[{value:"Examples",id:"examples",children:[{value:"Solidity",id:"solidity",children:[]}]}],l=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),p={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The most obvious way to get the address for a pair is to call ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/01-factory#getpair"},"getPair")," on the factory. If the pair exists, this function will return its address, else ",(0,o.kt)("inlineCode",{parentName:"p"},"address(0)")," (",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The "canonical" way to determine whether or not a pair exists.'),(0,o.kt)("li",{parentName:"ul"},"Requires an on-chain lookup.")),(0,o.kt)("h1",{id:"create2"},"CREATE2"),(0,o.kt)("p",null,"Thanks to some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32"},"fancy footwork in the factory"),", we can also compute pair addresses ",(0,o.kt)("em",{parentName:"p"},"without any on-chain lookups")," because of ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1014"},"CREATE2"),". The following values are required for this technique:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)(l,{to:"/docs/v2/smart-contracts/factory/#address",mdxType:"Link"},"factory address"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"salt")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"keccak256(abi.encodePacked(token0, token1))"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"keccak256(init_code)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token0")," must be strictly less than ",(0,o.kt)("inlineCode",{parentName:"li"},"token1")," by sort order.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can be computed offline."),(0,o.kt)("li",{parentName:"ul"},"Requires the ability to perform ",(0,o.kt)("inlineCode",{parentName:"li"},"keccak256"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"solidity"},"Solidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"address factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;\naddress token0 = 0xCAFE000000000000000000000000000000000000; // change me!\naddress token1 = 0xF00D000000000000000000000000000000000000; // change me!\n\naddress pair = address(uint(keccak256(abi.encodePacked(\n  hex'ff',\n  factory,\n  keccak256(abi.encodePacked(token0, token1)),\n  hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'\n))));\n")))}u.isMDXComponent=!0}}]);