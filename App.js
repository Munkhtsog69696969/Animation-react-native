import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet, Text, View , Animated , TouchableOpacity } from 'react-native';

export default function App() {
  const [isExpanded,setIsExpanded]=useState(false);

  const widthAnimation=useRef(new Animated.Value(100)).current;

  function ExpandOrShrink(){
    if(isExpanded){
      //shrink
      Animated.timing(widthAnimation , {
        toValue:100,
        duration:500,
        useNativeDriver:false,
      }).start();

      setIsExpanded(false)
    }else{
      //expand
      Animated.timing(widthAnimation , {
        toValue:500,
        duration:500,
        useNativeDriver:false,
      }).start();

      setIsExpanded(true)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ExpandOrShrink}>
        <Animated.View
          style={{
            width:widthAnimation,
            height:50,
            backgroundColor:"red",
          }}
        >
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
