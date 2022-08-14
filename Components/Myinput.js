import React from "react"
import {View,TextInput,StyleSheet} from "react-native"
import Color from "../Constant/Color"

const Myinput=(props)=>{
    return(
        <View style={Styles.input}>
            <TextInput style={Styles.placeholder}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                secureTextEntry={props.secure?true:false}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    input:{
        height:55,
        width:"84%",
        backgroundColor:Color.bgWhite,
        borderRadius:10,
        marginBottom:10,
        justifyContent:"center"
    },
    placeholder:{
        height:"50%",
        marginLeft:4
    }
})

export default Myinput