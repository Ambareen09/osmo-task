import * as _m0 from "protobufjs/minimal";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    valOperAddress: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceAmino {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    val_oper_address: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceSDKType {
    val_oper_address: string;
    weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreference[];
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesAmino {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreferenceAmino[];
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesSDKType {
    preferences: ValidatorPreferenceSDKType[];
}
export declare const ValidatorPreference: {
    encode(message: ValidatorPreference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorPreference;
    fromJSON(object: any): ValidatorPreference;
    toJSON(message: ValidatorPreference): unknown;
    fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference;
    fromAmino(object: ValidatorPreferenceAmino): ValidatorPreference;
    toAmino(message: ValidatorPreference): ValidatorPreferenceAmino;
};
export declare const ValidatorSetPreferences: {
    encode(message: ValidatorSetPreferences, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSetPreferences;
    fromJSON(object: any): ValidatorSetPreferences;
    toJSON(message: ValidatorSetPreferences): unknown;
    fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences;
    fromAmino(object: ValidatorSetPreferencesAmino): ValidatorSetPreferences;
    toAmino(message: ValidatorSetPreferences): ValidatorSetPreferencesAmino;
};
