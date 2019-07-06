import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends PureComponent {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center '}}>
                <Text>Welcome to</Text>
                <Text>Track 2020</Text>
                <Button title="Login"
                onPress={() => this.props.navigation.navigate('Login')} />
                <Button title="Sign-Up" onPress={() => this.props.navigation.navigate('Sign-Up')} />
            </View>
        )
    }
} 

export default HomeScreen;
