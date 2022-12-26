import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params?: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    codes: CodeAmino[];
    contracts: ContractAmino[];
    sequences: SequenceAmino[];
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
    code_id: string;
    code_info?: CodeInfoAmino;
    code_bytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
    code_id: Long;
    code_info?: CodeInfoSDKType;
    code_bytes: Uint8Array;
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo?: ContractInfo;
    contractState: Model[];
    contractCodeHistory: ContractCodeHistoryEntry[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
    contract_address: string;
    contract_info?: ContractInfoAmino;
    contract_state: ModelAmino[];
    contract_code_history: ContractCodeHistoryEntryAmino[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info?: ContractInfoSDKType;
    contract_state: ModelSDKType[];
    contract_code_history: ContractCodeHistoryEntrySDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
/** Sequence key and value of an id generation counter */
export interface SequenceAmino {
    id_key: Uint8Array;
    value: string;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: Long;
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
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial(object: Partial<Code>): Code;
    fromAmino(object: CodeAmino): Code;
    toAmino(message: Code): CodeAmino;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: Partial<Contract>): Contract;
    fromAmino(object: ContractAmino): Contract;
    toAmino(message: Contract): ContractAmino;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial(object: Partial<Sequence>): Sequence;
    fromAmino(object: SequenceAmino): Sequence;
    toAmino(message: Sequence): SequenceAmino;
};
