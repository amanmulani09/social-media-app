import { ImageSourcePropType } from "react-native"
export type titleProps = {
    title:string,
  }

export type storiesType = {
    id:number,
    firstName:string,
    profileImage:ImageSourcePropType
}
export type UserProfileProps = {
  profileImage:ImageSourcePropType,
  imageDimensions:number
}


export type UserPostsProps = {
    id:number,
    firstName:string,
    lastName:string,
    location:string,
    likes:number,
    comments:number,
    bookmarks:number,
    banerImage:ImageSourcePropType,
    profileImage:ImageSourcePropType
}