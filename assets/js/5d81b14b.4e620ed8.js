(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7261],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"07-supporting-meta-transactions",title:"Supporting meta transactions"},s={unversionedId:"guides/smart-contract-integration/07-supporting-meta-transactions",id:"version-V2/guides/smart-contract-integration/07-supporting-meta-transactions",isDocsHomePage:!1,title:"Supporting meta transactions",description:"All Uniswap V2 pool tokens support meta-transaction approvals via the permit function. This obviates the need for a blocking approve transaction before programmatic interactions with pool tokens can occur.",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/07-supporting-meta-transactions.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/07-supporting-meta-transactions",permalink:"/quickswap-docs/guides/smart-contract-integration/07-supporting-meta-transactions",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/07-supporting-meta-transactions.md",version:"V2",sidebarPosition:7,frontMatter:{id:"07-supporting-meta-transactions",title:"Supporting meta transactions"},sidebar:"defaultSidebar",previous:{title:"getPair",permalink:"/quickswap-docs/guides/smart-contract-integration/06-getting-pair-addresses"},next:{title:"API Overview",permalink:"/quickswap-docs/reference/"}},c=[{value:"Domain Separator",id:"domain-separator",children:[]},{value:"Permit Typehash",id:"permit-typehash",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All Uniswap V2 pool tokens support meta-transaction approvals via the ",(0,i.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/pair-erc-20#permit"},"permit")," function. This obviates the need for a blocking approve transaction before programmatic interactions with pool tokens can occur."),(0,i.kt)("h1",{id:"erc-712"},"ERC-712"),(0,i.kt)("p",null,"In vanilla ERC-20 token contracts, owners may only register approvals by directly calling a function which uses ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," to permission itself. With meta-approvals, ownership and permissioning are derived from a signature passed into the function by the caller (sometimes referred to as the relayer). Because signing data with Ethereum private keys can be a tricky endeavor, Uniswap V2 relies on ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"ERC-712"),", a signature standard with widespread community support, to ensure user safety and wallet compatibility."),(0,i.kt)("h2",{id:"domain-separator"},"Domain Separator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"keccak256(\n  abi.encode(\n    keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),\n    keccak256(bytes(name)),\n    keccak256(bytes('1')),\n    chainId,\n    address(this)\n  )\n);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is always ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap V2"),", see ",(0,i.kt)("a",{parentName:"li",href:"/quickswap-docs/reference/smart-contracts/pair-erc-20#name"},"name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId")," is determined from the ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum-magicians.org/t/eip-1344-add-chain-id-opcode/1131"},"ERC-1344")," ",(0,i.kt)("inlineCode",{parentName:"li"},"chainid")," opcode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address(this)")," is the address of the pair, see ",(0,i.kt)("a",{parentName:"li",href:"/quickswap-docs/guides/javascript-sdk/05-getting-pair-addresses"},"Pair Addresses"),".")),(0,i.kt)("h2",{id:"permit-typehash"},"Permit Typehash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"keccak256('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)');`\n")))}u.isMDXComponent=!0}}]);