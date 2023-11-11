import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Bai11 = () => {

  return (
    <View style={styles.container}>
  <View style={styles.top}>
    <Text style={styles.Text}>top left</Text>
   
  </View>
  <View style={styles.bottom}>
  <View style={styles.bottomLeft}>
  <Text style={styles.Text}>bottom left</Text>
    </View>
    <View style={styles.bottomRight}>
    <View style={styles.bottomRightTop}>
    <Text style={[styles.Text,styles.textBottom]}>bottom Right Top</Text>
  </View>
    <View style={styles.bottomRightBottom}>
    <Text style={[styles.Text,styles.textBottom]}>bottom Right Bottom</Text>
  </View>
  </View>
  </View>
    </View>
  )
}
export default Bai11
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 top:{
  flex: 1,
  backgroundColor:'#f4fe87',
  justifyContent:'center',
  alignItems:'center'
 },
 Text:{
fontWeight:'bold',
fontSize:24,
color:'#21a3d0'
 },
bottom:{
flex:1,
flexDirection:'row'

},
bottomLeft:{
  flex:1,
  backgroundColor:'red',
  justifyContent:'center',
  alignItems:'center'
  },
bottomRight:{
    flex:1,
    
    
    },
bottomRightTop:{
  flex:1,
  backgroundColor:'blue',
  justifyContent:'center',
  alignItems:'center'
    },
bottomRightBottom:{
  flex:1,
  backgroundColor:'pink',
  justifyContent:'center',
  alignItems:'center'
},
textBottom:{
color:'#fff',

}
})