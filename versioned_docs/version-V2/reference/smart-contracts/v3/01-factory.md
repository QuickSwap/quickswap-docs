---
id: 01-factory
title: Factory
tags: smart-contracts, documentation
---
# Factory

## Code

[`AlgebraFactory.sol`](https://polygonscan.com/address/0x411b0fAcC3489691f28ad58c47006AF5E3Ab3A28)

## Address

`AlgebraFactory` is deployed at `0x411b0fAcC3489691f28ad58c47006AF5E3Ab3A28` on the Polygon [mainnet](https://polygonscan.com/address/0x411b0fAcC3489691f28ad58c47006AF5E3Ab3A28).

# Events

## Owner

```solidity
event Owner(address indexed newOwner);
```

Emitted when the owner of the factory is changed

- `newOwner` The owner after the owner was changed

## VaultAddress

```solidity
event VaultAddress(address indexed newVaultAddress);
```

Emitted when the vault address is changed

- `newVaultAddress` The vault address after the address was changed

## Pool

```solidity
event Pool(address indexed token0, address indexed token1, address pool);
```

Emitted when a pool is created

- `token0` The first token of the pool by address sort order
- `token1` The second token of the pool by address sort order
- `pool` The address of the created pool

## FarmingAddress

```solidity
event FarmingAddress(address indexed newFarmingAddress);
```

Emitted when the farming address is changed

- `newFarmingAddress` The farming address after the address was changed

## FeeConfiguration

```solidity
event FeeConfiguration(uint16 alpha1, uint16 alpha2, uint32 beta1, uint32 beta2, uint16 gamma1, uint16 gamma2, uint32 volumeBeta, uint16 volumeGamma, uint16 baseFee);
```

Emitted when the farming address is changed

- `newFarmingAddress` The farming address after the address was changed

# Read-Only Functions

## owner

```solidity
function owner() external view returns (address);
```

Returns the address of the current factory owner. Can be changed by the current owner via setOwner

## poolDeployer

```solidity
function poolDeployer() external view returns (address);
```

Returns the address of the poolDeployer

## farmingAddress

```solidity
function farmingAddress() external view returns (address);
```

Is retrieved from the pools to restrict calling certain functions not by a tokenomics contract
Returns the tokenomics contract address

## vaultAddress

```solidity
function vaultAddress() external view returns (address);
```

## poolByPair

```solidity
function poolByPair(address tokenA, address tokenB) external view returns (address pool);
```

Returns the pool address for a given pair of tokens and a fee, or address 0 if it does not exist. tokenA and tokenB may be passed in either token0/token1 or token1/token0 order

Params
- `tokenA` The contract address of either token0 or token1
- `tokenB` The contract address of the other token

Returns
- `pool` The pool address

# State-Changing Functions

## createPool

```solidity
function createPool(address tokenA, address tokenB) external returns (address pool);
```

Creates a pool for the given two tokens and fee.
tokenA and tokenB may be passed in either order: token0/token1 or token1/token0. tickSpacing is retrieved from the fee. The call will revert if the pool already exists, the fee is invalid, or the token arguments are invalid.

Params
- `tokenA` One of the two tokens in the desired pool
- `tokenB` The other of the two tokens in the desired pool

Returns
- `pool` The address of the newly created pool

## setOwner

```solidity
function setOwner(address _owner) external;
```

Updates the owner of the factory. Must be called by the current owner

Params
- `_owner` The new owner of the factory

## setFarmingAddress

```solidity
function setFarmingAddress(address _farmingAddress) external;
```

Updates tokenomics address on the factory

Params
- `_farmingAddress` The new tokenomics contract address

## setVaultAddress

```solidity
function setVaultAddress(address _vaultAddress) external;
```

Updates vault address on the factory

Params
- `_vaultAddress` The new vault contract address

## setBaseFeeConfiguration

```solidity
function setBaseFeeConfiguration(uint16 alpha1, uint16 alpha2, uint32 beta1, uint32 beta2, uint16 gamma1, uint16 gamma2, uint32 volumeBeta, uint16 volumeGamma, uint16 baseFee) external;
```

Changes initial fee configuration for new pools. Changes coefficients for sigmoids: α / (1 + e^( (β-x) / γ)) alpha1 + alpha2 + baseFee (max possible fee) must be <= type(uint16).max, gammas must be > 0

Params
- `alpha1` max value of the first sigmoid
- `alpha2` max value of the second sigmoid
- `beta1` shift along the x-axis for the first sigmoid
- `beta2` shift along the x-axis for the second sigmoid
- `gamma1` horizontal stretch factor for the first sigmoid
- `gamma2` horizontal stretch factor for the second sigmoid
- `volumeBeta` shift along the x-axis for the outer volume-sigmoid
- `volumeGamma` horizontal stretch factor the outer volume-sigmoid
- `baseFee` minimum possible fee
