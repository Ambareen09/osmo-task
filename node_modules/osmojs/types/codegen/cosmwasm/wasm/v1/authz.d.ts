import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    $typeUrl?: string;
    /** Grants for contract executions */
    grants: ContractGrant[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationAmino {
    /** Grants for contract executions */
    grants: ContractGrantAmino[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
    $typeUrl?: string;
    grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    $typeUrl?: string;
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationAmino {
    /** Grants for contract migrations */
    grants: ContractGrantAmino[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
    $typeUrl?: string;
    grants: ContractGrantSDKType[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: (MaxCallsLimit & MaxFundsLimit & CombinedLimit & Any) | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: (AllowAllMessagesFilter & AcceptedMessageKeysFilter & AcceptedMessagesFilter & Any) | undefined;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantAmino {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: AnyAmino;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AnyAmino;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
    contract: string;
    limit?: AnySDKType;
    filter?: AnySDKType;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    $typeUrl?: string;
    /** Remaining number that is decremented on each execution */
    remaining: Long;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitAmino {
    /** Remaining number that is decremented on each execution */
    remaining: string;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
    $typeUrl?: string;
    remaining: Long;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    $typeUrl?: string;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitAmino {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: CoinAmino[];
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
    $typeUrl?: string;
    amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    $typeUrl?: string;
    /** Remaining number that is decremented on each execution */
    callsRemaining: Long;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitAmino {
    /** Remaining number that is decremented on each execution */
    calls_remaining: string;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: CoinAmino[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
    $typeUrl?: string;
    calls_remaining: Long;
    amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
    $typeUrl?: string;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterAmino {
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
    $typeUrl?: string;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    $typeUrl?: string;
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterAmino {
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
    $typeUrl?: string;
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    $typeUrl?: string;
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterAmino {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
    $typeUrl?: string;
    messages: Uint8Array[];
}
export declare const ContractExecutionAuthorization: {
    encode(message: ContractExecutionAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromJSON(object: any): ContractExecutionAuthorization;
    toJSON(message: ContractExecutionAuthorization): unknown;
    fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
    fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization;
    toAmino(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAmino;
};
export declare const ContractMigrationAuthorization: {
    encode(message: ContractMigrationAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromJSON(object: any): ContractMigrationAuthorization;
    toJSON(message: ContractMigrationAuthorization): unknown;
    fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
    fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization;
    toAmino(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAmino;
};
export declare const ContractGrant: {
    encode(message: ContractGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrant;
    fromJSON(object: any): ContractGrant;
    toJSON(message: ContractGrant): unknown;
    fromPartial(object: Partial<ContractGrant>): ContractGrant;
    fromAmino(object: ContractGrantAmino): ContractGrant;
    toAmino(message: ContractGrant): ContractGrantAmino;
};
export declare const MaxCallsLimit: {
    encode(message: MaxCallsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxCallsLimit;
    fromJSON(object: any): MaxCallsLimit;
    toJSON(message: MaxCallsLimit): unknown;
    fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit;
    fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit;
    toAmino(message: MaxCallsLimit): MaxCallsLimitAmino;
};
export declare const MaxFundsLimit: {
    encode(message: MaxFundsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxFundsLimit;
    fromJSON(object: any): MaxFundsLimit;
    toJSON(message: MaxFundsLimit): unknown;
    fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit;
    fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit;
    toAmino(message: MaxFundsLimit): MaxFundsLimitAmino;
};
export declare const CombinedLimit: {
    encode(message: CombinedLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CombinedLimit;
    fromJSON(object: any): CombinedLimit;
    toJSON(message: CombinedLimit): unknown;
    fromPartial(object: Partial<CombinedLimit>): CombinedLimit;
    fromAmino(object: CombinedLimitAmino): CombinedLimit;
    toAmino(message: CombinedLimit): CombinedLimitAmino;
};
export declare const AllowAllMessagesFilter: {
    encode(_: AllowAllMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromJSON(_: any): AllowAllMessagesFilter;
    toJSON(_: AllowAllMessagesFilter): unknown;
    fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
    fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter;
    toAmino(_: AllowAllMessagesFilter): AllowAllMessagesFilterAmino;
};
export declare const AcceptedMessageKeysFilter: {
    encode(message: AcceptedMessageKeysFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromJSON(object: any): AcceptedMessageKeysFilter;
    toJSON(message: AcceptedMessageKeysFilter): unknown;
    fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
    fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter;
    toAmino(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAmino;
};
export declare const AcceptedMessagesFilter: {
    encode(message: AcceptedMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromJSON(object: any): AcceptedMessagesFilter;
    toJSON(message: AcceptedMessagesFilter): unknown;
    fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
    fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter;
    toAmino(message: AcceptedMessagesFilter): AcceptedMessagesFilterAmino;
};
export declare const ContractAuthzLimitX_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any;
export declare const ContractAuthzLimitX_FromAmino: (content: AnyAmino) => Any;
export declare const ContractAuthzLimitX_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: MaxCallsLimitAmino;
} | {
    type: string;
    value: MaxFundsLimitAmino;
};
export declare const ContractAuthzFilterX_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any;
export declare const ContractAuthzFilterX_FromAmino: (content: AnyAmino) => Any;
export declare const ContractAuthzFilterX_ToAmino: (content: Any) => {
    type: string;
    value: AllowAllMessagesFilterAmino;
};
