import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteAmino {
    pool_id: string;
    token_out_denom: string;
}
export interface SwapAmountInRouteSDKType {
    pool_id: Long;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteAmino {
    pool_id: string;
    token_in_denom: string;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: Long;
    token_in_denom: string;
}
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
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
