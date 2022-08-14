import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import MainHeader from '../../Components/MainHeader'
import { SliderBox } from 'react-native-image-slider-box'
import * as CartAction from '../../Store/Actions/ProductAction'
import { useSelector, useDispatch } from 'react-redux'
import Color from '../../Constant/Color'

const HomeScreen = (props) => {
    const allCategories = useSelector(state => state.product.allCategories);
    const allProduct = useSelector(state => state.product.allProduct);
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const imageArray = [
        "https://inhabitat.com/wp-content/blogs.dir/1/files/2017/11/Vegetables-Carousel-889x309.jpg",
        "https://www.miractaahhut.com.tr/ticareten/images/slides/eb6a90352294a8009ec76aa8464355bf2.jpg",
        "https://image.shutterstock.com/image-photo/fresh-uncooked-red-fish-fillet-260nw-245412856.jpg",
        "https://anzcofoods.com/assets/Anzco-Foods-Site-Uploads/CanterburyBeef__FocusFillWzYxOSwzNDQsIngiLDld.jpg"


    ]
    return (
        <View style={{ height: "100%", width: "100%" }}>
            <MainHeader onCart={() => props.navigation.navigate("cartscreen")}
                onChangeText={text => setSearch(text)} />
            <SliderBox
                images={imageArray}
                sliderBoxHeight={130}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor='white'
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 5 }}
                imageLoadingColor="#2196F3"
            />
            <View style={{ width: "100%", alignItems: "center" }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 11, marginBottom: 4 }}>CATEGORIES</Text>
                </View>
                <View style={{ height: 60, width: "97%", marginVertical: 5 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={allCategories}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(itemData) => {
                            return (
                                <TouchableOpacity style={{ height: 50, width: 70, marginHorizontal: 4, borderRadius: 10 }}>
                                    <View style={{ height: "70%", width: "100%" }}>
                                        <Image style={{ height: "100%", width: "100%", resizeMode: "stretch", borderRadius: 10 }}
                                            source={{ uri: itemData.item.imageUrl }} />
                                    </View>
                                    <View style={{ height: "30%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 11, color: "black" }}>{itemData.item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: "bold" }}>ALL PRODUCT</Text>
                <View style={{ height: "51%", width: "97%", marginVertical: 5 }}>
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
                                        <View style={{ height: "18%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 3 }}>
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
            </View>
        </View>

    )
}
export default HomeScreen
