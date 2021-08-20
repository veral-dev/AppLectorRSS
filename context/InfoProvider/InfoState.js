import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { FETCH_NEWS, SHOW_LOADING, HIDE_LOADING } from '../types';
import InfoContext from './InfoContext';
import InfoReducer from './InfoReducer';

export default function InfoProvider({ children }) {
  const initialState = {
    news: null,
    loading: false
  };
  const [state, dispatch] = useReducer(InfoReducer, initialState);
  const fetchNews = async () => {
    try {
      dispatch({
        type: SHOW_LOADING
      });
      const resp = await axios.get(
        'https://newsapi.org/v2/everything?q=españa&pageSize=10&from=2021-08-19&sortBy=popularity&apiKey=bd6c74c749ad4944832a59434b8fb4a0'
      );
      setStorage(resp.data.articles);
      dispatch({
        type: FETCH_NEWS,
        payload: resp.data.articles
      });
    } catch (error) {
      const jsonValue = await AsyncStorage.getItem('news');
      if (jsonValue) {
        dispatch({
          type: FETCH_NEWS,
          payload: JSON.parse(jsonValue)
        });
      } else {
        Alert.alert(error);
      }
    } finally {
      dispatch({
        type: HIDE_LOADING
      });
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
    if (!state.news) {
      fetchNews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <InfoContext.Provider value={{ news: state.news, loading: state.loading }}>{children}</InfoContext.Provider>;
}
