import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { storiesType } from '../../types'
import { styles } from './style'
import UserProfile from '../userprofile/UserProfile'
const UserStory = ({firstName,profileImage,id}:storiesType) => {
  return (
    <View style={styles.storyContainer}>
      <UserProfile profileImage={profileImage} imageDimensions={65} key={id}/>
      <Text style={styles.firstName}>{firstName}</Text>
    </View>
  )
}

export default UserStory
