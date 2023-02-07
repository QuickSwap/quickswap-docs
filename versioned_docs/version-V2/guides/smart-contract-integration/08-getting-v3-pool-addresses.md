---
id: 08-getting-v3-pool-addresses
title: Pool Addresses
---

# V3 Pool Addresses

# poolByPair

The most obvious way to get the address for a pool is to call [poolByPair](../../reference/smart-contracts/v3/01-factory.md#poolbypair) on the factory. If the pool exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pool exists.
- Requires an on-chain lookup.

