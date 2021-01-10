import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Keyboard } from "react-native"
import Constants from "expo-constants"
import InputGroup from "../components/InputGroup"
import ButtonBlock from "../components/ButtonBlock"

// 首頁
function LoginScreen({ navigation }) {
    const { manifest } = Constants;
    const { version } = manifest;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

    }

    return (
        <View style={styles.loginScreen}>
            <View>
                <InputGroup
                    placeholder="請輸入Email..."
                    value={email}
                    onChangeText={val => console.log("Email", val)}
                    autoCapitalize="none"
                />
                <InputGroup
                    placeholder="請輸入密碼..."
                    value={password}
                    onChangeText={val => console.log("Password", val)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <ButtonBlock title="登入" onPress={login} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default LoginScreen;