import React from "react";
import { Text } from "react-native-paper";

type Props = {
  children: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | string;
};

const Typography = ({ variant = "body1", ...props }: Props) => {
  return (
    <Text variant={VariantMap[variant] || (variant as any)}>
      {props.children}
    </Text>
  );
};

const VariantMap: Record<string, string> = {
  body1: "bodyLarge",
  body2: "bodySmall",
  caption: "labelLarge",
  h1: "displayLarge",
  h2: "displayMedium",
  h3: "displaySmall",
  h4: "headlineLarge",
  h5: "headlineMedium",
  h6: "headlineSmall",
  subtitle1: "labelLarge",
  subtitle2: "labelSmall",
};

export default Typography;
