import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

console.log(getFontFamily('Inter',600))

export const styles = StyleSheet.create({
    title:{
        color:'#022150',
        fontFamily:getFontFamily('Inter','600'),
        fontSize:24
    }
})