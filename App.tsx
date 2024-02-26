import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from './src/components/title/Title'
import { faEnvelope, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { globalStyles } from './src/styles/globalStyles'
import { stories, userPosts } from './src/constants'
import UserStory from './src/components/userstory/UserStory'
import { storiesType } from './src/types'
import UserPost from './src/components/userpost/UserPost'
const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage,setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData,setUserStoriesRenderedData] = useState<storiesType[]>([]);
  const [isLoadingUserStories,setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage,setuserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData,setuserPostsRenderedData] = useState<storiesType[]>([]);
  const [isLoadinguserPosts,setIsLoadinguserPosts] = useState(false);

  const pagination = (databse:storiesType[],currentPage:number,pageSize:number)=>{
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
      setIsLoadingUserStories(false)
  },[]);

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
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          // console.log('reached the end')
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
      <View>
        <FlatList
        data={userPosts}
        style={globalStyles.userPostContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <UserPost {...item} />
        )}
        />
      </View>
    </SafeAreaView>

  )
}

export default App
