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
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    top: -118,
    left: -15,
    width: 0.1 * width,
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
    // height: '50%',
    width: width * 0.35,
    height: width * 0.35 / 1.624,
    left: 20,
    // top: 50,
    marginTop: 10,
    // width: 150,
    // height: 92,
  },

  routines: {
    left: 35,
    marginTop: 10,
    width: width * 0.467,
    height: width * 0.467 * 2
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },

  formButton: {
    top: 60,
    backgroundColor: '#021730',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },


});
export default styles;