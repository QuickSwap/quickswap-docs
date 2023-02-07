---
title: Position Manager
tags: smart-contracts, documentation
---
# Position Manager

Contract to create v3 positions.

## Code

[`NonfungiblePositionManager.sol`](https://polygonscan.com/address/0x8eF88E4c7CfbbaC1C163f7eddd4B578792201de6)

## Address

`NonfungiblePositionManager` is deployed at `0x8eF88E4c7CfbbaC1C163f7eddd4B578792201de6` on the Polygon [mainnet](https://polygonscan.com/address/0x8eF88E4c7CfbbaC1C163f7eddd4B578792201de6).

# Events

## IncreaseLiquidity

```solidity
event IncreaseLiquidity(uint256 indexed tokenId, uint128 liquidity,  uint128 actualLiquidity, uint256 amount0, uint256 amount1, address pool);
```

Emitted when a position NFT is created via [mint](#mint) or liquidity is increased for a position NFT.

- `tokenId` The ID of the token for which liquidity was increased.
- `liquidity` The amount by which liquidity for the NFT position was increased
- `actualLiquidity` The actual liquidity that was added into a pool. Could differ from `liquidity` when using FeeOnTransfer tokens
- `amount0` The amount of token0 that was paid for the increase in liquidity
- `amount1` The amount of token1 that was paid for the increase in liquidity

## DecreaseLiquidity

```solidity
event DecreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

Emitted when liquidity is removed from a position NFT.

- `tokenId` The ID of the token for which liquidity was decreased
- `liquidity` The amount by which liquidity for the NFT position was decreased
- `amount0` The amount of token0 that was accounted for the decrease in liquidity
- `amount1` The amount of token1 that was accounted for the decrease in liquidity


## Collect

```solidity
event Collect(uint256 indexed tokenId, address recipient, uint256 amount0, uint256 amount1);
```

Emitted when tokens are collected for a position NFT. The amounts reported may not be exactly equivalent to the amounts transferred, due to rounding behavior

- `tokenId` The ID of the token for which underlying tokens were collected
- `recipient` The address of the account that received the collected tokens
- `amount0` The amount of token0 owed to the position that was collected
- `amount1` The amount of token1 owed to the position that was collected

# Read-Only Functions

## positions

```solidity
function positions(uint256 tokenId) external view override returns (uint96 nonce, address operator, address token0, address token1, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0 uint128 tokensOwed1);
```

Returns the position information associated with a given token ID. Throws if the token ID is not valid.

Params
- `tokenId` The ID of the token that represents the position

Returns
- `nonce` The nonce for permits
- `operator` The address that is approved for spending
- `token0` The address of the token0 for a specific pool
- `token1` The address of the token1 for a specific pool
- `tickLower` The lower end of the tick range for the position
- `tickUpper` The higher end of the tick range for the position
- `liquidity` The liquidity of the position
- `feeGrowthInside0LastX128` The fee growth of token0 as of the last action on the individual position
- `feeGrowthInside1LastX128` The fee growth of token1 as of the last action on the individual position
- `tokensOwed0` The uncollected amount of token0 owed to the position as of the last computation
- `tokensOwed1` The uncollected amount of token1 owed to the position as of the last computation

# State-Changing Functions

## mint

```solidity
struct MintParams {
  address token0;
  address token1;
  int24 tickLower;
  int24 tickUpper;
  uint256 amount0Desired;
  uint256 amount1Desired;
  uint256 amount0Min;
  uint256 amount1Min;
  address recipient;
  uint256 deadline;
}

function mint(MintParams calldata params) external payable override checkDeadline(params.deadline) returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```

Creates a new position wrapped in a NFT. Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized a method does not exist, i.e. the pool is assumed to be initialized.

Params
- `params` The params necessary to mint a position, encoded as `MintParams` in calldata

Returns
- `tokenId` The ID of the token that represents the minted position
- `liquidity` The amount of liquidity for this position
- `amount0` The amount of token0
- `amount1` The amount of token1

- Emits [IncreaseLiquidity](#increaseliquidity).

## increaseLiquidity

```solidity
struct IncreaseLiquidityParams {
  uint256 tokenId;
  uint256 amount0Desired;
  uint256 amount1Desired;
  uint256 amount0Min;
  uint256 amount1Min;
  uint256 deadline;
}

function increaseLiquidity(IncreaseLiquidityParams calldata params) external payable override checkDeadline(params.deadline) returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```

Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`

Params
- `tokenId` The ID of the token for which liquidity is being increased
- `amount0Desired` The desired amount of token0 to be spent
- `amount1Desired` The desired amount of token1 to be spent
- `amount0Min` The minimum amount of token0 to spend, which serves as a slippage check,
- `amount1Min` The minimum amount of token1 to spend, which serves as a slippage check,
- `deadline` The time by which the transaction must be included to effect the change

Returns
- `liquidity` The new liquidity amount as a result of the increase
- `amount0` The amount of token0 to achieve resulting liquidity
- `amount1` The amount of token1 to achieve resulting liquidity

- Emits [IncreaseLiquidity](#increaseliquidity).

## decreaseLiquidity

```solidity
struct DecreaseLiquidityParams {
  uint256 tokenId;
  uint128 liquidity;
  uint256 amount0Min;
  uint256 amount1Min;
  uint256 deadline;
}

function decreaseLiquidity(DecreaseLiquidityParams calldata params) external payable override isAuthorizedForToken(params.tokenId) checkDeadline(params.deadline) returns (uint256 amount0, uint256 amount1)

```

Remove the amount of liquidity in a position and accounts it to the position

Params
- `tokenId` The ID of the token for which liquidity is being decreased
- `liquidity` The amount by which liquidity will be decreased
- `amount0Min` The minimum amount of token0 that should be accounted for the burned liquidity
- `amount1Min` The minimum amount of token1 that should be accounted for the burned liquidity
- `deadline` The time by which the transaction must be included to effect the change

Returns
- `amount0` The amount of token0 accounted to the position's tokens owed
- `amount1` The amount of token1 accounted to the position's tokens owed

- Emits [DecreaseLiquidity](#decreaseliquidity).

## collect

```solidity
struct CollectParams {
  uint256 tokenId;
  address recipient;
  uint128 amount0Max;
  uint128 amount1Max;
}

function collect(CollectParams calldata params) external payable override isAuthorizedForToken(params.tokenId) returns (uint256 amount0, uint256 amount1)
```

Collects up to a maximum amount of fees owed to a specific position to the recipient

Params
- `tokenId` The ID of the NFT for which tokens are being collected
- `recipient` The account that should receive the tokens
- `amount0Max` The maximum amount of token0 to collect
- `amount1Max` The maximum amount of token1 to collect

Returns
- `amount0` The amount of fees collected in token0
- `amount1` The amount of fees collected in token1

- Emits [Collect](#collect).

## burn

```solidity
function burn(uint256 tokenId) external payable;
```

Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens  must be collected first.

- `tokenId` The ID of the token that is being burned

# Interface

```solidity
pragma solidity >=0.5.0;

interface INonfungiblePositionManager is
    IPoolInitializer,
    IPeripheryPayments,
    IPeripheryImmutableState,
    IERC721Metadata,
    IERC721Enumerable,
    IERC721Permit
{
    event IncreaseLiquidity(
        uint256 indexed tokenId,
        uint128 liquidity,
        uint128 actualLiquidity,
        uint256 amount0,
        uint256 amount1,
        address pool
    );
    event DecreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
    
    event Collect(uint256 indexed tokenId, address recipient, uint256 amount0, uint256 amount1);

    function positions(uint256 tokenId)
        external
        view
        returns (
            uint96 nonce,
            address operator,
            address token0,
            address token1,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            uint256 feeGrowthInside0LastX128,
            uint256 feeGrowthInside1LastX128,
            uint128 tokensOwed0,
            uint128 tokensOwed1
        );

    struct MintParams {
        address token0;
        address token1;
        int24 tickLower;
        int24 tickUpper;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        address recipient;
        uint256 deadline;
    }

    function mint(MintParams calldata params)
        external
        payable
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        );

    struct IncreaseLiquidityParams {
        uint256 tokenId;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }

    function increaseLiquidity(IncreaseLiquidityParams calldata params)
        external
        payable
        returns (
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        );

    struct DecreaseLiquidityParams {
        uint256 tokenId;
        uint128 liquidity;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }

    function decreaseLiquidity(DecreaseLiquidityParams calldata params)
        external
        payable
        returns (uint256 amount0, uint256 amount1);

    struct CollectParams {
        uint256 tokenId;
        address recipient;
        uint128 amount0Max;
        uint128 amount1Max;
    }

    function collect(CollectParams calldata params) external payable returns (uint256 amount0, uint256 amount1);

    /// @notice Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens
    /// must be collected first.
    /// @param tokenId The ID of the token that is being burned
    function burn(uint256 tokenId) external payable;
}
```
