import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../components/title/Title'
import { faEnvelope, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './style'
import { stories, userPosts } from '../../constants'
import { UserPostsProps, storiesType } from '../../types'
import UserPost from '../../components/userpost/UserPost'
import UserStory from '../../components/userstory/UserStory'
import { RootStackParamList } from '../../navigation'

import {StackNavigationProp} from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyle'

// Define types for navigation props
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}


const Home = ({navigation}:HomeScreenProps) => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage,setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData,setUserStoriesRenderedData] = useState<storiesType[]>([]);
  const [isLoadingUserStories,setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 3;
  const [userPostsCurrentPage,setuserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData,setuserPostsRenderedData] = useState<UserPostsProps[] | storiesType[]>([]);
  const [isLoadinguserPosts,setIsLoadinguserPosts] = useState(false);

  const pagination = (databse:storiesType[]|UserPostsProps[],currentPage:number,pageSize:number)=>{
    const startIndex = (currentPage-1) * pageSize;
    const endIndex = startIndex + pageSize;

    if(startIndex >= databse.length){
      return [];
    };
    return databse.slice(startIndex,endIndex);
  }

  useEffect(()=>{
      setIsLoadingUserStories(true);
      const initialData = pagination(stories,1,userStoriesPageSize);
      setUserStoriesRenderedData(initialData)
      setIsLoadingUserStories(false);

      setIsLoadinguserPosts(true);
      const initialDataPosts = pagination(userPosts,1,userPostsPageSize);
      setuserPostsRenderedData(initialDataPosts);
      setIsLoadinguserPosts(false)
  },[]);

  return (
    <SafeAreaView style={globalStyles.backgroundWhile}>
    
      <View>
        <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.titleContainer}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={styles.envolopContainer} onPress={()=> navigation.navigate('Profile')}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20}/>
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2 </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userStoryContainer}>
        <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isLoadingUserStories) return;
          const contentToAppend = pagination(stories,userStoriesCurrentPage+1,userStoriesPageSize);
          if(contentToAppend.length > 0){
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
            setUserStoriesRenderedData(prev => [...prev,...contentToAppend])
          }
          setIsLoadingUserStories(false)
        }}
        data={userStoriesRenderedData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <UserStory {...item} key={item.id.toString()} />
        )}
        />
      </View>
          </>
        }
        data={userPostsRenderedData}
        style={styles.userPostContainer}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isLoadinguserPosts) return;
          const contentToAppend = pagination(userPosts,userPostsCurrentPage+1,userPostsPageSize);
          if(contentToAppend.length > 0){
            setuserPostsCurrentPage(userStoriesCurrentPage + 1);
            setuserPostsRenderedData(prev => [...prev,...contentToAppend])
          }
          setIsLoadinguserPosts(false)        }}
        renderItem={({item}:{item:UserPostsProps})=>(
          <UserPost {...item} />
        )}

        />
      </View>
    </SafeAreaView>
  )
}

export default Home
