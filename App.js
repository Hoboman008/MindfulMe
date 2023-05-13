import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const App = () => {
  const [reminder, setReminder] = useState('');
  const [time, setTime] = useState(new Date());
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    if (!reminder) return;
    setReminders([
      ...reminders,
      {
        id: Date.now(),
        text: reminder,
        time: time.toLocaleString(),
      },
    ]);
    setReminder('');
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Reminders</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a reminder..."
              value={reminder}
              onChangeText={(text) => setReminder(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Select time"
              value={time.toLocaleString()}
              onFocus={() => setTime(new Date())}
              onChange={(event, date) => setTime(date)}
              mode="datetime"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleAddReminder}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {reminders.map((r) => (
              <View key={r.id} style={styles.listItem}>
                <Text>{r.text}</Text>
                <Text>{r.time}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteReminder(r.id)}>
                  <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  form: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
   
