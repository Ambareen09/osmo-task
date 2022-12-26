import * as _104 from "./api/http";
import * as _105 from "./protobuf/any";
import * as _106 from "./protobuf/descriptor";
import * as _107 from "./protobuf/duration";
import * as _108 from "./protobuf/empty";
import * as _109 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _104.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Http;
            fromJSON(object: any): _104.Http;
            toJSON(message: _104.Http): unknown;
            fromPartial(object: Partial<_104.Http>): _104.Http;
            fromAmino(object: _104.HttpAmino): _104.Http;
            toAmino(message: _104.Http): _104.HttpAmino;
        };
        HttpRule: {
            encode(message: _104.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.HttpRule;
            fromJSON(object: any): _104.HttpRule;
            toJSON(message: _104.HttpRule): unknown;
            fromPartial(object: Partial<_104.HttpRule>): _104.HttpRule;
            fromAmino(object: _104.HttpRuleAmino): _104.HttpRule;
            toAmino(message: _104.HttpRule): _104.HttpRuleAmino;
        };
        CustomHttpPattern: {
            encode(message: _104.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.CustomHttpPattern;
            fromJSON(object: any): _104.CustomHttpPattern;
            toJSON(message: _104.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_104.CustomHttpPattern>): _104.CustomHttpPattern;
            fromAmino(object: _104.CustomHttpPatternAmino): _104.CustomHttpPattern;
            toAmino(message: _104.CustomHttpPattern): _104.CustomHttpPatternAmino;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _109.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Timestamp;
            fromJSON(object: any): _109.Timestamp;
            toJSON(message: _109.Timestamp): unknown;
            fromPartial(object: Partial<_109.Timestamp>): _109.Timestamp;
            fromAmino(object: string): _109.Timestamp;
            toAmino(message: _109.Timestamp): string;
        };
        Empty: {
            encode(_: _108.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Empty;
            fromJSON(_: any): _108.Empty;
            toJSON(_: _108.Empty): unknown;
            fromPartial(_: Partial<_108.Empty>): _108.Empty;
            fromAmino(_: _108.EmptyAmino): _108.Empty;
            toAmino(_: _108.Empty): _108.EmptyAmino;
        };
        Duration: {
            encode(message: _107.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Duration;
            fromJSON(object: any): _107.Duration;
            toJSON(message: _107.Duration): unknown;
            fromPartial(object: Partial<_107.Duration>): _107.Duration;
            fromAmino(object: string): _107.Duration;
            toAmino(message: _107.Duration): string;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _106.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _106.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _106.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _106.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _106.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _106.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _106.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _106.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _106.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _106.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _106.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _106.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _106.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _106.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _106.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _106.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _106.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _106.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _106.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _106.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _106.FieldOptions_CType;
        FieldOptions_JSType: typeof _106.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _106.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _106.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _106.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _106.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _106.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _106.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FileDescriptorSet;
            fromJSON(object: any): _106.FileDescriptorSet;
            toJSON(message: _106.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_106.FileDescriptorSet>): _106.FileDescriptorSet;
            fromAmino(object: _106.FileDescriptorSetAmino): _106.FileDescriptorSet;
            toAmino(message: _106.FileDescriptorSet): _106.FileDescriptorSetAmino;
        };
        FileDescriptorProto: {
            encode(message: _106.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FileDescriptorProto;
            fromJSON(object: any): _106.FileDescriptorProto;
            toJSON(message: _106.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_106.FileDescriptorProto>): _106.FileDescriptorProto;
            fromAmino(object: _106.FileDescriptorProtoAmino): _106.FileDescriptorProto;
            toAmino(message: _106.FileDescriptorProto): _106.FileDescriptorProtoAmino;
        };
        DescriptorProto: {
            encode(message: _106.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DescriptorProto;
            fromJSON(object: any): _106.DescriptorProto;
            toJSON(message: _106.DescriptorProto): unknown;
            fromPartial(object: Partial<_106.DescriptorProto>): _106.DescriptorProto;
            fromAmino(object: _106.DescriptorProtoAmino): _106.DescriptorProto;
            toAmino(message: _106.DescriptorProto): _106.DescriptorProtoAmino;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _106.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _106.DescriptorProto_ExtensionRange;
            toJSON(message: _106.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_106.DescriptorProto_ExtensionRange>): _106.DescriptorProto_ExtensionRange;
            fromAmino(object: _106.DescriptorProto_ExtensionRangeAmino): _106.DescriptorProto_ExtensionRange;
            toAmino(message: _106.DescriptorProto_ExtensionRange): _106.DescriptorProto_ExtensionRangeAmino;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _106.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DescriptorProto_ReservedRange;
            fromJSON(object: any): _106.DescriptorProto_ReservedRange;
            toJSON(message: _106.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_106.DescriptorProto_ReservedRange>): _106.DescriptorProto_ReservedRange;
            fromAmino(object: _106.DescriptorProto_ReservedRangeAmino): _106.DescriptorProto_ReservedRange;
            toAmino(message: _106.DescriptorProto_ReservedRange): _106.DescriptorProto_ReservedRangeAmino;
        };
        ExtensionRangeOptions: {
            encode(message: _106.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ExtensionRangeOptions;
            fromJSON(object: any): _106.ExtensionRangeOptions;
            toJSON(message: _106.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_106.ExtensionRangeOptions>): _106.ExtensionRangeOptions;
            fromAmino(object: _106.ExtensionRangeOptionsAmino): _106.ExtensionRangeOptions;
            toAmino(message: _106.ExtensionRangeOptions): _106.ExtensionRangeOptionsAmino;
        };
        FieldDescriptorProto: {
            encode(message: _106.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FieldDescriptorProto;
            fromJSON(object: any): _106.FieldDescriptorProto;
            toJSON(message: _106.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_106.FieldDescriptorProto>): _106.FieldDescriptorProto;
            fromAmino(object: _106.FieldDescriptorProtoAmino): _106.FieldDescriptorProto;
            toAmino(message: _106.FieldDescriptorProto): _106.FieldDescriptorProtoAmino;
        };
        OneofDescriptorProto: {
            encode(message: _106.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.OneofDescriptorProto;
            fromJSON(object: any): _106.OneofDescriptorProto;
            toJSON(message: _106.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_106.OneofDescriptorProto>): _106.OneofDescriptorProto;
            fromAmino(object: _106.OneofDescriptorProtoAmino): _106.OneofDescriptorProto;
            toAmino(message: _106.OneofDescriptorProto): _106.OneofDescriptorProtoAmino;
        };
        EnumDescriptorProto: {
            encode(message: _106.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EnumDescriptorProto;
            fromJSON(object: any): _106.EnumDescriptorProto;
            toJSON(message: _106.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_106.EnumDescriptorProto>): _106.EnumDescriptorProto;
            fromAmino(object: _106.EnumDescriptorProtoAmino): _106.EnumDescriptorProto;
            toAmino(message: _106.EnumDescriptorProto): _106.EnumDescriptorProtoAmino;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _106.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _106.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _106.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_106.EnumDescriptorProto_EnumReservedRange>): _106.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _106.EnumDescriptorProto_EnumReservedRangeAmino): _106.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _106.EnumDescriptorProto_EnumReservedRange): _106.EnumDescriptorProto_EnumReservedRangeAmino;
        };
        EnumValueDescriptorProto: {
            encode(message: _106.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EnumValueDescriptorProto;
            fromJSON(object: any): _106.EnumValueDescriptorProto;
            toJSON(message: _106.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_106.EnumValueDescriptorProto>): _106.EnumValueDescriptorProto;
            fromAmino(object: _106.EnumValueDescriptorProtoAmino): _106.EnumValueDescriptorProto;
            toAmino(message: _106.EnumValueDescriptorProto): _106.EnumValueDescriptorProtoAmino;
        };
        ServiceDescriptorProto: {
            encode(message: _106.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ServiceDescriptorProto;
            fromJSON(object: any): _106.ServiceDescriptorProto;
            toJSON(message: _106.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_106.ServiceDescriptorProto>): _106.ServiceDescriptorProto;
            fromAmino(object: _106.ServiceDescriptorProtoAmino): _106.ServiceDescriptorProto;
            toAmino(message: _106.ServiceDescriptorProto): _106.ServiceDescriptorProtoAmino;
        };
        MethodDescriptorProto: {
            encode(message: _106.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MethodDescriptorProto;
            fromJSON(object: any): _106.MethodDescriptorProto;
            toJSON(message: _106.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_106.MethodDescriptorProto>): _106.MethodDescriptorProto;
            fromAmino(object: _106.MethodDescriptorProtoAmino): _106.MethodDescriptorProto;
            toAmino(message: _106.MethodDescriptorProto): _106.MethodDescriptorProtoAmino;
        };
        FileOptions: {
            encode(message: _106.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FileOptions;
            fromJSON(object: any): _106.FileOptions;
            toJSON(message: _106.FileOptions): unknown;
            fromPartial(object: Partial<_106.FileOptions>): _106.FileOptions;
            fromAmino(object: _106.FileOptionsAmino): _106.FileOptions;
            toAmino(message: _106.FileOptions): _106.FileOptionsAmino;
        };
        MessageOptions: {
            encode(message: _106.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MessageOptions;
            fromJSON(object: any): _106.MessageOptions;
            toJSON(message: _106.MessageOptions): unknown;
            fromPartial(object: Partial<_106.MessageOptions>): _106.MessageOptions;
            fromAmino(object: _106.MessageOptionsAmino): _106.MessageOptions;
            toAmino(message: _106.MessageOptions): _106.MessageOptionsAmino;
        };
        FieldOptions: {
            encode(message: _106.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FieldOptions;
            fromJSON(object: any): _106.FieldOptions;
            toJSON(message: _106.FieldOptions): unknown;
            fromPartial(object: Partial<_106.FieldOptions>): _106.FieldOptions;
            fromAmino(object: _106.FieldOptionsAmino): _106.FieldOptions;
            toAmino(message: _106.FieldOptions): _106.FieldOptionsAmino;
        };
        OneofOptions: {
            encode(message: _106.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.OneofOptions;
            fromJSON(object: any): _106.OneofOptions;
            toJSON(message: _106.OneofOptions): unknown;
            fromPartial(object: Partial<_106.OneofOptions>): _106.OneofOptions;
            fromAmino(object: _106.OneofOptionsAmino): _106.OneofOptions;
            toAmino(message: _106.OneofOptions): _106.OneofOptionsAmino;
        };
        EnumOptions: {
            encode(message: _106.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EnumOptions;
            fromJSON(object: any): _106.EnumOptions;
            toJSON(message: _106.EnumOptions): unknown;
            fromPartial(object: Partial<_106.EnumOptions>): _106.EnumOptions;
            fromAmino(object: _106.EnumOptionsAmino): _106.EnumOptions;
            toAmino(message: _106.EnumOptions): _106.EnumOptionsAmino;
        };
        EnumValueOptions: {
            encode(message: _106.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EnumValueOptions;
            fromJSON(object: any): _106.EnumValueOptions;
            toJSON(message: _106.EnumValueOptions): unknown;
            fromPartial(object: Partial<_106.EnumValueOptions>): _106.EnumValueOptions;
            fromAmino(object: _106.EnumValueOptionsAmino): _106.EnumValueOptions;
            toAmino(message: _106.EnumValueOptions): _106.EnumValueOptionsAmino;
        };
        ServiceOptions: {
            encode(message: _106.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ServiceOptions;
            fromJSON(object: any): _106.ServiceOptions;
            toJSON(message: _106.ServiceOptions): unknown;
            fromPartial(object: Partial<_106.ServiceOptions>): _106.ServiceOptions;
            fromAmino(object: _106.ServiceOptionsAmino): _106.ServiceOptions;
            toAmino(message: _106.ServiceOptions): _106.ServiceOptionsAmino;
        };
        MethodOptions: {
            encode(message: _106.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MethodOptions;
            fromJSON(object: any): _106.MethodOptions;
            toJSON(message: _106.MethodOptions): unknown;
            fromPartial(object: Partial<_106.MethodOptions>): _106.MethodOptions;
            fromAmino(object: _106.MethodOptionsAmino): _106.MethodOptions;
            toAmino(message: _106.MethodOptions): _106.MethodOptionsAmino;
        };
        UninterpretedOption: {
            encode(message: _106.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.UninterpretedOption;
            fromJSON(object: any): _106.UninterpretedOption;
            toJSON(message: _106.UninterpretedOption): unknown;
            fromPartial(object: Partial<_106.UninterpretedOption>): _106.UninterpretedOption;
            fromAmino(object: _106.UninterpretedOptionAmino): _106.UninterpretedOption;
            toAmino(message: _106.UninterpretedOption): _106.UninterpretedOptionAmino;
        };
        UninterpretedOption_NamePart: {
            encode(message: _106.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.UninterpretedOption_NamePart;
            fromJSON(object: any): _106.UninterpretedOption_NamePart;
            toJSON(message: _106.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_106.UninterpretedOption_NamePart>): _106.UninterpretedOption_NamePart;
            fromAmino(object: _106.UninterpretedOption_NamePartAmino): _106.UninterpretedOption_NamePart;
            toAmino(message: _106.UninterpretedOption_NamePart): _106.UninterpretedOption_NamePartAmino;
        };
        SourceCodeInfo: {
            encode(message: _106.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SourceCodeInfo;
            fromJSON(object: any): _106.SourceCodeInfo;
            toJSON(message: _106.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_106.SourceCodeInfo>): _106.SourceCodeInfo;
            fromAmino(object: _106.SourceCodeInfoAmino): _106.SourceCodeInfo;
            toAmino(message: _106.SourceCodeInfo): _106.SourceCodeInfoAmino;
        };
        SourceCodeInfo_Location: {
            encode(message: _106.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SourceCodeInfo_Location;
            fromJSON(object: any): _106.SourceCodeInfo_Location;
            toJSON(message: _106.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_106.SourceCodeInfo_Location>): _106.SourceCodeInfo_Location;
            fromAmino(object: _106.SourceCodeInfo_LocationAmino): _106.SourceCodeInfo_Location;
            toAmino(message: _106.SourceCodeInfo_Location): _106.SourceCodeInfo_LocationAmino;
        };
        GeneratedCodeInfo: {
            encode(message: _106.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GeneratedCodeInfo;
            fromJSON(object: any): _106.GeneratedCodeInfo;
            toJSON(message: _106.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_106.GeneratedCodeInfo>): _106.GeneratedCodeInfo;
            fromAmino(object: _106.GeneratedCodeInfoAmino): _106.GeneratedCodeInfo;
            toAmino(message: _106.GeneratedCodeInfo): _106.GeneratedCodeInfoAmino;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _106.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _106.GeneratedCodeInfo_Annotation;
            toJSON(message: _106.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_106.GeneratedCodeInfo_Annotation>): _106.GeneratedCodeInfo_Annotation;
            fromAmino(object: _106.GeneratedCodeInfo_AnnotationAmino): _106.GeneratedCodeInfo_Annotation;
            toAmino(message: _106.GeneratedCodeInfo_Annotation): _106.GeneratedCodeInfo_AnnotationAmino;
        };
        Any: {
            encode(message: _105.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Any;
            fromJSON(object: any): _105.Any;
            toJSON(message: _105.Any): unknown;
            fromPartial(object: Partial<_105.Any>): _105.Any;
            fromAmino(object: _105.AnyAmino): _105.Any;
            toAmino(message: _105.Any): _105.AnyAmino;
        };
    };
}
