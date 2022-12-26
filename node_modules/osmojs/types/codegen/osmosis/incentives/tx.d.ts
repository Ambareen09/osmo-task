import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    isPerpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distributeTo?: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime?: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: Long;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    is_perpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distribute_to?: QueryConditionAmino;
    /** coins are coin(s) to be distributed by the gauge */
    coins: CoinAmino[];
    /** start_time is the distribution start time */
    start_time?: TimestampAmino;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over: string;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
    is_perpetual: boolean;
    owner: string;
    distribute_to?: QueryConditionSDKType;
    coins: CoinSDKType[];
    start_time?: TimestampSDKType;
    num_epochs_paid_over: Long;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseAmino {
}
export interface MsgCreateGaugeResponseSDKType {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gaugeId: Long;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gauge_id: string;
    /** rewards are the coin(s) to add to gauge */
    rewards: CoinAmino[];
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
    owner: string;
    gauge_id: Long;
    rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseAmino {
}
export interface MsgAddToGaugeResponseSDKType {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromJSON(object: any): MsgCreateGauge;
    toJSON(message: MsgCreateGauge): unknown;
    fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge;
    fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge;
    toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromJSON(_: any): MsgCreateGaugeResponse;
    toJSON(_: MsgCreateGaugeResponse): unknown;
    fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
    fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse;
    toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromJSON(object: any): MsgAddToGauge;
    toJSON(message: MsgAddToGauge): unknown;
    fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge;
    fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge;
    toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromJSON(_: any): MsgAddToGaugeResponse;
    toJSON(_: MsgAddToGaugeResponse): unknown;
    fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
    fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse;
    toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino;
};
