import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestAmino {
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseAmino {
    fee_tokens: FeeTokenAmino[];
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: Long;
    spotPrice: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
    poolID: string;
    spot_price: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
    poolID: Long;
    spot_price: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdRequestAmino {
    denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: Long;
}
export interface QueryDenomPoolIdResponseAmino {
    poolID: string;
}
export interface QueryDenomPoolIdResponseSDKType {
    poolID: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestAmino {
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseAmino {
    base_denom: string;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromJSON(_: any): QueryFeeTokensRequest;
    toJSON(_: QueryFeeTokensRequest): unknown;
    fromPartial(_: Partial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
    fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest;
    toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromJSON(object: any): QueryFeeTokensResponse;
    toJSON(message: QueryFeeTokensResponse): unknown;
    fromPartial(object: Partial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
    fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse;
    toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino;
};
export declare const QueryDenomSpotPriceRequest: {
    encode(message: QueryDenomSpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromJSON(object: any): QueryDenomSpotPriceRequest;
    toJSON(message: QueryDenomSpotPriceRequest): unknown;
    fromPartial(object: Partial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
    fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest;
    toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino;
};
export declare const QueryDenomSpotPriceResponse: {
    encode(message: QueryDenomSpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponse;
    fromJSON(object: any): QueryDenomSpotPriceResponse;
    toJSON(message: QueryDenomSpotPriceResponse): unknown;
    fromPartial(object: Partial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
    fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse;
    toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    toJSON(message: QueryDenomPoolIdRequest): unknown;
    fromPartial(object: Partial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
    fromAmino(object: QueryDenomPoolIdRequestAmino): QueryDenomPoolIdRequest;
    toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAmino;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    toJSON(message: QueryDenomPoolIdResponse): unknown;
    fromPartial(object: Partial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
    fromAmino(object: QueryDenomPoolIdResponseAmino): QueryDenomPoolIdResponse;
    toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAmino;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(_: any): QueryBaseDenomRequest;
    toJSON(_: QueryBaseDenomRequest): unknown;
    fromPartial(_: Partial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
    fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest;
    toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestAmino;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial(object: Partial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
    fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse;
    toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino;
};
