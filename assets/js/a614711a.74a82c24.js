(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[1795],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3887:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"04-trading",title:"Trading",tags:"SDK, developer-guides, documentation"},s={unversionedId:"guides/javascript-sdk/04-trading",id:"version-V2/guides/javascript-sdk/04-trading",isDocsHomePage:!1,title:"Trading",description:"Looking for a quickstart?",source:"@site/versioned_docs/version-V2/guides/javascript-sdk/04-trading.md",sourceDirName:"guides/javascript-sdk",slug:"/guides/javascript-sdk/04-trading",permalink:"/quickswap-docs/guides/javascript-sdk/04-trading",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/guides/javascript-sdk/04-trading.md",version:"V2",sidebarPosition:4,frontMatter:{id:"04-trading",title:"Trading",tags:"SDK, developer-guides, documentation"},sidebar:"defaultSidebar",previous:{title:"Pricing",permalink:"/quickswap-docs/guides/javascript-sdk/03-pricing"},next:{title:"getPair",permalink:"/quickswap-docs/guides/javascript-sdk/05-getting-pair-addresses"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Looking for a ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/guides/javascript-sdk/01-quick-start"},"quickstart"),"?")),(0,o.kt)("p",null,"The SDK ",(0,o.kt)("em",{parentName:"p"},"cannot execute trades or send transactions on your behalf"),". Rather, it offers utility classes and functions which make it easy to calculate the data required to safely interact with Uniswap. Nearly everything you need to safely transact with Uniswap is provided by the ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/SDK/05-trade"},"Trade")," entity. However, it is your responsibility to use this data to send transactions in whatever context makes sense for your application."),(0,o.kt)("p",null,"This guide will focus exclusively on sending a transaction to the ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/router02"},"currently recommended Uniswap router")),(0,o.kt)("h1",{id:"sending-a-transaction-to-the-router"},"Sending a Transaction to the Router"),(0,o.kt)("p",null,"Let's say we want to trade 1 WETH for as much DAI as possible:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, WETH, Fetcher, Trade, Route, TokenAmount, TradeType } from '@uniswap/sdk'\n\nconst DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)\n\n// note that you may want/need to handle this async code differently,\n// for example if top-level await is not an option\nconst pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])\n\nconst route = new Route([pair], WETH[DAI.chainId])\n\nconst amountIn = '1000000000000000000' // 1 WETH\n\nconst trade = new Trade(route, new TokenAmount(WETH[DAI.chainId], amountIn), TradeType.EXACT_INPUT)\n")),(0,o.kt)("p",null,"So, we've constructed a trade entity, but how do we use it to actually send a transaction? There are still a few pieces we need to put in place."),(0,o.kt)("p",null,"Before going on, we should explore how ETH works in the context of trading. Internally, the SDK uses WETH, as all Uniswap V2 pairs use WETH under the hood. However, it's perfectly possible for you as an end user to use ETH, and rely on the router to handle converting to/from WETH. So, let's use ETH."),(0,o.kt)("p",null,"The first step is selecting the appropriate router function. The names of router functions are intended to be self-explanatory; in this case we want ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/smart-contracts/router02#swapexactethfortokens"},"swapExactETHForTokens"),", because we're swapping an exact amount of ETH for tokens."),(0,o.kt)("p",null,"That Solidity interface for this function is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\n  external\n  payable\n  returns (uint[] memory amounts);\n")),(0,o.kt)("p",null,"Jumping back to our trading code, we can construct all the necessary parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Percent } from '@uniswap/sdk'\n\nconst slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%\n\nconst amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex\nconst path = [WETH[DAI.chainId].address, DAI.address]\nconst to = '' // should be a checksummed recipient address\nconst deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time\nconst value = trade.inputAmount.raw // // needs to be converted to e.g. hex\n")),(0,o.kt)("p",null,"The slippage tolerance encodes ",(0,o.kt)("em",{parentName:"p"},"how large of a price movement we're willing to tolerate before our trade will fail to execute"),". Since Ethereum transactions are broadcast and confirmed in an adversarial environment, this tolerance is the best we can do to protect ourselves against price movements. We use this slippage tolerance to calculate the ",(0,o.kt)("em",{parentName:"p"},"minumum")," amount of DAI we must receive before our trade reverts, thanks to ",(0,o.kt)("a",{parentName:"p",href:"/quickswap-docs/reference/SDK/05-trade#minimumamountout-since-204"},"minimumAmountOut"),". Note that this code calculates this worst-case outcome ",(0,o.kt)("em",{parentName:"p"},"assuming that the current price, i.e the route's mid price,")," is fair (usually a good assumption because of arbitrage)."),(0,o.kt)("p",null,"The path is simply the ordered list of token addresses we're trading through, in our case WETH and DAI (note that we use the WETH address, even though we're using ETH). "),(0,o.kt)("p",null,"The to address is the address that will receive the DAI."),(0,o.kt)("p",null,"The deadline is the Unix timestamp after which the transaction will fail, to protect us in the case that our transaction takes a long time to confirm and we wish to rescind our trade."),(0,o.kt)("p",null,"The value is the amount of ETH that must be included as the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.value")," in our transaction."))}d.isMDXComponent=!0}}]);