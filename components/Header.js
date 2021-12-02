import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 23,
    color: 'darkblue',
    textAlign: 'center',
  },
});

export default Header;
