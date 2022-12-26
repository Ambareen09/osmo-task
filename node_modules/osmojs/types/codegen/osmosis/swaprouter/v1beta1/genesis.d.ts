import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params holds parameters for the swaprouter module */
export interface Params {
    poolCreationFee: Coin[];
}
/** Params holds parameters for the swaprouter module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
}
/** Params holds parameters for the swaprouter module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisState {
    /** the next_pool_id */
    nextPoolId: Long;
    /** params is the container of swaprouter parameters. */
    params?: Params;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateAmino {
    /** the next_pool_id */
    next_pool_id: string;
    /** params is the container of swaprouter parameters. */
    params?: ParamsAmino;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: Long;
    params?: ParamsSDKType;
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
};
