import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import React, {useState} from 'react';
import styles from './home_styles';
import Svg from 'react-native-svg';
import Images from './images';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring, runOnJS } from 'react-native-reanimated';


const HomeScreen = () => {
  let { height, width } = Dimensions.get('window');

  const [selection, setSelection] = useState('Lower A');

  const lowerAButtonScale = useSharedValue(1);
  const upperAButtonScale = useSharedValue(1);
  const lowerBButtonScale = useSharedValue(1);
  const upperBButtonScale = useSharedValue(1);
  const formButtonScale = useSharedValue(1);


  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })  
    
  const lowerAButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: lowerAButtonScale.value}]
    }
  })  

  const upperAButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: upperAButtonScale.value}]
    }
  })  

  const lowerBButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: lowerBButtonScale.value}]
    }
  }) 
  
  const upperBButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: upperBButtonScale.value}]
    }
  })  



  return (
    // <View>
    //    <Image 
    //           source = {require('./assets/LowerB.png')}
    //           style = {styles.workouts}
    //         />
    //       {/* <Image source={Images.auth}></Image> */}
    //       {/* <Image source={require('./assets/LowerB.png')}/> */}

    // </View>


    <View style = {styles.container}>
      <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          
          <Image 
            style = {styles.image}
            source = {require("./assets/logo.png")}
          />
          <Image 
            source = {require("./assets/logout.png")}
            style = {styles.logout}
          />
        </View>
        <View style={styles.headerBackground} />
        <Text style={styles.heading}>Welcome to your workout plan.</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>

            <Animated.View style={[, lowerAButtonAnimatedStyle]}>
              <Pressable 
                onPress={() => {setSelection('Lower A')}}
                onPressOut = {() => { lowerAButtonScale.value = withSequence(withSpring(0.9), withSpring(1.1), withSpring(1)) }}
              >
                  <Image 
                    // style = {styles.image}
                    source = {require("./assets/LowerA.png")}
                    style = {styles.workouts}
                  />
              </Pressable>
            </Animated.View>

            <Animated.View style={[, upperAButtonAnimatedStyle]}>
              <Pressable 
                onPress={() => {setSelection('Upper A')}}
                onPressOut = {() => { upperAButtonScale.value = withSequence(withSpring(0.9), withSpring(1.1), withSpring(1)) }}
              >
                  <Image 
                    // style = {styles.image}
                    source = {require("./assets/UpperA.png")}
                    style = {styles.workouts}
                  />
              </Pressable>
            </Animated.View>

            <Animated.View style={[, lowerBButtonAnimatedStyle]}>
              <Pressable 
                onPress={() => {setSelection('Lower B')}}
                onPressOut = {() => { lowerBButtonScale.value = withSequence(withSpring(0.9), withSpring(1.1), withSpring(1)) }}
              >
                  <Image 
                    // style = {styles.image}
                    source = {require("./assets/LowerB.png")}
                    style = {styles.workouts}
                  />
              </Pressable>
            </Animated.View>

            <Animated.View style={[, upperBButtonAnimatedStyle]}>
              <Pressable 
                onPress={() => {setSelection('Upper B')}}
                onPressOut = {() => { upperBButtonScale.value = withSequence(withSpring(0.9), withSpring(1.1), withSpring(1)) }}
              >
                  <Image 
                    // style = {styles.image}
                    source = {require("./assets/UpperB.png")}
                    style = {styles.workouts}
                  />
              </Pressable>
            </Animated.View>

          </View>

          <Image 
            // style = {styles.image}
            source = {selection.substring(0,5) === 'Upper' ? require("./assets/upper.png") : require("./assets/lower.png")} 
            style = {styles.routines}
          />

        </View>

        <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
          <Pressable 
            // onPress={isRegistering ? handleSignUp : handleLogin}
            onPressOut = {() => { formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)) }}
          >
            <Text style={styles.buttonText}>Start {selection}</Text>
          </Pressable>
        </Animated.View>








      </View>
    </View>
  )
}

export default HomeScreen
