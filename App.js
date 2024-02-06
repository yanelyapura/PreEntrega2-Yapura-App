import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Modal from './src/components/Modal';
import AddItem from './src/components/AddItem';
import Lista from './src/components/Lista';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [inputValue, setInputValue] = useState(''); // Nuevo estado para el texto del input

  const handleInputChange = (text) => { // Función para manejar el cambio de texto en el input
    setInputValue(text);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = { id: Date.now().toString(), title: inputValue };
      setTasks([...tasks, newTask]);
      setInputValue(''); // Limpiar el input después de agregar la tarea
    }
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter(task => task.id !== currentItem.id));
    setCurrentItem(null);
    setModalVisible(false);
  };

  const handleModalOpen = (item) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} onDelete={handleDeleteTask} />
      <AddItem
        onAddItem={handleAddTask}
        onChange={handleInputChange} // pasar la función para manejar cambios en el input
        value={inputValue} // pasar el estado del texto del input
      />
      <Lista tasks={tasks} onDeleteTask={handleModalOpen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", 
    paddingTop: 50, 
  },
});
