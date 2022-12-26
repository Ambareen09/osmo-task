import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arb_routes: RouteAmino[];
    /** Token denomination of the first asset */
    token_in: string;
    /** Token denomination of the second asset */
    token_out: string;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
    arb_routes: RouteSDKType[];
    token_in: string;
    token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: Trade[];
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: TradeAmino[];
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    trades: TradeSDKType[];
}
/** Trade is a single trade in a route */
export interface Trade {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: Long;
    /** The denom of token A that is traded */
    tokenIn: string;
    /** The denom of token B that is traded */
    tokenOut: string;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: string;
    /** The denom of token A that is traded */
    token_in: string;
    /** The denom of token B that is traded */
    token_out: string;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    pool: Long;
    token_in: string;
    token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatistics {
    /** profits is the total profit from all trades on this pool */
    profits: Coin[];
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
    /** pool_id is the id of the pool */
    poolId: Long;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsAmino {
    /** profits is the total profit from all trades on this pool */
    profits: CoinAmino[];
    /** number_of_trades is the number of trades the module has executed */
    number_of_trades: string;
    /** pool_id is the id of the pool */
    pool_id: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsSDKType {
    profits: CoinSDKType[];
    number_of_trades: string;
    pool_id: Long;
}
export declare const TokenPairArbRoutes: {
    encode(message: TokenPairArbRoutes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes;
    fromJSON(object: any): TokenPairArbRoutes;
    toJSON(message: TokenPairArbRoutes): unknown;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
    fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes;
    toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino;
};
export declare const Route: {
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    fromPartial(object: Partial<Route>): Route;
    fromAmino(object: RouteAmino): Route;
    toAmino(message: Route): RouteAmino;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial(object: Partial<Trade>): Trade;
    fromAmino(object: TradeAmino): Trade;
    toAmino(message: Trade): TradeAmino;
};
export declare const PoolStatistics: {
    encode(message: PoolStatistics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolStatistics;
    fromJSON(object: any): PoolStatistics;
    toJSON(message: PoolStatistics): unknown;
    fromPartial(object: Partial<PoolStatistics>): PoolStatistics;
    fromAmino(object: PoolStatisticsAmino): PoolStatistics;
    toAmino(message: PoolStatistics): PoolStatisticsAmino;
};
