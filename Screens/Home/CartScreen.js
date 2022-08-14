import React, { useState } from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import MainHeader2 from '../../Components/MainHeader2'
import Color from '../../Constant/Color'
import * as CartItemAction from '../../Store/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
const CartScreen = (props) => {
    const allCartItems = useSelector(state => state.product.myCart)
    const dispatch = useDispatch()
    const renderCartList = (itemData) => {
        const deleteCartItem = () => {
            dispatch(CartItemAction.deleteCartItem(itemData.item.id))
        }
        return (
            <View style={{
                height: 100, width: "100%", marginVertical: 10,
                borderBottomColor: "lightgray",
                borderWidth: 0.5,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{ height: "100%", width: "30%" }}>
                    <Image style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                        source={{ uri: itemData.item.thumbNail }} />
                </View>
                <View style={{ height: "100%", width: "60%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>{itemData.item.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: Color.primary }}>{itemData.item.priceUnit} </Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: Color.primary }}>{itemData.item.quantity}</Text>
                    {/* <View style={{height:30,width:"40%",justifyContent:"center",left:120,fontSize:30}}> */}
                    <Button onPress={deleteCartItem} color={Color.primary} title='DELETE ITEM'></Button>
                    {/* </View>    */}

                </View>

            </View>
        )
    };
    const [search, setSearch] = useState("")
    return (
        <View style={{ height: "100%", width: "100%" }}>
            <MainHeader2 onCart={() => props.navigation.navigate("cartscreen")}
                onBack={() => props.navigation.goBack()}
                onChangeText={text => setSearch(text)} />
            <View style={{ height: "73%", width: "100%" }}>
                <View style={{ height: "100%", width: "100%" }}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={allCartItems}
                        renderItem={renderCartList}
                    />
                </View>
            </View>
        </View>)
}
export default CartScreen