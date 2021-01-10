import React from "react";
import { View, Text, StyleSheet } from "react-native"
import theme from "../styles/theme"

const Header = (props) => {
    return (
        <View style={styles.header}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: theme.white
    }
})

export default Header