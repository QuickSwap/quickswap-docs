(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[6523],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(i),h=a,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return i?n.createElement(m,o(o({ref:t},d),{},{components:i})):n.createElement(m,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1424:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=i(2122),a=i(9756),r=(i(7294),i(3905)),o={id:"03-understanding-returns",title:"Understanding Returns",tags:"pools, documentation"},s={unversionedId:"concepts/advanced-topics/03-understanding-returns",id:"version-V2/concepts/advanced-topics/03-understanding-returns",isDocsHomePage:!1,title:"Understanding Returns",description:"Uniswap incentivizes users to add liquidity to trading pools by rewarding providers with the fees generated when other users trade with those pools. Market making, in general, is a complex activity. There is a risk of losing money during large and sustained movement in the underlying asset price compared to simply holding an asset.",source:"@site/versioned_docs/version-V2/concepts/03-advanced-topics/03-understanding-returns.md",sourceDirName:"concepts/03-advanced-topics",slug:"/concepts/advanced-topics/03-understanding-returns",permalink:"/quickswap-docs/concepts/advanced-topics/03-understanding-returns",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/03-advanced-topics/03-understanding-returns.md",version:"V2",sidebarPosition:3,frontMatter:{id:"03-understanding-returns",title:"Understanding Returns",tags:"pools, documentation"},sidebar:"defaultSidebar",previous:{title:"How are prices determined?",permalink:"/quickswap-docs/concepts/advanced-topics/02-pricing"},next:{title:"Audit & Formal Verification",permalink:"/quickswap-docs/concepts/advanced-topics/04-security"}},l=[{value:"Why is my liquidity worth less than I put in?",id:"why-is-my-liquidity-worth-less-than-i-put-in",children:[]}],u={toc:l};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Uniswap incentivizes users to add liquidity to trading pools by rewarding providers with the fees generated when other users trade with those pools. Market making, in general, is a complex activity. There is a risk of losing money during large and sustained movement in the underlying asset price compared to simply holding an asset."),(0,r.kt)("h1",{id:"risks"},"Risks"),(0,r.kt)("p",null,"To understand the risks associated with providing liquidity you can read ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2"},"https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2")," to get an in-depth look at how to conceptualize a liquidity position."),(0,r.kt)("h1",{id:"example-from-the-article"},"Example from the article"),(0,r.kt)("blockquote",null,(0,r.kt)("p",null,"Consider the case where a liquidity provider adds 10,000 DAI and 100 WETH to a pool (for a total value of \\$20,000), the liquidity pool is now 100,000 DAI and 1,000 ETH in total. Because the amount supplied is equal to 10% of the total liquidity, the contract mints and sends the market maker \u201cliquidity tokens\u201d which entitle them to 10% of the liquidity available in the pool. These are not speculative tokens to be traded. They are merely an accounting or bookkeeping tool to keep track of how much the liquidity providers are owed. If others subsequently add/withdraw coins, new liquidity tokens are minted/burned such that everyone\u2019s relative percentage share of the liquidity pool remains the same."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now let\u2019s assume the price trades on Coinbase from $100 to $150. The Uniswap contract should reflect this change as well after some arbitrage. Traders will add DAI and remove ETH until the new ratio is now 150:1.")),(0,r.kt)("p",null,"What happens to the liquidity provider? The contract reflects something closer to 122,400 DAI and 817 ETH (to check these numbers are accurate, 122,400 ","*"," 817 = 100,000,000 (our constant product) and 122,400 / 817 = 150, our new price). Withdrawing the 10% that we are entitled to would now yield 12,240 DAI and 81.7 ETH. The total market value here is $24,500. Roughly $500 worth of profit was missed out on as a result of the market making."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Obviously no one wants to provide liquidity out of charitable means, and the revenue isn\u2019t dependent on the ability to flip out of good trades (there is no flipping). Instead, 0.3% of all trade volume is distributed proportionally to all liquidity providers. By default, these fees are put back into the liquidity pool, but can be collected any time. It\u2019s difficult to know what the trade-off is between revenues from fees and losses from directional movements without knowing the amount of in-between trades. The more chop and back and forth, the better.")),(0,r.kt)("h2",{id:"why-is-my-liquidity-worth-less-than-i-put-in"},"Why is my liquidity worth less than I put in?"),(0,r.kt)("p",null,"To understand why the value of a liquidity provider\u2019s stake can go down despite income from fees, we need to look a bit more closely at the formula used by Uniswap to govern trading. The formula really is very simple. If we neglect trading fees, we have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool * token_liquidity_pool = constant_product"))),(0,r.kt)("p",null,"In other words, the number of tokens a trader receives for their ETH and vice versa is calculated such that after the trade, the product of the two liquidity pools is the same as it was before the trade. The consequence of this formula is that for trades which are very small in value compared to the size of the liquidity pool we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_price = token_liquidity_pool / eth_liquidity_pool"))),(0,r.kt)("p",null,"Combining these two equations, we can work out the size of each liquidity pool at any given price, assuming constant total liquidity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool = sqrt(constant_product / eth_price)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_liquidity_pool = sqrt(constant_product * eth_price)"))),(0,r.kt)("p",null,"So let\u2019s look at the impact of a price change on a liquidity provider. To keep things simple, let\u2019s imagine our liquidity provider supplies 1 ETH and 100 DAI to the Uniswap DAI exchange, giving them 1% of a liquidity pool which contains 100 ETH and 10,000 DAI. This implies a price of 1 ETH = 100 DAI. Still neglecting fees, let\u2019s imagine that after some trading, the price has changed; 1 ETH is now worth 120 DAI. What is the new value of the liquidity provider\u2019s stake? Plugging the numbers into the formulae above, we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool = 91.2871")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dai_liquidity_pool = 10954.4511"))),(0,r.kt)("p",null,'"Since our liquidity provider has 1% of the liquidity tokens, this means they can now claim 0.9129 ETH and 109.54 DAI from the liquidity pool. But since DAI is approximately equivalent to USD, we might prefer to convert the entire amount into DAI to understand the overall impact of the price change. At the current price then, our liquidity is worth a total of 219.09 DAI. What if the liquidity provider had just held onto their original 1 ETH and 100 DAI? Well, now we can easily see that, at the new price, the total value would be 220 DAI. So our liquidity provider lost out by 0.91 DAI by providing liquidity to Uniswap instead of just holding onto their initial ETH and DAI."'),(0,r.kt)("p",null,'"Of course, if the price were to return to the same value as when the liquidity provider added their liquidity, this loss would disappear. ',(0,r.kt)("strong",{parentName:"p"},"For this reason, we can call it an\xa0"),"impermanent loss",(0,r.kt)("strong",{parentName:"p"},"."),' Using the equations above, we can derive a formula for the size of the impermanent loss in terms of the price ratio between when liquidity was supplied and now. We get the following:"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"',(0,r.kt)("inlineCode",{parentName:"p"},"impermanent_loss = 2 * sqrt(price_ratio) / (1+price_ratio) \u2014 1"),'"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"Which we can plot out to get a general sense of the scale of the impermanent loss at different price ratios:"\n',(0,r.kt)("img",{parentName:"p",src:"https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdnazarov%2FOscQ_nmzbA.png?alt=media&token=4dff866e-a740-4121-9da4-9c9105baa404",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"Or to put it another way:"'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"a 1.25x price change results in a 0.6% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 1.50x price change results in a 2.0% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 1.75x price change results in a 3.8% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 2x price change results in a 5.7% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 3x price change results in a 13.4% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 4x price change results in a 20.0% loss relative to HODL"'),(0,r.kt)("li",{parentName:"ul"},'"a 5x price change results in a 25.5% loss relative to HODL"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"N.B. The loss is the same whichever direction the price change occurs in (i.e. a doubling in price results in the same loss as a halving)." --\x3e')))))}d.isMDXComponent=!0}}]);