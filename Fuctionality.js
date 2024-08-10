import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

const Button = ({ title, type, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === 'operator' && styles.operatorButton,
        type === 'function' && styles.functionButton,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => onPress(title)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button title="1" type="number" onPress={handlePress} />
          <Button title="2" type="number" onPress={handlePress} />
          <Button title="3" type="number" onPress={handlePress} />
          <Button title="+" type="operator" onPress={handlePress} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="4" type="number" onPress={handlePress} />
          <Button title="5" type="number" onPress={handlePress} />
          <Button title="6" type="number" onPress={handlePress} />
          <Button title="-" type="operator" onPress={handlePress} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="7" type="number" onPress={handlePress} />
          <Button title="8" type="number" onPress={handlePress} />
          <Button title="9" type="number" onPress={handlePress} />
          <Button title="*" type="operator" onPress={handlePress} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="C" type="function" onPress={clearInput} />
          <Button title="0" type="number" onPress={handlePress} />
          <Button title="." type="number" onPress={handlePress} />
          <Button title="/" type="operator" onPress={handlePress} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="=" type="function" onPress={calculateResult} />
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',    
    height: '100%',   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030637',
  },
  resultContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#3C0753',
    alignItems: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#720455',
    alignItems: 'flex-end',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputText: {
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 30,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#910A67',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: '#66034a',
  },
  operatorButton: {
    backgroundColor: '#E07B39',
  },
  functionButton: {
    backgroundColor: '#4A7B9D',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
