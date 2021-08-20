import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InfoState from '../context/InfoProvider/InfoState';

import AppStack from './AppStack';

export default function Routes() {
  return (
    <InfoState>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </InfoState>
  );
}
