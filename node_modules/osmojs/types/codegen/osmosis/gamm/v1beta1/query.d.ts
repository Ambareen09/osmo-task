import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: Long;
}
/** =============================== Pool */
export interface QueryPoolRequestAmino {
    pool_id: string;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolResponse {
    pool?: (Pool1 & Pool2 & Any) | undefined;
}
export interface QueryPoolResponseAmino {
    pool?: AnyAmino;
}
export interface QueryPoolResponseSDKType {
    pool?: AnySDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: (Pool1 & Pool2 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestAmino {
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {
}
export interface QueryNumPoolsResponse {
    numPools: Long;
}
export interface QueryNumPoolsResponseAmino {
    num_pools: string;
}
export interface QueryNumPoolsResponseSDKType {
    num_pools: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
    poolId: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestAmino {
    pool_id: string;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolTypeResponse {
    poolType: string;
}
export interface QueryPoolTypeResponseAmino {
    pool_type: string;
}
export interface QueryPoolTypeResponseSDKType {
    pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
    poolId: Long;
    tokensIn: Coin[];
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestAmino {
    pool_id: string;
    tokens_in: CoinAmino[];
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
    pool_id: Long;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
    shareOutAmount: string;
    tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseAmino {
    share_out_amount: string;
    tokens_out: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
    share_out_amount: string;
    tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
    poolId: Long;
    shareInAmount: string;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
    pool_id: string;
    share_in_amount: string;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    pool_id: Long;
    share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
    tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
    tokens_out: CoinAmino[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
    pool_id: string;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolParamsResponse {
    params?: Any;
}
export interface QueryPoolParamsResponseAmino {
    params?: AnyAmino;
}
export interface QueryPoolParamsResponseSDKType {
    params?: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: Long;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestAmino {
    pool_id: string;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
    pool_id: Long;
}
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseAmino {
    liquidity: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: Long;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestAmino {
    pool_id: string;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
    pool_id: Long;
}
export interface QueryTotalSharesResponse {
    totalShares?: Coin;
}
export interface QueryTotalSharesResponseAmino {
    total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseSDKType {
    total_shares?: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
    poolId: Long;
    tokensIn: Coin[];
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
    pool_id: string;
    tokens_in: CoinAmino[];
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    pool_id: Long;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
    tokensOut: Coin[];
    sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
    tokens_out: CoinAmino[];
    shares_out: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    tokens_out: CoinSDKType[];
    shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: Long;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
    pool_id: string;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
    pool_id: Long;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
    minLiquidity: Coin[];
    poolType: string;
    pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestAmino {
    min_liquidity: CoinAmino[];
    pool_type: string;
    pagination?: PageRequestAmino;
}
export interface QueryPoolsWithFilterRequestSDKType {
    min_liquidity: CoinSDKType[];
    pool_type: string;
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
    pools: (Pool1 & Pool2 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsWithFilterResponseSDKType {
    pools: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    token_in: string;
    routes: SwapAmountInRouteAmino[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: Long;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface QuerySwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    routes: SwapAmountOutRouteAmino[];
    token_out: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: Long;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface QuerySwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityRequestAmino {
}
export interface QueryTotalLiquidityRequestSDKType {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseAmino {
    liquidity: CoinAmino[];
}
export interface QueryTotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromJSON(_: any): QueryNumPoolsRequest;
    toJSON(_: QueryNumPoolsRequest): unknown;
    fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
    fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest;
    toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromJSON(object: any): QueryNumPoolsResponse;
    toJSON(message: QueryNumPoolsResponse): unknown;
    fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
    fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse;
    toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino;
};
export declare const QueryPoolTypeRequest: {
    encode(message: QueryPoolTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeRequest;
    fromJSON(object: any): QueryPoolTypeRequest;
    toJSON(message: QueryPoolTypeRequest): unknown;
    fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest;
    fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest;
    toAmino(message: QueryPoolTypeRequest): QueryPoolTypeRequestAmino;
};
export declare const QueryPoolTypeResponse: {
    encode(message: QueryPoolTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeResponse;
    fromJSON(object: any): QueryPoolTypeResponse;
    toJSON(message: QueryPoolTypeResponse): unknown;
    fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse;
    fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse;
    toAmino(message: QueryPoolTypeResponse): QueryPoolTypeResponseAmino;
};
export declare const QueryCalcJoinPoolSharesRequest: {
    encode(message: QueryCalcJoinPoolSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolSharesRequest;
    toJSON(message: QueryCalcJoinPoolSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest;
    fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest;
    toAmino(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAmino;
};
export declare const QueryCalcJoinPoolSharesResponse: {
    encode(message: QueryCalcJoinPoolSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolSharesResponse;
    toJSON(message: QueryCalcJoinPoolSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse;
    fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse;
    toAmino(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAmino;
};
export declare const QueryCalcExitPoolCoinsFromSharesRequest: {
    encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest;
    fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest;
    toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAmino;
};
export declare const QueryCalcExitPoolCoinsFromSharesResponse: {
    encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse;
    fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse;
    toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAmino;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromJSON(object: any): QueryPoolParamsRequest;
    toJSON(message: QueryPoolParamsRequest): unknown;
    fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
    fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest;
    toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromJSON(object: any): QueryPoolParamsResponse;
    toJSON(message: QueryPoolParamsResponse): unknown;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
    fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse;
    toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino;
};
export declare const QueryTotalPoolLiquidityRequest: {
    encode(message: QueryTotalPoolLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    toJSON(message: QueryTotalPoolLiquidityRequest): unknown;
    fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
    fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest;
    toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino;
};
export declare const QueryTotalPoolLiquidityResponse: {
    encode(message: QueryTotalPoolLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    toJSON(message: QueryTotalPoolLiquidityResponse): unknown;
    fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
    fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse;
    toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromJSON(object: any): QueryTotalSharesRequest;
    toJSON(message: QueryTotalSharesRequest): unknown;
    fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
    fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest;
    toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromJSON(object: any): QueryTotalSharesResponse;
    toJSON(message: QueryTotalSharesResponse): unknown;
    fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
    fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse;
    toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino;
};
export declare const QueryCalcJoinPoolNoSwapSharesRequest: {
    encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest;
    fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest;
    toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAmino;
};
export declare const QueryCalcJoinPoolNoSwapSharesResponse: {
    encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse;
    fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse;
    toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAmino;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest;
    toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino;
};
export declare const QueryPoolsWithFilterRequest: {
    encode(message: QueryPoolsWithFilterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsWithFilterRequest;
    fromJSON(object: any): QueryPoolsWithFilterRequest;
    toJSON(message: QueryPoolsWithFilterRequest): unknown;
    fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest;
    fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest;
    toAmino(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAmino;
};
export declare const QueryPoolsWithFilterResponse: {
    encode(message: QueryPoolsWithFilterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsWithFilterResponse;
    fromJSON(object: any): QueryPoolsWithFilterResponse;
    toJSON(message: QueryPoolsWithFilterResponse): unknown;
    fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse;
    fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse;
    toAmino(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAmino;
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
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    toJSON(message: QuerySwapExactAmountInRequest): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
    fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest;
    toAmino(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAmino;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    toJSON(message: QuerySwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
    fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse;
    toAmino(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAmino;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    toJSON(message: QuerySwapExactAmountOutRequest): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
    fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest;
    toAmino(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAmino;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    toJSON(message: QuerySwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
    fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse;
    toAmino(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAmino;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    toJSON(_: QueryTotalLiquidityRequest): unknown;
    fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
    fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest;
    toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    toJSON(message: QueryTotalLiquidityResponse): unknown;
    fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
    fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse;
    toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino;
};
export declare const PoolI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Pool1 | Pool2 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("../pool-models/balancer/balancerPool").PoolAmino;
} | {
    type: string;
    value: import("../pool-models/stableswap/stableswap_pool").PoolAmino;
};
