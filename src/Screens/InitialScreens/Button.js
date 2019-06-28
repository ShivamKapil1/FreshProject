import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress = null, children, btnstyle = null }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            style={[ buttonStyle, btnstyle ]}
            onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
//        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#007aff',
        marginBottom: 5
    },
};

export default CustomButton;
