import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

export const globalStyles = StyleSheet.create({
    titleContainer:{
        marginLeft:27,
        marginRight:17,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      envolopContainer:{
        padding:14,
        backgroundColor:'#F9FAFB',
        borderRadius:100
      },
      messageNumberContainer:{
        backgroundColor:'#F35BAC',
        justifyContent:'center',
        flexDirection:'row',
        width:12,
        height:12,
        borderRadius:12,
        alignItems:'center',
        position:'absolute',
        right:10,
        top:12
      },
      messageNumber:{
        color:'#FFFFFF',
        fontSize:6,
        fontFamily:getFontFamily('Inter','600'),
        textAlign:'center'
      }
})