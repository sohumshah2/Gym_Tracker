import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TextInput, Pressable } from 'react-native';
import styles from './login_styles';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring, runOnJS } from 'react-native-reanimated';
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core'

const LoginScreen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user) navigation.navigate("Home");
    })
  }, []);

  let { height, width } = Dimensions.get('window');
  height += 80;
  width += 1;
  const imagePosition = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);
  const formButtonScale = useSharedValue(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  }

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  })

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  })

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300}),
      transform: imagePosition.value !== 0 ? [{translateY: withTiming(-1000, {duration: 1000})}] :  [{translateY: withTiming(0, {duration: 100})}],
    }
  })

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
      transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0
    if (isRegistering) setIsRegistering(false);
  }

  const registerHandler = () => {
    imagePosition.value = 0
    if (!isRegistering) setIsRegistering(true);
  }

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })  
    
  return (
  <Animated.View style={ styles.container }>
    <Animated.View style={[{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}, imageAnimatedStyle]}>
      <Svg height = { height} width = { width }>
        <ClipPath id="clipPathId">
          <Ellipse cx={width / 2} rx={height} ry={height}/>
        </ClipPath>
        {/* <ImageBackground 
          source = { require('./assets/auth-background.webp') }
          style = { styles.imageBackground }
          clipPath="url(#clipPathId)"
        >
        </ImageBackground> */}
        <Image 
          href={require("./assets/auth-background-w-logo.png")}
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clipPathId)"
        />
      </Svg>
      <Animated.View style = {[styles.closeButtonContainer, closeButtonContainerStyle]}>
        <Text onPress={()=>imagePosition.value = 1}>X</Text>
      </Animated.View>
    </Animated.View>
    <View style = { styles.bottomContainer }>
      <Animated.View style ={buttonsAnimatedStyle}>
        <Pressable style = { styles.button }>
          <Text style = { styles.buttonText } onPress = {loginHandler}>LOG IN</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style ={buttonsAnimatedStyle}>
        <Pressable style = { styles.button }>
          <Text style = { styles.buttonText } onPress = {registerHandler}>REGISTER</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="white" 
          style={styles.textInput}
          onChangeText = {newEmail => setEmail(newEmail)}
        />
        {isRegistering && (
          <TextInput 
            placeholder="Username" 
            placeholderTextColor="white" 
            style={styles.textInput}
            onChangeText = {newUsername => setUsername(newUsername)}

          />
        )}
        <TextInput 
          placeholder="Password" 
          placeholderTextColor="white" 
          style={styles.textInput}
          onChangeText = {newPassword => setPassword(newPassword)}
        />
        <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
          <Pressable 
            onPress={isRegistering ? handleSignUp : handleLogin}
            onPressOut = {() => { formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)) }}
          >
            <Text style={styles.buttonText}>{isRegistering ? 'REGISTER' : 'LOG IN'}</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  </Animated.View>
  )
}

export default LoginScreen
