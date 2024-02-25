import {  View,Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import { UserProfileProps } from '../../types'
const UserProfile = ({profileImage,imageDimensions}:UserProfileProps) => {
  return (
         <View style={[styles.userImageContainer,{borderRadius:imageDimensions}]}>
            <Image source={profileImage} style={{width:imageDimensions,height:imageDimensions}} />
        </View>
   
  )
}

export default UserProfile