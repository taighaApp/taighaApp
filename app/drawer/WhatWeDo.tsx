import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WhatWeDo() {
  return (
    <View style={styles.screenContainer}>
      <Text>PM - What We Do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
