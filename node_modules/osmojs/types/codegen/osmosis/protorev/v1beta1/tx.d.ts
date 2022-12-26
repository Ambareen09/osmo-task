import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hot_routes: TokenPairArbRoutesAmino[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    admin: string;
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developerAccount: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developer_account: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
    admin: string;
    developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    encode(message: MsgSetHotRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutes;
    fromJSON(object: any): MsgSetHotRoutes;
    toJSON(message: MsgSetHotRoutes): unknown;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
    fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes;
    toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino;
};
export declare const MsgSetHotRoutesResponse: {
    encode(_: MsgSetHotRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutesResponse;
    fromJSON(_: any): MsgSetHotRoutesResponse;
    toJSON(_: MsgSetHotRoutesResponse): unknown;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
    fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse;
    toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino;
};
export declare const MsgSetDeveloperAccount: {
    encode(message: MsgSetDeveloperAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccount;
    fromJSON(object: any): MsgSetDeveloperAccount;
    toJSON(message: MsgSetDeveloperAccount): unknown;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
    fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount;
    toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino;
};
export declare const MsgSetDeveloperAccountResponse: {
    encode(_: MsgSetDeveloperAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse;
    fromJSON(_: any): MsgSetDeveloperAccountResponse;
    toJSON(_: MsgSetDeveloperAccountResponse): unknown;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
    fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse;
    toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino;
};
