import React from 'react';
import { View, Text } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

export class CalTest extends React.Component {

  async componentDidMount() {
    let permissions = await RNCalendarEvents.checkPermissions();
    if (permissions !== 'authorized') {
      permissions = await RNCalendarEvents.requestPermissions();
      console.log("Cal Permissions ", permissions);
    }
  }

  render() {
    return (
      <View>
        <Text> Calendar Test </Text>
      </View>
    );
  }
}