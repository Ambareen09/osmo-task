import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    denomCreationFee: Coin[];
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
    denom_creation_fee: CoinAmino[];
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
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
