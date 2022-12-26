import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType } from "../superfluid";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalAmino {
    title: string;
    description: string;
    assets: SuperfluidAssetAmino[];
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalAmino {
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    ids: Long[];
    isOverwrite: boolean;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalAmino {
    title: string;
    description: string;
    ids: string[];
    is_overwrite: boolean;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    ids: Long[];
    is_overwrite: boolean;
}
export declare const SetSuperfluidAssetsProposal: {
    encode(message: SetSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromJSON(object: any): SetSuperfluidAssetsProposal;
    toJSON(message: SetSuperfluidAssetsProposal): unknown;
    fromPartial(object: Partial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal;
    fromAmino(object: SetSuperfluidAssetsProposalAmino): SetSuperfluidAssetsProposal;
    toAmino(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAmino;
};
export declare const RemoveSuperfluidAssetsProposal: {
    encode(message: RemoveSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromJSON(object: any): RemoveSuperfluidAssetsProposal;
    toJSON(message: RemoveSuperfluidAssetsProposal): unknown;
    fromPartial(object: Partial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal;
    fromAmino(object: RemoveSuperfluidAssetsProposalAmino): RemoveSuperfluidAssetsProposal;
    toAmino(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAmino;
};
export declare const UpdateUnpoolWhiteListProposal: {
    encode(message: UpdateUnpoolWhiteListProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal;
    fromJSON(object: any): UpdateUnpoolWhiteListProposal;
    toJSON(message: UpdateUnpoolWhiteListProposal): unknown;
    fromPartial(object: Partial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal;
    fromAmino(object: UpdateUnpoolWhiteListProposalAmino): UpdateUnpoolWhiteListProposal;
    toAmino(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAmino;
};
