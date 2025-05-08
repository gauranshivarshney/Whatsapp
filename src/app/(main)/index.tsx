import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Chats from '@/src/components/molecules/chats'
import Status from '@/src/components/molecules/status'
import Calls from '@/src/components/molecules/calls'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { useRouter } from 'expo-router'
import { storage } from '@/src/utlis/utlis'

const MainIndex = () => {

  const [currentPage, setCurrentPage] = useState('chat')
  const [showLogout, setShowLogout] = useState(false)
  const router = useRouter()

  const ActivePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />
      case "status":
        return <Status />
      case "calls":
        return <Calls />
      default:
        return <Chats />
    }
  }

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout", onPress: async () => {
          await storage.removeItem("access_token")
          router.replace('/(auth)/terms_agree')
        }
      }
    ])
    setShowLogout(false)
  }

  const WhatsAppHeader = () => {
    return (
      <View style={styles.whatsappHeader}>
        <Text style={styles.whatsappText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
          <AntDesign name='search1' style={styles.headerIcon} />
          <TouchableOpacity onPress={() => setShowLogout(!showLogout)}>
            <Entypo name='dots-three-vertical' style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
        {showLogout && (
          <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBarBackground} />
      <StatusBar
        backgroundColor='#008069'
        barStyle='light-content'
        translucent={false}
      />
      <WhatsAppHeader />
      <View style={styles.topBarContainer}>
        {['chats', 'status', 'calls'].map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setCurrentPage(item)} style={[styles.topBarButton, item == currentPage && { borderColor: 'white' },]}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      {ActivePage()}
    </SafeAreaView>
  )
}

export default MainIndex

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarBackground: {
    marginTop: -50,
    height: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#008069'
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    backgroundColor: '#008069',
    gap: scale(10),
    paddingTop: verticalScale(10)
  },
  topBarButton: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 3,
    paddingBottom: verticalScale(10),
    borderColor: '#008069'
  },
  topBarText: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase'
  },
  headerIcon: {
    fontSize: moderateScale(24),
    color: 'white'
  },
  whatsappHeader: {
    backgroundColor: '#008069',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(15),
  },
  iconContainer: {
    flexDirection: 'row',
    gap: scale(10)
  },
  whatsappText: {
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: 'bold'
  },
  logoutContainer: {
    position: 'absolute',
    right: scale(15),
    top: verticalScale(50),
    backgroundColor: 'white',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(15),
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    textAlign: 'center'
  }
})