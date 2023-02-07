---
id: 07-limit-farming
title: Limit Farming
tags: smart-contracts, documentation
---
# Limit Farming

## Code

[`AlgebraLimitFarming.sol`](https://polygonscan.com/address/0x9923f42a02A82dA63EE0DbbC5f8E311e3DD8A1f8)

## Address

`AlgebraLimitFarming` is deployed at `0x9923f42a02A82dA63EE0DbbC5f8E311e3DD8A1f8` on the Polygon [mainnet](https://polygonscan.com/address/0x9923f42a02A82dA63EE0DbbC5f8E311e3DD8A1f8).

# Events

## LimitFarmingCreated

```solidity
event LimitFarmingCreated(IERC20Minimal indexed rewardToken, IERC20Minimal indexed bonusRewardToken, IAlgebraPool indexed pool, uint256 startTime, uint256 endTime, uint256 reward, uint256 bonusReward, Tiers tiers, address multiplierToken, uint24 minimalAllowedPositionWidth, uint32 enterStartTime);
```

Emitted when a liquidity mining incentive has been created

- `rewardToken` The token being distributed as a reward
- `bonusRewardToken` The token being distributed as a bonus reward
- `pool` The Algebra pool
- `startTime` The time when the incentive program begins
- `endTime` The time when rewards stop accruing
- `reward` The amount of reward tokens to be distributed
- `bonusReward` The amount of bonus reward tokens to be distributed
- `tiers` The amounts of locked token for liquidity multipliers
- `multiplierToken` The address of token which can be locked to get liquidity multiplier
- `minimalAllowedPositionWidth` The minimal allowed position width (tickUpper - tickLower)
- `enterStartTime` The time when enter becomes possible

## RewardAmountsDecreased

```solidity
event RewardAmountsDecreased(uint256 reward, uint256 bonusReward, bytes32 incentiveId);
```

# Read-Only Functions

## maxIncentiveDuration

```solidity
function maxIncentiveDuration() external view returns (uint256);
```

The max duration of an incentive in seconds

## maxIncentiveStartLeadTime

```solidity
function maxIncentiveStartLeadTime() external view returns (uint256);
```

The max amount of seconds into the future the incentive startTime can be set

## maxIncentiveStartLeadTime

```solidity
function farms(uint256 tokenId, bytes32 incentiveId) external view returns (uint128 liquidity, int24 tickLower, int24 tickUpper);
```

Returns information about a farmd liquidity NFT

Params
- `tokenId` The ID of the farmd token
- `incentiveId` The ID of the incentive for which the token is farmed

Return
- `liquidity` The amount of liquidity in the NFT as of the last time the rewards were computed
- `tickLower` The lower end of the tick range for the position
- `tickUpper` The upper end of the tick range for the position

# State-Changing Functions

## createLimitFarming

```solidity
struct IncentiveParams {
  uint256 reward;
  uint256 bonusReward;
  uint24 minimalPositionWidth;
  address multiplierToken;
  uint32 enterStartTime;
}
function createLimitFarming(IncentiveKey memory key, Tiers calldata tiers, IncentiveParams memory params) external returns (address virtualPool)
```

Params
- `reward` The amount of reward tokens to be distributed
- `bonusReward` The amount of bonus reward tokens to be distributed
- `minimalPositionWidth` The minimal allowed width of position (tickUpper - tickLower)
- `multiplierToken` The address of token which can be locked to get liquidity multiplier
- `enterStartTime` The time when enter should become possible
}

## addRewards

```solidity
function addRewards(IncentiveKey memory key, uint256 reward, uint256 bonusReward) external;
```

## decreaseRewardsAmount

```solidity
function decreaseRewardsAmount(IncentiveKey memory key, uint256 rewardAmount, uint256 bonusRewardAmount) external;
```
