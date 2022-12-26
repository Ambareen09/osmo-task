import * as _m0 from "protobufjs/minimal";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataAmino {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    admin: string;
}
export declare const DenomAuthorityMetadata: {
    encode(message: DenomAuthorityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
    fromAmino(object: DenomAuthorityMetadataAmino): DenomAuthorityMetadata;
    toAmino(message: DenomAuthorityMetadata): DenomAuthorityMetadataAmino;
};
