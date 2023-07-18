import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';



export default function App() {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('0');
  //const [fontsLoaded, setFontsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({ 'ShareTechMono-Regular': require('./assets/ShareTechMono-Regular.ttf'), });
 
  if (!fontsLoaded) {
    return null; // Or render a loading indicator
  }




  // button pressed - calculate
  const buttonPressed = (e,calc) => {
    if (calc === '+') setResult(parseInt(number1) + parseInt(number2)+"");
    else if (calc === '-') setResult(parseInt(number1) - parseInt(number2)+"");
    else if (calc === '/') setResult(parseInt(number1) / parseInt(number2)+"");
    else if (calc === '*') setResult(parseInt(number1) * parseInt(number2)+"");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
      <Text style={styles.calculator}>Calculator</Text>

      <View style={styles.row}>
        <View style={styles.resultInput}>
          <TextInput placeholder="0" value={result} style={{textAlign:'right', color:'orange', fontFamily: 'ShareTechMono-Regular', fontSize:18, outline: "none"}} editable={false}></TextInput>
        </View>
      </View>
      

      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 1:</Text>
        </View>

        <View style={styles.textInput}>
          <TextInput value={number1}
          onChangeText={text => setNumber1(text)}
          style={{textAlign:'right', outline: "none"}}
          keyboardType={'numeric'} ></TextInput>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 2:</Text>
        </View>

        <View style={styles.textInput}>
          <TextInput value={number2}
          onChangeText={text => setNumber2(text)}
          style={{textAlign:'right' , outline: "none"}}
          keyboardType={'numeric'} ></TextInput>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={(e) => buttonPressed(e, '+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={(e) => buttonPressed(e, '-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={(e) => buttonPressed(e, '*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={(e) => buttonPressed(e, '/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    borderWidth: 0,
    borderColor: 'black',
    shadowColor: 'grey',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(#e1e1e1, #a3a3a3)',
    borderRadius: 10,
    padding: 30,
  },
  calculator: {
    fontSize: 50,
    fontFamily: 'ShareTechMono-Regular',
    textAlign: 'center',
    color: 'transparent',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    backgroundColor: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(147deg, #05d1e8 12%, #028bfa 84%)',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 5
    },
  text: {
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '2px 0 10px #2196f3',
    color: '#333',
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    width: 100,
    },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    border: 'none',
    borderColor: 'transparent',
    boxShadow: '2px 0 10px #2196f3',
    //color: '#333',
    justifyContent: 'center',
    padding: 5,
    //borderBottomWidth: 1.0,
    width: 100,
    marginLeft: 5,
    },
    resultInput: {
      justifyContent: 'center',
      padding: 5,
      border: '1px solid green',
      backgroundColor: '#166d3b',
      backgroundImage: 'linear-gradient(147deg, #166d3b 0%, #000000 74%)',
      borderRadius: 10,
      width: 250,
      marginBottom: 20,
      fontFamily: 'ShareTechMono-Regular',
      fontSize: 18,
      color: 'white',
      outline: "none",
    },
    resultText: {
      fontSize: 18,
      color: 'white',
      fontFamily: 'ShareTechMono-Regular',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 20,
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: '#f2f2f2',
      borderRadius: 20,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '2px 0 10px #2196f3',
    },
    buttonText: {
      fontSize: 20,
      color: '#333',
    },
});
