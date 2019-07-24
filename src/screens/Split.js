import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../components'
import { client } from '../config/client'

export default class Split extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: client
        };
    }
    render() {
        return (
            <View>
                <Header />
                <Text>
                    Some other text
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});