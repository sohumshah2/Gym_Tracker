import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor: 'black',
  },

  image: {
    // position: 'absolute',
    // paddingTop: '-200%',
    // display: 'block',
    right: '20%',
    resizeMode: 'contain',
    width: '60%',
    top: '-2%',
    alignSelf: "center",
  },
  
  heading: {
    // top: -200,
    marginHorizontal: 30,
    fontSize: 35,
    fontWeight: '600', 
  },

  logout: {
    position: 'absolute',
    top: -118,
    left: '85%',
    resizeMode: 'contain',
    width: '10%',
    alignSelf: 'flex-end',
  },

  headerBackground: {
    position: 'absolute',
    // elevation: -1,
    zIndex: -1,
    width: '100%',
    height: 140,
    backgroundColor: '#021730',
  },

  workouts: {
    // resizeMode: 'contain',
    // width: '10%',
    height: '50%',
  }




});
export default styles;