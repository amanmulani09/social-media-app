import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from './src/components/title/Title'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { globalStyles } from './src/styles/globalStyles'
import { stories } from './src/constants'
import UserStory from './src/components/userstory/UserStory'
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
      <View style={globalStyles.userStoryContainer}>
        <FlatList
        data={stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <UserStory {...item} key={Math.random()* 1000 + '_'} />
        )}
        />
      </View>
    </SafeAreaView>

  )
}

export default App
