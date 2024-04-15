import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { narutoFetch } from '../DataServices/DataService'
import { Props } from '../type';

const ProfileScreen = ({ navigation }: Props) => {

  const [characterName, setCharaterName] = useState<string>("");
  
  const [characterIMG, setCharaterIMG] = useState<string>("");

useEffect(() => {
  const getData = async () => {
    const data = await narutoFetch();
    setCharaterName(data.name);
    setCharaterIMG(data.images[0]);
  }
  getData();
},[])


  return (
    <View>
      <Text style={{ textAlign: 'center' }} >Your Naruto Character is.....</Text>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }} >{characterName}</Text>
      <Image src={characterIMG} style={{ width:'100%', height: 500 }} />
      <Button title='Next Page' onPress={() => navigation.navigate("DataScreen", {
        name: characterName,
        img: characterIMG
      })} ></Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})