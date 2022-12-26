import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */

export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */

  preferences: ValidatorPreference[];
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */

export interface MsgSetValidatorSetPreferenceAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */

  preferences: ValidatorPreferenceAmino[];
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */

export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseAmino {}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */

export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */

  coin?: Coin;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */

export interface MsgDelegateToValidatorSetAmino {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */

  coin?: CoinAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */

export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin?: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseAmino {}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */

  coin?: Coin;
}
export interface MsgUndelegateFromValidatorSetAmino {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */

  coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin?: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseAmino {}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */

  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetAmino {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */

  preferences: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseAmino {}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */

export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */

export interface MsgWithdrawDelegationRewardsAmino {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */

export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseAmino {}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}

function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: []
  };
}

export const MsgSetValidatorSetPreference = {
  encode(message: MsgSetValidatorSetPreference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetValidatorSetPreference {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSetValidatorSetPreference): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);

    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference {
    return {
      delegator: object.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino {
    const obj: any = {};
    obj.delegator = message.delegator;

    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = [];
    }

    return obj;
  }

};

function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}

export const MsgSetValidatorSetPreferenceResponse = {
  encode(_: MsgSetValidatorSetPreferenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();

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

  fromJSON(_: any): MsgSetValidatorSetPreferenceResponse {
    return {};
  },

  toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },

  fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse {
    return {};
  },

  toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: undefined
  };
}

export const MsgDelegateToValidatorSet = {
  encode(message: MsgDelegateToValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDelegateToValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },

  toJSON(message: MsgDelegateToValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },

  fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet {
    return {
      delegator: object.delegator,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },

  toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  }

};

function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}

export const MsgDelegateToValidatorSetResponse = {
  encode(_: MsgDelegateToValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();

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

  fromJSON(_: any): MsgDelegateToValidatorSetResponse {
    return {};
  },

  toJSON(_: MsgDelegateToValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },

  fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse {
    return {};
  },

  toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: undefined
  };
}

export const MsgUndelegateFromValidatorSet = {
  encode(message: MsgUndelegateFromValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegateFromValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },

  toJSON(message: MsgUndelegateFromValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },

  fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet {
    return {
      delegator: object.delegator,
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined
    };
  },

  toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  }

};

function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}

export const MsgUndelegateFromValidatorSetResponse = {
  encode(_: MsgUndelegateFromValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();

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

  fromJSON(_: any): MsgUndelegateFromValidatorSetResponse {
    return {};
  },

  toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },

  fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse {
    return {};
  },

  toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: []
  };
}

export const MsgRedelegateValidatorSet = {
  encode(message: MsgRedelegateValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRedelegateValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgRedelegateValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);

    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet {
    return {
      delegator: object.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator;

    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = [];
    }

    return obj;
  }

};

function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}

export const MsgRedelegateValidatorSetResponse = {
  encode(_: MsgRedelegateValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();

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

  fromJSON(_: any): MsgRedelegateValidatorSetResponse {
    return {};
  },

  toJSON(_: MsgRedelegateValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },

  fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse {
    return {};
  },

  toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: ""
  };
}

export const MsgWithdrawDelegationRewards = {
  encode(message: MsgWithdrawDelegationRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegationRewards {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },

  toJSON(message: MsgWithdrawDelegationRewards): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },

  fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards {
    return {
      delegator: object.delegator
    };
  },

  toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    return obj;
  }

};

function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}

export const MsgWithdrawDelegationRewardsResponse = {
  encode(_: MsgWithdrawDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();

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

  fromJSON(_: any): MsgWithdrawDelegationRewardsResponse {
    return {};
  },

  toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },

  fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse {
    return {};
  },

  toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  }

};