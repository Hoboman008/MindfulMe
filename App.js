import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    // TODO: Implement the logic to add a new reminder
  };

  const handleRemoveReminder = (index) => {
    // TODO: Implement the logic to remove a reminder at a specific index
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, theme === 'dark' && styles.darkTitle]}>MindfulMe</Text>
      <TouchableOpacity style={styles.themeButton} onPress={handleToggleTheme}>
        <Text style={styles.themeButtonText}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Text>
      </TouchableOpacity>
      <View style={styles.remindersContainer}>
        {reminders.map((reminder, index) => (
          <View key={index} style={styles.reminder}>
            <Text style={[styles.reminderText, theme === 'dark' && styles.darkReminderText]}>
              {reminder}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleRemoveReminder(index)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
        <Text style={styles.addButtonText}>+ Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#222',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  darkTitle: {
    color: '#fff',
  },
  themeButton: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  themeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  remindersContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 16,
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reminderText: {
    flex: 1,
    fontSize: 20,
    color: '#333',
  },
  darkReminderText: {
    color: '#fff',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#ff4444',
    borderRadius: 4,
    marginLeft: 16,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton
