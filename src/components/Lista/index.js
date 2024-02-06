import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const Lista = ({ tasks, onDeleteTask }) => {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ListItem item={item} onDeleteTask={onDeleteTask} />
            )}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
    },
});

export default Lista;
