import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import styles from './home_styles';
import Svg from 'react-native-svg';

const HomeScreen = () => {
  let { height, width } = Dimensions.get('window');

  return (
    <View>
       <Image 
              // style = {styles.image}
              source = {require('./assets/Lower A.png')}
              style = {styles.workouts}
            />
    </View>
    // <View style = {styles.container}>
    //   <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
    //     <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          
    //       <Image 
    //         style = {styles.image}
    //         source = {require("./assets/logo.png")}
    //       />
    //       <Image 
    //         source = {require("./assets/logout.png")}
    //         style = {styles.logout}
    //       />
    //     </View>
    //     <View style={styles.headerBackground} />
    //     <Text style={styles.heading}>Welcome to your workout plan.</Text>

    //     <View style={{flexDirection: 'column'}}>
    //       <Image 
    //           // style = {styles.image}
    //           source = {require("./assets/LowerA.jpg")}
    //           style = {styles.workouts}
    //         />
    //         <Text>hmm</Text>


    //     </View>






    //   </View>
    // </View>
  )
}

export default HomeScreen
