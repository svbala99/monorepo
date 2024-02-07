import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export const SharedUIComponent = (props) => {
  const { onPress = () => {} } = props;
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.text}>Shared Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#2BE044",
  },
  text: {
    fontSize: 16,
    color: "#E03F2B",
  },
});
