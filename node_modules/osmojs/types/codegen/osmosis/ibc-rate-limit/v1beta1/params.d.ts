import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
    contractAddress: string;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
    contract_address: string;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
    contract_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
};
