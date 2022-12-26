import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: Long;
    valAddr: string;
}
export interface MsgSuperfluidDelegateAmino {
    sender: string;
    lock_id: string;
    val_addr: string;
}
export interface MsgSuperfluidDelegateSDKType {
    sender: string;
    lock_id: Long;
    val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidDelegateResponseAmino {
}
export interface MsgSuperfluidDelegateResponseSDKType {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUndelegateAmino {
    sender: string;
    lock_id: string;
}
export interface MsgSuperfluidUndelegateSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUndelegateResponseAmino {
}
export interface MsgSuperfluidUndelegateResponseSDKType {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUnbondLockAmino {
    sender: string;
    lock_id: string;
}
export interface MsgSuperfluidUnbondLockSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUnbondLockResponseAmino {
}
export interface MsgSuperfluidUnbondLockResponseSDKType {
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateAmino {
    sender: string;
    coins: CoinAmino[];
    val_addr: string;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
    sender: string;
    coins: CoinSDKType[];
    val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
    ID: string;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
    ID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
    sender: string;
    poolId: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolAmino {
    sender: string;
    pool_id: string;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
    sender: string;
    pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
    exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
    exited_lock_ids: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
    exited_lock_ids: Long[];
}
export declare const MsgSuperfluidDelegate: {
    encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromJSON(object: any): MsgSuperfluidDelegate;
    toJSON(message: MsgSuperfluidDelegate): unknown;
    fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate;
    fromAmino(object: MsgSuperfluidDelegateAmino): MsgSuperfluidDelegate;
    toAmino(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAmino;
};
export declare const MsgSuperfluidDelegateResponse: {
    encode(_: MsgSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromJSON(_: any): MsgSuperfluidDelegateResponse;
    toJSON(_: MsgSuperfluidDelegateResponse): unknown;
    fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse;
    fromAmino(_: MsgSuperfluidDelegateResponseAmino): MsgSuperfluidDelegateResponse;
    toAmino(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAmino;
};
export declare const MsgSuperfluidUndelegate: {
    encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromJSON(object: any): MsgSuperfluidUndelegate;
    toJSON(message: MsgSuperfluidUndelegate): unknown;
    fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate;
    fromAmino(object: MsgSuperfluidUndelegateAmino): MsgSuperfluidUndelegate;
    toAmino(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAmino;
};
export declare const MsgSuperfluidUndelegateResponse: {
    encode(_: MsgSuperfluidUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromJSON(_: any): MsgSuperfluidUndelegateResponse;
    toJSON(_: MsgSuperfluidUndelegateResponse): unknown;
    fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse;
    fromAmino(_: MsgSuperfluidUndelegateResponseAmino): MsgSuperfluidUndelegateResponse;
    toAmino(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAmino;
};
export declare const MsgSuperfluidUnbondLock: {
    encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromJSON(object: any): MsgSuperfluidUnbondLock;
    toJSON(message: MsgSuperfluidUnbondLock): unknown;
    fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock;
    fromAmino(object: MsgSuperfluidUnbondLockAmino): MsgSuperfluidUnbondLock;
    toAmino(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAmino;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromJSON(_: any): MsgSuperfluidUnbondLockResponse;
    toJSON(_: MsgSuperfluidUnbondLockResponse): unknown;
    fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse;
    fromAmino(_: MsgSuperfluidUnbondLockResponseAmino): MsgSuperfluidUnbondLockResponse;
    toAmino(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAmino;
};
export declare const MsgLockAndSuperfluidDelegate: {
    encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromJSON(object: any): MsgLockAndSuperfluidDelegate;
    toJSON(message: MsgLockAndSuperfluidDelegate): unknown;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate;
    fromAmino(object: MsgLockAndSuperfluidDelegateAmino): MsgLockAndSuperfluidDelegate;
    toAmino(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAmino;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse;
    toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse;
    fromAmino(object: MsgLockAndSuperfluidDelegateResponseAmino): MsgLockAndSuperfluidDelegateResponse;
    toAmino(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAmino;
};
export declare const MsgUnPoolWhitelistedPool: {
    encode(message: MsgUnPoolWhitelistedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool;
    fromJSON(object: any): MsgUnPoolWhitelistedPool;
    toJSON(message: MsgUnPoolWhitelistedPool): unknown;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool;
    fromAmino(object: MsgUnPoolWhitelistedPoolAmino): MsgUnPoolWhitelistedPool;
    toAmino(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAmino;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse;
    fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse;
    toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse;
    fromAmino(object: MsgUnPoolWhitelistedPoolResponseAmino): MsgUnPoolWhitelistedPoolResponse;
    toAmino(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAmino;
};
