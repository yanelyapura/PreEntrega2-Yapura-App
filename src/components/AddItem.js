import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddItem = ({ onChange, onAddItem, value }) => {
    return (
        <View style={styles.addItemContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="Añadir nuevo ítem"
            />
            <Button title="Agregar" onPress={onAddItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    addItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
});

export default AddItem;
