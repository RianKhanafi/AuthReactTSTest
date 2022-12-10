import React from 'react';
import {TouchableOpacity, ButtonProps, StyleSheet, Text} from 'react-native';

interface ITextButton extends ButtonProps {}

const TextButton = (props: ITextButton) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 17,
  },
});

export default TextButton;
