import React from "react"
import { Text, SafeAreaView,View } from "react-native"
import Color from "../../Constant/Color"
import Myinput from "../../Components/Myinput"
import Authbtn from "../../Components/Authbtn"
const SignUpScreen = (props) => {
    return (
        <View style={{ height: "100%", width: "100%",backgroundColor:Color.primary,justifyContent:"center",alignItems:'center'}}>
            <Myinput 
            placeholder="Enter Full Name"/>
            <Myinput 
            placeholder="Enter Email Address"/>
            <Myinput 
            placeholder="Enter Phone Number"/>
            <Myinput 
            placeholder="Enter Address"/>
            <Authbtn
            btntitle="Sign Up"/>
        </View>
    )
}
export default SignUpScreen