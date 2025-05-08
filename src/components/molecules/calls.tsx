import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { moderateScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'

const Calls = () => {

  const data = [
    {
      image: imagePath.user,
      name: 'Vishal Pundhir',
      message: 'Today, 2:00 pm',
      rightIcon: <FontAwesome name='video-camera' style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name='arrow-down-right' style={styles.rightIcon} />
      )
    },
    {
      image: imagePath.user,
      name: 'Gauri Varshney',
      message: 'Yesterday, 4:00 pm',
      rightIcon: <Ionicons name='call' style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name='arrow-down-left' style={styles.leftIcon} />
      )
    },
    {
      image: imagePath.user,
      name: 'Daya Gada',
      message: '1 Jan, 12:00 am',
      rightIcon: <FontAwesome name='video-camera' style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name='arrow-down-left' style={styles.leftIcon} />
      )
    },
    {
      image: imagePath.user,
      name: 'Mahi Varshney',
      message: '1 Jan, 12:15 am',
      rightIcon: <Ionicons name='call' style={styles.callIcon} />,
      messageLeftIcon: (
        <Feather name='arrow-down-right' style={styles.rightIcon} />
      )
    }
  ]

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <MessageCard name={item?.name} message={item?.message} image={item?.image} rightIcon={item?.rightIcon} messageLeftIcon={item?.messageLeftIcon} />
        }}
      />
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10
  },
  callIcon: {
    color: '#008069',
    fontSize: moderateScale(22)
  },
  leftIcon: {
    fontSize: moderateScale(18),
    color: '#008069'
  },
  rightIcon: {
    fontSize: moderateScale(18),
    color: 'red'
  }
})