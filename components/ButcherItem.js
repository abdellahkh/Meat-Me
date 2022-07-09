import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default function ButcherItem() {
    return (
        <View>
            <ButcherImage />
        </View>
    );
}

// const ButcherImage = () => (
//     <Image 
//         source={require("../assets/butchers/tatlim_main.png")}
//         style={{width: "100%", height: 180}}
//     />
// )

const ButcherImage = ()=>(
    <>
        <Image
            source={{
                uri: "https://www.meatme.be/wp-content/uploads/2022/03/biomeat_boucherie_banner.jpg"
            }}
            style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{position:"absolute", right:20, top: 10}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
    
)

const ButcherInfo = () => (
    <>
        
    </>
)