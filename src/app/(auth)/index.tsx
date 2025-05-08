import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack } from 'expo-router'
import imagePath from '@/src/constants/imagePath'
import {moderateScale, verticalScale} from 'react-native-size-matters'

const AuthIndex = () => {

  const [isLoading, setIsLoading] = useState(false)

  let navigate = () => {
    router.push('/(auth)/terms_agree')
  }

  let loading = () => {
    setIsLoading(true)
    setTimeout(navigate, 2000)
  }

  useEffect(() => {
    const timeout = setTimeout(loading, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
        <Text style={styles.whtsp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={'#0CCC83'} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.form_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default AuthIndex

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(50)
  },
  header: {},
  body: {
    alignItems: 'center',
    gap: verticalScale(10)
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
    height: verticalScale(80),
    justifyContent: 'flex-end'
  },
  form_text: {
    fontSize: moderateScale(12),
    color: '#867373'
  },
  facebook_text: {
    fontSize: moderateScale(15)
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70)
  },
  whtsp_text: {
    fontSize: moderateScale(30),
    fontWeight: '500'
  },
  loading_text: {
    fontSize: moderateScale(15),
    color: '#00A884',
    fontWeight: 500,
    marginTop: verticalScale(5)
  }
})