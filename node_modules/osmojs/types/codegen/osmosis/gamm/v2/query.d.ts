import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestAmino {
    pool_id: string;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest;
    toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
    fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse;
    toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino;
};
