import * as _95 from "./wasm/v1/authz";
import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _271 from "./wasm/v1/query.rpc.Query";
import * as _272 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _99.QueryContractInfoRequest): Promise<_99.QueryContractInfoResponse>;
                contractHistory(request: _99.QueryContractHistoryRequest): Promise<_99.QueryContractHistoryResponse>;
                contractsByCode(request: _99.QueryContractsByCodeRequest): Promise<_99.QueryContractsByCodeResponse>;
                allContractState(request: _99.QueryAllContractStateRequest): Promise<_99.QueryAllContractStateResponse>;
                rawContractState(request: _99.QueryRawContractStateRequest): Promise<_99.QueryRawContractStateResponse>;
                smartContractState(request: _99.QuerySmartContractStateRequest): Promise<_99.QuerySmartContractStateResponse>;
                code(request: _99.QueryCodeRequest): Promise<_99.QueryCodeResponse>;
                codes(request?: _99.QueryCodesRequest): Promise<_99.QueryCodesResponse>;
                pinnedCodes(request?: _99.QueryPinnedCodesRequest): Promise<_99.QueryPinnedCodesResponse>;
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                contractsByCreator(request: _99.QueryContractsByCreatorRequest): Promise<_99.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _100.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: _100.MsgStoreCode;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _100.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract2;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: _100.MsgExecuteContract;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: _100.MsgMigrateContract;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: _100.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _100.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _100.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _100.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _100.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _100.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _100.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: _100.MsgStoreCode;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _100.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract2;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: _100.MsgExecuteContract;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: _100.MsgMigrateContract;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: _100.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _100.MsgStoreCode) => _100.MsgStoreCodeAmino;
                    fromAmino: (object: _100.MsgStoreCodeAmino) => _100.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _100.MsgInstantiateContract) => _100.MsgInstantiateContractAmino;
                    fromAmino: (object: _100.MsgInstantiateContractAmino) => _100.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _100.MsgInstantiateContract2) => _100.MsgInstantiateContract2Amino;
                    fromAmino: (object: _100.MsgInstantiateContract2Amino) => _100.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _100.MsgExecuteContract) => _100.MsgExecuteContractAmino;
                    fromAmino: (object: _100.MsgExecuteContractAmino) => _100.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _100.MsgMigrateContract) => _100.MsgMigrateContractAmino;
                    fromAmino: (object: _100.MsgMigrateContractAmino) => _100.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateAdmin) => _100.MsgUpdateAdminAmino;
                    fromAmino: (object: _100.MsgUpdateAdminAmino) => _100.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _100.MsgClearAdmin) => _100.MsgClearAdminAmino;
                    fromAmino: (object: _100.MsgClearAdminAmino) => _100.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _101.AccessType;
            accessTypeToJSON(object: _101.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _101.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _101.ContractCodeHistoryOperationType): string;
            AccessType: typeof _101.AccessType;
            AccessTypeSDKType: typeof _101.AccessType;
            AccessTypeAmino: typeof _101.AccessType;
            ContractCodeHistoryOperationType: typeof _101.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _101.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _101.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _101.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AccessTypeParam;
                fromJSON(object: any): _101.AccessTypeParam;
                toJSON(message: _101.AccessTypeParam): unknown;
                fromPartial(object: Partial<_101.AccessTypeParam>): _101.AccessTypeParam;
                fromAmino(object: _101.AccessTypeParamAmino): _101.AccessTypeParam;
                toAmino(message: _101.AccessTypeParam): _101.AccessTypeParamAmino;
            };
            AccessConfig: {
                encode(message: _101.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AccessConfig;
                fromJSON(object: any): _101.AccessConfig;
                toJSON(message: _101.AccessConfig): unknown;
                fromPartial(object: Partial<_101.AccessConfig>): _101.AccessConfig;
                fromAmino(object: _101.AccessConfigAmino): _101.AccessConfig;
                toAmino(message: _101.AccessConfig): _101.AccessConfigAmino;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromJSON(object: any): _101.Params;
                toJSON(message: _101.Params): unknown;
                fromPartial(object: Partial<_101.Params>): _101.Params;
                fromAmino(object: _101.ParamsAmino): _101.Params;
                toAmino(message: _101.Params): _101.ParamsAmino;
            };
            CodeInfo: {
                encode(message: _101.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CodeInfo;
                fromJSON(object: any): _101.CodeInfo;
                toJSON(message: _101.CodeInfo): unknown;
                fromPartial(object: Partial<_101.CodeInfo>): _101.CodeInfo;
                fromAmino(object: _101.CodeInfoAmino): _101.CodeInfo;
                toAmino(message: _101.CodeInfo): _101.CodeInfoAmino;
            };
            ContractInfo: {
                encode(message: _101.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ContractInfo;
                fromJSON(object: any): _101.ContractInfo;
                toJSON(message: _101.ContractInfo): unknown;
                fromPartial(object: Partial<_101.ContractInfo>): _101.ContractInfo;
                fromAmino(object: _101.ContractInfoAmino): _101.ContractInfo;
                toAmino(message: _101.ContractInfo): _101.ContractInfoAmino;
            };
            ContractCodeHistoryEntry: {
                encode(message: _101.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ContractCodeHistoryEntry;
                fromJSON(object: any): _101.ContractCodeHistoryEntry;
                toJSON(message: _101.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_101.ContractCodeHistoryEntry>): _101.ContractCodeHistoryEntry;
                fromAmino(object: _101.ContractCodeHistoryEntryAmino): _101.ContractCodeHistoryEntry;
                toAmino(message: _101.ContractCodeHistoryEntry): _101.ContractCodeHistoryEntryAmino;
            };
            AbsoluteTxPosition: {
                encode(message: _101.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AbsoluteTxPosition;
                fromJSON(object: any): _101.AbsoluteTxPosition;
                toJSON(message: _101.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_101.AbsoluteTxPosition>): _101.AbsoluteTxPosition;
                fromAmino(object: _101.AbsoluteTxPositionAmino): _101.AbsoluteTxPosition;
                toAmino(message: _101.AbsoluteTxPosition): _101.AbsoluteTxPositionAmino;
            };
            Model: {
                encode(message: _101.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Model;
                fromJSON(object: any): _101.Model;
                toJSON(message: _101.Model): unknown;
                fromPartial(object: Partial<_101.Model>): _101.Model;
                fromAmino(object: _101.ModelAmino): _101.Model;
                toAmino(message: _101.Model): _101.ModelAmino;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                encode(message: _100.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgStoreCode;
                fromJSON(object: any): _100.MsgStoreCode;
                toJSON(message: _100.MsgStoreCode): unknown;
                fromPartial(object: Partial<_100.MsgStoreCode>): _100.MsgStoreCode;
                fromAmino(object: _100.MsgStoreCodeAmino): _100.MsgStoreCode;
                toAmino(message: _100.MsgStoreCode): _100.MsgStoreCodeAmino;
            };
            MsgStoreCodeResponse: {
                encode(message: _100.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgStoreCodeResponse;
                fromJSON(object: any): _100.MsgStoreCodeResponse;
                toJSON(message: _100.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_100.MsgStoreCodeResponse>): _100.MsgStoreCodeResponse;
                fromAmino(object: _100.MsgStoreCodeResponseAmino): _100.MsgStoreCodeResponse;
                toAmino(message: _100.MsgStoreCodeResponse): _100.MsgStoreCodeResponseAmino;
            };
            MsgInstantiateContract: {
                encode(message: _100.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContract;
                fromJSON(object: any): _100.MsgInstantiateContract;
                toJSON(message: _100.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_100.MsgInstantiateContract>): _100.MsgInstantiateContract;
                fromAmino(object: _100.MsgInstantiateContractAmino): _100.MsgInstantiateContract;
                toAmino(message: _100.MsgInstantiateContract): _100.MsgInstantiateContractAmino;
            };
            MsgInstantiateContract2: {
                encode(message: _100.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContract2;
                fromJSON(object: any): _100.MsgInstantiateContract2;
                toJSON(message: _100.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_100.MsgInstantiateContract2>): _100.MsgInstantiateContract2;
                fromAmino(object: _100.MsgInstantiateContract2Amino): _100.MsgInstantiateContract2;
                toAmino(message: _100.MsgInstantiateContract2): _100.MsgInstantiateContract2Amino;
            };
            MsgInstantiateContractResponse: {
                encode(message: _100.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContractResponse;
                fromJSON(object: any): _100.MsgInstantiateContractResponse;
                toJSON(message: _100.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_100.MsgInstantiateContractResponse>): _100.MsgInstantiateContractResponse;
                fromAmino(object: _100.MsgInstantiateContractResponseAmino): _100.MsgInstantiateContractResponse;
                toAmino(message: _100.MsgInstantiateContractResponse): _100.MsgInstantiateContractResponseAmino;
            };
            MsgInstantiateContract2Response: {
                encode(message: _100.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContract2Response;
                fromJSON(object: any): _100.MsgInstantiateContract2Response;
                toJSON(message: _100.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_100.MsgInstantiateContract2Response>): _100.MsgInstantiateContract2Response;
                fromAmino(object: _100.MsgInstantiateContract2ResponseAmino): _100.MsgInstantiateContract2Response;
                toAmino(message: _100.MsgInstantiateContract2Response): _100.MsgInstantiateContract2ResponseAmino;
            };
            MsgExecuteContract: {
                encode(message: _100.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgExecuteContract;
                fromJSON(object: any): _100.MsgExecuteContract;
                toJSON(message: _100.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_100.MsgExecuteContract>): _100.MsgExecuteContract;
                fromAmino(object: _100.MsgExecuteContractAmino): _100.MsgExecuteContract;
                toAmino(message: _100.MsgExecuteContract): _100.MsgExecuteContractAmino;
            };
            MsgExecuteContractResponse: {
                encode(message: _100.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgExecuteContractResponse;
                fromJSON(object: any): _100.MsgExecuteContractResponse;
                toJSON(message: _100.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_100.MsgExecuteContractResponse>): _100.MsgExecuteContractResponse;
                fromAmino(object: _100.MsgExecuteContractResponseAmino): _100.MsgExecuteContractResponse;
                toAmino(message: _100.MsgExecuteContractResponse): _100.MsgExecuteContractResponseAmino;
            };
            MsgMigrateContract: {
                encode(message: _100.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgMigrateContract;
                fromJSON(object: any): _100.MsgMigrateContract;
                toJSON(message: _100.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_100.MsgMigrateContract>): _100.MsgMigrateContract;
                fromAmino(object: _100.MsgMigrateContractAmino): _100.MsgMigrateContract;
                toAmino(message: _100.MsgMigrateContract): _100.MsgMigrateContractAmino;
            };
            MsgMigrateContractResponse: {
                encode(message: _100.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgMigrateContractResponse;
                fromJSON(object: any): _100.MsgMigrateContractResponse;
                toJSON(message: _100.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_100.MsgMigrateContractResponse>): _100.MsgMigrateContractResponse;
                fromAmino(object: _100.MsgMigrateContractResponseAmino): _100.MsgMigrateContractResponse;
                toAmino(message: _100.MsgMigrateContractResponse): _100.MsgMigrateContractResponseAmino;
            };
            MsgUpdateAdmin: {
                encode(message: _100.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgUpdateAdmin;
                fromJSON(object: any): _100.MsgUpdateAdmin;
                toJSON(message: _100.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_100.MsgUpdateAdmin>): _100.MsgUpdateAdmin;
                fromAmino(object: _100.MsgUpdateAdminAmino): _100.MsgUpdateAdmin;
                toAmino(message: _100.MsgUpdateAdmin): _100.MsgUpdateAdminAmino;
            };
            MsgUpdateAdminResponse: {
                encode(_: _100.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgUpdateAdminResponse;
                fromJSON(_: any): _100.MsgUpdateAdminResponse;
                toJSON(_: _100.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_100.MsgUpdateAdminResponse>): _100.MsgUpdateAdminResponse;
                fromAmino(_: _100.MsgUpdateAdminResponseAmino): _100.MsgUpdateAdminResponse;
                toAmino(_: _100.MsgUpdateAdminResponse): _100.MsgUpdateAdminResponseAmino;
            };
            MsgClearAdmin: {
                encode(message: _100.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgClearAdmin;
                fromJSON(object: any): _100.MsgClearAdmin;
                toJSON(message: _100.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_100.MsgClearAdmin>): _100.MsgClearAdmin;
                fromAmino(object: _100.MsgClearAdminAmino): _100.MsgClearAdmin;
                toAmino(message: _100.MsgClearAdmin): _100.MsgClearAdminAmino;
            };
            MsgClearAdminResponse: {
                encode(_: _100.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgClearAdminResponse;
                fromJSON(_: any): _100.MsgClearAdminResponse;
                toJSON(_: _100.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_100.MsgClearAdminResponse>): _100.MsgClearAdminResponse;
                fromAmino(_: _100.MsgClearAdminResponseAmino): _100.MsgClearAdminResponse;
                toAmino(_: _100.MsgClearAdminResponse): _100.MsgClearAdminResponseAmino;
            };
            QueryContractInfoRequest: {
                encode(message: _99.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractInfoRequest;
                fromJSON(object: any): _99.QueryContractInfoRequest;
                toJSON(message: _99.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_99.QueryContractInfoRequest>): _99.QueryContractInfoRequest;
                fromAmino(object: _99.QueryContractInfoRequestAmino): _99.QueryContractInfoRequest;
                toAmino(message: _99.QueryContractInfoRequest): _99.QueryContractInfoRequestAmino;
            };
            QueryContractInfoResponse: {
                encode(message: _99.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractInfoResponse;
                fromJSON(object: any): _99.QueryContractInfoResponse;
                toJSON(message: _99.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_99.QueryContractInfoResponse>): _99.QueryContractInfoResponse;
                fromAmino(object: _99.QueryContractInfoResponseAmino): _99.QueryContractInfoResponse;
                toAmino(message: _99.QueryContractInfoResponse): _99.QueryContractInfoResponseAmino;
            };
            QueryContractHistoryRequest: {
                encode(message: _99.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractHistoryRequest;
                fromJSON(object: any): _99.QueryContractHistoryRequest;
                toJSON(message: _99.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_99.QueryContractHistoryRequest>): _99.QueryContractHistoryRequest;
                fromAmino(object: _99.QueryContractHistoryRequestAmino): _99.QueryContractHistoryRequest;
                toAmino(message: _99.QueryContractHistoryRequest): _99.QueryContractHistoryRequestAmino;
            };
            QueryContractHistoryResponse: {
                encode(message: _99.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractHistoryResponse;
                fromJSON(object: any): _99.QueryContractHistoryResponse;
                toJSON(message: _99.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_99.QueryContractHistoryResponse>): _99.QueryContractHistoryResponse;
                fromAmino(object: _99.QueryContractHistoryResponseAmino): _99.QueryContractHistoryResponse;
                toAmino(message: _99.QueryContractHistoryResponse): _99.QueryContractHistoryResponseAmino;
            };
            QueryContractsByCodeRequest: {
                encode(message: _99.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCodeRequest;
                fromJSON(object: any): _99.QueryContractsByCodeRequest;
                toJSON(message: _99.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_99.QueryContractsByCodeRequest>): _99.QueryContractsByCodeRequest;
                fromAmino(object: _99.QueryContractsByCodeRequestAmino): _99.QueryContractsByCodeRequest;
                toAmino(message: _99.QueryContractsByCodeRequest): _99.QueryContractsByCodeRequestAmino;
            };
            QueryContractsByCodeResponse: {
                encode(message: _99.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCodeResponse;
                fromJSON(object: any): _99.QueryContractsByCodeResponse;
                toJSON(message: _99.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_99.QueryContractsByCodeResponse>): _99.QueryContractsByCodeResponse;
                fromAmino(object: _99.QueryContractsByCodeResponseAmino): _99.QueryContractsByCodeResponse;
                toAmino(message: _99.QueryContractsByCodeResponse): _99.QueryContractsByCodeResponseAmino;
            };
            QueryAllContractStateRequest: {
                encode(message: _99.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryAllContractStateRequest;
                fromJSON(object: any): _99.QueryAllContractStateRequest;
                toJSON(message: _99.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_99.QueryAllContractStateRequest>): _99.QueryAllContractStateRequest;
                fromAmino(object: _99.QueryAllContractStateRequestAmino): _99.QueryAllContractStateRequest;
                toAmino(message: _99.QueryAllContractStateRequest): _99.QueryAllContractStateRequestAmino;
            };
            QueryAllContractStateResponse: {
                encode(message: _99.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryAllContractStateResponse;
                fromJSON(object: any): _99.QueryAllContractStateResponse;
                toJSON(message: _99.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_99.QueryAllContractStateResponse>): _99.QueryAllContractStateResponse;
                fromAmino(object: _99.QueryAllContractStateResponseAmino): _99.QueryAllContractStateResponse;
                toAmino(message: _99.QueryAllContractStateResponse): _99.QueryAllContractStateResponseAmino;
            };
            QueryRawContractStateRequest: {
                encode(message: _99.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryRawContractStateRequest;
                fromJSON(object: any): _99.QueryRawContractStateRequest;
                toJSON(message: _99.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_99.QueryRawContractStateRequest>): _99.QueryRawContractStateRequest;
                fromAmino(object: _99.QueryRawContractStateRequestAmino): _99.QueryRawContractStateRequest;
                toAmino(message: _99.QueryRawContractStateRequest): _99.QueryRawContractStateRequestAmino;
            };
            QueryRawContractStateResponse: {
                encode(message: _99.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryRawContractStateResponse;
                fromJSON(object: any): _99.QueryRawContractStateResponse;
                toJSON(message: _99.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_99.QueryRawContractStateResponse>): _99.QueryRawContractStateResponse;
                fromAmino(object: _99.QueryRawContractStateResponseAmino): _99.QueryRawContractStateResponse;
                toAmino(message: _99.QueryRawContractStateResponse): _99.QueryRawContractStateResponseAmino;
            };
            QuerySmartContractStateRequest: {
                encode(message: _99.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySmartContractStateRequest;
                fromJSON(object: any): _99.QuerySmartContractStateRequest;
                toJSON(message: _99.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_99.QuerySmartContractStateRequest>): _99.QuerySmartContractStateRequest;
                fromAmino(object: _99.QuerySmartContractStateRequestAmino): _99.QuerySmartContractStateRequest;
                toAmino(message: _99.QuerySmartContractStateRequest): _99.QuerySmartContractStateRequestAmino;
            };
            QuerySmartContractStateResponse: {
                encode(message: _99.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySmartContractStateResponse;
                fromJSON(object: any): _99.QuerySmartContractStateResponse;
                toJSON(message: _99.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_99.QuerySmartContractStateResponse>): _99.QuerySmartContractStateResponse;
                fromAmino(object: _99.QuerySmartContractStateResponseAmino): _99.QuerySmartContractStateResponse;
                toAmino(message: _99.QuerySmartContractStateResponse): _99.QuerySmartContractStateResponseAmino;
            };
            QueryCodeRequest: {
                encode(message: _99.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodeRequest;
                fromJSON(object: any): _99.QueryCodeRequest;
                toJSON(message: _99.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_99.QueryCodeRequest>): _99.QueryCodeRequest;
                fromAmino(object: _99.QueryCodeRequestAmino): _99.QueryCodeRequest;
                toAmino(message: _99.QueryCodeRequest): _99.QueryCodeRequestAmino;
            };
            CodeInfoResponse: {
                encode(message: _99.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfoResponse;
                fromJSON(object: any): _99.CodeInfoResponse;
                toJSON(message: _99.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_99.CodeInfoResponse>): _99.CodeInfoResponse;
                fromAmino(object: _99.CodeInfoResponseAmino): _99.CodeInfoResponse;
                toAmino(message: _99.CodeInfoResponse): _99.CodeInfoResponseAmino;
            };
            QueryCodeResponse: {
                encode(message: _99.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodeResponse;
                fromJSON(object: any): _99.QueryCodeResponse;
                toJSON(message: _99.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_99.QueryCodeResponse>): _99.QueryCodeResponse;
                fromAmino(object: _99.QueryCodeResponseAmino): _99.QueryCodeResponse;
                toAmino(message: _99.QueryCodeResponse): _99.QueryCodeResponseAmino;
            };
            QueryCodesRequest: {
                encode(message: _99.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodesRequest;
                fromJSON(object: any): _99.QueryCodesRequest;
                toJSON(message: _99.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_99.QueryCodesRequest>): _99.QueryCodesRequest;
                fromAmino(object: _99.QueryCodesRequestAmino): _99.QueryCodesRequest;
                toAmino(message: _99.QueryCodesRequest): _99.QueryCodesRequestAmino;
            };
            QueryCodesResponse: {
                encode(message: _99.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodesResponse;
                fromJSON(object: any): _99.QueryCodesResponse;
                toJSON(message: _99.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_99.QueryCodesResponse>): _99.QueryCodesResponse;
                fromAmino(object: _99.QueryCodesResponseAmino): _99.QueryCodesResponse;
                toAmino(message: _99.QueryCodesResponse): _99.QueryCodesResponseAmino;
            };
            QueryPinnedCodesRequest: {
                encode(message: _99.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryPinnedCodesRequest;
                fromJSON(object: any): _99.QueryPinnedCodesRequest;
                toJSON(message: _99.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_99.QueryPinnedCodesRequest>): _99.QueryPinnedCodesRequest;
                fromAmino(object: _99.QueryPinnedCodesRequestAmino): _99.QueryPinnedCodesRequest;
                toAmino(message: _99.QueryPinnedCodesRequest): _99.QueryPinnedCodesRequestAmino;
            };
            QueryPinnedCodesResponse: {
                encode(message: _99.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryPinnedCodesResponse;
                fromJSON(object: any): _99.QueryPinnedCodesResponse;
                toJSON(message: _99.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_99.QueryPinnedCodesResponse>): _99.QueryPinnedCodesResponse;
                fromAmino(object: _99.QueryPinnedCodesResponseAmino): _99.QueryPinnedCodesResponse;
                toAmino(message: _99.QueryPinnedCodesResponse): _99.QueryPinnedCodesResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _99.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsRequest;
                fromJSON(_: any): _99.QueryParamsRequest;
                toJSON(_: _99.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(_: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(_: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _99.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsResponse;
                fromJSON(object: any): _99.QueryParamsResponse;
                toJSON(message: _99.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
                fromAmino(object: _99.QueryParamsResponseAmino): _99.QueryParamsResponse;
                toAmino(message: _99.QueryParamsResponse): _99.QueryParamsResponseAmino;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _99.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCreatorRequest;
                fromJSON(object: any): _99.QueryContractsByCreatorRequest;
                toJSON(message: _99.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_99.QueryContractsByCreatorRequest>): _99.QueryContractsByCreatorRequest;
                fromAmino(object: _99.QueryContractsByCreatorRequestAmino): _99.QueryContractsByCreatorRequest;
                toAmino(message: _99.QueryContractsByCreatorRequest): _99.QueryContractsByCreatorRequestAmino;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _99.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCreatorResponse;
                fromJSON(object: any): _99.QueryContractsByCreatorResponse;
                toJSON(message: _99.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_99.QueryContractsByCreatorResponse>): _99.QueryContractsByCreatorResponse;
                fromAmino(object: _99.QueryContractsByCreatorResponseAmino): _99.QueryContractsByCreatorResponse;
                toAmino(message: _99.QueryContractsByCreatorResponse): _99.QueryContractsByCreatorResponseAmino;
            };
            StoreCodeProposal: {
                encode(message: _98.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.StoreCodeProposal;
                fromJSON(object: any): _98.StoreCodeProposal;
                toJSON(message: _98.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_98.StoreCodeProposal>): _98.StoreCodeProposal;
                fromAmino(object: _98.StoreCodeProposalAmino): _98.StoreCodeProposal;
                toAmino(message: _98.StoreCodeProposal): _98.StoreCodeProposalAmino;
            };
            InstantiateContractProposal: {
                encode(message: _98.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.InstantiateContractProposal;
                fromJSON(object: any): _98.InstantiateContractProposal;
                toJSON(message: _98.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_98.InstantiateContractProposal>): _98.InstantiateContractProposal;
                fromAmino(object: _98.InstantiateContractProposalAmino): _98.InstantiateContractProposal;
                toAmino(message: _98.InstantiateContractProposal): _98.InstantiateContractProposalAmino;
            };
            InstantiateContract2Proposal: {
                encode(message: _98.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.InstantiateContract2Proposal;
                fromJSON(object: any): _98.InstantiateContract2Proposal;
                toJSON(message: _98.InstantiateContract2Proposal): unknown;
                fromPartial(object: Partial<_98.InstantiateContract2Proposal>): _98.InstantiateContract2Proposal;
                fromAmino(object: _98.InstantiateContract2ProposalAmino): _98.InstantiateContract2Proposal;
                toAmino(message: _98.InstantiateContract2Proposal): _98.InstantiateContract2ProposalAmino;
            };
            MigrateContractProposal: {
                encode(message: _98.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MigrateContractProposal;
                fromJSON(object: any): _98.MigrateContractProposal;
                toJSON(message: _98.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_98.MigrateContractProposal>): _98.MigrateContractProposal;
                fromAmino(object: _98.MigrateContractProposalAmino): _98.MigrateContractProposal;
                toAmino(message: _98.MigrateContractProposal): _98.MigrateContractProposalAmino;
            };
            SudoContractProposal: {
                encode(message: _98.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SudoContractProposal;
                fromJSON(object: any): _98.SudoContractProposal;
                toJSON(message: _98.SudoContractProposal): unknown;
                fromPartial(object: Partial<_98.SudoContractProposal>): _98.SudoContractProposal;
                fromAmino(object: _98.SudoContractProposalAmino): _98.SudoContractProposal;
                toAmino(message: _98.SudoContractProposal): _98.SudoContractProposalAmino;
            };
            ExecuteContractProposal: {
                encode(message: _98.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ExecuteContractProposal;
                fromJSON(object: any): _98.ExecuteContractProposal;
                toJSON(message: _98.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_98.ExecuteContractProposal>): _98.ExecuteContractProposal;
                fromAmino(object: _98.ExecuteContractProposalAmino): _98.ExecuteContractProposal;
                toAmino(message: _98.ExecuteContractProposal): _98.ExecuteContractProposalAmino;
            };
            UpdateAdminProposal: {
                encode(message: _98.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UpdateAdminProposal;
                fromJSON(object: any): _98.UpdateAdminProposal;
                toJSON(message: _98.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_98.UpdateAdminProposal>): _98.UpdateAdminProposal;
                fromAmino(object: _98.UpdateAdminProposalAmino): _98.UpdateAdminProposal;
                toAmino(message: _98.UpdateAdminProposal): _98.UpdateAdminProposalAmino;
            };
            ClearAdminProposal: {
                encode(message: _98.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ClearAdminProposal;
                fromJSON(object: any): _98.ClearAdminProposal;
                toJSON(message: _98.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_98.ClearAdminProposal>): _98.ClearAdminProposal;
                fromAmino(object: _98.ClearAdminProposalAmino): _98.ClearAdminProposal;
                toAmino(message: _98.ClearAdminProposal): _98.ClearAdminProposalAmino;
            };
            PinCodesProposal: {
                encode(message: _98.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PinCodesProposal;
                fromJSON(object: any): _98.PinCodesProposal;
                toJSON(message: _98.PinCodesProposal): unknown;
                fromPartial(object: Partial<_98.PinCodesProposal>): _98.PinCodesProposal;
                fromAmino(object: _98.PinCodesProposalAmino): _98.PinCodesProposal;
                toAmino(message: _98.PinCodesProposal): _98.PinCodesProposalAmino;
            };
            UnpinCodesProposal: {
                encode(message: _98.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UnpinCodesProposal;
                fromJSON(object: any): _98.UnpinCodesProposal;
                toJSON(message: _98.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_98.UnpinCodesProposal>): _98.UnpinCodesProposal;
                fromAmino(object: _98.UnpinCodesProposalAmino): _98.UnpinCodesProposal;
                toAmino(message: _98.UnpinCodesProposal): _98.UnpinCodesProposalAmino;
            };
            AccessConfigUpdate: {
                encode(message: _98.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccessConfigUpdate;
                fromJSON(object: any): _98.AccessConfigUpdate;
                toJSON(message: _98.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_98.AccessConfigUpdate>): _98.AccessConfigUpdate;
                fromAmino(object: _98.AccessConfigUpdateAmino): _98.AccessConfigUpdate;
                toAmino(message: _98.AccessConfigUpdate): _98.AccessConfigUpdateAmino;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _98.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _98.UpdateInstantiateConfigProposal;
                toJSON(message: _98.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_98.UpdateInstantiateConfigProposal>): _98.UpdateInstantiateConfigProposal;
                fromAmino(object: _98.UpdateInstantiateConfigProposalAmino): _98.UpdateInstantiateConfigProposal;
                toAmino(message: _98.UpdateInstantiateConfigProposal): _98.UpdateInstantiateConfigProposalAmino;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _98.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _98.StoreAndInstantiateContractProposal;
                toJSON(message: _98.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_98.StoreAndInstantiateContractProposal>): _98.StoreAndInstantiateContractProposal;
                fromAmino(object: _98.StoreAndInstantiateContractProposalAmino): _98.StoreAndInstantiateContractProposal;
                toAmino(message: _98.StoreAndInstantiateContractProposal): _98.StoreAndInstantiateContractProposalAmino;
            };
            MsgIBCSend: {
                encode(message: _97.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgIBCSend;
                fromJSON(object: any): _97.MsgIBCSend;
                toJSON(message: _97.MsgIBCSend): unknown;
                fromPartial(object: Partial<_97.MsgIBCSend>): _97.MsgIBCSend;
                fromAmino(object: _97.MsgIBCSendAmino): _97.MsgIBCSend;
                toAmino(message: _97.MsgIBCSend): _97.MsgIBCSendAmino;
            };
            MsgIBCCloseChannel: {
                encode(message: _97.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgIBCCloseChannel;
                fromJSON(object: any): _97.MsgIBCCloseChannel;
                toJSON(message: _97.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_97.MsgIBCCloseChannel>): _97.MsgIBCCloseChannel;
                fromAmino(object: _97.MsgIBCCloseChannelAmino): _97.MsgIBCCloseChannel;
                toAmino(message: _97.MsgIBCCloseChannel): _97.MsgIBCCloseChannelAmino;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
            };
            Code: {
                encode(message: _96.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Code;
                fromJSON(object: any): _96.Code;
                toJSON(message: _96.Code): unknown;
                fromPartial(object: Partial<_96.Code>): _96.Code;
                fromAmino(object: _96.CodeAmino): _96.Code;
                toAmino(message: _96.Code): _96.CodeAmino;
            };
            Contract: {
                encode(message: _96.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Contract;
                fromJSON(object: any): _96.Contract;
                toJSON(message: _96.Contract): unknown;
                fromPartial(object: Partial<_96.Contract>): _96.Contract;
                fromAmino(object: _96.ContractAmino): _96.Contract;
                toAmino(message: _96.Contract): _96.ContractAmino;
            };
            Sequence: {
                encode(message: _96.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Sequence;
                fromJSON(object: any): _96.Sequence;
                toJSON(message: _96.Sequence): unknown;
                fromPartial(object: Partial<_96.Sequence>): _96.Sequence;
                fromAmino(object: _96.SequenceAmino): _96.Sequence;
                toAmino(message: _96.Sequence): _96.SequenceAmino;
            };
            ContractExecutionAuthorization: {
                encode(message: _95.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ContractExecutionAuthorization;
                fromJSON(object: any): _95.ContractExecutionAuthorization;
                toJSON(message: _95.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_95.ContractExecutionAuthorization>): _95.ContractExecutionAuthorization;
                fromAmino(object: _95.ContractExecutionAuthorizationAmino): _95.ContractExecutionAuthorization;
                toAmino(message: _95.ContractExecutionAuthorization): _95.ContractExecutionAuthorizationAmino;
            };
            ContractMigrationAuthorization: {
                encode(message: _95.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ContractMigrationAuthorization;
                fromJSON(object: any): _95.ContractMigrationAuthorization;
                toJSON(message: _95.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_95.ContractMigrationAuthorization>): _95.ContractMigrationAuthorization;
                fromAmino(object: _95.ContractMigrationAuthorizationAmino): _95.ContractMigrationAuthorization;
                toAmino(message: _95.ContractMigrationAuthorization): _95.ContractMigrationAuthorizationAmino;
            };
            ContractGrant: {
                encode(message: _95.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ContractGrant;
                fromJSON(object: any): _95.ContractGrant;
                toJSON(message: _95.ContractGrant): unknown;
                fromPartial(object: Partial<_95.ContractGrant>): _95.ContractGrant;
                fromAmino(object: _95.ContractGrantAmino): _95.ContractGrant;
                toAmino(message: _95.ContractGrant): _95.ContractGrantAmino;
            };
            MaxCallsLimit: {
                encode(message: _95.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MaxCallsLimit;
                fromJSON(object: any): _95.MaxCallsLimit;
                toJSON(message: _95.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_95.MaxCallsLimit>): _95.MaxCallsLimit;
                fromAmino(object: _95.MaxCallsLimitAmino): _95.MaxCallsLimit;
                toAmino(message: _95.MaxCallsLimit): _95.MaxCallsLimitAmino;
            };
            MaxFundsLimit: {
                encode(message: _95.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MaxFundsLimit;
                fromJSON(object: any): _95.MaxFundsLimit;
                toJSON(message: _95.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_95.MaxFundsLimit>): _95.MaxFundsLimit;
                fromAmino(object: _95.MaxFundsLimitAmino): _95.MaxFundsLimit;
                toAmino(message: _95.MaxFundsLimit): _95.MaxFundsLimitAmino;
            };
            CombinedLimit: {
                encode(message: _95.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CombinedLimit;
                fromJSON(object: any): _95.CombinedLimit;
                toJSON(message: _95.CombinedLimit): unknown;
                fromPartial(object: Partial<_95.CombinedLimit>): _95.CombinedLimit;
                fromAmino(object: _95.CombinedLimitAmino): _95.CombinedLimit;
                toAmino(message: _95.CombinedLimit): _95.CombinedLimitAmino;
            };
            AllowAllMessagesFilter: {
                encode(_: _95.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AllowAllMessagesFilter;
                fromJSON(_: any): _95.AllowAllMessagesFilter;
                toJSON(_: _95.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_95.AllowAllMessagesFilter>): _95.AllowAllMessagesFilter;
                fromAmino(_: _95.AllowAllMessagesFilterAmino): _95.AllowAllMessagesFilter;
                toAmino(_: _95.AllowAllMessagesFilter): _95.AllowAllMessagesFilterAmino;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _95.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AcceptedMessageKeysFilter;
                fromJSON(object: any): _95.AcceptedMessageKeysFilter;
                toJSON(message: _95.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_95.AcceptedMessageKeysFilter>): _95.AcceptedMessageKeysFilter;
                fromAmino(object: _95.AcceptedMessageKeysFilterAmino): _95.AcceptedMessageKeysFilter;
                toAmino(message: _95.AcceptedMessageKeysFilter): _95.AcceptedMessageKeysFilterAmino;
            };
            AcceptedMessagesFilter: {
                encode(message: _95.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AcceptedMessagesFilter;
                fromJSON(object: any): _95.AcceptedMessagesFilter;
                toJSON(message: _95.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_95.AcceptedMessagesFilter>): _95.AcceptedMessagesFilter;
                fromAmino(object: _95.AcceptedMessagesFilterAmino): _95.AcceptedMessagesFilter;
                toAmino(message: _95.AcceptedMessagesFilter): _95.AcceptedMessagesFilterAmino;
            };
            ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _95.MaxCallsLimit | _95.MaxFundsLimit | _95.CombinedLimit;
            ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _95.MaxCallsLimitAmino;
            } | {
                type: string;
                value: _95.MaxFundsLimitAmino;
            };
            ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _95.AllowAllMessagesFilter | _95.AcceptedMessageKeysFilter | _95.AcceptedMessagesFilter;
            ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => {
                type: string;
                value: _95.AllowAllMessagesFilterAmino;
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
            cosmwasm: {
                wasm: {
                    v1: _272.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _99.QueryContractInfoRequest): Promise<_99.QueryContractInfoResponse>;
                        contractHistory(request: _99.QueryContractHistoryRequest): Promise<_99.QueryContractHistoryResponse>;
                        contractsByCode(request: _99.QueryContractsByCodeRequest): Promise<_99.QueryContractsByCodeResponse>;
                        allContractState(request: _99.QueryAllContractStateRequest): Promise<_99.QueryAllContractStateResponse>;
                        rawContractState(request: _99.QueryRawContractStateRequest): Promise<_99.QueryRawContractStateResponse>;
                        smartContractState(request: _99.QuerySmartContractStateRequest): Promise<_99.QuerySmartContractStateResponse>;
                        code(request: _99.QueryCodeRequest): Promise<_99.QueryCodeResponse>;
                        codes(request?: _99.QueryCodesRequest): Promise<_99.QueryCodesResponse>;
                        pinnedCodes(request?: _99.QueryPinnedCodesRequest): Promise<_99.QueryPinnedCodesResponse>;
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        contractsByCreator(request: _99.QueryContractsByCreatorRequest): Promise<_99.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
