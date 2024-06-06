/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, StatusBar, TouchableOpacity } from 'react-native';

export default function AddArrayNumbers () {
    const [numbers, setNumbers] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(null);

    const twoSum = (numbers, target) => {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
          const sum = numbers[left] + numbers[right];
          if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
        return [];
      };

    const handleCalculation = () => {
        const numArray = numbers.split(',').map(num => parseInt(num.trim()));
        const targetNumber = parseInt(target.trim());
        const resultIndices = twoSum(numArray, targetNumber);
        setResult(resultIndices);
    };

    return (
        <SafeAreaView style={stylesSheet.statusBarStyle}>
            <View style={stylesSheet.container}>
                <TextInput style={stylesSheet.textInputStyle}
                placeholder="Enter sorted numbers separated by comma"
                value={numbers}
                onChangeText={text => setNumbers(text)}
                />

                <TextInput style={stylesSheet.textInputStyle}
                placeholder="Enter target number"
                value={target}
                onChangeText={text => setTarget(text)}
                keyboardType="numeric"
                />

                <TouchableOpacity style={stylesSheet.buttonStyle} onPress={handleCalculation}>
                    <Text style={stylesSheet.buttonTextStyle}>Find Two Sum</Text>
                </TouchableOpacity>

                {result && (
                    <Text style={stylesSheet.textOutputStyle}> Output: [{result[0]}, {result[1]}]</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const stylesSheet = StyleSheet.create({
    statusBarStyle: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle: {
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        bottom: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
    },
    buttonStyle: {
        width: '80%',
        backgroundColor: '#dcdbe0',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textOutputStyle: {
        marginTop: 40,
        fontSize: 20,
        fontWeight:'bold',
    },
});

