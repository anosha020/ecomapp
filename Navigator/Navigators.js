import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Color from '../Constant/Color'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MalIcons from '../Components/MalIcons'

//HOME SCREENS
import HomeScreen from '../Screens/Home/HomeScreen'
import CategoryScreen from '../Screens/Home/CatergoryScreen'
import CartScreen from '../Screens/Home/CartScreen'
import ProfileScreen from '../Screens/Home/ProfileScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen'

//login screen

import LogInScreen from '../Screens/Auth/LogInScreen'
import SignUpScreen from '../Screens/Auth/SignUpScreen'



const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();



const Navigators = (props) => {
    return (

        <Bottom.Navigator

            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    height: 60,
                    left: 20,
                    right: 20,
                    bottom: 10,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    elevation: 3

                }
            }}>
            <Bottom.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 40,
                            width: 40
                        }}>
                            <MalIcons
                                iconName='home'
                                color={focused ? Color.primary : "lightgray"}
                                size={focused ? 35 : 30}
                                onPress={props.HomeScreen} />
                        </View>
                    )
                }}
                name='homescreen' component={HomeScreen} />
            <Bottom.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 40,
                            width: 40
                        }}>
                            <MalIcons
                                iconName='view-list'
                                color={focused ? Color.primary : "lightgray"}
                                size={focused ? 35 : 30}
                                onPress={props.CategoryScreen} />
                        </View>
                    )
                }}
                name='categoryscreen' component={CategoryScreen} />
            <Bottom.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 40,
                            width: 40
                        }}>
                            <MalIcons
                                iconName='cart'
                                color={focused ? Color.primary : "lightgray"}
                                size={focused ? 35 : 30}
                                onPress={props.CartScreen} />
                        </View>
                    )
                }}
                name='cartscreen' component={CartScreen} />
            <Bottom.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 40,
                            width: 40
                        }}>
                            <MalIcons
                                iconName='bag-personal'
                                color={focused ? Color.primary : "lightgray"}
                                size={focused ? 35 : 30}
                                onPress={props.ProfileScreen} />
                        </View>
                    )
                }}
                name='profilescreen' component={ProfileScreen} />
        </Bottom.Navigator>

    )
};
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="false" initialRouteName="login">
                <Stack.Screen name="login" component={LogInScreen} />
                <Stack.Screen name="signup" component={SignUpScreen} />
                <Stack.Screen name='navigator' component={Navigators} />
            </Stack.Navigator>
        </NavigationContainer>

    )
};
export default MainNavigator;

