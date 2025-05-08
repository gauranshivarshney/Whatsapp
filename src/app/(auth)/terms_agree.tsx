import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '@/src/constants/imagePath'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import { router } from 'expo-router'

const TermsAgree = () => {

  const onAgree = () => {
    router.push('/(auth)/login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image source={imagePath.welcome} style={styles.image_style} resizeMode='contain' />
        <Text style={styles.desc_text}>Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap "Agree and continue" to accept the <Text style={styles.link_text}>Teams of Service.</Text></Text>
        <View style={{width: moderateScale(300)}}>
          <ButtonComp title='AGREE AND CONTINUE' onPress={onAgree}/>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>FACEBOOK</Text>
      </View>
    </SafeAreaView>
  )
}

export default TermsAgree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(84)
  },
  header: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    gap: verticalScale(30)
  },
  welcome_text: {
    fontSize: moderateScale(26),
    fontWeight: '600',
    marginBottom: verticalScale(10)
  },
  footer: {
    alignItems: 'center',
    marginBottom: 60
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373'
  },
  facebook_text: {
    fontSize: moderateScale(15),
    fontWeight: '600'
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250)
  },
  desc_text: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    paddingHorizontal: scale(30)
  },
  link_text: {
    color: '#0C42CC'
  }
})