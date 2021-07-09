(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[5535],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1835:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i={id:"06-research",title:"Research",tags:"advanced-topics, documentation"},o={unversionedId:"concepts/advanced-topics/06-research",id:"version-V2/concepts/advanced-topics/06-research",isDocsHomePage:!1,title:"Research",description:"The automated market maker is a new concept, and as such, new research comes out frequently. We've selected some of the most thoughtful here.",source:"@site/versioned_docs/version-V2/concepts/03-advanced-topics/06-research.md",sourceDirName:"concepts/03-advanced-topics",slug:"/concepts/advanced-topics/06-research",permalink:"/quickswap-docs/concepts/advanced-topics/06-research",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/03-advanced-topics/06-research.md",version:"V2",sidebarPosition:6,frontMatter:{id:"06-research",title:"Research",tags:"advanced-topics, documentation"},sidebar:"defaultSidebar",previous:{title:"Math",permalink:"/quickswap-docs/concepts/advanced-topics/05-math"},next:{title:"Code",permalink:"/quickswap-docs/concepts/governance/01-overview"}},c=[],l={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The automated market maker is a new concept, and as such, new research comes out frequently. We've selected some of the most thoughtful here."),(0,s.kt)("h1",{id:"uniswaps-financial-alchemy"},"Uniswap's Financial Alchemy"),(0,s.kt)("p",null,"Authors: Dave White, Martin Tassy, Charlie Noyes, and Dan Robinson"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"An automated market maker is a type of decentralized exchange that lets customers trade between on-chain assets like USDC and ETH. Uniswap is the most popular AMM on Ethereum. Like most AMMs, Uniswap facilitates trading between a particular pair of assets by holding reserves of both assets. It sets the trading price between them based on the size of its reserves in such a way that prices will stay in line with the broader market. Anybody who would like to can join the \u201cpool\u201d for a particular pair and become a liquidity provider, or LP, so-called because they provide liquid assets for others to trade against. LPs contribute assets to both reserves simultaneously, taking on some of the risk of trading in exchange for a share of the returns.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://research.paradigm.xyz/uniswaps-alchemy"},"Uniswap's Financial Alchemy"))),(0,s.kt)("h1",{id:"an-analysis-of-uniswap-markets"},"An analysis of Uniswap markets"),(0,s.kt)("p",null,"Authors: Guillermo Angeris, Hsien-Tang Kao, Rei Chiang, Charlie Noyes, Tarun Chitra"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Uniswap---and other constant product markets---appear to work well in practice despite their simplicity. In this paper, we give a simple formal analysis of constant product markets and their generalizations, showing that, under some common conditions, these markets must closely track the reference market price. We also show that Uniswap satisfies many other desirable properties and numerically demonstrate, via a large-scale agent-based simulation, that Uniswap is stable under a wide range of market conditions.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1911.03380"},"An analysis of Uniswap markets"))),(0,s.kt)("h1",{id:"improved-price-oracles-constant-function-market-makers"},"Improved Price Oracles: Constant Function Market Makers"),(0,s.kt)("p",null,"Authors: Guillermo Angeris, Tarun Chitra"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Automated market makers, first popularized by Hanson's logarithmic market scoring rule (or LMSR) for prediction markets, have become important building blocks, called 'primitives,' for decentralized finance. A particularly useful primitive is the ability to measure the price of an asset, a problem often known as the pricing oracle problem. In this paper, we focus on the analysis of a very large class of automated market makers, called constant function market makers (or CFMMs) which includes existing popular market makers such as Uniswap, Balancer, and Curve, whose yearly transaction volume totals to billions of dollars. We give sufficient conditions such that, under fairly general assumptions, agents who interact with these constant function market makers are incentivized to correctly report the price of an asset and that they can do so in a computationally efficient way. We also derive several other useful properties that were previously not known. These include lower bounds on the total value of assets held by CFMMs and lower bounds guaranteeing that no agent can, by any set of trades, drain the reserves of assets held by a given CFMM.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2003.10001"},"Improved Price Oracles: Constant Function Market Makers"))),(0,s.kt)("h1",{id:"pintail-research"},"Pintail research"),(0,s.kt)("p",null,"Published ",(0,s.kt)("a",{parentName:"p",href:"https://medium.com/@pintail"},"medium")," articles by Pintail."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://medium.com/@pintail/understanding-uniswap-returns-cc593f3499ef"},"Understanding Uniswap Returns")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2"},"Uniswap: A Good Deal for Liquidity Providers?"))),(0,s.kt)("h1",{id:"liquidity-provider-returns-in-geometric-mean-markets"},"Liquidity Provider Returns in Geometric Mean Markets"),(0,s.kt)("p",null,"Authors: Alex Evans"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Geometric mean market makers (G3Ms), such as Uniswap and Balancer, comprise a popular class of automated market makers (AMMs) defined by the following rule: the reserves of the AMM before and after each trade must have the same (weighted) geometric mean. This paper extends several results known for constant-weight G3Ms to the general case of G3Ms with time-varying and potentially stochastic weights. These results include the returns and no-arbitrage prices of liquidity pool (LP) shares that investors receive for supplying liquidity to G3Ms. Using these expressions, we show how to create G3Ms whose LP shares replicate the payoffs of financial derivatives. The resulting hedges are model-independent and exact for derivative contracts whose payoff functions satisfy an elasticity constraint. These strategies allow LP shares to replicate various trading strategies and financial contracts, including standard options. G3Ms are thus shown to be capable of recreating a variety of active trading strategies through passive positions in LP shares.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2006.08806"},"Liquidity Provider Returns in Geometric Mean Markets"))),(0,s.kt)("h1",{id:"the-replicating-portfolio-of-a-constant-product-market"},"The Replicating Portfolio of a Constant Product Market"),(0,s.kt)("p",null,"Authors: Joseph Clark"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"We derive the replicating portfolio of a constant product market. This is structurally short volatility (selling options) which explains why positive transaction costs are needed to induce liquidity providers to participate. Where futures and options markets do not exist, this payoff can be used to create them.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601"))))}p.isMDXComponent=!0}}]);