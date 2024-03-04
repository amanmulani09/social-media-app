import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize } from "../../utils/scaling";

console.log(getFontFamily('Inter',600))

export const styles = StyleSheet.create({
    title:{
        color:'#022150',
        fontFamily:getFontFamily('Inter','600'),
        fontSize: scaleFontSize(24)
    }
})