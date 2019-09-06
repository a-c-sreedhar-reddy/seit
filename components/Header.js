import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>{title || ''}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#adc9c9',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  headerName: {
    fontSize: 30,
  },
});
export default Header;
