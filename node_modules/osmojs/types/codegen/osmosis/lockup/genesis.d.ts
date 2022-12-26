import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: Long;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
    last_lock_id: string;
    locks: PeriodLockAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: Long;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
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
