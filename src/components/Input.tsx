import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

interface IInput extends TextInputProps {}

const Input = ({placeholder = 'Input Text', ...rest}: IInput) => {
  return <TextInput placeholder={placeholder} {...rest} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C2C5CB',
    paddingHorizontal: 16,
    fontSize: 17,
  },
});

export default Input;
