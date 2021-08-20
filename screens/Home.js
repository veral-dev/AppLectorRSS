import React, { useContext, useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import InfoContext from '../context/InfoProvider/InfoContext';

// Ui & Styles
import Button from '../components/ui/Button';
import Space from '../components/ui/Space';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
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
            <Space size={10} />
            <Text style={[general.p]}>Ver todos</Text>
          </TouchableOpacity>
          <Card data={newsList} onPress={(title) => navigation.navigate('Details', title)} />
        </View>
      )}
    </SafeAreaView>
  );
}
