import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, verticalScale, scale, s } from 'react-native-size-matters'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const Login = () => {

  const [visible, setVisible] = useState(false)
  const [countryName, setCountryName] = useState('India')
  const [countryCode, setCountryCode] = useState('+91')

  const onNextButtonClick = () => {
    router.push('/(auth)/verify_otp')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}>What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity style={styles.dropDown_container} onPress={() => setVisible(true)}>
            <View />
            <Text style={styles.dropDown_title}>{countryName}</Text>
            <AntDesign name='caretdown' size={moderateScale(14)} color='black' />
          </TouchableOpacity>
          <View style={styles.horizontal_line}></View>
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line}></View>
            </View>
            <View style={{gap: verticalScale(10), flex: 1}}>
            <TextInput style={styles.input} placeholder='Enter Your Phone Number' placeholderTextColor='grey'/>
            <View style={styles.horizontal_line}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{paddingHorizontal : scale(29), marginBottom: 40}} onPress={onNextButtonClick} />
      </View>
      {
        visible && (
          <CountryPicker 
            visible={true} 
            onClose={() => setVisible(false)}
            withFilter 
            onSelect={(e: any) => {
              setCountryCode(`+${e.callingCode[0]}`)
              setCountryName(e.name)
            }}
          />
        )
      }
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    gap: verticalScale(50),
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20)
  },
  input_main_container: {},
  input_container: {
    paddingHorizontal: scale(0),
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20)
  },
  heading: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontWeight: '400',
    color: 'black'
  },
  link_description: {
    color: '#002AC0'
  },
  horizontal_line: {
    width: '100%',
    height: verticalScale(1),
    backgroundColor: '#05AAB2'
  },
  dropDown_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20)
  },
  dropDown_title: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: 'black'
  },
  country_code: {
    gap: verticalScale(10)
  },
  input: {
    fontSize: moderateScale(14)
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: 'black'
  }
})