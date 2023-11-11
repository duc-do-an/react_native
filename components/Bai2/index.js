import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Test3() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const resetNumber = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chạy ngay đi</Text>
      <Text style={styles.number}>{count}</Text>
      <TouchableOpacity style={styles.increaseButton} onPress={increaseNumber}>
        <Text style={styles.buttonText}>nhấp để tăng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetNumber}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'green',
  },
  number: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  increaseButton: {
    marginTop: 16,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetButton: {
    marginTop: 16,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});