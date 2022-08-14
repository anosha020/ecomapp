import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import MainHeader2 from '../../Components/MainHeader2'
import * as CartAction from '../../Store/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import Color from '../../Constant/Color'

const CatergoryScreen = (props) => {
    const allProduct = useSelector(state => state.product.allProduct);
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    return (
        <View style={{ height: "100%", width: "100%" }}>
            <MainHeader2 onCart={() => props.navigation.navigate("cartscreen")}
                onChangeText={text => setSearch(text)}
                onBack={() => props.navigation.goBack()} />
            <View style={{ height: "72%", width: "97%", marginVertical: 5 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={allProduct}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(itemData) => {

                        const addToCartHandler = () => {
                            dispatch(CartAction.addToCartAction(itemData.item))
                        };
                        if (itemData.item.name.includes(search)) {
                            return (
                                <View style={{
                                    height: 200, width: "48%", margin: 4, backgroundColor: "white", borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 1,
                                }}>
                                    <TouchableOpacity style={{ height: "60%", width: "100%" }}>
                                        <Image style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                                            source={{ uri: itemData.item.thumbNail }} />
                                    </TouchableOpacity>
                                    <View style={{ height: "17%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 3 }}>
                                        <Text>{itemData.item.name}</Text>
                                        <Text>{itemData.item.priceUnit}</Text>
                                        <Text>{itemData.item.description}</Text>
                                    </View>
                                    <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                        <TouchableOpacity onPress={addToCartHandler} style={{ height: 30, width: 100, backgroundColor: Color.primary, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ color: "white" }}>Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            );
                        }

                    }} />
            </View>
        </View>)
}
export default CatergoryScreen