import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Alert } from "react-native";
import Header from "../components/Header"
import InputGroup from "../components/InputGroup"
import ButtonBlock from "../components/ButtonBlock"
import List from "../components/List"
import ListItem from "../components/ListItem"

const BookKeepingScreen = () => {
    const [newItemTitle, setNewItemTitle] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");
    const [list, setList] = useState([]);

    const createItem = () => {
        // TODO: CreateItem
        console.log("[createItem]")
    }

    // 從 DB 取得資料
    const getDataFromDB = async () => {
        console.log("[getDataFromDB]")

    }

    useEffect(() => {
        getDataFromDB();
    }, []);

    return (
        <ScrollView style={styles.mainScreen}>
            <View
            >
                <View>
                    <Header>
                        <View>
                            <InputGroup
                                label="名稱"
                                placeholder="請輸入項目名稱"
                                value={newItemTitle}
                                onChangeText={val => console.log("項目名稱", val)}
                            />
                            <InputGroup
                                label="價格"
                                placeholder="請輸入項目價格"
                                keyboardType='number-pad'
                                value={newItemPrice}
                                onChangeText={val => console.log("項目價格", val)}
                            />
                            <ButtonBlock title="新增項目" onPress={createItem} />
                        </View>
                    </Header>
                    <List>
                    </List>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainScreen: {}
})

export default BookKeepingScreen