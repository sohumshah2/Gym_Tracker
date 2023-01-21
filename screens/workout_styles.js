import { StyleSheet, Dimensions, StatusBar } from "react-native";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // top: Platform.OS === "android" ? 60 : 0

    // backgroundColor: 'black',
  },

  header: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 40,
    // color: 'purple',
    fontWeight: '700',
  },

  exerciseBar: {
    paddingTop: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },

  exercise: {
    width: 70,
    height: 100,
    marginBottom: -2,
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedExercise: {
    backgroundColor: '#00BCD4',
    height: 100,
    marginBottom: -2,
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  exerciseLabel: {
    fontSize: 20,
    fontWeight: '500',
  },

  body: {
    display: 'flex',
    flexDirection: 'row',
  },

  exerciseInfo: {
    top: 10,
    left: 10,
  },

  exerciseTitle: {
    fontSize: 30,
    fontWeight: '600',
  },

  graph: {
    // marginTop: 10,
    width: width - 100,
    height: 220,
    // marginBottom: -2,
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  notes: {
    // marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    height: 100,
    padding: 10,
    textAlignVertical: 'top',
  },

  subtitle: {
    marginTop: 5,
    marginBottom: 2,
    // marginLeft: 20,
    fontSize: 15,
    fontWeight: '500',
  }

});
export default styles;