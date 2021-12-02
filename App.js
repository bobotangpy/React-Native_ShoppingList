import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Flour'},
    {id: uuid(), text: 'Sugar'},
    {id: uuid(), text: 'Dark Chocolates'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = item => {
    setItems(prevItems => {
      return [...prevItems, {id: uuid(), text: item}];
    });
    Alert.alert('Success', 'Added item!', {text: 'Great!'});
  };

  return (
    <View style={styles.container}>
      <Header />
      {/* <Image
        source={{
          uri: 'https://i.pinimg.com/474x/66/72/4c/66724cf868297b5d511577b82f23379e.jpg',
        }}
        style={styles.img}></Image> */}

      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
  },
  // img: {
  //   width: 100,
  //   height: 100,
  // },
});

export default App;
