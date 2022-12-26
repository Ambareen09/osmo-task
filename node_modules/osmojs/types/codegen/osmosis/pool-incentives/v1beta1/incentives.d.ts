import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    mintedDenom: string;
}
export interface ParamsAmino {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    minted_denom: string;
}
export interface ParamsSDKType {
    minted_denom: string;
}
export interface LockableDurationsInfo {
    lockableDurations: Duration[];
}
export interface LockableDurationsInfoAmino {
    lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrInfoAmino {
    total_weight: string;
    records: DistrRecordAmino[];
}
export interface DistrInfoSDKType {
    total_weight: string;
    records: DistrRecordSDKType[];
}
export interface DistrRecord {
    gaugeId: Long;
    weight: string;
}
export interface DistrRecordAmino {
    gauge_id: string;
    weight: string;
}
export interface DistrRecordSDKType {
    gauge_id: Long;
    weight: string;
}
export interface PoolToGauge {
    poolId: Long;
    gaugeId: Long;
    duration?: Duration;
}
export interface PoolToGaugeAmino {
    pool_id: string;
    gauge_id: string;
    duration?: DurationAmino;
}
export interface PoolToGaugeSDKType {
    pool_id: Long;
    gauge_id: Long;
    duration?: DurationSDKType;
}
export interface PoolToGauges {
    poolToGauge: PoolToGauge[];
}
export interface PoolToGaugesAmino {
    pool_to_gauge: PoolToGaugeAmino[];
}
export interface PoolToGaugesSDKType {
    pool_to_gauge: PoolToGaugeSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
};
export declare const LockableDurationsInfo: {
    encode(message: LockableDurationsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo;
    fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo;
    toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino;
};
export declare const DistrInfo: {
    encode(message: DistrInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo;
    fromJSON(object: any): DistrInfo;
    toJSON(message: DistrInfo): unknown;
    fromPartial(object: Partial<DistrInfo>): DistrInfo;
    fromAmino(object: DistrInfoAmino): DistrInfo;
    toAmino(message: DistrInfo): DistrInfoAmino;
};
export declare const DistrRecord: {
    encode(message: DistrRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord;
    fromJSON(object: any): DistrRecord;
    toJSON(message: DistrRecord): unknown;
    fromPartial(object: Partial<DistrRecord>): DistrRecord;
    fromAmino(object: DistrRecordAmino): DistrRecord;
    toAmino(message: DistrRecord): DistrRecordAmino;
};
export declare const PoolToGauge: {
    encode(message: PoolToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauge;
    fromJSON(object: any): PoolToGauge;
    toJSON(message: PoolToGauge): unknown;
    fromPartial(object: Partial<PoolToGauge>): PoolToGauge;
    fromAmino(object: PoolToGaugeAmino): PoolToGauge;
    toAmino(message: PoolToGauge): PoolToGaugeAmino;
};
export declare const PoolToGauges: {
    encode(message: PoolToGauges, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauges;
    fromJSON(object: any): PoolToGauges;
    toJSON(message: PoolToGauges): unknown;
    fromPartial(object: Partial<PoolToGauges>): PoolToGauges;
    fromAmino(object: PoolToGaugesAmino): PoolToGauges;
    toAmino(message: PoolToGauges): PoolToGaugesAmino;
};
