import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface MsgLockTokens {
    owner: string;
    duration?: Duration;
    coins: Coin[];
}
export interface MsgLockTokensAmino {
    owner: string;
    duration?: DurationAmino;
    coins: CoinAmino[];
}
export interface MsgLockTokensSDKType {
    owner: string;
    duration?: DurationSDKType;
    coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
    ID: Long;
}
export interface MsgLockTokensResponseAmino {
    ID: string;
}
export interface MsgLockTokensResponseSDKType {
    ID: Long;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllAmino {
    owner: string;
}
export interface MsgBeginUnlockingAllSDKType {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseAmino {
    unlocks: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseSDKType {
    unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: Long;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgBeginUnlockingAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
export interface MsgBeginUnlockingSDKType {
    owner: string;
    ID: Long;
    coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
}
export interface MsgBeginUnlockingResponseAmino {
    success: boolean;
}
export interface MsgBeginUnlockingResponseSDKType {
    success: boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
    owner: string;
    ID: Long;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration?: Duration;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
    owner: string;
    ID: string;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration?: DurationAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
    owner: string;
    ID: Long;
    duration?: DurationSDKType;
}
export interface MsgExtendLockupResponse {
    success: boolean;
}
export interface MsgExtendLockupResponseAmino {
    success: boolean;
}
export interface MsgExtendLockupResponseSDKType {
    success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
    owner: string;
    ID: Long;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
    owner: string;
    ID: Long;
    coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
    success: boolean;
}
export interface MsgForceUnlockResponseAmino {
    success: boolean;
}
export interface MsgForceUnlockResponseSDKType {
    success: boolean;
}
export declare const MsgLockTokens: {
    encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens;
    fromJSON(object: any): MsgLockTokens;
    toJSON(message: MsgLockTokens): unknown;
    fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens;
    fromAmino(object: MsgLockTokensAmino): MsgLockTokens;
    toAmino(message: MsgLockTokens): MsgLockTokensAmino;
};
export declare const MsgLockTokensResponse: {
    encode(message: MsgLockTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponse;
    fromJSON(object: any): MsgLockTokensResponse;
    toJSON(message: MsgLockTokensResponse): unknown;
    fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse;
    fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse;
    toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino;
};
export declare const MsgBeginUnlockingAll: {
    encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromJSON(object: any): MsgBeginUnlockingAll;
    toJSON(message: MsgBeginUnlockingAll): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll;
    fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll;
    toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino;
};
export declare const MsgBeginUnlockingAllResponse: {
    encode(message: MsgBeginUnlockingAllResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse;
    fromJSON(object: any): MsgBeginUnlockingAllResponse;
    toJSON(message: MsgBeginUnlockingAllResponse): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse;
    fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse;
    toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino;
};
export declare const MsgBeginUnlocking: {
    encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromJSON(object: any): MsgBeginUnlocking;
    toJSON(message: MsgBeginUnlocking): unknown;
    fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking;
    fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking;
    toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino;
};
export declare const MsgBeginUnlockingResponse: {
    encode(message: MsgBeginUnlockingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingResponse;
    fromJSON(object: any): MsgBeginUnlockingResponse;
    toJSON(message: MsgBeginUnlockingResponse): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse;
    fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse;
    toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino;
};
export declare const MsgExtendLockup: {
    encode(message: MsgExtendLockup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockup;
    fromJSON(object: any): MsgExtendLockup;
    toJSON(message: MsgExtendLockup): unknown;
    fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup;
    fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup;
    toAmino(message: MsgExtendLockup): MsgExtendLockupAmino;
};
export declare const MsgExtendLockupResponse: {
    encode(message: MsgExtendLockupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendLockupResponse;
    fromJSON(object: any): MsgExtendLockupResponse;
    toJSON(message: MsgExtendLockupResponse): unknown;
    fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse;
    fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse;
    toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino;
};
export declare const MsgForceUnlock: {
    encode(message: MsgForceUnlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceUnlock;
    fromJSON(object: any): MsgForceUnlock;
    toJSON(message: MsgForceUnlock): unknown;
    fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock;
    fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock;
    toAmino(message: MsgForceUnlock): MsgForceUnlockAmino;
};
export declare const MsgForceUnlockResponse: {
    encode(message: MsgForceUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceUnlockResponse;
    fromJSON(object: any): MsgForceUnlockResponse;
    toJSON(message: MsgForceUnlockResponse): unknown;
    fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse;
    fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse;
    toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino;
};
