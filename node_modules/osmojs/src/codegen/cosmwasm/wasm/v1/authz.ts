import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
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

export interface AllowAllMessagesFilterAmino {}
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

function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    grants: []
  };
}

export const ContractExecutionAuthorization = {
  encode(message: ContractExecutionAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractExecutionAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },

  toJSON(message: ContractExecutionAuthorization): unknown {
    const obj: any = {};

    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromAmino(e)) : []
    };
  },

  toAmino(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAmino {
    const obj: any = {};

    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }

    return obj;
  }

};

function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    grants: []
  };
}

export const ContractMigrationAuthorization = {
  encode(message: ContractMigrationAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractMigrationAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },

  toJSON(message: ContractMigrationAuthorization): unknown {
    const obj: any = {};

    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromAmino(e)) : []
    };
  },

  toAmino(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAmino {
    const obj: any = {};

    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }

    return obj;
  }

};

function createBaseContractGrant(): ContractGrant {
  return {
    contract: "",
    limit: undefined,
    filter: undefined
  };
}

export const ContractGrant = {
  encode(message: ContractGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    if (message.limit !== undefined) {
      Any.encode((message.limit as Any), writer.uint32(18).fork()).ldelim();
    }

    if (message.filter !== undefined) {
      Any.encode((message.filter as Any), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        case 2:
          message.limit = (ContractAuthzLimitX_InterfaceDecoder(reader) as Any);
          break;

        case 3:
          message.filter = (ContractAuthzFilterX_InterfaceDecoder(reader) as Any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractGrant {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
      filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined
    };
  },

  toJSON(message: ContractGrant): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.limit !== undefined && (obj.limit = message.limit ? Any.toJSON(message.limit) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? Any.toJSON(message.filter) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ContractGrant>): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Any.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? Any.fromPartial(object.filter) : undefined;
    return message;
  },

  fromAmino(object: ContractGrantAmino): ContractGrant {
    return {
      contract: object.contract,
      limit: object?.limit ? ContractAuthzLimitX_FromAmino(object.limit) : undefined,
      filter: object?.filter ? ContractAuthzFilterX_FromAmino(object.filter) : undefined
    };
  },

  toAmino(message: ContractGrant): ContractGrantAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.limit = message.limit ? ContractAuthzLimitX_ToAmino((message.limit as Any)) : undefined;
    obj.filter = message.filter ? ContractAuthzFilterX_ToAmino((message.filter as Any)) : undefined;
    return obj;
  }

};

function createBaseMaxCallsLimit(): MaxCallsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    remaining: Long.UZERO
  };
}

export const MaxCallsLimit = {
  encode(message: MaxCallsLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.remaining.isZero()) {
      writer.uint32(8).uint64(message.remaining);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxCallsLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.remaining = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MaxCallsLimit {
    return {
      remaining: isSet(object.remaining) ? Long.fromValue(object.remaining) : Long.UZERO
    };
  },

  toJSON(message: MaxCallsLimit): unknown {
    const obj: any = {};
    message.remaining !== undefined && (obj.remaining = (message.remaining || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? Long.fromValue(object.remaining) : Long.UZERO;
    return message;
  },

  fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit {
    return {
      remaining: Long.fromString(object.remaining)
    };
  },

  toAmino(message: MaxCallsLimit): MaxCallsLimitAmino {
    const obj: any = {};
    obj.remaining = message.remaining ? message.remaining.toString() : undefined;
    return obj;
  }

};

function createBaseMaxFundsLimit(): MaxFundsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    amounts: []
  };
}

export const MaxFundsLimit = {
  encode(message: MaxFundsLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxFundsLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MaxFundsLimit): unknown {
    const obj: any = {};

    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: MaxFundsLimit): MaxFundsLimitAmino {
    const obj: any = {};

    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts = [];
    }

    return obj;
  }

};

function createBaseCombinedLimit(): CombinedLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    callsRemaining: Long.UZERO,
    amounts: []
  };
}

export const CombinedLimit = {
  encode(message: CombinedLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.callsRemaining.isZero()) {
      writer.uint32(8).uint64(message.callsRemaining);
    }

    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CombinedLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = (reader.uint64() as Long);
          break;

        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CombinedLimit {
    return {
      callsRemaining: isSet(object.callsRemaining) ? Long.fromValue(object.callsRemaining) : Long.UZERO,
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: CombinedLimit): unknown {
    const obj: any = {};
    message.callsRemaining !== undefined && (obj.callsRemaining = (message.callsRemaining || Long.UZERO).toString());

    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CombinedLimit>): CombinedLimit {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? Long.fromValue(object.callsRemaining) : Long.UZERO;
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: CombinedLimitAmino): CombinedLimit {
    return {
      callsRemaining: Long.fromString(object.calls_remaining),
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: CombinedLimit): CombinedLimitAmino {
    const obj: any = {};
    obj.calls_remaining = message.callsRemaining ? message.callsRemaining.toString() : undefined;

    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts = [];
    }

    return obj;
  }

};

function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
  };
}

export const AllowAllMessagesFilter = {
  encode(_: AllowAllMessagesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowAllMessagesFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): AllowAllMessagesFilter {
    return {};
  },

  toJSON(_: AllowAllMessagesFilter): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },

  fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter {
    return {};
  },

  toAmino(_: AllowAllMessagesFilter): AllowAllMessagesFilterAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    keys: []
  };
}

export const AcceptedMessageKeysFilter = {
  encode(message: AcceptedMessageKeysFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessageKeysFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: AcceptedMessageKeysFilter): unknown {
    const obj: any = {};

    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },

  fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },

  toAmino(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAmino {
    const obj: any = {};

    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }

    return obj;
  }

};

function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    messages: []
  };
}

export const AcceptedMessagesFilter = {
  encode(message: AcceptedMessagesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessagesFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: AcceptedMessagesFilter): unknown {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map(e => e) || [];
    return message;
  },

  fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => e) : []
    };
  },

  toAmino(message: AcceptedMessagesFilter): AcceptedMessagesFilterAmino {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e);
    } else {
      obj.messages = [];
    }

    return obj;
  }

};
export const ContractAuthzLimitX_InterfaceDecoder = (input: _m0.Reader | Uint8Array): MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return MaxCallsLimit.decode(data.value);

    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return MaxFundsLimit.decode(data.value);

    case "/cosmwasm.wasm.v1.CombinedLimit":
      return CombinedLimit.decode(data.value);

    default:
      return data;
  }
};
export const ContractAuthzLimitX_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "wasm/MaxCallsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        value: MaxCallsLimit.encode(MaxCallsLimit.fromPartial((content.value as DeepPartial<MaxCallsLimit>))).finish()
      });

    case "wasm/MaxFundsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        value: MaxFundsLimit.encode(MaxFundsLimit.fromPartial((content.value as DeepPartial<MaxFundsLimit>))).finish()
      });

    case "wasm/CombinedLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        value: CombinedLimit.encode(CombinedLimit.fromPartial((content.value as DeepPartial<CombinedLimit>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const ContractAuthzLimitX_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return {
        type: "wasm/MaxCallsLimit",
        value: MaxCallsLimit.toAmino(MaxCallsLimit.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return {
        type: "wasm/MaxFundsLimit",
        value: MaxFundsLimit.toAmino(MaxFundsLimit.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.CombinedLimit":
      return {
        type: "wasm/CombinedLimit",
        value: CombinedLimit.toAmino(CombinedLimit.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};
export const ContractAuthzFilterX_InterfaceDecoder = (input: _m0.Reader | Uint8Array): AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return AllowAllMessagesFilter.decode(data.value);

    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return AcceptedMessageKeysFilter.decode(data.value);

    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return AcceptedMessagesFilter.decode(data.value);

    default:
      return data;
  }
};
export const ContractAuthzFilterX_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "wasm/AllowAllMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.encode(AllowAllMessagesFilter.fromPartial((content.value as DeepPartial<AllowAllMessagesFilter>))).finish()
      });

    case "wasm/AcceptedMessageKeysFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.encode(AcceptedMessageKeysFilter.fromPartial((content.value as DeepPartial<AcceptedMessageKeysFilter>))).finish()
      });

    case "wasm/AcceptedMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.encode(AcceptedMessagesFilter.fromPartial((content.value as DeepPartial<AcceptedMessagesFilter>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const ContractAuthzFilterX_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return {
        type: "wasm/AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.toAmino(AllowAllMessagesFilter.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return {
        type: "wasm/AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.toAmino(AcceptedMessageKeysFilter.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return {
        type: "wasm/AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.toAmino(AcceptedMessagesFilter.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};