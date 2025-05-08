import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { OtpInput } from 'react-native-otp-entry'
import { storage } from '@/src/utlis/utlis'
import { router } from 'expo-router'

const VerifyOtp = () => {

  const navigation = useNavigation()
  const [otp, setOTP] = useState('')

  useEffect(() => {
    if(otp.length === 4){
      Keyboard.dismiss()
    }
  }, [otp])

  const onPress = async () => {
    await storage.setItem("access_token", "vgjhvjhvjh")
    router.replace('/(main)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name='arrowleft' style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>Code has been send to +91 11******44</Text>
        <OtpInput 
          numberOfDigits={4} 
          onTextChange={(text) => setOTP(text)} 
          value={otp} 
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpBox,
            pinCodeTextStyle: styles.otpText
          }} 
        />
        <Text style={styles.otpSendText}>Resend Code in <Text style={styles.counterText}>56 </Text>s</Text>
      </View>
      <View>
        <ButtonComp title='Verify' onPress={onPress} style={styles.verifyButton} />
      </View>
    </SafeAreaView>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(30),
    flex: 1,
    justifyContent: 'space-between'
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    paddingTop: verticalScale(30),
    paddingHorizontal: scale(10)
  },
  backButton: {
    fontSize: moderateScale(24),
    color: 'black',
    fontWeight: 'bold'
  },
  headTitle: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: '600',
  },
  body: {
    paddingHorizontal: scale(10),
    marginTop: -80,
    alignItems: 'center',
    gap: verticalScale(20)
  },
  counterText: {
    color: '#00A884'
  },
  otpSendText: {
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  otpContainer: {
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(20)
  },
  otpBox: {
    borderWidth: 2,
    borderColor: '#00A884',
    borderRadius: 10,
    width: moderateScale(40),
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  otpText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  verifyButton: {
    padding: moderateScale(15),
    width: 350,
    marginLeft: 12,
    marginBottom: 40,
    borderRadius: moderateScale(20)
  }
})