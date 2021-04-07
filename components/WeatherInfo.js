import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
      } = currentWeather
    const {icon} = details
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`
      return (
        <View style={styles.weatherInfo}>
        
        <Text>{temp}</Text>
        <View style={styles.main}>
            <WeatherInfo currentWeather={currentWeather}/>
        </View>
        </View>
      )
}


const styles = StyleSheet.create({
    weatherInfo: {
        alignItems:'center'
    },
    weatherIcon:{
        width: 100,
        height: 100,
    }
})