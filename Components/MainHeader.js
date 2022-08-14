import React, { useState } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import Color from '../Constant/Color'
import MalIcons from './MalIcons'
import { useSelector } from 'react-redux'


const MainHeader = (props) => {
    const allCartItems = useSelector(state => state.product.myCart)
    const [search, setSearch] = useState("")
    console.log(search)
    return (
        <View style={{ height: 100, width: "100%", backgroundColor: Color.primary }}>
            <View style={{ height: 60, width: "100%", marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: "100%", width: "15%", justifyContent: "center", alignItems: "center",marginTop:20 }} >
                    <View style={{ height: "70%", width: "70%", backgroundColor: "white", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            style={{ height: "70%", width: "90%", resizeMode: "contain" }}
                            source={require("../assets/Images/logo.jpg.png")} />

                    </View>
                </View>
                
                <View style={{ height: "100%", width: "75%", marginTop: 45, alignItems: "center" }} >
                    <View style={{ height: 41, width: "95%", backgroundColor: "white", borderRadius: 10, justifyContent: "center" }}>
                        <TextInput
                            onChangeText={props.onChangeText}
                            style={{ marginLeft: 4 }}
                            placeholder={"Search"}>
                        </TextInput>
                    </View>
                </View>
                <View style={{ height: "100%", width: "15%", justifyContent: "center", alignItems: "center",marginTop: 40,right:4 }} >
                    <View >
                        <MalIcons onPress={props.onCart}
                            iconName='cart'
                            size={24}
                        />
                        <View style={
                            {
                                height: 14,
                                width: 14,
                                backgroundColor: "white",
                                left: 14,
                                borderRadius: 50,
                                bottom: 35,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text style={{ fontSize: 8, justifyContent: "center", alignItems: "center", color: Color.primary, fontWeight: "bold" }}> {allCartItems.length} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MainHeader;