import * as _m0 from "protobufjs/minimal";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalAmino {
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    account: string;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalAmino {
    title: string;
    description: string;
    account: string;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    account: string;
}
export declare const SetProtoRevEnabledProposal: {
    encode(message: SetProtoRevEnabledProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevEnabledProposal;
    fromJSON(object: any): SetProtoRevEnabledProposal;
    toJSON(message: SetProtoRevEnabledProposal): unknown;
    fromPartial(object: Partial<SetProtoRevEnabledProposal>): SetProtoRevEnabledProposal;
    fromAmino(object: SetProtoRevEnabledProposalAmino): SetProtoRevEnabledProposal;
    toAmino(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalAmino;
};
export declare const SetProtoRevAdminAccountProposal: {
    encode(message: SetProtoRevAdminAccountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevAdminAccountProposal;
    fromJSON(object: any): SetProtoRevAdminAccountProposal;
    toJSON(message: SetProtoRevAdminAccountProposal): unknown;
    fromPartial(object: Partial<SetProtoRevAdminAccountProposal>): SetProtoRevAdminAccountProposal;
    fromAmino(object: SetProtoRevAdminAccountProposalAmino): SetProtoRevAdminAccountProposal;
    toAmino(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalAmino;
};
