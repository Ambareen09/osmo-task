import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./core/port/v1/query";
import * as _129 from "./core/types/v1/genesis";
import * as _130 from "./lightclients/localhost/v1/localhost";
import * as _131 from "./lightclients/solomachine/v1/solomachine";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/tendermint/v1/tendermint";
import * as _281 from "./applications/transfer/v1/query.rpc.Query";
import * as _282 from "./core/channel/v1/query.rpc.Query";
import * as _283 from "./core/client/v1/query.rpc.Query";
import * as _284 from "./core/connection/v1/query.rpc.Query";
import * as _285 from "./core/port/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/tx.rpc.msg";
import * as _287 from "./core/channel/v1/tx.rpc.msg";
import * as _288 from "./core/client/v1/tx.rpc.msg";
import * as _289 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _286.MsgClientImpl;
                QueryClientImpl: typeof _281.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                    denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                    params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _113.MsgTransfer): {
                            typeUrl: string;
                            value: _113.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _113.MsgTransfer) => _113.MsgTransferAmino;
                        fromAmino: (object: _113.MsgTransferAmino) => _113.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _113.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgTransfer;
                    fromJSON(object: any): _113.MsgTransfer;
                    toJSON(message: _113.MsgTransfer): unknown;
                    fromPartial(object: Partial<_113.MsgTransfer>): _113.MsgTransfer;
                    fromAmino(object: _113.MsgTransferAmino): _113.MsgTransfer;
                    toAmino(message: _113.MsgTransfer): _113.MsgTransferAmino;
                };
                MsgTransferResponse: {
                    encode(_: _113.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgTransferResponse;
                    fromJSON(_: any): _113.MsgTransferResponse;
                    toJSON(_: _113.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_113.MsgTransferResponse>): _113.MsgTransferResponse;
                    fromAmino(_: _113.MsgTransferResponseAmino): _113.MsgTransferResponse;
                    toAmino(_: _113.MsgTransferResponse): _113.MsgTransferResponseAmino;
                };
                DenomTrace: {
                    encode(message: _112.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DenomTrace;
                    fromJSON(object: any): _112.DenomTrace;
                    toJSON(message: _112.DenomTrace): unknown;
                    fromPartial(object: Partial<_112.DenomTrace>): _112.DenomTrace;
                    fromAmino(object: _112.DenomTraceAmino): _112.DenomTrace;
                    toAmino(message: _112.DenomTrace): _112.DenomTraceAmino;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                    fromJSON(object: any): _112.Params;
                    toJSON(message: _112.Params): unknown;
                    fromPartial(object: Partial<_112.Params>): _112.Params;
                    fromAmino(object: _112.ParamsAmino): _112.Params;
                    toAmino(message: _112.Params): _112.ParamsAmino;
                };
                QueryDenomTraceRequest: {
                    encode(message: _111.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTraceRequest;
                    fromJSON(object: any): _111.QueryDenomTraceRequest;
                    toJSON(message: _111.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_111.QueryDenomTraceRequest>): _111.QueryDenomTraceRequest;
                    fromAmino(object: _111.QueryDenomTraceRequestAmino): _111.QueryDenomTraceRequest;
                    toAmino(message: _111.QueryDenomTraceRequest): _111.QueryDenomTraceRequestAmino;
                };
                QueryDenomTraceResponse: {
                    encode(message: _111.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTraceResponse;
                    fromJSON(object: any): _111.QueryDenomTraceResponse;
                    toJSON(message: _111.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_111.QueryDenomTraceResponse>): _111.QueryDenomTraceResponse;
                    fromAmino(object: _111.QueryDenomTraceResponseAmino): _111.QueryDenomTraceResponse;
                    toAmino(message: _111.QueryDenomTraceResponse): _111.QueryDenomTraceResponseAmino;
                };
                QueryDenomTracesRequest: {
                    encode(message: _111.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTracesRequest;
                    fromJSON(object: any): _111.QueryDenomTracesRequest;
                    toJSON(message: _111.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_111.QueryDenomTracesRequest>): _111.QueryDenomTracesRequest;
                    fromAmino(object: _111.QueryDenomTracesRequestAmino): _111.QueryDenomTracesRequest;
                    toAmino(message: _111.QueryDenomTracesRequest): _111.QueryDenomTracesRequestAmino;
                };
                QueryDenomTracesResponse: {
                    encode(message: _111.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDenomTracesResponse;
                    fromJSON(object: any): _111.QueryDenomTracesResponse;
                    toJSON(message: _111.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_111.QueryDenomTracesResponse>): _111.QueryDenomTracesResponse;
                    fromAmino(object: _111.QueryDenomTracesResponseAmino): _111.QueryDenomTracesResponse;
                    toAmino(message: _111.QueryDenomTracesResponse): _111.QueryDenomTracesResponseAmino;
                };
                QueryParamsRequest: {
                    encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                    fromJSON(_: any): _111.QueryParamsRequest;
                    toJSON(_: _111.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                    fromAmino(_: _111.QueryParamsRequestAmino): _111.QueryParamsRequest;
                    toAmino(_: _111.QueryParamsRequest): _111.QueryParamsRequestAmino;
                };
                QueryParamsResponse: {
                    encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                    fromJSON(object: any): _111.QueryParamsResponse;
                    toJSON(message: _111.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
                    fromAmino(object: _111.QueryParamsResponseAmino): _111.QueryParamsResponse;
                    toAmino(message: _111.QueryParamsResponse): _111.QueryParamsResponseAmino;
                };
                GenesisState: {
                    encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                    fromJSON(object: any): _110.GenesisState;
                    toJSON(message: _110.GenesisState): unknown;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _114.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.FungibleTokenPacketData;
                    fromJSON(object: any): _114.FungibleTokenPacketData;
                    toJSON(message: _114.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_114.FungibleTokenPacketData>): _114.FungibleTokenPacketData;
                    fromAmino(object: _114.FungibleTokenPacketDataAmino): _114.FungibleTokenPacketData;
                    toAmino(message: _114.FungibleTokenPacketData): _114.FungibleTokenPacketDataAmino;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _287.MsgClientImpl;
                QueryClientImpl: typeof _282.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                    channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                    connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                    channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _118.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _118.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _118.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _118.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _118.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _118.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _118.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _118.MsgRecvPacket): {
                            typeUrl: string;
                            value: _118.MsgRecvPacket;
                        };
                        timeout(value: _118.MsgTimeout): {
                            typeUrl: string;
                            value: _118.MsgTimeout;
                        };
                        timeoutOnClose(value: _118.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _118.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _118.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _118.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenInit) => _118.MsgChannelOpenInitAmino;
                        fromAmino: (object: _118.MsgChannelOpenInitAmino) => _118.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenTry) => _118.MsgChannelOpenTryAmino;
                        fromAmino: (object: _118.MsgChannelOpenTryAmino) => _118.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenAck) => _118.MsgChannelOpenAckAmino;
                        fromAmino: (object: _118.MsgChannelOpenAckAmino) => _118.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelOpenConfirm) => _118.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _118.MsgChannelOpenConfirmAmino) => _118.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelCloseInit) => _118.MsgChannelCloseInitAmino;
                        fromAmino: (object: _118.MsgChannelCloseInitAmino) => _118.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _118.MsgChannelCloseConfirm) => _118.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _118.MsgChannelCloseConfirmAmino) => _118.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _118.MsgRecvPacket) => _118.MsgRecvPacketAmino;
                        fromAmino: (object: _118.MsgRecvPacketAmino) => _118.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _118.MsgTimeout) => _118.MsgTimeoutAmino;
                        fromAmino: (object: _118.MsgTimeoutAmino) => _118.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _118.MsgTimeoutOnClose) => _118.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _118.MsgTimeoutOnCloseAmino) => _118.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _118.MsgAcknowledgement) => _118.MsgAcknowledgementAmino;
                        fromAmino: (object: _118.MsgAcknowledgementAmino) => _118.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _118.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenInit;
                    fromJSON(object: any): _118.MsgChannelOpenInit;
                    toJSON(message: _118.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_118.MsgChannelOpenInit>): _118.MsgChannelOpenInit;
                    fromAmino(object: _118.MsgChannelOpenInitAmino): _118.MsgChannelOpenInit;
                    toAmino(message: _118.MsgChannelOpenInit): _118.MsgChannelOpenInitAmino;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _118.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _118.MsgChannelOpenInitResponse;
                    toJSON(_: _118.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelOpenInitResponse>): _118.MsgChannelOpenInitResponse;
                    fromAmino(_: _118.MsgChannelOpenInitResponseAmino): _118.MsgChannelOpenInitResponse;
                    toAmino(_: _118.MsgChannelOpenInitResponse): _118.MsgChannelOpenInitResponseAmino;
                };
                MsgChannelOpenTry: {
                    encode(message: _118.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenTry;
                    fromJSON(object: any): _118.MsgChannelOpenTry;
                    toJSON(message: _118.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_118.MsgChannelOpenTry>): _118.MsgChannelOpenTry;
                    fromAmino(object: _118.MsgChannelOpenTryAmino): _118.MsgChannelOpenTry;
                    toAmino(message: _118.MsgChannelOpenTry): _118.MsgChannelOpenTryAmino;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _118.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _118.MsgChannelOpenTryResponse;
                    toJSON(_: _118.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelOpenTryResponse>): _118.MsgChannelOpenTryResponse;
                    fromAmino(_: _118.MsgChannelOpenTryResponseAmino): _118.MsgChannelOpenTryResponse;
                    toAmino(_: _118.MsgChannelOpenTryResponse): _118.MsgChannelOpenTryResponseAmino;
                };
                MsgChannelOpenAck: {
                    encode(message: _118.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenAck;
                    fromJSON(object: any): _118.MsgChannelOpenAck;
                    toJSON(message: _118.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_118.MsgChannelOpenAck>): _118.MsgChannelOpenAck;
                    fromAmino(object: _118.MsgChannelOpenAckAmino): _118.MsgChannelOpenAck;
                    toAmino(message: _118.MsgChannelOpenAck): _118.MsgChannelOpenAckAmino;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _118.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _118.MsgChannelOpenAckResponse;
                    toJSON(_: _118.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelOpenAckResponse>): _118.MsgChannelOpenAckResponse;
                    fromAmino(_: _118.MsgChannelOpenAckResponseAmino): _118.MsgChannelOpenAckResponse;
                    toAmino(_: _118.MsgChannelOpenAckResponse): _118.MsgChannelOpenAckResponseAmino;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _118.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenConfirm;
                    fromJSON(object: any): _118.MsgChannelOpenConfirm;
                    toJSON(message: _118.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_118.MsgChannelOpenConfirm>): _118.MsgChannelOpenConfirm;
                    fromAmino(object: _118.MsgChannelOpenConfirmAmino): _118.MsgChannelOpenConfirm;
                    toAmino(message: _118.MsgChannelOpenConfirm): _118.MsgChannelOpenConfirmAmino;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _118.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _118.MsgChannelOpenConfirmResponse;
                    toJSON(_: _118.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelOpenConfirmResponse>): _118.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _118.MsgChannelOpenConfirmResponseAmino): _118.MsgChannelOpenConfirmResponse;
                    toAmino(_: _118.MsgChannelOpenConfirmResponse): _118.MsgChannelOpenConfirmResponseAmino;
                };
                MsgChannelCloseInit: {
                    encode(message: _118.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseInit;
                    fromJSON(object: any): _118.MsgChannelCloseInit;
                    toJSON(message: _118.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_118.MsgChannelCloseInit>): _118.MsgChannelCloseInit;
                    fromAmino(object: _118.MsgChannelCloseInitAmino): _118.MsgChannelCloseInit;
                    toAmino(message: _118.MsgChannelCloseInit): _118.MsgChannelCloseInitAmino;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _118.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _118.MsgChannelCloseInitResponse;
                    toJSON(_: _118.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelCloseInitResponse>): _118.MsgChannelCloseInitResponse;
                    fromAmino(_: _118.MsgChannelCloseInitResponseAmino): _118.MsgChannelCloseInitResponse;
                    toAmino(_: _118.MsgChannelCloseInitResponse): _118.MsgChannelCloseInitResponseAmino;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _118.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseConfirm;
                    fromJSON(object: any): _118.MsgChannelCloseConfirm;
                    toJSON(message: _118.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_118.MsgChannelCloseConfirm>): _118.MsgChannelCloseConfirm;
                    fromAmino(object: _118.MsgChannelCloseConfirmAmino): _118.MsgChannelCloseConfirm;
                    toAmino(message: _118.MsgChannelCloseConfirm): _118.MsgChannelCloseConfirmAmino;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _118.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _118.MsgChannelCloseConfirmResponse;
                    toJSON(_: _118.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_118.MsgChannelCloseConfirmResponse>): _118.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _118.MsgChannelCloseConfirmResponseAmino): _118.MsgChannelCloseConfirmResponse;
                    toAmino(_: _118.MsgChannelCloseConfirmResponse): _118.MsgChannelCloseConfirmResponseAmino;
                };
                MsgRecvPacket: {
                    encode(message: _118.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRecvPacket;
                    fromJSON(object: any): _118.MsgRecvPacket;
                    toJSON(message: _118.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_118.MsgRecvPacket>): _118.MsgRecvPacket;
                    fromAmino(object: _118.MsgRecvPacketAmino): _118.MsgRecvPacket;
                    toAmino(message: _118.MsgRecvPacket): _118.MsgRecvPacketAmino;
                };
                MsgRecvPacketResponse: {
                    encode(_: _118.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgRecvPacketResponse;
                    fromJSON(_: any): _118.MsgRecvPacketResponse;
                    toJSON(_: _118.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_118.MsgRecvPacketResponse>): _118.MsgRecvPacketResponse;
                    fromAmino(_: _118.MsgRecvPacketResponseAmino): _118.MsgRecvPacketResponse;
                    toAmino(_: _118.MsgRecvPacketResponse): _118.MsgRecvPacketResponseAmino;
                };
                MsgTimeout: {
                    encode(message: _118.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeout;
                    fromJSON(object: any): _118.MsgTimeout;
                    toJSON(message: _118.MsgTimeout): unknown;
                    fromPartial(object: Partial<_118.MsgTimeout>): _118.MsgTimeout;
                    fromAmino(object: _118.MsgTimeoutAmino): _118.MsgTimeout;
                    toAmino(message: _118.MsgTimeout): _118.MsgTimeoutAmino;
                };
                MsgTimeoutResponse: {
                    encode(_: _118.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutResponse;
                    fromJSON(_: any): _118.MsgTimeoutResponse;
                    toJSON(_: _118.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_118.MsgTimeoutResponse>): _118.MsgTimeoutResponse;
                    fromAmino(_: _118.MsgTimeoutResponseAmino): _118.MsgTimeoutResponse;
                    toAmino(_: _118.MsgTimeoutResponse): _118.MsgTimeoutResponseAmino;
                };
                MsgTimeoutOnClose: {
                    encode(message: _118.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutOnClose;
                    fromJSON(object: any): _118.MsgTimeoutOnClose;
                    toJSON(message: _118.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_118.MsgTimeoutOnClose>): _118.MsgTimeoutOnClose;
                    fromAmino(object: _118.MsgTimeoutOnCloseAmino): _118.MsgTimeoutOnClose;
                    toAmino(message: _118.MsgTimeoutOnClose): _118.MsgTimeoutOnCloseAmino;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _118.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _118.MsgTimeoutOnCloseResponse;
                    toJSON(_: _118.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_118.MsgTimeoutOnCloseResponse>): _118.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _118.MsgTimeoutOnCloseResponseAmino): _118.MsgTimeoutOnCloseResponse;
                    toAmino(_: _118.MsgTimeoutOnCloseResponse): _118.MsgTimeoutOnCloseResponseAmino;
                };
                MsgAcknowledgement: {
                    encode(message: _118.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgAcknowledgement;
                    fromJSON(object: any): _118.MsgAcknowledgement;
                    toJSON(message: _118.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_118.MsgAcknowledgement>): _118.MsgAcknowledgement;
                    fromAmino(object: _118.MsgAcknowledgementAmino): _118.MsgAcknowledgement;
                    toAmino(message: _118.MsgAcknowledgement): _118.MsgAcknowledgementAmino;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _118.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MsgAcknowledgementResponse;
                    fromJSON(_: any): _118.MsgAcknowledgementResponse;
                    toJSON(_: _118.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_118.MsgAcknowledgementResponse>): _118.MsgAcknowledgementResponse;
                    fromAmino(_: _118.MsgAcknowledgementResponseAmino): _118.MsgAcknowledgementResponse;
                    toAmino(_: _118.MsgAcknowledgementResponse): _118.MsgAcknowledgementResponseAmino;
                };
                QueryChannelRequest: {
                    encode(message: _117.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelRequest;
                    fromJSON(object: any): _117.QueryChannelRequest;
                    toJSON(message: _117.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_117.QueryChannelRequest>): _117.QueryChannelRequest;
                    fromAmino(object: _117.QueryChannelRequestAmino): _117.QueryChannelRequest;
                    toAmino(message: _117.QueryChannelRequest): _117.QueryChannelRequestAmino;
                };
                QueryChannelResponse: {
                    encode(message: _117.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelResponse;
                    fromJSON(object: any): _117.QueryChannelResponse;
                    toJSON(message: _117.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_117.QueryChannelResponse>): _117.QueryChannelResponse;
                    fromAmino(object: _117.QueryChannelResponseAmino): _117.QueryChannelResponse;
                    toAmino(message: _117.QueryChannelResponse): _117.QueryChannelResponseAmino;
                };
                QueryChannelsRequest: {
                    encode(message: _117.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelsRequest;
                    fromJSON(object: any): _117.QueryChannelsRequest;
                    toJSON(message: _117.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_117.QueryChannelsRequest>): _117.QueryChannelsRequest;
                    fromAmino(object: _117.QueryChannelsRequestAmino): _117.QueryChannelsRequest;
                    toAmino(message: _117.QueryChannelsRequest): _117.QueryChannelsRequestAmino;
                };
                QueryChannelsResponse: {
                    encode(message: _117.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelsResponse;
                    fromJSON(object: any): _117.QueryChannelsResponse;
                    toJSON(message: _117.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_117.QueryChannelsResponse>): _117.QueryChannelsResponse;
                    fromAmino(object: _117.QueryChannelsResponseAmino): _117.QueryChannelsResponse;
                    toAmino(message: _117.QueryChannelsResponse): _117.QueryChannelsResponseAmino;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _117.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _117.QueryConnectionChannelsRequest;
                    toJSON(message: _117.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsRequest>): _117.QueryConnectionChannelsRequest;
                    fromAmino(object: _117.QueryConnectionChannelsRequestAmino): _117.QueryConnectionChannelsRequest;
                    toAmino(message: _117.QueryConnectionChannelsRequest): _117.QueryConnectionChannelsRequestAmino;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _117.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _117.QueryConnectionChannelsResponse;
                    toJSON(message: _117.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_117.QueryConnectionChannelsResponse>): _117.QueryConnectionChannelsResponse;
                    fromAmino(object: _117.QueryConnectionChannelsResponseAmino): _117.QueryConnectionChannelsResponse;
                    toAmino(message: _117.QueryConnectionChannelsResponse): _117.QueryConnectionChannelsResponseAmino;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _117.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelClientStateRequest;
                    fromJSON(object: any): _117.QueryChannelClientStateRequest;
                    toJSON(message: _117.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_117.QueryChannelClientStateRequest>): _117.QueryChannelClientStateRequest;
                    fromAmino(object: _117.QueryChannelClientStateRequestAmino): _117.QueryChannelClientStateRequest;
                    toAmino(message: _117.QueryChannelClientStateRequest): _117.QueryChannelClientStateRequestAmino;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _117.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelClientStateResponse;
                    fromJSON(object: any): _117.QueryChannelClientStateResponse;
                    toJSON(message: _117.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_117.QueryChannelClientStateResponse>): _117.QueryChannelClientStateResponse;
                    fromAmino(object: _117.QueryChannelClientStateResponseAmino): _117.QueryChannelClientStateResponse;
                    toAmino(message: _117.QueryChannelClientStateResponse): _117.QueryChannelClientStateResponseAmino;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _117.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _117.QueryChannelConsensusStateRequest;
                    toJSON(message: _117.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateRequest>): _117.QueryChannelConsensusStateRequest;
                    fromAmino(object: _117.QueryChannelConsensusStateRequestAmino): _117.QueryChannelConsensusStateRequest;
                    toAmino(message: _117.QueryChannelConsensusStateRequest): _117.QueryChannelConsensusStateRequestAmino;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _117.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _117.QueryChannelConsensusStateResponse;
                    toJSON(message: _117.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_117.QueryChannelConsensusStateResponse>): _117.QueryChannelConsensusStateResponse;
                    fromAmino(object: _117.QueryChannelConsensusStateResponseAmino): _117.QueryChannelConsensusStateResponse;
                    toAmino(message: _117.QueryChannelConsensusStateResponse): _117.QueryChannelConsensusStateResponseAmino;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _117.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _117.QueryPacketCommitmentRequest;
                    toJSON(message: _117.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentRequest>): _117.QueryPacketCommitmentRequest;
                    fromAmino(object: _117.QueryPacketCommitmentRequestAmino): _117.QueryPacketCommitmentRequest;
                    toAmino(message: _117.QueryPacketCommitmentRequest): _117.QueryPacketCommitmentRequestAmino;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _117.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _117.QueryPacketCommitmentResponse;
                    toJSON(message: _117.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentResponse>): _117.QueryPacketCommitmentResponse;
                    fromAmino(object: _117.QueryPacketCommitmentResponseAmino): _117.QueryPacketCommitmentResponse;
                    toAmino(message: _117.QueryPacketCommitmentResponse): _117.QueryPacketCommitmentResponseAmino;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _117.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _117.QueryPacketCommitmentsRequest;
                    toJSON(message: _117.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsRequest>): _117.QueryPacketCommitmentsRequest;
                    fromAmino(object: _117.QueryPacketCommitmentsRequestAmino): _117.QueryPacketCommitmentsRequest;
                    toAmino(message: _117.QueryPacketCommitmentsRequest): _117.QueryPacketCommitmentsRequestAmino;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _117.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _117.QueryPacketCommitmentsResponse;
                    toJSON(message: _117.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_117.QueryPacketCommitmentsResponse>): _117.QueryPacketCommitmentsResponse;
                    fromAmino(object: _117.QueryPacketCommitmentsResponseAmino): _117.QueryPacketCommitmentsResponse;
                    toAmino(message: _117.QueryPacketCommitmentsResponse): _117.QueryPacketCommitmentsResponseAmino;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _117.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketReceiptRequest;
                    fromJSON(object: any): _117.QueryPacketReceiptRequest;
                    toJSON(message: _117.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_117.QueryPacketReceiptRequest>): _117.QueryPacketReceiptRequest;
                    fromAmino(object: _117.QueryPacketReceiptRequestAmino): _117.QueryPacketReceiptRequest;
                    toAmino(message: _117.QueryPacketReceiptRequest): _117.QueryPacketReceiptRequestAmino;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _117.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketReceiptResponse;
                    fromJSON(object: any): _117.QueryPacketReceiptResponse;
                    toJSON(message: _117.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_117.QueryPacketReceiptResponse>): _117.QueryPacketReceiptResponse;
                    fromAmino(object: _117.QueryPacketReceiptResponseAmino): _117.QueryPacketReceiptResponse;
                    toAmino(message: _117.QueryPacketReceiptResponse): _117.QueryPacketReceiptResponseAmino;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _117.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementRequest;
                    toJSON(message: _117.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementRequest>): _117.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _117.QueryPacketAcknowledgementRequestAmino): _117.QueryPacketAcknowledgementRequest;
                    toAmino(message: _117.QueryPacketAcknowledgementRequest): _117.QueryPacketAcknowledgementRequestAmino;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _117.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementResponse;
                    toJSON(message: _117.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementResponse>): _117.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _117.QueryPacketAcknowledgementResponseAmino): _117.QueryPacketAcknowledgementResponse;
                    toAmino(message: _117.QueryPacketAcknowledgementResponse): _117.QueryPacketAcknowledgementResponseAmino;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _117.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _117.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsRequest>): _117.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _117.QueryPacketAcknowledgementsRequestAmino): _117.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _117.QueryPacketAcknowledgementsRequest): _117.QueryPacketAcknowledgementsRequestAmino;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _117.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _117.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _117.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_117.QueryPacketAcknowledgementsResponse>): _117.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _117.QueryPacketAcknowledgementsResponseAmino): _117.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _117.QueryPacketAcknowledgementsResponse): _117.QueryPacketAcknowledgementsResponseAmino;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _117.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsRequest;
                    toJSON(message: _117.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsRequest>): _117.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _117.QueryUnreceivedPacketsRequestAmino): _117.QueryUnreceivedPacketsRequest;
                    toAmino(message: _117.QueryUnreceivedPacketsRequest): _117.QueryUnreceivedPacketsRequestAmino;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _117.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _117.QueryUnreceivedPacketsResponse;
                    toJSON(message: _117.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_117.QueryUnreceivedPacketsResponse>): _117.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _117.QueryUnreceivedPacketsResponseAmino): _117.QueryUnreceivedPacketsResponse;
                    toAmino(message: _117.QueryUnreceivedPacketsResponse): _117.QueryUnreceivedPacketsResponseAmino;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _117.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _117.QueryUnreceivedAcksRequest;
                    toJSON(message: _117.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksRequest>): _117.QueryUnreceivedAcksRequest;
                    fromAmino(object: _117.QueryUnreceivedAcksRequestAmino): _117.QueryUnreceivedAcksRequest;
                    toAmino(message: _117.QueryUnreceivedAcksRequest): _117.QueryUnreceivedAcksRequestAmino;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _117.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _117.QueryUnreceivedAcksResponse;
                    toJSON(message: _117.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_117.QueryUnreceivedAcksResponse>): _117.QueryUnreceivedAcksResponse;
                    fromAmino(object: _117.QueryUnreceivedAcksResponseAmino): _117.QueryUnreceivedAcksResponse;
                    toAmino(message: _117.QueryUnreceivedAcksResponse): _117.QueryUnreceivedAcksResponseAmino;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _117.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveRequest;
                    toJSON(message: _117.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveRequest>): _117.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _117.QueryNextSequenceReceiveRequestAmino): _117.QueryNextSequenceReceiveRequest;
                    toAmino(message: _117.QueryNextSequenceReceiveRequest): _117.QueryNextSequenceReceiveRequestAmino;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _117.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _117.QueryNextSequenceReceiveResponse;
                    toJSON(message: _117.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_117.QueryNextSequenceReceiveResponse>): _117.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _117.QueryNextSequenceReceiveResponseAmino): _117.QueryNextSequenceReceiveResponse;
                    toAmino(message: _117.QueryNextSequenceReceiveResponse): _117.QueryNextSequenceReceiveResponseAmino;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromJSON(object: any): _116.GenesisState;
                    toJSON(message: _116.GenesisState): unknown;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                    fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                    toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                };
                PacketSequence: {
                    encode(message: _116.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PacketSequence;
                    fromJSON(object: any): _116.PacketSequence;
                    toJSON(message: _116.PacketSequence): unknown;
                    fromPartial(object: Partial<_116.PacketSequence>): _116.PacketSequence;
                    fromAmino(object: _116.PacketSequenceAmino): _116.PacketSequence;
                    toAmino(message: _116.PacketSequence): _116.PacketSequenceAmino;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                orderFromJSON(object: any): _115.Order;
                orderToJSON(object: _115.Order): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                StateAmino: typeof _115.State;
                Order: typeof _115.Order;
                OrderSDKType: typeof _115.Order;
                OrderAmino: typeof _115.Order;
                Channel: {
                    encode(message: _115.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Channel;
                    fromJSON(object: any): _115.Channel;
                    toJSON(message: _115.Channel): unknown;
                    fromPartial(object: Partial<_115.Channel>): _115.Channel;
                    fromAmino(object: _115.ChannelAmino): _115.Channel;
                    toAmino(message: _115.Channel): _115.ChannelAmino;
                };
                IdentifiedChannel: {
                    encode(message: _115.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.IdentifiedChannel;
                    fromJSON(object: any): _115.IdentifiedChannel;
                    toJSON(message: _115.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_115.IdentifiedChannel>): _115.IdentifiedChannel;
                    fromAmino(object: _115.IdentifiedChannelAmino): _115.IdentifiedChannel;
                    toAmino(message: _115.IdentifiedChannel): _115.IdentifiedChannelAmino;
                };
                Counterparty: {
                    encode(message: _115.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Counterparty;
                    fromJSON(object: any): _115.Counterparty;
                    toJSON(message: _115.Counterparty): unknown;
                    fromPartial(object: Partial<_115.Counterparty>): _115.Counterparty;
                    fromAmino(object: _115.CounterpartyAmino): _115.Counterparty;
                    toAmino(message: _115.Counterparty): _115.CounterpartyAmino;
                };
                Packet: {
                    encode(message: _115.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Packet;
                    fromJSON(object: any): _115.Packet;
                    toJSON(message: _115.Packet): unknown;
                    fromPartial(object: Partial<_115.Packet>): _115.Packet;
                    fromAmino(object: _115.PacketAmino): _115.Packet;
                    toAmino(message: _115.Packet): _115.PacketAmino;
                };
                PacketState: {
                    encode(message: _115.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PacketState;
                    fromJSON(object: any): _115.PacketState;
                    toJSON(message: _115.PacketState): unknown;
                    fromPartial(object: Partial<_115.PacketState>): _115.PacketState;
                    fromAmino(object: _115.PacketStateAmino): _115.PacketState;
                    toAmino(message: _115.PacketState): _115.PacketStateAmino;
                };
                Acknowledgement: {
                    encode(message: _115.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Acknowledgement;
                    fromJSON(object: any): _115.Acknowledgement;
                    toJSON(message: _115.Acknowledgement): unknown;
                    fromPartial(object: Partial<_115.Acknowledgement>): _115.Acknowledgement;
                    fromAmino(object: _115.AcknowledgementAmino): _115.Acknowledgement;
                    toAmino(message: _115.Acknowledgement): _115.AcknowledgementAmino;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _288.MsgClientImpl;
                QueryClientImpl: typeof _283.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                    clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                    consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                    consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                    clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                    clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                    upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _122.MsgCreateClient): {
                            typeUrl: string;
                            value: _122.MsgCreateClient;
                        };
                        updateClient(value: _122.MsgUpdateClient): {
                            typeUrl: string;
                            value: _122.MsgUpdateClient;
                        };
                        upgradeClient(value: _122.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _122.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _122.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _122.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgCreateClient) => _122.MsgCreateClientAmino;
                        fromAmino: (object: _122.MsgCreateClientAmino) => _122.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpdateClient) => _122.MsgUpdateClientAmino;
                        fromAmino: (object: _122.MsgUpdateClientAmino) => _122.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpgradeClient) => _122.MsgUpgradeClientAmino;
                        fromAmino: (object: _122.MsgUpgradeClientAmino) => _122.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _122.MsgSubmitMisbehaviour) => _122.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _122.MsgSubmitMisbehaviourAmino) => _122.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _122.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClient;
                    fromJSON(object: any): _122.MsgCreateClient;
                    toJSON(message: _122.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_122.MsgCreateClient>): _122.MsgCreateClient;
                    fromAmino(object: _122.MsgCreateClientAmino): _122.MsgCreateClient;
                    toAmino(message: _122.MsgCreateClient): _122.MsgCreateClientAmino;
                };
                MsgCreateClientResponse: {
                    encode(_: _122.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateClientResponse;
                    fromJSON(_: any): _122.MsgCreateClientResponse;
                    toJSON(_: _122.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_122.MsgCreateClientResponse>): _122.MsgCreateClientResponse;
                    fromAmino(_: _122.MsgCreateClientResponseAmino): _122.MsgCreateClientResponse;
                    toAmino(_: _122.MsgCreateClientResponse): _122.MsgCreateClientResponseAmino;
                };
                MsgUpdateClient: {
                    encode(message: _122.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateClient;
                    fromJSON(object: any): _122.MsgUpdateClient;
                    toJSON(message: _122.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_122.MsgUpdateClient>): _122.MsgUpdateClient;
                    fromAmino(object: _122.MsgUpdateClientAmino): _122.MsgUpdateClient;
                    toAmino(message: _122.MsgUpdateClient): _122.MsgUpdateClientAmino;
                };
                MsgUpdateClientResponse: {
                    encode(_: _122.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateClientResponse;
                    fromJSON(_: any): _122.MsgUpdateClientResponse;
                    toJSON(_: _122.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_122.MsgUpdateClientResponse>): _122.MsgUpdateClientResponse;
                    fromAmino(_: _122.MsgUpdateClientResponseAmino): _122.MsgUpdateClientResponse;
                    toAmino(_: _122.MsgUpdateClientResponse): _122.MsgUpdateClientResponseAmino;
                };
                MsgUpgradeClient: {
                    encode(message: _122.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpgradeClient;
                    fromJSON(object: any): _122.MsgUpgradeClient;
                    toJSON(message: _122.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_122.MsgUpgradeClient>): _122.MsgUpgradeClient;
                    fromAmino(object: _122.MsgUpgradeClientAmino): _122.MsgUpgradeClient;
                    toAmino(message: _122.MsgUpgradeClient): _122.MsgUpgradeClientAmino;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _122.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpgradeClientResponse;
                    fromJSON(_: any): _122.MsgUpgradeClientResponse;
                    toJSON(_: _122.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_122.MsgUpgradeClientResponse>): _122.MsgUpgradeClientResponse;
                    fromAmino(_: _122.MsgUpgradeClientResponseAmino): _122.MsgUpgradeClientResponse;
                    toAmino(_: _122.MsgUpgradeClientResponse): _122.MsgUpgradeClientResponseAmino;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _122.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _122.MsgSubmitMisbehaviour;
                    toJSON(message: _122.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_122.MsgSubmitMisbehaviour>): _122.MsgSubmitMisbehaviour;
                    fromAmino(object: _122.MsgSubmitMisbehaviourAmino): _122.MsgSubmitMisbehaviour;
                    toAmino(message: _122.MsgSubmitMisbehaviour): _122.MsgSubmitMisbehaviourAmino;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _122.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _122.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _122.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_122.MsgSubmitMisbehaviourResponse>): _122.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _122.MsgSubmitMisbehaviourResponseAmino): _122.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _122.MsgSubmitMisbehaviourResponse): _122.MsgSubmitMisbehaviourResponseAmino;
                };
                QueryClientStateRequest: {
                    encode(message: _121.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStateRequest;
                    fromJSON(object: any): _121.QueryClientStateRequest;
                    toJSON(message: _121.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_121.QueryClientStateRequest>): _121.QueryClientStateRequest;
                    fromAmino(object: _121.QueryClientStateRequestAmino): _121.QueryClientStateRequest;
                    toAmino(message: _121.QueryClientStateRequest): _121.QueryClientStateRequestAmino;
                };
                QueryClientStateResponse: {
                    encode(message: _121.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStateResponse;
                    fromJSON(object: any): _121.QueryClientStateResponse;
                    toJSON(message: _121.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_121.QueryClientStateResponse>): _121.QueryClientStateResponse;
                    fromAmino(object: _121.QueryClientStateResponseAmino): _121.QueryClientStateResponse;
                    toAmino(message: _121.QueryClientStateResponse): _121.QueryClientStateResponseAmino;
                };
                QueryClientStatesRequest: {
                    encode(message: _121.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatesRequest;
                    fromJSON(object: any): _121.QueryClientStatesRequest;
                    toJSON(message: _121.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_121.QueryClientStatesRequest>): _121.QueryClientStatesRequest;
                    fromAmino(object: _121.QueryClientStatesRequestAmino): _121.QueryClientStatesRequest;
                    toAmino(message: _121.QueryClientStatesRequest): _121.QueryClientStatesRequestAmino;
                };
                QueryClientStatesResponse: {
                    encode(message: _121.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatesResponse;
                    fromJSON(object: any): _121.QueryClientStatesResponse;
                    toJSON(message: _121.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_121.QueryClientStatesResponse>): _121.QueryClientStatesResponse;
                    fromAmino(object: _121.QueryClientStatesResponseAmino): _121.QueryClientStatesResponse;
                    toAmino(message: _121.QueryClientStatesResponse): _121.QueryClientStatesResponseAmino;
                };
                QueryConsensusStateRequest: {
                    encode(message: _121.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStateRequest;
                    fromJSON(object: any): _121.QueryConsensusStateRequest;
                    toJSON(message: _121.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_121.QueryConsensusStateRequest>): _121.QueryConsensusStateRequest;
                    fromAmino(object: _121.QueryConsensusStateRequestAmino): _121.QueryConsensusStateRequest;
                    toAmino(message: _121.QueryConsensusStateRequest): _121.QueryConsensusStateRequestAmino;
                };
                QueryConsensusStateResponse: {
                    encode(message: _121.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStateResponse;
                    fromJSON(object: any): _121.QueryConsensusStateResponse;
                    toJSON(message: _121.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_121.QueryConsensusStateResponse>): _121.QueryConsensusStateResponse;
                    fromAmino(object: _121.QueryConsensusStateResponseAmino): _121.QueryConsensusStateResponse;
                    toAmino(message: _121.QueryConsensusStateResponse): _121.QueryConsensusStateResponseAmino;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _121.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStatesRequest;
                    fromJSON(object: any): _121.QueryConsensusStatesRequest;
                    toJSON(message: _121.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_121.QueryConsensusStatesRequest>): _121.QueryConsensusStatesRequest;
                    fromAmino(object: _121.QueryConsensusStatesRequestAmino): _121.QueryConsensusStatesRequest;
                    toAmino(message: _121.QueryConsensusStatesRequest): _121.QueryConsensusStatesRequestAmino;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _121.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryConsensusStatesResponse;
                    fromJSON(object: any): _121.QueryConsensusStatesResponse;
                    toJSON(message: _121.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_121.QueryConsensusStatesResponse>): _121.QueryConsensusStatesResponse;
                    fromAmino(object: _121.QueryConsensusStatesResponseAmino): _121.QueryConsensusStatesResponse;
                    toAmino(message: _121.QueryConsensusStatesResponse): _121.QueryConsensusStatesResponseAmino;
                };
                QueryClientStatusRequest: {
                    encode(message: _121.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatusRequest;
                    fromJSON(object: any): _121.QueryClientStatusRequest;
                    toJSON(message: _121.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_121.QueryClientStatusRequest>): _121.QueryClientStatusRequest;
                    fromAmino(object: _121.QueryClientStatusRequestAmino): _121.QueryClientStatusRequest;
                    toAmino(message: _121.QueryClientStatusRequest): _121.QueryClientStatusRequestAmino;
                };
                QueryClientStatusResponse: {
                    encode(message: _121.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientStatusResponse;
                    fromJSON(object: any): _121.QueryClientStatusResponse;
                    toJSON(message: _121.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_121.QueryClientStatusResponse>): _121.QueryClientStatusResponse;
                    fromAmino(object: _121.QueryClientStatusResponseAmino): _121.QueryClientStatusResponse;
                    toAmino(message: _121.QueryClientStatusResponse): _121.QueryClientStatusResponseAmino;
                };
                QueryClientParamsRequest: {
                    encode(_: _121.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientParamsRequest;
                    fromJSON(_: any): _121.QueryClientParamsRequest;
                    toJSON(_: _121.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_121.QueryClientParamsRequest>): _121.QueryClientParamsRequest;
                    fromAmino(_: _121.QueryClientParamsRequestAmino): _121.QueryClientParamsRequest;
                    toAmino(_: _121.QueryClientParamsRequest): _121.QueryClientParamsRequestAmino;
                };
                QueryClientParamsResponse: {
                    encode(message: _121.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryClientParamsResponse;
                    fromJSON(object: any): _121.QueryClientParamsResponse;
                    toJSON(message: _121.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_121.QueryClientParamsResponse>): _121.QueryClientParamsResponse;
                    fromAmino(object: _121.QueryClientParamsResponseAmino): _121.QueryClientParamsResponse;
                    toAmino(message: _121.QueryClientParamsResponse): _121.QueryClientParamsResponseAmino;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _121.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _121.QueryUpgradedClientStateRequest;
                    toJSON(_: _121.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_121.QueryUpgradedClientStateRequest>): _121.QueryUpgradedClientStateRequest;
                    fromAmino(_: _121.QueryUpgradedClientStateRequestAmino): _121.QueryUpgradedClientStateRequest;
                    toAmino(_: _121.QueryUpgradedClientStateRequest): _121.QueryUpgradedClientStateRequestAmino;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _121.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _121.QueryUpgradedClientStateResponse;
                    toJSON(message: _121.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_121.QueryUpgradedClientStateResponse>): _121.QueryUpgradedClientStateResponse;
                    fromAmino(object: _121.QueryUpgradedClientStateResponseAmino): _121.QueryUpgradedClientStateResponse;
                    toAmino(message: _121.QueryUpgradedClientStateResponse): _121.QueryUpgradedClientStateResponseAmino;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _121.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _121.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _121.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_121.QueryUpgradedConsensusStateRequest>): _121.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _121.QueryUpgradedConsensusStateRequestAmino): _121.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _121.QueryUpgradedConsensusStateRequest): _121.QueryUpgradedConsensusStateRequestAmino;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _121.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _121.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _121.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_121.QueryUpgradedConsensusStateResponse>): _121.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _121.QueryUpgradedConsensusStateResponseAmino): _121.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _121.QueryUpgradedConsensusStateResponse): _121.QueryUpgradedConsensusStateResponseAmino;
                };
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                    fromJSON(object: any): _120.GenesisState;
                    toJSON(message: _120.GenesisState): unknown;
                    fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                    fromAmino(object: _120.GenesisStateAmino): _120.GenesisState;
                    toAmino(message: _120.GenesisState): _120.GenesisStateAmino;
                };
                GenesisMetadata: {
                    encode(message: _120.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisMetadata;
                    fromJSON(object: any): _120.GenesisMetadata;
                    toJSON(message: _120.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_120.GenesisMetadata>): _120.GenesisMetadata;
                    fromAmino(object: _120.GenesisMetadataAmino): _120.GenesisMetadata;
                    toAmino(message: _120.GenesisMetadata): _120.GenesisMetadataAmino;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _120.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _120.IdentifiedGenesisMetadata;
                    toJSON(message: _120.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_120.IdentifiedGenesisMetadata>): _120.IdentifiedGenesisMetadata;
                    fromAmino(object: _120.IdentifiedGenesisMetadataAmino): _120.IdentifiedGenesisMetadata;
                    toAmino(message: _120.IdentifiedGenesisMetadata): _120.IdentifiedGenesisMetadataAmino;
                };
                IdentifiedClientState: {
                    encode(message: _119.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.IdentifiedClientState;
                    fromJSON(object: any): _119.IdentifiedClientState;
                    toJSON(message: _119.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_119.IdentifiedClientState>): _119.IdentifiedClientState;
                    fromAmino(object: _119.IdentifiedClientStateAmino): _119.IdentifiedClientState;
                    toAmino(message: _119.IdentifiedClientState): _119.IdentifiedClientStateAmino;
                };
                ConsensusStateWithHeight: {
                    encode(message: _119.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusStateWithHeight;
                    fromJSON(object: any): _119.ConsensusStateWithHeight;
                    toJSON(message: _119.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_119.ConsensusStateWithHeight>): _119.ConsensusStateWithHeight;
                    fromAmino(object: _119.ConsensusStateWithHeightAmino): _119.ConsensusStateWithHeight;
                    toAmino(message: _119.ConsensusStateWithHeight): _119.ConsensusStateWithHeightAmino;
                };
                ClientConsensusStates: {
                    encode(message: _119.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientConsensusStates;
                    fromJSON(object: any): _119.ClientConsensusStates;
                    toJSON(message: _119.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_119.ClientConsensusStates>): _119.ClientConsensusStates;
                    fromAmino(object: _119.ClientConsensusStatesAmino): _119.ClientConsensusStates;
                    toAmino(message: _119.ClientConsensusStates): _119.ClientConsensusStatesAmino;
                };
                ClientUpdateProposal: {
                    encode(message: _119.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientUpdateProposal;
                    fromJSON(object: any): _119.ClientUpdateProposal;
                    toJSON(message: _119.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_119.ClientUpdateProposal>): _119.ClientUpdateProposal;
                    fromAmino(object: _119.ClientUpdateProposalAmino): _119.ClientUpdateProposal;
                    toAmino(message: _119.ClientUpdateProposal): _119.ClientUpdateProposalAmino;
                };
                UpgradeProposal: {
                    encode(message: _119.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.UpgradeProposal;
                    fromJSON(object: any): _119.UpgradeProposal;
                    toJSON(message: _119.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_119.UpgradeProposal>): _119.UpgradeProposal;
                    fromAmino(object: _119.UpgradeProposalAmino): _119.UpgradeProposal;
                    toAmino(message: _119.UpgradeProposal): _119.UpgradeProposalAmino;
                };
                Height: {
                    encode(message: _119.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Height;
                    fromJSON(object: any): _119.Height;
                    toJSON(message: _119.Height): unknown;
                    fromPartial(object: Partial<_119.Height>): _119.Height;
                    fromAmino(object: _119.HeightAmino): _119.Height;
                    toAmino(message: _119.Height): _119.HeightAmino;
                };
                Params: {
                    encode(message: _119.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Params;
                    fromJSON(object: any): _119.Params;
                    toJSON(message: _119.Params): unknown;
                    fromPartial(object: Partial<_119.Params>): _119.Params;
                    fromAmino(object: _119.ParamsAmino): _119.Params;
                    toAmino(message: _119.Params): _119.ParamsAmino;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _123.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerkleRoot;
                    fromJSON(object: any): _123.MerkleRoot;
                    toJSON(message: _123.MerkleRoot): unknown;
                    fromPartial(object: Partial<_123.MerkleRoot>): _123.MerkleRoot;
                    fromAmino(object: _123.MerkleRootAmino): _123.MerkleRoot;
                    toAmino(message: _123.MerkleRoot): _123.MerkleRootAmino;
                };
                MerklePrefix: {
                    encode(message: _123.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerklePrefix;
                    fromJSON(object: any): _123.MerklePrefix;
                    toJSON(message: _123.MerklePrefix): unknown;
                    fromPartial(object: Partial<_123.MerklePrefix>): _123.MerklePrefix;
                    fromAmino(object: _123.MerklePrefixAmino): _123.MerklePrefix;
                    toAmino(message: _123.MerklePrefix): _123.MerklePrefixAmino;
                };
                MerklePath: {
                    encode(message: _123.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerklePath;
                    fromJSON(object: any): _123.MerklePath;
                    toJSON(message: _123.MerklePath): unknown;
                    fromPartial(object: Partial<_123.MerklePath>): _123.MerklePath;
                    fromAmino(object: _123.MerklePathAmino): _123.MerklePath;
                    toAmino(message: _123.MerklePath): _123.MerklePathAmino;
                };
                MerkleProof: {
                    encode(message: _123.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MerkleProof;
                    fromJSON(object: any): _123.MerkleProof;
                    toJSON(message: _123.MerkleProof): unknown;
                    fromPartial(object: Partial<_123.MerkleProof>): _123.MerkleProof;
                    fromAmino(object: _123.MerkleProofAmino): _123.MerkleProof;
                    toAmino(message: _123.MerkleProof): _123.MerkleProofAmino;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _289.MsgClientImpl;
                QueryClientImpl: typeof _284.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                    connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                    clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                    connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _127.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _127.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _127.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _127.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _127.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenInit) => _127.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _127.MsgConnectionOpenInitAmino) => _127.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenTry) => _127.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _127.MsgConnectionOpenTryAmino) => _127.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenAck) => _127.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _127.MsgConnectionOpenAckAmino) => _127.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _127.MsgConnectionOpenConfirm) => _127.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _127.MsgConnectionOpenConfirmAmino) => _127.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _127.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenInit;
                    fromJSON(object: any): _127.MsgConnectionOpenInit;
                    toJSON(message: _127.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_127.MsgConnectionOpenInit>): _127.MsgConnectionOpenInit;
                    fromAmino(object: _127.MsgConnectionOpenInitAmino): _127.MsgConnectionOpenInit;
                    toAmino(message: _127.MsgConnectionOpenInit): _127.MsgConnectionOpenInitAmino;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _127.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _127.MsgConnectionOpenInitResponse;
                    toJSON(_: _127.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_127.MsgConnectionOpenInitResponse>): _127.MsgConnectionOpenInitResponse;
                    fromAmino(_: _127.MsgConnectionOpenInitResponseAmino): _127.MsgConnectionOpenInitResponse;
                    toAmino(_: _127.MsgConnectionOpenInitResponse): _127.MsgConnectionOpenInitResponseAmino;
                };
                MsgConnectionOpenTry: {
                    encode(message: _127.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenTry;
                    fromJSON(object: any): _127.MsgConnectionOpenTry;
                    toJSON(message: _127.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_127.MsgConnectionOpenTry>): _127.MsgConnectionOpenTry;
                    fromAmino(object: _127.MsgConnectionOpenTryAmino): _127.MsgConnectionOpenTry;
                    toAmino(message: _127.MsgConnectionOpenTry): _127.MsgConnectionOpenTryAmino;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _127.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _127.MsgConnectionOpenTryResponse;
                    toJSON(_: _127.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_127.MsgConnectionOpenTryResponse>): _127.MsgConnectionOpenTryResponse;
                    fromAmino(_: _127.MsgConnectionOpenTryResponseAmino): _127.MsgConnectionOpenTryResponse;
                    toAmino(_: _127.MsgConnectionOpenTryResponse): _127.MsgConnectionOpenTryResponseAmino;
                };
                MsgConnectionOpenAck: {
                    encode(message: _127.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenAck;
                    fromJSON(object: any): _127.MsgConnectionOpenAck;
                    toJSON(message: _127.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_127.MsgConnectionOpenAck>): _127.MsgConnectionOpenAck;
                    fromAmino(object: _127.MsgConnectionOpenAckAmino): _127.MsgConnectionOpenAck;
                    toAmino(message: _127.MsgConnectionOpenAck): _127.MsgConnectionOpenAckAmino;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _127.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _127.MsgConnectionOpenAckResponse;
                    toJSON(_: _127.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_127.MsgConnectionOpenAckResponse>): _127.MsgConnectionOpenAckResponse;
                    fromAmino(_: _127.MsgConnectionOpenAckResponseAmino): _127.MsgConnectionOpenAckResponse;
                    toAmino(_: _127.MsgConnectionOpenAckResponse): _127.MsgConnectionOpenAckResponseAmino;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _127.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _127.MsgConnectionOpenConfirm;
                    toJSON(message: _127.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_127.MsgConnectionOpenConfirm>): _127.MsgConnectionOpenConfirm;
                    fromAmino(object: _127.MsgConnectionOpenConfirmAmino): _127.MsgConnectionOpenConfirm;
                    toAmino(message: _127.MsgConnectionOpenConfirm): _127.MsgConnectionOpenConfirmAmino;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _127.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _127.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _127.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_127.MsgConnectionOpenConfirmResponse>): _127.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _127.MsgConnectionOpenConfirmResponseAmino): _127.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _127.MsgConnectionOpenConfirmResponse): _127.MsgConnectionOpenConfirmResponseAmino;
                };
                QueryConnectionRequest: {
                    encode(message: _126.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionRequest;
                    fromJSON(object: any): _126.QueryConnectionRequest;
                    toJSON(message: _126.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionRequest>): _126.QueryConnectionRequest;
                    fromAmino(object: _126.QueryConnectionRequestAmino): _126.QueryConnectionRequest;
                    toAmino(message: _126.QueryConnectionRequest): _126.QueryConnectionRequestAmino;
                };
                QueryConnectionResponse: {
                    encode(message: _126.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionResponse;
                    fromJSON(object: any): _126.QueryConnectionResponse;
                    toJSON(message: _126.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionResponse>): _126.QueryConnectionResponse;
                    fromAmino(object: _126.QueryConnectionResponseAmino): _126.QueryConnectionResponse;
                    toAmino(message: _126.QueryConnectionResponse): _126.QueryConnectionResponseAmino;
                };
                QueryConnectionsRequest: {
                    encode(message: _126.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionsRequest;
                    fromJSON(object: any): _126.QueryConnectionsRequest;
                    toJSON(message: _126.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionsRequest>): _126.QueryConnectionsRequest;
                    fromAmino(object: _126.QueryConnectionsRequestAmino): _126.QueryConnectionsRequest;
                    toAmino(message: _126.QueryConnectionsRequest): _126.QueryConnectionsRequestAmino;
                };
                QueryConnectionsResponse: {
                    encode(message: _126.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionsResponse;
                    fromJSON(object: any): _126.QueryConnectionsResponse;
                    toJSON(message: _126.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionsResponse>): _126.QueryConnectionsResponse;
                    fromAmino(object: _126.QueryConnectionsResponseAmino): _126.QueryConnectionsResponse;
                    toAmino(message: _126.QueryConnectionsResponse): _126.QueryConnectionsResponseAmino;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _126.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClientConnectionsRequest;
                    fromJSON(object: any): _126.QueryClientConnectionsRequest;
                    toJSON(message: _126.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_126.QueryClientConnectionsRequest>): _126.QueryClientConnectionsRequest;
                    fromAmino(object: _126.QueryClientConnectionsRequestAmino): _126.QueryClientConnectionsRequest;
                    toAmino(message: _126.QueryClientConnectionsRequest): _126.QueryClientConnectionsRequestAmino;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _126.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClientConnectionsResponse;
                    fromJSON(object: any): _126.QueryClientConnectionsResponse;
                    toJSON(message: _126.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_126.QueryClientConnectionsResponse>): _126.QueryClientConnectionsResponse;
                    fromAmino(object: _126.QueryClientConnectionsResponseAmino): _126.QueryClientConnectionsResponse;
                    toAmino(message: _126.QueryClientConnectionsResponse): _126.QueryClientConnectionsResponseAmino;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _126.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _126.QueryConnectionClientStateRequest;
                    toJSON(message: _126.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateRequest>): _126.QueryConnectionClientStateRequest;
                    fromAmino(object: _126.QueryConnectionClientStateRequestAmino): _126.QueryConnectionClientStateRequest;
                    toAmino(message: _126.QueryConnectionClientStateRequest): _126.QueryConnectionClientStateRequestAmino;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _126.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _126.QueryConnectionClientStateResponse;
                    toJSON(message: _126.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionClientStateResponse>): _126.QueryConnectionClientStateResponse;
                    fromAmino(object: _126.QueryConnectionClientStateResponseAmino): _126.QueryConnectionClientStateResponse;
                    toAmino(message: _126.QueryConnectionClientStateResponse): _126.QueryConnectionClientStateResponseAmino;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _126.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateRequest;
                    toJSON(message: _126.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateRequest>): _126.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _126.QueryConnectionConsensusStateRequestAmino): _126.QueryConnectionConsensusStateRequest;
                    toAmino(message: _126.QueryConnectionConsensusStateRequest): _126.QueryConnectionConsensusStateRequestAmino;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _126.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _126.QueryConnectionConsensusStateResponse;
                    toJSON(message: _126.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_126.QueryConnectionConsensusStateResponse>): _126.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _126.QueryConnectionConsensusStateResponseAmino): _126.QueryConnectionConsensusStateResponse;
                    toAmino(message: _126.QueryConnectionConsensusStateResponse): _126.QueryConnectionConsensusStateResponseAmino;
                };
                GenesisState: {
                    encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                    fromJSON(object: any): _125.GenesisState;
                    toJSON(message: _125.GenesisState): unknown;
                    fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                    fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                    toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                };
                stateFromJSON(object: any): _124.State;
                stateToJSON(object: _124.State): string;
                State: typeof _124.State;
                StateSDKType: typeof _124.State;
                StateAmino: typeof _124.State;
                ConnectionEnd: {
                    encode(message: _124.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionEnd;
                    fromJSON(object: any): _124.ConnectionEnd;
                    toJSON(message: _124.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_124.ConnectionEnd>): _124.ConnectionEnd;
                    fromAmino(object: _124.ConnectionEndAmino): _124.ConnectionEnd;
                    toAmino(message: _124.ConnectionEnd): _124.ConnectionEndAmino;
                };
                IdentifiedConnection: {
                    encode(message: _124.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.IdentifiedConnection;
                    fromJSON(object: any): _124.IdentifiedConnection;
                    toJSON(message: _124.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_124.IdentifiedConnection>): _124.IdentifiedConnection;
                    fromAmino(object: _124.IdentifiedConnectionAmino): _124.IdentifiedConnection;
                    toAmino(message: _124.IdentifiedConnection): _124.IdentifiedConnectionAmino;
                };
                Counterparty: {
                    encode(message: _124.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Counterparty;
                    fromJSON(object: any): _124.Counterparty;
                    toJSON(message: _124.Counterparty): unknown;
                    fromPartial(object: Partial<_124.Counterparty>): _124.Counterparty;
                    fromAmino(object: _124.CounterpartyAmino): _124.Counterparty;
                    toAmino(message: _124.Counterparty): _124.CounterpartyAmino;
                };
                ClientPaths: {
                    encode(message: _124.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientPaths;
                    fromJSON(object: any): _124.ClientPaths;
                    toJSON(message: _124.ClientPaths): unknown;
                    fromPartial(object: Partial<_124.ClientPaths>): _124.ClientPaths;
                    fromAmino(object: _124.ClientPathsAmino): _124.ClientPaths;
                    toAmino(message: _124.ClientPaths): _124.ClientPathsAmino;
                };
                ConnectionPaths: {
                    encode(message: _124.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionPaths;
                    fromJSON(object: any): _124.ConnectionPaths;
                    toJSON(message: _124.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_124.ConnectionPaths>): _124.ConnectionPaths;
                    fromAmino(object: _124.ConnectionPathsAmino): _124.ConnectionPaths;
                    toAmino(message: _124.ConnectionPaths): _124.ConnectionPathsAmino;
                };
                Version: {
                    encode(message: _124.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Version;
                    fromJSON(object: any): _124.Version;
                    toJSON(message: _124.Version): unknown;
                    fromPartial(object: Partial<_124.Version>): _124.Version;
                    fromAmino(object: _124.VersionAmino): _124.Version;
                    toAmino(message: _124.Version): _124.VersionAmino;
                };
                Params: {
                    encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                    fromJSON(object: any): _124.Params;
                    toJSON(message: _124.Params): unknown;
                    fromPartial(object: Partial<_124.Params>): _124.Params;
                    fromAmino(object: _124.ParamsAmino): _124.Params;
                    toAmino(message: _124.Params): _124.ParamsAmino;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _285.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _128.QueryAppVersionRequest): Promise<_128.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _128.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAppVersionRequest;
                    fromJSON(object: any): _128.QueryAppVersionRequest;
                    toJSON(message: _128.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_128.QueryAppVersionRequest>): _128.QueryAppVersionRequest;
                    fromAmino(object: _128.QueryAppVersionRequestAmino): _128.QueryAppVersionRequest;
                    toAmino(message: _128.QueryAppVersionRequest): _128.QueryAppVersionRequestAmino;
                };
                QueryAppVersionResponse: {
                    encode(message: _128.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAppVersionResponse;
                    fromJSON(object: any): _128.QueryAppVersionResponse;
                    toJSON(message: _128.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_128.QueryAppVersionResponse>): _128.QueryAppVersionResponse;
                    fromAmino(object: _128.QueryAppVersionResponseAmino): _128.QueryAppVersionResponse;
                    toAmino(message: _128.QueryAppVersionResponse): _128.QueryAppVersionResponseAmino;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                    fromJSON(object: any): _129.GenesisState;
                    toJSON(message: _129.GenesisState): unknown;
                    fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                    fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
                    toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _130.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClientState;
                    fromJSON(object: any): _130.ClientState;
                    toJSON(message: _130.ClientState): unknown;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                    fromAmino(object: _130.ClientStateAmino): _130.ClientState;
                    toAmino(message: _130.ClientState): _130.ClientStateAmino;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _131.DataType;
                dataTypeToJSON(object: _131.DataType): string;
                DataType: typeof _131.DataType;
                DataTypeSDKType: typeof _131.DataType;
                DataTypeAmino: typeof _131.DataType;
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                    fromAmino(object: _131.ClientStateAmino): _131.ClientState;
                    toAmino(message: _131.ClientState): _131.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _131.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusState;
                    fromJSON(object: any): _131.ConsensusState;
                    toJSON(message: _131.ConsensusState): unknown;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                    fromAmino(object: _131.ConsensusStateAmino): _131.ConsensusState;
                    toAmino(message: _131.ConsensusState): _131.ConsensusStateAmino;
                };
                Header: {
                    encode(message: _131.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Header;
                    fromJSON(object: any): _131.Header;
                    toJSON(message: _131.Header): unknown;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                    fromAmino(object: _131.HeaderAmino): _131.Header;
                    toAmino(message: _131.Header): _131.HeaderAmino;
                };
                Misbehaviour: {
                    encode(message: _131.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Misbehaviour;
                    fromJSON(object: any): _131.Misbehaviour;
                    toJSON(message: _131.Misbehaviour): unknown;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                    fromAmino(object: _131.MisbehaviourAmino): _131.Misbehaviour;
                    toAmino(message: _131.Misbehaviour): _131.MisbehaviourAmino;
                };
                SignatureAndData: {
                    encode(message: _131.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SignatureAndData;
                    fromJSON(object: any): _131.SignatureAndData;
                    toJSON(message: _131.SignatureAndData): unknown;
                    fromPartial(object: Partial<_131.SignatureAndData>): _131.SignatureAndData;
                    fromAmino(object: _131.SignatureAndDataAmino): _131.SignatureAndData;
                    toAmino(message: _131.SignatureAndData): _131.SignatureAndDataAmino;
                };
                TimestampedSignatureData: {
                    encode(message: _131.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.TimestampedSignatureData;
                    fromJSON(object: any): _131.TimestampedSignatureData;
                    toJSON(message: _131.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_131.TimestampedSignatureData>): _131.TimestampedSignatureData;
                    fromAmino(object: _131.TimestampedSignatureDataAmino): _131.TimestampedSignatureData;
                    toAmino(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataAmino;
                };
                SignBytes: {
                    encode(message: _131.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.SignBytes;
                    fromJSON(object: any): _131.SignBytes;
                    toJSON(message: _131.SignBytes): unknown;
                    fromPartial(object: Partial<_131.SignBytes>): _131.SignBytes;
                    fromAmino(object: _131.SignBytesAmino): _131.SignBytes;
                    toAmino(message: _131.SignBytes): _131.SignBytesAmino;
                };
                HeaderData: {
                    encode(message: _131.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.HeaderData;
                    fromJSON(object: any): _131.HeaderData;
                    toJSON(message: _131.HeaderData): unknown;
                    fromPartial(object: Partial<_131.HeaderData>): _131.HeaderData;
                    fromAmino(object: _131.HeaderDataAmino): _131.HeaderData;
                    toAmino(message: _131.HeaderData): _131.HeaderDataAmino;
                };
                ClientStateData: {
                    encode(message: _131.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientStateData;
                    fromJSON(object: any): _131.ClientStateData;
                    toJSON(message: _131.ClientStateData): unknown;
                    fromPartial(object: Partial<_131.ClientStateData>): _131.ClientStateData;
                    fromAmino(object: _131.ClientStateDataAmino): _131.ClientStateData;
                    toAmino(message: _131.ClientStateData): _131.ClientStateDataAmino;
                };
                ConsensusStateData: {
                    encode(message: _131.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConsensusStateData;
                    fromJSON(object: any): _131.ConsensusStateData;
                    toJSON(message: _131.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_131.ConsensusStateData>): _131.ConsensusStateData;
                    fromAmino(object: _131.ConsensusStateDataAmino): _131.ConsensusStateData;
                    toAmino(message: _131.ConsensusStateData): _131.ConsensusStateDataAmino;
                };
                ConnectionStateData: {
                    encode(message: _131.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ConnectionStateData;
                    fromJSON(object: any): _131.ConnectionStateData;
                    toJSON(message: _131.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_131.ConnectionStateData>): _131.ConnectionStateData;
                    fromAmino(object: _131.ConnectionStateDataAmino): _131.ConnectionStateData;
                    toAmino(message: _131.ConnectionStateData): _131.ConnectionStateDataAmino;
                };
                ChannelStateData: {
                    encode(message: _131.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ChannelStateData;
                    fromJSON(object: any): _131.ChannelStateData;
                    toJSON(message: _131.ChannelStateData): unknown;
                    fromPartial(object: Partial<_131.ChannelStateData>): _131.ChannelStateData;
                    fromAmino(object: _131.ChannelStateDataAmino): _131.ChannelStateData;
                    toAmino(message: _131.ChannelStateData): _131.ChannelStateDataAmino;
                };
                PacketCommitmentData: {
                    encode(message: _131.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketCommitmentData;
                    fromJSON(object: any): _131.PacketCommitmentData;
                    toJSON(message: _131.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_131.PacketCommitmentData>): _131.PacketCommitmentData;
                    fromAmino(object: _131.PacketCommitmentDataAmino): _131.PacketCommitmentData;
                    toAmino(message: _131.PacketCommitmentData): _131.PacketCommitmentDataAmino;
                };
                PacketAcknowledgementData: {
                    encode(message: _131.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketAcknowledgementData;
                    fromJSON(object: any): _131.PacketAcknowledgementData;
                    toJSON(message: _131.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_131.PacketAcknowledgementData>): _131.PacketAcknowledgementData;
                    fromAmino(object: _131.PacketAcknowledgementDataAmino): _131.PacketAcknowledgementData;
                    toAmino(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataAmino;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _131.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PacketReceiptAbsenceData;
                    fromJSON(object: any): _131.PacketReceiptAbsenceData;
                    toJSON(message: _131.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_131.PacketReceiptAbsenceData>): _131.PacketReceiptAbsenceData;
                    fromAmino(object: _131.PacketReceiptAbsenceDataAmino): _131.PacketReceiptAbsenceData;
                    toAmino(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataAmino;
                };
                NextSequenceRecvData: {
                    encode(message: _131.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.NextSequenceRecvData;
                    fromJSON(object: any): _131.NextSequenceRecvData;
                    toJSON(message: _131.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_131.NextSequenceRecvData>): _131.NextSequenceRecvData;
                    fromAmino(object: _131.NextSequenceRecvDataAmino): _131.NextSequenceRecvData;
                    toAmino(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataAmino;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _132.DataType;
                dataTypeToJSON(object: _132.DataType): string;
                DataType: typeof _132.DataType;
                DataTypeSDKType: typeof _132.DataType;
                DataTypeAmino: typeof _132.DataType;
                ClientState: {
                    encode(message: _132.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientState;
                    fromJSON(object: any): _132.ClientState;
                    toJSON(message: _132.ClientState): unknown;
                    fromPartial(object: Partial<_132.ClientState>): _132.ClientState;
                    fromAmino(object: _132.ClientStateAmino): _132.ClientState;
                    toAmino(message: _132.ClientState): _132.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _132.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusState;
                    fromJSON(object: any): _132.ConsensusState;
                    toJSON(message: _132.ConsensusState): unknown;
                    fromPartial(object: Partial<_132.ConsensusState>): _132.ConsensusState;
                    fromAmino(object: _132.ConsensusStateAmino): _132.ConsensusState;
                    toAmino(message: _132.ConsensusState): _132.ConsensusStateAmino;
                };
                Header: {
                    encode(message: _132.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Header;
                    fromJSON(object: any): _132.Header;
                    toJSON(message: _132.Header): unknown;
                    fromPartial(object: Partial<_132.Header>): _132.Header;
                    fromAmino(object: _132.HeaderAmino): _132.Header;
                    toAmino(message: _132.Header): _132.HeaderAmino;
                };
                Misbehaviour: {
                    encode(message: _132.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Misbehaviour;
                    fromJSON(object: any): _132.Misbehaviour;
                    toJSON(message: _132.Misbehaviour): unknown;
                    fromPartial(object: Partial<_132.Misbehaviour>): _132.Misbehaviour;
                    fromAmino(object: _132.MisbehaviourAmino): _132.Misbehaviour;
                    toAmino(message: _132.Misbehaviour): _132.MisbehaviourAmino;
                };
                SignatureAndData: {
                    encode(message: _132.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignatureAndData;
                    fromJSON(object: any): _132.SignatureAndData;
                    toJSON(message: _132.SignatureAndData): unknown;
                    fromPartial(object: Partial<_132.SignatureAndData>): _132.SignatureAndData;
                    fromAmino(object: _132.SignatureAndDataAmino): _132.SignatureAndData;
                    toAmino(message: _132.SignatureAndData): _132.SignatureAndDataAmino;
                };
                TimestampedSignatureData: {
                    encode(message: _132.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TimestampedSignatureData;
                    fromJSON(object: any): _132.TimestampedSignatureData;
                    toJSON(message: _132.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_132.TimestampedSignatureData>): _132.TimestampedSignatureData;
                    fromAmino(object: _132.TimestampedSignatureDataAmino): _132.TimestampedSignatureData;
                    toAmino(message: _132.TimestampedSignatureData): _132.TimestampedSignatureDataAmino;
                };
                SignBytes: {
                    encode(message: _132.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignBytes;
                    fromJSON(object: any): _132.SignBytes;
                    toJSON(message: _132.SignBytes): unknown;
                    fromPartial(object: Partial<_132.SignBytes>): _132.SignBytes;
                    fromAmino(object: _132.SignBytesAmino): _132.SignBytes;
                    toAmino(message: _132.SignBytes): _132.SignBytesAmino;
                };
                HeaderData: {
                    encode(message: _132.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.HeaderData;
                    fromJSON(object: any): _132.HeaderData;
                    toJSON(message: _132.HeaderData): unknown;
                    fromPartial(object: Partial<_132.HeaderData>): _132.HeaderData;
                    fromAmino(object: _132.HeaderDataAmino): _132.HeaderData;
                    toAmino(message: _132.HeaderData): _132.HeaderDataAmino;
                };
                ClientStateData: {
                    encode(message: _132.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientStateData;
                    fromJSON(object: any): _132.ClientStateData;
                    toJSON(message: _132.ClientStateData): unknown;
                    fromPartial(object: Partial<_132.ClientStateData>): _132.ClientStateData;
                    fromAmino(object: _132.ClientStateDataAmino): _132.ClientStateData;
                    toAmino(message: _132.ClientStateData): _132.ClientStateDataAmino;
                };
                ConsensusStateData: {
                    encode(message: _132.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusStateData;
                    fromJSON(object: any): _132.ConsensusStateData;
                    toJSON(message: _132.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_132.ConsensusStateData>): _132.ConsensusStateData;
                    fromAmino(object: _132.ConsensusStateDataAmino): _132.ConsensusStateData;
                    toAmino(message: _132.ConsensusStateData): _132.ConsensusStateDataAmino;
                };
                ConnectionStateData: {
                    encode(message: _132.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConnectionStateData;
                    fromJSON(object: any): _132.ConnectionStateData;
                    toJSON(message: _132.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_132.ConnectionStateData>): _132.ConnectionStateData;
                    fromAmino(object: _132.ConnectionStateDataAmino): _132.ConnectionStateData;
                    toAmino(message: _132.ConnectionStateData): _132.ConnectionStateDataAmino;
                };
                ChannelStateData: {
                    encode(message: _132.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ChannelStateData;
                    fromJSON(object: any): _132.ChannelStateData;
                    toJSON(message: _132.ChannelStateData): unknown;
                    fromPartial(object: Partial<_132.ChannelStateData>): _132.ChannelStateData;
                    fromAmino(object: _132.ChannelStateDataAmino): _132.ChannelStateData;
                    toAmino(message: _132.ChannelStateData): _132.ChannelStateDataAmino;
                };
                PacketCommitmentData: {
                    encode(message: _132.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketCommitmentData;
                    fromJSON(object: any): _132.PacketCommitmentData;
                    toJSON(message: _132.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_132.PacketCommitmentData>): _132.PacketCommitmentData;
                    fromAmino(object: _132.PacketCommitmentDataAmino): _132.PacketCommitmentData;
                    toAmino(message: _132.PacketCommitmentData): _132.PacketCommitmentDataAmino;
                };
                PacketAcknowledgementData: {
                    encode(message: _132.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketAcknowledgementData;
                    fromJSON(object: any): _132.PacketAcknowledgementData;
                    toJSON(message: _132.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_132.PacketAcknowledgementData>): _132.PacketAcknowledgementData;
                    fromAmino(object: _132.PacketAcknowledgementDataAmino): _132.PacketAcknowledgementData;
                    toAmino(message: _132.PacketAcknowledgementData): _132.PacketAcknowledgementDataAmino;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _132.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketReceiptAbsenceData;
                    fromJSON(object: any): _132.PacketReceiptAbsenceData;
                    toJSON(message: _132.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_132.PacketReceiptAbsenceData>): _132.PacketReceiptAbsenceData;
                    fromAmino(object: _132.PacketReceiptAbsenceDataAmino): _132.PacketReceiptAbsenceData;
                    toAmino(message: _132.PacketReceiptAbsenceData): _132.PacketReceiptAbsenceDataAmino;
                };
                NextSequenceRecvData: {
                    encode(message: _132.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NextSequenceRecvData;
                    fromJSON(object: any): _132.NextSequenceRecvData;
                    toJSON(message: _132.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_132.NextSequenceRecvData>): _132.NextSequenceRecvData;
                    fromAmino(object: _132.NextSequenceRecvDataAmino): _132.NextSequenceRecvData;
                    toAmino(message: _132.NextSequenceRecvData): _132.NextSequenceRecvDataAmino;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _133.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientState;
                    fromJSON(object: any): _133.ClientState;
                    toJSON(message: _133.ClientState): unknown;
                    fromPartial(object: Partial<_133.ClientState>): _133.ClientState;
                    fromAmino(object: _133.ClientStateAmino): _133.ClientState;
                    toAmino(message: _133.ClientState): _133.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _133.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusState;
                    fromJSON(object: any): _133.ConsensusState;
                    toJSON(message: _133.ConsensusState): unknown;
                    fromPartial(object: Partial<_133.ConsensusState>): _133.ConsensusState;
                    fromAmino(object: _133.ConsensusStateAmino): _133.ConsensusState;
                    toAmino(message: _133.ConsensusState): _133.ConsensusStateAmino;
                };
                Misbehaviour: {
                    encode(message: _133.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Misbehaviour;
                    fromJSON(object: any): _133.Misbehaviour;
                    toJSON(message: _133.Misbehaviour): unknown;
                    fromPartial(object: Partial<_133.Misbehaviour>): _133.Misbehaviour;
                    fromAmino(object: _133.MisbehaviourAmino): _133.Misbehaviour;
                    toAmino(message: _133.Misbehaviour): _133.MisbehaviourAmino;
                };
                Header: {
                    encode(message: _133.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Header;
                    fromJSON(object: any): _133.Header;
                    toJSON(message: _133.Header): unknown;
                    fromPartial(object: Partial<_133.Header>): _133.Header;
                    fromAmino(object: _133.HeaderAmino): _133.Header;
                    toAmino(message: _133.Header): _133.HeaderAmino;
                };
                Fraction: {
                    encode(message: _133.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Fraction;
                    fromJSON(object: any): _133.Fraction;
                    toJSON(message: _133.Fraction): unknown;
                    fromPartial(object: Partial<_133.Fraction>): _133.Fraction;
                    fromAmino(object: _133.FractionAmino): _133.Fraction;
                    toAmino(message: _133.Fraction): _133.FractionAmino;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _286.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _287.MsgClientImpl;
                    };
                    client: {
                        v1: _288.MsgClientImpl;
                    };
                    connection: {
                        v1: _289.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _111.QueryDenomTraceRequest): Promise<_111.QueryDenomTraceResponse>;
                            denomTraces(request?: _111.QueryDenomTracesRequest): Promise<_111.QueryDenomTracesResponse>;
                            params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _117.QueryChannelRequest): Promise<_117.QueryChannelResponse>;
                            channels(request?: _117.QueryChannelsRequest): Promise<_117.QueryChannelsResponse>;
                            connectionChannels(request: _117.QueryConnectionChannelsRequest): Promise<_117.QueryConnectionChannelsResponse>;
                            channelClientState(request: _117.QueryChannelClientStateRequest): Promise<_117.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _117.QueryChannelConsensusStateRequest): Promise<_117.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _117.QueryPacketCommitmentRequest): Promise<_117.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _117.QueryPacketCommitmentsRequest): Promise<_117.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _117.QueryPacketReceiptRequest): Promise<_117.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _117.QueryPacketAcknowledgementRequest): Promise<_117.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _117.QueryPacketAcknowledgementsRequest): Promise<_117.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _117.QueryUnreceivedPacketsRequest): Promise<_117.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _117.QueryUnreceivedAcksRequest): Promise<_117.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _117.QueryNextSequenceReceiveRequest): Promise<_117.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _121.QueryClientStateRequest): Promise<_121.QueryClientStateResponse>;
                            clientStates(request?: _121.QueryClientStatesRequest): Promise<_121.QueryClientStatesResponse>;
                            consensusState(request: _121.QueryConsensusStateRequest): Promise<_121.QueryConsensusStateResponse>;
                            consensusStates(request: _121.QueryConsensusStatesRequest): Promise<_121.QueryConsensusStatesResponse>;
                            clientStatus(request: _121.QueryClientStatusRequest): Promise<_121.QueryClientStatusResponse>;
                            clientParams(request?: _121.QueryClientParamsRequest): Promise<_121.QueryClientParamsResponse>;
                            upgradedClientState(request?: _121.QueryUpgradedClientStateRequest): Promise<_121.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _121.QueryUpgradedConsensusStateRequest): Promise<_121.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _126.QueryConnectionRequest): Promise<_126.QueryConnectionResponse>;
                            connections(request?: _126.QueryConnectionsRequest): Promise<_126.QueryConnectionsResponse>;
                            clientConnections(request: _126.QueryClientConnectionsRequest): Promise<_126.QueryClientConnectionsResponse>;
                            connectionClientState(request: _126.QueryConnectionClientStateRequest): Promise<_126.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _126.QueryConnectionConsensusStateRequest): Promise<_126.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _128.QueryAppVersionRequest): Promise<_128.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
