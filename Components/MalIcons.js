import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MalIcons=(props)=>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Icon
            name={props.iconName}
            color={props.color?props.color:"white"}
            size={props.size?props.size:20}/>
        </TouchableOpacity>
    )
}
export default MalIcons