import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'

const Chats = () => {

  const data = [
    {
      image: imagePath.user,
      name: 'Vishal Pundhir',
      message: 'Hello WhatsUp?',
      time: '06:00 pm',
      messageCount: 2
    },
    {
      image: imagePath.user,
      name: 'Gauri Varshney',
      message: 'Hello How are you?',
      time: '08:00 pm',
      messageCount: 1
    },
    {
      image: imagePath.user,
      name: 'Daya Gada',
      message: 'Namsate',
      time: '09:00 am',
      messageCount: 0
    },
    {
      image: imagePath.user,
      name: 'Mahi Varshney',
      message: 'Cooking?',
      time: '02:00 pm',
      messageCount: 2
    },
    {
      image: imagePath.user,
      name: 'Vikas Khanna',
      message: 'Who is the Winner of MasterChef?',
      time: '08:00 am',
      messageCount: 3
    },
    {
      image: imagePath.user,
      name: 'Ekta Kapoor',
      message: 'When is Naagin coming?',
      time: '11:00 am',
      messageCount: 1
    },
    {
      image: imagePath.user,
      name: 'Shinchan Nohara',
      message: 'Naneko didi se shaadi hogyi?',
      time: '03:33 am',
      messageCount: 1
    },
    {
      image: imagePath.user,
      name: 'Nobita Nobi',
      message: 'Doraemon kha milta hai?',
      time: '12:01 am',
      messageCount: 0
    }
  ]

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <MessageCard name={item?.name} message={item?.message} count={item?.messageCount} time={item?.time} image={item?.image} />
        }}
      />
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10
  }
})