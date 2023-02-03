---
id: 06-farming-center
title: Farming Center
tags: smart-contracts, documentation
---
# Farming Center

## Code

[`Farmingcenter.sol`](https://polygonscan.com/address/0x7F281A8cdF66eF5e9db8434Ec6D97acc1bc01E78)

## Address

`Farmingcenter` is deployed at `0x7F281A8cdF66eF5e9db8434Ec6D97acc1bc01E78` on the Polygon [mainnet](https://polygonscan.com/address/0x7F281A8cdF66eF5e9db8434Ec6D97acc1bc01E78).

# Events

## DepositTransferred

```solidity
event DepositTransferred(uint256 indexed tokenId, address indexed oldOwner, address indexed newOwner);
```

Emitted when ownership of a deposit changes

- `tokenId` The ID of the deposit (and token) that is being transferred
- `oldOwner` The owner before the deposit was transferred
- `newOwner` The owner after the deposit was transferred

# Read-Only Functions

## deposits

```solidity
function deposits(uint256 tokenId) external view returns (uint256 L2TokenId, uint32 numberOfFarms, bool inLimitFarming, address owner);
```

Returns information about a deposited NFT

Params
- `tokenId` The ID of the deposit (and token) that is being transferred

Returns
- `L2TokenId` The nft layer2 id
- `numberOfFarms` The number of farms
- `inLimitFarming` The parameter showing if the token is in the limit farm
- `owner` The owner of deposit

# State-Changing Functions

## connectVirtualPool

```solidity
function connectVirtualPool(IAlgebraPool pool, address virtualPool) external;
```

Updates activeIncentive in AlgebraPool. Only farming can do it

Params
- `pool` The AlgebraPool for which farming was created
- `virtualPool` The virtual pool to be connected

## enterFarming

```solidity
function enterFarming(IncentiveKey memory key, uint256 tokenId, uint256 tokensLocked, bool isLimit) external;
```

Enters in incentive (time-limited or eternal farming) with NFT-position token. token must be deposited in FarmingCenter

Params
- `key` The incentive event key
- `tokenId` The id of position NFT
- `tokensLocked` Amount of tokens to lock for liquidity multiplier (if tiers are used)
- `isLimit` Is incentive time-limited or eternal

## exitFarming

```solidity
function exitFarming(IncentiveKey memory key, uint256 tokenId, bool isLimit) external;
```

Exits from incentive (time-limited or eternal farming) with NFT-position token

Params
- `key` The incentive event key
- `tokenId` The id of position NFT
- `isLimit` Is incentive time-limited or eternal

## collect

```solidity
function collect(INonfungiblePositionManager.CollectParams calldata params) external returns (uint256 amount0, uint256 amount1);
```

Collects up to a maximum amount of fees owed to a specific position to the recipient. "proxies" to NonfungiblePositionManager

Params
- `params` 
  - `tokenId` The ID of the NFT for which tokens are being collected
  - `recipient` The account that should receive the tokens
  - `amount0Max` The maximum amount of token0 to collect
  - `amount1Max` The maximum amount of token1 to collect

Return
- `amount0` The amount of fees collected in token0
- `amount1` The amount of fees collected in token1

## collectRewards

```solidity
function collectRewards(IncentiveKey memory key, uint256 tokenId) external returns (uint256 reward, uint256 bonusReward);
```

Used to collect reward from eternal farming. Then reward can be claimed.

Params
- `key` The incentive event key
- `tokenId` The id of position NFT

Return
- `reward` The amount of collected reward
- `bonusReward` The amount of collected  bonus reward

## claimReward

```solidity
function claimReward(IERC20Minimal rewardToken, address to, uint256 amountRequestedIncentive, uint256 amountRequestedEternal) external returns (uint256 reward);
```

Used to claim and send rewards from farming(s). can be used via static call to get current rewards for user

Params
- `rewardToken` The token that is a reward
- `to` The address to be rewarded
- `amountRequestedIncentive` Amount to claim in incentive (limit) farming
- `amountRequestedEternal` Amount to claim in eternal farming

Return
- `reward` The summary amount of claimed rewards

## withdrawToken

```solidity
function withdrawToken(uint256 tokenId, address to, bytes memory data) external;
```

Withdraw Algebra NFT-position token. can be used via static call to get current rewards for user

Params
- `tokenId` The id of position NFT
- `to` New owner of position NFT
- `data` The additional data for NonfungiblePositionManager
