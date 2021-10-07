---
id: 01-factory
title: Factory
tags: smart-contracts, documentation
---
# Factory

## Code

[`UniswapV2Factory.sol`](https://polygonscan.com/address/0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32)

# Address

`UniswapV2Factory` is deployed at `0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32` on the Polygon [mainnet](https://polygonscan.com/address/0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32).

# Events

## PairCreated

```solidity
event PairCreated(address indexed token0, address indexed token1, address pair, uint);
```

Emitted each time a pair is created via [createPair](#createpair).

- `token0` is guaranteed to be strictly less than `token1` by sort order.
- The final `uint` log value will be `1` for the first pair created, `2` for the second, etc. (see [allPairs](#allpairs)/[getPair](#getpair)).

# Read-Only Functions

## getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair);
```

Returns the address of the pair for `tokenA` and `tokenB`, if it has been created, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- `tokenA` and `tokenB` are interchangeable.
- Pair addresses can also be calculated deterministically.

## allPairs

```solidity
function allPairs(uint) external view returns (address pair);
```

Returns the address of the `n`th pair (`0`-indexed) created through the factory, or `address(0)` (`0x0000000000000000000000000000000000000000`) if not enough pairs have been created yet.

- Pass `0` for the address of the first pair created, `1` for the second, etc.

## allPairsLength

```solidity
function allPairsLength() external view returns (uint);
```

Returns the total number of pairs created through the factory so far.

## feeTo

```solidity
function feeTo() external view returns (address);
```

See [Protocol Charge Calculation](https://docs.quickswap.exchange/concepts/advanced-topics/01-fees).

## feeToSetter

```solidity
function feeToSetter() external view returns (address);
```

The address allowed to change [feeTo](#feeto).

# State-Changing Functions

## createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair);
```

Creates a pair for `tokenA` and `tokenB` if one doesn't exist already.

- `tokenA` and `tokenB` are interchangeable.
- Emits [PairCreated](#paircreated).

# Interface

```solidity
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Factory {
  event PairCreated(address indexed token0, address indexed token1, address pair, uint);

  function getPair(address tokenA, address tokenB) external view returns (address pair);
  function allPairs(uint) external view returns (address pair);
  function allPairsLength() external view returns (uint);

  function feeTo() external view returns (address);
  function feeToSetter() external view returns (address);

  function createPair(address tokenA, address tokenB) external returns (address pair);
}
```

# ABI

```typescript
import IUniswapV2Factory from '@uniswap/v2-core/build/IUniswapV2Factory.json'
```

[https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Factory.json](https://unpkg.com/@uniswap/v2-core@1.0.0/build/IUniswapV2Factory.json)
