import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'

type titleProps = {
  title:string
}
const Title = ({title}:titleProps) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default Title
