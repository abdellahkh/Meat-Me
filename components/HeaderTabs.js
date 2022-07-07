import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native"

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>

            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Image
                source={require("../images/meatMe_logo.png")}
            />
            <HeaderButton
                text="PickUp"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab == props.text ? "black" : "white",
                paddingVertical: 18,
                paddingHorizontal: 16,
                borderRadius: 50
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: props.activeTab == props.text ? "white" : "black",
                    fontSize: 13,
                    fontWeight: "900"
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    </View >
)
