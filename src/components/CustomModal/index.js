import React from 'react';

import { View, Text, Modal, Button } from 'react-native';

import {styles} from './styles';

const CustomModal = ({title, description, selectedItem, buttonText, onHandleDeleteItem, visible }) => {
    return (
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          >
            <View style={styles.modalContainerContent}>
              <View style={styles.modalTitle}>
                <Text style={styles.modalContentText}>{title}</Text>
              </View>
              <View style={styles.modalContent}>
                  <Text style={styles.modalContentText}>{description}</Text>
                  <Text style={styles.textList}>{selectedItem.value}</Text>
              </View>
              <View style={styles.modalButton}>
                <Button
                  title={buttonText}
                  color="#a4133c"
                  onPress={() => onHandleDeleteItem(selectedItem.id)}
                />
              </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
