import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { storiesType } from '../../types'
import { styles } from './style'
const UserStory = ({firstName,profileImage,id}:storiesType) => {
  return (
    <View style={styles.storyContainer}>
        <View style={styles.userImageContainer}>
            <Image source={profileImage} style={styles.image} />
        </View>
      <Text style={styles.firstName}>{firstName}</Text>
    </View>
  )
}

export default UserStory
