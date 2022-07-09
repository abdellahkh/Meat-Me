import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import ButcherItem from '../components/ButcherItem';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        //"#FF5B5B" => color to do
        <SafeAreaView style={{ backgroundColor: "#FF5B5B", flex: 1 }}>
            <View style={{ backgroundColor: "#fff", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ButcherItem />
            </ScrollView>
            
        </SafeAreaView>
    );
}