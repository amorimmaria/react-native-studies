import React from "react"
import { TextInput } from 'react-native'
import { VStack } from "react-native-flex-layout"

interface SearchProps {
  onChangeText: (text: string) => void
}

export const Search: React.FC<SearchProps> = (props: SearchProps ) => {
  return (
    <VStack fill>
      <TextInput
        style={{
          borderWidth: 1.5,
          borderRadius: 8,
          padding: 16,

        }}
        placeholder="Buscar usuário"
        onChangeText={props.onChangeText}
      />
    </VStack>
  )
}