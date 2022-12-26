import { Params, ParamsAmino, ParamsSDKType, DistrInfo, DistrInfoAmino, DistrInfoSDKType, PoolToGauges, PoolToGaugesAmino, PoolToGaugesSDKType } from "./incentives";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    lockableDurations: Duration[];
    distrInfo?: DistrInfo;
    poolToGauges?: PoolToGauges;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    lockable_durations: DurationAmino[];
    distr_info?: DistrInfoAmino;
    pool_to_gauges?: PoolToGaugesAmino;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    lockable_durations: DurationSDKType[];
    distr_info?: DistrInfoSDKType;
    pool_to_gauges?: PoolToGaugesSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
};
