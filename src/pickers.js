import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export class Pickers extends React.Component {

  constructor(props) {
    super(props);

    this.items = [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
      { label: 'Four', value: 'four' },
      { label: 'Five', value: 'five' },
    ];

    this.state = {
      picker1: undefined,
      picker2: undefined,
      picker3: undefined,
      picker4: undefined
    }
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.section}>
          <Text>useNativeAndroidPickerStyle=true, no style</Text>
          <RNPickerSelect
            value={this.state.picker1}
            onValueChange={value => {
              console.log(`Picker1 new value ${value}`);
              this.setState({ picker1: value });
            }}
            items={this.items}
            useNativeAndroidPickerStyle={true}
          />
        </View>

        <View style={styles.section}>
          <Text>useNativeAndroidPickerStyle=false, no style</Text>
          <RNPickerSelect
            value={this.state.picker2}
            onValueChange={value => {
              console.log(`Picker2 new value ${value}`);
              this.setState({ picker2: value });
            }}
            items={this.items}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <View style={styles.section}>
          <Text>useNativeAndroidPickerStyle=true, with style</Text>
          <RNPickerSelect
            value={this.state.picker3}
            onValueChange={value => {
              console.log(`Picker3 new value ${value}`);
              this.setState({ picker3: value });
            }}
            items={this.items}
            useNativeAndroidPickerStyle={true}
            textInputProps={styles.picker}
          />
        </View>

        <View style={styles.section}>
          <Text>useNativeAndroidPickerStyle=false, with style</Text>
          <RNPickerSelect
            value={this.state.picker4}
            onValueChange={value => {
              console.log(`Picker4 new value ${value}`);
              this.setState({ picker4: value });
            }}
            items={this.items}
            useNativeAndroidPickerStyle={false}
            textInputProps={styles.picker}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    borderWidth: 1,
    borderColor: 'darkgrey',
    margin: 15,
    padding: 5
  },
  picker: {
    fontSize: 16,
    color: 'darkblue',
  }
})