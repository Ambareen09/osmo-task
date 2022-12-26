import * as _m0 from "protobufjs/minimal";
export interface Node {
    children: Child[];
}
export interface NodeAmino {
    children: ChildAmino[];
}
export interface NodeSDKType {
    children: ChildSDKType[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildAmino {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildSDKType {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf?: Child;
}
export interface LeafAmino {
    leaf?: ChildAmino;
}
export interface LeafSDKType {
    leaf?: ChildSDKType;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: Partial<Node>): Node;
    fromAmino(object: NodeAmino): Node;
    toAmino(message: Node): NodeAmino;
};
export declare const Child: {
    encode(message: Child, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Child;
    fromJSON(object: any): Child;
    toJSON(message: Child): unknown;
    fromPartial(object: Partial<Child>): Child;
    fromAmino(object: ChildAmino): Child;
    toAmino(message: Child): ChildAmino;
};
export declare const Leaf: {
    encode(message: Leaf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leaf;
    fromJSON(object: any): Leaf;
    toJSON(message: Leaf): unknown;
    fromPartial(object: Partial<Leaf>): Leaf;
    fromAmino(object: LeafAmino): Leaf;
    toAmino(message: Leaf): LeafAmino;
};
