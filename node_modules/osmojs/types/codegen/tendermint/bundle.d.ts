import * as _198 from "./abci/types";
import * as _199 from "./crypto/keys";
import * as _200 from "./crypto/proof";
import * as _201 from "./libs/bits/types";
import * as _202 from "./p2p/types";
import * as _203 from "./types/block";
import * as _204 from "./types/evidence";
import * as _205 from "./types/params";
import * as _206 from "./types/types";
import * as _207 from "./types/validator";
import * as _208 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _198.CheckTxType;
        checkTxTypeToJSON(object: _198.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _198.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _198.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _198.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _198.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _198.EvidenceType;
        evidenceTypeToJSON(object: _198.EvidenceType): string;
        CheckTxType: typeof _198.CheckTxType;
        CheckTxTypeSDKType: typeof _198.CheckTxType;
        CheckTxTypeAmino: typeof _198.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _198.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _198.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _198.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _198.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _198.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _198.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _198.EvidenceType;
        EvidenceTypeSDKType: typeof _198.EvidenceType;
        EvidenceTypeAmino: typeof _198.EvidenceType;
        Request: {
            encode(message: _198.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Request;
            fromJSON(object: any): _198.Request;
            toJSON(message: _198.Request): unknown;
            fromPartial(object: Partial<_198.Request>): _198.Request;
            fromAmino(object: _198.RequestAmino): _198.Request;
            toAmino(message: _198.Request): _198.RequestAmino;
        };
        RequestEcho: {
            encode(message: _198.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestEcho;
            fromJSON(object: any): _198.RequestEcho;
            toJSON(message: _198.RequestEcho): unknown;
            fromPartial(object: Partial<_198.RequestEcho>): _198.RequestEcho;
            fromAmino(object: _198.RequestEchoAmino): _198.RequestEcho;
            toAmino(message: _198.RequestEcho): _198.RequestEchoAmino;
        };
        RequestFlush: {
            encode(_: _198.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestFlush;
            fromJSON(_: any): _198.RequestFlush;
            toJSON(_: _198.RequestFlush): unknown;
            fromPartial(_: Partial<_198.RequestFlush>): _198.RequestFlush;
            fromAmino(_: _198.RequestFlushAmino): _198.RequestFlush;
            toAmino(_: _198.RequestFlush): _198.RequestFlushAmino;
        };
        RequestInfo: {
            encode(message: _198.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestInfo;
            fromJSON(object: any): _198.RequestInfo;
            toJSON(message: _198.RequestInfo): unknown;
            fromPartial(object: Partial<_198.RequestInfo>): _198.RequestInfo;
            fromAmino(object: _198.RequestInfoAmino): _198.RequestInfo;
            toAmino(message: _198.RequestInfo): _198.RequestInfoAmino;
        };
        RequestSetOption: {
            encode(message: _198.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestSetOption;
            fromJSON(object: any): _198.RequestSetOption;
            toJSON(message: _198.RequestSetOption): unknown;
            fromPartial(object: Partial<_198.RequestSetOption>): _198.RequestSetOption;
            fromAmino(object: _198.RequestSetOptionAmino): _198.RequestSetOption;
            toAmino(message: _198.RequestSetOption): _198.RequestSetOptionAmino;
        };
        RequestInitChain: {
            encode(message: _198.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestInitChain;
            fromJSON(object: any): _198.RequestInitChain;
            toJSON(message: _198.RequestInitChain): unknown;
            fromPartial(object: Partial<_198.RequestInitChain>): _198.RequestInitChain;
            fromAmino(object: _198.RequestInitChainAmino): _198.RequestInitChain;
            toAmino(message: _198.RequestInitChain): _198.RequestInitChainAmino;
        };
        RequestQuery: {
            encode(message: _198.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestQuery;
            fromJSON(object: any): _198.RequestQuery;
            toJSON(message: _198.RequestQuery): unknown;
            fromPartial(object: Partial<_198.RequestQuery>): _198.RequestQuery;
            fromAmino(object: _198.RequestQueryAmino): _198.RequestQuery;
            toAmino(message: _198.RequestQuery): _198.RequestQueryAmino;
        };
        RequestBeginBlock: {
            encode(message: _198.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestBeginBlock;
            fromJSON(object: any): _198.RequestBeginBlock;
            toJSON(message: _198.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_198.RequestBeginBlock>): _198.RequestBeginBlock;
            fromAmino(object: _198.RequestBeginBlockAmino): _198.RequestBeginBlock;
            toAmino(message: _198.RequestBeginBlock): _198.RequestBeginBlockAmino;
        };
        RequestCheckTx: {
            encode(message: _198.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestCheckTx;
            fromJSON(object: any): _198.RequestCheckTx;
            toJSON(message: _198.RequestCheckTx): unknown;
            fromPartial(object: Partial<_198.RequestCheckTx>): _198.RequestCheckTx;
            fromAmino(object: _198.RequestCheckTxAmino): _198.RequestCheckTx;
            toAmino(message: _198.RequestCheckTx): _198.RequestCheckTxAmino;
        };
        RequestDeliverTx: {
            encode(message: _198.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestDeliverTx;
            fromJSON(object: any): _198.RequestDeliverTx;
            toJSON(message: _198.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_198.RequestDeliverTx>): _198.RequestDeliverTx;
            fromAmino(object: _198.RequestDeliverTxAmino): _198.RequestDeliverTx;
            toAmino(message: _198.RequestDeliverTx): _198.RequestDeliverTxAmino;
        };
        RequestEndBlock: {
            encode(message: _198.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestEndBlock;
            fromJSON(object: any): _198.RequestEndBlock;
            toJSON(message: _198.RequestEndBlock): unknown;
            fromPartial(object: Partial<_198.RequestEndBlock>): _198.RequestEndBlock;
            fromAmino(object: _198.RequestEndBlockAmino): _198.RequestEndBlock;
            toAmino(message: _198.RequestEndBlock): _198.RequestEndBlockAmino;
        };
        RequestCommit: {
            encode(_: _198.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestCommit;
            fromJSON(_: any): _198.RequestCommit;
            toJSON(_: _198.RequestCommit): unknown;
            fromPartial(_: Partial<_198.RequestCommit>): _198.RequestCommit;
            fromAmino(_: _198.RequestCommitAmino): _198.RequestCommit;
            toAmino(_: _198.RequestCommit): _198.RequestCommitAmino;
        };
        RequestListSnapshots: {
            encode(_: _198.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestListSnapshots;
            fromJSON(_: any): _198.RequestListSnapshots;
            toJSON(_: _198.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_198.RequestListSnapshots>): _198.RequestListSnapshots;
            fromAmino(_: _198.RequestListSnapshotsAmino): _198.RequestListSnapshots;
            toAmino(_: _198.RequestListSnapshots): _198.RequestListSnapshotsAmino;
        };
        RequestOfferSnapshot: {
            encode(message: _198.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestOfferSnapshot;
            fromJSON(object: any): _198.RequestOfferSnapshot;
            toJSON(message: _198.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_198.RequestOfferSnapshot>): _198.RequestOfferSnapshot;
            fromAmino(object: _198.RequestOfferSnapshotAmino): _198.RequestOfferSnapshot;
            toAmino(message: _198.RequestOfferSnapshot): _198.RequestOfferSnapshotAmino;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _198.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestLoadSnapshotChunk;
            fromJSON(object: any): _198.RequestLoadSnapshotChunk;
            toJSON(message: _198.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_198.RequestLoadSnapshotChunk>): _198.RequestLoadSnapshotChunk;
            fromAmino(object: _198.RequestLoadSnapshotChunkAmino): _198.RequestLoadSnapshotChunk;
            toAmino(message: _198.RequestLoadSnapshotChunk): _198.RequestLoadSnapshotChunkAmino;
        };
        RequestApplySnapshotChunk: {
            encode(message: _198.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.RequestApplySnapshotChunk;
            fromJSON(object: any): _198.RequestApplySnapshotChunk;
            toJSON(message: _198.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_198.RequestApplySnapshotChunk>): _198.RequestApplySnapshotChunk;
            fromAmino(object: _198.RequestApplySnapshotChunkAmino): _198.RequestApplySnapshotChunk;
            toAmino(message: _198.RequestApplySnapshotChunk): _198.RequestApplySnapshotChunkAmino;
        };
        Response: {
            encode(message: _198.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Response;
            fromJSON(object: any): _198.Response;
            toJSON(message: _198.Response): unknown;
            fromPartial(object: Partial<_198.Response>): _198.Response;
            fromAmino(object: _198.ResponseAmino): _198.Response;
            toAmino(message: _198.Response): _198.ResponseAmino;
        };
        ResponseException: {
            encode(message: _198.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseException;
            fromJSON(object: any): _198.ResponseException;
            toJSON(message: _198.ResponseException): unknown;
            fromPartial(object: Partial<_198.ResponseException>): _198.ResponseException;
            fromAmino(object: _198.ResponseExceptionAmino): _198.ResponseException;
            toAmino(message: _198.ResponseException): _198.ResponseExceptionAmino;
        };
        ResponseEcho: {
            encode(message: _198.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseEcho;
            fromJSON(object: any): _198.ResponseEcho;
            toJSON(message: _198.ResponseEcho): unknown;
            fromPartial(object: Partial<_198.ResponseEcho>): _198.ResponseEcho;
            fromAmino(object: _198.ResponseEchoAmino): _198.ResponseEcho;
            toAmino(message: _198.ResponseEcho): _198.ResponseEchoAmino;
        };
        ResponseFlush: {
            encode(_: _198.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseFlush;
            fromJSON(_: any): _198.ResponseFlush;
            toJSON(_: _198.ResponseFlush): unknown;
            fromPartial(_: Partial<_198.ResponseFlush>): _198.ResponseFlush;
            fromAmino(_: _198.ResponseFlushAmino): _198.ResponseFlush;
            toAmino(_: _198.ResponseFlush): _198.ResponseFlushAmino;
        };
        ResponseInfo: {
            encode(message: _198.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseInfo;
            fromJSON(object: any): _198.ResponseInfo;
            toJSON(message: _198.ResponseInfo): unknown;
            fromPartial(object: Partial<_198.ResponseInfo>): _198.ResponseInfo;
            fromAmino(object: _198.ResponseInfoAmino): _198.ResponseInfo;
            toAmino(message: _198.ResponseInfo): _198.ResponseInfoAmino;
        };
        ResponseSetOption: {
            encode(message: _198.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseSetOption;
            fromJSON(object: any): _198.ResponseSetOption;
            toJSON(message: _198.ResponseSetOption): unknown;
            fromPartial(object: Partial<_198.ResponseSetOption>): _198.ResponseSetOption;
            fromAmino(object: _198.ResponseSetOptionAmino): _198.ResponseSetOption;
            toAmino(message: _198.ResponseSetOption): _198.ResponseSetOptionAmino;
        };
        ResponseInitChain: {
            encode(message: _198.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseInitChain;
            fromJSON(object: any): _198.ResponseInitChain;
            toJSON(message: _198.ResponseInitChain): unknown;
            fromPartial(object: Partial<_198.ResponseInitChain>): _198.ResponseInitChain;
            fromAmino(object: _198.ResponseInitChainAmino): _198.ResponseInitChain;
            toAmino(message: _198.ResponseInitChain): _198.ResponseInitChainAmino;
        };
        ResponseQuery: {
            encode(message: _198.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseQuery;
            fromJSON(object: any): _198.ResponseQuery;
            toJSON(message: _198.ResponseQuery): unknown;
            fromPartial(object: Partial<_198.ResponseQuery>): _198.ResponseQuery;
            fromAmino(object: _198.ResponseQueryAmino): _198.ResponseQuery;
            toAmino(message: _198.ResponseQuery): _198.ResponseQueryAmino;
        };
        ResponseBeginBlock: {
            encode(message: _198.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseBeginBlock;
            fromJSON(object: any): _198.ResponseBeginBlock;
            toJSON(message: _198.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_198.ResponseBeginBlock>): _198.ResponseBeginBlock;
            fromAmino(object: _198.ResponseBeginBlockAmino): _198.ResponseBeginBlock;
            toAmino(message: _198.ResponseBeginBlock): _198.ResponseBeginBlockAmino;
        };
        ResponseCheckTx: {
            encode(message: _198.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseCheckTx;
            fromJSON(object: any): _198.ResponseCheckTx;
            toJSON(message: _198.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_198.ResponseCheckTx>): _198.ResponseCheckTx;
            fromAmino(object: _198.ResponseCheckTxAmino): _198.ResponseCheckTx;
            toAmino(message: _198.ResponseCheckTx): _198.ResponseCheckTxAmino;
        };
        ResponseDeliverTx: {
            encode(message: _198.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseDeliverTx;
            fromJSON(object: any): _198.ResponseDeliverTx;
            toJSON(message: _198.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_198.ResponseDeliverTx>): _198.ResponseDeliverTx;
            fromAmino(object: _198.ResponseDeliverTxAmino): _198.ResponseDeliverTx;
            toAmino(message: _198.ResponseDeliverTx): _198.ResponseDeliverTxAmino;
        };
        ResponseEndBlock: {
            encode(message: _198.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseEndBlock;
            fromJSON(object: any): _198.ResponseEndBlock;
            toJSON(message: _198.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_198.ResponseEndBlock>): _198.ResponseEndBlock;
            fromAmino(object: _198.ResponseEndBlockAmino): _198.ResponseEndBlock;
            toAmino(message: _198.ResponseEndBlock): _198.ResponseEndBlockAmino;
        };
        ResponseCommit: {
            encode(message: _198.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseCommit;
            fromJSON(object: any): _198.ResponseCommit;
            toJSON(message: _198.ResponseCommit): unknown;
            fromPartial(object: Partial<_198.ResponseCommit>): _198.ResponseCommit;
            fromAmino(object: _198.ResponseCommitAmino): _198.ResponseCommit;
            toAmino(message: _198.ResponseCommit): _198.ResponseCommitAmino;
        };
        ResponseListSnapshots: {
            encode(message: _198.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseListSnapshots;
            fromJSON(object: any): _198.ResponseListSnapshots;
            toJSON(message: _198.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_198.ResponseListSnapshots>): _198.ResponseListSnapshots;
            fromAmino(object: _198.ResponseListSnapshotsAmino): _198.ResponseListSnapshots;
            toAmino(message: _198.ResponseListSnapshots): _198.ResponseListSnapshotsAmino;
        };
        ResponseOfferSnapshot: {
            encode(message: _198.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseOfferSnapshot;
            fromJSON(object: any): _198.ResponseOfferSnapshot;
            toJSON(message: _198.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_198.ResponseOfferSnapshot>): _198.ResponseOfferSnapshot;
            fromAmino(object: _198.ResponseOfferSnapshotAmino): _198.ResponseOfferSnapshot;
            toAmino(message: _198.ResponseOfferSnapshot): _198.ResponseOfferSnapshotAmino;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _198.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _198.ResponseLoadSnapshotChunk;
            toJSON(message: _198.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_198.ResponseLoadSnapshotChunk>): _198.ResponseLoadSnapshotChunk;
            fromAmino(object: _198.ResponseLoadSnapshotChunkAmino): _198.ResponseLoadSnapshotChunk;
            toAmino(message: _198.ResponseLoadSnapshotChunk): _198.ResponseLoadSnapshotChunkAmino;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _198.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ResponseApplySnapshotChunk;
            fromJSON(object: any): _198.ResponseApplySnapshotChunk;
            toJSON(message: _198.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_198.ResponseApplySnapshotChunk>): _198.ResponseApplySnapshotChunk;
            fromAmino(object: _198.ResponseApplySnapshotChunkAmino): _198.ResponseApplySnapshotChunk;
            toAmino(message: _198.ResponseApplySnapshotChunk): _198.ResponseApplySnapshotChunkAmino;
        };
        ConsensusParams: {
            encode(message: _198.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ConsensusParams;
            fromJSON(object: any): _198.ConsensusParams;
            toJSON(message: _198.ConsensusParams): unknown;
            fromPartial(object: Partial<_198.ConsensusParams>): _198.ConsensusParams;
            fromAmino(object: _198.ConsensusParamsAmino): _198.ConsensusParams;
            toAmino(message: _198.ConsensusParams): _198.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _198.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.BlockParams;
            fromJSON(object: any): _198.BlockParams;
            toJSON(message: _198.BlockParams): unknown;
            fromPartial(object: Partial<_198.BlockParams>): _198.BlockParams;
            fromAmino(object: _198.BlockParamsAmino): _198.BlockParams;
            toAmino(message: _198.BlockParams): _198.BlockParamsAmino;
        };
        LastCommitInfo: {
            encode(message: _198.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.LastCommitInfo;
            fromJSON(object: any): _198.LastCommitInfo;
            toJSON(message: _198.LastCommitInfo): unknown;
            fromPartial(object: Partial<_198.LastCommitInfo>): _198.LastCommitInfo;
            fromAmino(object: _198.LastCommitInfoAmino): _198.LastCommitInfo;
            toAmino(message: _198.LastCommitInfo): _198.LastCommitInfoAmino;
        };
        Event: {
            encode(message: _198.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Event;
            fromJSON(object: any): _198.Event;
            toJSON(message: _198.Event): unknown;
            fromPartial(object: Partial<_198.Event>): _198.Event;
            fromAmino(object: _198.EventAmino): _198.Event;
            toAmino(message: _198.Event): _198.EventAmino;
        };
        EventAttribute: {
            encode(message: _198.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.EventAttribute;
            fromJSON(object: any): _198.EventAttribute;
            toJSON(message: _198.EventAttribute): unknown;
            fromPartial(object: Partial<_198.EventAttribute>): _198.EventAttribute;
            fromAmino(object: _198.EventAttributeAmino): _198.EventAttribute;
            toAmino(message: _198.EventAttribute): _198.EventAttributeAmino;
        };
        TxResult: {
            encode(message: _198.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.TxResult;
            fromJSON(object: any): _198.TxResult;
            toJSON(message: _198.TxResult): unknown;
            fromPartial(object: Partial<_198.TxResult>): _198.TxResult;
            fromAmino(object: _198.TxResultAmino): _198.TxResult;
            toAmino(message: _198.TxResult): _198.TxResultAmino;
        };
        Validator: {
            encode(message: _198.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Validator;
            fromJSON(object: any): _198.Validator;
            toJSON(message: _198.Validator): unknown;
            fromPartial(object: Partial<_198.Validator>): _198.Validator;
            fromAmino(object: _198.ValidatorAmino): _198.Validator;
            toAmino(message: _198.Validator): _198.ValidatorAmino;
        };
        ValidatorUpdate: {
            encode(message: _198.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ValidatorUpdate;
            fromJSON(object: any): _198.ValidatorUpdate;
            toJSON(message: _198.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_198.ValidatorUpdate>): _198.ValidatorUpdate;
            fromAmino(object: _198.ValidatorUpdateAmino): _198.ValidatorUpdate;
            toAmino(message: _198.ValidatorUpdate): _198.ValidatorUpdateAmino;
        };
        VoteInfo: {
            encode(message: _198.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.VoteInfo;
            fromJSON(object: any): _198.VoteInfo;
            toJSON(message: _198.VoteInfo): unknown;
            fromPartial(object: Partial<_198.VoteInfo>): _198.VoteInfo;
            fromAmino(object: _198.VoteInfoAmino): _198.VoteInfo;
            toAmino(message: _198.VoteInfo): _198.VoteInfoAmino;
        };
        Evidence: {
            encode(message: _198.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Evidence;
            fromJSON(object: any): _198.Evidence;
            toJSON(message: _198.Evidence): unknown;
            fromPartial(object: Partial<_198.Evidence>): _198.Evidence;
            fromAmino(object: _198.EvidenceAmino): _198.Evidence;
            toAmino(message: _198.Evidence): _198.EvidenceAmino;
        };
        Snapshot: {
            encode(message: _198.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Snapshot;
            fromJSON(object: any): _198.Snapshot;
            toJSON(message: _198.Snapshot): unknown;
            fromPartial(object: Partial<_198.Snapshot>): _198.Snapshot;
            fromAmino(object: _198.SnapshotAmino): _198.Snapshot;
            toAmino(message: _198.Snapshot): _198.SnapshotAmino;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _200.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Proof;
            fromJSON(object: any): _200.Proof;
            toJSON(message: _200.Proof): unknown;
            fromPartial(object: Partial<_200.Proof>): _200.Proof;
            fromAmino(object: _200.ProofAmino): _200.Proof;
            toAmino(message: _200.Proof): _200.ProofAmino;
        };
        ValueOp: {
            encode(message: _200.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ValueOp;
            fromJSON(object: any): _200.ValueOp;
            toJSON(message: _200.ValueOp): unknown;
            fromPartial(object: Partial<_200.ValueOp>): _200.ValueOp;
            fromAmino(object: _200.ValueOpAmino): _200.ValueOp;
            toAmino(message: _200.ValueOp): _200.ValueOpAmino;
        };
        DominoOp: {
            encode(message: _200.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.DominoOp;
            fromJSON(object: any): _200.DominoOp;
            toJSON(message: _200.DominoOp): unknown;
            fromPartial(object: Partial<_200.DominoOp>): _200.DominoOp;
            fromAmino(object: _200.DominoOpAmino): _200.DominoOp;
            toAmino(message: _200.DominoOp): _200.DominoOpAmino;
        };
        ProofOp: {
            encode(message: _200.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ProofOp;
            fromJSON(object: any): _200.ProofOp;
            toJSON(message: _200.ProofOp): unknown;
            fromPartial(object: Partial<_200.ProofOp>): _200.ProofOp;
            fromAmino(object: _200.ProofOpAmino): _200.ProofOp;
            toAmino(message: _200.ProofOp): _200.ProofOpAmino;
        };
        ProofOps: {
            encode(message: _200.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ProofOps;
            fromJSON(object: any): _200.ProofOps;
            toJSON(message: _200.ProofOps): unknown;
            fromPartial(object: Partial<_200.ProofOps>): _200.ProofOps;
            fromAmino(object: _200.ProofOpsAmino): _200.ProofOps;
            toAmino(message: _200.ProofOps): _200.ProofOpsAmino;
        };
        PublicKey: {
            encode(message: _199.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PublicKey;
            fromJSON(object: any): _199.PublicKey;
            toJSON(message: _199.PublicKey): unknown;
            fromPartial(object: Partial<_199.PublicKey>): _199.PublicKey;
            fromAmino(object: _199.PublicKeyAmino): _199.PublicKey;
            toAmino(message: _199.PublicKey): _199.PublicKeyAmino;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _201.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BitArray;
                fromJSON(object: any): _201.BitArray;
                toJSON(message: _201.BitArray): unknown;
                fromPartial(object: Partial<_201.BitArray>): _201.BitArray;
                fromAmino(object: _201.BitArrayAmino): _201.BitArray;
                toAmino(message: _201.BitArray): _201.BitArrayAmino;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _202.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ProtocolVersion;
            fromJSON(object: any): _202.ProtocolVersion;
            toJSON(message: _202.ProtocolVersion): unknown;
            fromPartial(object: Partial<_202.ProtocolVersion>): _202.ProtocolVersion;
            fromAmino(object: _202.ProtocolVersionAmino): _202.ProtocolVersion;
            toAmino(message: _202.ProtocolVersion): _202.ProtocolVersionAmino;
        };
        NodeInfo: {
            encode(message: _202.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.NodeInfo;
            fromJSON(object: any): _202.NodeInfo;
            toJSON(message: _202.NodeInfo): unknown;
            fromPartial(object: Partial<_202.NodeInfo>): _202.NodeInfo;
            fromAmino(object: _202.NodeInfoAmino): _202.NodeInfo;
            toAmino(message: _202.NodeInfo): _202.NodeInfoAmino;
        };
        NodeInfoOther: {
            encode(message: _202.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.NodeInfoOther;
            fromJSON(object: any): _202.NodeInfoOther;
            toJSON(message: _202.NodeInfoOther): unknown;
            fromPartial(object: Partial<_202.NodeInfoOther>): _202.NodeInfoOther;
            fromAmino(object: _202.NodeInfoOtherAmino): _202.NodeInfoOther;
            toAmino(message: _202.NodeInfoOther): _202.NodeInfoOtherAmino;
        };
        PeerInfo: {
            encode(message: _202.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.PeerInfo;
            fromJSON(object: any): _202.PeerInfo;
            toJSON(message: _202.PeerInfo): unknown;
            fromPartial(object: Partial<_202.PeerInfo>): _202.PeerInfo;
            fromAmino(object: _202.PeerInfoAmino): _202.PeerInfo;
            toAmino(message: _202.PeerInfo): _202.PeerInfoAmino;
        };
        PeerAddressInfo: {
            encode(message: _202.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.PeerAddressInfo;
            fromJSON(object: any): _202.PeerAddressInfo;
            toJSON(message: _202.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_202.PeerAddressInfo>): _202.PeerAddressInfo;
            fromAmino(object: _202.PeerAddressInfoAmino): _202.PeerAddressInfo;
            toAmino(message: _202.PeerAddressInfo): _202.PeerAddressInfoAmino;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _207.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.ValidatorSet;
            fromJSON(object: any): _207.ValidatorSet;
            toJSON(message: _207.ValidatorSet): unknown;
            fromPartial(object: Partial<_207.ValidatorSet>): _207.ValidatorSet;
            fromAmino(object: _207.ValidatorSetAmino): _207.ValidatorSet;
            toAmino(message: _207.ValidatorSet): _207.ValidatorSetAmino;
        };
        Validator: {
            encode(message: _207.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Validator;
            fromJSON(object: any): _207.Validator;
            toJSON(message: _207.Validator): unknown;
            fromPartial(object: Partial<_207.Validator>): _207.Validator;
            fromAmino(object: _207.ValidatorAmino): _207.Validator;
            toAmino(message: _207.Validator): _207.ValidatorAmino;
        };
        SimpleValidator: {
            encode(message: _207.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.SimpleValidator;
            fromJSON(object: any): _207.SimpleValidator;
            toJSON(message: _207.SimpleValidator): unknown;
            fromPartial(object: Partial<_207.SimpleValidator>): _207.SimpleValidator;
            fromAmino(object: _207.SimpleValidatorAmino): _207.SimpleValidator;
            toAmino(message: _207.SimpleValidator): _207.SimpleValidatorAmino;
        };
        blockIDFlagFromJSON(object: any): _206.BlockIDFlag;
        blockIDFlagToJSON(object: _206.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _206.SignedMsgType;
        signedMsgTypeToJSON(object: _206.SignedMsgType): string;
        BlockIDFlag: typeof _206.BlockIDFlag;
        BlockIDFlagSDKType: typeof _206.BlockIDFlag;
        BlockIDFlagAmino: typeof _206.BlockIDFlag;
        SignedMsgType: typeof _206.SignedMsgType;
        SignedMsgTypeSDKType: typeof _206.SignedMsgType;
        SignedMsgTypeAmino: typeof _206.SignedMsgType;
        PartSetHeader: {
            encode(message: _206.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.PartSetHeader;
            fromJSON(object: any): _206.PartSetHeader;
            toJSON(message: _206.PartSetHeader): unknown;
            fromPartial(object: Partial<_206.PartSetHeader>): _206.PartSetHeader;
            fromAmino(object: _206.PartSetHeaderAmino): _206.PartSetHeader;
            toAmino(message: _206.PartSetHeader): _206.PartSetHeaderAmino;
        };
        Part: {
            encode(message: _206.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Part;
            fromJSON(object: any): _206.Part;
            toJSON(message: _206.Part): unknown;
            fromPartial(object: Partial<_206.Part>): _206.Part;
            fromAmino(object: _206.PartAmino): _206.Part;
            toAmino(message: _206.Part): _206.PartAmino;
        };
        BlockID: {
            encode(message: _206.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.BlockID;
            fromJSON(object: any): _206.BlockID;
            toJSON(message: _206.BlockID): unknown;
            fromPartial(object: Partial<_206.BlockID>): _206.BlockID;
            fromAmino(object: _206.BlockIDAmino): _206.BlockID;
            toAmino(message: _206.BlockID): _206.BlockIDAmino;
        };
        Header: {
            encode(message: _206.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Header;
            fromJSON(object: any): _206.Header;
            toJSON(message: _206.Header): unknown;
            fromPartial(object: Partial<_206.Header>): _206.Header;
            fromAmino(object: _206.HeaderAmino): _206.Header;
            toAmino(message: _206.Header): _206.HeaderAmino;
        };
        Data: {
            encode(message: _206.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Data;
            fromJSON(object: any): _206.Data;
            toJSON(message: _206.Data): unknown;
            fromPartial(object: Partial<_206.Data>): _206.Data;
            fromAmino(object: _206.DataAmino): _206.Data;
            toAmino(message: _206.Data): _206.DataAmino;
        };
        Vote: {
            encode(message: _206.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Vote;
            fromJSON(object: any): _206.Vote;
            toJSON(message: _206.Vote): unknown;
            fromPartial(object: Partial<_206.Vote>): _206.Vote;
            fromAmino(object: _206.VoteAmino): _206.Vote;
            toAmino(message: _206.Vote): _206.VoteAmino;
        };
        Commit: {
            encode(message: _206.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Commit;
            fromJSON(object: any): _206.Commit;
            toJSON(message: _206.Commit): unknown;
            fromPartial(object: Partial<_206.Commit>): _206.Commit;
            fromAmino(object: _206.CommitAmino): _206.Commit;
            toAmino(message: _206.Commit): _206.CommitAmino;
        };
        CommitSig: {
            encode(message: _206.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.CommitSig;
            fromJSON(object: any): _206.CommitSig;
            toJSON(message: _206.CommitSig): unknown;
            fromPartial(object: Partial<_206.CommitSig>): _206.CommitSig;
            fromAmino(object: _206.CommitSigAmino): _206.CommitSig;
            toAmino(message: _206.CommitSig): _206.CommitSigAmino;
        };
        Proposal: {
            encode(message: _206.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Proposal;
            fromJSON(object: any): _206.Proposal;
            toJSON(message: _206.Proposal): unknown;
            fromPartial(object: Partial<_206.Proposal>): _206.Proposal;
            fromAmino(object: _206.ProposalAmino): _206.Proposal;
            toAmino(message: _206.Proposal): _206.ProposalAmino;
        };
        SignedHeader: {
            encode(message: _206.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SignedHeader;
            fromJSON(object: any): _206.SignedHeader;
            toJSON(message: _206.SignedHeader): unknown;
            fromPartial(object: Partial<_206.SignedHeader>): _206.SignedHeader;
            fromAmino(object: _206.SignedHeaderAmino): _206.SignedHeader;
            toAmino(message: _206.SignedHeader): _206.SignedHeaderAmino;
        };
        LightBlock: {
            encode(message: _206.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.LightBlock;
            fromJSON(object: any): _206.LightBlock;
            toJSON(message: _206.LightBlock): unknown;
            fromPartial(object: Partial<_206.LightBlock>): _206.LightBlock;
            fromAmino(object: _206.LightBlockAmino): _206.LightBlock;
            toAmino(message: _206.LightBlock): _206.LightBlockAmino;
        };
        BlockMeta: {
            encode(message: _206.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.BlockMeta;
            fromJSON(object: any): _206.BlockMeta;
            toJSON(message: _206.BlockMeta): unknown;
            fromPartial(object: Partial<_206.BlockMeta>): _206.BlockMeta;
            fromAmino(object: _206.BlockMetaAmino): _206.BlockMeta;
            toAmino(message: _206.BlockMeta): _206.BlockMetaAmino;
        };
        TxProof: {
            encode(message: _206.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.TxProof;
            fromJSON(object: any): _206.TxProof;
            toJSON(message: _206.TxProof): unknown;
            fromPartial(object: Partial<_206.TxProof>): _206.TxProof;
            fromAmino(object: _206.TxProofAmino): _206.TxProof;
            toAmino(message: _206.TxProof): _206.TxProofAmino;
        };
        ConsensusParams: {
            encode(message: _205.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConsensusParams;
            fromJSON(object: any): _205.ConsensusParams;
            toJSON(message: _205.ConsensusParams): unknown;
            fromPartial(object: Partial<_205.ConsensusParams>): _205.ConsensusParams;
            fromAmino(object: _205.ConsensusParamsAmino): _205.ConsensusParams;
            toAmino(message: _205.ConsensusParams): _205.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _205.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.BlockParams;
            fromJSON(object: any): _205.BlockParams;
            toJSON(message: _205.BlockParams): unknown;
            fromPartial(object: Partial<_205.BlockParams>): _205.BlockParams;
            fromAmino(object: _205.BlockParamsAmino): _205.BlockParams;
            toAmino(message: _205.BlockParams): _205.BlockParamsAmino;
        };
        EvidenceParams: {
            encode(message: _205.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.EvidenceParams;
            fromJSON(object: any): _205.EvidenceParams;
            toJSON(message: _205.EvidenceParams): unknown;
            fromPartial(object: Partial<_205.EvidenceParams>): _205.EvidenceParams;
            fromAmino(object: _205.EvidenceParamsAmino): _205.EvidenceParams;
            toAmino(message: _205.EvidenceParams): _205.EvidenceParamsAmino;
        };
        ValidatorParams: {
            encode(message: _205.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ValidatorParams;
            fromJSON(object: any): _205.ValidatorParams;
            toJSON(message: _205.ValidatorParams): unknown;
            fromPartial(object: Partial<_205.ValidatorParams>): _205.ValidatorParams;
            fromAmino(object: _205.ValidatorParamsAmino): _205.ValidatorParams;
            toAmino(message: _205.ValidatorParams): _205.ValidatorParamsAmino;
        };
        VersionParams: {
            encode(message: _205.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.VersionParams;
            fromJSON(object: any): _205.VersionParams;
            toJSON(message: _205.VersionParams): unknown;
            fromPartial(object: Partial<_205.VersionParams>): _205.VersionParams;
            fromAmino(object: _205.VersionParamsAmino): _205.VersionParams;
            toAmino(message: _205.VersionParams): _205.VersionParamsAmino;
        };
        HashedParams: {
            encode(message: _205.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.HashedParams;
            fromJSON(object: any): _205.HashedParams;
            toJSON(message: _205.HashedParams): unknown;
            fromPartial(object: Partial<_205.HashedParams>): _205.HashedParams;
            fromAmino(object: _205.HashedParamsAmino): _205.HashedParams;
            toAmino(message: _205.HashedParams): _205.HashedParamsAmino;
        };
        Evidence: {
            encode(message: _204.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Evidence;
            fromJSON(object: any): _204.Evidence;
            toJSON(message: _204.Evidence): unknown;
            fromPartial(object: Partial<_204.Evidence>): _204.Evidence;
            fromAmino(object: _204.EvidenceAmino): _204.Evidence;
            toAmino(message: _204.Evidence): _204.EvidenceAmino;
        };
        DuplicateVoteEvidence: {
            encode(message: _204.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.DuplicateVoteEvidence;
            fromJSON(object: any): _204.DuplicateVoteEvidence;
            toJSON(message: _204.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_204.DuplicateVoteEvidence>): _204.DuplicateVoteEvidence;
            fromAmino(object: _204.DuplicateVoteEvidenceAmino): _204.DuplicateVoteEvidence;
            toAmino(message: _204.DuplicateVoteEvidence): _204.DuplicateVoteEvidenceAmino;
        };
        LightClientAttackEvidence: {
            encode(message: _204.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.LightClientAttackEvidence;
            fromJSON(object: any): _204.LightClientAttackEvidence;
            toJSON(message: _204.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_204.LightClientAttackEvidence>): _204.LightClientAttackEvidence;
            fromAmino(object: _204.LightClientAttackEvidenceAmino): _204.LightClientAttackEvidence;
            toAmino(message: _204.LightClientAttackEvidence): _204.LightClientAttackEvidenceAmino;
        };
        EvidenceList: {
            encode(message: _204.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.EvidenceList;
            fromJSON(object: any): _204.EvidenceList;
            toJSON(message: _204.EvidenceList): unknown;
            fromPartial(object: Partial<_204.EvidenceList>): _204.EvidenceList;
            fromAmino(object: _204.EvidenceListAmino): _204.EvidenceList;
            toAmino(message: _204.EvidenceList): _204.EvidenceListAmino;
        };
        Block: {
            encode(message: _203.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Block;
            fromJSON(object: any): _203.Block;
            toJSON(message: _203.Block): unknown;
            fromPartial(object: Partial<_203.Block>): _203.Block;
            fromAmino(object: _203.BlockAmino): _203.Block;
            toAmino(message: _203.Block): _203.BlockAmino;
        };
    };
    const version: {
        App: {
            encode(message: _208.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.App;
            fromJSON(object: any): _208.App;
            toJSON(message: _208.App): unknown;
            fromPartial(object: Partial<_208.App>): _208.App;
            fromAmino(object: _208.AppAmino): _208.App;
            toAmino(message: _208.App): _208.AppAmino;
        };
        Consensus: {
            encode(message: _208.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Consensus;
            fromJSON(object: any): _208.Consensus;
            toJSON(message: _208.Consensus): unknown;
            fromPartial(object: Partial<_208.Consensus>): _208.Consensus;
            fromAmino(object: _208.ConsensusAmino): _208.Consensus;
            toAmino(message: _208.Consensus): _208.ConsensusAmino;
        };
    };
}
