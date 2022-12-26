import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    poolId: Long;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolAmino {
    sender: string;
    pool_id: string;
    share_out_amount: string;
    token_in_maxs: CoinAmino[];
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolSDKType {
    sender: string;
    pool_id: Long;
    share_out_amount: string;
    token_in_maxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
    shareOutAmount: string;
    tokenIn: Coin[];
}
export interface MsgJoinPoolResponseAmino {
    share_out_amount: string;
    token_in: CoinAmino[];
}
export interface MsgJoinPoolResponseSDKType {
    share_out_amount: string;
    token_in: CoinSDKType[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: Long;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
/** ===================== MsgExitPool */
export interface MsgExitPoolAmino {
    sender: string;
    pool_id: string;
    share_in_amount: string;
    token_out_mins: CoinAmino[];
}
/** ===================== MsgExitPool */
export interface MsgExitPoolSDKType {
    sender: string;
    pool_id: Long;
    share_in_amount: string;
    token_out_mins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
    tokenOut: Coin[];
}
export interface MsgExitPoolResponseAmino {
    token_out: CoinAmino[];
}
export interface MsgExitPoolResponseSDKType {
    token_out: CoinSDKType[];
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteAmino {
    pool_id: string;
    token_out_denom: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteSDKType {
    pool_id: Long;
    token_out_denom: string;
}
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn?: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in?: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteAmino {
    pool_id: string;
    token_in_denom: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteSDKType {
    pool_id: Long;
    token_in_denom: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut?: Coin;
}
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out?: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: Long;
    tokenIn?: Coin;
    shareOutMinAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInAmino {
    sender: string;
    pool_id: string;
    token_in?: CoinAmino;
    share_out_min_amount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
    sender: string;
    pool_id: Long;
    token_in?: CoinSDKType;
    share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
export interface MsgJoinSwapExternAmountInResponseAmino {
    share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
    share_out_amount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: Long;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutAmino {
    sender: string;
    pool_id: string;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutSDKType {
    sender: string;
    pool_id: Long;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
    token_in_amount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: Long;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInAmino {
    sender: string;
    pool_id: string;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInSDKType {
    sender: string;
    pool_id: Long;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgExitSwapShareAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: Long;
    tokenOut?: Coin;
    shareInMaxAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutAmino {
    sender: string;
    pool_id: string;
    token_out?: CoinAmino;
    share_in_max_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
    sender: string;
    pool_id: Long;
    token_out?: CoinSDKType;
    share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export interface MsgExitSwapExternAmountOutResponseAmino {
    share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
    share_in_amount: string;
}
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
    fromAmino(object: MsgJoinPoolAmino): MsgJoinPool;
    toAmino(message: MsgJoinPool): MsgJoinPoolAmino;
};
export declare const MsgJoinPoolResponse: {
    encode(message: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(object: any): MsgJoinPoolResponse;
    toJSON(message: MsgJoinPoolResponse): unknown;
    fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
    fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse;
    toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    fromPartial(object: Partial<MsgExitPool>): MsgExitPool;
    fromAmino(object: MsgExitPoolAmino): MsgExitPool;
    toAmino(message: MsgExitPool): MsgExitPoolAmino;
};
export declare const MsgExitPoolResponse: {
    encode(message: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(object: any): MsgExitPoolResponse;
    toJSON(message: MsgExitPoolResponse): unknown;
    fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse;
    fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse;
    toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino;
};
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
};
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
    fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse;
    toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
    fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute;
    toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
    fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut;
    toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
    fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse;
    toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino;
};
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    fromPartial(object: Partial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
    fromAmino(object: MsgJoinSwapExternAmountInAmino): MsgJoinSwapExternAmountIn;
    toAmino(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAmino;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(object: any): MsgJoinSwapExternAmountInResponse;
    toJSON(message: MsgJoinSwapExternAmountInResponse): unknown;
    fromPartial(object: Partial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
    fromAmino(object: MsgJoinSwapExternAmountInResponseAmino): MsgJoinSwapExternAmountInResponse;
    toAmino(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAmino;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
    fromAmino(object: MsgJoinSwapShareAmountOutAmino): MsgJoinSwapShareAmountOut;
    toAmino(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAmino;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(object: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
    fromAmino(object: MsgJoinSwapShareAmountOutResponseAmino): MsgJoinSwapShareAmountOutResponse;
    toAmino(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAmino;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    fromPartial(object: Partial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
    fromAmino(object: MsgExitSwapShareAmountInAmino): MsgExitSwapShareAmountIn;
    toAmino(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAmino;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(object: any): MsgExitSwapShareAmountInResponse;
    toJSON(message: MsgExitSwapShareAmountInResponse): unknown;
    fromPartial(object: Partial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
    fromAmino(object: MsgExitSwapShareAmountInResponseAmino): MsgExitSwapShareAmountInResponse;
    toAmino(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAmino;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    fromPartial(object: Partial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
    fromAmino(object: MsgExitSwapExternAmountOutAmino): MsgExitSwapExternAmountOut;
    toAmino(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAmino;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(object: any): MsgExitSwapExternAmountOutResponse;
    toJSON(message: MsgExitSwapExternAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
    fromAmino(object: MsgExitSwapExternAmountOutResponseAmino): MsgExitSwapExternAmountOutResponse;
    toAmino(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAmino;
};
