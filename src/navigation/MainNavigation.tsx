import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from ".";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = ()=>{
   
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{header:()=> null,headerShown:false}}>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Profile" component={Profile} />
    </Stack.Navigator>
  )
   
}

export default MainNavigation;