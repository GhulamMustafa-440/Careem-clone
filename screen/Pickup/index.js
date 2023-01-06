import { View, Text, Button, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Mapview, { AnimatedRegion, MarkerAnimated } from 'react-native-maps';
import * as Location from 'expo-location';
import { useState, useEffect } from "react";
function Pickup({ navigation }) {

    const [location, setLocation] = useState(new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0009,
        longitudeDelta: 0.0009,
    }));
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          //let location = await Location.getCurrentPositionAsync({});
          //setLocation(location);

          Location.watchPositionAsync({
            distanceInterval: 0.1,
            timeInterval: 100,

          },(responce)=> {
            const {coords: {longitude,latitude}} = responce
            setLocation({...location,longitude,latitude})
            console.log(location)
          })
        })();
      }, []);
    
    return (
        <View>
            <MapView style={styles.map} region={location} >
                <MarkerAnimated

                    coordinate = {location}
                    title={'Ghar'}
                    description={'Bara wala ghar'}
                />
            </MapView>
            <Button
                title="Select Destination"
                onPress={() => navigation.navigate('Destination')}
                style={styles.button}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    map: {
        width: '100%',
        height: '93%',
    },

});
export default Pickup