import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo'


const WEATHER_API_KEY = 'ea6daa9ec8803078c1096b908b807bcd'

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitWeather, setUnitWeather] = useState('metric')

useEffect(() => {
  load()

}, [])
async function load()
{
  try{
    let { status } = await Location.requestPermissionsAsync()
    if( status  != 'granted'){
      setErrorMessage('Access to location is needed to run this app')
      return
    }
    const location = await Location.getCurrentPositionAsync()
    const {latitude, longitude} = location.coords

    const weatherurl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitWeather}&appid=${WEATHER_API_KEY}`
  
    const response = await fetch(weatherurl)
    const result = await response.json()

    if(response.ok){
      setCurrentWeather(result)
    }
    else {
      setErrorMessage(result.message)
    }

  }
  catch (error) {
    setErrorMessage(error.message)
  }
}

if(currentWeather){
  const {
    main: {temp},
  } = currentWeather
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.main}>
        <Text>{temp}</Text>

      </View>
    </View>
  )
}
else{
  return (
    <View style={styles.container}>
      <Text>{errorMessage}</Text>
      <StatusBar style="auto"/>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
