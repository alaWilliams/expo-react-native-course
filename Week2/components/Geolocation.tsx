import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker }  from 'react-native-maps';


import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting for location';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
      
  }

  return (
    <View style={styles.container}>
      {location &&
      <View>
        <Text style={styles.paragraph}>Current latitude: {location?.coords?.latitude.toFixed(2)}</Text>
        <Text style={styles.paragraph}>Current longitude: {location?.coords?.longitude.toFixed(2)}</Text>
        <Text style={styles.paragraph}>Current altitude: {location?.coords?.altitude.toFixed(2)}</Text>
        <Text style={styles.paragraph}>Current speed: {location?.coords?.speed.toFixed(2)}</Text>
        <Text style={styles.paragraph}>Timestamp: {location?.timestamp}</Text>
        <Text style={styles.paragraph}>You are here</Text>

        <MapView style={{flex: 0.8}}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
  }} >
     <Marker
      coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}}></Marker>
  </MapView>
   
      
      </View>

} 

{errorMsg &&         
<Text style={styles.paragraph}>{text}</Text>
}
      
      

      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#c09f9ffff'
  },
});