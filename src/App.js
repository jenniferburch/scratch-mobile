/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';
import { ScrollTest } from './ScrollTest';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}> Hello React </Text>
        </View>
        <ScrollTest />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: .5,
    borderColor: 'black',
    padding: 10,
    margin: 5
  },
  headerText: {
    textAlign: 'center',
  }
})
export default App;
