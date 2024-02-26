import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

export const styles = StyleSheet.create({
    userContainer:{
        flexDirection:'row'
    },
    postTypographyContainer:{
        justifyContent:'center',
        marginLeft:10
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    username:{
        color:'#000',
        fontFamily:getFontFamily('Inter','600'),
        fontSize:16
    },
    location:{
        color:'#79868F',
        fontFamily:getFontFamily('Inter','400'),
        fontSize:12,
        marginTop:5,
        marginLeft:-4
    },
    postImage:{
        alignItems:'center',
        marginVertical:20
    },
    postContainer:{
        marginTop:35,
        borderBottomWidth:1,
        paddingBottom:20,
        borderBottomColor:'#EFF2F6'
    },
    userPostStats:{
        marginLeft:10,
        flexDirection:'row'
    },
    userPostStatsBtn:{flexDirection:'row'},
    userPostsStatsText:{marginLeft:3,color:'#79869F'},
    userPostsRightButtons:{
        flexDirection:'row',marginLeft:27
    }
    
})