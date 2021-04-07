import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker'


export default function UnitsPicker({unitWeather, setUnitWeather}) {
    return (
        <View style={styles.unitWeather}>
            <Picker selectedValue={unitWeather} onValueChange={(item)=> setUnitWeather(item)}>
            <Picker.Item label='C°' value='metric'/>
            <Picker.Item label='F°' value='imperial'/>
            </Picker>
        </View>
    )
}

const styles=StyleSheet.create({
    unitWeather:{
        position: 'absolute',
        top:-300,
        left:20,
        height:50,
        width:100
    }
})