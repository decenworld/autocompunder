import type { VaultEntity } from '../../entities/vault';
import type { ChainEntity } from '../../entities/chain';
import type { TokenEntity } from '../../entities/token';
import { sortBy } from 'lodash-es';
import { nanoid } from '@reduxjs/toolkit';

export function createQuoteId(optionId: string): string {
  return `${optionId}-${nanoid()}`;
}

export function createOptionId(
  providerId: string,
  vaultId: VaultEntity['id'],
  chainId: ChainEntity['id'],
  addresses: TokenEntity['address'][]
): string {
  return `${providerId}-${vaultId}-${chainId}-${joinSortedAddresses(addresses)}`.toLowerCase();
}

export function createTokensId(
  chainId: ChainEntity['id'],
  addresses: TokenEntity['address'][]
): string {
  return `${chainId}-${joinSortedAddresses(addresses)}`.toLowerCase();
}

export function sortTokens(tokens: TokenEntity[]): TokenEntity[] {
  return sortBy(tokens, token => token.address.toLowerCase());
}

export function sortAddresses(tokens: TokenEntity['address'][]): TokenEntity['address'][] {
  return tokens.map(t => t.toLowerCase()).sort();
}

export function joinSortedAddresses(addresses: TokenEntity['address'][], delim: string = '-') {
  return sortAddresses(addresses).join(delim);
}
