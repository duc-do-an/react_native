import { View, Text, TouchableOpacity, ScrollView , Alert} from 'react-native'
import React, { useState } from 'react'
import { StyleSheet,  } from 'react-native-web'
import styles from './style'


import Task from '../Task'
const Bai3 = () => {
  const [taskList,setTaskList] = useState([])
  const handleAddTask = (task) =>  {
   setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) =>  {
    // Alert.alert('Thông báo!', 'bạn có muốn xóa', [
    //   {
    //     text: 'OK',
    //     onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
    //     },
    //     style: 'cancel',
    //   },
    //   {text: 'cancel', onPress: () => {}},
    // ]);
    }
  return (
    <View style={styles.container}>
<View style={styles.body}>
      <Text style={styles.header}>Huỳnh Văn Đức</Text>
      <ScrollView style={styles.items}>
     
        {
          taskList.map((item,index) => {
            
            const numberText = index + 1 < 10 ? `0${index+1}` : index+1; 
            const itemBg = (index + 1) % 2 === 0 ? styles.odd : styles.even ; 

            return  <TouchableOpacity key={index} onPress = {()=>handleDeleteTask(index)}>
        
            <View style={styles.item}>
              <View style={[styles.square,itemBg]}>
              <Text style={styles.number}>{numberText}</Text>
              </View> 
              <Text style={styles.content}>   {item}</Text>
            </View> 
      
            
            </TouchableOpacity>
          })
        }
         
      

      
      
      </ScrollView>
      
      
    </View>
      <Task onAddTask = {handleAddTask} />
    </View>
  )
}

export default Bai3