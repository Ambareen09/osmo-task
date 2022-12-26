import * as _m0 from "protobufjs/minimal";
export interface Params {
    forceUnlockAllowedAddresses: string[];
}
export interface ParamsAmino {
    force_unlock_allowed_addresses: string[];
}
export interface ParamsSDKType {
    force_unlock_allowed_addresses: string[];
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
