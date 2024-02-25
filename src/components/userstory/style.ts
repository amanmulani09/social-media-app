import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

export const styles = StyleSheet.create({
    storyContainer:{
        marginRight:20,
    },
    firstName:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize:14,
        color:'#022150',
        marginTop:8,
        textAlign:'center'
    },
    userImageContainer:{
        borderWidth:1,
        borderColor:'#F35BAC',
        borderRadius:50,
        padding:3
    },
    image:{
        width:65,
        height:65
    }
})