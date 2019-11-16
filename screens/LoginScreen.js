import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import AppService from '../core/func';

export default function HomeScreen() {
    const _onLoginPressed = () => {
        AppService.login('root', 'root');
        /* navigation.navigate('Dashboard'); */
    };

    return (
        <View style={styles.container}>
            {/* <Logo />

            <Header>Welcome back.</Header> */}

            <TextInput
                label="Email"
                returnKeyType="next"
                /* value={email.value} */
                onChangeText={text => setEmail({ value: text, error: '' })}
                /* error={!!email.error}
                errorText={email.error} */
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address" />

            <TextInput
                label="Password"
                returnKeyType="done"
                /* value={password.value} */
                /* onChangeText={text => setPassword({ value: text, error: '' })} */
                /* error={!!password.error}
                errorText={password.error} */
                secureTextEntry
            />

            <Button mode="contained" onPress={_onLoginPressed}>
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20
    }
});