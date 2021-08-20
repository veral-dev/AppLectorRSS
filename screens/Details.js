import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, Text, StyleSheet, Image, Linking, View } from 'react-native';
import InfoContext from '../context/InfoProvider/InfoContext';

// Ui & Styles
import Space from '../components/Space';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { general } from '../styles/GeneralStyles';

export default function Details({ route }) {
  const { news, loading } = useContext(InfoContext);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const newsFiltered = news.find((elm) => (elm.title = route.params));
    setDetails(newsFiltered);

    return () => {
      setDetails(null);
    };
  }, [news, route.params]);

  const openURL = async (url) => {
    await Linking.openURL(url);
  };

  return (
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Text style={[general.h1]}>{details && details.title}</Text>
          <Space size={30} />
          {details && details.urlToImage && (
            <Image
              style={[styles.imgDetail]}
              source={{
                uri: details.urlToImage
              }}
            />
          )}
          <Space />

          <Text style={[general.p]}>{details && details.description}</Text>
          <Space size={50} />

          <Button text="Ver en el navegador" bgColor="#4630EB" onPress={() => openURL(details.url)} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgDetail: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
    marginBottom: 10
  }
});
