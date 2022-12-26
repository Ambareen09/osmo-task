import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn?: Coin;
    tokenOutMinAmount: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
/** ===================== MsgSwapExactAmountIn */
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
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut?: Coin;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
/** ===================== MsgSwapExactAmountOut */
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
