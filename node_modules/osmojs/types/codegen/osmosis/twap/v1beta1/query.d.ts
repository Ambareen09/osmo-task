import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArithmeticTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
    endTime?: Timestamp;
}
export interface ArithmeticTwapRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampAmino;
    end_time?: TimestampAmino;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
}
export interface ArithmeticTwapToNowRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestAmino {
}
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
export declare const ArithmeticTwapRequest: {
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromJSON(object: any): ArithmeticTwapRequest;
    toJSON(message: ArithmeticTwapRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
    fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest;
    toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino;
};
export declare const ArithmeticTwapResponse: {
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromJSON(object: any): ArithmeticTwapResponse;
    toJSON(message: ArithmeticTwapResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
    fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse;
    toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino;
};
export declare const ArithmeticTwapToNowRequest: {
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromJSON(object: any): ArithmeticTwapToNowRequest;
    toJSON(message: ArithmeticTwapToNowRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
    fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest;
    toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino;
};
export declare const ArithmeticTwapToNowResponse: {
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromJSON(object: any): ArithmeticTwapToNowResponse;
    toJSON(message: ArithmeticTwapToNowResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
    fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse;
    toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino;
};
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
