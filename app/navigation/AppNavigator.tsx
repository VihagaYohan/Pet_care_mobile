import {createStaticNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// screens
import {HomeScreen, LoginScreen, OnboardingScreen, RegisterScreen, SearchScreen} from '../screens'

// navigation
import {Routes, AppBottomNavigation} from './'

/* const RootStack = createNativeStackNavigator({
    initialRouteName: Routes.Home,
    screens: {
        Onboarding: OnboardingScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
        Home: {
            screen: HomeScreen
        },
        Search: SearchScreen, 
        Bottom: AppBottomNavigation
    }, 
    screenOptions: {
        headerShown: false,
        headerShadowVisible: false
    }
})

const Stack = createStaticNavigation(RootStack)

const AppNavigator = () => {
    return <Stack/>
} */

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Onboarding} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={Routes.Onboarding} component={OnboardingScreen}/>
            <Stack.Screen name={Routes.Register} component={RegisterScreen}/>
            <Stack.Screen name={Routes.Bottom} component={AppBottomNavigation}/>
            <Stack.Screen name={Routes.Search} component={SearchScreen}/>
        </Stack.Navigator>
    )
}

export default AppNavigator