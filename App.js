import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Count: {count}</Text>
          <TouchableOpacity
            onPress={() => setCount((c) => c + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>Press me</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'coral',
    fontSize: 40,
  },
  button: {
    backgroundColor: 'coral',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
