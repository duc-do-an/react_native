import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import Bai11 from './components/Bai11';
import Bai3 from './components/Bai3';
import Task from './components/Task';
import Bai2 from './components/Bai2';
import Bai4 from './components/Bai4';



const App = () => {
  return (
    <View style={styles.container} >
      {/* <Bai11/>
      <Form /> */}
      {/* <Bai2 /> */}
      <Bai3 />
      {/* <Task/> */}
      {/* <Tasks/> */}
    </View>
    
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
})
