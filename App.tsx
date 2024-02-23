import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFontFamily } from './assets/fonts/helper'

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize:40,fontFamily:getFontFamily('Inter','100')}}>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})