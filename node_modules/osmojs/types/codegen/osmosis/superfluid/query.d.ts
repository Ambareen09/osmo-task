import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeRequestAmino {
    denom: string;
}
export interface AssetTypeRequestSDKType {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseAmino {
    asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseSDKType {
    asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsRequestAmino {
}
export interface AllAssetsRequestSDKType {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AllAssetsResponseAmino {
    assets: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseSDKType {
    assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierRequestAmino {
    denom: string;
}
export interface AssetMultiplierRequestSDKType {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseAmino {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
export interface AssetMultiplierResponseSDKType {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    valAddr: string;
    gaugeId: Long;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
    denom: string;
    val_addr: string;
    gauge_id: string;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
    denom: string;
    val_addr: string;
    gauge_id: Long;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseAmino {
    accounts: SuperfluidIntermediaryAccountInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
    accounts: SuperfluidIntermediaryAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestAmino {
    lock_id: string;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
    lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseAmino {
    account?: SuperfluidIntermediaryAccountInfoAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
    account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
    assets: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
    assets: DelegationsSDKType[];
}
export interface Delegations {
    valAddr: string;
    amountSfsd: string;
    osmoEquivalent: string;
}
export interface DelegationsAmino {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface DelegationsSDKType {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsRequestAmino {
}
export interface TotalSuperfluidDelegationsRequestSDKType {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseAmino {
    total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
    total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestAmino {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestSDKType {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseAmino {
    amount: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseSDKType {
    amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount?: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegatorAddress: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_undelegated_coins: CoinAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_undelegated_coins: CoinSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    total_delegated_coins: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    delegationResponse: DelegationResponse[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount?: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    delegation_response: DelegationResponseAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    delegation_response: DelegationResponseSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount?: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistRequestAmino {
}
export interface QueryUnpoolWhitelistRequestSDKType {
}
export interface QueryUnpoolWhitelistResponse {
    poolIds: Long[];
}
export interface QueryUnpoolWhitelistResponseAmino {
    pool_ids: string[];
}
export interface QueryUnpoolWhitelistResponseSDKType {
    pool_ids: Long[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
};
export declare const AssetTypeRequest: {
    encode(message: AssetTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial(object: Partial<AssetTypeRequest>): AssetTypeRequest;
    fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest;
    toAmino(message: AssetTypeRequest): AssetTypeRequestAmino;
};
export declare const AssetTypeResponse: {
    encode(message: AssetTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial(object: Partial<AssetTypeResponse>): AssetTypeResponse;
    fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse;
    toAmino(message: AssetTypeResponse): AssetTypeResponseAmino;
};
export declare const AllAssetsRequest: {
    encode(_: AllAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial(_: Partial<AllAssetsRequest>): AllAssetsRequest;
    fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest;
    toAmino(_: AllAssetsRequest): AllAssetsRequestAmino;
};
export declare const AllAssetsResponse: {
    encode(message: AllAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial(object: Partial<AllAssetsResponse>): AllAssetsResponse;
    fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse;
    toAmino(message: AllAssetsResponse): AllAssetsResponseAmino;
};
export declare const AssetMultiplierRequest: {
    encode(message: AssetMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial(object: Partial<AssetMultiplierRequest>): AssetMultiplierRequest;
    fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest;
    toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino;
};
export declare const AssetMultiplierResponse: {
    encode(message: AssetMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial(object: Partial<AssetMultiplierResponse>): AssetMultiplierResponse;
    fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse;
    toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial(object: Partial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo;
    fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo;
    toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino;
};
export declare const AllIntermediaryAccountsRequest: {
    encode(message: AllIntermediaryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest;
    fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest;
    toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino;
};
export declare const AllIntermediaryAccountsResponse: {
    encode(message: AllIntermediaryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse;
    fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse;
    toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino;
};
export declare const ConnectedIntermediaryAccountRequest: {
    encode(message: ConnectedIntermediaryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest;
    fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest;
    toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino;
};
export declare const ConnectedIntermediaryAccountResponse: {
    encode(message: ConnectedIntermediaryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse;
    fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse;
    toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest;
    toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest;
    toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse;
    toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse;
    toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino;
};
export declare const Delegations: {
    encode(message: Delegations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegations;
    fromJSON(object: any): Delegations;
    toJSON(message: Delegations): unknown;
    fromPartial(object: Partial<Delegations>): Delegations;
    fromAmino(object: DelegationsAmino): Delegations;
    toAmino(message: Delegations): DelegationsAmino;
};
export declare const TotalSuperfluidDelegationsRequest: {
    encode(_: TotalSuperfluidDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial(_: Partial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest;
    fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest;
    toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino;
};
export declare const TotalSuperfluidDelegationsResponse: {
    encode(message: TotalSuperfluidDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial(object: Partial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse;
    fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse;
    toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino;
};
export declare const SuperfluidDelegationAmountRequest: {
    encode(message: SuperfluidDelegationAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest;
    fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest;
    toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino;
};
export declare const SuperfluidDelegationAmountResponse: {
    encode(message: SuperfluidDelegationAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse;
    fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse;
    toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest;
    fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest;
    toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse;
    fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse;
    toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest;
    fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest;
    toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse;
    fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse;
    toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest;
    toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse;
    toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromJSON(object: any): QueryTotalDelegationByDelegatorRequest;
    toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest;
    fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest;
    toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromJSON(object: any): QueryTotalDelegationByDelegatorResponse;
    toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse;
    fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse;
    toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino;
};
export declare const QueryUnpoolWhitelistRequest: {
    encode(_: QueryUnpoolWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromJSON(_: any): QueryUnpoolWhitelistRequest;
    toJSON(_: QueryUnpoolWhitelistRequest): unknown;
    fromPartial(_: Partial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest;
    fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest;
    toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino;
};
export declare const QueryUnpoolWhitelistResponse: {
    encode(message: QueryUnpoolWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromJSON(object: any): QueryUnpoolWhitelistResponse;
    toJSON(message: QueryUnpoolWhitelistResponse): unknown;
    fromPartial(object: Partial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse;
    fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse;
    toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino;
};
