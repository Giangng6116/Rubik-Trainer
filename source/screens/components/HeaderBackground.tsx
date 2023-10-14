import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
type Props = {
  title: string,
}
const HeaderBackground = ({title}:Props) => {
  return (
    <View style={styles.background}>
      <Text style={{color: "white"}}>{title}</Text>
    </View>
  )
}

export default HeaderBackground

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
    
  }

})