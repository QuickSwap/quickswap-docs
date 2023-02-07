---
title: Pool
tags: smart-contracts, documentation
---

This documentation covers functionality of v3 pool.

# Code

[`AlgebraPool.sol`]

# Address

See [Pool Addresses](../../../guides/smart-contract-integration/08-getting-v3-pool-addresses.md).

# Events

## Initialize

```solidity
event Initialize(uint160 price, int24 tick);
```

Emitted exactly once by a pool when #initialize is first called on the pool. Mint/Burn/Swap cannot be emitted by the pool before Initialize

Params
- `price` The initial sqrt price of the pool, as a Q64.96
- `tick` The initial tick of the pool, i.e. log base 1.0001 of the starting price of the pool

## Mint

```solidity
event Mint(address sender, address indexed owner, int24 indexed bottomTick, int24 indexed topTick, uint128 liquidityAmount, uint256 amount0, uint256 amount1);
```

Emitted when liquidity is minted for a given position

Params
- `sender` The address that minted the liquidity
- `owner` The owner of the position and recipient of any minted liquidity
- `bottomTick` The lower tick of the position
- `topTick` The upper tick of the position
- `liquidityAmount` The amount of liquidity minted to the position range
- `amount0` How much token0 was required for the minted liquidity
- `amount1` How much token1 was required for the minted liquidity

## Collect

```solidity
event Collect(address indexed owner, address recipient, int24 indexed bottomTick, int24 indexed topTick, uint128 amount0, uint128 amount1);
```

Emitted when fees are collected by the owner of a position. `Collect` events may be emitted with zero amount0 and amount1 when the caller chooses not to collect fees

Params
- `owner` The owner of the position for which fees are collected
- `recipient` The address that received fees
- `bottomTick` The lower tick of the position
- `topTick` The upper tick of the position
- `amount0` The amount of token0 fees collected
- `amount1` The amount of token1 fees collected

## Burn

```solidity
event Burn(address indexed owner, int24 indexed bottomTick, int24 indexed topTick, uint128 liquidityAmount, uint256 amount0, uint256 amount1);
```

Emitted when a position's liquidity is removed. Does not withdraw any fees earned by the liquidity position, which must be withdrawn via [collect](#collect-1)

Params
- `owner` The owner of the position for which liquidity is removed
- `bottomTick` The lower tick of the position
- `topTick` The upper tick of the position
- `liquidityAmount` The amount of liquidity to remove
- `amount0` The amount of token0 withdrawn
- `amount1` The amount of token1 withdrawn

## Swap

```solidity
event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 price, uint128 liquidity, int24 tick);
```

Emitted by the pool for any swaps between token0 and token1

Params
- `sender` The address that initiated the swap call, and that received the callback
- `recipient` The address that received the output of the swap
- `amount0` The delta of the token0 balance of the pool
- `amount1` The delta of the token1 balance of the pool
- `price` The sqrt(price) of the pool after the swap, as a Q64.96
- `liquidity` The liquidity of the pool after the swap
- `tick` The log base 1.0001 of price of the pool after the swap

## Flash

```solidity
event Flash(address indexed sender, address indexed recipient, uint256 amount0, uint256 amount1, uint256 paid0, uint256 paid1);
```

Emitted by the pool for any flashes of token0/token1

Params
- `sender` The address that initiated the swap call, and that received the callback
- `recipient` The address that received the tokens from flash
- `amount0` The amount of token0 that was flashed
- `amount1` The amount of token1 that was flashed
- `paid0` The amount of token0 paid for the flash, which can exceed the amount0 plus the fee
- `paid1` The amount of token1 paid for the flash, which can exceed the amount1 plus the fee

## CommunityFee

```solidity
event CommunityFee(uint8 communityFee0New, uint8 communityFee1New);
```

Emitted when the community fee is changed by the pool

Params
- `communityFee0New` The updated value of the token0 community fee percent
- `communityFee1New` The updated value of the token1 community fee percent

## Incentive

```solidity
event Incentive(address indexed virtualPoolAddress);
```

Emitted when new activeIncentive is set

Params
- `virtualPoolAddress` The address of a virtual pool associated with the current active incentive

## Fee

```solidity
event Fee(uint16 fee);
```

Params
- `fee` The value of the token fee

## LiquidityCooldown

```solidity
event LiquidityCooldown(uint32 liquidityCooldown);
```

Params
- `liquidityCooldown` The value of locktime for added liquidity

# Read-Only Functions

## dataStorageOperator

```solidity
function dataStorageOperator() external view returns (address);
```

The contract that stores all the timepoints and can perform actions with them
Returns the operator address

## factory

```solidity
function factory() external view returns (address);
```

The contract that deployed the pool, which must adhere to the IAlgebraFactory interface
Returns the contract address

## token0

```solidity
function token0() external view returns (address);
```

The first of the two tokens of the pool, sorted by address
Returns the token contract address

## token1

```solidity
function token1() external view returns (address);
```

The second of the two tokens of the pool, sorted by address
Returns the token contract address

## tickSpacing

```solidity
function tickSpacing() external view returns (int24);
```

The pool tick spacing. Ticks can only be used at multiples of this value. e.g.: a tickSpacing of 60 means ticks can be initialized every 60th tick, i.e., ..., -120, -60, 0, 60, 120, ...  This value is an int24 to avoid casting even though it is always positive.
Returns the tick spacing

## maxLiquidityPerTick

```solidity
function maxLiquidityPerTick() external view returns (uint128);
```

The maximum amount of position liquidity that can use any tick in the range. This parameter is enforced per tick to prevent liquidity from overflowing a uint128 at any point, and also prevents out-of-range liquidity from being used to prevent adding in-range liquidity to a pool.
Returns the max amount of liquidity per tick

## globalState

```solidity
function globalState() external view returns (uint160 price, int24 tick, uint16 fee, uint16 timepointIndex, uint8 communityFeeToken0, uint8 communityFeeToken1, bool unlocked);
```

The globalState structure in the pool stores many values but requires only one slot and is exposed as a single method to save gas when accessed externally.

Returns
- `price` The current price of the pool as a sqrt(token1/token0) Q64.96 value
- `tick` The current tick of the pool, i.e. according to the last tick transition that was run. Returns This value may not always be equal to SqrtTickMath.getTickAtSqrtRatio(price) if the price is on a tick boundary
- `fee` The last pool fee value in hundredths of a bip, i.e. 1e-6
- `timepointIndex` The index of the last written timepoint
- `communityFeeToken0` The community fee percentage of the swap fee in thousandths (1e-3) for token0
- `communityFeeToken1` The community fee percentage of the swap fee in thousandths (1e-3) for token1
- `unlocked` Whether the pool is currently locked to reentrancy

## totalFeeGrowth0Token

```solidity
function totalFeeGrowth0Token() external view returns (uint256);
```

The fee growth as a Q128.128 fees of token0 collected per unit of liquidity for the entire life of the pool. This value can overflow the uint256

## totalFeeGrowth1Token

```solidity
function totalFeeGrowth1Token() external view returns (uint256);
```

The fee growth as a Q128.128 fees of token1 collected per unit of liquidity for the entire life of the pool. This value can overflow the uint256

## liquidity

```solidity
function liquidity() external view returns (uint128);
```

The currently in range liquidity available to the pool. This value has no relationship to the total liquidity across all ticks. Returned value cannot exceed type(uint128).max

## ticks

```solidity
function ticks(int24 tick) external view returns (uint128 liquidityTotal, int128 liquidityDelta, uint256 outerFeeGrowth0Token, uint256 outerFeeGrowth1Token, int56 outerTickCumulative, uint160 outerSecondsPerLiquidity, uint32 outerSecondsSpent, bool initialized);
```

Look up information about a specific tick in the pool. This is a public structure, so the `return` natspec tags are omitted.

Params
- `tick` The tick to look up

Return
- `liquidityTotal` the total amount of position liquidity that uses the pool either as tick lower or tick upper
- `liquidityDelta` how much liquidity changes when the pool price crosses the tick
- `outerFeeGrowth0Token` the fee growth on the other side of the tick from the current tick in token0
- `outerFeeGrowth1Token` the fee growth on the other side of the tick from the current tick in token1
- `outerTickCumulative` the cumulative tick value on the other side of the tick from the current tick
- `outerSecondsPerLiquidity` the seconds spent per liquidity on the other side of the tick from the current tick
- `outerSecondsSpent` the seconds spent on the other side of the tick from the current tick
- `initialized` Set to true if the tick is initialized, i.e. liquidityTotal is greater than 0 otherwise equal to false. Outside values can only be used if the tick is initialized
In addition, these values are only relative and must be used only in comparison to previous snapshots for a specific position.

## tickTable

```solidity
function tickTable(int16 wordPosition) external view returns (uint256);
```

Returns 256 packed tick initialized boolean values. See [`TickTable`] for more information

## positions

```solidity
function positions(bytes32 key) external view returns (uint128 liquidityAmount, uint32 lastLiquidityAddTimestamp, uint256 innerFeeGrowth0Token, uint256 innerFeeGrowth1Token, uint128 fees0, uint128 fees1);
```

Returns the information about a position by the position's key. This is a public mapping of structures, so the `return` natspec tags are omitted.

Params
- `key` The position's key is a hash of a preimage composed by the owner, bottomTick and topTick

Return
- `liquidityAmount` The amount of liquidity in the position
- `lastLiquidityAddTimestamp` Timestamp of last adding of liquidity
- `innerFeeGrowth0Token` Fee growth of token0 inside the tick range as of the last mint/burn/poke
- `innerFeeGrowth1Token` Fee growth of token1 inside the tick range as of the last mint/burn/poke
- `fees0` The computed amount of token0 owed to the position as of the last mint/burn/poke
- `fees1` The computed amount of token1 owed to the position as of the last mint/burn/poke

## timepoints

```solidity
function timepoints(uint256 index) external view returns (bool initialized, uint32 blockTimestamp, int56 tickCumulative, uint160 secondsPerLiquidityCumulative, uint88 volatilityCumulative, int24 averageTick, uint144 volumePerLiquidityCumulative);
```

Returns data about a specific timepoint index. You most likely want to use [getTimepoints()](#gettimepoints) instead of this method to get an timepoint as of some amount of time  ago, rather than at a specific index in the array. This is a public mapping of structures, so the `return` natspec tags are omitted.

Params
- `index` The element of the timepoints array to fetch

Return
- `initialized` whether the timepoint has been initialized and the values are safe to use
- `blockTimestamp` The timestamp of the timepoint
- `tickCumulative` the tick multiplied by seconds elapsed for the life of the pool as of the timepoint timestamp
- `secondsPerLiquidityCumulative` the seconds per in range liquidity for the life of the pool as of the timepoint timestamp
- `volatilityCumulative` Cumulative standard deviation for the life of the pool as of the timepoint timestamp
- `averageTick` Time-weighted average tick
- `volumePerLiquidityCumulative` Cumulative swap volume per liquidity for the life of the pool as of the timepoint timestamp

## activeIncentive

```solidity
function activeIncentive() external view returns (address virtualPool);
```

Returns the information about active incentive. If there is no active incentive at the moment, virtualPool,endTimestamp,startTimestamp would be equal to 0.

Return
- `virtualPool` The address of a virtual pool associated with the current active incentive

## liquidityCooldown

```solidity
function liquidityCooldown() external view returns (uint32 cooldownInSeconds);
```

Returns the lock time for added liquidity.

## getTimepoints

```solidity
function getTimepoints(uint32[] calldata secondsAgos) external view returns (int56[] memory tickCumulatives, uint160[] memory secondsPerLiquidityCumulatives, uint112[] memory volatilityCumulatives, uint256[] memory volumePerAvgLiquiditys);
```

Returns the cumulative tick and liquidity as of each timestamp `secondsAgo` from the current block timestamp. To get a time weighted average tick or liquidity-in-range, you must call this with two values, one representing the beginning of the period and another for the end of the period. E.g., to get the last hour time-weighted average tick, you must call it with secondsAgos = [3600, 0]. The time weighted average tick represents the geometric time weighted average price of the pool, in log base sqrt(1.0001) of token1 / token0. The TickMath library can be used to go from a tick value to a ratio.

Params
- `secondsAgos` From how long ago each cumulative tick and liquidity value should be returned

Return
- `tickCumulatives` Cumulative tick values as of each `secondsAgos` from the current block timestamp
- `secondsPerLiquidityCumulatives` Cumulative seconds per liquidity-in-range value as of each `secondsAgos` from the current block timestamp
- `volatilityCumulatives` Cumulative standard deviation as of each `secondsAgos`
- `volumePerAvgLiquiditys` Cumulative swap volume per liquidity as of each `secondsAgos`

## getInnerCumulatives

```solidity
function getInnerCumulatives(int24 bottomTick, int24 topTick) external view returns (int56 innerTickCumulative, uint160 innerSecondsSpentPerLiquidity, uint32 innerSecondsSpent);
```

Returns a snapshot of the tick cumulative, seconds per liquidity and seconds inside a tick range. Snapshots must only be compared to other snapshots, taken over a period for which a position existed. I.e., snapshots cannot be compared if a position is not held for the entire period between when the first snapshot is taken and the second snapshot is taken.

Params
- `bottomTick` The lower tick of the range
- `topTick` The upper tick of the range

Return
- `innerTickCumulative` The snapshot of the tick accumulator for the range
- `innerSecondsSpentPerLiquidity` The snapshot of seconds per liquidity for the range
- `innerSecondsSpent` The snapshot of the number of seconds during which the price was in this range

# State-Changing Functions

## initialize

```solidity
function initialize(uint160 price) external;
```

Sets the initial price for the pool. Price is represented as a sqrt(amountToken1/amountToken0) Q64.96 value

Params
- `price` the initial sqrt price of the pool as a Q64.96

## mint

```solidity
function mint(address sender, address recipient, int24 bottomTick, int24 topTick, uint128 amount, bytes calldata data) external returns (uint256 amount0, uint256 amount1, uint128 liquidityActual);
```

Adds liquidity for the given recipient/bottomTick/topTick position. The caller of this method receives a callback in the form of IAlgebraMintCallback# AlgebraMintCallback in which they must pay any token0 or token1 owed for the liquidity. The amount of token0/token1 due depends on bottomTick, topTick, the amount of liquidity, and the current price.

Params
- `sender` The address which will receive potential surplus of paid tokens
- `recipient` The address for which the liquidity will be created
- `bottomTick` The lower tick of the position in which to add liquidity
- `topTick` The upper tick of the position in which to add liquidity
- `amount` The desired amount of liquidity to mint
- `data` Any data that should be passed through to the callback

Return
- `amount0` The amount of token0 that was paid to mint the given amount of liquidity. Matches the value in the callback
- `amount1` The amount of token1 that was paid to mint the given amount of liquidity. Matches the value in the callback
- `liquidityActual` The actual minted amount of liquidity

## collect

```solidity
function collect(address recipient, int24 bottomTick, int24 topTick, uint128 amount0Requested, uint128 amount1Requested) external returns (uint128 amount0, uint128 amount1);
```

Collects tokens owed to a position.  Does not recompute fees earned, which must be done either via mint or burn of any amount of liquidity. Collect must be called by the position owner. To withdraw only token0 or only token1, amount0Requested or amount1Requested may be set to zero. To withdraw all tokens owed, caller may pass any value greater than the actual tokens owed, e.g. type(uint128).max. Tokens owed may be from accumulated swap fees or burned liquidity.

Params
- `recipient` The address which should receive the fees collected
- `bottomTick` The lower tick of the position for which to collect fees
- `topTick` The upper tick of the position for which to collect fees
- `amount0Requested` How much token0 should be withdrawn from the fees owed
- `amount1Requested` How much token1 should be withdrawn from the fees owed

Return
- `amount0` The amount of fees collected in token0
- `amount1` The amount of fees collected in token1

## burn

```solidity
function burn(int24 bottomTick, int24 topTick, uint128 amount) external returns (uint256 amount0, uint256 amount1);
```

Burn liquidity from the sender and account tokens owed for the liquidity to the position. Can be used to trigger a recalculation of fees owed to a position by calling with an amount of 0.  Fees must be collected separately via a call to [collect](#collect-1)

Params
- `bottomTick` The lower tick of the position for which to burn liquidity
- `topTick` The upper tick of the position for which to burn liquidity
- `amount` How much liquidity to burn

Return
- `amount0` The amount of token0 sent to the recipient
- `amount1` The amount of token1 sent to the recipient

## swap

```solidity
function swap(address recipient, bool zeroToOne, int256 amountSpecified, uint160 limitSqrtPrice, bytes calldata data) external returns (int256 amount0, int256 amount1);
```

Swap token0 for token1, or token1 for token0. The caller of this method receives a callback in the form of IAlgebraSwapCallback# AlgebraSwapCallback

Params
- `recipient` The address to receive the output of the swap
- `zeroToOne` The direction of the swap, true for token0 to token1, false for token1 to token0
- `amountSpecified` The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
- `limitSqrtPrice` The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
- `data` Any data to be passed through to the callback. If using the Router it should contain SwapRouter#SwapCallbackData

Return
- `amount0` The delta of the balance of token0 of the pool, exact when negative, minimum when positive
- `amount1` The delta of the balance of token1 of the pool, exact when negative, minimum when positive

## swapSupportingFeeOnInputTokens

```solidity
function swapSupportingFeeOnInputTokens(address sender, address recipient, bool zeroToOne, int256 amountSpecified, uint160 limitSqrtPrice, bytes calldata data) external returns (int256 amount0, int256 amount1);
```

Swap token0 for token1, or token1 for token0 (tokens that have fee on transfer). The caller of this method receives a callback in the form of IAlgebraSwapCallback# AlgebraSwapCallback

Params
- `sender` The address called this function (Comes from the Router)
- `recipient` The address to receive the output of the swap
- `zeroToOne` The direction of the swap, true for token0 to token1, false for token1 to token0
- `amountSpecified` The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
- `limitSqrtPrice` The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
- `data` Any data to be passed through to the callback. If using the Router it should contain SwapRouter#SwapCallbackData

Return
- `amount0` The delta of the balance of token0 of the pool, exact when negative, minimum when positive
- `amount1` The delta of the balance of token1 of the pool, exact when negative, minimum when positive

## flash

```solidity
function flash(address recipient, uint256 amount0, uint256 amount1, bytes calldata data) external;
```

Receive token0 and/or token1 and pay it back, plus a fee, in the callback. The caller of this method receives a callback in the form of IAlgebraFlashCallback# AlgebraFlashCallback. All excess tokens paid in the callback are distributed to liquidity providers as an additional fee. So this method can be used to donate underlying tokens to currently in-range liquidity providers by calling with 0 amount{0,1} and sending the donation amount(s) from the callback

Params
- `recipient` The address which will receive the token0 and token1 amounts
- `amount0` The amount of token0 to send
- `amount1` The amount of token1 to send
- `data` Any data to be passed through to the callback

## setCommunityFee

```solidity
function setCommunityFee(uint8 communityFee0, uint8 communityFee1) external;
```

Set the community's % share of the fees. Cannot exceed 25% (250)

Params
- `communityFee0` new community fee percent for token0 of the pool in thousandths (1e-3)
- `communityFee1` new community fee percent for token1 of the pool in thousandths (1e-3)

## setIncentive

```solidity
function setIncentive(address virtualPoolAddress) external;
```

Sets an active incentive

Params
- `virtualPoolAddress` The address of a virtual pool associated with the incentive

## setLiquidityCooldown

```solidity
function setLiquidityCooldown(uint32 newLiquidityCooldown) external;
```

Sets new lock time for added liquidity

Params
- `newLiquidityCooldown` The time in seconds
