import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params?: Params;
    factoryDenoms: GenesisDenom[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
    /** params defines the paramaters of the module. */
    params?: ParamsAmino;
    factory_denoms: GenesisDenomAmino[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata?: DenomAuthorityMetadata;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
    denom: string;
    authority_metadata?: DenomAuthorityMetadataAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata?: DenomAuthorityMetadataSDKType;
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
export declare const GenesisDenom: {
    encode(message: GenesisDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): unknown;
    fromPartial(object: Partial<GenesisDenom>): GenesisDenom;
    fromAmino(object: GenesisDenomAmino): GenesisDenom;
    toAmino(message: GenesisDenom): GenesisDenomAmino;
};
