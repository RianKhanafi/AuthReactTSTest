import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({children}: IContainer) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Container;
