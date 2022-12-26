import * as _134 from "./downtime-detector/v1beta1/downtime_duration";
import * as _135 from "./downtime-detector/v1beta1/genesis";
import * as _136 from "./downtime-detector/v1beta1/query";
import * as _137 from "./epochs/genesis";
import * as _138 from "./epochs/query";
import * as _139 from "./gamm/pool-models/balancer/balancerPool";
import * as _140 from "./gamm/v1beta1/genesis";
import * as _141 from "./gamm/v1beta1/query";
import * as _142 from "./gamm/v1beta1/tx";
import * as _143 from "./gamm/pool-models/balancer/tx/tx";
import * as _144 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _145 from "./gamm/pool-models/stableswap/tx";
import * as _146 from "./gamm/v2/query";
import * as _147 from "./ibc-rate-limit/v1beta1/params";
import * as _148 from "./ibc-rate-limit/v1beta1/query";
import * as _149 from "./incentives/gauge";
import * as _150 from "./incentives/genesis";
import * as _151 from "./incentives/params";
import * as _152 from "./incentives/query";
import * as _153 from "./incentives/tx";
import * as _154 from "./lockup/genesis";
import * as _155 from "./lockup/lock";
import * as _156 from "./lockup/params";
import * as _157 from "./lockup/query";
import * as _158 from "./lockup/tx";
import * as _159 from "./mint/v1beta1/genesis";
import * as _160 from "./mint/v1beta1/mint";
import * as _161 from "./mint/v1beta1/query";
import * as _162 from "./pool-incentives/v1beta1/genesis";
import * as _163 from "./pool-incentives/v1beta1/gov";
import * as _164 from "./pool-incentives/v1beta1/incentives";
import * as _165 from "./pool-incentives/v1beta1/query";
import * as _166 from "./protorev/v1beta1/genesis";
import * as _167 from "./protorev/v1beta1/gov";
import * as _168 from "./protorev/v1beta1/params";
import * as _169 from "./protorev/v1beta1/protorev";
import * as _170 from "./protorev/v1beta1/query";
import * as _171 from "./protorev/v1beta1/tx";
import * as _172 from "./sumtree/v1beta1/tree";
import * as _173 from "./superfluid/genesis";
import * as _174 from "./superfluid/params";
import * as _175 from "./superfluid/query";
import * as _176 from "./superfluid/superfluid";
import * as _177 from "./superfluid/tx";
import * as _178 from "./swaprouter/v1beta1/genesis";
import * as _179 from "./swaprouter/v1beta1/module_route";
import * as _180 from "./swaprouter/v1beta1/query";
import * as _181 from "./swaprouter/v1beta1/swap_route";
import * as _182 from "./swaprouter/v1beta1/tx";
import * as _183 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _184 from "./tokenfactory/v1beta1/genesis";
import * as _185 from "./tokenfactory/v1beta1/params";
import * as _186 from "./tokenfactory/v1beta1/query";
import * as _187 from "./tokenfactory/v1beta1/tx";
import * as _188 from "./twap/v1beta1/genesis";
import * as _189 from "./twap/v1beta1/query";
import * as _190 from "./twap/v1beta1/twap_record";
import * as _191 from "./txfees/v1beta1/feetoken";
import * as _192 from "./txfees/v1beta1/genesis";
import * as _193 from "./txfees/v1beta1/gov";
import * as _194 from "./txfees/v1beta1/query";
import * as _195 from "./valset-pref/v1beta1/query";
import * as _196 from "./valset-pref/v1beta1/state";
import * as _197 from "./valset-pref/v1beta1/tx";
import * as _310 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _311 from "./epochs/query.rpc.Query";
import * as _312 from "./gamm/v1beta1/query.rpc.Query";
import * as _313 from "./gamm/v2/query.rpc.Query";
import * as _314 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _315 from "./incentives/query.rpc.Query";
import * as _316 from "./lockup/query.rpc.Query";
import * as _317 from "./mint/v1beta1/query.rpc.Query";
import * as _318 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _319 from "./protorev/v1beta1/query.rpc.Query";
import * as _320 from "./superfluid/query.rpc.Query";
import * as _321 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _322 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _323 from "./twap/v1beta1/query.rpc.Query";
import * as _324 from "./txfees/v1beta1/query.rpc.Query";
import * as _325 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _326 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _327 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _328 from "./gamm/v1beta1/tx.rpc.msg";
import * as _329 from "./incentives/tx.rpc.msg";
import * as _330 from "./lockup/tx.rpc.msg";
import * as _331 from "./protorev/v1beta1/tx.rpc.msg";
import * as _332 from "./superfluid/tx.rpc.msg";
import * as _333 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _334 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _335 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _136.RecoveredSinceDowntimeOfLengthRequest): Promise<_136.RecoveredSinceDowntimeOfLengthResponse>;
            };
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _136.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.RecoveredSinceDowntimeOfLengthRequest;
                fromJSON(object: any): _136.RecoveredSinceDowntimeOfLengthRequest;
                toJSON(message: _136.RecoveredSinceDowntimeOfLengthRequest): unknown;
                fromPartial(object: Partial<_136.RecoveredSinceDowntimeOfLengthRequest>): _136.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _136.RecoveredSinceDowntimeOfLengthRequestAmino): _136.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _136.RecoveredSinceDowntimeOfLengthRequest): _136.RecoveredSinceDowntimeOfLengthRequestAmino;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _136.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.RecoveredSinceDowntimeOfLengthResponse;
                fromJSON(object: any): _136.RecoveredSinceDowntimeOfLengthResponse;
                toJSON(message: _136.RecoveredSinceDowntimeOfLengthResponse): unknown;
                fromPartial(object: Partial<_136.RecoveredSinceDowntimeOfLengthResponse>): _136.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _136.RecoveredSinceDowntimeOfLengthResponseAmino): _136.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _136.RecoveredSinceDowntimeOfLengthResponse): _136.RecoveredSinceDowntimeOfLengthResponseAmino;
            };
            GenesisDowntimeEntry: {
                encode(message: _135.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisDowntimeEntry;
                fromJSON(object: any): _135.GenesisDowntimeEntry;
                toJSON(message: _135.GenesisDowntimeEntry): unknown;
                fromPartial(object: Partial<_135.GenesisDowntimeEntry>): _135.GenesisDowntimeEntry;
                fromAmino(object: _135.GenesisDowntimeEntryAmino): _135.GenesisDowntimeEntry;
                toAmino(message: _135.GenesisDowntimeEntry): _135.GenesisDowntimeEntryAmino;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
                fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
            };
            downtimeFromJSON(object: any): _134.Downtime;
            downtimeToJSON(object: _134.Downtime): string;
            Downtime: typeof _134.Downtime;
            DowntimeSDKType: typeof _134.Downtime;
            DowntimeAmino: typeof _134.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _138.QueryEpochsInfoRequest): Promise<_138.QueryEpochsInfoResponse>;
                currentEpoch(request: _138.QueryCurrentEpochRequest): Promise<_138.QueryCurrentEpochResponse>;
            };
            QueryEpochsInfoRequest: {
                encode(_: _138.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryEpochsInfoRequest;
                fromJSON(_: any): _138.QueryEpochsInfoRequest;
                toJSON(_: _138.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_138.QueryEpochsInfoRequest>): _138.QueryEpochsInfoRequest;
                fromAmino(_: _138.QueryEpochsInfoRequestAmino): _138.QueryEpochsInfoRequest;
                toAmino(_: _138.QueryEpochsInfoRequest): _138.QueryEpochsInfoRequestAmino;
            };
            QueryEpochsInfoResponse: {
                encode(message: _138.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryEpochsInfoResponse;
                fromJSON(object: any): _138.QueryEpochsInfoResponse;
                toJSON(message: _138.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_138.QueryEpochsInfoResponse>): _138.QueryEpochsInfoResponse;
                fromAmino(object: _138.QueryEpochsInfoResponseAmino): _138.QueryEpochsInfoResponse;
                toAmino(message: _138.QueryEpochsInfoResponse): _138.QueryEpochsInfoResponseAmino;
            };
            QueryCurrentEpochRequest: {
                encode(message: _138.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryCurrentEpochRequest;
                fromJSON(object: any): _138.QueryCurrentEpochRequest;
                toJSON(message: _138.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_138.QueryCurrentEpochRequest>): _138.QueryCurrentEpochRequest;
                fromAmino(object: _138.QueryCurrentEpochRequestAmino): _138.QueryCurrentEpochRequest;
                toAmino(message: _138.QueryCurrentEpochRequest): _138.QueryCurrentEpochRequestAmino;
            };
            QueryCurrentEpochResponse: {
                encode(message: _138.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryCurrentEpochResponse;
                fromJSON(object: any): _138.QueryCurrentEpochResponse;
                toJSON(message: _138.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_138.QueryCurrentEpochResponse>): _138.QueryCurrentEpochResponse;
                fromAmino(object: _138.QueryCurrentEpochResponseAmino): _138.QueryCurrentEpochResponse;
                toAmino(message: _138.QueryCurrentEpochResponse): _138.QueryCurrentEpochResponseAmino;
            };
            EpochInfo: {
                encode(message: _137.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EpochInfo;
                fromJSON(object: any): _137.EpochInfo;
                toJSON(message: _137.EpochInfo): unknown;
                fromPartial(object: Partial<_137.EpochInfo>): _137.EpochInfo;
                fromAmino(object: _137.EpochInfoAmino): _137.EpochInfo;
                toAmino(message: _137.EpochInfo): _137.EpochInfoAmino;
            };
            GenesisState: {
                encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
                fromJSON(object: any): _137.GenesisState;
                toJSON(message: _137.GenesisState): unknown;
                fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
                fromAmino(object: _137.GenesisStateAmino): _137.GenesisState;
                toAmino(message: _137.GenesisState): _137.GenesisStateAmino;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _141.QueryPoolsRequest): Promise<_141.QueryPoolsResponse>;
                numPools(request?: _141.QueryNumPoolsRequest): Promise<_141.QueryNumPoolsResponse>;
                totalLiquidity(request?: _141.QueryTotalLiquidityRequest): Promise<_141.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _141.QueryPoolsWithFilterRequest): Promise<_141.QueryPoolsWithFilterResponse>;
                pool(request: _141.QueryPoolRequest): Promise<_141.QueryPoolResponse>;
                poolType(request: _141.QueryPoolTypeRequest): Promise<_141.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _141.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_141.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _141.QueryCalcJoinPoolSharesRequest): Promise<_141.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _141.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_141.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _141.QueryPoolParamsRequest): Promise<_141.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _141.QueryTotalPoolLiquidityRequest): Promise<_141.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _141.QueryTotalSharesRequest): Promise<_141.QueryTotalSharesResponse>;
                spotPrice(request: _141.QuerySpotPriceRequest): Promise<_141.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _141.QuerySwapExactAmountInRequest): Promise<_141.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _141.QuerySwapExactAmountOutRequest): Promise<_141.QuerySwapExactAmountOutResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _142.MsgJoinPool): {
                        typeUrl: string;
                        value: _142.MsgJoinPool;
                    };
                    exitPool(value: _142.MsgExitPool): {
                        typeUrl: string;
                        value: _142.MsgExitPool;
                    };
                    swapExactAmountIn(value: _142.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _142.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _142.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _142.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _142.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _142.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _142.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _142.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _142.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _142.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _142.MsgJoinPool) => _142.MsgJoinPoolAmino;
                    fromAmino: (object: _142.MsgJoinPoolAmino) => _142.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _142.MsgExitPool) => _142.MsgExitPoolAmino;
                    fromAmino: (object: _142.MsgExitPoolAmino) => _142.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _142.MsgSwapExactAmountIn) => _142.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _142.MsgSwapExactAmountInAmino) => _142.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _142.MsgSwapExactAmountOut) => _142.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _142.MsgSwapExactAmountOutAmino) => _142.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _142.MsgJoinSwapExternAmountIn) => _142.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _142.MsgJoinSwapExternAmountInAmino) => _142.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _142.MsgJoinSwapShareAmountOut) => _142.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _142.MsgJoinSwapShareAmountOutAmino) => _142.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _142.MsgExitSwapExternAmountOut) => _142.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _142.MsgExitSwapExternAmountOutAmino) => _142.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _142.MsgExitSwapShareAmountIn) => _142.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _142.MsgExitSwapShareAmountInAmino) => _142.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _142.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinPool;
                fromJSON(object: any): _142.MsgJoinPool;
                toJSON(message: _142.MsgJoinPool): unknown;
                fromPartial(object: Partial<_142.MsgJoinPool>): _142.MsgJoinPool;
                fromAmino(object: _142.MsgJoinPoolAmino): _142.MsgJoinPool;
                toAmino(message: _142.MsgJoinPool): _142.MsgJoinPoolAmino;
            };
            MsgJoinPoolResponse: {
                encode(message: _142.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinPoolResponse;
                fromJSON(object: any): _142.MsgJoinPoolResponse;
                toJSON(message: _142.MsgJoinPoolResponse): unknown;
                fromPartial(object: Partial<_142.MsgJoinPoolResponse>): _142.MsgJoinPoolResponse;
                fromAmino(object: _142.MsgJoinPoolResponseAmino): _142.MsgJoinPoolResponse;
                toAmino(message: _142.MsgJoinPoolResponse): _142.MsgJoinPoolResponseAmino;
            };
            MsgExitPool: {
                encode(message: _142.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitPool;
                fromJSON(object: any): _142.MsgExitPool;
                toJSON(message: _142.MsgExitPool): unknown;
                fromPartial(object: Partial<_142.MsgExitPool>): _142.MsgExitPool;
                fromAmino(object: _142.MsgExitPoolAmino): _142.MsgExitPool;
                toAmino(message: _142.MsgExitPool): _142.MsgExitPoolAmino;
            };
            MsgExitPoolResponse: {
                encode(message: _142.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitPoolResponse;
                fromJSON(object: any): _142.MsgExitPoolResponse;
                toJSON(message: _142.MsgExitPoolResponse): unknown;
                fromPartial(object: Partial<_142.MsgExitPoolResponse>): _142.MsgExitPoolResponse;
                fromAmino(object: _142.MsgExitPoolResponseAmino): _142.MsgExitPoolResponse;
                toAmino(message: _142.MsgExitPoolResponse): _142.MsgExitPoolResponseAmino;
            };
            SwapAmountInRoute: {
                encode(message: _142.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SwapAmountInRoute;
                fromJSON(object: any): _142.SwapAmountInRoute;
                toJSON(message: _142.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_142.SwapAmountInRoute>): _142.SwapAmountInRoute;
                fromAmino(object: _142.SwapAmountInRouteAmino): _142.SwapAmountInRoute;
                toAmino(message: _142.SwapAmountInRoute): _142.SwapAmountInRouteAmino;
            };
            MsgSwapExactAmountIn: {
                encode(message: _142.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountIn;
                fromJSON(object: any): _142.MsgSwapExactAmountIn;
                toJSON(message: _142.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_142.MsgSwapExactAmountIn>): _142.MsgSwapExactAmountIn;
                fromAmino(object: _142.MsgSwapExactAmountInAmino): _142.MsgSwapExactAmountIn;
                toAmino(message: _142.MsgSwapExactAmountIn): _142.MsgSwapExactAmountInAmino;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _142.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _142.MsgSwapExactAmountInResponse;
                toJSON(message: _142.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_142.MsgSwapExactAmountInResponse>): _142.MsgSwapExactAmountInResponse;
                fromAmino(object: _142.MsgSwapExactAmountInResponseAmino): _142.MsgSwapExactAmountInResponse;
                toAmino(message: _142.MsgSwapExactAmountInResponse): _142.MsgSwapExactAmountInResponseAmino;
            };
            SwapAmountOutRoute: {
                encode(message: _142.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SwapAmountOutRoute;
                fromJSON(object: any): _142.SwapAmountOutRoute;
                toJSON(message: _142.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_142.SwapAmountOutRoute>): _142.SwapAmountOutRoute;
                fromAmino(object: _142.SwapAmountOutRouteAmino): _142.SwapAmountOutRoute;
                toAmino(message: _142.SwapAmountOutRoute): _142.SwapAmountOutRouteAmino;
            };
            MsgSwapExactAmountOut: {
                encode(message: _142.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountOut;
                fromJSON(object: any): _142.MsgSwapExactAmountOut;
                toJSON(message: _142.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_142.MsgSwapExactAmountOut>): _142.MsgSwapExactAmountOut;
                fromAmino(object: _142.MsgSwapExactAmountOutAmino): _142.MsgSwapExactAmountOut;
                toAmino(message: _142.MsgSwapExactAmountOut): _142.MsgSwapExactAmountOutAmino;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _142.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _142.MsgSwapExactAmountOutResponse;
                toJSON(message: _142.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_142.MsgSwapExactAmountOutResponse>): _142.MsgSwapExactAmountOutResponse;
                fromAmino(object: _142.MsgSwapExactAmountOutResponseAmino): _142.MsgSwapExactAmountOutResponse;
                toAmino(message: _142.MsgSwapExactAmountOutResponse): _142.MsgSwapExactAmountOutResponseAmino;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _142.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _142.MsgJoinSwapExternAmountIn;
                toJSON(message: _142.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: Partial<_142.MsgJoinSwapExternAmountIn>): _142.MsgJoinSwapExternAmountIn;
                fromAmino(object: _142.MsgJoinSwapExternAmountInAmino): _142.MsgJoinSwapExternAmountIn;
                toAmino(message: _142.MsgJoinSwapExternAmountIn): _142.MsgJoinSwapExternAmountInAmino;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _142.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _142.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _142.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: Partial<_142.MsgJoinSwapExternAmountInResponse>): _142.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _142.MsgJoinSwapExternAmountInResponseAmino): _142.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _142.MsgJoinSwapExternAmountInResponse): _142.MsgJoinSwapExternAmountInResponseAmino;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _142.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _142.MsgJoinSwapShareAmountOut;
                toJSON(message: _142.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: Partial<_142.MsgJoinSwapShareAmountOut>): _142.MsgJoinSwapShareAmountOut;
                fromAmino(object: _142.MsgJoinSwapShareAmountOutAmino): _142.MsgJoinSwapShareAmountOut;
                toAmino(message: _142.MsgJoinSwapShareAmountOut): _142.MsgJoinSwapShareAmountOutAmino;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _142.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _142.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _142.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: Partial<_142.MsgJoinSwapShareAmountOutResponse>): _142.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _142.MsgJoinSwapShareAmountOutResponseAmino): _142.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _142.MsgJoinSwapShareAmountOutResponse): _142.MsgJoinSwapShareAmountOutResponseAmino;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _142.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _142.MsgExitSwapShareAmountIn;
                toJSON(message: _142.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: Partial<_142.MsgExitSwapShareAmountIn>): _142.MsgExitSwapShareAmountIn;
                fromAmino(object: _142.MsgExitSwapShareAmountInAmino): _142.MsgExitSwapShareAmountIn;
                toAmino(message: _142.MsgExitSwapShareAmountIn): _142.MsgExitSwapShareAmountInAmino;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _142.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _142.MsgExitSwapShareAmountInResponse;
                toJSON(message: _142.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: Partial<_142.MsgExitSwapShareAmountInResponse>): _142.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _142.MsgExitSwapShareAmountInResponseAmino): _142.MsgExitSwapShareAmountInResponse;
                toAmino(message: _142.MsgExitSwapShareAmountInResponse): _142.MsgExitSwapShareAmountInResponseAmino;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _142.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _142.MsgExitSwapExternAmountOut;
                toJSON(message: _142.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: Partial<_142.MsgExitSwapExternAmountOut>): _142.MsgExitSwapExternAmountOut;
                fromAmino(object: _142.MsgExitSwapExternAmountOutAmino): _142.MsgExitSwapExternAmountOut;
                toAmino(message: _142.MsgExitSwapExternAmountOut): _142.MsgExitSwapExternAmountOutAmino;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _142.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _142.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _142.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: Partial<_142.MsgExitSwapExternAmountOutResponse>): _142.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _142.MsgExitSwapExternAmountOutResponseAmino): _142.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _142.MsgExitSwapExternAmountOutResponse): _142.MsgExitSwapExternAmountOutResponseAmino;
            };
            QueryPoolRequest: {
                encode(message: _141.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolRequest;
                fromJSON(object: any): _141.QueryPoolRequest;
                toJSON(message: _141.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_141.QueryPoolRequest>): _141.QueryPoolRequest;
                fromAmino(object: _141.QueryPoolRequestAmino): _141.QueryPoolRequest;
                toAmino(message: _141.QueryPoolRequest): _141.QueryPoolRequestAmino;
            };
            QueryPoolResponse: {
                encode(message: _141.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolResponse;
                fromJSON(object: any): _141.QueryPoolResponse;
                toJSON(message: _141.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_141.QueryPoolResponse>): _141.QueryPoolResponse;
                fromAmino(object: _141.QueryPoolResponseAmino): _141.QueryPoolResponse;
                toAmino(message: _141.QueryPoolResponse): _141.QueryPoolResponseAmino;
            };
            QueryPoolsRequest: {
                encode(message: _141.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsRequest;
                fromJSON(object: any): _141.QueryPoolsRequest;
                toJSON(message: _141.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_141.QueryPoolsRequest>): _141.QueryPoolsRequest;
                fromAmino(object: _141.QueryPoolsRequestAmino): _141.QueryPoolsRequest;
                toAmino(message: _141.QueryPoolsRequest): _141.QueryPoolsRequestAmino;
            };
            QueryPoolsResponse: {
                encode(message: _141.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsResponse;
                fromJSON(object: any): _141.QueryPoolsResponse;
                toJSON(message: _141.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_141.QueryPoolsResponse>): _141.QueryPoolsResponse;
                fromAmino(object: _141.QueryPoolsResponseAmino): _141.QueryPoolsResponse;
                toAmino(message: _141.QueryPoolsResponse): _141.QueryPoolsResponseAmino;
            };
            QueryNumPoolsRequest: {
                encode(_: _141.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryNumPoolsRequest;
                fromJSON(_: any): _141.QueryNumPoolsRequest;
                toJSON(_: _141.QueryNumPoolsRequest): unknown;
                fromPartial(_: Partial<_141.QueryNumPoolsRequest>): _141.QueryNumPoolsRequest;
                fromAmino(_: _141.QueryNumPoolsRequestAmino): _141.QueryNumPoolsRequest;
                toAmino(_: _141.QueryNumPoolsRequest): _141.QueryNumPoolsRequestAmino;
            };
            QueryNumPoolsResponse: {
                encode(message: _141.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryNumPoolsResponse;
                fromJSON(object: any): _141.QueryNumPoolsResponse;
                toJSON(message: _141.QueryNumPoolsResponse): unknown;
                fromPartial(object: Partial<_141.QueryNumPoolsResponse>): _141.QueryNumPoolsResponse;
                fromAmino(object: _141.QueryNumPoolsResponseAmino): _141.QueryNumPoolsResponse;
                toAmino(message: _141.QueryNumPoolsResponse): _141.QueryNumPoolsResponseAmino;
            };
            QueryPoolTypeRequest: {
                encode(message: _141.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolTypeRequest;
                fromJSON(object: any): _141.QueryPoolTypeRequest;
                toJSON(message: _141.QueryPoolTypeRequest): unknown;
                fromPartial(object: Partial<_141.QueryPoolTypeRequest>): _141.QueryPoolTypeRequest;
                fromAmino(object: _141.QueryPoolTypeRequestAmino): _141.QueryPoolTypeRequest;
                toAmino(message: _141.QueryPoolTypeRequest): _141.QueryPoolTypeRequestAmino;
            };
            QueryPoolTypeResponse: {
                encode(message: _141.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolTypeResponse;
                fromJSON(object: any): _141.QueryPoolTypeResponse;
                toJSON(message: _141.QueryPoolTypeResponse): unknown;
                fromPartial(object: Partial<_141.QueryPoolTypeResponse>): _141.QueryPoolTypeResponse;
                fromAmino(object: _141.QueryPoolTypeResponseAmino): _141.QueryPoolTypeResponse;
                toAmino(message: _141.QueryPoolTypeResponse): _141.QueryPoolTypeResponseAmino;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _141.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcJoinPoolSharesRequest;
                fromJSON(object: any): _141.QueryCalcJoinPoolSharesRequest;
                toJSON(message: _141.QueryCalcJoinPoolSharesRequest): unknown;
                fromPartial(object: Partial<_141.QueryCalcJoinPoolSharesRequest>): _141.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _141.QueryCalcJoinPoolSharesRequestAmino): _141.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _141.QueryCalcJoinPoolSharesRequest): _141.QueryCalcJoinPoolSharesRequestAmino;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _141.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcJoinPoolSharesResponse;
                fromJSON(object: any): _141.QueryCalcJoinPoolSharesResponse;
                toJSON(message: _141.QueryCalcJoinPoolSharesResponse): unknown;
                fromPartial(object: Partial<_141.QueryCalcJoinPoolSharesResponse>): _141.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _141.QueryCalcJoinPoolSharesResponseAmino): _141.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _141.QueryCalcJoinPoolSharesResponse): _141.QueryCalcJoinPoolSharesResponseAmino;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _141.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcExitPoolCoinsFromSharesRequest;
                fromJSON(object: any): _141.QueryCalcExitPoolCoinsFromSharesRequest;
                toJSON(message: _141.QueryCalcExitPoolCoinsFromSharesRequest): unknown;
                fromPartial(object: Partial<_141.QueryCalcExitPoolCoinsFromSharesRequest>): _141.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _141.QueryCalcExitPoolCoinsFromSharesRequestAmino): _141.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _141.QueryCalcExitPoolCoinsFromSharesRequest): _141.QueryCalcExitPoolCoinsFromSharesRequestAmino;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _141.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcExitPoolCoinsFromSharesResponse;
                fromJSON(object: any): _141.QueryCalcExitPoolCoinsFromSharesResponse;
                toJSON(message: _141.QueryCalcExitPoolCoinsFromSharesResponse): unknown;
                fromPartial(object: Partial<_141.QueryCalcExitPoolCoinsFromSharesResponse>): _141.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _141.QueryCalcExitPoolCoinsFromSharesResponseAmino): _141.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _141.QueryCalcExitPoolCoinsFromSharesResponse): _141.QueryCalcExitPoolCoinsFromSharesResponseAmino;
            };
            QueryPoolParamsRequest: {
                encode(message: _141.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolParamsRequest;
                fromJSON(object: any): _141.QueryPoolParamsRequest;
                toJSON(message: _141.QueryPoolParamsRequest): unknown;
                fromPartial(object: Partial<_141.QueryPoolParamsRequest>): _141.QueryPoolParamsRequest;
                fromAmino(object: _141.QueryPoolParamsRequestAmino): _141.QueryPoolParamsRequest;
                toAmino(message: _141.QueryPoolParamsRequest): _141.QueryPoolParamsRequestAmino;
            };
            QueryPoolParamsResponse: {
                encode(message: _141.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolParamsResponse;
                fromJSON(object: any): _141.QueryPoolParamsResponse;
                toJSON(message: _141.QueryPoolParamsResponse): unknown;
                fromPartial(object: Partial<_141.QueryPoolParamsResponse>): _141.QueryPoolParamsResponse;
                fromAmino(object: _141.QueryPoolParamsResponseAmino): _141.QueryPoolParamsResponse;
                toAmino(message: _141.QueryPoolParamsResponse): _141.QueryPoolParamsResponseAmino;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _141.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _141.QueryTotalPoolLiquidityRequest;
                toJSON(message: _141.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: Partial<_141.QueryTotalPoolLiquidityRequest>): _141.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _141.QueryTotalPoolLiquidityRequestAmino): _141.QueryTotalPoolLiquidityRequest;
                toAmino(message: _141.QueryTotalPoolLiquidityRequest): _141.QueryTotalPoolLiquidityRequestAmino;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _141.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _141.QueryTotalPoolLiquidityResponse;
                toJSON(message: _141.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: Partial<_141.QueryTotalPoolLiquidityResponse>): _141.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _141.QueryTotalPoolLiquidityResponseAmino): _141.QueryTotalPoolLiquidityResponse;
                toAmino(message: _141.QueryTotalPoolLiquidityResponse): _141.QueryTotalPoolLiquidityResponseAmino;
            };
            QueryTotalSharesRequest: {
                encode(message: _141.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalSharesRequest;
                fromJSON(object: any): _141.QueryTotalSharesRequest;
                toJSON(message: _141.QueryTotalSharesRequest): unknown;
                fromPartial(object: Partial<_141.QueryTotalSharesRequest>): _141.QueryTotalSharesRequest;
                fromAmino(object: _141.QueryTotalSharesRequestAmino): _141.QueryTotalSharesRequest;
                toAmino(message: _141.QueryTotalSharesRequest): _141.QueryTotalSharesRequestAmino;
            };
            QueryTotalSharesResponse: {
                encode(message: _141.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalSharesResponse;
                fromJSON(object: any): _141.QueryTotalSharesResponse;
                toJSON(message: _141.QueryTotalSharesResponse): unknown;
                fromPartial(object: Partial<_141.QueryTotalSharesResponse>): _141.QueryTotalSharesResponse;
                fromAmino(object: _141.QueryTotalSharesResponseAmino): _141.QueryTotalSharesResponse;
                toAmino(message: _141.QueryTotalSharesResponse): _141.QueryTotalSharesResponseAmino;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _141.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcJoinPoolNoSwapSharesRequest;
                fromJSON(object: any): _141.QueryCalcJoinPoolNoSwapSharesRequest;
                toJSON(message: _141.QueryCalcJoinPoolNoSwapSharesRequest): unknown;
                fromPartial(object: Partial<_141.QueryCalcJoinPoolNoSwapSharesRequest>): _141.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _141.QueryCalcJoinPoolNoSwapSharesRequestAmino): _141.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _141.QueryCalcJoinPoolNoSwapSharesRequest): _141.QueryCalcJoinPoolNoSwapSharesRequestAmino;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _141.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryCalcJoinPoolNoSwapSharesResponse;
                fromJSON(object: any): _141.QueryCalcJoinPoolNoSwapSharesResponse;
                toJSON(message: _141.QueryCalcJoinPoolNoSwapSharesResponse): unknown;
                fromPartial(object: Partial<_141.QueryCalcJoinPoolNoSwapSharesResponse>): _141.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _141.QueryCalcJoinPoolNoSwapSharesResponseAmino): _141.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _141.QueryCalcJoinPoolNoSwapSharesResponse): _141.QueryCalcJoinPoolNoSwapSharesResponseAmino;
            };
            QuerySpotPriceRequest: {
                encode(message: _141.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySpotPriceRequest;
                fromJSON(object: any): _141.QuerySpotPriceRequest;
                toJSON(message: _141.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_141.QuerySpotPriceRequest>): _141.QuerySpotPriceRequest;
                fromAmino(object: _141.QuerySpotPriceRequestAmino): _141.QuerySpotPriceRequest;
                toAmino(message: _141.QuerySpotPriceRequest): _141.QuerySpotPriceRequestAmino;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _141.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsWithFilterRequest;
                fromJSON(object: any): _141.QueryPoolsWithFilterRequest;
                toJSON(message: _141.QueryPoolsWithFilterRequest): unknown;
                fromPartial(object: Partial<_141.QueryPoolsWithFilterRequest>): _141.QueryPoolsWithFilterRequest;
                fromAmino(object: _141.QueryPoolsWithFilterRequestAmino): _141.QueryPoolsWithFilterRequest;
                toAmino(message: _141.QueryPoolsWithFilterRequest): _141.QueryPoolsWithFilterRequestAmino;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _141.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryPoolsWithFilterResponse;
                fromJSON(object: any): _141.QueryPoolsWithFilterResponse;
                toJSON(message: _141.QueryPoolsWithFilterResponse): unknown;
                fromPartial(object: Partial<_141.QueryPoolsWithFilterResponse>): _141.QueryPoolsWithFilterResponse;
                fromAmino(object: _141.QueryPoolsWithFilterResponseAmino): _141.QueryPoolsWithFilterResponse;
                toAmino(message: _141.QueryPoolsWithFilterResponse): _141.QueryPoolsWithFilterResponseAmino;
            };
            QuerySpotPriceResponse: {
                encode(message: _141.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySpotPriceResponse;
                fromJSON(object: any): _141.QuerySpotPriceResponse;
                toJSON(message: _141.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_141.QuerySpotPriceResponse>): _141.QuerySpotPriceResponse;
                fromAmino(object: _141.QuerySpotPriceResponseAmino): _141.QuerySpotPriceResponse;
                toAmino(message: _141.QuerySpotPriceResponse): _141.QuerySpotPriceResponseAmino;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _141.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _141.QuerySwapExactAmountInRequest;
                toJSON(message: _141.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_141.QuerySwapExactAmountInRequest>): _141.QuerySwapExactAmountInRequest;
                fromAmino(object: _141.QuerySwapExactAmountInRequestAmino): _141.QuerySwapExactAmountInRequest;
                toAmino(message: _141.QuerySwapExactAmountInRequest): _141.QuerySwapExactAmountInRequestAmino;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _141.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _141.QuerySwapExactAmountInResponse;
                toJSON(message: _141.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_141.QuerySwapExactAmountInResponse>): _141.QuerySwapExactAmountInResponse;
                fromAmino(object: _141.QuerySwapExactAmountInResponseAmino): _141.QuerySwapExactAmountInResponse;
                toAmino(message: _141.QuerySwapExactAmountInResponse): _141.QuerySwapExactAmountInResponseAmino;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _141.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _141.QuerySwapExactAmountOutRequest;
                toJSON(message: _141.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_141.QuerySwapExactAmountOutRequest>): _141.QuerySwapExactAmountOutRequest;
                fromAmino(object: _141.QuerySwapExactAmountOutRequestAmino): _141.QuerySwapExactAmountOutRequest;
                toAmino(message: _141.QuerySwapExactAmountOutRequest): _141.QuerySwapExactAmountOutRequestAmino;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _141.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _141.QuerySwapExactAmountOutResponse;
                toJSON(message: _141.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_141.QuerySwapExactAmountOutResponse>): _141.QuerySwapExactAmountOutResponse;
                fromAmino(object: _141.QuerySwapExactAmountOutResponseAmino): _141.QuerySwapExactAmountOutResponse;
                toAmino(message: _141.QuerySwapExactAmountOutResponse): _141.QuerySwapExactAmountOutResponseAmino;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _141.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalLiquidityRequest;
                fromJSON(_: any): _141.QueryTotalLiquidityRequest;
                toJSON(_: _141.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: Partial<_141.QueryTotalLiquidityRequest>): _141.QueryTotalLiquidityRequest;
                fromAmino(_: _141.QueryTotalLiquidityRequestAmino): _141.QueryTotalLiquidityRequest;
                toAmino(_: _141.QueryTotalLiquidityRequest): _141.QueryTotalLiquidityRequestAmino;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _141.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryTotalLiquidityResponse;
                fromJSON(object: any): _141.QueryTotalLiquidityResponse;
                toJSON(message: _141.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: Partial<_141.QueryTotalLiquidityResponse>): _141.QueryTotalLiquidityResponse;
                fromAmino(object: _141.QueryTotalLiquidityResponseAmino): _141.QueryTotalLiquidityResponse;
                toAmino(message: _141.QueryTotalLiquidityResponse): _141.QueryTotalLiquidityResponseAmino;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _139.Pool | _144.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _139.PoolAmino;
            } | {
                type: string;
                value: _144.PoolAmino;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
                fromAmino(object: _140.ParamsAmino): _140.Params;
                toAmino(message: _140.Params): _140.ParamsAmino;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
                fromPartial(object: Partial<_140.GenesisState>): _140.GenesisState;
                fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
            };
            SmoothWeightChangeParams: {
                encode(message: _139.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SmoothWeightChangeParams;
                fromJSON(object: any): _139.SmoothWeightChangeParams;
                toJSON(message: _139.SmoothWeightChangeParams): unknown;
                fromPartial(object: Partial<_139.SmoothWeightChangeParams>): _139.SmoothWeightChangeParams;
                fromAmino(object: _139.SmoothWeightChangeParamsAmino): _139.SmoothWeightChangeParams;
                toAmino(message: _139.SmoothWeightChangeParams): _139.SmoothWeightChangeParamsAmino;
            };
            PoolParams: {
                encode(message: _139.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PoolParams;
                fromJSON(object: any): _139.PoolParams;
                toJSON(message: _139.PoolParams): unknown;
                fromPartial(object: Partial<_139.PoolParams>): _139.PoolParams;
                fromAmino(object: _139.PoolParamsAmino): _139.PoolParams;
                toAmino(message: _139.PoolParams): _139.PoolParamsAmino;
            };
            PoolAsset: {
                encode(message: _139.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PoolAsset;
                fromJSON(object: any): _139.PoolAsset;
                toJSON(message: _139.PoolAsset): unknown;
                fromPartial(object: Partial<_139.PoolAsset>): _139.PoolAsset;
                fromAmino(object: _139.PoolAssetAmino): _139.PoolAsset;
                toAmino(message: _139.PoolAsset): _139.PoolAssetAmino;
            };
            Pool: {
                encode(message: _139.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Pool;
                fromJSON(object: any): _139.Pool;
                toJSON(message: _139.Pool): unknown;
                fromPartial(object: Partial<_139.Pool>): _139.Pool;
                fromAmino(object: _139.PoolAmino): _139.Pool;
                toAmino(message: _139.Pool): _139.PoolAmino;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _326.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _143.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _143.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _143.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _143.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _143.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _143.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _143.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _143.MsgCreateBalancerPool) => _143.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _143.MsgCreateBalancerPoolAmino) => _143.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _143.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateBalancerPool;
                        fromJSON(object: any): _143.MsgCreateBalancerPool;
                        toJSON(message: _143.MsgCreateBalancerPool): unknown;
                        fromPartial(object: Partial<_143.MsgCreateBalancerPool>): _143.MsgCreateBalancerPool;
                        fromAmino(object: _143.MsgCreateBalancerPoolAmino): _143.MsgCreateBalancerPool;
                        toAmino(message: _143.MsgCreateBalancerPool): _143.MsgCreateBalancerPoolAmino;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _143.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _143.MsgCreateBalancerPoolResponse;
                        toJSON(message: _143.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: Partial<_143.MsgCreateBalancerPoolResponse>): _143.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _143.MsgCreateBalancerPoolResponseAmino): _143.MsgCreateBalancerPoolResponse;
                        toAmino(message: _143.MsgCreateBalancerPoolResponse): _143.MsgCreateBalancerPoolResponseAmino;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _327.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _145.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _145.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _145.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _145.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _145.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _145.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _145.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _145.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _145.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _145.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _145.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _145.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _145.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _145.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _145.MsgCreateStableswapPool) => _145.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _145.MsgCreateStableswapPoolAmino) => _145.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _145.MsgStableSwapAdjustScalingFactors) => _145.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _145.MsgStableSwapAdjustScalingFactorsAmino) => _145.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _145.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateStableswapPool;
                        fromJSON(object: any): _145.MsgCreateStableswapPool;
                        toJSON(message: _145.MsgCreateStableswapPool): unknown;
                        fromPartial(object: Partial<_145.MsgCreateStableswapPool>): _145.MsgCreateStableswapPool;
                        fromAmino(object: _145.MsgCreateStableswapPoolAmino): _145.MsgCreateStableswapPool;
                        toAmino(message: _145.MsgCreateStableswapPool): _145.MsgCreateStableswapPoolAmino;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _145.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _145.MsgCreateStableswapPoolResponse;
                        toJSON(message: _145.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: Partial<_145.MsgCreateStableswapPoolResponse>): _145.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _145.MsgCreateStableswapPoolResponseAmino): _145.MsgCreateStableswapPoolResponse;
                        toAmino(message: _145.MsgCreateStableswapPoolResponse): _145.MsgCreateStableswapPoolResponseAmino;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _145.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _145.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _145.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: Partial<_145.MsgStableSwapAdjustScalingFactors>): _145.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _145.MsgStableSwapAdjustScalingFactorsAmino): _145.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _145.MsgStableSwapAdjustScalingFactors): _145.MsgStableSwapAdjustScalingFactorsAmino;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _145.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _145.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _145.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: Partial<_145.MsgStableSwapAdjustScalingFactorsResponse>): _145.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _145.MsgStableSwapAdjustScalingFactorsResponseAmino): _145.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _145.MsgStableSwapAdjustScalingFactorsResponse): _145.MsgStableSwapAdjustScalingFactorsResponseAmino;
                    };
                    PoolParams: {
                        encode(message: _144.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PoolParams;
                        fromJSON(object: any): _144.PoolParams;
                        toJSON(message: _144.PoolParams): unknown;
                        fromPartial(object: Partial<_144.PoolParams>): _144.PoolParams;
                        fromAmino(object: _144.PoolParamsAmino): _144.PoolParams;
                        toAmino(message: _144.PoolParams): _144.PoolParamsAmino;
                    };
                    Pool: {
                        encode(message: _144.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Pool;
                        fromJSON(object: any): _144.Pool;
                        toJSON(message: _144.Pool): unknown;
                        fromPartial(object: Partial<_144.Pool>): _144.Pool;
                        fromAmino(object: _144.PoolAmino): _144.Pool;
                        toAmino(message: _144.Pool): _144.PoolAmino;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _146.QuerySpotPriceRequest): Promise<_146.QuerySpotPriceResponse>;
            };
            QuerySpotPriceRequest: {
                encode(message: _146.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySpotPriceRequest;
                fromJSON(object: any): _146.QuerySpotPriceRequest;
                toJSON(message: _146.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_146.QuerySpotPriceRequest>): _146.QuerySpotPriceRequest;
                fromAmino(object: _146.QuerySpotPriceRequestAmino): _146.QuerySpotPriceRequest;
                toAmino(message: _146.QuerySpotPriceRequest): _146.QuerySpotPriceRequestAmino;
            };
            QuerySpotPriceResponse: {
                encode(message: _146.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuerySpotPriceResponse;
                fromJSON(object: any): _146.QuerySpotPriceResponse;
                toJSON(message: _146.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_146.QuerySpotPriceResponse>): _146.QuerySpotPriceResponse;
                fromAmino(object: _146.QuerySpotPriceResponseAmino): _146.QuerySpotPriceResponse;
                toAmino(message: _146.QuerySpotPriceResponse): _146.QuerySpotPriceResponseAmino;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromJSON(_: any): _148.QueryParamsRequest;
                toJSON(_: _148.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
                fromAmino(_: _148.QueryParamsRequestAmino): _148.QueryParamsRequest;
                toAmino(_: _148.QueryParamsRequest): _148.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
                fromAmino(object: _148.QueryParamsResponseAmino): _148.QueryParamsResponse;
                toAmino(message: _148.QueryParamsResponse): _148.QueryParamsResponseAmino;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromJSON(object: any): _147.Params;
                toJSON(message: _147.Params): unknown;
                fromPartial(object: Partial<_147.Params>): _147.Params;
                fromAmino(object: _147.ParamsAmino): _147.Params;
                toAmino(message: _147.Params): _147.ParamsAmino;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _329.MsgClientImpl;
        QueryClientImpl: typeof _315.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _152.ModuleToDistributeCoinsRequest): Promise<_152.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _152.GaugeByIDRequest): Promise<_152.GaugeByIDResponse>;
            gauges(request?: _152.GaugesRequest): Promise<_152.GaugesResponse>;
            activeGauges(request?: _152.ActiveGaugesRequest): Promise<_152.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _152.ActiveGaugesPerDenomRequest): Promise<_152.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _152.UpcomingGaugesRequest): Promise<_152.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _152.UpcomingGaugesPerDenomRequest): Promise<_152.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _152.RewardsEstRequest): Promise<_152.RewardsEstResponse>;
            lockableDurations(request?: _152.QueryLockableDurationsRequest): Promise<_152.QueryLockableDurationsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _153.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _153.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _153.MsgCreateGauge): {
                    typeUrl: string;
                    value: _153.MsgCreateGauge;
                };
                addToGauge(value: _153.MsgAddToGauge): {
                    typeUrl: string;
                    value: _153.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _153.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _153.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _153.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _153.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _153.MsgCreateGauge): {
                    typeUrl: string;
                    value: _153.MsgCreateGauge;
                };
                addToGauge(value: _153.MsgAddToGauge): {
                    typeUrl: string;
                    value: _153.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _153.MsgCreateGauge) => _153.MsgCreateGaugeAmino;
                fromAmino: (object: _153.MsgCreateGaugeAmino) => _153.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _153.MsgAddToGauge) => _153.MsgAddToGaugeAmino;
                fromAmino: (object: _153.MsgAddToGaugeAmino) => _153.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _153.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateGauge;
            fromJSON(object: any): _153.MsgCreateGauge;
            toJSON(message: _153.MsgCreateGauge): unknown;
            fromPartial(object: Partial<_153.MsgCreateGauge>): _153.MsgCreateGauge;
            fromAmino(object: _153.MsgCreateGaugeAmino): _153.MsgCreateGauge;
            toAmino(message: _153.MsgCreateGauge): _153.MsgCreateGaugeAmino;
        };
        MsgCreateGaugeResponse: {
            encode(_: _153.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCreateGaugeResponse;
            fromJSON(_: any): _153.MsgCreateGaugeResponse;
            toJSON(_: _153.MsgCreateGaugeResponse): unknown;
            fromPartial(_: Partial<_153.MsgCreateGaugeResponse>): _153.MsgCreateGaugeResponse;
            fromAmino(_: _153.MsgCreateGaugeResponseAmino): _153.MsgCreateGaugeResponse;
            toAmino(_: _153.MsgCreateGaugeResponse): _153.MsgCreateGaugeResponseAmino;
        };
        MsgAddToGauge: {
            encode(message: _153.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddToGauge;
            fromJSON(object: any): _153.MsgAddToGauge;
            toJSON(message: _153.MsgAddToGauge): unknown;
            fromPartial(object: Partial<_153.MsgAddToGauge>): _153.MsgAddToGauge;
            fromAmino(object: _153.MsgAddToGaugeAmino): _153.MsgAddToGauge;
            toAmino(message: _153.MsgAddToGauge): _153.MsgAddToGaugeAmino;
        };
        MsgAddToGaugeResponse: {
            encode(_: _153.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgAddToGaugeResponse;
            fromJSON(_: any): _153.MsgAddToGaugeResponse;
            toJSON(_: _153.MsgAddToGaugeResponse): unknown;
            fromPartial(_: Partial<_153.MsgAddToGaugeResponse>): _153.MsgAddToGaugeResponse;
            fromAmino(_: _153.MsgAddToGaugeResponseAmino): _153.MsgAddToGaugeResponse;
            toAmino(_: _153.MsgAddToGaugeResponse): _153.MsgAddToGaugeResponseAmino;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _152.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _152.ModuleToDistributeCoinsRequest;
            toJSON(_: _152.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: Partial<_152.ModuleToDistributeCoinsRequest>): _152.ModuleToDistributeCoinsRequest;
            fromAmino(_: _152.ModuleToDistributeCoinsRequestAmino): _152.ModuleToDistributeCoinsRequest;
            toAmino(_: _152.ModuleToDistributeCoinsRequest): _152.ModuleToDistributeCoinsRequestAmino;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _152.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _152.ModuleToDistributeCoinsResponse;
            toJSON(message: _152.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: Partial<_152.ModuleToDistributeCoinsResponse>): _152.ModuleToDistributeCoinsResponse;
            fromAmino(object: _152.ModuleToDistributeCoinsResponseAmino): _152.ModuleToDistributeCoinsResponse;
            toAmino(message: _152.ModuleToDistributeCoinsResponse): _152.ModuleToDistributeCoinsResponseAmino;
        };
        GaugeByIDRequest: {
            encode(message: _152.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GaugeByIDRequest;
            fromJSON(object: any): _152.GaugeByIDRequest;
            toJSON(message: _152.GaugeByIDRequest): unknown;
            fromPartial(object: Partial<_152.GaugeByIDRequest>): _152.GaugeByIDRequest;
            fromAmino(object: _152.GaugeByIDRequestAmino): _152.GaugeByIDRequest;
            toAmino(message: _152.GaugeByIDRequest): _152.GaugeByIDRequestAmino;
        };
        GaugeByIDResponse: {
            encode(message: _152.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GaugeByIDResponse;
            fromJSON(object: any): _152.GaugeByIDResponse;
            toJSON(message: _152.GaugeByIDResponse): unknown;
            fromPartial(object: Partial<_152.GaugeByIDResponse>): _152.GaugeByIDResponse;
            fromAmino(object: _152.GaugeByIDResponseAmino): _152.GaugeByIDResponse;
            toAmino(message: _152.GaugeByIDResponse): _152.GaugeByIDResponseAmino;
        };
        GaugesRequest: {
            encode(message: _152.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GaugesRequest;
            fromJSON(object: any): _152.GaugesRequest;
            toJSON(message: _152.GaugesRequest): unknown;
            fromPartial(object: Partial<_152.GaugesRequest>): _152.GaugesRequest;
            fromAmino(object: _152.GaugesRequestAmino): _152.GaugesRequest;
            toAmino(message: _152.GaugesRequest): _152.GaugesRequestAmino;
        };
        GaugesResponse: {
            encode(message: _152.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GaugesResponse;
            fromJSON(object: any): _152.GaugesResponse;
            toJSON(message: _152.GaugesResponse): unknown;
            fromPartial(object: Partial<_152.GaugesResponse>): _152.GaugesResponse;
            fromAmino(object: _152.GaugesResponseAmino): _152.GaugesResponse;
            toAmino(message: _152.GaugesResponse): _152.GaugesResponseAmino;
        };
        ActiveGaugesRequest: {
            encode(message: _152.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ActiveGaugesRequest;
            fromJSON(object: any): _152.ActiveGaugesRequest;
            toJSON(message: _152.ActiveGaugesRequest): unknown;
            fromPartial(object: Partial<_152.ActiveGaugesRequest>): _152.ActiveGaugesRequest;
            fromAmino(object: _152.ActiveGaugesRequestAmino): _152.ActiveGaugesRequest;
            toAmino(message: _152.ActiveGaugesRequest): _152.ActiveGaugesRequestAmino;
        };
        ActiveGaugesResponse: {
            encode(message: _152.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ActiveGaugesResponse;
            fromJSON(object: any): _152.ActiveGaugesResponse;
            toJSON(message: _152.ActiveGaugesResponse): unknown;
            fromPartial(object: Partial<_152.ActiveGaugesResponse>): _152.ActiveGaugesResponse;
            fromAmino(object: _152.ActiveGaugesResponseAmino): _152.ActiveGaugesResponse;
            toAmino(message: _152.ActiveGaugesResponse): _152.ActiveGaugesResponseAmino;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _152.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _152.ActiveGaugesPerDenomRequest;
            toJSON(message: _152.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_152.ActiveGaugesPerDenomRequest>): _152.ActiveGaugesPerDenomRequest;
            fromAmino(object: _152.ActiveGaugesPerDenomRequestAmino): _152.ActiveGaugesPerDenomRequest;
            toAmino(message: _152.ActiveGaugesPerDenomRequest): _152.ActiveGaugesPerDenomRequestAmino;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _152.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _152.ActiveGaugesPerDenomResponse;
            toJSON(message: _152.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_152.ActiveGaugesPerDenomResponse>): _152.ActiveGaugesPerDenomResponse;
            fromAmino(object: _152.ActiveGaugesPerDenomResponseAmino): _152.ActiveGaugesPerDenomResponse;
            toAmino(message: _152.ActiveGaugesPerDenomResponse): _152.ActiveGaugesPerDenomResponseAmino;
        };
        UpcomingGaugesRequest: {
            encode(message: _152.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpcomingGaugesRequest;
            fromJSON(object: any): _152.UpcomingGaugesRequest;
            toJSON(message: _152.UpcomingGaugesRequest): unknown;
            fromPartial(object: Partial<_152.UpcomingGaugesRequest>): _152.UpcomingGaugesRequest;
            fromAmino(object: _152.UpcomingGaugesRequestAmino): _152.UpcomingGaugesRequest;
            toAmino(message: _152.UpcomingGaugesRequest): _152.UpcomingGaugesRequestAmino;
        };
        UpcomingGaugesResponse: {
            encode(message: _152.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpcomingGaugesResponse;
            fromJSON(object: any): _152.UpcomingGaugesResponse;
            toJSON(message: _152.UpcomingGaugesResponse): unknown;
            fromPartial(object: Partial<_152.UpcomingGaugesResponse>): _152.UpcomingGaugesResponse;
            fromAmino(object: _152.UpcomingGaugesResponseAmino): _152.UpcomingGaugesResponse;
            toAmino(message: _152.UpcomingGaugesResponse): _152.UpcomingGaugesResponseAmino;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _152.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _152.UpcomingGaugesPerDenomRequest;
            toJSON(message: _152.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_152.UpcomingGaugesPerDenomRequest>): _152.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _152.UpcomingGaugesPerDenomRequestAmino): _152.UpcomingGaugesPerDenomRequest;
            toAmino(message: _152.UpcomingGaugesPerDenomRequest): _152.UpcomingGaugesPerDenomRequestAmino;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _152.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _152.UpcomingGaugesPerDenomResponse;
            toJSON(message: _152.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_152.UpcomingGaugesPerDenomResponse>): _152.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _152.UpcomingGaugesPerDenomResponseAmino): _152.UpcomingGaugesPerDenomResponse;
            toAmino(message: _152.UpcomingGaugesPerDenomResponse): _152.UpcomingGaugesPerDenomResponseAmino;
        };
        RewardsEstRequest: {
            encode(message: _152.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RewardsEstRequest;
            fromJSON(object: any): _152.RewardsEstRequest;
            toJSON(message: _152.RewardsEstRequest): unknown;
            fromPartial(object: Partial<_152.RewardsEstRequest>): _152.RewardsEstRequest;
            fromAmino(object: _152.RewardsEstRequestAmino): _152.RewardsEstRequest;
            toAmino(message: _152.RewardsEstRequest): _152.RewardsEstRequestAmino;
        };
        RewardsEstResponse: {
            encode(message: _152.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RewardsEstResponse;
            fromJSON(object: any): _152.RewardsEstResponse;
            toJSON(message: _152.RewardsEstResponse): unknown;
            fromPartial(object: Partial<_152.RewardsEstResponse>): _152.RewardsEstResponse;
            fromAmino(object: _152.RewardsEstResponseAmino): _152.RewardsEstResponse;
            toAmino(message: _152.RewardsEstResponse): _152.RewardsEstResponseAmino;
        };
        QueryLockableDurationsRequest: {
            encode(_: _152.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLockableDurationsRequest;
            fromJSON(_: any): _152.QueryLockableDurationsRequest;
            toJSON(_: _152.QueryLockableDurationsRequest): unknown;
            fromPartial(_: Partial<_152.QueryLockableDurationsRequest>): _152.QueryLockableDurationsRequest;
            fromAmino(_: _152.QueryLockableDurationsRequestAmino): _152.QueryLockableDurationsRequest;
            toAmino(_: _152.QueryLockableDurationsRequest): _152.QueryLockableDurationsRequestAmino;
        };
        QueryLockableDurationsResponse: {
            encode(message: _152.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryLockableDurationsResponse;
            fromJSON(object: any): _152.QueryLockableDurationsResponse;
            toJSON(message: _152.QueryLockableDurationsResponse): unknown;
            fromPartial(object: Partial<_152.QueryLockableDurationsResponse>): _152.QueryLockableDurationsResponse;
            fromAmino(object: _152.QueryLockableDurationsResponseAmino): _152.QueryLockableDurationsResponse;
            toAmino(message: _152.QueryLockableDurationsResponse): _152.QueryLockableDurationsResponseAmino;
        };
        Params: {
            encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
            fromJSON(object: any): _151.Params;
            toJSON(message: _151.Params): unknown;
            fromPartial(object: Partial<_151.Params>): _151.Params;
            fromAmino(object: _151.ParamsAmino): _151.Params;
            toAmino(message: _151.Params): _151.ParamsAmino;
        };
        GenesisState: {
            encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
            fromJSON(object: any): _150.GenesisState;
            toJSON(message: _150.GenesisState): unknown;
            fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            fromAmino(object: _150.GenesisStateAmino): _150.GenesisState;
            toAmino(message: _150.GenesisState): _150.GenesisStateAmino;
        };
        Gauge: {
            encode(message: _149.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Gauge;
            fromJSON(object: any): _149.Gauge;
            toJSON(message: _149.Gauge): unknown;
            fromPartial(object: Partial<_149.Gauge>): _149.Gauge;
            fromAmino(object: _149.GaugeAmino): _149.Gauge;
            toAmino(message: _149.Gauge): _149.GaugeAmino;
        };
        LockableDurationsInfo: {
            encode(message: _149.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.LockableDurationsInfo;
            fromJSON(object: any): _149.LockableDurationsInfo;
            toJSON(message: _149.LockableDurationsInfo): unknown;
            fromPartial(object: Partial<_149.LockableDurationsInfo>): _149.LockableDurationsInfo;
            fromAmino(object: _149.LockableDurationsInfoAmino): _149.LockableDurationsInfo;
            toAmino(message: _149.LockableDurationsInfo): _149.LockableDurationsInfoAmino;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _330.MsgClientImpl;
        QueryClientImpl: typeof _316.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _157.ModuleBalanceRequest): Promise<_157.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _157.ModuleLockedAmountRequest): Promise<_157.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _157.AccountUnlockableCoinsRequest): Promise<_157.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _157.AccountUnlockingCoinsRequest): Promise<_157.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _157.AccountLockedCoinsRequest): Promise<_157.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _157.AccountLockedPastTimeRequest): Promise<_157.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _157.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_157.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _157.AccountUnlockedBeforeTimeRequest): Promise<_157.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _157.AccountLockedPastTimeDenomRequest): Promise<_157.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _157.LockedDenomRequest): Promise<_157.LockedDenomResponse>;
            lockedByID(request: _157.LockedRequest): Promise<_157.LockedResponse>;
            syntheticLockupsByLockupID(request: _157.SyntheticLockupsByLockupIDRequest): Promise<_157.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _157.AccountLockedLongerDurationRequest): Promise<_157.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _157.AccountLockedDurationRequest): Promise<_157.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _157.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_157.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _157.AccountLockedLongerDurationDenomRequest): Promise<_157.AccountLockedLongerDurationDenomResponse>;
            params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _158.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _158.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _158.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _158.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _158.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _158.MsgLockTokens): {
                    typeUrl: string;
                    value: _158.MsgLockTokens;
                };
                beginUnlockingAll(value: _158.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _158.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlocking;
                };
                extendLockup(value: _158.MsgExtendLockup): {
                    typeUrl: string;
                    value: _158.MsgExtendLockup;
                };
                forceUnlock(value: _158.MsgForceUnlock): {
                    typeUrl: string;
                    value: _158.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _158.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _158.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _158.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _158.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _158.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _158.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _158.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _158.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _158.MsgLockTokens): {
                    typeUrl: string;
                    value: _158.MsgLockTokens;
                };
                beginUnlockingAll(value: _158.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _158.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _158.MsgBeginUnlocking;
                };
                extendLockup(value: _158.MsgExtendLockup): {
                    typeUrl: string;
                    value: _158.MsgExtendLockup;
                };
                forceUnlock(value: _158.MsgForceUnlock): {
                    typeUrl: string;
                    value: _158.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _158.MsgLockTokens) => _158.MsgLockTokensAmino;
                fromAmino: (object: _158.MsgLockTokensAmino) => _158.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _158.MsgBeginUnlockingAll) => _158.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _158.MsgBeginUnlockingAllAmino) => _158.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _158.MsgBeginUnlocking) => _158.MsgBeginUnlockingAmino;
                fromAmino: (object: _158.MsgBeginUnlockingAmino) => _158.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _158.MsgExtendLockup) => _158.MsgExtendLockupAmino;
                fromAmino: (object: _158.MsgExtendLockupAmino) => _158.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _158.MsgForceUnlock) => _158.MsgForceUnlockAmino;
                fromAmino: (object: _158.MsgForceUnlockAmino) => _158.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _158.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgLockTokens;
            fromJSON(object: any): _158.MsgLockTokens;
            toJSON(message: _158.MsgLockTokens): unknown;
            fromPartial(object: Partial<_158.MsgLockTokens>): _158.MsgLockTokens;
            fromAmino(object: _158.MsgLockTokensAmino): _158.MsgLockTokens;
            toAmino(message: _158.MsgLockTokens): _158.MsgLockTokensAmino;
        };
        MsgLockTokensResponse: {
            encode(message: _158.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgLockTokensResponse;
            fromJSON(object: any): _158.MsgLockTokensResponse;
            toJSON(message: _158.MsgLockTokensResponse): unknown;
            fromPartial(object: Partial<_158.MsgLockTokensResponse>): _158.MsgLockTokensResponse;
            fromAmino(object: _158.MsgLockTokensResponseAmino): _158.MsgLockTokensResponse;
            toAmino(message: _158.MsgLockTokensResponse): _158.MsgLockTokensResponseAmino;
        };
        MsgBeginUnlockingAll: {
            encode(message: _158.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgBeginUnlockingAll;
            fromJSON(object: any): _158.MsgBeginUnlockingAll;
            toJSON(message: _158.MsgBeginUnlockingAll): unknown;
            fromPartial(object: Partial<_158.MsgBeginUnlockingAll>): _158.MsgBeginUnlockingAll;
            fromAmino(object: _158.MsgBeginUnlockingAllAmino): _158.MsgBeginUnlockingAll;
            toAmino(message: _158.MsgBeginUnlockingAll): _158.MsgBeginUnlockingAllAmino;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _158.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _158.MsgBeginUnlockingAllResponse;
            toJSON(message: _158.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: Partial<_158.MsgBeginUnlockingAllResponse>): _158.MsgBeginUnlockingAllResponse;
            fromAmino(object: _158.MsgBeginUnlockingAllResponseAmino): _158.MsgBeginUnlockingAllResponse;
            toAmino(message: _158.MsgBeginUnlockingAllResponse): _158.MsgBeginUnlockingAllResponseAmino;
        };
        MsgBeginUnlocking: {
            encode(message: _158.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgBeginUnlocking;
            fromJSON(object: any): _158.MsgBeginUnlocking;
            toJSON(message: _158.MsgBeginUnlocking): unknown;
            fromPartial(object: Partial<_158.MsgBeginUnlocking>): _158.MsgBeginUnlocking;
            fromAmino(object: _158.MsgBeginUnlockingAmino): _158.MsgBeginUnlocking;
            toAmino(message: _158.MsgBeginUnlocking): _158.MsgBeginUnlockingAmino;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _158.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgBeginUnlockingResponse;
            fromJSON(object: any): _158.MsgBeginUnlockingResponse;
            toJSON(message: _158.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: Partial<_158.MsgBeginUnlockingResponse>): _158.MsgBeginUnlockingResponse;
            fromAmino(object: _158.MsgBeginUnlockingResponseAmino): _158.MsgBeginUnlockingResponse;
            toAmino(message: _158.MsgBeginUnlockingResponse): _158.MsgBeginUnlockingResponseAmino;
        };
        MsgExtendLockup: {
            encode(message: _158.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgExtendLockup;
            fromJSON(object: any): _158.MsgExtendLockup;
            toJSON(message: _158.MsgExtendLockup): unknown;
            fromPartial(object: Partial<_158.MsgExtendLockup>): _158.MsgExtendLockup;
            fromAmino(object: _158.MsgExtendLockupAmino): _158.MsgExtendLockup;
            toAmino(message: _158.MsgExtendLockup): _158.MsgExtendLockupAmino;
        };
        MsgExtendLockupResponse: {
            encode(message: _158.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgExtendLockupResponse;
            fromJSON(object: any): _158.MsgExtendLockupResponse;
            toJSON(message: _158.MsgExtendLockupResponse): unknown;
            fromPartial(object: Partial<_158.MsgExtendLockupResponse>): _158.MsgExtendLockupResponse;
            fromAmino(object: _158.MsgExtendLockupResponseAmino): _158.MsgExtendLockupResponse;
            toAmino(message: _158.MsgExtendLockupResponse): _158.MsgExtendLockupResponseAmino;
        };
        MsgForceUnlock: {
            encode(message: _158.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgForceUnlock;
            fromJSON(object: any): _158.MsgForceUnlock;
            toJSON(message: _158.MsgForceUnlock): unknown;
            fromPartial(object: Partial<_158.MsgForceUnlock>): _158.MsgForceUnlock;
            fromAmino(object: _158.MsgForceUnlockAmino): _158.MsgForceUnlock;
            toAmino(message: _158.MsgForceUnlock): _158.MsgForceUnlockAmino;
        };
        MsgForceUnlockResponse: {
            encode(message: _158.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgForceUnlockResponse;
            fromJSON(object: any): _158.MsgForceUnlockResponse;
            toJSON(message: _158.MsgForceUnlockResponse): unknown;
            fromPartial(object: Partial<_158.MsgForceUnlockResponse>): _158.MsgForceUnlockResponse;
            fromAmino(object: _158.MsgForceUnlockResponseAmino): _158.MsgForceUnlockResponse;
            toAmino(message: _158.MsgForceUnlockResponse): _158.MsgForceUnlockResponseAmino;
        };
        ModuleBalanceRequest: {
            encode(_: _157.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ModuleBalanceRequest;
            fromJSON(_: any): _157.ModuleBalanceRequest;
            toJSON(_: _157.ModuleBalanceRequest): unknown;
            fromPartial(_: Partial<_157.ModuleBalanceRequest>): _157.ModuleBalanceRequest;
            fromAmino(_: _157.ModuleBalanceRequestAmino): _157.ModuleBalanceRequest;
            toAmino(_: _157.ModuleBalanceRequest): _157.ModuleBalanceRequestAmino;
        };
        ModuleBalanceResponse: {
            encode(message: _157.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ModuleBalanceResponse;
            fromJSON(object: any): _157.ModuleBalanceResponse;
            toJSON(message: _157.ModuleBalanceResponse): unknown;
            fromPartial(object: Partial<_157.ModuleBalanceResponse>): _157.ModuleBalanceResponse;
            fromAmino(object: _157.ModuleBalanceResponseAmino): _157.ModuleBalanceResponse;
            toAmino(message: _157.ModuleBalanceResponse): _157.ModuleBalanceResponseAmino;
        };
        ModuleLockedAmountRequest: {
            encode(_: _157.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ModuleLockedAmountRequest;
            fromJSON(_: any): _157.ModuleLockedAmountRequest;
            toJSON(_: _157.ModuleLockedAmountRequest): unknown;
            fromPartial(_: Partial<_157.ModuleLockedAmountRequest>): _157.ModuleLockedAmountRequest;
            fromAmino(_: _157.ModuleLockedAmountRequestAmino): _157.ModuleLockedAmountRequest;
            toAmino(_: _157.ModuleLockedAmountRequest): _157.ModuleLockedAmountRequestAmino;
        };
        ModuleLockedAmountResponse: {
            encode(message: _157.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ModuleLockedAmountResponse;
            fromJSON(object: any): _157.ModuleLockedAmountResponse;
            toJSON(message: _157.ModuleLockedAmountResponse): unknown;
            fromPartial(object: Partial<_157.ModuleLockedAmountResponse>): _157.ModuleLockedAmountResponse;
            fromAmino(object: _157.ModuleLockedAmountResponseAmino): _157.ModuleLockedAmountResponse;
            toAmino(message: _157.ModuleLockedAmountResponse): _157.ModuleLockedAmountResponseAmino;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _157.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _157.AccountUnlockableCoinsRequest;
            toJSON(message: _157.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: Partial<_157.AccountUnlockableCoinsRequest>): _157.AccountUnlockableCoinsRequest;
            fromAmino(object: _157.AccountUnlockableCoinsRequestAmino): _157.AccountUnlockableCoinsRequest;
            toAmino(message: _157.AccountUnlockableCoinsRequest): _157.AccountUnlockableCoinsRequestAmino;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _157.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _157.AccountUnlockableCoinsResponse;
            toJSON(message: _157.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: Partial<_157.AccountUnlockableCoinsResponse>): _157.AccountUnlockableCoinsResponse;
            fromAmino(object: _157.AccountUnlockableCoinsResponseAmino): _157.AccountUnlockableCoinsResponse;
            toAmino(message: _157.AccountUnlockableCoinsResponse): _157.AccountUnlockableCoinsResponseAmino;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _157.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _157.AccountUnlockingCoinsRequest;
            toJSON(message: _157.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: Partial<_157.AccountUnlockingCoinsRequest>): _157.AccountUnlockingCoinsRequest;
            fromAmino(object: _157.AccountUnlockingCoinsRequestAmino): _157.AccountUnlockingCoinsRequest;
            toAmino(message: _157.AccountUnlockingCoinsRequest): _157.AccountUnlockingCoinsRequestAmino;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _157.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _157.AccountUnlockingCoinsResponse;
            toJSON(message: _157.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: Partial<_157.AccountUnlockingCoinsResponse>): _157.AccountUnlockingCoinsResponse;
            fromAmino(object: _157.AccountUnlockingCoinsResponseAmino): _157.AccountUnlockingCoinsResponse;
            toAmino(message: _157.AccountUnlockingCoinsResponse): _157.AccountUnlockingCoinsResponseAmino;
        };
        AccountLockedCoinsRequest: {
            encode(message: _157.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedCoinsRequest;
            fromJSON(object: any): _157.AccountLockedCoinsRequest;
            toJSON(message: _157.AccountLockedCoinsRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedCoinsRequest>): _157.AccountLockedCoinsRequest;
            fromAmino(object: _157.AccountLockedCoinsRequestAmino): _157.AccountLockedCoinsRequest;
            toAmino(message: _157.AccountLockedCoinsRequest): _157.AccountLockedCoinsRequestAmino;
        };
        AccountLockedCoinsResponse: {
            encode(message: _157.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedCoinsResponse;
            fromJSON(object: any): _157.AccountLockedCoinsResponse;
            toJSON(message: _157.AccountLockedCoinsResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedCoinsResponse>): _157.AccountLockedCoinsResponse;
            fromAmino(object: _157.AccountLockedCoinsResponseAmino): _157.AccountLockedCoinsResponse;
            toAmino(message: _157.AccountLockedCoinsResponse): _157.AccountLockedCoinsResponseAmino;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _157.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeRequest;
            fromJSON(object: any): _157.AccountLockedPastTimeRequest;
            toJSON(message: _157.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeRequest>): _157.AccountLockedPastTimeRequest;
            fromAmino(object: _157.AccountLockedPastTimeRequestAmino): _157.AccountLockedPastTimeRequest;
            toAmino(message: _157.AccountLockedPastTimeRequest): _157.AccountLockedPastTimeRequestAmino;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _157.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeResponse;
            fromJSON(object: any): _157.AccountLockedPastTimeResponse;
            toJSON(message: _157.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeResponse>): _157.AccountLockedPastTimeResponse;
            fromAmino(object: _157.AccountLockedPastTimeResponseAmino): _157.AccountLockedPastTimeResponse;
            toAmino(message: _157.AccountLockedPastTimeResponse): _157.AccountLockedPastTimeResponseAmino;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _157.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _157.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _157.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeNotUnlockingOnlyRequest>): _157.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _157.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _157.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _157.AccountLockedPastTimeNotUnlockingOnlyRequest): _157.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _157.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _157.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _157.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeNotUnlockingOnlyResponse>): _157.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _157.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _157.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _157.AccountLockedPastTimeNotUnlockingOnlyResponse): _157.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _157.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _157.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _157.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: Partial<_157.AccountUnlockedBeforeTimeRequest>): _157.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _157.AccountUnlockedBeforeTimeRequestAmino): _157.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _157.AccountUnlockedBeforeTimeRequest): _157.AccountUnlockedBeforeTimeRequestAmino;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _157.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _157.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _157.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: Partial<_157.AccountUnlockedBeforeTimeResponse>): _157.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _157.AccountUnlockedBeforeTimeResponseAmino): _157.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _157.AccountUnlockedBeforeTimeResponse): _157.AccountUnlockedBeforeTimeResponseAmino;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _157.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _157.AccountLockedPastTimeDenomRequest;
            toJSON(message: _157.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeDenomRequest>): _157.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _157.AccountLockedPastTimeDenomRequestAmino): _157.AccountLockedPastTimeDenomRequest;
            toAmino(message: _157.AccountLockedPastTimeDenomRequest): _157.AccountLockedPastTimeDenomRequestAmino;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _157.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _157.AccountLockedPastTimeDenomResponse;
            toJSON(message: _157.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedPastTimeDenomResponse>): _157.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _157.AccountLockedPastTimeDenomResponseAmino): _157.AccountLockedPastTimeDenomResponse;
            toAmino(message: _157.AccountLockedPastTimeDenomResponse): _157.AccountLockedPastTimeDenomResponseAmino;
        };
        LockedDenomRequest: {
            encode(message: _157.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockedDenomRequest;
            fromJSON(object: any): _157.LockedDenomRequest;
            toJSON(message: _157.LockedDenomRequest): unknown;
            fromPartial(object: Partial<_157.LockedDenomRequest>): _157.LockedDenomRequest;
            fromAmino(object: _157.LockedDenomRequestAmino): _157.LockedDenomRequest;
            toAmino(message: _157.LockedDenomRequest): _157.LockedDenomRequestAmino;
        };
        LockedDenomResponse: {
            encode(message: _157.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockedDenomResponse;
            fromJSON(object: any): _157.LockedDenomResponse;
            toJSON(message: _157.LockedDenomResponse): unknown;
            fromPartial(object: Partial<_157.LockedDenomResponse>): _157.LockedDenomResponse;
            fromAmino(object: _157.LockedDenomResponseAmino): _157.LockedDenomResponse;
            toAmino(message: _157.LockedDenomResponse): _157.LockedDenomResponseAmino;
        };
        LockedRequest: {
            encode(message: _157.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockedRequest;
            fromJSON(object: any): _157.LockedRequest;
            toJSON(message: _157.LockedRequest): unknown;
            fromPartial(object: Partial<_157.LockedRequest>): _157.LockedRequest;
            fromAmino(object: _157.LockedRequestAmino): _157.LockedRequest;
            toAmino(message: _157.LockedRequest): _157.LockedRequestAmino;
        };
        LockedResponse: {
            encode(message: _157.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockedResponse;
            fromJSON(object: any): _157.LockedResponse;
            toJSON(message: _157.LockedResponse): unknown;
            fromPartial(object: Partial<_157.LockedResponse>): _157.LockedResponse;
            fromAmino(object: _157.LockedResponseAmino): _157.LockedResponse;
            toAmino(message: _157.LockedResponse): _157.LockedResponseAmino;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _157.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _157.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _157.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: Partial<_157.SyntheticLockupsByLockupIDRequest>): _157.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _157.SyntheticLockupsByLockupIDRequestAmino): _157.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _157.SyntheticLockupsByLockupIDRequest): _157.SyntheticLockupsByLockupIDRequestAmino;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _157.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _157.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _157.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: Partial<_157.SyntheticLockupsByLockupIDResponse>): _157.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _157.SyntheticLockupsByLockupIDResponseAmino): _157.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _157.SyntheticLockupsByLockupIDResponse): _157.SyntheticLockupsByLockupIDResponseAmino;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _157.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _157.AccountLockedLongerDurationRequest;
            toJSON(message: _157.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationRequest>): _157.AccountLockedLongerDurationRequest;
            fromAmino(object: _157.AccountLockedLongerDurationRequestAmino): _157.AccountLockedLongerDurationRequest;
            toAmino(message: _157.AccountLockedLongerDurationRequest): _157.AccountLockedLongerDurationRequestAmino;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _157.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _157.AccountLockedLongerDurationResponse;
            toJSON(message: _157.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationResponse>): _157.AccountLockedLongerDurationResponse;
            fromAmino(object: _157.AccountLockedLongerDurationResponseAmino): _157.AccountLockedLongerDurationResponse;
            toAmino(message: _157.AccountLockedLongerDurationResponse): _157.AccountLockedLongerDurationResponseAmino;
        };
        AccountLockedDurationRequest: {
            encode(message: _157.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedDurationRequest;
            fromJSON(object: any): _157.AccountLockedDurationRequest;
            toJSON(message: _157.AccountLockedDurationRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedDurationRequest>): _157.AccountLockedDurationRequest;
            fromAmino(object: _157.AccountLockedDurationRequestAmino): _157.AccountLockedDurationRequest;
            toAmino(message: _157.AccountLockedDurationRequest): _157.AccountLockedDurationRequestAmino;
        };
        AccountLockedDurationResponse: {
            encode(message: _157.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedDurationResponse;
            fromJSON(object: any): _157.AccountLockedDurationResponse;
            toJSON(message: _157.AccountLockedDurationResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedDurationResponse>): _157.AccountLockedDurationResponse;
            fromAmino(object: _157.AccountLockedDurationResponseAmino): _157.AccountLockedDurationResponse;
            toAmino(message: _157.AccountLockedDurationResponse): _157.AccountLockedDurationResponseAmino;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _157.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _157.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _157.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _157.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _157.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _157.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _157.AccountLockedLongerDurationNotUnlockingOnlyRequest): _157.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _157.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _157.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _157.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _157.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _157.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _157.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _157.AccountLockedLongerDurationNotUnlockingOnlyResponse): _157.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _157.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _157.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _157.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationDenomRequest>): _157.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _157.AccountLockedLongerDurationDenomRequestAmino): _157.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _157.AccountLockedLongerDurationDenomRequest): _157.AccountLockedLongerDurationDenomRequestAmino;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _157.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _157.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _157.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: Partial<_157.AccountLockedLongerDurationDenomResponse>): _157.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _157.AccountLockedLongerDurationDenomResponseAmino): _157.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _157.AccountLockedLongerDurationDenomResponse): _157.AccountLockedLongerDurationDenomResponseAmino;
        };
        QueryParamsRequest: {
            encode(_: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsRequest;
            fromJSON(_: any): _157.QueryParamsRequest;
            toJSON(_: _157.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
            fromAmino(_: _157.QueryParamsRequestAmino): _157.QueryParamsRequest;
            toAmino(_: _157.QueryParamsRequest): _157.QueryParamsRequestAmino;
        };
        QueryParamsResponse: {
            encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsResponse;
            fromJSON(object: any): _157.QueryParamsResponse;
            toJSON(message: _157.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
            fromAmino(object: _157.QueryParamsResponseAmino): _157.QueryParamsResponse;
            toAmino(message: _157.QueryParamsResponse): _157.QueryParamsResponseAmino;
        };
        Params: {
            encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
            fromJSON(object: any): _156.Params;
            toJSON(message: _156.Params): unknown;
            fromPartial(object: Partial<_156.Params>): _156.Params;
            fromAmino(object: _156.ParamsAmino): _156.Params;
            toAmino(message: _156.Params): _156.ParamsAmino;
        };
        lockQueryTypeFromJSON(object: any): _155.LockQueryType;
        lockQueryTypeToJSON(object: _155.LockQueryType): string;
        LockQueryType: typeof _155.LockQueryType;
        LockQueryTypeSDKType: typeof _155.LockQueryType;
        LockQueryTypeAmino: typeof _155.LockQueryType;
        PeriodLock: {
            encode(message: _155.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.PeriodLock;
            fromJSON(object: any): _155.PeriodLock;
            toJSON(message: _155.PeriodLock): unknown;
            fromPartial(object: Partial<_155.PeriodLock>): _155.PeriodLock;
            fromAmino(object: _155.PeriodLockAmino): _155.PeriodLock;
            toAmino(message: _155.PeriodLock): _155.PeriodLockAmino;
        };
        QueryCondition: {
            encode(message: _155.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryCondition;
            fromJSON(object: any): _155.QueryCondition;
            toJSON(message: _155.QueryCondition): unknown;
            fromPartial(object: Partial<_155.QueryCondition>): _155.QueryCondition;
            fromAmino(object: _155.QueryConditionAmino): _155.QueryCondition;
            toAmino(message: _155.QueryCondition): _155.QueryConditionAmino;
        };
        SyntheticLock: {
            encode(message: _155.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SyntheticLock;
            fromJSON(object: any): _155.SyntheticLock;
            toJSON(message: _155.SyntheticLock): unknown;
            fromPartial(object: Partial<_155.SyntheticLock>): _155.SyntheticLock;
            fromAmino(object: _155.SyntheticLockAmino): _155.SyntheticLock;
            toAmino(message: _155.SyntheticLock): _155.SyntheticLockAmino;
        };
        GenesisState: {
            encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
            fromJSON(object: any): _154.GenesisState;
            toJSON(message: _154.GenesisState): unknown;
            fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
            fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
            toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                epochProvisions(request?: _161.QueryEpochProvisionsRequest): Promise<_161.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _161.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsRequest;
                fromJSON(_: any): _161.QueryParamsRequest;
                toJSON(_: _161.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
                fromAmino(_: _161.QueryParamsRequestAmino): _161.QueryParamsRequest;
                toAmino(_: _161.QueryParamsRequest): _161.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _161.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsResponse;
                fromJSON(object: any): _161.QueryParamsResponse;
                toJSON(message: _161.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
                fromAmino(object: _161.QueryParamsResponseAmino): _161.QueryParamsResponse;
                toAmino(message: _161.QueryParamsResponse): _161.QueryParamsResponseAmino;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _161.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEpochProvisionsRequest;
                fromJSON(_: any): _161.QueryEpochProvisionsRequest;
                toJSON(_: _161.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_161.QueryEpochProvisionsRequest>): _161.QueryEpochProvisionsRequest;
                fromAmino(_: _161.QueryEpochProvisionsRequestAmino): _161.QueryEpochProvisionsRequest;
                toAmino(_: _161.QueryEpochProvisionsRequest): _161.QueryEpochProvisionsRequestAmino;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _161.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryEpochProvisionsResponse;
                fromJSON(object: any): _161.QueryEpochProvisionsResponse;
                toJSON(message: _161.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_161.QueryEpochProvisionsResponse>): _161.QueryEpochProvisionsResponse;
                fromAmino(object: _161.QueryEpochProvisionsResponseAmino): _161.QueryEpochProvisionsResponse;
                toAmino(message: _161.QueryEpochProvisionsResponse): _161.QueryEpochProvisionsResponseAmino;
            };
            Minter: {
                encode(message: _160.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Minter;
                fromJSON(object: any): _160.Minter;
                toJSON(message: _160.Minter): unknown;
                fromPartial(object: Partial<_160.Minter>): _160.Minter;
                fromAmino(object: _160.MinterAmino): _160.Minter;
                toAmino(message: _160.Minter): _160.MinterAmino;
            };
            WeightedAddress: {
                encode(message: _160.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.WeightedAddress;
                fromJSON(object: any): _160.WeightedAddress;
                toJSON(message: _160.WeightedAddress): unknown;
                fromPartial(object: Partial<_160.WeightedAddress>): _160.WeightedAddress;
                fromAmino(object: _160.WeightedAddressAmino): _160.WeightedAddress;
                toAmino(message: _160.WeightedAddress): _160.WeightedAddressAmino;
            };
            DistributionProportions: {
                encode(message: _160.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.DistributionProportions;
                fromJSON(object: any): _160.DistributionProportions;
                toJSON(message: _160.DistributionProportions): unknown;
                fromPartial(object: Partial<_160.DistributionProportions>): _160.DistributionProportions;
                fromAmino(object: _160.DistributionProportionsAmino): _160.DistributionProportions;
                toAmino(message: _160.DistributionProportions): _160.DistributionProportionsAmino;
            };
            Params: {
                encode(message: _160.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Params;
                fromJSON(object: any): _160.Params;
                toJSON(message: _160.Params): unknown;
                fromPartial(object: Partial<_160.Params>): _160.Params;
                fromAmino(object: _160.ParamsAmino): _160.Params;
                toAmino(message: _160.Params): _160.ParamsAmino;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromJSON(object: any): _159.GenesisState;
                toJSON(message: _159.GenesisState): unknown;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
                fromAmino(object: _159.GenesisStateAmino): _159.GenesisState;
                toAmino(message: _159.GenesisState): _159.GenesisStateAmino;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _165.QueryGaugeIdsRequest): Promise<_165.QueryGaugeIdsResponse>;
                distrInfo(request?: _165.QueryDistrInfoRequest): Promise<_165.QueryDistrInfoResponse>;
                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                lockableDurations(request?: _165.QueryLockableDurationsRequest): Promise<_165.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _165.QueryIncentivizedPoolsRequest): Promise<_165.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _165.QueryExternalIncentiveGaugesRequest): Promise<_165.QueryExternalIncentiveGaugesResponse>;
            };
            QueryGaugeIdsRequest: {
                encode(message: _165.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGaugeIdsRequest;
                fromJSON(object: any): _165.QueryGaugeIdsRequest;
                toJSON(message: _165.QueryGaugeIdsRequest): unknown;
                fromPartial(object: Partial<_165.QueryGaugeIdsRequest>): _165.QueryGaugeIdsRequest;
                fromAmino(object: _165.QueryGaugeIdsRequestAmino): _165.QueryGaugeIdsRequest;
                toAmino(message: _165.QueryGaugeIdsRequest): _165.QueryGaugeIdsRequestAmino;
            };
            QueryGaugeIdsResponse: {
                encode(message: _165.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGaugeIdsResponse;
                fromJSON(object: any): _165.QueryGaugeIdsResponse;
                toJSON(message: _165.QueryGaugeIdsResponse): unknown;
                fromPartial(object: Partial<_165.QueryGaugeIdsResponse>): _165.QueryGaugeIdsResponse;
                fromAmino(object: _165.QueryGaugeIdsResponseAmino): _165.QueryGaugeIdsResponse;
                toAmino(message: _165.QueryGaugeIdsResponse): _165.QueryGaugeIdsResponseAmino;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _165.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _165.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _165.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: Partial<_165.QueryGaugeIdsResponse_GaugeIdWithDuration>): _165.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _165.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _165.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _165.QueryGaugeIdsResponse_GaugeIdWithDuration): _165.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
            };
            QueryDistrInfoRequest: {
                encode(_: _165.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDistrInfoRequest;
                fromJSON(_: any): _165.QueryDistrInfoRequest;
                toJSON(_: _165.QueryDistrInfoRequest): unknown;
                fromPartial(_: Partial<_165.QueryDistrInfoRequest>): _165.QueryDistrInfoRequest;
                fromAmino(_: _165.QueryDistrInfoRequestAmino): _165.QueryDistrInfoRequest;
                toAmino(_: _165.QueryDistrInfoRequest): _165.QueryDistrInfoRequestAmino;
            };
            QueryDistrInfoResponse: {
                encode(message: _165.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDistrInfoResponse;
                fromJSON(object: any): _165.QueryDistrInfoResponse;
                toJSON(message: _165.QueryDistrInfoResponse): unknown;
                fromPartial(object: Partial<_165.QueryDistrInfoResponse>): _165.QueryDistrInfoResponse;
                fromAmino(object: _165.QueryDistrInfoResponseAmino): _165.QueryDistrInfoResponse;
                toAmino(message: _165.QueryDistrInfoResponse): _165.QueryDistrInfoResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _165.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsRequest;
                fromJSON(_: any): _165.QueryParamsRequest;
                toJSON(_: _165.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                fromAmino(_: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                toAmino(_: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _165.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsResponse;
                fromJSON(object: any): _165.QueryParamsResponse;
                toJSON(message: _165.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
            };
            QueryLockableDurationsRequest: {
                encode(_: _165.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryLockableDurationsRequest;
                fromJSON(_: any): _165.QueryLockableDurationsRequest;
                toJSON(_: _165.QueryLockableDurationsRequest): unknown;
                fromPartial(_: Partial<_165.QueryLockableDurationsRequest>): _165.QueryLockableDurationsRequest;
                fromAmino(_: _165.QueryLockableDurationsRequestAmino): _165.QueryLockableDurationsRequest;
                toAmino(_: _165.QueryLockableDurationsRequest): _165.QueryLockableDurationsRequestAmino;
            };
            QueryLockableDurationsResponse: {
                encode(message: _165.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryLockableDurationsResponse;
                fromJSON(object: any): _165.QueryLockableDurationsResponse;
                toJSON(message: _165.QueryLockableDurationsResponse): unknown;
                fromPartial(object: Partial<_165.QueryLockableDurationsResponse>): _165.QueryLockableDurationsResponse;
                fromAmino(object: _165.QueryLockableDurationsResponseAmino): _165.QueryLockableDurationsResponse;
                toAmino(message: _165.QueryLockableDurationsResponse): _165.QueryLockableDurationsResponseAmino;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _165.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _165.QueryIncentivizedPoolsRequest;
                toJSON(_: _165.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: Partial<_165.QueryIncentivizedPoolsRequest>): _165.QueryIncentivizedPoolsRequest;
                fromAmino(_: _165.QueryIncentivizedPoolsRequestAmino): _165.QueryIncentivizedPoolsRequest;
                toAmino(_: _165.QueryIncentivizedPoolsRequest): _165.QueryIncentivizedPoolsRequestAmino;
            };
            IncentivizedPool: {
                encode(message: _165.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.IncentivizedPool;
                fromJSON(object: any): _165.IncentivizedPool;
                toJSON(message: _165.IncentivizedPool): unknown;
                fromPartial(object: Partial<_165.IncentivizedPool>): _165.IncentivizedPool;
                fromAmino(object: _165.IncentivizedPoolAmino): _165.IncentivizedPool;
                toAmino(message: _165.IncentivizedPool): _165.IncentivizedPoolAmino;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _165.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _165.QueryIncentivizedPoolsResponse;
                toJSON(message: _165.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: Partial<_165.QueryIncentivizedPoolsResponse>): _165.QueryIncentivizedPoolsResponse;
                fromAmino(object: _165.QueryIncentivizedPoolsResponseAmino): _165.QueryIncentivizedPoolsResponse;
                toAmino(message: _165.QueryIncentivizedPoolsResponse): _165.QueryIncentivizedPoolsResponseAmino;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _165.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _165.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _165.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: Partial<_165.QueryExternalIncentiveGaugesRequest>): _165.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _165.QueryExternalIncentiveGaugesRequestAmino): _165.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _165.QueryExternalIncentiveGaugesRequest): _165.QueryExternalIncentiveGaugesRequestAmino;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _165.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _165.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _165.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: Partial<_165.QueryExternalIncentiveGaugesResponse>): _165.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _165.QueryExternalIncentiveGaugesResponseAmino): _165.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _165.QueryExternalIncentiveGaugesResponse): _165.QueryExternalIncentiveGaugesResponseAmino;
            };
            Params: {
                encode(message: _164.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Params;
                fromJSON(object: any): _164.Params;
                toJSON(message: _164.Params): unknown;
                fromPartial(object: Partial<_164.Params>): _164.Params;
                fromAmino(object: _164.ParamsAmino): _164.Params;
                toAmino(message: _164.Params): _164.ParamsAmino;
            };
            LockableDurationsInfo: {
                encode(message: _164.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.LockableDurationsInfo;
                fromJSON(object: any): _164.LockableDurationsInfo;
                toJSON(message: _164.LockableDurationsInfo): unknown;
                fromPartial(object: Partial<_164.LockableDurationsInfo>): _164.LockableDurationsInfo;
                fromAmino(object: _164.LockableDurationsInfoAmino): _164.LockableDurationsInfo;
                toAmino(message: _164.LockableDurationsInfo): _164.LockableDurationsInfoAmino;
            };
            DistrInfo: {
                encode(message: _164.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.DistrInfo;
                fromJSON(object: any): _164.DistrInfo;
                toJSON(message: _164.DistrInfo): unknown;
                fromPartial(object: Partial<_164.DistrInfo>): _164.DistrInfo;
                fromAmino(object: _164.DistrInfoAmino): _164.DistrInfo;
                toAmino(message: _164.DistrInfo): _164.DistrInfoAmino;
            };
            DistrRecord: {
                encode(message: _164.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.DistrRecord;
                fromJSON(object: any): _164.DistrRecord;
                toJSON(message: _164.DistrRecord): unknown;
                fromPartial(object: Partial<_164.DistrRecord>): _164.DistrRecord;
                fromAmino(object: _164.DistrRecordAmino): _164.DistrRecord;
                toAmino(message: _164.DistrRecord): _164.DistrRecordAmino;
            };
            PoolToGauge: {
                encode(message: _164.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.PoolToGauge;
                fromJSON(object: any): _164.PoolToGauge;
                toJSON(message: _164.PoolToGauge): unknown;
                fromPartial(object: Partial<_164.PoolToGauge>): _164.PoolToGauge;
                fromAmino(object: _164.PoolToGaugeAmino): _164.PoolToGauge;
                toAmino(message: _164.PoolToGauge): _164.PoolToGaugeAmino;
            };
            PoolToGauges: {
                encode(message: _164.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.PoolToGauges;
                fromJSON(object: any): _164.PoolToGauges;
                toJSON(message: _164.PoolToGauges): unknown;
                fromPartial(object: Partial<_164.PoolToGauges>): _164.PoolToGauges;
                fromAmino(object: _164.PoolToGaugesAmino): _164.PoolToGauges;
                toAmino(message: _164.PoolToGauges): _164.PoolToGaugesAmino;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _163.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _163.ReplacePoolIncentivesProposal;
                toJSON(message: _163.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_163.ReplacePoolIncentivesProposal>): _163.ReplacePoolIncentivesProposal;
                fromAmino(object: _163.ReplacePoolIncentivesProposalAmino): _163.ReplacePoolIncentivesProposal;
                toAmino(message: _163.ReplacePoolIncentivesProposal): _163.ReplacePoolIncentivesProposalAmino;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _163.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _163.UpdatePoolIncentivesProposal;
                toJSON(message: _163.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_163.UpdatePoolIncentivesProposal>): _163.UpdatePoolIncentivesProposal;
                fromAmino(object: _163.UpdatePoolIncentivesProposalAmino): _163.UpdatePoolIncentivesProposal;
                toAmino(message: _163.UpdatePoolIncentivesProposal): _163.UpdatePoolIncentivesProposalAmino;
            };
            GenesisState: {
                encode(message: _162.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenesisState;
                fromJSON(object: any): _162.GenesisState;
                toJSON(message: _162.GenesisState): unknown;
                fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
                toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _319.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _170.QueryGetProtoRevNumberOfTradesRequest): Promise<_170.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _170.QueryGetProtoRevProfitsByDenomRequest): Promise<_170.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _170.QueryGetProtoRevAllProfitsRequest): Promise<_170.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByPool(request: _170.QueryGetProtoRevStatisticsByPoolRequest): Promise<_170.QueryGetProtoRevStatisticsByPoolResponse>;
                getProtoRevAllStatistics(request?: _170.QueryGetProtoRevAllStatisticsRequest): Promise<_170.QueryGetProtoRevAllStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _170.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_170.QueryGetProtoRevTokenPairArbRoutesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _171.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _171.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _171.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _171.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _171.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _171.MsgSetDeveloperAccount;
                    };
                };
                toJSON: {
                    setHotRoutes(value: _171.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDeveloperAccount(value: _171.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _171.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _171.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _171.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _171.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _171.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _171.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _171.MsgSetHotRoutes) => _171.MsgSetHotRoutesAmino;
                    fromAmino: (object: _171.MsgSetHotRoutesAmino) => _171.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _171.MsgSetDeveloperAccount) => _171.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _171.MsgSetDeveloperAccountAmino) => _171.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _171.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSetHotRoutes;
                fromJSON(object: any): _171.MsgSetHotRoutes;
                toJSON(message: _171.MsgSetHotRoutes): unknown;
                fromPartial(object: Partial<_171.MsgSetHotRoutes>): _171.MsgSetHotRoutes;
                fromAmino(object: _171.MsgSetHotRoutesAmino): _171.MsgSetHotRoutes;
                toAmino(message: _171.MsgSetHotRoutes): _171.MsgSetHotRoutesAmino;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _171.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSetHotRoutesResponse;
                fromJSON(_: any): _171.MsgSetHotRoutesResponse;
                toJSON(_: _171.MsgSetHotRoutesResponse): unknown;
                fromPartial(_: Partial<_171.MsgSetHotRoutesResponse>): _171.MsgSetHotRoutesResponse;
                fromAmino(_: _171.MsgSetHotRoutesResponseAmino): _171.MsgSetHotRoutesResponse;
                toAmino(_: _171.MsgSetHotRoutesResponse): _171.MsgSetHotRoutesResponseAmino;
            };
            MsgSetDeveloperAccount: {
                encode(message: _171.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSetDeveloperAccount;
                fromJSON(object: any): _171.MsgSetDeveloperAccount;
                toJSON(message: _171.MsgSetDeveloperAccount): unknown;
                fromPartial(object: Partial<_171.MsgSetDeveloperAccount>): _171.MsgSetDeveloperAccount;
                fromAmino(object: _171.MsgSetDeveloperAccountAmino): _171.MsgSetDeveloperAccount;
                toAmino(message: _171.MsgSetDeveloperAccount): _171.MsgSetDeveloperAccountAmino;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _171.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSetDeveloperAccountResponse;
                fromJSON(_: any): _171.MsgSetDeveloperAccountResponse;
                toJSON(_: _171.MsgSetDeveloperAccountResponse): unknown;
                fromPartial(_: Partial<_171.MsgSetDeveloperAccountResponse>): _171.MsgSetDeveloperAccountResponse;
                fromAmino(_: _171.MsgSetDeveloperAccountResponseAmino): _171.MsgSetDeveloperAccountResponse;
                toAmino(_: _171.MsgSetDeveloperAccountResponse): _171.MsgSetDeveloperAccountResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _170.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsRequest;
                fromJSON(_: any): _170.QueryParamsRequest;
                toJSON(_: _170.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_170.QueryParamsRequest>): _170.QueryParamsRequest;
                fromAmino(_: _170.QueryParamsRequestAmino): _170.QueryParamsRequest;
                toAmino(_: _170.QueryParamsRequest): _170.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _170.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsResponse;
                fromJSON(object: any): _170.QueryParamsResponse;
                toJSON(message: _170.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_170.QueryParamsResponse>): _170.QueryParamsResponse;
                fromAmino(object: _170.QueryParamsResponseAmino): _170.QueryParamsResponse;
                toAmino(message: _170.QueryParamsResponse): _170.QueryParamsResponseAmino;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _170.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevNumberOfTradesRequest;
                fromJSON(_: any): _170.QueryGetProtoRevNumberOfTradesRequest;
                toJSON(_: _170.QueryGetProtoRevNumberOfTradesRequest): unknown;
                fromPartial(_: Partial<_170.QueryGetProtoRevNumberOfTradesRequest>): _170.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _170.QueryGetProtoRevNumberOfTradesRequestAmino): _170.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _170.QueryGetProtoRevNumberOfTradesRequest): _170.QueryGetProtoRevNumberOfTradesRequestAmino;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _170.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevNumberOfTradesResponse;
                fromJSON(object: any): _170.QueryGetProtoRevNumberOfTradesResponse;
                toJSON(message: _170.QueryGetProtoRevNumberOfTradesResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevNumberOfTradesResponse>): _170.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _170.QueryGetProtoRevNumberOfTradesResponseAmino): _170.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _170.QueryGetProtoRevNumberOfTradesResponse): _170.QueryGetProtoRevNumberOfTradesResponseAmino;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _170.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevProfitsByDenomRequest;
                fromJSON(object: any): _170.QueryGetProtoRevProfitsByDenomRequest;
                toJSON(message: _170.QueryGetProtoRevProfitsByDenomRequest): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevProfitsByDenomRequest>): _170.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _170.QueryGetProtoRevProfitsByDenomRequestAmino): _170.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _170.QueryGetProtoRevProfitsByDenomRequest): _170.QueryGetProtoRevProfitsByDenomRequestAmino;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _170.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevProfitsByDenomResponse;
                fromJSON(object: any): _170.QueryGetProtoRevProfitsByDenomResponse;
                toJSON(message: _170.QueryGetProtoRevProfitsByDenomResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevProfitsByDenomResponse>): _170.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _170.QueryGetProtoRevProfitsByDenomResponseAmino): _170.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _170.QueryGetProtoRevProfitsByDenomResponse): _170.QueryGetProtoRevProfitsByDenomResponseAmino;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _170.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevAllProfitsRequest;
                fromJSON(_: any): _170.QueryGetProtoRevAllProfitsRequest;
                toJSON(_: _170.QueryGetProtoRevAllProfitsRequest): unknown;
                fromPartial(_: Partial<_170.QueryGetProtoRevAllProfitsRequest>): _170.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _170.QueryGetProtoRevAllProfitsRequestAmino): _170.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _170.QueryGetProtoRevAllProfitsRequest): _170.QueryGetProtoRevAllProfitsRequestAmino;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _170.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevAllProfitsResponse;
                fromJSON(object: any): _170.QueryGetProtoRevAllProfitsResponse;
                toJSON(message: _170.QueryGetProtoRevAllProfitsResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevAllProfitsResponse>): _170.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _170.QueryGetProtoRevAllProfitsResponseAmino): _170.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _170.QueryGetProtoRevAllProfitsResponse): _170.QueryGetProtoRevAllProfitsResponseAmino;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                encode(message: _170.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevStatisticsByPoolRequest;
                fromJSON(object: any): _170.QueryGetProtoRevStatisticsByPoolRequest;
                toJSON(message: _170.QueryGetProtoRevStatisticsByPoolRequest): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevStatisticsByPoolRequest>): _170.QueryGetProtoRevStatisticsByPoolRequest;
                fromAmino(object: _170.QueryGetProtoRevStatisticsByPoolRequestAmino): _170.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _170.QueryGetProtoRevStatisticsByPoolRequest): _170.QueryGetProtoRevStatisticsByPoolRequestAmino;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                encode(message: _170.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevStatisticsByPoolResponse;
                fromJSON(object: any): _170.QueryGetProtoRevStatisticsByPoolResponse;
                toJSON(message: _170.QueryGetProtoRevStatisticsByPoolResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevStatisticsByPoolResponse>): _170.QueryGetProtoRevStatisticsByPoolResponse;
                fromAmino(object: _170.QueryGetProtoRevStatisticsByPoolResponseAmino): _170.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _170.QueryGetProtoRevStatisticsByPoolResponse): _170.QueryGetProtoRevStatisticsByPoolResponseAmino;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                encode(_: _170.QueryGetProtoRevAllStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevAllStatisticsRequest;
                fromJSON(_: any): _170.QueryGetProtoRevAllStatisticsRequest;
                toJSON(_: _170.QueryGetProtoRevAllStatisticsRequest): unknown;
                fromPartial(_: Partial<_170.QueryGetProtoRevAllStatisticsRequest>): _170.QueryGetProtoRevAllStatisticsRequest;
                fromAmino(_: _170.QueryGetProtoRevAllStatisticsRequestAmino): _170.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _170.QueryGetProtoRevAllStatisticsRequest): _170.QueryGetProtoRevAllStatisticsRequestAmino;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                encode(message: _170.QueryGetProtoRevAllStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevAllStatisticsResponse;
                fromJSON(object: any): _170.QueryGetProtoRevAllStatisticsResponse;
                toJSON(message: _170.QueryGetProtoRevAllStatisticsResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevAllStatisticsResponse>): _170.QueryGetProtoRevAllStatisticsResponse;
                fromAmino(object: _170.QueryGetProtoRevAllStatisticsResponseAmino): _170.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _170.QueryGetProtoRevAllStatisticsResponse): _170.QueryGetProtoRevAllStatisticsResponseAmino;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _170.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromJSON(_: any): _170.QueryGetProtoRevTokenPairArbRoutesRequest;
                toJSON(_: _170.QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
                fromPartial(_: Partial<_170.QueryGetProtoRevTokenPairArbRoutesRequest>): _170.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _170.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _170.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _170.QueryGetProtoRevTokenPairArbRoutesRequest): _170.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _170.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromJSON(object: any): _170.QueryGetProtoRevTokenPairArbRoutesResponse;
                toJSON(message: _170.QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
                fromPartial(object: Partial<_170.QueryGetProtoRevTokenPairArbRoutesResponse>): _170.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _170.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _170.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _170.QueryGetProtoRevTokenPairArbRoutesResponse): _170.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
            };
            TokenPairArbRoutes: {
                encode(message: _169.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.TokenPairArbRoutes;
                fromJSON(object: any): _169.TokenPairArbRoutes;
                toJSON(message: _169.TokenPairArbRoutes): unknown;
                fromPartial(object: Partial<_169.TokenPairArbRoutes>): _169.TokenPairArbRoutes;
                fromAmino(object: _169.TokenPairArbRoutesAmino): _169.TokenPairArbRoutes;
                toAmino(message: _169.TokenPairArbRoutes): _169.TokenPairArbRoutesAmino;
            };
            Route: {
                encode(message: _169.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Route;
                fromJSON(object: any): _169.Route;
                toJSON(message: _169.Route): unknown;
                fromPartial(object: Partial<_169.Route>): _169.Route;
                fromAmino(object: _169.RouteAmino): _169.Route;
                toAmino(message: _169.Route): _169.RouteAmino;
            };
            Trade: {
                encode(message: _169.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Trade;
                fromJSON(object: any): _169.Trade;
                toJSON(message: _169.Trade): unknown;
                fromPartial(object: Partial<_169.Trade>): _169.Trade;
                fromAmino(object: _169.TradeAmino): _169.Trade;
                toAmino(message: _169.Trade): _169.TradeAmino;
            };
            PoolStatistics: {
                encode(message: _169.PoolStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PoolStatistics;
                fromJSON(object: any): _169.PoolStatistics;
                toJSON(message: _169.PoolStatistics): unknown;
                fromPartial(object: Partial<_169.PoolStatistics>): _169.PoolStatistics;
                fromAmino(object: _169.PoolStatisticsAmino): _169.PoolStatistics;
                toAmino(message: _169.PoolStatistics): _169.PoolStatisticsAmino;
            };
            Params: {
                encode(message: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                fromJSON(object: any): _168.Params;
                toJSON(message: _168.Params): unknown;
                fromPartial(object: Partial<_168.Params>): _168.Params;
                fromAmino(object: _168.ParamsAmino): _168.Params;
                toAmino(message: _168.Params): _168.ParamsAmino;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _167.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.SetProtoRevEnabledProposal;
                fromJSON(object: any): _167.SetProtoRevEnabledProposal;
                toJSON(message: _167.SetProtoRevEnabledProposal): unknown;
                fromPartial(object: Partial<_167.SetProtoRevEnabledProposal>): _167.SetProtoRevEnabledProposal;
                fromAmino(object: _167.SetProtoRevEnabledProposalAmino): _167.SetProtoRevEnabledProposal;
                toAmino(message: _167.SetProtoRevEnabledProposal): _167.SetProtoRevEnabledProposalAmino;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _167.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.SetProtoRevAdminAccountProposal;
                fromJSON(object: any): _167.SetProtoRevAdminAccountProposal;
                toJSON(message: _167.SetProtoRevAdminAccountProposal): unknown;
                fromPartial(object: Partial<_167.SetProtoRevAdminAccountProposal>): _167.SetProtoRevAdminAccountProposal;
                fromAmino(object: _167.SetProtoRevAdminAccountProposalAmino): _167.SetProtoRevAdminAccountProposal;
                toAmino(message: _167.SetProtoRevAdminAccountProposal): _167.SetProtoRevAdminAccountProposalAmino;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromJSON(object: any): _166.GenesisState;
                toJSON(message: _166.GenesisState): unknown;
                fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
                fromAmino(object: _166.GenesisStateAmino): _166.GenesisState;
                toAmino(message: _166.GenesisState): _166.GenesisStateAmino;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _172.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Node;
                fromJSON(object: any): _172.Node;
                toJSON(message: _172.Node): unknown;
                fromPartial(object: Partial<_172.Node>): _172.Node;
                fromAmino(object: _172.NodeAmino): _172.Node;
                toAmino(message: _172.Node): _172.NodeAmino;
            };
            Child: {
                encode(message: _172.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Child;
                fromJSON(object: any): _172.Child;
                toJSON(message: _172.Child): unknown;
                fromPartial(object: Partial<_172.Child>): _172.Child;
                fromAmino(object: _172.ChildAmino): _172.Child;
                toAmino(message: _172.Child): _172.ChildAmino;
            };
            Leaf: {
                encode(message: _172.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Leaf;
                fromJSON(object: any): _172.Leaf;
                toJSON(message: _172.Leaf): unknown;
                fromPartial(object: Partial<_172.Leaf>): _172.Leaf;
                fromAmino(object: _172.LeafAmino): _172.Leaf;
                toAmino(message: _172.Leaf): _172.LeafAmino;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _332.MsgClientImpl;
        QueryClientImpl: typeof _320.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
            assetType(request: _175.AssetTypeRequest): Promise<_175.AssetTypeResponse>;
            allAssets(request?: _175.AllAssetsRequest): Promise<_175.AllAssetsResponse>;
            assetMultiplier(request: _175.AssetMultiplierRequest): Promise<_175.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _175.AllIntermediaryAccountsRequest): Promise<_175.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _175.ConnectedIntermediaryAccountRequest): Promise<_175.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _175.QueryTotalDelegationByValidatorForDenomRequest): Promise<_175.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _175.TotalSuperfluidDelegationsRequest): Promise<_175.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _175.SuperfluidDelegationAmountRequest): Promise<_175.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _175.SuperfluidDelegationsByDelegatorRequest): Promise<_175.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _175.SuperfluidUndelegationsByDelegatorRequest): Promise<_175.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _175.SuperfluidDelegationsByValidatorDenomRequest): Promise<_175.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _175.QueryTotalDelegationByDelegatorRequest): Promise<_175.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _175.QueryUnpoolWhitelistRequest): Promise<_175.QueryUnpoolWhitelistResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _177.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _177.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _177.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _177.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _177.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _177.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _177.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _177.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _177.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _177.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _177.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _177.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _177.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _177.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _177.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _177.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _177.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _177.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _177.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _177.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _177.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _177.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _177.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _177.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _177.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _177.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _177.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _177.MsgSuperfluidDelegate) => _177.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _177.MsgSuperfluidDelegateAmino) => _177.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _177.MsgSuperfluidUndelegate) => _177.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _177.MsgSuperfluidUndelegateAmino) => _177.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _177.MsgSuperfluidUnbondLock) => _177.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _177.MsgSuperfluidUnbondLockAmino) => _177.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _177.MsgLockAndSuperfluidDelegate) => _177.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _177.MsgLockAndSuperfluidDelegateAmino) => _177.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _177.MsgUnPoolWhitelistedPool) => _177.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _177.MsgUnPoolWhitelistedPoolAmino) => _177.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _177.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidDelegate;
            fromJSON(object: any): _177.MsgSuperfluidDelegate;
            toJSON(message: _177.MsgSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_177.MsgSuperfluidDelegate>): _177.MsgSuperfluidDelegate;
            fromAmino(object: _177.MsgSuperfluidDelegateAmino): _177.MsgSuperfluidDelegate;
            toAmino(message: _177.MsgSuperfluidDelegate): _177.MsgSuperfluidDelegateAmino;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _177.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _177.MsgSuperfluidDelegateResponse;
            toJSON(_: _177.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: Partial<_177.MsgSuperfluidDelegateResponse>): _177.MsgSuperfluidDelegateResponse;
            fromAmino(_: _177.MsgSuperfluidDelegateResponseAmino): _177.MsgSuperfluidDelegateResponse;
            toAmino(_: _177.MsgSuperfluidDelegateResponse): _177.MsgSuperfluidDelegateResponseAmino;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _177.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidUndelegate;
            fromJSON(object: any): _177.MsgSuperfluidUndelegate;
            toJSON(message: _177.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: Partial<_177.MsgSuperfluidUndelegate>): _177.MsgSuperfluidUndelegate;
            fromAmino(object: _177.MsgSuperfluidUndelegateAmino): _177.MsgSuperfluidUndelegate;
            toAmino(message: _177.MsgSuperfluidUndelegate): _177.MsgSuperfluidUndelegateAmino;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _177.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _177.MsgSuperfluidUndelegateResponse;
            toJSON(_: _177.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: Partial<_177.MsgSuperfluidUndelegateResponse>): _177.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _177.MsgSuperfluidUndelegateResponseAmino): _177.MsgSuperfluidUndelegateResponse;
            toAmino(_: _177.MsgSuperfluidUndelegateResponse): _177.MsgSuperfluidUndelegateResponseAmino;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _177.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _177.MsgSuperfluidUnbondLock;
            toJSON(message: _177.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: Partial<_177.MsgSuperfluidUnbondLock>): _177.MsgSuperfluidUnbondLock;
            fromAmino(object: _177.MsgSuperfluidUnbondLockAmino): _177.MsgSuperfluidUnbondLock;
            toAmino(message: _177.MsgSuperfluidUnbondLock): _177.MsgSuperfluidUnbondLockAmino;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _177.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _177.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _177.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: Partial<_177.MsgSuperfluidUnbondLockResponse>): _177.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _177.MsgSuperfluidUnbondLockResponseAmino): _177.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _177.MsgSuperfluidUnbondLockResponse): _177.MsgSuperfluidUnbondLockResponseAmino;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _177.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _177.MsgLockAndSuperfluidDelegate;
            toJSON(message: _177.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_177.MsgLockAndSuperfluidDelegate>): _177.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _177.MsgLockAndSuperfluidDelegateAmino): _177.MsgLockAndSuperfluidDelegate;
            toAmino(message: _177.MsgLockAndSuperfluidDelegate): _177.MsgLockAndSuperfluidDelegateAmino;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _177.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _177.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _177.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: Partial<_177.MsgLockAndSuperfluidDelegateResponse>): _177.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _177.MsgLockAndSuperfluidDelegateResponseAmino): _177.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _177.MsgLockAndSuperfluidDelegateResponse): _177.MsgLockAndSuperfluidDelegateResponseAmino;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _177.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _177.MsgUnPoolWhitelistedPool;
            toJSON(message: _177.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: Partial<_177.MsgUnPoolWhitelistedPool>): _177.MsgUnPoolWhitelistedPool;
            fromAmino(object: _177.MsgUnPoolWhitelistedPoolAmino): _177.MsgUnPoolWhitelistedPool;
            toAmino(message: _177.MsgUnPoolWhitelistedPool): _177.MsgUnPoolWhitelistedPoolAmino;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _177.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _177.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _177.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: Partial<_177.MsgUnPoolWhitelistedPoolResponse>): _177.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _177.MsgUnPoolWhitelistedPoolResponseAmino): _177.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _177.MsgUnPoolWhitelistedPoolResponse): _177.MsgUnPoolWhitelistedPoolResponseAmino;
        };
        superfluidAssetTypeFromJSON(object: any): _176.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _176.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _176.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _176.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _176.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _176.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SuperfluidAsset;
            fromJSON(object: any): _176.SuperfluidAsset;
            toJSON(message: _176.SuperfluidAsset): unknown;
            fromPartial(object: Partial<_176.SuperfluidAsset>): _176.SuperfluidAsset;
            fromAmino(object: _176.SuperfluidAssetAmino): _176.SuperfluidAsset;
            toAmino(message: _176.SuperfluidAsset): _176.SuperfluidAssetAmino;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _176.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _176.SuperfluidIntermediaryAccount;
            toJSON(message: _176.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: Partial<_176.SuperfluidIntermediaryAccount>): _176.SuperfluidIntermediaryAccount;
            fromAmino(object: _176.SuperfluidIntermediaryAccountAmino): _176.SuperfluidIntermediaryAccount;
            toAmino(message: _176.SuperfluidIntermediaryAccount): _176.SuperfluidIntermediaryAccountAmino;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _176.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _176.OsmoEquivalentMultiplierRecord;
            toJSON(message: _176.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: Partial<_176.OsmoEquivalentMultiplierRecord>): _176.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _176.OsmoEquivalentMultiplierRecordAmino): _176.OsmoEquivalentMultiplierRecord;
            toAmino(message: _176.OsmoEquivalentMultiplierRecord): _176.OsmoEquivalentMultiplierRecordAmino;
        };
        SuperfluidDelegationRecord: {
            encode(message: _176.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SuperfluidDelegationRecord;
            fromJSON(object: any): _176.SuperfluidDelegationRecord;
            toJSON(message: _176.SuperfluidDelegationRecord): unknown;
            fromPartial(object: Partial<_176.SuperfluidDelegationRecord>): _176.SuperfluidDelegationRecord;
            fromAmino(object: _176.SuperfluidDelegationRecordAmino): _176.SuperfluidDelegationRecord;
            toAmino(message: _176.SuperfluidDelegationRecord): _176.SuperfluidDelegationRecordAmino;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _176.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _176.LockIdIntermediaryAccountConnection;
            toJSON(message: _176.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: Partial<_176.LockIdIntermediaryAccountConnection>): _176.LockIdIntermediaryAccountConnection;
            fromAmino(object: _176.LockIdIntermediaryAccountConnectionAmino): _176.LockIdIntermediaryAccountConnection;
            toAmino(message: _176.LockIdIntermediaryAccountConnection): _176.LockIdIntermediaryAccountConnectionAmino;
        };
        UnpoolWhitelistedPools: {
            encode(message: _176.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.UnpoolWhitelistedPools;
            fromJSON(object: any): _176.UnpoolWhitelistedPools;
            toJSON(message: _176.UnpoolWhitelistedPools): unknown;
            fromPartial(object: Partial<_176.UnpoolWhitelistedPools>): _176.UnpoolWhitelistedPools;
            fromAmino(object: _176.UnpoolWhitelistedPoolsAmino): _176.UnpoolWhitelistedPools;
            toAmino(message: _176.UnpoolWhitelistedPools): _176.UnpoolWhitelistedPoolsAmino;
        };
        QueryParamsRequest: {
            encode(_: _175.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsRequest;
            fromJSON(_: any): _175.QueryParamsRequest;
            toJSON(_: _175.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_175.QueryParamsRequest>): _175.QueryParamsRequest;
            fromAmino(_: _175.QueryParamsRequestAmino): _175.QueryParamsRequest;
            toAmino(_: _175.QueryParamsRequest): _175.QueryParamsRequestAmino;
        };
        QueryParamsResponse: {
            encode(message: _175.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsResponse;
            fromJSON(object: any): _175.QueryParamsResponse;
            toJSON(message: _175.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_175.QueryParamsResponse>): _175.QueryParamsResponse;
            fromAmino(object: _175.QueryParamsResponseAmino): _175.QueryParamsResponse;
            toAmino(message: _175.QueryParamsResponse): _175.QueryParamsResponseAmino;
        };
        AssetTypeRequest: {
            encode(message: _175.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AssetTypeRequest;
            fromJSON(object: any): _175.AssetTypeRequest;
            toJSON(message: _175.AssetTypeRequest): unknown;
            fromPartial(object: Partial<_175.AssetTypeRequest>): _175.AssetTypeRequest;
            fromAmino(object: _175.AssetTypeRequestAmino): _175.AssetTypeRequest;
            toAmino(message: _175.AssetTypeRequest): _175.AssetTypeRequestAmino;
        };
        AssetTypeResponse: {
            encode(message: _175.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AssetTypeResponse;
            fromJSON(object: any): _175.AssetTypeResponse;
            toJSON(message: _175.AssetTypeResponse): unknown;
            fromPartial(object: Partial<_175.AssetTypeResponse>): _175.AssetTypeResponse;
            fromAmino(object: _175.AssetTypeResponseAmino): _175.AssetTypeResponse;
            toAmino(message: _175.AssetTypeResponse): _175.AssetTypeResponseAmino;
        };
        AllAssetsRequest: {
            encode(_: _175.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AllAssetsRequest;
            fromJSON(_: any): _175.AllAssetsRequest;
            toJSON(_: _175.AllAssetsRequest): unknown;
            fromPartial(_: Partial<_175.AllAssetsRequest>): _175.AllAssetsRequest;
            fromAmino(_: _175.AllAssetsRequestAmino): _175.AllAssetsRequest;
            toAmino(_: _175.AllAssetsRequest): _175.AllAssetsRequestAmino;
        };
        AllAssetsResponse: {
            encode(message: _175.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AllAssetsResponse;
            fromJSON(object: any): _175.AllAssetsResponse;
            toJSON(message: _175.AllAssetsResponse): unknown;
            fromPartial(object: Partial<_175.AllAssetsResponse>): _175.AllAssetsResponse;
            fromAmino(object: _175.AllAssetsResponseAmino): _175.AllAssetsResponse;
            toAmino(message: _175.AllAssetsResponse): _175.AllAssetsResponseAmino;
        };
        AssetMultiplierRequest: {
            encode(message: _175.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AssetMultiplierRequest;
            fromJSON(object: any): _175.AssetMultiplierRequest;
            toJSON(message: _175.AssetMultiplierRequest): unknown;
            fromPartial(object: Partial<_175.AssetMultiplierRequest>): _175.AssetMultiplierRequest;
            fromAmino(object: _175.AssetMultiplierRequestAmino): _175.AssetMultiplierRequest;
            toAmino(message: _175.AssetMultiplierRequest): _175.AssetMultiplierRequestAmino;
        };
        AssetMultiplierResponse: {
            encode(message: _175.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AssetMultiplierResponse;
            fromJSON(object: any): _175.AssetMultiplierResponse;
            toJSON(message: _175.AssetMultiplierResponse): unknown;
            fromPartial(object: Partial<_175.AssetMultiplierResponse>): _175.AssetMultiplierResponse;
            fromAmino(object: _175.AssetMultiplierResponseAmino): _175.AssetMultiplierResponse;
            toAmino(message: _175.AssetMultiplierResponse): _175.AssetMultiplierResponseAmino;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _175.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _175.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _175.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: Partial<_175.SuperfluidIntermediaryAccountInfo>): _175.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _175.SuperfluidIntermediaryAccountInfoAmino): _175.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _175.SuperfluidIntermediaryAccountInfo): _175.SuperfluidIntermediaryAccountInfoAmino;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _175.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _175.AllIntermediaryAccountsRequest;
            toJSON(message: _175.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: Partial<_175.AllIntermediaryAccountsRequest>): _175.AllIntermediaryAccountsRequest;
            fromAmino(object: _175.AllIntermediaryAccountsRequestAmino): _175.AllIntermediaryAccountsRequest;
            toAmino(message: _175.AllIntermediaryAccountsRequest): _175.AllIntermediaryAccountsRequestAmino;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _175.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _175.AllIntermediaryAccountsResponse;
            toJSON(message: _175.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: Partial<_175.AllIntermediaryAccountsResponse>): _175.AllIntermediaryAccountsResponse;
            fromAmino(object: _175.AllIntermediaryAccountsResponseAmino): _175.AllIntermediaryAccountsResponse;
            toAmino(message: _175.AllIntermediaryAccountsResponse): _175.AllIntermediaryAccountsResponseAmino;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _175.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _175.ConnectedIntermediaryAccountRequest;
            toJSON(message: _175.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: Partial<_175.ConnectedIntermediaryAccountRequest>): _175.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _175.ConnectedIntermediaryAccountRequestAmino): _175.ConnectedIntermediaryAccountRequest;
            toAmino(message: _175.ConnectedIntermediaryAccountRequest): _175.ConnectedIntermediaryAccountRequestAmino;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _175.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _175.ConnectedIntermediaryAccountResponse;
            toJSON(message: _175.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: Partial<_175.ConnectedIntermediaryAccountResponse>): _175.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _175.ConnectedIntermediaryAccountResponseAmino): _175.ConnectedIntermediaryAccountResponse;
            toAmino(message: _175.ConnectedIntermediaryAccountResponse): _175.ConnectedIntermediaryAccountResponseAmino;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _175.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _175.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _175.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: Partial<_175.QueryTotalDelegationByValidatorForDenomRequest>): _175.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _175.QueryTotalDelegationByValidatorForDenomRequestAmino): _175.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _175.QueryTotalDelegationByValidatorForDenomRequest): _175.QueryTotalDelegationByValidatorForDenomRequestAmino;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _175.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _175.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _175.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: Partial<_175.QueryTotalDelegationByValidatorForDenomResponse>): _175.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _175.QueryTotalDelegationByValidatorForDenomResponseAmino): _175.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _175.QueryTotalDelegationByValidatorForDenomResponse): _175.QueryTotalDelegationByValidatorForDenomResponseAmino;
        };
        Delegations: {
            encode(message: _175.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Delegations;
            fromJSON(object: any): _175.Delegations;
            toJSON(message: _175.Delegations): unknown;
            fromPartial(object: Partial<_175.Delegations>): _175.Delegations;
            fromAmino(object: _175.DelegationsAmino): _175.Delegations;
            toAmino(message: _175.Delegations): _175.DelegationsAmino;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _175.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _175.TotalSuperfluidDelegationsRequest;
            toJSON(_: _175.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: Partial<_175.TotalSuperfluidDelegationsRequest>): _175.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _175.TotalSuperfluidDelegationsRequestAmino): _175.TotalSuperfluidDelegationsRequest;
            toAmino(_: _175.TotalSuperfluidDelegationsRequest): _175.TotalSuperfluidDelegationsRequestAmino;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _175.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _175.TotalSuperfluidDelegationsResponse;
            toJSON(message: _175.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: Partial<_175.TotalSuperfluidDelegationsResponse>): _175.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _175.TotalSuperfluidDelegationsResponseAmino): _175.TotalSuperfluidDelegationsResponse;
            toAmino(message: _175.TotalSuperfluidDelegationsResponse): _175.TotalSuperfluidDelegationsResponseAmino;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _175.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _175.SuperfluidDelegationAmountRequest;
            toJSON(message: _175.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationAmountRequest>): _175.SuperfluidDelegationAmountRequest;
            fromAmino(object: _175.SuperfluidDelegationAmountRequestAmino): _175.SuperfluidDelegationAmountRequest;
            toAmino(message: _175.SuperfluidDelegationAmountRequest): _175.SuperfluidDelegationAmountRequestAmino;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _175.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _175.SuperfluidDelegationAmountResponse;
            toJSON(message: _175.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationAmountResponse>): _175.SuperfluidDelegationAmountResponse;
            fromAmino(object: _175.SuperfluidDelegationAmountResponseAmino): _175.SuperfluidDelegationAmountResponse;
            toAmino(message: _175.SuperfluidDelegationAmountResponse): _175.SuperfluidDelegationAmountResponseAmino;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _175.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _175.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _175.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationsByDelegatorRequest>): _175.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _175.SuperfluidDelegationsByDelegatorRequestAmino): _175.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _175.SuperfluidDelegationsByDelegatorRequest): _175.SuperfluidDelegationsByDelegatorRequestAmino;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _175.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _175.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _175.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationsByDelegatorResponse>): _175.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _175.SuperfluidDelegationsByDelegatorResponseAmino): _175.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _175.SuperfluidDelegationsByDelegatorResponse): _175.SuperfluidDelegationsByDelegatorResponseAmino;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _175.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _175.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _175.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_175.SuperfluidUndelegationsByDelegatorRequest>): _175.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _175.SuperfluidUndelegationsByDelegatorRequestAmino): _175.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _175.SuperfluidUndelegationsByDelegatorRequest): _175.SuperfluidUndelegationsByDelegatorRequestAmino;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _175.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _175.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _175.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_175.SuperfluidUndelegationsByDelegatorResponse>): _175.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _175.SuperfluidUndelegationsByDelegatorResponseAmino): _175.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _175.SuperfluidUndelegationsByDelegatorResponse): _175.SuperfluidUndelegationsByDelegatorResponseAmino;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _175.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _175.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _175.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationsByValidatorDenomRequest>): _175.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _175.SuperfluidDelegationsByValidatorDenomRequestAmino): _175.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _175.SuperfluidDelegationsByValidatorDenomRequest): _175.SuperfluidDelegationsByValidatorDenomRequestAmino;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _175.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _175.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _175.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_175.SuperfluidDelegationsByValidatorDenomResponse>): _175.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _175.SuperfluidDelegationsByValidatorDenomResponseAmino): _175.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _175.SuperfluidDelegationsByValidatorDenomResponse): _175.SuperfluidDelegationsByValidatorDenomResponseAmino;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _175.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _175.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _175.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: Partial<_175.QueryTotalDelegationByDelegatorRequest>): _175.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _175.QueryTotalDelegationByDelegatorRequestAmino): _175.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _175.QueryTotalDelegationByDelegatorRequest): _175.QueryTotalDelegationByDelegatorRequestAmino;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _175.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _175.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _175.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: Partial<_175.QueryTotalDelegationByDelegatorResponse>): _175.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _175.QueryTotalDelegationByDelegatorResponseAmino): _175.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _175.QueryTotalDelegationByDelegatorResponse): _175.QueryTotalDelegationByDelegatorResponseAmino;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _175.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _175.QueryUnpoolWhitelistRequest;
            toJSON(_: _175.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: Partial<_175.QueryUnpoolWhitelistRequest>): _175.QueryUnpoolWhitelistRequest;
            fromAmino(_: _175.QueryUnpoolWhitelistRequestAmino): _175.QueryUnpoolWhitelistRequest;
            toAmino(_: _175.QueryUnpoolWhitelistRequest): _175.QueryUnpoolWhitelistRequestAmino;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _175.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _175.QueryUnpoolWhitelistResponse;
            toJSON(message: _175.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: Partial<_175.QueryUnpoolWhitelistResponse>): _175.QueryUnpoolWhitelistResponse;
            fromAmino(object: _175.QueryUnpoolWhitelistResponseAmino): _175.QueryUnpoolWhitelistResponse;
            toAmino(message: _175.QueryUnpoolWhitelistResponse): _175.QueryUnpoolWhitelistResponseAmino;
        };
        Params: {
            encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
            fromJSON(object: any): _174.Params;
            toJSON(message: _174.Params): unknown;
            fromPartial(object: Partial<_174.Params>): _174.Params;
            fromAmino(object: _174.ParamsAmino): _174.Params;
            toAmino(message: _174.Params): _174.ParamsAmino;
        };
        GenesisState: {
            encode(message: _173.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisState;
            fromJSON(object: any): _173.GenesisState;
            toJSON(message: _173.GenesisState): unknown;
            fromPartial(object: Partial<_173.GenesisState>): _173.GenesisState;
            fromAmino(object: _173.GenesisStateAmino): _173.GenesisState;
            toAmino(message: _173.GenesisState): _173.GenesisStateAmino;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            MsgClientImpl: typeof _333.MsgClientImpl;
            QueryClientImpl: typeof _321.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _180.ParamsRequest): Promise<_180.ParamsResponse>;
                estimateSwapExactAmountIn(request: _180.EstimateSwapExactAmountInRequest): Promise<_180.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _180.EstimateSwapExactAmountOutRequest): Promise<_180.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _180.NumPoolsRequest): Promise<_180.NumPoolsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _182.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _182.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _182.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _182.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountOut;
                    };
                };
                toJSON: {
                    swapExactAmountIn(value: _182.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _182.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _182.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _182.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _182.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _182.MsgSwapExactAmountIn) => _182.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _182.MsgSwapExactAmountInAmino) => _182.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _182.MsgSwapExactAmountOut) => _182.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _182.MsgSwapExactAmountOutAmino) => _182.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _182.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSwapExactAmountIn;
                fromJSON(object: any): _182.MsgSwapExactAmountIn;
                toJSON(message: _182.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_182.MsgSwapExactAmountIn>): _182.MsgSwapExactAmountIn;
                fromAmino(object: _182.MsgSwapExactAmountInAmino): _182.MsgSwapExactAmountIn;
                toAmino(message: _182.MsgSwapExactAmountIn): _182.MsgSwapExactAmountInAmino;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _182.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _182.MsgSwapExactAmountInResponse;
                toJSON(message: _182.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_182.MsgSwapExactAmountInResponse>): _182.MsgSwapExactAmountInResponse;
                fromAmino(object: _182.MsgSwapExactAmountInResponseAmino): _182.MsgSwapExactAmountInResponse;
                toAmino(message: _182.MsgSwapExactAmountInResponse): _182.MsgSwapExactAmountInResponseAmino;
            };
            MsgSwapExactAmountOut: {
                encode(message: _182.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSwapExactAmountOut;
                fromJSON(object: any): _182.MsgSwapExactAmountOut;
                toJSON(message: _182.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_182.MsgSwapExactAmountOut>): _182.MsgSwapExactAmountOut;
                fromAmino(object: _182.MsgSwapExactAmountOutAmino): _182.MsgSwapExactAmountOut;
                toAmino(message: _182.MsgSwapExactAmountOut): _182.MsgSwapExactAmountOutAmino;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _182.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _182.MsgSwapExactAmountOutResponse;
                toJSON(message: _182.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_182.MsgSwapExactAmountOutResponse>): _182.MsgSwapExactAmountOutResponse;
                fromAmino(object: _182.MsgSwapExactAmountOutResponseAmino): _182.MsgSwapExactAmountOutResponse;
                toAmino(message: _182.MsgSwapExactAmountOutResponse): _182.MsgSwapExactAmountOutResponseAmino;
            };
            SwapAmountInRoute: {
                encode(message: _181.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.SwapAmountInRoute;
                fromJSON(object: any): _181.SwapAmountInRoute;
                toJSON(message: _181.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_181.SwapAmountInRoute>): _181.SwapAmountInRoute;
                fromAmino(object: _181.SwapAmountInRouteAmino): _181.SwapAmountInRoute;
                toAmino(message: _181.SwapAmountInRoute): _181.SwapAmountInRouteAmino;
            };
            SwapAmountOutRoute: {
                encode(message: _181.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.SwapAmountOutRoute;
                fromJSON(object: any): _181.SwapAmountOutRoute;
                toJSON(message: _181.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_181.SwapAmountOutRoute>): _181.SwapAmountOutRoute;
                fromAmino(object: _181.SwapAmountOutRouteAmino): _181.SwapAmountOutRoute;
                toAmino(message: _181.SwapAmountOutRoute): _181.SwapAmountOutRouteAmino;
            };
            ParamsRequest: {
                encode(_: _180.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ParamsRequest;
                fromJSON(_: any): _180.ParamsRequest;
                toJSON(_: _180.ParamsRequest): unknown;
                fromPartial(_: Partial<_180.ParamsRequest>): _180.ParamsRequest;
                fromAmino(_: _180.ParamsRequestAmino): _180.ParamsRequest;
                toAmino(_: _180.ParamsRequest): _180.ParamsRequestAmino;
            };
            ParamsResponse: {
                encode(message: _180.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ParamsResponse;
                fromJSON(object: any): _180.ParamsResponse;
                toJSON(message: _180.ParamsResponse): unknown;
                fromPartial(object: Partial<_180.ParamsResponse>): _180.ParamsResponse;
                fromAmino(object: _180.ParamsResponseAmino): _180.ParamsResponse;
                toAmino(message: _180.ParamsResponse): _180.ParamsResponseAmino;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _180.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EstimateSwapExactAmountInRequest;
                fromJSON(object: any): _180.EstimateSwapExactAmountInRequest;
                toJSON(message: _180.EstimateSwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_180.EstimateSwapExactAmountInRequest>): _180.EstimateSwapExactAmountInRequest;
                fromAmino(object: _180.EstimateSwapExactAmountInRequestAmino): _180.EstimateSwapExactAmountInRequest;
                toAmino(message: _180.EstimateSwapExactAmountInRequest): _180.EstimateSwapExactAmountInRequestAmino;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _180.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EstimateSwapExactAmountInResponse;
                fromJSON(object: any): _180.EstimateSwapExactAmountInResponse;
                toJSON(message: _180.EstimateSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_180.EstimateSwapExactAmountInResponse>): _180.EstimateSwapExactAmountInResponse;
                fromAmino(object: _180.EstimateSwapExactAmountInResponseAmino): _180.EstimateSwapExactAmountInResponse;
                toAmino(message: _180.EstimateSwapExactAmountInResponse): _180.EstimateSwapExactAmountInResponseAmino;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _180.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EstimateSwapExactAmountOutRequest;
                fromJSON(object: any): _180.EstimateSwapExactAmountOutRequest;
                toJSON(message: _180.EstimateSwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_180.EstimateSwapExactAmountOutRequest>): _180.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _180.EstimateSwapExactAmountOutRequestAmino): _180.EstimateSwapExactAmountOutRequest;
                toAmino(message: _180.EstimateSwapExactAmountOutRequest): _180.EstimateSwapExactAmountOutRequestAmino;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _180.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EstimateSwapExactAmountOutResponse;
                fromJSON(object: any): _180.EstimateSwapExactAmountOutResponse;
                toJSON(message: _180.EstimateSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_180.EstimateSwapExactAmountOutResponse>): _180.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _180.EstimateSwapExactAmountOutResponseAmino): _180.EstimateSwapExactAmountOutResponse;
                toAmino(message: _180.EstimateSwapExactAmountOutResponse): _180.EstimateSwapExactAmountOutResponseAmino;
            };
            NumPoolsRequest: {
                encode(_: _180.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.NumPoolsRequest;
                fromJSON(_: any): _180.NumPoolsRequest;
                toJSON(_: _180.NumPoolsRequest): unknown;
                fromPartial(_: Partial<_180.NumPoolsRequest>): _180.NumPoolsRequest;
                fromAmino(_: _180.NumPoolsRequestAmino): _180.NumPoolsRequest;
                toAmino(_: _180.NumPoolsRequest): _180.NumPoolsRequestAmino;
            };
            NumPoolsResponse: {
                encode(message: _180.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.NumPoolsResponse;
                fromJSON(object: any): _180.NumPoolsResponse;
                toJSON(message: _180.NumPoolsResponse): unknown;
                fromPartial(object: Partial<_180.NumPoolsResponse>): _180.NumPoolsResponse;
                fromAmino(object: _180.NumPoolsResponseAmino): _180.NumPoolsResponse;
                toAmino(message: _180.NumPoolsResponse): _180.NumPoolsResponseAmino;
            };
            poolTypeFromJSON(object: any): _179.PoolType;
            poolTypeToJSON(object: _179.PoolType): string;
            PoolType: typeof _179.PoolType;
            PoolTypeSDKType: typeof _179.PoolType;
            PoolTypeAmino: typeof _179.PoolType;
            ModuleRoute: {
                encode(message: _179.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ModuleRoute;
                fromJSON(object: any): _179.ModuleRoute;
                toJSON(message: _179.ModuleRoute): unknown;
                fromPartial(object: Partial<_179.ModuleRoute>): _179.ModuleRoute;
                fromAmino(object: _179.ModuleRouteAmino): _179.ModuleRoute;
                toAmino(message: _179.ModuleRoute): _179.ModuleRouteAmino;
            };
            Params: {
                encode(message: _178.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Params;
                fromJSON(object: any): _178.Params;
                toJSON(message: _178.Params): unknown;
                fromPartial(object: Partial<_178.Params>): _178.Params;
                fromAmino(object: _178.ParamsAmino): _178.Params;
                toAmino(message: _178.Params): _178.ParamsAmino;
            };
            GenesisState: {
                encode(message: _178.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.GenesisState;
                fromJSON(object: any): _178.GenesisState;
                toJSON(message: _178.GenesisState): unknown;
                fromPartial(object: Partial<_178.GenesisState>): _178.GenesisState;
                fromAmino(object: _178.GenesisStateAmino): _178.GenesisState;
                toAmino(message: _178.GenesisState): _178.GenesisStateAmino;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _334.MsgClientImpl;
            QueryClientImpl: typeof _322.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                denomAuthorityMetadata(request: _186.QueryDenomAuthorityMetadataRequest): Promise<_186.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _186.QueryDenomsFromCreatorRequest): Promise<_186.QueryDenomsFromCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _187.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _187.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _187.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _187.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _187.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _187.MsgCreateDenom): {
                        typeUrl: string;
                        value: _187.MsgCreateDenom;
                    };
                    mint(value: _187.MsgMint): {
                        typeUrl: string;
                        value: _187.MsgMint;
                    };
                    burn(value: _187.MsgBurn): {
                        typeUrl: string;
                        value: _187.MsgBurn;
                    };
                    changeAdmin(value: _187.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _187.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _187.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _187.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _187.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _187.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _187.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _187.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _187.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _187.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _187.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _187.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _187.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _187.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _187.MsgCreateDenom): {
                        typeUrl: string;
                        value: _187.MsgCreateDenom;
                    };
                    mint(value: _187.MsgMint): {
                        typeUrl: string;
                        value: _187.MsgMint;
                    };
                    burn(value: _187.MsgBurn): {
                        typeUrl: string;
                        value: _187.MsgBurn;
                    };
                    changeAdmin(value: _187.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _187.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _187.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _187.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _187.MsgCreateDenom) => _187.MsgCreateDenomAmino;
                    fromAmino: (object: _187.MsgCreateDenomAmino) => _187.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _187.MsgMint) => _187.MsgMintAmino;
                    fromAmino: (object: _187.MsgMintAmino) => _187.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _187.MsgBurn) => _187.MsgBurnAmino;
                    fromAmino: (object: _187.MsgBurnAmino) => _187.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _187.MsgChangeAdmin) => _187.MsgChangeAdminAmino;
                    fromAmino: (object: _187.MsgChangeAdminAmino) => _187.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _187.MsgSetDenomMetadata) => _187.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _187.MsgSetDenomMetadataAmino) => _187.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _187.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgCreateDenom;
                fromJSON(object: any): _187.MsgCreateDenom;
                toJSON(message: _187.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_187.MsgCreateDenom>): _187.MsgCreateDenom;
                fromAmino(object: _187.MsgCreateDenomAmino): _187.MsgCreateDenom;
                toAmino(message: _187.MsgCreateDenom): _187.MsgCreateDenomAmino;
            };
            MsgCreateDenomResponse: {
                encode(message: _187.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgCreateDenomResponse;
                fromJSON(object: any): _187.MsgCreateDenomResponse;
                toJSON(message: _187.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_187.MsgCreateDenomResponse>): _187.MsgCreateDenomResponse;
                fromAmino(object: _187.MsgCreateDenomResponseAmino): _187.MsgCreateDenomResponse;
                toAmino(message: _187.MsgCreateDenomResponse): _187.MsgCreateDenomResponseAmino;
            };
            MsgMint: {
                encode(message: _187.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgMint;
                fromJSON(object: any): _187.MsgMint;
                toJSON(message: _187.MsgMint): unknown;
                fromPartial(object: Partial<_187.MsgMint>): _187.MsgMint;
                fromAmino(object: _187.MsgMintAmino): _187.MsgMint;
                toAmino(message: _187.MsgMint): _187.MsgMintAmino;
            };
            MsgMintResponse: {
                encode(_: _187.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgMintResponse;
                fromJSON(_: any): _187.MsgMintResponse;
                toJSON(_: _187.MsgMintResponse): unknown;
                fromPartial(_: Partial<_187.MsgMintResponse>): _187.MsgMintResponse;
                fromAmino(_: _187.MsgMintResponseAmino): _187.MsgMintResponse;
                toAmino(_: _187.MsgMintResponse): _187.MsgMintResponseAmino;
            };
            MsgBurn: {
                encode(message: _187.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgBurn;
                fromJSON(object: any): _187.MsgBurn;
                toJSON(message: _187.MsgBurn): unknown;
                fromPartial(object: Partial<_187.MsgBurn>): _187.MsgBurn;
                fromAmino(object: _187.MsgBurnAmino): _187.MsgBurn;
                toAmino(message: _187.MsgBurn): _187.MsgBurnAmino;
            };
            MsgBurnResponse: {
                encode(_: _187.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgBurnResponse;
                fromJSON(_: any): _187.MsgBurnResponse;
                toJSON(_: _187.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_187.MsgBurnResponse>): _187.MsgBurnResponse;
                fromAmino(_: _187.MsgBurnResponseAmino): _187.MsgBurnResponse;
                toAmino(_: _187.MsgBurnResponse): _187.MsgBurnResponseAmino;
            };
            MsgChangeAdmin: {
                encode(message: _187.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgChangeAdmin;
                fromJSON(object: any): _187.MsgChangeAdmin;
                toJSON(message: _187.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_187.MsgChangeAdmin>): _187.MsgChangeAdmin;
                fromAmino(object: _187.MsgChangeAdminAmino): _187.MsgChangeAdmin;
                toAmino(message: _187.MsgChangeAdmin): _187.MsgChangeAdminAmino;
            };
            MsgChangeAdminResponse: {
                encode(_: _187.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgChangeAdminResponse;
                fromJSON(_: any): _187.MsgChangeAdminResponse;
                toJSON(_: _187.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_187.MsgChangeAdminResponse>): _187.MsgChangeAdminResponse;
                fromAmino(_: _187.MsgChangeAdminResponseAmino): _187.MsgChangeAdminResponse;
                toAmino(_: _187.MsgChangeAdminResponse): _187.MsgChangeAdminResponseAmino;
            };
            MsgSetDenomMetadata: {
                encode(message: _187.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSetDenomMetadata;
                fromJSON(object: any): _187.MsgSetDenomMetadata;
                toJSON(message: _187.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_187.MsgSetDenomMetadata>): _187.MsgSetDenomMetadata;
                fromAmino(object: _187.MsgSetDenomMetadataAmino): _187.MsgSetDenomMetadata;
                toAmino(message: _187.MsgSetDenomMetadata): _187.MsgSetDenomMetadataAmino;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _187.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _187.MsgSetDenomMetadataResponse;
                toJSON(_: _187.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_187.MsgSetDenomMetadataResponse>): _187.MsgSetDenomMetadataResponse;
                fromAmino(_: _187.MsgSetDenomMetadataResponseAmino): _187.MsgSetDenomMetadataResponse;
                toAmino(_: _187.MsgSetDenomMetadataResponse): _187.MsgSetDenomMetadataResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _186.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsRequest;
                fromJSON(_: any): _186.QueryParamsRequest;
                toJSON(_: _186.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_186.QueryParamsRequest>): _186.QueryParamsRequest;
                fromAmino(_: _186.QueryParamsRequestAmino): _186.QueryParamsRequest;
                toAmino(_: _186.QueryParamsRequest): _186.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _186.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsResponse;
                fromJSON(object: any): _186.QueryParamsResponse;
                toJSON(message: _186.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_186.QueryParamsResponse>): _186.QueryParamsResponse;
                fromAmino(object: _186.QueryParamsResponseAmino): _186.QueryParamsResponse;
                toAmino(message: _186.QueryParamsResponse): _186.QueryParamsResponseAmino;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _186.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _186.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _186.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_186.QueryDenomAuthorityMetadataRequest>): _186.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _186.QueryDenomAuthorityMetadataRequestAmino): _186.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _186.QueryDenomAuthorityMetadataRequest): _186.QueryDenomAuthorityMetadataRequestAmino;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _186.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _186.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _186.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_186.QueryDenomAuthorityMetadataResponse>): _186.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _186.QueryDenomAuthorityMetadataResponseAmino): _186.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _186.QueryDenomAuthorityMetadataResponse): _186.QueryDenomAuthorityMetadataResponseAmino;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _186.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _186.QueryDenomsFromCreatorRequest;
                toJSON(message: _186.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_186.QueryDenomsFromCreatorRequest>): _186.QueryDenomsFromCreatorRequest;
                fromAmino(object: _186.QueryDenomsFromCreatorRequestAmino): _186.QueryDenomsFromCreatorRequest;
                toAmino(message: _186.QueryDenomsFromCreatorRequest): _186.QueryDenomsFromCreatorRequestAmino;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _186.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _186.QueryDenomsFromCreatorResponse;
                toJSON(message: _186.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_186.QueryDenomsFromCreatorResponse>): _186.QueryDenomsFromCreatorResponse;
                fromAmino(object: _186.QueryDenomsFromCreatorResponseAmino): _186.QueryDenomsFromCreatorResponse;
                toAmino(message: _186.QueryDenomsFromCreatorResponse): _186.QueryDenomsFromCreatorResponseAmino;
            };
            Params: {
                encode(message: _185.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Params;
                fromJSON(object: any): _185.Params;
                toJSON(message: _185.Params): unknown;
                fromPartial(object: Partial<_185.Params>): _185.Params;
                fromAmino(object: _185.ParamsAmino): _185.Params;
                toAmino(message: _185.Params): _185.ParamsAmino;
            };
            GenesisState: {
                encode(message: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.GenesisState;
                fromJSON(object: any): _184.GenesisState;
                toJSON(message: _184.GenesisState): unknown;
                fromPartial(object: Partial<_184.GenesisState>): _184.GenesisState;
                fromAmino(object: _184.GenesisStateAmino): _184.GenesisState;
                toAmino(message: _184.GenesisState): _184.GenesisStateAmino;
            };
            GenesisDenom: {
                encode(message: _184.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.GenesisDenom;
                fromJSON(object: any): _184.GenesisDenom;
                toJSON(message: _184.GenesisDenom): unknown;
                fromPartial(object: Partial<_184.GenesisDenom>): _184.GenesisDenom;
                fromAmino(object: _184.GenesisDenomAmino): _184.GenesisDenom;
                toAmino(message: _184.GenesisDenom): _184.GenesisDenomAmino;
            };
            DenomAuthorityMetadata: {
                encode(message: _183.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DenomAuthorityMetadata;
                fromJSON(object: any): _183.DenomAuthorityMetadata;
                toJSON(message: _183.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_183.DenomAuthorityMetadata>): _183.DenomAuthorityMetadata;
                fromAmino(object: _183.DenomAuthorityMetadataAmino): _183.DenomAuthorityMetadata;
                toAmino(message: _183.DenomAuthorityMetadata): _183.DenomAuthorityMetadataAmino;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _323.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _189.ParamsRequest): Promise<_189.ParamsResponse>;
                arithmeticTwap(request: _189.ArithmeticTwapRequest): Promise<_189.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _189.ArithmeticTwapToNowRequest): Promise<_189.ArithmeticTwapToNowResponse>;
            };
            TwapRecord: {
                encode(message: _190.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.TwapRecord;
                fromJSON(object: any): _190.TwapRecord;
                toJSON(message: _190.TwapRecord): unknown;
                fromPartial(object: Partial<_190.TwapRecord>): _190.TwapRecord;
                fromAmino(object: _190.TwapRecordAmino): _190.TwapRecord;
                toAmino(message: _190.TwapRecord): _190.TwapRecordAmino;
            };
            ArithmeticTwapRequest: {
                encode(message: _189.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ArithmeticTwapRequest;
                fromJSON(object: any): _189.ArithmeticTwapRequest;
                toJSON(message: _189.ArithmeticTwapRequest): unknown;
                fromPartial(object: Partial<_189.ArithmeticTwapRequest>): _189.ArithmeticTwapRequest;
                fromAmino(object: _189.ArithmeticTwapRequestAmino): _189.ArithmeticTwapRequest;
                toAmino(message: _189.ArithmeticTwapRequest): _189.ArithmeticTwapRequestAmino;
            };
            ArithmeticTwapResponse: {
                encode(message: _189.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ArithmeticTwapResponse;
                fromJSON(object: any): _189.ArithmeticTwapResponse;
                toJSON(message: _189.ArithmeticTwapResponse): unknown;
                fromPartial(object: Partial<_189.ArithmeticTwapResponse>): _189.ArithmeticTwapResponse;
                fromAmino(object: _189.ArithmeticTwapResponseAmino): _189.ArithmeticTwapResponse;
                toAmino(message: _189.ArithmeticTwapResponse): _189.ArithmeticTwapResponseAmino;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _189.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _189.ArithmeticTwapToNowRequest;
                toJSON(message: _189.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: Partial<_189.ArithmeticTwapToNowRequest>): _189.ArithmeticTwapToNowRequest;
                fromAmino(object: _189.ArithmeticTwapToNowRequestAmino): _189.ArithmeticTwapToNowRequest;
                toAmino(message: _189.ArithmeticTwapToNowRequest): _189.ArithmeticTwapToNowRequestAmino;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _189.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _189.ArithmeticTwapToNowResponse;
                toJSON(message: _189.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: Partial<_189.ArithmeticTwapToNowResponse>): _189.ArithmeticTwapToNowResponse;
                fromAmino(object: _189.ArithmeticTwapToNowResponseAmino): _189.ArithmeticTwapToNowResponse;
                toAmino(message: _189.ArithmeticTwapToNowResponse): _189.ArithmeticTwapToNowResponseAmino;
            };
            ParamsRequest: {
                encode(_: _189.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ParamsRequest;
                fromJSON(_: any): _189.ParamsRequest;
                toJSON(_: _189.ParamsRequest): unknown;
                fromPartial(_: Partial<_189.ParamsRequest>): _189.ParamsRequest;
                fromAmino(_: _189.ParamsRequestAmino): _189.ParamsRequest;
                toAmino(_: _189.ParamsRequest): _189.ParamsRequestAmino;
            };
            ParamsResponse: {
                encode(message: _189.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ParamsResponse;
                fromJSON(object: any): _189.ParamsResponse;
                toJSON(message: _189.ParamsResponse): unknown;
                fromPartial(object: Partial<_189.ParamsResponse>): _189.ParamsResponse;
                fromAmino(object: _189.ParamsResponseAmino): _189.ParamsResponse;
                toAmino(message: _189.ParamsResponse): _189.ParamsResponseAmino;
            };
            Params: {
                encode(message: _188.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Params;
                fromJSON(object: any): _188.Params;
                toJSON(message: _188.Params): unknown;
                fromPartial(object: Partial<_188.Params>): _188.Params;
                fromAmino(object: _188.ParamsAmino): _188.Params;
                toAmino(message: _188.Params): _188.ParamsAmino;
            };
            GenesisState: {
                encode(message: _188.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.GenesisState;
                fromJSON(object: any): _188.GenesisState;
                toJSON(message: _188.GenesisState): unknown;
                fromPartial(object: Partial<_188.GenesisState>): _188.GenesisState;
                fromAmino(object: _188.GenesisStateAmino): _188.GenesisState;
                toAmino(message: _188.GenesisState): _188.GenesisStateAmino;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _324.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _194.QueryFeeTokensRequest): Promise<_194.QueryFeeTokensResponse>;
                denomSpotPrice(request: _194.QueryDenomSpotPriceRequest): Promise<_194.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _194.QueryDenomPoolIdRequest): Promise<_194.QueryDenomPoolIdResponse>;
                baseDenom(request?: _194.QueryBaseDenomRequest): Promise<_194.QueryBaseDenomResponse>;
            };
            QueryFeeTokensRequest: {
                encode(_: _194.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryFeeTokensRequest;
                fromJSON(_: any): _194.QueryFeeTokensRequest;
                toJSON(_: _194.QueryFeeTokensRequest): unknown;
                fromPartial(_: Partial<_194.QueryFeeTokensRequest>): _194.QueryFeeTokensRequest;
                fromAmino(_: _194.QueryFeeTokensRequestAmino): _194.QueryFeeTokensRequest;
                toAmino(_: _194.QueryFeeTokensRequest): _194.QueryFeeTokensRequestAmino;
            };
            QueryFeeTokensResponse: {
                encode(message: _194.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryFeeTokensResponse;
                fromJSON(object: any): _194.QueryFeeTokensResponse;
                toJSON(message: _194.QueryFeeTokensResponse): unknown;
                fromPartial(object: Partial<_194.QueryFeeTokensResponse>): _194.QueryFeeTokensResponse;
                fromAmino(object: _194.QueryFeeTokensResponseAmino): _194.QueryFeeTokensResponse;
                toAmino(message: _194.QueryFeeTokensResponse): _194.QueryFeeTokensResponseAmino;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _194.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _194.QueryDenomSpotPriceRequest;
                toJSON(message: _194.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: Partial<_194.QueryDenomSpotPriceRequest>): _194.QueryDenomSpotPriceRequest;
                fromAmino(object: _194.QueryDenomSpotPriceRequestAmino): _194.QueryDenomSpotPriceRequest;
                toAmino(message: _194.QueryDenomSpotPriceRequest): _194.QueryDenomSpotPriceRequestAmino;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _194.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _194.QueryDenomSpotPriceResponse;
                toJSON(message: _194.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: Partial<_194.QueryDenomSpotPriceResponse>): _194.QueryDenomSpotPriceResponse;
                fromAmino(object: _194.QueryDenomSpotPriceResponseAmino): _194.QueryDenomSpotPriceResponse;
                toAmino(message: _194.QueryDenomSpotPriceResponse): _194.QueryDenomSpotPriceResponseAmino;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _194.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDenomPoolIdRequest;
                fromJSON(object: any): _194.QueryDenomPoolIdRequest;
                toJSON(message: _194.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: Partial<_194.QueryDenomPoolIdRequest>): _194.QueryDenomPoolIdRequest;
                fromAmino(object: _194.QueryDenomPoolIdRequestAmino): _194.QueryDenomPoolIdRequest;
                toAmino(message: _194.QueryDenomPoolIdRequest): _194.QueryDenomPoolIdRequestAmino;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _194.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDenomPoolIdResponse;
                fromJSON(object: any): _194.QueryDenomPoolIdResponse;
                toJSON(message: _194.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: Partial<_194.QueryDenomPoolIdResponse>): _194.QueryDenomPoolIdResponse;
                fromAmino(object: _194.QueryDenomPoolIdResponseAmino): _194.QueryDenomPoolIdResponse;
                toAmino(message: _194.QueryDenomPoolIdResponse): _194.QueryDenomPoolIdResponseAmino;
            };
            QueryBaseDenomRequest: {
                encode(_: _194.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryBaseDenomRequest;
                fromJSON(_: any): _194.QueryBaseDenomRequest;
                toJSON(_: _194.QueryBaseDenomRequest): unknown;
                fromPartial(_: Partial<_194.QueryBaseDenomRequest>): _194.QueryBaseDenomRequest;
                fromAmino(_: _194.QueryBaseDenomRequestAmino): _194.QueryBaseDenomRequest;
                toAmino(_: _194.QueryBaseDenomRequest): _194.QueryBaseDenomRequestAmino;
            };
            QueryBaseDenomResponse: {
                encode(message: _194.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryBaseDenomResponse;
                fromJSON(object: any): _194.QueryBaseDenomResponse;
                toJSON(message: _194.QueryBaseDenomResponse): unknown;
                fromPartial(object: Partial<_194.QueryBaseDenomResponse>): _194.QueryBaseDenomResponse;
                fromAmino(object: _194.QueryBaseDenomResponseAmino): _194.QueryBaseDenomResponse;
                toAmino(message: _194.QueryBaseDenomResponse): _194.QueryBaseDenomResponseAmino;
            };
            UpdateFeeTokenProposal: {
                encode(message: _193.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.UpdateFeeTokenProposal;
                fromJSON(object: any): _193.UpdateFeeTokenProposal;
                toJSON(message: _193.UpdateFeeTokenProposal): unknown;
                fromPartial(object: Partial<_193.UpdateFeeTokenProposal>): _193.UpdateFeeTokenProposal;
                fromAmino(object: _193.UpdateFeeTokenProposalAmino): _193.UpdateFeeTokenProposal;
                toAmino(message: _193.UpdateFeeTokenProposal): _193.UpdateFeeTokenProposalAmino;
            };
            GenesisState: {
                encode(message: _192.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisState;
                fromJSON(object: any): _192.GenesisState;
                toJSON(message: _192.GenesisState): unknown;
                fromPartial(object: Partial<_192.GenesisState>): _192.GenesisState;
                fromAmino(object: _192.GenesisStateAmino): _192.GenesisState;
                toAmino(message: _192.GenesisState): _192.GenesisStateAmino;
            };
            FeeToken: {
                encode(message: _191.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.FeeToken;
                fromJSON(object: any): _191.FeeToken;
                toJSON(message: _191.FeeToken): unknown;
                fromPartial(object: Partial<_191.FeeToken>): _191.FeeToken;
                fromAmino(object: _191.FeeTokenAmino): _191.FeeToken;
                toAmino(message: _191.FeeToken): _191.FeeTokenAmino;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _335.MsgClientImpl;
            QueryClientImpl: typeof _325.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _195.UserValidatorPreferencesRequest): Promise<_195.UserValidatorPreferencesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _197.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _197.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _197.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _197.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _197.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _197.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _197.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _197.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _197.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _197.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _197.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _197.MsgWithdrawDelegationRewards;
                    };
                };
                toJSON: {
                    setValidatorSetPreference(value: _197.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateToValidatorSet(value: _197.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegateFromValidatorSet(value: _197.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redelegateValidatorSet(value: _197.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegationRewards(value: _197.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _197.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _197.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _197.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _197.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _197.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _197.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _197.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _197.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _197.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _197.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _197.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _197.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _197.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _197.MsgSetValidatorSetPreference) => _197.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _197.MsgSetValidatorSetPreferenceAmino) => _197.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _197.MsgDelegateToValidatorSet) => _197.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _197.MsgDelegateToValidatorSetAmino) => _197.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _197.MsgUndelegateFromValidatorSet) => _197.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _197.MsgUndelegateFromValidatorSetAmino) => _197.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _197.MsgRedelegateValidatorSet) => _197.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _197.MsgRedelegateValidatorSetAmino) => _197.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _197.MsgWithdrawDelegationRewards) => _197.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _197.MsgWithdrawDelegationRewardsAmino) => _197.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _197.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgSetValidatorSetPreference;
                fromJSON(object: any): _197.MsgSetValidatorSetPreference;
                toJSON(message: _197.MsgSetValidatorSetPreference): unknown;
                fromPartial(object: Partial<_197.MsgSetValidatorSetPreference>): _197.MsgSetValidatorSetPreference;
                fromAmino(object: _197.MsgSetValidatorSetPreferenceAmino): _197.MsgSetValidatorSetPreference;
                toAmino(message: _197.MsgSetValidatorSetPreference): _197.MsgSetValidatorSetPreferenceAmino;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _197.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgSetValidatorSetPreferenceResponse;
                fromJSON(_: any): _197.MsgSetValidatorSetPreferenceResponse;
                toJSON(_: _197.MsgSetValidatorSetPreferenceResponse): unknown;
                fromPartial(_: Partial<_197.MsgSetValidatorSetPreferenceResponse>): _197.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _197.MsgSetValidatorSetPreferenceResponseAmino): _197.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _197.MsgSetValidatorSetPreferenceResponse): _197.MsgSetValidatorSetPreferenceResponseAmino;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _197.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgDelegateToValidatorSet;
                fromJSON(object: any): _197.MsgDelegateToValidatorSet;
                toJSON(message: _197.MsgDelegateToValidatorSet): unknown;
                fromPartial(object: Partial<_197.MsgDelegateToValidatorSet>): _197.MsgDelegateToValidatorSet;
                fromAmino(object: _197.MsgDelegateToValidatorSetAmino): _197.MsgDelegateToValidatorSet;
                toAmino(message: _197.MsgDelegateToValidatorSet): _197.MsgDelegateToValidatorSetAmino;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _197.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgDelegateToValidatorSetResponse;
                fromJSON(_: any): _197.MsgDelegateToValidatorSetResponse;
                toJSON(_: _197.MsgDelegateToValidatorSetResponse): unknown;
                fromPartial(_: Partial<_197.MsgDelegateToValidatorSetResponse>): _197.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _197.MsgDelegateToValidatorSetResponseAmino): _197.MsgDelegateToValidatorSetResponse;
                toAmino(_: _197.MsgDelegateToValidatorSetResponse): _197.MsgDelegateToValidatorSetResponseAmino;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _197.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgUndelegateFromValidatorSet;
                fromJSON(object: any): _197.MsgUndelegateFromValidatorSet;
                toJSON(message: _197.MsgUndelegateFromValidatorSet): unknown;
                fromPartial(object: Partial<_197.MsgUndelegateFromValidatorSet>): _197.MsgUndelegateFromValidatorSet;
                fromAmino(object: _197.MsgUndelegateFromValidatorSetAmino): _197.MsgUndelegateFromValidatorSet;
                toAmino(message: _197.MsgUndelegateFromValidatorSet): _197.MsgUndelegateFromValidatorSetAmino;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _197.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgUndelegateFromValidatorSetResponse;
                fromJSON(_: any): _197.MsgUndelegateFromValidatorSetResponse;
                toJSON(_: _197.MsgUndelegateFromValidatorSetResponse): unknown;
                fromPartial(_: Partial<_197.MsgUndelegateFromValidatorSetResponse>): _197.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _197.MsgUndelegateFromValidatorSetResponseAmino): _197.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _197.MsgUndelegateFromValidatorSetResponse): _197.MsgUndelegateFromValidatorSetResponseAmino;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _197.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgRedelegateValidatorSet;
                fromJSON(object: any): _197.MsgRedelegateValidatorSet;
                toJSON(message: _197.MsgRedelegateValidatorSet): unknown;
                fromPartial(object: Partial<_197.MsgRedelegateValidatorSet>): _197.MsgRedelegateValidatorSet;
                fromAmino(object: _197.MsgRedelegateValidatorSetAmino): _197.MsgRedelegateValidatorSet;
                toAmino(message: _197.MsgRedelegateValidatorSet): _197.MsgRedelegateValidatorSetAmino;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _197.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgRedelegateValidatorSetResponse;
                fromJSON(_: any): _197.MsgRedelegateValidatorSetResponse;
                toJSON(_: _197.MsgRedelegateValidatorSetResponse): unknown;
                fromPartial(_: Partial<_197.MsgRedelegateValidatorSetResponse>): _197.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _197.MsgRedelegateValidatorSetResponseAmino): _197.MsgRedelegateValidatorSetResponse;
                toAmino(_: _197.MsgRedelegateValidatorSetResponse): _197.MsgRedelegateValidatorSetResponseAmino;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _197.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgWithdrawDelegationRewards;
                fromJSON(object: any): _197.MsgWithdrawDelegationRewards;
                toJSON(message: _197.MsgWithdrawDelegationRewards): unknown;
                fromPartial(object: Partial<_197.MsgWithdrawDelegationRewards>): _197.MsgWithdrawDelegationRewards;
                fromAmino(object: _197.MsgWithdrawDelegationRewardsAmino): _197.MsgWithdrawDelegationRewards;
                toAmino(message: _197.MsgWithdrawDelegationRewards): _197.MsgWithdrawDelegationRewardsAmino;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _197.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MsgWithdrawDelegationRewardsResponse;
                fromJSON(_: any): _197.MsgWithdrawDelegationRewardsResponse;
                toJSON(_: _197.MsgWithdrawDelegationRewardsResponse): unknown;
                fromPartial(_: Partial<_197.MsgWithdrawDelegationRewardsResponse>): _197.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _197.MsgWithdrawDelegationRewardsResponseAmino): _197.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _197.MsgWithdrawDelegationRewardsResponse): _197.MsgWithdrawDelegationRewardsResponseAmino;
            };
            ValidatorPreference: {
                encode(message: _196.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ValidatorPreference;
                fromJSON(object: any): _196.ValidatorPreference;
                toJSON(message: _196.ValidatorPreference): unknown;
                fromPartial(object: Partial<_196.ValidatorPreference>): _196.ValidatorPreference;
                fromAmino(object: _196.ValidatorPreferenceAmino): _196.ValidatorPreference;
                toAmino(message: _196.ValidatorPreference): _196.ValidatorPreferenceAmino;
            };
            ValidatorSetPreferences: {
                encode(message: _196.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ValidatorSetPreferences;
                fromJSON(object: any): _196.ValidatorSetPreferences;
                toJSON(message: _196.ValidatorSetPreferences): unknown;
                fromPartial(object: Partial<_196.ValidatorSetPreferences>): _196.ValidatorSetPreferences;
                fromAmino(object: _196.ValidatorSetPreferencesAmino): _196.ValidatorSetPreferences;
                toAmino(message: _196.ValidatorSetPreferences): _196.ValidatorSetPreferencesAmino;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _195.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.UserValidatorPreferencesRequest;
                fromJSON(object: any): _195.UserValidatorPreferencesRequest;
                toJSON(message: _195.UserValidatorPreferencesRequest): unknown;
                fromPartial(object: Partial<_195.UserValidatorPreferencesRequest>): _195.UserValidatorPreferencesRequest;
                fromAmino(object: _195.UserValidatorPreferencesRequestAmino): _195.UserValidatorPreferencesRequest;
                toAmino(message: _195.UserValidatorPreferencesRequest): _195.UserValidatorPreferencesRequestAmino;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _195.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.UserValidatorPreferencesResponse;
                fromJSON(object: any): _195.UserValidatorPreferencesResponse;
                toJSON(message: _195.UserValidatorPreferencesResponse): unknown;
                fromPartial(object: Partial<_195.UserValidatorPreferencesResponse>): _195.UserValidatorPreferencesResponse;
                fromAmino(object: _195.UserValidatorPreferencesResponseAmino): _195.UserValidatorPreferencesResponse;
                toAmino(message: _195.UserValidatorPreferencesResponse): _195.UserValidatorPreferencesResponseAmino;
            };
        };
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
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _326.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _327.MsgClientImpl;
                        };
                    };
                    v1beta1: _328.MsgClientImpl;
                };
                incentives: _329.MsgClientImpl;
                lockup: _330.MsgClientImpl;
                protorev: {
                    v1beta1: _331.MsgClientImpl;
                };
                superfluid: _332.MsgClientImpl;
                swaprouter: {
                    v1beta1: _333.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _334.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _335.MsgClientImpl;
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
            osmosis: {
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _136.RecoveredSinceDowntimeOfLengthRequest): Promise<_136.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _138.QueryEpochsInfoRequest): Promise<_138.QueryEpochsInfoResponse>;
                        currentEpoch(request: _138.QueryCurrentEpochRequest): Promise<_138.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _141.QueryPoolsRequest): Promise<_141.QueryPoolsResponse>;
                        numPools(request?: _141.QueryNumPoolsRequest): Promise<_141.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _141.QueryTotalLiquidityRequest): Promise<_141.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _141.QueryPoolsWithFilterRequest): Promise<_141.QueryPoolsWithFilterResponse>;
                        pool(request: _141.QueryPoolRequest): Promise<_141.QueryPoolResponse>;
                        poolType(request: _141.QueryPoolTypeRequest): Promise<_141.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _141.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_141.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _141.QueryCalcJoinPoolSharesRequest): Promise<_141.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _141.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_141.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _141.QueryPoolParamsRequest): Promise<_141.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _141.QueryTotalPoolLiquidityRequest): Promise<_141.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _141.QueryTotalSharesRequest): Promise<_141.QueryTotalSharesResponse>;
                        spotPrice(request: _141.QuerySpotPriceRequest): Promise<_141.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _141.QuerySwapExactAmountInRequest): Promise<_141.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _141.QuerySwapExactAmountOutRequest): Promise<_141.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _146.QuerySpotPriceRequest): Promise<_146.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _152.ModuleToDistributeCoinsRequest): Promise<_152.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _152.GaugeByIDRequest): Promise<_152.GaugeByIDResponse>;
                    gauges(request?: _152.GaugesRequest): Promise<_152.GaugesResponse>;
                    activeGauges(request?: _152.ActiveGaugesRequest): Promise<_152.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _152.ActiveGaugesPerDenomRequest): Promise<_152.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _152.UpcomingGaugesRequest): Promise<_152.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _152.UpcomingGaugesPerDenomRequest): Promise<_152.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _152.RewardsEstRequest): Promise<_152.RewardsEstResponse>;
                    lockableDurations(request?: _152.QueryLockableDurationsRequest): Promise<_152.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _157.ModuleBalanceRequest): Promise<_157.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _157.ModuleLockedAmountRequest): Promise<_157.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _157.AccountUnlockableCoinsRequest): Promise<_157.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _157.AccountUnlockingCoinsRequest): Promise<_157.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _157.AccountLockedCoinsRequest): Promise<_157.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _157.AccountLockedPastTimeRequest): Promise<_157.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _157.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_157.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _157.AccountUnlockedBeforeTimeRequest): Promise<_157.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _157.AccountLockedPastTimeDenomRequest): Promise<_157.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _157.LockedDenomRequest): Promise<_157.LockedDenomResponse>;
                    lockedByID(request: _157.LockedRequest): Promise<_157.LockedResponse>;
                    syntheticLockupsByLockupID(request: _157.SyntheticLockupsByLockupIDRequest): Promise<_157.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _157.AccountLockedLongerDurationRequest): Promise<_157.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _157.AccountLockedDurationRequest): Promise<_157.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _157.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_157.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _157.AccountLockedLongerDurationDenomRequest): Promise<_157.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                        epochProvisions(request?: _161.QueryEpochProvisionsRequest): Promise<_161.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _165.QueryGaugeIdsRequest): Promise<_165.QueryGaugeIdsResponse>;
                        distrInfo(request?: _165.QueryDistrInfoRequest): Promise<_165.QueryDistrInfoResponse>;
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                        lockableDurations(request?: _165.QueryLockableDurationsRequest): Promise<_165.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _165.QueryIncentivizedPoolsRequest): Promise<_165.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _165.QueryExternalIncentiveGaugesRequest): Promise<_165.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _170.QueryGetProtoRevNumberOfTradesRequest): Promise<_170.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _170.QueryGetProtoRevProfitsByDenomRequest): Promise<_170.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _170.QueryGetProtoRevAllProfitsRequest): Promise<_170.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByPool(request: _170.QueryGetProtoRevStatisticsByPoolRequest): Promise<_170.QueryGetProtoRevStatisticsByPoolResponse>;
                        getProtoRevAllStatistics(request?: _170.QueryGetProtoRevAllStatisticsRequest): Promise<_170.QueryGetProtoRevAllStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _170.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_170.QueryGetProtoRevTokenPairArbRoutesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
                    assetType(request: _175.AssetTypeRequest): Promise<_175.AssetTypeResponse>;
                    allAssets(request?: _175.AllAssetsRequest): Promise<_175.AllAssetsResponse>;
                    assetMultiplier(request: _175.AssetMultiplierRequest): Promise<_175.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _175.AllIntermediaryAccountsRequest): Promise<_175.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _175.ConnectedIntermediaryAccountRequest): Promise<_175.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _175.QueryTotalDelegationByValidatorForDenomRequest): Promise<_175.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _175.TotalSuperfluidDelegationsRequest): Promise<_175.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _175.SuperfluidDelegationAmountRequest): Promise<_175.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _175.SuperfluidDelegationsByDelegatorRequest): Promise<_175.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _175.SuperfluidUndelegationsByDelegatorRequest): Promise<_175.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _175.SuperfluidDelegationsByValidatorDenomRequest): Promise<_175.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _175.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_175.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _175.QueryTotalDelegationByDelegatorRequest): Promise<_175.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _175.QueryUnpoolWhitelistRequest): Promise<_175.QueryUnpoolWhitelistResponse>;
                };
                swaprouter: {
                    v1beta1: {
                        params(request?: _180.ParamsRequest): Promise<_180.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _180.EstimateSwapExactAmountInRequest): Promise<_180.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _180.EstimateSwapExactAmountOutRequest): Promise<_180.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _180.NumPoolsRequest): Promise<_180.NumPoolsResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _186.QueryDenomAuthorityMetadataRequest): Promise<_186.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _186.QueryDenomsFromCreatorRequest): Promise<_186.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _189.ParamsRequest): Promise<_189.ParamsResponse>;
                        arithmeticTwap(request: _189.ArithmeticTwapRequest): Promise<_189.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _189.ArithmeticTwapToNowRequest): Promise<_189.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _194.QueryFeeTokensRequest): Promise<_194.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _194.QueryDenomSpotPriceRequest): Promise<_194.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _194.QueryDenomPoolIdRequest): Promise<_194.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _194.QueryBaseDenomRequest): Promise<_194.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _195.UserValidatorPreferencesRequest): Promise<_195.UserValidatorPreferencesResponse>;
                    };
                };
            };
        }>;
    };
}
