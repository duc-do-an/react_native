import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Form = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>

      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e7feff',
    },
    containerTop: {
      flex: 1,
    },
    top:{
      marginTop: 80,
      marginHorizontal: 40,
      backgroundColor: "#004022",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
    },
    topText:{
      fontSize: 20,
      color: "#21a3d0",
      fontWeight: "bold",
    },
    containerCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    containerBottom: {
      flex: 1,
    },
    center:{
      width: 150,
      height: 150,
      backgroundColor: 'red',
      borderRadius: 110 ,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerText:{
      fontSize: 20,
      color: "#21a3d0",
      fontWeight: "bold",
    },
    bottom:{
      marginTop: 80,
      marginHorizontal: 40,
      backgroundColor: "yellow", 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 18,
    },
    bottomText:{
      textAlign: 'right',
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
    },
  })