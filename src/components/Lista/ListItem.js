import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item, onDeleteTask }) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => onDeleteTask(item)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ListItem;
