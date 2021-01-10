import React from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import theme from "../styles/theme"

const InputGroup = ({ value, label, onChangeText, placeholder, keyboardType, autoCapitalize, secureTextEntry }) => {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value || ""}
                placeholder={placeholder || ""}
                autoCapitalize={autoCapitalize || 'sentences'}
                keyboardType={keyboardType || 'default'}
                onChangeText={val => onChangeText(val)}
                secureTextEntry={secureTextEntry || false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 10
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        color: "#555"
    },
    input: {
        borderWidth: 2,
        borderColor: "#ccc",
        fontSize: 16,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: theme.white
    }
})

export default InputGroup