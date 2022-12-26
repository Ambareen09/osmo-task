import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** =============================== Params */
export interface ParamsRequest {
}
/** =============================== Params */
export interface ParamsRequestAmino {
}
/** =============================== Params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    token_in: string;
    routes: SwapAmountInRouteAmino[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: Long;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface EstimateSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    routes: SwapAmountOutRouteAmino[];
    token_out: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: Long;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {
}
export interface NumPoolsResponse {
    numPools: Long;
}
export interface NumPoolsResponseAmino {
    num_pools: string;
}
export interface NumPoolsResponseSDKType {
    num_pools: Long;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
};
export declare const EstimateSwapExactAmountInRequest: {
    encode(message: EstimateSwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest;
    fromJSON(object: any): EstimateSwapExactAmountInRequest;
    toJSON(message: EstimateSwapExactAmountInRequest): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest;
    fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest;
    toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino;
};
export declare const EstimateSwapExactAmountInResponse: {
    encode(message: EstimateSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse;
    fromJSON(object: any): EstimateSwapExactAmountInResponse;
    toJSON(message: EstimateSwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse;
    fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse;
    toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino;
};
export declare const EstimateSwapExactAmountOutRequest: {
    encode(message: EstimateSwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest;
    fromJSON(object: any): EstimateSwapExactAmountOutRequest;
    toJSON(message: EstimateSwapExactAmountOutRequest): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest;
    fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest;
    toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino;
};
export declare const EstimateSwapExactAmountOutResponse: {
    encode(message: EstimateSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse;
    fromJSON(object: any): EstimateSwapExactAmountOutResponse;
    toJSON(message: EstimateSwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse;
    fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse;
    toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino;
};
export declare const NumPoolsRequest: {
    encode(_: NumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsRequest;
    fromJSON(_: any): NumPoolsRequest;
    toJSON(_: NumPoolsRequest): unknown;
    fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest;
    fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest;
    toAmino(_: NumPoolsRequest): NumPoolsRequestAmino;
};
export declare const NumPoolsResponse: {
    encode(message: NumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumPoolsResponse;
    fromJSON(object: any): NumPoolsResponse;
    toJSON(message: NumPoolsResponse): unknown;
    fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse;
    fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse;
    toAmino(message: NumPoolsResponse): NumPoolsResponseAmino;
};
