import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoAmino, DistrInfoSDKType, Params, ParamsAmino, ParamsSDKType } from "./incentives";
import { Gauge, GaugeAmino, GaugeSDKType } from "../../incentives/gauge";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryGaugeIdsRequest {
    poolId: Long;
}
export interface QueryGaugeIdsRequestAmino {
    pool_id: string;
}
export interface QueryGaugeIdsRequestSDKType {
    pool_id: Long;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseAmino {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationAmino[];
}
export interface QueryGaugeIdsResponseSDKType {
    gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: Long;
    duration?: Duration;
    gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    gauge_id: string;
    duration?: DurationAmino;
    gauge_incentive_percentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    gauge_id: Long;
    duration?: DurationSDKType;
    gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoRequestAmino {
}
export interface QueryDistrInfoRequestSDKType {
}
export interface QueryDistrInfoResponse {
    distrInfo?: DistrInfo;
}
export interface QueryDistrInfoResponseAmino {
    distr_info?: DistrInfoAmino;
}
export interface QueryDistrInfoResponseSDKType {
    distr_info?: DistrInfoSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseAmino {
    lockable_durations: DurationAmino[];
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface QueryIncentivizedPoolsRequestAmino {
}
export interface QueryIncentivizedPoolsRequestSDKType {
}
export interface IncentivizedPool {
    poolId: Long;
    lockableDuration?: Duration;
    gaugeId: Long;
}
export interface IncentivizedPoolAmino {
    pool_id: string;
    lockable_duration?: DurationAmino;
    gauge_id: string;
}
export interface IncentivizedPoolSDKType {
    pool_id: Long;
    lockable_duration?: DurationSDKType;
    gauge_id: Long;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseAmino {
    incentivized_pools: IncentivizedPoolAmino[];
}
export interface QueryIncentivizedPoolsResponseSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesRequestAmino {
}
export interface QueryExternalIncentiveGaugesRequestSDKType {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseAmino {
    data: GaugeAmino[];
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
    data: GaugeSDKType[];
}
export declare const QueryGaugeIdsRequest: {
    encode(message: QueryGaugeIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromJSON(object: any): QueryGaugeIdsRequest;
    toJSON(message: QueryGaugeIdsRequest): unknown;
    fromPartial(object: Partial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest;
    fromAmino(object: QueryGaugeIdsRequestAmino): QueryGaugeIdsRequest;
    toAmino(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAmino;
};
export declare const QueryGaugeIdsResponse: {
    encode(message: QueryGaugeIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromJSON(object: any): QueryGaugeIdsResponse;
    toJSON(message: QueryGaugeIdsResponse): unknown;
    fromPartial(object: Partial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse;
    fromAmino(object: QueryGaugeIdsResponseAmino): QueryGaugeIdsResponse;
    toAmino(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAmino;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
    fromPartial(object: Partial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromAmino(object: QueryGaugeIdsResponse_GaugeIdWithDurationAmino): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toAmino(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
};
export declare const QueryDistrInfoRequest: {
    encode(_: QueryDistrInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromJSON(_: any): QueryDistrInfoRequest;
    toJSON(_: QueryDistrInfoRequest): unknown;
    fromPartial(_: Partial<QueryDistrInfoRequest>): QueryDistrInfoRequest;
    fromAmino(_: QueryDistrInfoRequestAmino): QueryDistrInfoRequest;
    toAmino(_: QueryDistrInfoRequest): QueryDistrInfoRequestAmino;
};
export declare const QueryDistrInfoResponse: {
    encode(message: QueryDistrInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromJSON(object: any): QueryDistrInfoResponse;
    toJSON(message: QueryDistrInfoResponse): unknown;
    fromPartial(object: Partial<QueryDistrInfoResponse>): QueryDistrInfoResponse;
    fromAmino(object: QueryDistrInfoResponseAmino): QueryDistrInfoResponse;
    toAmino(message: QueryDistrInfoResponse): QueryDistrInfoResponseAmino;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
    fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest;
    toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
    fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse;
    toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino;
};
export declare const QueryIncentivizedPoolsRequest: {
    encode(_: QueryIncentivizedPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    toJSON(_: QueryIncentivizedPoolsRequest): unknown;
    fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest;
    fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest;
    toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino;
};
export declare const IncentivizedPool: {
    encode(message: IncentivizedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool;
    fromJSON(object: any): IncentivizedPool;
    toJSON(message: IncentivizedPool): unknown;
    fromPartial(object: Partial<IncentivizedPool>): IncentivizedPool;
    fromAmino(object: IncentivizedPoolAmino): IncentivizedPool;
    toAmino(message: IncentivizedPool): IncentivizedPoolAmino;
};
export declare const QueryIncentivizedPoolsResponse: {
    encode(message: QueryIncentivizedPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    toJSON(message: QueryIncentivizedPoolsResponse): unknown;
    fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse;
    fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse;
    toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromJSON(_: any): QueryExternalIncentiveGaugesRequest;
    toJSON(_: QueryExternalIncentiveGaugesRequest): unknown;
    fromPartial(_: Partial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest;
    fromAmino(_: QueryExternalIncentiveGaugesRequestAmino): QueryExternalIncentiveGaugesRequest;
    toAmino(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAmino;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromJSON(object: any): QueryExternalIncentiveGaugesResponse;
    toJSON(message: QueryExternalIncentiveGaugesResponse): unknown;
    fromPartial(object: Partial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse;
    fromAmino(object: QueryExternalIncentiveGaugesResponseAmino): QueryExternalIncentiveGaugesResponse;
    toAmino(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAmino;
};
