import React from "react";
import { View, Text, StyleSheet } from "react-native"

const List = (props) => {
    return (
        <View style={styles.list}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})

export default List