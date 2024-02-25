import { ImageSourcePropType } from "react-native"
export type titleProps = {
    title:string
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