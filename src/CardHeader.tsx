import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const CardHeader = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.subtitle}</Text>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({});
