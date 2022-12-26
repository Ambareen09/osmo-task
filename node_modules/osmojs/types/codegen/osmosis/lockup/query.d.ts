import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceRequestAmino {
}
export interface ModuleBalanceRequestSDKType {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleBalanceResponseAmino {
    coins: CoinAmino[];
}
export interface ModuleBalanceResponseSDKType {
    coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountRequestAmino {
}
export interface ModuleLockedAmountRequestSDKType {
}
export interface ModuleLockedAmountResponse {
    coins: Coin[];
}
export interface ModuleLockedAmountResponseAmino {
    coins: CoinAmino[];
}
export interface ModuleLockedAmountResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockableCoinsRequest {
    owner: string;
}
export interface AccountUnlockableCoinsRequestAmino {
    owner: string;
}
export interface AccountUnlockableCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockableCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockableCoinsResponseAmino {
    coins: CoinAmino[];
}
export interface AccountUnlockableCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountUnlockingCoinsRequest {
    owner: string;
}
export interface AccountUnlockingCoinsRequestAmino {
    owner: string;
}
export interface AccountUnlockingCoinsRequestSDKType {
    owner: string;
}
export interface AccountUnlockingCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockingCoinsResponseAmino {
    coins: CoinAmino[];
}
export interface AccountUnlockingCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedCoinsRequest {
    owner: string;
}
export interface AccountLockedCoinsRequestAmino {
    owner: string;
}
export interface AccountLockedCoinsRequestSDKType {
    owner: string;
}
export interface AccountLockedCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedCoinsResponseAmino {
    coins: CoinAmino[];
}
export interface AccountLockedCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface AccountLockedPastTimeRequest {
    owner: string;
    timestamp?: Timestamp;
}
export interface AccountLockedPastTimeRequestAmino {
    owner: string;
    timestamp?: TimestampAmino;
}
export interface AccountLockedPastTimeRequestSDKType {
    owner: string;
    timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
    owner: string;
    timestamp?: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    owner: string;
    timestamp?: TimestampAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    owner: string;
    timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountUnlockedBeforeTimeRequest {
    owner: string;
    timestamp?: Timestamp;
}
export interface AccountUnlockedBeforeTimeRequestAmino {
    owner: string;
    timestamp?: TimestampAmino;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
    owner: string;
    timestamp?: TimestampSDKType;
}
export interface AccountUnlockedBeforeTimeResponse {
    locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountUnlockedBeforeTimeResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeDenomRequest {
    owner: string;
    timestamp?: Timestamp;
    denom: string;
}
export interface AccountLockedPastTimeDenomRequestAmino {
    owner: string;
    timestamp?: TimestampAmino;
    denom: string;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
    owner: string;
    timestamp?: TimestampSDKType;
    denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface LockedDenomRequest {
    denom: string;
    duration?: Duration;
}
export interface LockedDenomRequestAmino {
    denom: string;
    duration?: DurationAmino;
}
export interface LockedDenomRequestSDKType {
    denom: string;
    duration?: DurationSDKType;
}
export interface LockedDenomResponse {
    amount: string;
}
export interface LockedDenomResponseAmino {
    amount: string;
}
export interface LockedDenomResponseSDKType {
    amount: string;
}
export interface LockedRequest {
    lockId: Long;
}
export interface LockedRequestAmino {
    lock_id: string;
}
export interface LockedRequestSDKType {
    lock_id: Long;
}
export interface LockedResponse {
    lock?: PeriodLock;
}
export interface LockedResponseAmino {
    lock?: PeriodLockAmino;
}
export interface LockedResponseSDKType {
    lock?: PeriodLockSDKType;
}
export interface SyntheticLockupsByLockupIDRequest {
    lockId: Long;
}
export interface SyntheticLockupsByLockupIDRequestAmino {
    lock_id: string;
}
export interface SyntheticLockupsByLockupIDRequestSDKType {
    lock_id: Long;
}
export interface SyntheticLockupsByLockupIDResponse {
    syntheticLocks: SyntheticLock[];
}
export interface SyntheticLockupsByLockupIDResponseAmino {
    synthetic_locks: SyntheticLockAmino[];
}
export interface SyntheticLockupsByLockupIDResponseSDKType {
    synthetic_locks: SyntheticLockSDKType[];
}
export interface AccountLockedLongerDurationRequest {
    owner: string;
    duration?: Duration;
}
export interface AccountLockedLongerDurationRequestAmino {
    owner: string;
    duration?: DurationAmino;
}
export interface AccountLockedLongerDurationRequestSDKType {
    owner: string;
    duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedDurationRequest {
    owner: string;
    duration?: Duration;
}
export interface AccountLockedDurationRequestAmino {
    owner: string;
    duration?: DurationAmino;
}
export interface AccountLockedDurationRequestSDKType {
    owner: string;
    duration?: DurationSDKType;
}
export interface AccountLockedDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedDurationResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedDurationResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
    owner: string;
    duration?: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    owner: string;
    duration?: DurationAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    owner: string;
    duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationDenomRequest {
    owner: string;
    duration?: Duration;
    denom: string;
}
export interface AccountLockedLongerDurationDenomRequestAmino {
    owner: string;
    duration?: DurationAmino;
    denom: string;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
    owner: string;
    duration?: DurationSDKType;
    denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomResponseAmino {
    locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationDenomResponseSDKType {
    locks: PeriodLockSDKType[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ModuleBalanceRequest: {
    encode(_: ModuleBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceRequest;
    fromJSON(_: any): ModuleBalanceRequest;
    toJSON(_: ModuleBalanceRequest): unknown;
    fromPartial(_: Partial<ModuleBalanceRequest>): ModuleBalanceRequest;
    fromAmino(_: ModuleBalanceRequestAmino): ModuleBalanceRequest;
    toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestAmino;
};
export declare const ModuleBalanceResponse: {
    encode(message: ModuleBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceResponse;
    fromJSON(object: any): ModuleBalanceResponse;
    toJSON(message: ModuleBalanceResponse): unknown;
    fromPartial(object: Partial<ModuleBalanceResponse>): ModuleBalanceResponse;
    fromAmino(object: ModuleBalanceResponseAmino): ModuleBalanceResponse;
    toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseAmino;
};
export declare const ModuleLockedAmountRequest: {
    encode(_: ModuleLockedAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountRequest;
    fromJSON(_: any): ModuleLockedAmountRequest;
    toJSON(_: ModuleLockedAmountRequest): unknown;
    fromPartial(_: Partial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest;
    fromAmino(_: ModuleLockedAmountRequestAmino): ModuleLockedAmountRequest;
    toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestAmino;
};
export declare const ModuleLockedAmountResponse: {
    encode(message: ModuleLockedAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountResponse;
    fromJSON(object: any): ModuleLockedAmountResponse;
    toJSON(message: ModuleLockedAmountResponse): unknown;
    fromPartial(object: Partial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse;
    fromAmino(object: ModuleLockedAmountResponseAmino): ModuleLockedAmountResponse;
    toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAmino;
};
export declare const AccountUnlockableCoinsRequest: {
    encode(message: AccountUnlockableCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsRequest;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    toJSON(message: AccountUnlockableCoinsRequest): unknown;
    fromPartial(object: Partial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest;
    fromAmino(object: AccountUnlockableCoinsRequestAmino): AccountUnlockableCoinsRequest;
    toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAmino;
};
export declare const AccountUnlockableCoinsResponse: {
    encode(message: AccountUnlockableCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsResponse;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    toJSON(message: AccountUnlockableCoinsResponse): unknown;
    fromPartial(object: Partial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse;
    fromAmino(object: AccountUnlockableCoinsResponseAmino): AccountUnlockableCoinsResponse;
    toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAmino;
};
export declare const AccountUnlockingCoinsRequest: {
    encode(message: AccountUnlockingCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsRequest;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    toJSON(message: AccountUnlockingCoinsRequest): unknown;
    fromPartial(object: Partial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest;
    fromAmino(object: AccountUnlockingCoinsRequestAmino): AccountUnlockingCoinsRequest;
    toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAmino;
};
export declare const AccountUnlockingCoinsResponse: {
    encode(message: AccountUnlockingCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsResponse;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    toJSON(message: AccountUnlockingCoinsResponse): unknown;
    fromPartial(object: Partial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse;
    fromAmino(object: AccountUnlockingCoinsResponseAmino): AccountUnlockingCoinsResponse;
    toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAmino;
};
export declare const AccountLockedCoinsRequest: {
    encode(message: AccountLockedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsRequest;
    fromJSON(object: any): AccountLockedCoinsRequest;
    toJSON(message: AccountLockedCoinsRequest): unknown;
    fromPartial(object: Partial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest;
    fromAmino(object: AccountLockedCoinsRequestAmino): AccountLockedCoinsRequest;
    toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAmino;
};
export declare const AccountLockedCoinsResponse: {
    encode(message: AccountLockedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsResponse;
    fromJSON(object: any): AccountLockedCoinsResponse;
    toJSON(message: AccountLockedCoinsResponse): unknown;
    fromPartial(object: Partial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse;
    fromAmino(object: AccountLockedCoinsResponseAmino): AccountLockedCoinsResponse;
    toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAmino;
};
export declare const AccountLockedPastTimeRequest: {
    encode(message: AccountLockedPastTimeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeRequest;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    toJSON(message: AccountLockedPastTimeRequest): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest;
    fromAmino(object: AccountLockedPastTimeRequestAmino): AccountLockedPastTimeRequest;
    toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAmino;
};
export declare const AccountLockedPastTimeResponse: {
    encode(message: AccountLockedPastTimeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeResponse;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    toJSON(message: AccountLockedPastTimeResponse): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse;
    fromAmino(object: AccountLockedPastTimeResponseAmino): AccountLockedPastTimeResponse;
    toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAmino;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestAmino): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseAmino): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    toJSON(message: AccountUnlockedBeforeTimeRequest): unknown;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest;
    fromAmino(object: AccountUnlockedBeforeTimeRequestAmino): AccountUnlockedBeforeTimeRequest;
    toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAmino;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    toJSON(message: AccountUnlockedBeforeTimeResponse): unknown;
    fromPartial(object: Partial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse;
    fromAmino(object: AccountUnlockedBeforeTimeResponseAmino): AccountUnlockedBeforeTimeResponse;
    toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAmino;
};
export declare const AccountLockedPastTimeDenomRequest: {
    encode(message: AccountLockedPastTimeDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    toJSON(message: AccountLockedPastTimeDenomRequest): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest;
    fromAmino(object: AccountLockedPastTimeDenomRequestAmino): AccountLockedPastTimeDenomRequest;
    toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAmino;
};
export declare const AccountLockedPastTimeDenomResponse: {
    encode(message: AccountLockedPastTimeDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    toJSON(message: AccountLockedPastTimeDenomResponse): unknown;
    fromPartial(object: Partial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse;
    fromAmino(object: AccountLockedPastTimeDenomResponseAmino): AccountLockedPastTimeDenomResponse;
    toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAmino;
};
export declare const LockedDenomRequest: {
    encode(message: LockedDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomRequest;
    fromJSON(object: any): LockedDenomRequest;
    toJSON(message: LockedDenomRequest): unknown;
    fromPartial(object: Partial<LockedDenomRequest>): LockedDenomRequest;
    fromAmino(object: LockedDenomRequestAmino): LockedDenomRequest;
    toAmino(message: LockedDenomRequest): LockedDenomRequestAmino;
};
export declare const LockedDenomResponse: {
    encode(message: LockedDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomResponse;
    fromJSON(object: any): LockedDenomResponse;
    toJSON(message: LockedDenomResponse): unknown;
    fromPartial(object: Partial<LockedDenomResponse>): LockedDenomResponse;
    fromAmino(object: LockedDenomResponseAmino): LockedDenomResponse;
    toAmino(message: LockedDenomResponse): LockedDenomResponseAmino;
};
export declare const LockedRequest: {
    encode(message: LockedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedRequest;
    fromJSON(object: any): LockedRequest;
    toJSON(message: LockedRequest): unknown;
    fromPartial(object: Partial<LockedRequest>): LockedRequest;
    fromAmino(object: LockedRequestAmino): LockedRequest;
    toAmino(message: LockedRequest): LockedRequestAmino;
};
export declare const LockedResponse: {
    encode(message: LockedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedResponse;
    fromJSON(object: any): LockedResponse;
    toJSON(message: LockedResponse): unknown;
    fromPartial(object: Partial<LockedResponse>): LockedResponse;
    fromAmino(object: LockedResponseAmino): LockedResponse;
    toAmino(message: LockedResponse): LockedResponseAmino;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    toJSON(message: SyntheticLockupsByLockupIDRequest): unknown;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest;
    fromAmino(object: SyntheticLockupsByLockupIDRequestAmino): SyntheticLockupsByLockupIDRequest;
    toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAmino;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    toJSON(message: SyntheticLockupsByLockupIDResponse): unknown;
    fromPartial(object: Partial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse;
    fromAmino(object: SyntheticLockupsByLockupIDResponseAmino): SyntheticLockupsByLockupIDResponse;
    toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAmino;
};
export declare const AccountLockedLongerDurationRequest: {
    encode(message: AccountLockedLongerDurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationRequest;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    toJSON(message: AccountLockedLongerDurationRequest): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest;
    fromAmino(object: AccountLockedLongerDurationRequestAmino): AccountLockedLongerDurationRequest;
    toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAmino;
};
export declare const AccountLockedLongerDurationResponse: {
    encode(message: AccountLockedLongerDurationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationResponse;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    toJSON(message: AccountLockedLongerDurationResponse): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse;
    fromAmino(object: AccountLockedLongerDurationResponseAmino): AccountLockedLongerDurationResponse;
    toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAmino;
};
export declare const AccountLockedDurationRequest: {
    encode(message: AccountLockedDurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationRequest;
    fromJSON(object: any): AccountLockedDurationRequest;
    toJSON(message: AccountLockedDurationRequest): unknown;
    fromPartial(object: Partial<AccountLockedDurationRequest>): AccountLockedDurationRequest;
    fromAmino(object: AccountLockedDurationRequestAmino): AccountLockedDurationRequest;
    toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestAmino;
};
export declare const AccountLockedDurationResponse: {
    encode(message: AccountLockedDurationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationResponse;
    fromJSON(object: any): AccountLockedDurationResponse;
    toJSON(message: AccountLockedDurationResponse): unknown;
    fromPartial(object: Partial<AccountLockedDurationResponse>): AccountLockedDurationResponse;
    fromAmino(object: AccountLockedDurationResponseAmino): AccountLockedDurationResponse;
    toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseAmino;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    toJSON(message: AccountLockedLongerDurationDenomRequest): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest;
    fromAmino(object: AccountLockedLongerDurationDenomRequestAmino): AccountLockedLongerDurationDenomRequest;
    toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAmino;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    toJSON(message: AccountLockedLongerDurationDenomResponse): unknown;
    fromPartial(object: Partial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse;
    fromAmino(object: AccountLockedLongerDurationDenomResponseAmino): AccountLockedLongerDurationDenomResponse;
    toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAmino;
};
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
