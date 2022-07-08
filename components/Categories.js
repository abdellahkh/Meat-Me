import React from 'react'
import { View, Text, Image, ScrollView } from "react-native"

const items = [
    {
        image: require("../assets/images/halal.png"),
        text: "Halal"
    },
    {
        image: require("../assets/images/kasher_logo.png"),
        text: "Kasher"
    },
    {
        image: require("../assets/images/fish_logo.png"),
        text: "Fish"
    },
    {
        image: require("../assets/images/chicken_logo.png"),
        text: "Chicken"
    },
    {
        image: require("../assets/images/vegan_logo.png"),
        text: "Vegan"
    },
    {
        image: require("../assets/images/vegetarian_logo.png"),
        text: "Vegetarian"
    }
];

export default function Categories() {
    return (
        <View
            style={{
                marginTop: 5,
                backgroundColor: "#eeeeee",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 20 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginBottom: 6
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "800" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}