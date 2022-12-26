import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, Long } from "../../helpers";
export interface ModuleBalanceRequest {}
export interface ModuleBalanceRequestAmino {}
export interface ModuleBalanceRequestSDKType {}
export interface ModuleBalanceResponse {
  coins: Coin[];
}
export interface ModuleBalanceResponseAmino {
  coins: CoinAmino[];
}
export interface ModuleBalanceResponseSDKType {
  coins: CoinSDKType[];
}
export interface ModuleLockedAmountRequest {}
export interface ModuleLockedAmountRequestAmino {}
export interface ModuleLockedAmountRequestSDKType {}
export interface ModuleLockedAmountResponse {
  coins: Coin[];
}
export interface ModuleLockedAmountResponseAmino {
  coins: CoinAmino[];
}
export interface ModuleLockedAmountResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountUnlockableCoinsRequest {
  owner: string;
}
export interface AccountUnlockableCoinsRequestAmino {
  owner: string;
}
export interface AccountUnlockableCoinsRequestSDKType {
  owner: string;
}
export interface AccountUnlockableCoinsResponse {
  coins: Coin[];
}
export interface AccountUnlockableCoinsResponseAmino {
  coins: CoinAmino[];
}
export interface AccountUnlockableCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountUnlockingCoinsRequest {
  owner: string;
}
export interface AccountUnlockingCoinsRequestAmino {
  owner: string;
}
export interface AccountUnlockingCoinsRequestSDKType {
  owner: string;
}
export interface AccountUnlockingCoinsResponse {
  coins: Coin[];
}
export interface AccountUnlockingCoinsResponseAmino {
  coins: CoinAmino[];
}
export interface AccountUnlockingCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountLockedCoinsRequest {
  owner: string;
}
export interface AccountLockedCoinsRequestAmino {
  owner: string;
}
export interface AccountLockedCoinsRequestSDKType {
  owner: string;
}
export interface AccountLockedCoinsResponse {
  coins: Coin[];
}
export interface AccountLockedCoinsResponseAmino {
  coins: CoinAmino[];
}
export interface AccountLockedCoinsResponseSDKType {
  coins: CoinSDKType[];
}
export interface AccountLockedPastTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeRequestAmino {
  owner: string;
  timestamp?: TimestampAmino;
}
export interface AccountLockedPastTimeRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
  owner: string;
  timestamp?: TimestampAmino;
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountUnlockedBeforeTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountUnlockedBeforeTimeRequestAmino {
  owner: string;
  timestamp?: TimestampAmino;
}
export interface AccountUnlockedBeforeTimeRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
}
export interface AccountUnlockedBeforeTimeResponse {
  locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountUnlockedBeforeTimeResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedPastTimeDenomRequest {
  owner: string;
  timestamp?: Timestamp;
  denom: string;
}
export interface AccountLockedPastTimeDenomRequestAmino {
  owner: string;
  timestamp?: TimestampAmino;
  denom: string;
}
export interface AccountLockedPastTimeDenomRequestSDKType {
  owner: string;
  timestamp?: TimestampSDKType;
  denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedPastTimeDenomResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface LockedDenomRequest {
  denom: string;
  duration?: Duration;
}
export interface LockedDenomRequestAmino {
  denom: string;
  duration?: DurationAmino;
}
export interface LockedDenomRequestSDKType {
  denom: string;
  duration?: DurationSDKType;
}
export interface LockedDenomResponse {
  amount: string;
}
export interface LockedDenomResponseAmino {
  amount: string;
}
export interface LockedDenomResponseSDKType {
  amount: string;
}
export interface LockedRequest {
  lockId: Long;
}
export interface LockedRequestAmino {
  lock_id: string;
}
export interface LockedRequestSDKType {
  lock_id: Long;
}
export interface LockedResponse {
  lock?: PeriodLock;
}
export interface LockedResponseAmino {
  lock?: PeriodLockAmino;
}
export interface LockedResponseSDKType {
  lock?: PeriodLockSDKType;
}
export interface SyntheticLockupsByLockupIDRequest {
  lockId: Long;
}
export interface SyntheticLockupsByLockupIDRequestAmino {
  lock_id: string;
}
export interface SyntheticLockupsByLockupIDRequestSDKType {
  lock_id: Long;
}
export interface SyntheticLockupsByLockupIDResponse {
  syntheticLocks: SyntheticLock[];
}
export interface SyntheticLockupsByLockupIDResponseAmino {
  synthetic_locks: SyntheticLockAmino[];
}
export interface SyntheticLockupsByLockupIDResponseSDKType {
  synthetic_locks: SyntheticLockSDKType[];
}
export interface AccountLockedLongerDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationRequestAmino {
  owner: string;
  duration?: DurationAmino;
}
export interface AccountLockedLongerDurationRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedDurationRequestAmino {
  owner: string;
  duration?: DurationAmino;
}
export interface AccountLockedDurationRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedDurationResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedDurationResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
  owner: string;
  duration?: DurationAmino;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface AccountLockedLongerDurationDenomRequest {
  owner: string;
  duration?: Duration;
  denom: string;
}
export interface AccountLockedLongerDurationDenomRequestAmino {
  owner: string;
  duration?: DurationAmino;
  denom: string;
}
export interface AccountLockedLongerDurationDenomRequestSDKType {
  owner: string;
  duration?: DurationSDKType;
  denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomResponseAmino {
  locks: PeriodLockAmino[];
}
export interface AccountLockedLongerDurationDenomResponseSDKType {
  locks: PeriodLockSDKType[];
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseModuleBalanceRequest(): ModuleBalanceRequest {
  return {};
}

export const ModuleBalanceRequest = {
  encode(_: ModuleBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceRequest();

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

  fromJSON(_: any): ModuleBalanceRequest {
    return {};
  },

  toJSON(_: ModuleBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ModuleBalanceRequest>): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  },

  fromAmino(_: ModuleBalanceRequestAmino): ModuleBalanceRequest {
    return {};
  },

  toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleBalanceResponse(): ModuleBalanceResponse {
  return {
    coins: []
  };
}

export const ModuleBalanceResponse = {
  encode(message: ModuleBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleBalanceResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ModuleBalanceResponse>): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ModuleBalanceResponseAmino): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseAmino {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseModuleLockedAmountRequest(): ModuleLockedAmountRequest {
  return {};
}

export const ModuleLockedAmountRequest = {
  encode(_: ModuleLockedAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountRequest();

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

  fromJSON(_: any): ModuleLockedAmountRequest {
    return {};
  },

  toJSON(_: ModuleLockedAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  },

  fromAmino(_: ModuleLockedAmountRequestAmino): ModuleLockedAmountRequest {
    return {};
  },

  toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleLockedAmountResponse(): ModuleLockedAmountResponse {
  return {
    coins: []
  };
}

export const ModuleLockedAmountResponse = {
  encode(message: ModuleLockedAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleLockedAmountResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ModuleLockedAmountResponseAmino): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseAmino {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockableCoinsRequest(): AccountUnlockableCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountUnlockableCoinsRequest = {
  encode(message: AccountUnlockableCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountUnlockableCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountUnlockableCoinsRequestAmino): AccountUnlockableCoinsRequest {
    return {
      owner: object.owner
    };
  },

  toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }

};

function createBaseAccountUnlockableCoinsResponse(): AccountUnlockableCoinsResponse {
  return {
    coins: []
  };
}

export const AccountUnlockableCoinsResponse = {
  encode(message: AccountUnlockableCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockableCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockableCoinsResponseAmino): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseAmino {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockingCoinsRequest(): AccountUnlockingCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountUnlockingCoinsRequest = {
  encode(message: AccountUnlockingCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountUnlockingCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountUnlockingCoinsRequestAmino): AccountUnlockingCoinsRequest {
    return {
      owner: object.owner
    };
  },

  toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }

};

function createBaseAccountUnlockingCoinsResponse(): AccountUnlockingCoinsResponse {
  return {
    coins: []
  };
}

export const AccountUnlockingCoinsResponse = {
  encode(message: AccountUnlockingCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockingCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockingCoinsResponseAmino): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseAmino {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountLockedCoinsRequest(): AccountLockedCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountLockedCoinsRequest = {
  encode(message: AccountLockedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountLockedCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountLockedCoinsRequestAmino): AccountLockedCoinsRequest {
    return {
      owner: object.owner
    };
  },

  toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  }

};

function createBaseAccountLockedCoinsResponse(): AccountLockedCoinsResponse {
  return {
    coins: []
  };
}

export const AccountLockedCoinsResponse = {
  encode(message: AccountLockedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedCoinsResponseAmino): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseAmino {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeRequest(): AccountLockedPastTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountLockedPastTimeRequest = {
  encode(message: AccountLockedPastTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountLockedPastTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedPastTimeRequestAmino): AccountLockedPastTimeRequest {
    return {
      owner: object.owner,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  }

};

function createBaseAccountLockedPastTimeResponse(): AccountLockedPastTimeResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeResponse = {
  encode(message: AccountLockedPastTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeResponseAmino): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest(): AccountLockedPastTimeNotUnlockingOnlyRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestAmino): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: object.owner,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  }

};

function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse(): AccountLockedPastTimeNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseAmino): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockedBeforeTimeRequest(): AccountUnlockedBeforeTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountUnlockedBeforeTimeRequest = {
  encode(message: AccountUnlockedBeforeTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountUnlockedBeforeTimeRequestAmino): AccountUnlockedBeforeTimeRequest {
    return {
      owner: object.owner,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  }

};

function createBaseAccountUnlockedBeforeTimeResponse(): AccountUnlockedBeforeTimeResponse {
  return {
    locks: []
  };
}

export const AccountUnlockedBeforeTimeResponse = {
  encode(message: AccountUnlockedBeforeTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockedBeforeTimeResponseAmino): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeDenomRequest(): AccountLockedPastTimeDenomRequest {
  return {
    owner: "",
    timestamp: undefined,
    denom: ""
  };
}

export const AccountLockedPastTimeDenomRequest = {
  encode(message: AccountLockedPastTimeDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AccountLockedPastTimeDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AccountLockedPastTimeDenomRequestAmino): AccountLockedPastTimeDenomRequest {
    return {
      owner: object.owner,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined,
      denom: object.denom
    };
  },

  toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAccountLockedPastTimeDenomResponse(): AccountLockedPastTimeDenomResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeDenomResponse = {
  encode(message: AccountLockedPastTimeDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeDenomResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeDenomResponseAmino): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseLockedDenomRequest(): LockedDenomRequest {
  return {
    denom: "",
    duration: undefined
  };
}

export const LockedDenomRequest = {
  encode(message: LockedDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: LockedDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: Partial<LockedDenomRequest>): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: LockedDenomRequestAmino): LockedDenomRequest {
    return {
      denom: object.denom,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: LockedDenomRequest): LockedDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  }

};

function createBaseLockedDenomResponse(): LockedDenomResponse {
  return {
    amount: ""
  };
}

export const LockedDenomResponse = {
  encode(message: LockedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedDenomResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: LockedDenomResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<LockedDenomResponse>): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    message.amount = object.amount ?? "";
    return message;
  },

  fromAmino(object: LockedDenomResponseAmino): LockedDenomResponse {
    return {
      amount: object.amount
    };
  },

  toAmino(message: LockedDenomResponse): LockedDenomResponseAmino {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  }

};

function createBaseLockedRequest(): LockedRequest {
  return {
    lockId: Long.UZERO
  };
}

export const LockedRequest = {
  encode(message: LockedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: LockedRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<LockedRequest>): LockedRequest {
    const message = createBaseLockedRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromAmino(object: LockedRequestAmino): LockedRequest {
    return {
      lockId: Long.fromString(object.lock_id)
    };
  },

  toAmino(message: LockedRequest): LockedRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  }

};

function createBaseLockedResponse(): LockedResponse {
  return {
    lock: undefined
  };
}

export const LockedResponse = {
  encode(message: LockedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lock = PeriodLock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedResponse {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined
    };
  },

  toJSON(message: LockedResponse): unknown {
    const obj: any = {};
    message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toJSON(message.lock) : undefined);
    return obj;
  },

  fromPartial(object: Partial<LockedResponse>): LockedResponse {
    const message = createBaseLockedResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? PeriodLock.fromPartial(object.lock) : undefined;
    return message;
  },

  fromAmino(object: LockedResponseAmino): LockedResponse {
    return {
      lock: object?.lock ? PeriodLock.fromAmino(object.lock) : undefined
    };
  },

  toAmino(message: LockedResponse): LockedResponseAmino {
    const obj: any = {};
    obj.lock = message.lock ? PeriodLock.toAmino(message.lock) : undefined;
    return obj;
  }

};

function createBaseSyntheticLockupsByLockupIDRequest(): SyntheticLockupsByLockupIDRequest {
  return {
    lockId: Long.UZERO
  };
}

export const SyntheticLockupsByLockupIDRequest = {
  encode(message: SyntheticLockupsByLockupIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromAmino(object: SyntheticLockupsByLockupIDRequestAmino): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: Long.fromString(object.lock_id)
    };
  },

  toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  }

};

function createBaseSyntheticLockupsByLockupIDResponse(): SyntheticLockupsByLockupIDResponse {
  return {
    syntheticLocks: []
  };
}

export const SyntheticLockupsByLockupIDResponse = {
  encode(message: SyntheticLockupsByLockupIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDResponse): unknown {
    const obj: any = {};

    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: SyntheticLockupsByLockupIDResponseAmino): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },

  toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseAmino {
    const obj: any = {};

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationRequest(): AccountLockedLongerDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedLongerDurationRequest = {
  encode(message: AccountLockedLongerDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedLongerDurationRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationRequestAmino): AccountLockedLongerDurationRequest {
    return {
      owner: object.owner,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  }

};

function createBaseAccountLockedLongerDurationResponse(): AccountLockedLongerDurationResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationResponse = {
  encode(message: AccountLockedLongerDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationResponseAmino): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedDurationRequest(): AccountLockedDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedDurationRequest = {
  encode(message: AccountLockedDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedDurationRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedDurationRequest>): AccountLockedDurationRequest {
    const message = createBaseAccountLockedDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedDurationRequestAmino): AccountLockedDurationRequest {
    return {
      owner: object.owner,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  }

};

function createBaseAccountLockedDurationResponse(): AccountLockedDurationResponse {
  return {
    locks: []
  };
}

export const AccountLockedDurationResponse = {
  encode(message: AccountLockedDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedDurationResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedDurationResponse>): AccountLockedDurationResponse {
    const message = createBaseAccountLockedDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedDurationResponseAmino): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest(): AccountLockedLongerDurationNotUnlockingOnlyRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: object.owner,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  }

};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse(): AccountLockedLongerDurationNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationDenomRequest(): AccountLockedLongerDurationDenomRequest {
  return {
    owner: "",
    duration: undefined,
    denom: ""
  };
}

export const AccountLockedLongerDurationDenomRequest = {
  encode(message: AccountLockedLongerDurationDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationDenomRequestAmino): AccountLockedLongerDurationDenomRequest {
    return {
      owner: object.owner,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      denom: object.denom
    };
  },

  toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAccountLockedLongerDurationDenomResponse(): AccountLockedLongerDurationDenomResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationDenomResponse = {
  encode(message: AccountLockedLongerDurationDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationDenomResponseAmino): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseAmino {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};