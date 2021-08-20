import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        'https://newsapi.org/v2/everything?q=españa&pageSize=10&from=2021-08-19&sortBy=popularity&apiKey=bd6c74c749ad4944832a59434b8fb4a0'
      );
      setStorage(resp.data.articles);
      setNews(resp.data.articles);
    } catch (error) {
      const jsonValue = await AsyncStorage.getItem('news');
      if (jsonValue) {
        setNews(JSON.parse(jsonValue));
      } else {
        Alert.alert(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const setStorage = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('news', jsonValue);
    } catch (error) {
      Alert.alert(error);
    }
  };

  useEffect(() => {
    if (!news) {
      fetchNews();
    }
    return () => {
      setNews(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <InfoContext.Provider value={{ news, loading }}>{children}</InfoContext.Provider>;
};
