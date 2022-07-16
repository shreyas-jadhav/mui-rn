import React from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
  value?: string;
  onChange: (newValue: string) => unknown;
  onBlur?:
    | (((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) &
        ((args: unknown) => void))
    | undefined;
  label?: string;
  variant?: "filled" | "outlined";
  placeholder?: string;
  type?: "text" | "number";
  autoFocus?: boolean;
};

const TextField = (props: Props) => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChange}
      mode={
        props.variant == "filled"
          ? `flat`
          : props.variant == "outlined"
          ? "outlined"
          : undefined
      }
      keyboardType={props.type == "number" ? "phone-pad" : undefined}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      onBlur={props.onBlur}
    />
  );
};

export default TextField;
