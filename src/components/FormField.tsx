import React from 'react';
import {StyleSheet, View, Text, StyleProp} from 'react-native';

interface IFormField<T> {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<T>;
}

const FormField = <T,>({
  title = 'Form Title',
  children,
  style,
}: IFormField<T>) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6E6F88',
    marginBottom: 9,
  },
});

export default FormField;
