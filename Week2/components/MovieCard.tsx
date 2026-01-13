import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Movie = {
  title: string;
  year: number;
  genre: string;
  rating: number;
};

type MovieCardProps = {
  movie: Movie;
};


export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <View style={[styles.container, movie.rating >= 8 && styles.highlight]}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.year}</Text>
      <Text style={styles.text}>{movie.genre}</Text>
      <Text style={styles.text}>{movie.rating}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a29f9fff",
    width: "95%",
    borderRadius: 10,
    padding: 15
  },
  title: {
    fontWeight:"bold",
    textAlign: "center",
    fontSize: 18
  },
  text: {
    textAlign: "center"
  },
  highlight: {
    backgroundColor: "#66d069c6"
  }


})