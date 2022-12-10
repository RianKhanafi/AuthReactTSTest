import React from 'react';
import {TouchableOpacity, ButtonProps, StyleSheet, Text} from 'react-native';

interface IButton extends ButtonProps {
  loading?: boolean;
}

const Button = (props: IButton) => {
  const {loading} = props;

  return (
    <TouchableOpacity
      {...props}
      style={{...styles.button, ...(loading && {opacity: 0.6})}}
      disabled={loading}>
      <Text style={styles.title}>
        {props.title}
        {loading ? '...' : null}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: '#63C476',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    color: 'white',
  },
});

export default Button;
