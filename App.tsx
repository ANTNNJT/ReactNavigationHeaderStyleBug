import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const orangeHeaderStyle = {
    headerStyle: {
        backgroundColor: 'orange',
    },
};

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{borderWidth: 1, padding: 16, borderColor: 'gray'}} onPress={() => navigation.navigate('Second')} >
                <Text style={{ fontSize: 24 }}>Go to Second Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

function SecondScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{borderWidth: 1, padding: 16, borderColor: 'gray'}} onPress={() => navigation.navigate('MyModal')} >
                <Text style={{ fontSize: 24 }}>Open Modal</Text>
            </TouchableOpacity>
        </View>
    );
}

function ModalScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{borderWidth: 1, padding: 16, borderColor: 'gray'}} onPress={() => navigation.goBack()} >
                <Text style={{ fontSize: 24 }}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const RootStack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={HomeScreen} options={orangeHeaderStyle} />
                    <RootStack.Screen name="Second" component={SecondScreen} options={orangeHeaderStyle} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="MyModal" component={ModalScreen} options={orangeHeaderStyle} />
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default App;
