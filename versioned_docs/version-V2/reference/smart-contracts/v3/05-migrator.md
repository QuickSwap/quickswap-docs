---
id: 05-migrator
title: V3 Migrator
tags: smart-contracts, documentation
---
# V3 Migrator

## Code

[`V3Migrator.sol`](https://polygonscan.com/address/0x157B9913E00204f8c980bb00aa62E22b0dAb1a63)

## Address

`V3Migrator` is deployed at `0x157B9913E00204f8c980bb00aa62E22b0dAb1a63` on the Polygon [mainnet](https://polygonscan.com/address/0xa15F0D7377B2A0C0c10db057f641beD0x157B9913E00204f8c980bb00aa62E22b0dAb1a6321028FC89).

# State-Changing Functions

## quoteExactInput

```solidity
struct MigrateParams {
  address pair;
  uint256 liquidityToMigrate;
  uint8 percentageToMigrate;
  address token0;
  address token1;
  int24 tickLower;
  int24 tickUpper;
  uint256 amount0Min;
  uint256 amount1Min;
  address recipient;
  uint256 deadline;
  bool refundAsNative;
}
function migrate(MigrateParams calldata params) external;
```

Migrates liquidity to Algebra by burning v2 liquidity and minting a new position for Algebra. Slippage protection is enforced via `amount{0,1}Min`, which should be a discount of the expected values of the maximum amount of Algebra liquidity that the v2 liquidity can get. For the special case of migrating to an out-of-range position, `amount{0,1}Min` may be set to 0, enforcing that the position remains out of range

`liquidityToMigrate` is expected to be balanceOf(msg.sender)
`percentageToMigrate` is represented as a numerator over 100
`amount0Min` must be discounted by `percentageToMigrate`
`amount1Min` must be discounted by `percentageToMigrate`

Params
- `params` The params necessary to migrate v2 liquidity, encoded as `MigrateParams` in calldata
