import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from "./AppText";

function PickerItem({ label, iconName, color, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {iconName && <MaterialCommunityIcons name={iconName} color={colors.white} size={50} />}
      </View>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '33%',
    padding: 15
  },
  text: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center'
  },
});

export default PickerItem;
