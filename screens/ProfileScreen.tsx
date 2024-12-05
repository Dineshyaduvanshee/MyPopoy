import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      {/* Add additional profile details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
