
// import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, ImageBackground, TextInput, Pressable } from 'react-native';
import styles from './workout_styles';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring, runOnJS } from 'react-native-reanimated';
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core';
import Stopwatch from 'react-native-stopwatch-timer';


const mock = [
  {
    num: 1, 
    name: 'squat',
    image: 'link...',
    notes: 'some text',
    increment: 1.25,
    numSets: 3,
    currentReps: 6,
    currentWeight: 20,
    defaultRestSeconds: 120,
    history: [
      {
        date: 'date format',
        sets: [
          {
            reps: 6,
            weight: 18.75,
            restSeconds: 120, 
          },
          {
            reps: 6,
            weight: 18.75,
            restSeconds: 184,
          },
          {
            reps: 6,
            weight: 18.75,
            restSeconds: -1,
          }
        ]
      }
    ]    
  }, {name: 'two',}, {name: 'three'}, {name: 'four'}, {name: 'five'}, {name: 'six'},
]

const WorkoutScreen = () => {

  // stopwatch //////////////////////////////////////
  // const [time, setTime] = useState(0);
  // useEffect(() => {
  //   let interval = null;
  //   interval = setInterval(() => {
  //     setTime((previousTime) => previousTime + 1);
  //   }, 1000);
  // })

  const [selectedExercise, setSelectedExercise] = useState('squat');
  const [visibleNotes, setVisibleNotes] = useState(mock[0].notes);


  return (
    <View style={styles.container}>
      <View style={{height: StatusBar.currentHeight}}></View>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lower A</Text>
          <Text style={styles.headerText}>00:00</Text>
          {/* <Text style={styles.headerText}>{(time - (time % 60)) / 60}:{time % 60}</Text> */}
        </View>
        <View style={styles.body}>

          <View style={styles.exerciseBar}>
            {mock.map(exercise => (
              <Pressable 
                onPressIn={() => {
                  setSelectedExercise(exercise.name)
                  }}
                onPress={() => {
                  setVisibleNotes(mock.find(exercise => exercise.name === selectedExercise).notes);

                }}
              >
                <View style={selectedExercise === exercise.name ? styles.selectedExercise : styles.exercise}>
                  <Text style={styles.exerciseLabel}>{exercise.name}</Text>
                </View>
              </Pressable>
              )
            )}
          </View>
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseTitle}>{selectedExercise}</Text>
            <Text style={styles.subtitle}>Progress</Text>
            <View style={styles.graph}>
              <Text>[WIP Graph]</Text>
            </View>
            <Text style={styles.subtitle}>Notes</Text>
            <TextInput 
              editable 
              multiline 
              style={styles.notes} 
              value={visibleNotes}
              onChangeText={text => {
                setVisibleNotes(text)
                mock.find(exercise => exercise.name === selectedExercise).notes = visibleNotes;
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default WorkoutScreen
