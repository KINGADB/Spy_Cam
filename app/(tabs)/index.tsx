import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const HomePage = () => {
  return (
    <View style={styles.container}>

      <FontAwesome name='eye' size={150} />

      <Text style={styles.title} >SPY CAM</Text>

      <TouchableOpacity
         style={[styles.button, styles.buttonMargin]}
          onPress={() => {
          // Navigate to camera screen
          }}
         >
          <Text style={styles.buttonText}>
            <View style={styles.iconContainer}>
              <Entypo name='camera' size={23} style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Capture Photo</Text>
            </View>
          </Text>
      </TouchableOpacity>

     <TouchableOpacity
        style={[styles.button, styles.buttonMargin]}
        onPress={() => {
          // Navigate to video recording screen
        }}
      >
        <Text style={styles.buttonText}>
          <View style={styles.iconContainer}>
            <Entypo name='video-camera' size={23} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Record Video</Text>
          </View>
        </Text>

  </TouchableOpacity>

  {/* <Link href="/two" asChild>
    <TouchableOpacity
      style={[styles.button, styles.buttonMargin]}
      onPress={() => {
        // Handle button press
      }}
    >
      <Text style={styles.buttonText}>Settings</Text>
    </TouchableOpacity>
  </Link> */}
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 60,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonMargin: {
    marginBottom: 30,
  },
  icon: {
    marginRight: 5,
    color: '#fff',
  },
  textMargin: {
    marginLeft: 5,
  },
  iconContainer: {
    marginRight: 5,
  },
  textContainer: {
    marginLeft: 5,
  },
  text: {
    color: '#fff',
  },
});

export default HomePage;