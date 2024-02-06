import React from 'react';
import { Modal as RNModal, View, Text, Button, StyleSheet } from 'react-native';

const Modal = ({ visible, onClose, onDelete }) => {
    return (
        <RNModal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>¿Estás seguro de que quieres eliminar esto?</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Cancelar" onPress={onClose} />
                        <Button title="Eliminar" onPress={onDelete} color="red" />
                    </View>
                </View>
            </View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default Modal;
