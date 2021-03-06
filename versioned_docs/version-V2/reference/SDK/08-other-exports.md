---
id: 08-other-exports
title: Other Exports
tags: sdk, documentation
---

# JSBI

```typescript
import { JSBI } from '@uniswap/sdk'
// import JSBI from 'jsbi'
```

The default export from [jsbi](https://github.com/GoogleChromeLabs/jsbi).

# BigintIsh

```typescript
import { BigintIsh } from '@uniswap/sdk'
// type BigintIsh = JSBI | bigint | string
```

A union type comprised of all types that can be cast to a JSBI instance.

# ChainId

```typescript
import { ChainId } from '@uniswap/sdk'
// enum ChainId {
//   MAINNET = 1,
//   ROPSTEN = 3,
//   RINKEBY = 4,
//   GÖRLI = 5,
//   KOVAN = 42
// }
```

A enum denominating supported chain IDs.

# TradeType

```typescript
import { TradeType } from '@uniswap/sdk'
// enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }
```

A enum denominating supported trade types.

# Rounding

```typescript
import { Rounding } from '@uniswap/sdk'
// enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }
```

A enum denominating supported rounding options.

# FACTORY_ADDRESS

```typescript
import { FACTORY_ADDRESS } from '@uniswap/sdk'
```

The [factory address](/smart-contracts/factory/#address).

# INIT_CODE_HASH

```typescript
import { INIT_CODE_HASH } from '@uniswap/sdk'
```

See [Pair Addresses](/smart-contracts/factory/#address).

# MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '@uniswap/sdk'
```

See [Minimum Liquidity](/protocol-overview/smart-contracts/#minimum-liquidity).

# InsufficientReservesError

```typescript
import { InsufficientReservesError } from '@uniswap/sdk'
```

# InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '@uniswap/sdk'
```

# WETH

```typescript
import { WETH } from '@uniswap/sdk'
```

An object whose values are [WETH](/smart-contracts/router02/#weth) [Token](/SDK/token) instances, indexed by [ChainId](#chainid).
