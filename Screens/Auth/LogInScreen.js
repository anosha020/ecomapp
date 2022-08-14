import React, { useState } from "react"
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity } from "react-native"
import Color from "../../Constant/Color"
import Myinput from "../../Components/Myinput"
import Authbtn from "../../Components/Authbtn"
const LogInScreen = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginHandler = () => {
        if (email === 'Anosha' && password === 'login123') {
            props.navigation.navigate('navigator')
        } else {
            alert('Enter a valid Email or Password')
        }

    }
    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: Color.bgWhite, alignItems: "center", justifyContent: "center" }}>
            <View style={{ height: "65%", width: "90%", backgroundColor: Color.primary, borderRadius: 10 }}>
                <View style={{ height: "20%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: "90%", width: "33%", marginTop: 20, resizeMode: "center" }}
                        source={require("../../assets/Images/logo.jpg.png")} />
                </View>
                <View style={{ height: "80%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Myinput
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        placeholder="Enter Email Address"
                    />
                    <Myinput
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        secure
                        placeholder="Enter Password"
                    />
                    <Authbtn onPress={loginHandler}
                        btntitle="Login"
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate("signup")} style={{ marginTop: 2 }}>
                        <Text style={{ color: "white" }}>
                            Don't have an account?Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default LogInScreen