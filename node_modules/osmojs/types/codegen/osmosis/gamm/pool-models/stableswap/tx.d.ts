import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams?: PoolParams;
    initialPoolLiquidity: Coin[];
    scalingFactors: Long[];
    futurePoolGovernor: string;
    scalingFactorController: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
    sender: string;
    pool_params?: PoolParamsAmino;
    initial_pool_liquidity: CoinAmino[];
    scaling_factors: string[];
    future_pool_governor: string;
    scaling_factor_controller: string;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
    sender: string;
    pool_params?: PoolParamsSDKType;
    initial_pool_liquidity: CoinSDKType[];
    scaling_factors: Long[];
    future_pool_governor: string;
    scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
    poolId: Long;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
    pool_id: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
    pool_id: Long;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
    sender: string;
    poolId: Long;
    scalingFactors: Long[];
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
    sender: string;
    pool_id: string;
    scaling_factors: string[];
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
    sender: string;
    pool_id: Long;
    scaling_factors: Long[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {
}
export declare const MsgCreateStableswapPool: {
    encode(message: MsgCreateStableswapPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromJSON(object: any): MsgCreateStableswapPool;
    toJSON(message: MsgCreateStableswapPool): unknown;
    fromPartial(object: Partial<MsgCreateStableswapPool>): MsgCreateStableswapPool;
    fromAmino(object: MsgCreateStableswapPoolAmino): MsgCreateStableswapPool;
    toAmino(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAmino;
};
export declare const MsgCreateStableswapPoolResponse: {
    encode(message: MsgCreateStableswapPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse;
    fromJSON(object: any): MsgCreateStableswapPoolResponse;
    toJSON(message: MsgCreateStableswapPoolResponse): unknown;
    fromPartial(object: Partial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse;
    fromAmino(object: MsgCreateStableswapPoolResponseAmino): MsgCreateStableswapPoolResponse;
    toAmino(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAmino;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromJSON(object: any): MsgStableSwapAdjustScalingFactors;
    toJSON(message: MsgStableSwapAdjustScalingFactors): unknown;
    fromPartial(object: Partial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors;
    fromAmino(object: MsgStableSwapAdjustScalingFactorsAmino): MsgStableSwapAdjustScalingFactors;
    toAmino(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAmino;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse;
    fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse;
    toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown;
    fromPartial(_: Partial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse;
    fromAmino(_: MsgStableSwapAdjustScalingFactorsResponseAmino): MsgStableSwapAdjustScalingFactorsResponse;
    toAmino(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAmino;
};
