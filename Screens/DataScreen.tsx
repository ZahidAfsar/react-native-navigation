import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DataProps } from '../type'

const DataScreen = ({ route }: DataProps) => {

  const {name, img} = route.params
  

  return (
    <View style={styles.Container} >
      <Text>DataScreen</Text>
      <Text>{name}</Text>
      <Image src={img} style={{  width: 300, height: 300, borderRadius: 50 }} />
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})