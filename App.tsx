import React from 'react';
import { VStack } from 'react-native-flex-layout';
import Home from './src/screens/Home';

export default function App() {
  return (
    <VStack fill bg="#fff">
      <Home />
    </VStack>
  );
}

