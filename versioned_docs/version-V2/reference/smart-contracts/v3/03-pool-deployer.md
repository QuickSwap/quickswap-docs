---
id: 03-pool-deployer
title: Pool Deployer
tags: smart-contracts, documentation
---
# Pool Deployer

## Code

[`AlgebraPoolDeployer.sol`](https://polygonscan.com/address/0x2D98E2FA9da15aa6dC9581AB097Ced7af697CB92)

## Address

`AlgebraPoolDeployer` is deployed at `0x2D98E2FA9da15aa6dC9581AB097Ced7af697CB92` on the Polygon [mainnet](https://polygonscan.com/address/0x2D98E2FA9da15aa6dC9581AB097Ced7af697CB92).

# Events

## Factory

```solidity
event Factory(address indexed factory);
```

Emitted when the factory address is changed

- `factory` The factory address after the address was changed

# Read-Only Functions

## parameters

```solidity
function parameters() external view returns (address dataStorage, address factory, address token0, address token1);
```

Get the parameters to be used in constructing the pool, set transiently during pool creation. Called by the pool constructor to fetch the parameters of the pool

Returns
- `dataStorage` The pools associated dataStorage
- `factory` The factory address
- `token0` The first token of the pool by address sort order
- `token1` The second token of the pool by address sort order

# State-Changing Functions

## deploy

```solidity
function deploy(address dataStorage, address factory, address token0, address token1) external returns (address pool);
```

Deploys a pool with the given parameters by transiently setting the parameters storage slot and then clearing it after deploying the pool.

Params
- `dataStorage` The pools associated dataStorage
- `factory` The contract address of the Algebra factory
- `token0` The first token of the pool by address sort order
- `token1` The second token of the pool by address sort order

Returns
- `pool` The deployed pool's address

## setFactory

```solidity
function setFactory(address factory) external;
```

Sets the factory address to the poolDeployer for permissioned actions

Params
- `factory` The address of the Algebra factory
