import React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"
const Authbtn=(props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={Styles.loginbtn}>
            <Text style={Styles.btnstyle}>
                {props.btntitle}
            </Text>
        </TouchableOpacity>  
    )
}

const Styles=StyleSheet.create({
    loginbtn:{
        height:40,
        width:"84%",
        backgroundColor:"green",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    btnstyle:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    }
})
export default Authbtn