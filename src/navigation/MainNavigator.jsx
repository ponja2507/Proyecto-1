import React, {useState} from 'react'
import AuthStackNavigator from "./AuthStackNavigator"
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator'
import { useSelector } from 'react-redux'


const MainNavigator = () => {
    const user = useSelector(state => state.auth.user)

  return user? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator