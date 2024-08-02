import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { accelerometer } from 'react-native-sensors';
import { map } from 'rxjs/operators';

const Screen2 = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null, altitude: null, speed: null });
  const [orientation, setOrientation] = useState({ x: null, y: null, z: null });

  useEffect(() => {
    const requestLocationPermissions = async () => {
      try {
        if (Platform.OS === 'android') {
          const foregroundLocation = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ]);

          if (
            foregroundLocation['android.permission.ACCESS_FINE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED ||
            foregroundLocation['android.permission.ACCESS_COARSE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('Foreground location permissions denied');
            return; 
          }

          
          if (Platform.Version >= 29) {
            const backgroundLocation = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
            );

            if (backgroundLocation !== PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Background location permission denied');
              return; 
            }
          }

          console.log('Location permissions granted');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermissions();

    const locationInterval = setInterval(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, altitude, speed } = position.coords;
          setLocation({ latitude, longitude, altitude, speed });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }, 10000);

    const orientationSubscription = accelerometer
      .pipe(map(({ x, y, z }) => ({ x, y, z })))
      .subscribe(
        setOrientation,
        (error) => {
          console.log('Error with accelerometer:', error);
        }
      );

    return () => {
      clearInterval(locationInterval);
      orientationSubscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location:</Text>
      <Text>Latitude: {location.latitude ?? 'N/A'}</Text>
      <Text>Longitude: {location.longitude ?? 'N/A'}</Text>
      <Text>Altitude: {location.altitude ?? 'N/A'}</Text>
      <Text>Speed: {location.speed ?? 'N/A'}</Text>
      <Text style={styles.title}>Orientation:</Text>
      <Text>X: {orientation.x ?? 'N/A'}</Text>
      <Text>Y: {orientation.y ?? 'N/A'}</Text>
      <Text>Z: {orientation.z ?? 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Screen2;
