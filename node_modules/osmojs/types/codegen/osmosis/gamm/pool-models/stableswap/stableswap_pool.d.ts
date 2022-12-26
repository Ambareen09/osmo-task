import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    exitFee: string;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
    swap_fee: string;
    exit_fee: string;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
    swap_fee: string;
    exit_fee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
    $typeUrl?: string;
    address: string;
    id: Long;
    poolParams?: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    futurePoolGovernor: string;
    /** sum of all LP shares */
    totalShares?: Coin;
    /** assets in the pool */
    poolLiquidity: Coin[];
    /** for calculation amognst assets with different precisions */
    scalingFactors: Long[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scalingFactorController: string;
}
/** Pool is the stableswap Pool struct */
export interface PoolAmino {
    address: string;
    id: string;
    pool_params?: PoolParamsAmino;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    future_pool_governor: string;
    /** sum of all LP shares */
    total_shares?: CoinAmino;
    /** assets in the pool */
    pool_liquidity: CoinAmino[];
    /** for calculation amognst assets with different precisions */
    scaling_factors: string[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scaling_factor_controller: string;
}
/** Pool is the stableswap Pool struct */
export interface PoolSDKType {
    $typeUrl?: string;
    address: string;
    id: Long;
    pool_params?: PoolParamsSDKType;
    future_pool_governor: string;
    total_shares?: CoinSDKType;
    pool_liquidity: CoinSDKType[];
    scaling_factors: Long[];
    scaling_factor_controller: string;
}
export declare const PoolParams: {
    encode(message: PoolParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams;
    fromJSON(object: any): PoolParams;
    toJSON(message: PoolParams): unknown;
    fromPartial(object: Partial<PoolParams>): PoolParams;
    fromAmino(object: PoolParamsAmino): PoolParams;
    toAmino(message: PoolParams): PoolParamsAmino;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
};
