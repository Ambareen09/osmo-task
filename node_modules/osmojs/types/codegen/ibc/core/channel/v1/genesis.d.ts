import { IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
    channels: IdentifiedChannel[];
    acknowledgements: PacketState[];
    commitments: PacketState[];
    receipts: PacketState[];
    sendSequences: PacketSequence[];
    recvSequences: PacketSequence[];
    ackSequences: PacketSequence[];
    /** the sequence for the next generated channel identifier */
    nextChannelSequence: Long;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateAmino {
    channels: IdentifiedChannelAmino[];
    acknowledgements: PacketStateAmino[];
    commitments: PacketStateAmino[];
    receipts: PacketStateAmino[];
    send_sequences: PacketSequenceAmino[];
    recv_sequences: PacketSequenceAmino[];
    ack_sequences: PacketSequenceAmino[];
    /** the sequence for the next generated channel identifier */
    next_channel_sequence: string;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
    channels: IdentifiedChannelSDKType[];
    acknowledgements: PacketStateSDKType[];
    commitments: PacketStateSDKType[];
    receipts: PacketStateSDKType[];
    send_sequences: PacketSequenceSDKType[];
    recv_sequences: PacketSequenceSDKType[];
    ack_sequences: PacketSequenceSDKType[];
    next_channel_sequence: Long;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
    portId: string;
    channelId: string;
    sequence: Long;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceAmino {
    port_id: string;
    channel_id: string;
    sequence: string;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
    port_id: string;
    channel_id: string;
    sequence: Long;
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
export declare const PacketSequence: {
    encode(message: PacketSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence;
    fromJSON(object: any): PacketSequence;
    toJSON(message: PacketSequence): unknown;
    fromPartial(object: Partial<PacketSequence>): PacketSequence;
    fromAmino(object: PacketSequenceAmino): PacketSequence;
    toAmino(message: PacketSequence): PacketSequenceAmino;
};
