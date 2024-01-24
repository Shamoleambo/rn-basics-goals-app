import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='insert goals' />
        <Button title='Add' />
      </View>
      <View>
        <Text>...The goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
})
