import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class LoginScreen extends PureComponent {
    static navigationOptions = {
        title: 'Login'
    }
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center '}}>
                <Text>This is the sign-in form</Text>
                <Button 
                title="Return Home"
                onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
} 

export default LoginScreen;
