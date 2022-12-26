import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connectionId: string;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
    /** connection unique identifier */
    connection_id: string;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection?: ConnectionEnd;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
    /** connection associated with the request identifier */
    connection?: ConnectionEndAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseSDKType {
    connection?: ConnectionEndSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
    pagination?: PageRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnectionAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseSDKType {
    connections: IdentifiedConnectionSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    clientId: string;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
    /** client identifier associated with a connection */
    client_id: string;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestSDKType {
    client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proofHeight?: Height;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
    /** slice of all the connection paths associated with a client. */
    connection_paths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proof_height?: HeightAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseSDKType {
    connection_paths: string[];
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connectionId: string;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
    /** connection identifier */
    connection_id: string;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestSDKType {
    connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientStateAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseSDKType {
    identified_client_state?: IdentifiedClientStateSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connectionId: string;
    revisionNumber: Long;
    revisionHeight: Long;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
    /** connection identifier */
    connection_id: string;
    revision_number: string;
    revision_height: string;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestSDKType {
    connection_id: string;
    revision_number: Long;
    revision_height: Long;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
    /** consensus state associated with the channel */
    consensus_state?: AnyAmino;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseSDKType {
    consensus_state?: AnySDKType;
    client_id: string;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
export declare const QueryConnectionRequest: {
    encode(message: QueryConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest;
    fromJSON(object: any): QueryConnectionRequest;
    toJSON(message: QueryConnectionRequest): unknown;
    fromPartial(object: Partial<QueryConnectionRequest>): QueryConnectionRequest;
    fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest;
    toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino;
};
export declare const QueryConnectionResponse: {
    encode(message: QueryConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse;
    fromJSON(object: any): QueryConnectionResponse;
    toJSON(message: QueryConnectionResponse): unknown;
    fromPartial(object: Partial<QueryConnectionResponse>): QueryConnectionResponse;
    fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse;
    toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino;
};
export declare const QueryConnectionsRequest: {
    encode(message: QueryConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest;
    fromJSON(object: any): QueryConnectionsRequest;
    toJSON(message: QueryConnectionsRequest): unknown;
    fromPartial(object: Partial<QueryConnectionsRequest>): QueryConnectionsRequest;
    fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest;
    toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino;
};
export declare const QueryConnectionsResponse: {
    encode(message: QueryConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse;
    fromJSON(object: any): QueryConnectionsResponse;
    toJSON(message: QueryConnectionsResponse): unknown;
    fromPartial(object: Partial<QueryConnectionsResponse>): QueryConnectionsResponse;
    fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse;
    toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino;
};
export declare const QueryClientConnectionsRequest: {
    encode(message: QueryClientConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest;
    fromJSON(object: any): QueryClientConnectionsRequest;
    toJSON(message: QueryClientConnectionsRequest): unknown;
    fromPartial(object: Partial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest;
    fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest;
    toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino;
};
export declare const QueryClientConnectionsResponse: {
    encode(message: QueryClientConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse;
    fromJSON(object: any): QueryClientConnectionsResponse;
    toJSON(message: QueryClientConnectionsResponse): unknown;
    fromPartial(object: Partial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse;
    fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse;
    toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino;
};
export declare const QueryConnectionClientStateRequest: {
    encode(message: QueryConnectionClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    toJSON(message: QueryConnectionClientStateRequest): unknown;
    fromPartial(object: Partial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest;
    fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest;
    toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino;
};
export declare const QueryConnectionClientStateResponse: {
    encode(message: QueryConnectionClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    toJSON(message: QueryConnectionClientStateResponse): unknown;
    fromPartial(object: Partial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse;
    fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse;
    toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino;
};
export declare const QueryConnectionConsensusStateRequest: {
    encode(message: QueryConnectionConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    toJSON(message: QueryConnectionConsensusStateRequest): unknown;
    fromPartial(object: Partial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest;
    fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest;
    toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino;
};
export declare const QueryConnectionConsensusStateResponse: {
    encode(message: QueryConnectionConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    toJSON(message: QueryConnectionConsensusStateResponse): unknown;
    fromPartial(object: Partial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse;
    fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse;
    toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino;
};
