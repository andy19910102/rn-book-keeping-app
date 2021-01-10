import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import theme from "../styles/theme"


const List = ({ id, title, price }) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.createdAt}>紀錄時間：2021/01/01</Text>
            </View>
            <View style={styles.controlGroup}>
                <TouchableOpacity style={styles.deleteBtn}>
                    <FontAwesome size={20} name="trash" color={theme.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: theme.white,
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        flexDirection: "row"
    },
    content: {
        flex: 1,
    },

    title: {
        fontSize: 18,
        color: "#555",
        marginBottom: 8
    },
    price: {
        fontSize: 14,
        color: "#555",
        marginBottom: 8
    },
    createdAt: {
        fontSize: 12,
        color: "#888",
    },
    controlGroup: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    deleteBtn: {
        width: 36,
        height: 36,
        backgroundColor: theme.red,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default List