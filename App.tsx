import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getFontFamily } from './assets/fonts/helper'
import Title from './src/components/title/Title'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { globalStyles } from './src/styles/globalStyles'
const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyles.titleContainer}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyles.envolopContainer}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20}/>
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2 </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App
