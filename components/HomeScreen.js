import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends PureComponent {
    static navigationOptions = {
        title: 'Login'
    };
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center '}}>
                <Text>Welcome to</Text>
                <Text>Track 2020</Text>
                <Button title="Login"
                onPress={() => this.props.navigationOptions.navigate('Login')} />
            </View>
        )
    }
} 

export default HomeScreen;
