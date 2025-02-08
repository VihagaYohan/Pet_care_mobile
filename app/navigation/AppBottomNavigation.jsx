import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {HomeIcon} from 'react-native-heroicons/outline'
import {ClockIcon} from 'react-native-heroicons/outline'
import {MapIcon} from 'react-native-heroicons/outline'
import {UserIcon} from 'react-native-heroicons/outline'

// screens
import {
  HomeScreen,
  AppointmentScreen,
  ExploreScreen,
  ProfileScreen,
} from '../screens';

// navigation
import {Routes, } from '.';

const Tabs = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
        }}>
            <Tabs.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:({focused, color, size}) => {
                        return (
                            <HomeIcon color={color} size={size}/>
                        )
                }
            }}/>
            <Tabs.Screen name="Appointment" component={AppointmentScreen} options={{
                 tabBarIcon:({focused, color, size}) => {
                    return (
                        <ClockIcon color={color} size={size}/>
                    )
            }
            }}/>
            <Tabs.Screen name="Explore" component={ExploreScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return (
                        <MapIcon color={color} size={size}/>
                    )
                }
            }}/>
            <Tabs.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return (
                        <UserIcon color={color} size={size}/>
                    )
                }
            }}/>
        </Tabs.Navigator>
    )
}

export default BottomNavigation;
