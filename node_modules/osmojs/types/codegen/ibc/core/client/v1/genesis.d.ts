import { IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesAmino, ClientConsensusStatesSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clientsConsensus: ClientConsensusStates[];
    /** metadata from each client */
    clientsMetadata: IdentifiedGenesisMetadata[];
    params?: Params;
    /** create localhost on initialization */
    createLocalhost: boolean;
    /** the sequence for the next generated client identifier */
    nextClientSequence: Long;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientStateAmino[];
    /** consensus states from each client */
    clients_consensus: ClientConsensusStatesAmino[];
    /** metadata from each client */
    clients_metadata: IdentifiedGenesisMetadataAmino[];
    params?: ParamsAmino;
    /** create localhost on initialization */
    create_localhost: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence: string;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateSDKType {
    clients: IdentifiedClientStateSDKType[];
    clients_consensus: ClientConsensusStatesSDKType[];
    clients_metadata: IdentifiedGenesisMetadataSDKType[];
    params?: ParamsSDKType;
    create_localhost: boolean;
    next_client_sequence: Long;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    clientId: string;
    clientMetadata: GenesisMetadata[];
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
    client_id: string;
    client_metadata: GenesisMetadataAmino[];
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataSDKType {
    client_id: string;
    client_metadata: GenesisMetadataSDKType[];
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
export declare const GenesisMetadata: {
    encode(message: GenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial(object: Partial<GenesisMetadata>): GenesisMetadata;
    fromAmino(object: GenesisMetadataAmino): GenesisMetadata;
    toAmino(message: GenesisMetadata): GenesisMetadataAmino;
};
export declare const IdentifiedGenesisMetadata: {
    encode(message: IdentifiedGenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial(object: Partial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata;
    fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata;
    toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino;
};
