import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World!</Text>
      </View>
      <Text>Hello Again!</Text>
      <Button title='click me' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
