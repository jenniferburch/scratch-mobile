import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button } from 'react-native';


const Item = (props) => {
  if (props.collapsed)
    return null;

  return (
    <View style={styles.item}>
      <Text> {props.label}</Text>
    </View>
  )
}

const Section = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <View style={styles.section}>
        <TouchableWithoutFeedback
          onPress={() => setCollapsed(!collapsed)}
        >
          <Text>{props.label}</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView nestedScrollEnabled={true}>
      {
        props.items.map(item => <Item key={item.id} label={item.label} collapsed={collapsed} />)
      }
      </ScrollView>
    </>
  )
}

export const ScrollTest = () => {
  const [index, setIndex] = useState(1);
  const layout = [
    {
      id: 'aaa',
      label: 'section A',
      items: [{ id: 'a', label: 'a' },]
    },
    {
      id: 'bbb',
      label: 'section B',
      items: [{ id: 'a', label: 'b-a' }, { id: 'b', label: 'b-b' }]
    },
    {
      id: 'ccc',
      label: 'section C',
      items: [{ id: 'a', label: 'c-a' }, { id: 'b', label: 'c-b' }]
    },
    {
      id: 'ddd',
      label: 'section D',
      items: [{ id: 'a', label: 'd-a' }, { id: 'b', label: 'd-b' }]
    },
    {
      id: 'eee',
      label: 'section E',
      items: [{ id: 'a', label: 'e-a' }, { id: 'b', label: 'e-b' }]
    },
    {
      id: 'fff',
      label: 'section F',
      items: [{ id: 'a', label: 'f-a' }, { id: 'b', label: 'f-b' }]
    },
    {
      id: 'ggg',
      label: 'section G',
      items: [{ id: 'a', label: 'g-a' }, { id: 'b', label: 'g-b' }]
    },
  ]
  return (
    <>
      <Button
        onPress={() => setIndex((index + 1) % layout.length)}
        title={`Change Index [0,${index}]`} />
      <ScrollView stickyHeaderIndices={[0,1,2]}>
        {
          layout.map(section => {<Section key={`section-${section.id}`} {...section} />})
        }
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    flexDirection: 'column',
    borderColor: 'blue',
    borderWidth: .5,
    margin: 20,
  },
  item: {
    height: 200,
    backgroundColor: 'yellow',
    margin: 20,
  }
});