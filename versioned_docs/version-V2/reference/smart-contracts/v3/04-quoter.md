---
id: 04-quoter
title: Quoter
tags: smart-contracts, documentation
---
# Quoter

## Code

[`Quoter.sol`](https://polygonscan.com/address/0xa15F0D7377B2A0C0c10db057f641beD21028FC89)

## Address

`Quoter` is deployed at `0xa15F0D7377B2A0C0c10db057f641beD21028FC89` on the Polygon [mainnet](https://polygonscan.com/address/0xa15F0D7377B2A0C0c10db057f641beD21028FC89).

# State-Changing Functions

## quoteExactInput

```solidity
function quoteExactInput(bytes memory path, uint256 amountIn) external returns (uint256 amountOut, uint16[] memory fees);
```

Returns the amount out received for a given exact input swap without executing the swap

Params
- `path` The path of the swap, i.e. each token pair
- `amountIn` The amount of the first token to swap

Return
- `amountOut` The amount of the last token that would be received

## quoteExactInputSingle

```solidity
function quoteExactInputSingle(address tokenIn, address tokenOut, uint256 amountIn, uint160 limitSqrtPrice) external returns (uint256 amountOut, uint16 fee);
```

Returns the amount out received for a given exact input but for a swap of a single pool

Params
- `tokenIn` The token being swapped in
- `tokenOut` The token being swapped out
- `amountIn` The desired input amount
- `limitSqrtPrice` The price limit of the pool that cannot be exceeded by the swap

Return
- `amountOut` The amount of `tokenOut` that would be received

## quoteExactOutput

```solidity
function quoteExactOutput(bytes memory path, uint256 amountOut) external returns (uint256 amountIn, uint16[] memory fees);
```

Returns the amount in required for a given exact output swap without executing the swap

Params
- `path` The path of the swap, i.e. each token pair. Path must be provided in reverse order
- `amountOut` The amount of the last token to receive

Return
- `amountIn` The amount of first token required to be paid

## quoteExactOutputSingle

```solidity
function quoteExactOutputSingle(address tokenIn, address tokenOut, uint256 amountOut, uint160 limitSqrtPrice) external returns (uint256 amountIn, uint16 fee);
```

Returns the amount in required to receive the given exact output amount but for a swap of a single pool

Params
- `tokenIn` The token being swapped in
- `tokenOut` The token being swapped out
- `amountOut` The desired output amount
- `limitSqrtPrice` The price limit of the pool that cannot be exceeded by the swap

Return
- `amountIn` The amount required as the input for the swap in order to receive `amountOut`
