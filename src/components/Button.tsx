import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { Flex, VStack } from "react-native-flex-layout"

interface ButtonProps {
  onPress: () => void
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

  return (
    <VStack fill>
      <Flex>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            padding: 16,
            backgroundColor: "#000"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffff",
              fontWeight: "bold"
            }}
          >
            Button
          </Text>
        </TouchableOpacity>
      </Flex>

    </VStack>
  )
}