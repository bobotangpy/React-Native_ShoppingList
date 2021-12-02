import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = input => {
    setText(input);
  };

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        disabled={text?.length === 0}
        style={styles.btn}
        onPress={() => (text?.length > 0 ? addItem(text) : '')}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 9,
    margin: 5,
  },
  btn: {
    backgroundColor: '#C2BAD8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'darkblue',
  },
});

export default AddItem;
