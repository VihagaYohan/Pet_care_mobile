import {createStaticNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// screens
import {HomeScreen, LoginScreen, OnboardingScreen, RegisterScreen} from '../screens'

// navigation
import {Routes} from './'

const RootStack = createNativeStackNavigator({
    initialRouteName: Routes.Home,
    screens: {
        Onboarding: OnboardingScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
        Home: {
            screen: HomeScreen
        }
    }, 
    screenOptions: {
        headerShown: false
    }
})

const Stack = createStaticNavigation(RootStack)

const AppNavigator = () => {
    return <Stack/>
}

export default AppNavigator