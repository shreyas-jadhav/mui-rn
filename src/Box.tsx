import React, { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { StylingProps, StylingPropsToStyle } from "./helpers";

type Props = {
  style?: StyleProp<ViewStyle>;
} & StylingProps;

const Box = (props: PropsWithChildren<Props>) => {
  return (
    <View
      style={Object.assign(
        {
          ...StylingPropsToStyle(props),
        },
        props.style
      )}
    >
      {props.children}
    </View>
  );
};

export default Box;
