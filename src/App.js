/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {View, Button, Text, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

import Input from './components/Input';
import CustomModal from './components/CustomModal';
import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.containerInput}>
        <Input
          placeholder="Type Here"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#a4133c"
          style={styles.textInput}
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button title="Add Item" color="#a4133c" onPress={() => addItem()} />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => onHandleModal(item.id)}>
                <Text style={styles.textList}>{item.value}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        selectedItem={selectedItem}
        buttonText="Yes"
        onHandleDeleteItem={handleDeleteItem}
      />
    </SafeAreaView>
  );
};

export default App;
