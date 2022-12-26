import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelSDKType, AccessConfig, AccessConfigAmino, AccessConfigSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
    /** address is the address of the contract to query */
    address: string;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
    /** address is the address of the contract to query */
    address: string;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
    address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
    /** address is the address of the contract */
    address: string;
    contractInfo?: ContractInfo;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
    /** address is the address of the contract */
    address: string;
    contract_info?: ContractInfoAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
    address: string;
    contract_info?: ContractInfoSDKType;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
    entries: ContractCodeHistoryEntry[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
    entries: ContractCodeHistoryEntryAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
    entries: ContractCodeHistoryEntrySDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    codeId: Long;
    pagination?: PageRequest;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
    /**
     * grpc-gateway_out does not support Go style CodID
     * pagination defines an optional pagination for the request.
     */
    code_id: string;
    pagination?: PageRequestAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
    code_id: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
    contracts: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
    models: Model[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
    models: ModelAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
    models: ModelSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
    /** address is the address of the contract */
    address: string;
    queryData: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    query_data: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
    /** Data contains the raw store data */
    data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
    /** Data contains the raw store data */
    data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
    data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    queryData: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    query_data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
    address: string;
    query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
    data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: Long;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
    /** grpc-gateway_out does not support Go style CodID */
    code_id: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
    code_id: Long;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
    codeId: Long;
    creator: string;
    dataHash: Uint8Array;
    instantiatePermission?: AccessConfig;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
    code_id: string;
    creator: string;
    data_hash: Uint8Array;
    instantiate_permission?: AccessConfigAmino;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
    code_id: Long;
    creator: string;
    data_hash: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
    codeInfo?: CodeInfoResponse;
    data: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
    code_info?: CodeInfoResponseAmino;
    data: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
    code_info?: CodeInfoResponseSDKType;
    data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
    code_infos: CodeInfoResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
    code_infos: CodeInfoResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
    codeIds: Long[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
    code_ids: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
    code_ids: Long[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
    /** CreatorAddress is the address of contract creator */
    creatorAddress: string;
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestAmino {
    /** CreatorAddress is the address of contract creator */
    creator_address: string;
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestSDKType {
    creator_address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
    /** ContractAddresses result set */
    contractAddresses: string[];
    /** Pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseAmino {
    /** ContractAddresses result set */
    contract_addresses: string[];
    /** Pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseSDKType {
    contract_addresses: string[];
    pagination?: PageResponseSDKType;
}
export declare const QueryContractInfoRequest: {
    encode(message: QueryContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest;
    fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest;
    toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
    fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse;
    toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino;
};
export declare const QueryContractHistoryRequest: {
    encode(message: QueryContractHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromJSON(object: any): QueryContractHistoryRequest;
    toJSON(message: QueryContractHistoryRequest): unknown;
    fromPartial(object: Partial<QueryContractHistoryRequest>): QueryContractHistoryRequest;
    fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest;
    toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino;
};
export declare const QueryContractHistoryResponse: {
    encode(message: QueryContractHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryResponse;
    fromJSON(object: any): QueryContractHistoryResponse;
    toJSON(message: QueryContractHistoryResponse): unknown;
    fromPartial(object: Partial<QueryContractHistoryResponse>): QueryContractHistoryResponse;
    fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse;
    toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino;
};
export declare const QueryContractsByCodeRequest: {
    encode(message: QueryContractsByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromJSON(object: any): QueryContractsByCodeRequest;
    toJSON(message: QueryContractsByCodeRequest): unknown;
    fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
    fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest;
    toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino;
};
export declare const QueryContractsByCodeResponse: {
    encode(message: QueryContractsByCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromJSON(object: any): QueryContractsByCodeResponse;
    toJSON(message: QueryContractsByCodeResponse): unknown;
    fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
    fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse;
    toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino;
};
export declare const QueryAllContractStateRequest: {
    encode(message: QueryAllContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest;
    fromJSON(object: any): QueryAllContractStateRequest;
    toJSON(message: QueryAllContractStateRequest): unknown;
    fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest;
    fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest;
    toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino;
};
export declare const QueryAllContractStateResponse: {
    encode(message: QueryAllContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse;
    fromJSON(object: any): QueryAllContractStateResponse;
    toJSON(message: QueryAllContractStateResponse): unknown;
    fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse;
    fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse;
    toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino;
};
export declare const QueryRawContractStateRequest: {
    encode(message: QueryRawContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest;
    fromJSON(object: any): QueryRawContractStateRequest;
    toJSON(message: QueryRawContractStateRequest): unknown;
    fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest;
    fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest;
    toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino;
};
export declare const QueryRawContractStateResponse: {
    encode(message: QueryRawContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse;
    fromJSON(object: any): QueryRawContractStateResponse;
    toJSON(message: QueryRawContractStateResponse): unknown;
    fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse;
    fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse;
    toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino;
};
export declare const QuerySmartContractStateRequest: {
    encode(message: QuerySmartContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromJSON(object: any): QuerySmartContractStateRequest;
    toJSON(message: QuerySmartContractStateRequest): unknown;
    fromPartial(object: Partial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest;
    fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest;
    toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino;
};
export declare const QuerySmartContractStateResponse: {
    encode(message: QuerySmartContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromJSON(object: any): QuerySmartContractStateResponse;
    toJSON(message: QuerySmartContractStateResponse): unknown;
    fromPartial(object: Partial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse;
    fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse;
    toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
};
export declare const CodeInfoResponse: {
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse;
    fromJSON(object: any): CodeInfoResponse;
    toJSON(message: CodeInfoResponse): unknown;
    fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse;
    fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse;
    toAmino(message: CodeInfoResponse): CodeInfoResponseAmino;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
};
export declare const QueryCodesRequest: {
    encode(message: QueryCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest;
    fromJSON(object: any): QueryCodesRequest;
    toJSON(message: QueryCodesRequest): unknown;
    fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest;
    fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest;
    toAmino(message: QueryCodesRequest): QueryCodesRequestAmino;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
    fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse;
    toAmino(message: QueryCodesResponse): QueryCodesResponseAmino;
};
export declare const QueryPinnedCodesRequest: {
    encode(message: QueryPinnedCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesRequest;
    fromJSON(object: any): QueryPinnedCodesRequest;
    toJSON(message: QueryPinnedCodesRequest): unknown;
    fromPartial(object: Partial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest;
    fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest;
    toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino;
};
export declare const QueryPinnedCodesResponse: {
    encode(message: QueryPinnedCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesResponse;
    fromJSON(object: any): QueryPinnedCodesResponse;
    toJSON(message: QueryPinnedCodesResponse): unknown;
    fromPartial(object: Partial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse;
    fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse;
    toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
};
export declare const QueryContractsByCreatorRequest: {
    encode(message: QueryContractsByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest;
    fromJSON(object: any): QueryContractsByCreatorRequest;
    toJSON(message: QueryContractsByCreatorRequest): unknown;
    fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest;
    fromAmino(object: QueryContractsByCreatorRequestAmino): QueryContractsByCreatorRequest;
    toAmino(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAmino;
};
export declare const QueryContractsByCreatorResponse: {
    encode(message: QueryContractsByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse;
    fromJSON(object: any): QueryContractsByCreatorResponse;
    toJSON(message: QueryContractsByCreatorResponse): unknown;
    fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse;
    fromAmino(object: QueryContractsByCreatorResponseAmino): QueryContractsByCreatorResponse;
    toAmino(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAmino;
};
