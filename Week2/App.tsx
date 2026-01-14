import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import MoveTheBall from './components/MoveTheBall';
import Geolocation from './components/Geolocation';
import DeviceInfo from './components/DeviceInfo';

const movie1= { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 }
const movie2= { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 7 }


export default function App() {
  return (
    // <View style={styles.container}>
    //   <MovieCard movie={movie1}/>
    //   <MovieCard movie={movie2}/>
    //   <StatusBar style="auto" />
    // </View>
    // <MoveTheBall />
    // <Geolocation />
    <DeviceInfo/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
