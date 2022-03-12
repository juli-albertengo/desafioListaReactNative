import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    modalContainerContent: {
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 40,
        marginTop: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
      textList: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 10,
      },
      modalTitle: {
        fontSize: 14,
        color: '#000000',
        padding: 25,
      },
      modalContent: {
        paddingHorizontal: 25,
      },
      modalContentText: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
        marginVertical: 10,
      },
      modalButton: {
        marginVertical: 10,
        paddingHorizontal: 25,
      },
});
