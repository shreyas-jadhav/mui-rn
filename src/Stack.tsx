import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import tw from "twrnc";
import { StylingProps, StylingPropsToStyle } from "./helpers";
type Props = {
  direction?: `row` | `column`;
  spacing?: number;
  children?: React.ReactNode | Element[] | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
} & StylingProps;

const Stack = ({
  direction = "column",
  spacing = 0,
  children,
  style = {},
  ...props
}: Props) => {
  return (
    <View
      style={Object.assign(
        {
          flexDirection: direction,
          display: "flex",
          ...StylingPropsToStyle(props),
        },
        style
      )}
    >
      {React.Children.map(children as ReactNode, (c, index) => (
        <View
          style={
            index != 0 && tw`p${direction == "row" ? "l" : "t"}-${spacing}`
          }
        >
          {c}
        </View>
      ))}
    </View>
  );
};

export default Stack;
