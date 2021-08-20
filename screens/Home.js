import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import InfoContext from '../context/InfoProvider/InfoContext';
import Button from '../components/Button';
import Space from '../components/Space';

// Ui & Styles
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { general } from '../styles/GeneralStyles';

export default function Home({ navigation }) {
  const { news, loading } = useContext(InfoContext);
  const [searchWord, setSearchWord] = useState('');

  const [newsList, setNewsList] = useState(null);
  useEffect(() => {
    if (news) {
      setNewsList(news);
    }
  }, [news]);

  const search = () => {
    const newsCopy = [...news];
    const newsFiltered = newsCopy.filter((item) => item.title.toLowerCase().includes(searchWord.toLowerCase()));
    setNewsList(newsFiltered);
  };

  const setAll = () => {
    setSearchWord('');
    setNewsList(news);
  };

  return (
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      <Text style={[general.h1]}>App Lector RSS</Text>
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Space size={20} />
          <View style={[general.inputContainer]}>
            <TextInput style={[general.input]} onChangeText={(e) => setSearchWord(e)} value={searchWord} placeholder="Buscar" />
            <Button text=">" bgColor="#4630EB" onPress={() => search()} />
          </View>
          <TouchableOpacity onPress={() => setAll()}>
            <Text style={[general.p]}>Ver todos</Text>
          </TouchableOpacity>
          <Card data={newsList} onPress={(title) => navigation.navigate('Details', title)} />
        </View>
      )}
    </SafeAreaView>
  );
}
