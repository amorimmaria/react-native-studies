import React, { useState } from 'react'
import { Text } from 'react-native'
import { HStack, VStack } from 'react-native-flex-layout'
import { AntDesign } from '@expo/vector-icons';
import { Search } from '../components/Search';
import { Button } from '../components/Button';
import { getGitHubUser } from '../repository/userRepository';

const Home = () => {
  
  const [user, setUser] = useState('')

  async function OnSubmit() {

    const response = await getGitHubUser(user)
    console.log(response)
    
  }

  return (
    <VStack fill p={24} bg="#fff">
      <VStack center fill  ph={24}>
        <Text
          style={{
            fontSize: 28,
            padding: 24,
            fontWeight: 'bold'
          }}
        >
          Project API GitHub
        </Text>
        <AntDesign style={{marginTop: 30}} name="github" size={80} color="black" />
      </VStack>
      <HStack fill>
        <Search onChangeText={(text) => {setUser(text)}} />
      </HStack>
      <HStack >
        <Button onPress={OnSubmit}/>
      </HStack>
    </VStack>
  )
}

export default Home