import React from 'react';
import { View, Text, Image } from 'react-native'
import MainHeader2 from '../../Components/MainHeader2'
import Color from '../../Constant/Color'

const ProfileScreen = (props) => {
    return (
        <View style={{ height: "100%", width: "100%", }}>
            <View style={{ height: "28%", width: "100%", justifyContent: 'center', alignItems: "center" }}>
                <View style={{ height: "60%", width: "40%", justifyContent: 'center', alignItems: "center" }}>
                    <Image style={{ height: "80%", width: "90%", resizeMode: "contain" }}
                        source={require('../../assets/Images/profile.jpg.png')} />

                </View>
            </View>
            <View style={{ height: "60%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: Color.primary,borderTopRightRadius:20,borderTopLeftRadius:20 }}>
                <View style={{
                    height: 50, width: "70%", marginVertical: 10, borderRadius: 12, elevation: 2,backgroundColor:"white"
                }}>
                    <View style={{ height: "100%", width: "100%", left: 7 }}>
                        <Text style={{ color: "lightgray" ,marginVertical:4}}>Username</Text>
                        <Text style={{ color: "black", fontWeight: "bold" }}>ANOSHA REHAN</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: "70%", marginVertical: 10, borderRadius: 12, elevation: 2,backgroundColor:"white" }}>
                    <View style={{ height: "100%", width: "100%", left: 7 }}>
                        <Text style={{ color: "lightgray",marginVertical:4 }}>Email Address</Text>
                        <Text style={{ color: "black", fontWeight: "bold" }}>abc123@gmail.com</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: "70%", marginVertical: 10, borderRadius: 12, elevation: 2,backgroundColor:"white" }}>
                    <View style={{ height: "100%", width: "100%", left: 7 }}>
                        <Text style={{ color: "lightgray",marginVertical:4 }}>Gender</Text>
                        <Text style={{ color: "black", fontWeight: "bold" }}>Female</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: "70%", marginVertical: 10, borderRadius: 12, elevation: 2,backgroundColor:"white" }}>
                    <View style={{ height: "100%", width: "100%", left: 7 }}>
                        <Text style={{ color: "lightgray",marginVertical:4 }}>Phone No</Text>
                        <Text style={{ color: "black", fontWeight: "bold" }}>+920000000</Text>
                    </View>
                </View>
                <View style={{ height: 50, width: "70%", marginVertical: 10, borderRadius: 12, elevation: 2 ,backgroundColor:"white"}}>
                    <View style={{ height: "100%", width: "100%", left: 7 }}>
                        <Text style={{ color: "lightgray",marginVertical:4 }}>Address</Text>
                        <Text style={{ color: "black", fontWeight: "bold" }}>A-782 block N</Text>
                    </View>
                </View>

            </View>
        </View>

    )
}
export default ProfileScreen