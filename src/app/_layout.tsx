import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { storage } from '../utlis/utlis'

SplashScreen.preventAutoHideAsync()

const RootNavigation = () => {
    const [isLogin, setIsLogin] = useState(false)
    const fetchToken = async () => {
      const access_token = await storage.getItem("access_token")
      console.log(access_token)
      if(access_token)
        setIsLogin(true)
    }

    useEffect(() => {
        SplashScreen.hideAsync()
    }, [])

    useEffect(() => {
      
      fetchToken()
    }, [])

    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
        </>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})