import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'

const Status = () => {

  const data = [
    {
      image: imagePath.user,
      name: 'Vishal Pundhir',
      message: '5 minutes ago'
    },
    {
      image: imagePath.user,
      name: 'Gauri Varshney',
      message: '10 minutes ago'
    },
    {
      image: imagePath.user,
      name: 'Daya Gada',
      message: 'Today, 9:00 am'
    },
    {
      image: imagePath.user,
      name: 'Mahi Varshney',
      message: 'Today, 2:00 pm'
    },
    {
      image: imagePath.user,
      name: 'Vikas Khanna',
      message: 'Yesterday, 7:30 pm'
    }
  ]

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <MessageCard 
        name={"Gauranshi"} 
        message={"Tap to add status update"} 
        image={imagePath.user}
        logoComponent={<View style={styles.logoComponentContainer}>
          <Ionicons name='add-outline' size={22} color='black' />
        </View>} 
      />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <MessageCard name={item?.name} message={item?.message} image={item?.image} />
        }}
      />
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10
  },
  logoComponentContainer: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(50),
    backgroundColor: '#008069',
    position: 'absolute',
    bottom: verticalScale(-5),
    right: scale(-5),
    borderWidth: 2,
    borderColor: 'black'
  }
})