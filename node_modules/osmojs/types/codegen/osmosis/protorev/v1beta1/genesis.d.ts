import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
    /** Module Parameters */
    params?: Params;
    /** Hot routes that are configured on genesis */
    tokenPairs: TokenPairArbRoutes[];
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateAmino {
    /** Module Parameters */
    params?: ParamsAmino;
    /** Hot routes that are configured on genesis */
    token_pairs: TokenPairArbRoutesAmino[];
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    token_pairs: TokenPairArbRoutesSDKType[];
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
