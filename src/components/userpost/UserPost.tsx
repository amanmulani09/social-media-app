import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserPostsProps } from '../../types'
import UserProfile from '../userprofile/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';
import { faBookmark, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
const UserPost = (props:UserPostsProps) => {
    const {firstName,lastName,banerImage,likes,location,comments,bookmarks,profileImage} = props;
  return (
    <View style={styles.postContainer}>
        <View style={styles.headerContainer}>
            <View style={styles.userContainer}>
            <UserProfile imageDimensions={48} profileImage={profileImage} />
            <View style={styles.postTypographyContainer}>
                <Text style={styles.username}>{firstName} {lastName} </Text>
                <Text style={styles.location}> {location}</Text>
            </View>
            </View>
            <FontAwesomeIcon icon={faEllipsisH} color='#79868F' size={22}/>
        </View>
        <View>
            <Image source={banerImage} style={styles.postImage} />
        </View>
        <View style={styles.userPostStats}>
            <View style={styles.userPostStatsBtn}>
                <FontAwesomeIcon icon={faHeart} color='#79869F' />
                <Text style={styles.userPostsStatsText}>{likes}</Text>
            </View>
            <View style={styles.userPostsRightButtons}>
                <FontAwesomeIcon icon={faMessage} color='#79869F' />
                <Text style={styles.userPostsStatsText}>{likes}</Text>
            </View>
            <View style={styles.userPostsRightButtons}>
                <FontAwesomeIcon icon={faBookmark} color='#79869F' />
                <Text style={styles.userPostsStatsText}>{likes}</Text>
            </View>
        </View>
    </View>
  )
}

export default UserPost
