import { Downtime } from "./downtime_duration";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
    downtime: Downtime;
    recovery?: Duration;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestAmino {
    downtime: Downtime;
    recovery?: DurationAmino;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
    downtime: Downtime;
    recovery?: DurationSDKType;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
    succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseAmino {
    succesfully_recovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
    succesfully_recovered: boolean;
}
export declare const RecoveredSinceDowntimeOfLengthRequest: {
    encode(message: RecoveredSinceDowntimeOfLengthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest;
    toJSON(message: RecoveredSinceDowntimeOfLengthRequest): unknown;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest;
    fromAmino(object: RecoveredSinceDowntimeOfLengthRequestAmino): RecoveredSinceDowntimeOfLengthRequest;
    toAmino(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAmino;
};
export declare const RecoveredSinceDowntimeOfLengthResponse: {
    encode(message: RecoveredSinceDowntimeOfLengthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse;
    toJSON(message: RecoveredSinceDowntimeOfLengthResponse): unknown;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse;
    fromAmino(object: RecoveredSinceDowntimeOfLengthResponseAmino): RecoveredSinceDowntimeOfLengthResponse;
    toAmino(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAmino;
};
