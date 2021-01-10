import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import theme from "../styles/theme"
import { ColorLuminance } from "../styles/colorHelper"

// 設計客製化按鈕
const ButtonBlock = ({ title, onPress, color }) => {
    const backgroundColor = color in theme ? theme[color] : theme['primary'];
    const borderColor = ColorLuminance(backgroundColor, -0.1);

    return (
        <TouchableOpacity
            style={{
                borderColor,
                backgroundColor,
                ...styles.btn
            }}
            onPress={onPress}
        >
            <Text style={styles.btnText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 2,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: "center",
        borderRadius: 12,
        marginTop: 10
    },
    btnText: {
        fontSize: 18,
        color: "white"
    },
})

export default ButtonBlock


