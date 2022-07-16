import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

type Props = {
  children: string;
  onClick?: () => unknown;
  variant?: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode | string;
  endIcon?: React.ReactNode | string;
  disabled?: boolean;
  loading?: boolean;
  autoLoading?: boolean;
};

const Button = ({ disabled = false, autoLoading = true, ...props }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      if (autoLoading) setLoading(true);
      if (typeof props.onClick == "function") {
        await props.onClick();
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <PaperButton
      mode={props.variant}
      onPress={handleClick}
      {...(typeof props.startIcon == "string" && {
        icon: props.startIcon,
      })}
      {...(typeof props.endIcon == "string" && {
        icon: props.endIcon,
        contentStyle: {
          flexDirection: "row-reverse",
        },
      })}
      disabled={disabled}
      loading={loading || props.loading}
    >
      {props.children}
    </PaperButton>
  );
};

export default Button;
