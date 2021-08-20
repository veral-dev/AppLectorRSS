import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, FlatList } from 'react-native';

const CardSection = ({ item, onPress }) => {
  const { title, description, urlToImage } = item;

  return (
    <View style={styles.card}>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => onPress(title)}>
        <View>
          {urlToImage && (
            <Image
              style={styles.image}
              source={{
                uri: urlToImage
              }}
            />
          )}

          <Text style={[styles.title]}>{title}</Text>
          <Text style={[styles.description]}>{description.substring(0, 120)}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default function Card({ data, onPress }) {
  return (
    <FlatList
      style={[styles.list]}
      data={data}
      renderItem={({ item }) => <CardSection item={item} onPress={onPress} />}
      keyExtractor={(item, idx) => idx}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  list: {
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    maxWidth: '100%',
    fontSize: 18,
    fontWeight: '900'
  },
  description: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '400'
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 80,
    marginBottom: 2
  }
});
