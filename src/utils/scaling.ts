import {  useWindowDimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

// const {width,height} = Dimensions.get('window');
const {width,height} = useWindowDimensions()

const isSmallDevice = width <= 375 && !DeviceInfo.hasNotch();

const guideLineBaseWidth = ()=> isSmallDevice ? 330 : 350;

const horizontalScale = (size:number)=> (width / guideLineBaseWidth()) * size;

const guideLineBaseHeight = ()=> {
    if(isSmallDevice){
        return 550;
    }else if(width > 410){
        return 620;
    };

    return 680;
}

const verticleScale = (size:number) => (height/guideLineBaseHeight()) * size;

const guideLineBaseFont = ()=> width > 410 ? 430 : 400;

const scaleFontSize = (size:number)=> Math.round((width / guideLineBaseFont()) * size);

export {horizontalScale,verticleScale,scaleFontSize}