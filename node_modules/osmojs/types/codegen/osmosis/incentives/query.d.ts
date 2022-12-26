import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestAmino {
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseAmino {
    /** Coins that have yet to be distributed */
    coins: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: Long;
}
export interface GaugeByIDRequestAmino {
    /** Gague ID being queried */
    id: string;
}
export interface GaugeByIDRequestSDKType {
    id: Long;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge;
}
export interface GaugeByIDResponseAmino {
    /** Gauge that corresponds to provided gague ID */
    gauge?: GaugeAmino;
}
export interface GaugeByIDResponseSDKType {
    gauge?: GaugeSDKType;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface GaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface GaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface GaugesResponseAmino {
    /** Upcoming and active gauges */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface GaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesResponseAmino {
    /** Active gagues only */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestAmino {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseAmino {
    /** Active gagues that match denom in query */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesResponseAmino {
    /** Gauges whose distribution is upcoming */
    data: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestAmino {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseAmino {
    /** Upcoming gagues that match denom in query */
    upcoming_gauges: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    upcoming_gauges: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface RewardsEstRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lockIds: Long[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    endEpoch: Long;
}
export interface RewardsEstRequestAmino {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lock_ids: string[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    end_epoch: string;
}
export interface RewardsEstRequestSDKType {
    owner: string;
    lock_ids: Long[];
    end_epoch: Long;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface RewardsEstResponseAmino {
    /**
     * Estimated coin rewards that will be recieved at provided address
     * from specified locks between current time and end epoch
     */
    coins: CoinAmino[];
}
export interface RewardsEstResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseAmino {
    /** Time durations that users can lock coins for in order to recieve rewards */
    lockable_durations: DurationAmino[];
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export declare const ModuleToDistributeCoinsRequest: {
    encode(_: ModuleToDistributeCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    toJSON(_: ModuleToDistributeCoinsRequest): unknown;
    fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
    fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest;
    toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino;
};
export declare const ModuleToDistributeCoinsResponse: {
    encode(message: ModuleToDistributeCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    toJSON(message: ModuleToDistributeCoinsResponse): unknown;
    fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
    fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse;
    toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino;
};
export declare const GaugeByIDRequest: {
    encode(message: GaugeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDRequest;
    fromJSON(object: any): GaugeByIDRequest;
    toJSON(message: GaugeByIDRequest): unknown;
    fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest;
    fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest;
    toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino;
};
export declare const GaugeByIDResponse: {
    encode(message: GaugeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugeByIDResponse;
    fromJSON(object: any): GaugeByIDResponse;
    toJSON(message: GaugeByIDResponse): unknown;
    fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse;
    fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse;
    toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino;
};
export declare const GaugesRequest: {
    encode(message: GaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesRequest;
    fromJSON(object: any): GaugesRequest;
    toJSON(message: GaugesRequest): unknown;
    fromPartial(object: Partial<GaugesRequest>): GaugesRequest;
    fromAmino(object: GaugesRequestAmino): GaugesRequest;
    toAmino(message: GaugesRequest): GaugesRequestAmino;
};
export declare const GaugesResponse: {
    encode(message: GaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GaugesResponse;
    fromJSON(object: any): GaugesResponse;
    toJSON(message: GaugesResponse): unknown;
    fromPartial(object: Partial<GaugesResponse>): GaugesResponse;
    fromAmino(object: GaugesResponseAmino): GaugesResponse;
    toAmino(message: GaugesResponse): GaugesResponseAmino;
};
export declare const ActiveGaugesRequest: {
    encode(message: ActiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromJSON(object: any): ActiveGaugesRequest;
    toJSON(message: ActiveGaugesRequest): unknown;
    fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest;
    fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest;
    toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino;
};
export declare const ActiveGaugesResponse: {
    encode(message: ActiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromJSON(object: any): ActiveGaugesResponse;
    toJSON(message: ActiveGaugesResponse): unknown;
    fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse;
    fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse;
    toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino;
};
export declare const ActiveGaugesPerDenomRequest: {
    encode(message: ActiveGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromJSON(object: any): ActiveGaugesPerDenomRequest;
    toJSON(message: ActiveGaugesPerDenomRequest): unknown;
    fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
    fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest;
    toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino;
};
export declare const ActiveGaugesPerDenomResponse: {
    encode(message: ActiveGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromJSON(object: any): ActiveGaugesPerDenomResponse;
    toJSON(message: ActiveGaugesPerDenomResponse): unknown;
    fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
    fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse;
    toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino;
};
export declare const UpcomingGaugesRequest: {
    encode(message: UpcomingGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromJSON(object: any): UpcomingGaugesRequest;
    toJSON(message: UpcomingGaugesRequest): unknown;
    fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
    fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest;
    toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino;
};
export declare const UpcomingGaugesResponse: {
    encode(message: UpcomingGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromJSON(object: any): UpcomingGaugesResponse;
    toJSON(message: UpcomingGaugesResponse): unknown;
    fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
    fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse;
    toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino;
};
export declare const UpcomingGaugesPerDenomRequest: {
    encode(message: UpcomingGaugesPerDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromJSON(object: any): UpcomingGaugesPerDenomRequest;
    toJSON(message: UpcomingGaugesPerDenomRequest): unknown;
    fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
    fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest;
    toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino;
};
export declare const UpcomingGaugesPerDenomResponse: {
    encode(message: UpcomingGaugesPerDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse;
    fromJSON(object: any): UpcomingGaugesPerDenomResponse;
    toJSON(message: UpcomingGaugesPerDenomResponse): unknown;
    fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
    fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse;
    toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino;
};
export declare const RewardsEstRequest: {
    encode(message: RewardsEstRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstRequest;
    fromJSON(object: any): RewardsEstRequest;
    toJSON(message: RewardsEstRequest): unknown;
    fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest;
    fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest;
    toAmino(message: RewardsEstRequest): RewardsEstRequestAmino;
};
export declare const RewardsEstResponse: {
    encode(message: RewardsEstResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsEstResponse;
    fromJSON(object: any): RewardsEstResponse;
    toJSON(message: RewardsEstResponse): unknown;
    fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse;
    fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse;
    toAmino(message: RewardsEstResponse): RewardsEstResponseAmino;
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
