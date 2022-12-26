import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, ChannelSDKType, IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel?: Channel;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseAmino {
    /** channel associated with the request identifiers */
    channel?: ChannelAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseSDKType {
    channel?: ChannelSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination?: PageRequest;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestAmino {
    /** pagination request */
    pagination?: PageRequestAmino;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseAmino {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannelAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseSDKType {
    channels: IdentifiedChannelSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestAmino {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestSDKType {
    connection: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseAmino {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannelAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseSDKType {
    channels: IdentifiedChannelSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseAmino {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientStateAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseSDKType {
    identified_client_state?: IdentifiedClientStateSDKType;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** revision number of the consensus state */
    revisionNumber: Long;
    /** revision height of the consensus state */
    revisionHeight: Long;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** revision number of the consensus state */
    revision_number: string;
    /** revision height of the consensus state */
    revision_height: string;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestSDKType {
    port_id: string;
    channel_id: string;
    revision_number: Long;
    revision_height: Long;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
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
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseAmino {
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
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseSDKType {
    consensus_state?: AnySDKType;
    client_id: string;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseAmino {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseSDKType {
    commitment: Uint8Array;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestSDKType {
    port_id: string;
    channel_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseAmino {
    commitments: PacketStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseSDKType {
    commitments: PacketStateSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseAmino {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseSDKType {
    received: boolean;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: Long;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseAmino {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseSDKType {
    acknowledgement: Uint8Array;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequestAmino;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestSDKType {
    port_id: string;
    channel_id: string;
    pagination?: PageRequestSDKType;
    packet_commitment_sequences: Long[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseAmino {
    acknowledgements: PacketStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseSDKType {
    acknowledgements: PacketStateSDKType[];
    pagination?: PageResponseSDKType;
    height?: HeightSDKType;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of packet sequences */
    packetCommitmentSequences: Long[];
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestSDKType {
    port_id: string;
    channel_id: string;
    packet_commitment_sequences: Long[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: Long[];
    /** query block height */
    height?: Height;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseAmino {
    /** list of unreceived packet sequences */
    sequences: string[];
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseSDKType {
    sequences: Long[];
    height?: HeightSDKType;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of acknowledgement sequences */
    packetAckSequences: Long[];
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of acknowledgement sequences */
    packet_ack_sequences: string[];
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestSDKType {
    port_id: string;
    channel_id: string;
    packet_ack_sequences: Long[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: Long[];
    /** query block height */
    height?: Height;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseAmino {
    /** list of unreceived acknowledgement sequences */
    sequences: string[];
    /** query block height */
    height?: HeightAmino;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseSDKType {
    sequences: Long[];
    height?: HeightSDKType;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestSDKType {
    port_id: string;
    channel_id: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    nextSequenceReceive: Long;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseAmino {
    /** next sequence receive number */
    next_sequence_receive: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseSDKType {
    next_sequence_receive: Long;
    proof: Uint8Array;
    proof_height?: HeightSDKType;
}
export declare const QueryChannelRequest: {
    encode(message: QueryChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest;
    fromJSON(object: any): QueryChannelRequest;
    toJSON(message: QueryChannelRequest): unknown;
    fromPartial(object: Partial<QueryChannelRequest>): QueryChannelRequest;
    fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest;
    toAmino(message: QueryChannelRequest): QueryChannelRequestAmino;
};
export declare const QueryChannelResponse: {
    encode(message: QueryChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse;
    fromJSON(object: any): QueryChannelResponse;
    toJSON(message: QueryChannelResponse): unknown;
    fromPartial(object: Partial<QueryChannelResponse>): QueryChannelResponse;
    fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse;
    toAmino(message: QueryChannelResponse): QueryChannelResponseAmino;
};
export declare const QueryChannelsRequest: {
    encode(message: QueryChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest;
    fromJSON(object: any): QueryChannelsRequest;
    toJSON(message: QueryChannelsRequest): unknown;
    fromPartial(object: Partial<QueryChannelsRequest>): QueryChannelsRequest;
    fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest;
    toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino;
};
export declare const QueryChannelsResponse: {
    encode(message: QueryChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse;
    fromJSON(object: any): QueryChannelsResponse;
    toJSON(message: QueryChannelsResponse): unknown;
    fromPartial(object: Partial<QueryChannelsResponse>): QueryChannelsResponse;
    fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse;
    toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino;
};
export declare const QueryConnectionChannelsRequest: {
    encode(message: QueryConnectionChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest;
    fromJSON(object: any): QueryConnectionChannelsRequest;
    toJSON(message: QueryConnectionChannelsRequest): unknown;
    fromPartial(object: Partial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest;
    fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest;
    toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino;
};
export declare const QueryConnectionChannelsResponse: {
    encode(message: QueryConnectionChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse;
    fromJSON(object: any): QueryConnectionChannelsResponse;
    toJSON(message: QueryConnectionChannelsResponse): unknown;
    fromPartial(object: Partial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse;
    fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse;
    toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino;
};
export declare const QueryChannelClientStateRequest: {
    encode(message: QueryChannelClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest;
    fromJSON(object: any): QueryChannelClientStateRequest;
    toJSON(message: QueryChannelClientStateRequest): unknown;
    fromPartial(object: Partial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest;
    fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest;
    toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino;
};
export declare const QueryChannelClientStateResponse: {
    encode(message: QueryChannelClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse;
    fromJSON(object: any): QueryChannelClientStateResponse;
    toJSON(message: QueryChannelClientStateResponse): unknown;
    fromPartial(object: Partial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse;
    fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse;
    toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino;
};
export declare const QueryChannelConsensusStateRequest: {
    encode(message: QueryChannelConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest;
    fromJSON(object: any): QueryChannelConsensusStateRequest;
    toJSON(message: QueryChannelConsensusStateRequest): unknown;
    fromPartial(object: Partial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest;
    fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest;
    toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino;
};
export declare const QueryChannelConsensusStateResponse: {
    encode(message: QueryChannelConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse;
    fromJSON(object: any): QueryChannelConsensusStateResponse;
    toJSON(message: QueryChannelConsensusStateResponse): unknown;
    fromPartial(object: Partial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse;
    fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse;
    toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino;
};
export declare const QueryPacketCommitmentRequest: {
    encode(message: QueryPacketCommitmentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest;
    fromJSON(object: any): QueryPacketCommitmentRequest;
    toJSON(message: QueryPacketCommitmentRequest): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest;
    fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest;
    toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino;
};
export declare const QueryPacketCommitmentResponse: {
    encode(message: QueryPacketCommitmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse;
    fromJSON(object: any): QueryPacketCommitmentResponse;
    toJSON(message: QueryPacketCommitmentResponse): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse;
    fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse;
    toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino;
};
export declare const QueryPacketCommitmentsRequest: {
    encode(message: QueryPacketCommitmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest;
    fromJSON(object: any): QueryPacketCommitmentsRequest;
    toJSON(message: QueryPacketCommitmentsRequest): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest;
    fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest;
    toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino;
};
export declare const QueryPacketCommitmentsResponse: {
    encode(message: QueryPacketCommitmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse;
    fromJSON(object: any): QueryPacketCommitmentsResponse;
    toJSON(message: QueryPacketCommitmentsResponse): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse;
    fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse;
    toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino;
};
export declare const QueryPacketReceiptRequest: {
    encode(message: QueryPacketReceiptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest;
    fromJSON(object: any): QueryPacketReceiptRequest;
    toJSON(message: QueryPacketReceiptRequest): unknown;
    fromPartial(object: Partial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest;
    fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest;
    toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino;
};
export declare const QueryPacketReceiptResponse: {
    encode(message: QueryPacketReceiptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse;
    fromJSON(object: any): QueryPacketReceiptResponse;
    toJSON(message: QueryPacketReceiptResponse): unknown;
    fromPartial(object: Partial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse;
    fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse;
    toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino;
};
export declare const QueryPacketAcknowledgementRequest: {
    encode(message: QueryPacketAcknowledgementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest;
    fromJSON(object: any): QueryPacketAcknowledgementRequest;
    toJSON(message: QueryPacketAcknowledgementRequest): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest;
    fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest;
    toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino;
};
export declare const QueryPacketAcknowledgementResponse: {
    encode(message: QueryPacketAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse;
    fromJSON(object: any): QueryPacketAcknowledgementResponse;
    toJSON(message: QueryPacketAcknowledgementResponse): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse;
    fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse;
    toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino;
};
export declare const QueryPacketAcknowledgementsRequest: {
    encode(message: QueryPacketAcknowledgementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest;
    fromJSON(object: any): QueryPacketAcknowledgementsRequest;
    toJSON(message: QueryPacketAcknowledgementsRequest): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest;
    fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest;
    toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino;
};
export declare const QueryPacketAcknowledgementsResponse: {
    encode(message: QueryPacketAcknowledgementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse;
    fromJSON(object: any): QueryPacketAcknowledgementsResponse;
    toJSON(message: QueryPacketAcknowledgementsResponse): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse;
    fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse;
    toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino;
};
export declare const QueryUnreceivedPacketsRequest: {
    encode(message: QueryUnreceivedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest;
    fromJSON(object: any): QueryUnreceivedPacketsRequest;
    toJSON(message: QueryUnreceivedPacketsRequest): unknown;
    fromPartial(object: Partial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest;
    fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest;
    toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino;
};
export declare const QueryUnreceivedPacketsResponse: {
    encode(message: QueryUnreceivedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse;
    fromJSON(object: any): QueryUnreceivedPacketsResponse;
    toJSON(message: QueryUnreceivedPacketsResponse): unknown;
    fromPartial(object: Partial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse;
    fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse;
    toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino;
};
export declare const QueryUnreceivedAcksRequest: {
    encode(message: QueryUnreceivedAcksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest;
    fromJSON(object: any): QueryUnreceivedAcksRequest;
    toJSON(message: QueryUnreceivedAcksRequest): unknown;
    fromPartial(object: Partial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest;
    fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest;
    toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino;
};
export declare const QueryUnreceivedAcksResponse: {
    encode(message: QueryUnreceivedAcksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse;
    fromJSON(object: any): QueryUnreceivedAcksResponse;
    toJSON(message: QueryUnreceivedAcksResponse): unknown;
    fromPartial(object: Partial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse;
    fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse;
    toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino;
};
export declare const QueryNextSequenceReceiveRequest: {
    encode(message: QueryNextSequenceReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest;
    fromJSON(object: any): QueryNextSequenceReceiveRequest;
    toJSON(message: QueryNextSequenceReceiveRequest): unknown;
    fromPartial(object: Partial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest;
    fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest;
    toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino;
};
export declare const QueryNextSequenceReceiveResponse: {
    encode(message: QueryNextSequenceReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse;
    fromJSON(object: any): QueryNextSequenceReceiveResponse;
    toJSON(message: QueryNextSequenceReceiveResponse): unknown;
    fromPartial(object: Partial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse;
    fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse;
    toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino;
};
