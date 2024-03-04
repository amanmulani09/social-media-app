import {Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyle'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
// Define types for navigation props
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface ProfileScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const Profile = ({navigation}:ProfileScreenProps) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhile,globalStyles.flex]}>
      <Text>Profile</Text>
      <Text onPress={()=> navigation.goBack()}>Go Back</Text>
    </SafeAreaView>
  )
}

export default Profile
