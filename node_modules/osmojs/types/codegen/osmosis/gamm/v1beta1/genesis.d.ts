import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
    pools: (Pool1 & Pool2 & Any)[] | Any[];
    /** will be renamed to next_pool_id in an upcoming version */
    nextPoolNumber: Long;
    params?: Params;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
    pools: AnyAmino[];
    /** will be renamed to next_pool_id in an upcoming version */
    next_pool_number: string;
    params?: ParamsAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
    pools: AnySDKType[];
    next_pool_number: Long;
    params?: ParamsSDKType;
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
};
export declare const PoolI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Pool1 | Pool2 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("../pool-models/balancer/balancerPool").PoolAmino;
} | {
    type: string;
    value: import("../pool-models/stableswap/stableswap_pool").PoolAmino;
};
