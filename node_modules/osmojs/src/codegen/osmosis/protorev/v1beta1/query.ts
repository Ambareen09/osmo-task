import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, PoolStatisticsAmino, PoolStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestAmino {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesRequest {}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesRequestAmino {}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesRequestSDKType {}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesResponse {
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesResponseAmino {
  /** number_of_trades is the number of trades the module has executed */
  number_of_trades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */

export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
  number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomRequest {
  /** denom is the denom to query profits by */
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomRequestAmino {
  /** denom is the denom to query profits by */
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomResponse {
  /** profit is the profits of the module by the selected denom */
  profit?: Coin;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomResponseAmino {
  /** profit is the profits of the module by the selected denom */
  profit?: CoinAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */

export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
  profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsRequest {}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsRequestAmino {}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsRequestSDKType {}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsResponse {
  /** profits is a list of all of the profits from the module */
  profits: Coin[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsResponseAmino {
  /** profits is a list of all of the profits from the module */
  profits: CoinAmino[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */

export interface QueryGetProtoRevAllProfitsResponseSDKType {
  profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolRequest {
  /** pool_id is the pool id to query statistics by */
  poolId: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolRequestAmino {
  /** pool_id is the pool id to query statistics by */
  pool_id: string;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolRequestSDKType {
  pool_id: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics?: PoolStatistics;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolResponseAmino {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics?: PoolStatisticsAmino;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */

export interface QueryGetProtoRevStatisticsByPoolResponseSDKType {
  statistics?: PoolStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsRequest {}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsRequestAmino {}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsRequestSDKType {}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades for all pools
   */
  statistics: PoolStatistics[];
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsResponseAmino {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades for all pools
   */
  statistics: PoolStatisticsAmino[];
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */

export interface QueryGetProtoRevAllStatisticsResponseSDKType {
  statistics: PoolStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesRequest {}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesRequestAmino {}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesResponse {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesResponseAmino {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutesAmino[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */

export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
  routes: TokenPairArbRoutesSDKType[];
}

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

function createBaseQueryGetProtoRevNumberOfTradesRequest(): QueryGetProtoRevNumberOfTradesRequest {
  return {};
}

export const QueryGetProtoRevNumberOfTradesRequest = {
  encode(_: QueryGetProtoRevNumberOfTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();

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

  fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },

  toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },

  fromAmino(_: QueryGetProtoRevNumberOfTradesRequestAmino): QueryGetProtoRevNumberOfTradesRequest {
    return {};
  },

  toAmino(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryGetProtoRevNumberOfTradesResponse(): QueryGetProtoRevNumberOfTradesResponse {
  return {
    numberOfTrades: ""
  };
}

export const QueryGetProtoRevNumberOfTradesResponse = {
  encode(message: QueryGetProtoRevNumberOfTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: isSet(object.numberOfTrades) ? String(object.numberOfTrades) : ""
    };
  },

  toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown {
    const obj: any = {};
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = object.numberOfTrades ?? "";
    return message;
  },

  fromAmino(object: QueryGetProtoRevNumberOfTradesResponseAmino): QueryGetProtoRevNumberOfTradesResponse {
    return {
      numberOfTrades: object.number_of_trades
    };
  },

  toAmino(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAmino {
    const obj: any = {};
    obj.number_of_trades = message.numberOfTrades;
    return obj;
  }

};

function createBaseQueryGetProtoRevProfitsByDenomRequest(): QueryGetProtoRevProfitsByDenomRequest {
  return {
    denom: ""
  };
}

export const QueryGetProtoRevProfitsByDenomRequest = {
  encode(message: QueryGetProtoRevProfitsByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: QueryGetProtoRevProfitsByDenomRequestAmino): QueryGetProtoRevProfitsByDenomRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryGetProtoRevProfitsByDenomResponse(): QueryGetProtoRevProfitsByDenomResponse {
  return {
    profit: undefined
  };
}

export const QueryGetProtoRevProfitsByDenomResponse = {
  encode(message: QueryGetProtoRevProfitsByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profit !== undefined) {
      Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.profit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: isSet(object.profit) ? Coin.fromJSON(object.profit) : undefined
    };
  },

  toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toJSON(message.profit) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    message.profit = object.profit !== undefined && object.profit !== null ? Coin.fromPartial(object.profit) : undefined;
    return message;
  },

  fromAmino(object: QueryGetProtoRevProfitsByDenomResponseAmino): QueryGetProtoRevProfitsByDenomResponse {
    return {
      profit: object?.profit ? Coin.fromAmino(object.profit) : undefined
    };
  },

  toAmino(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAmino {
    const obj: any = {};
    obj.profit = message.profit ? Coin.toAmino(message.profit) : undefined;
    return obj;
  }

};

function createBaseQueryGetProtoRevAllProfitsRequest(): QueryGetProtoRevAllProfitsRequest {
  return {};
}

export const QueryGetProtoRevAllProfitsRequest = {
  encode(_: QueryGetProtoRevAllProfitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsRequest();

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

  fromJSON(_: any): QueryGetProtoRevAllProfitsRequest {
    return {};
  },

  toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },

  fromAmino(_: QueryGetProtoRevAllProfitsRequestAmino): QueryGetProtoRevAllProfitsRequest {
    return {};
  },

  toAmino(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryGetProtoRevAllProfitsResponse(): QueryGetProtoRevAllProfitsResponse {
  return {
    profits: []
  };
}

export const QueryGetProtoRevAllProfitsResponse = {
  encode(message: QueryGetProtoRevAllProfitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown {
    const obj: any = {};

    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.profits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryGetProtoRevAllProfitsResponseAmino): QueryGetProtoRevAllProfitsResponse {
    return {
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAmino {
    const obj: any = {};

    if (message.profits) {
      obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.profits = [];
    }

    return obj;
  }

};

function createBaseQueryGetProtoRevStatisticsByPoolRequest(): QueryGetProtoRevStatisticsByPoolRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryGetProtoRevStatisticsByPoolRequest = {
  encode(message: QueryGetProtoRevStatisticsByPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByPoolRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevStatisticsByPoolRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },

  toJSON(message: QueryGetProtoRevStatisticsByPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolRequest>): QueryGetProtoRevStatisticsByPoolRequest {
    const message = createBaseQueryGetProtoRevStatisticsByPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },

  fromAmino(object: QueryGetProtoRevStatisticsByPoolRequestAmino): QueryGetProtoRevStatisticsByPoolRequest {
    return {
      poolId: Long.fromString(object.pool_id)
    };
  },

  toAmino(message: QueryGetProtoRevStatisticsByPoolRequest): QueryGetProtoRevStatisticsByPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  }

};

function createBaseQueryGetProtoRevStatisticsByPoolResponse(): QueryGetProtoRevStatisticsByPoolResponse {
  return {
    statistics: undefined
  };
}

export const QueryGetProtoRevStatisticsByPoolResponse = {
  encode(message: QueryGetProtoRevStatisticsByPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statistics !== undefined) {
      PoolStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.statistics = PoolStatistics.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevStatisticsByPoolResponse {
    return {
      statistics: isSet(object.statistics) ? PoolStatistics.fromJSON(object.statistics) : undefined
    };
  },

  toJSON(message: QueryGetProtoRevStatisticsByPoolResponse): unknown {
    const obj: any = {};
    message.statistics !== undefined && (obj.statistics = message.statistics ? PoolStatistics.toJSON(message.statistics) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolResponse>): QueryGetProtoRevStatisticsByPoolResponse {
    const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
    message.statistics = object.statistics !== undefined && object.statistics !== null ? PoolStatistics.fromPartial(object.statistics) : undefined;
    return message;
  },

  fromAmino(object: QueryGetProtoRevStatisticsByPoolResponseAmino): QueryGetProtoRevStatisticsByPoolResponse {
    return {
      statistics: object?.statistics ? PoolStatistics.fromAmino(object.statistics) : undefined
    };
  },

  toAmino(message: QueryGetProtoRevStatisticsByPoolResponse): QueryGetProtoRevStatisticsByPoolResponseAmino {
    const obj: any = {};
    obj.statistics = message.statistics ? PoolStatistics.toAmino(message.statistics) : undefined;
    return obj;
  }

};

function createBaseQueryGetProtoRevAllStatisticsRequest(): QueryGetProtoRevAllStatisticsRequest {
  return {};
}

export const QueryGetProtoRevAllStatisticsRequest = {
  encode(_: QueryGetProtoRevAllStatisticsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllStatisticsRequest();

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

  fromJSON(_: any): QueryGetProtoRevAllStatisticsRequest {
    return {};
  },

  toJSON(_: QueryGetProtoRevAllStatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryGetProtoRevAllStatisticsRequest>): QueryGetProtoRevAllStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllStatisticsRequest();
    return message;
  },

  fromAmino(_: QueryGetProtoRevAllStatisticsRequestAmino): QueryGetProtoRevAllStatisticsRequest {
    return {};
  },

  toAmino(_: QueryGetProtoRevAllStatisticsRequest): QueryGetProtoRevAllStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryGetProtoRevAllStatisticsResponse(): QueryGetProtoRevAllStatisticsResponse {
  return {
    statistics: []
  };
}

export const QueryGetProtoRevAllStatisticsResponse = {
  encode(message: QueryGetProtoRevAllStatisticsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statistics) {
      PoolStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllStatisticsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.statistics.push(PoolStatistics.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevAllStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => PoolStatistics.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetProtoRevAllStatisticsResponse): unknown {
    const obj: any = {};

    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? PoolStatistics.toJSON(e) : undefined);
    } else {
      obj.statistics = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevAllStatisticsResponse>): QueryGetProtoRevAllStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllStatisticsResponse();
    message.statistics = object.statistics?.map(e => PoolStatistics.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryGetProtoRevAllStatisticsResponseAmino): QueryGetProtoRevAllStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => PoolStatistics.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryGetProtoRevAllStatisticsResponse): QueryGetProtoRevAllStatisticsResponseAmino {
    const obj: any = {};

    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? PoolStatistics.toAmino(e) : undefined);
    } else {
      obj.statistics = [];
    }

    return obj;
  }

};

function createBaseQueryGetProtoRevTokenPairArbRoutesRequest(): QueryGetProtoRevTokenPairArbRoutesRequest {
  return {};
}

export const QueryGetProtoRevTokenPairArbRoutesRequest = {
  encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();

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

  fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },

  toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },

  fromAmino(_: QueryGetProtoRevTokenPairArbRoutesRequestAmino): QueryGetProtoRevTokenPairArbRoutesRequest {
    return {};
  },

  toAmino(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryGetProtoRevTokenPairArbRoutesResponse(): QueryGetProtoRevTokenPairArbRoutesResponse {
  return {
    routes: []
  };
}

export const QueryGetProtoRevTokenPairArbRoutesResponse = {
  encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown {
    const obj: any = {};

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryGetProtoRevTokenPairArbRoutesResponseAmino): QueryGetProtoRevTokenPairArbRoutesResponse {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => TokenPairArbRoutes.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    const obj: any = {};

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }

    return obj;
  }

};