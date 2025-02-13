import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { useFonts } from 'expo-font';
const SigninView= () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shadow2, setShadow2] = useState(false);
  const [shadow3, setShadow3] = useState(false);
  
  

  return (
    <ImageBackground 
        source={require('../assets/images/girl.png')} 
        style={[styles.container, styles.backgroundImage]}
        >
       <View  style={styles.topArrow}>
        <Icon name="arrow-left" size={20} color="black" style={styles.iconArrow} />
      </View>

      <View style={styles.titlecontainer}>
       <Text style={styles.title}>Login</Text>
       <Text style={styles.subtitle}>Please signin to continue!</Text>
      </View>

      
      
    <View  style={styles.inputfield}>
          {/* <Text style={styles.label}>Email</Text> */}
          <Icon name="envelope" size={20} color="#888" style={styles.iconArrow} />
          <TextInput
            style={[styles.input, shadow2 && styles.input2]}
            placeholder="EMAIL"
            placeholderTextColor="darkgrey"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onFocus={() => setShadow2(true)} 
            onBlur={() => setShadow2(false)} 
          />
    </View>

    <View style={styles.inputfield}>
      <Icon name="lock" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={[styles.input, shadow3 && styles.input2]}
        placeholder="Password"
        placeholderTextColor="darkgrey"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setShadow3(true)} 
        onBlur={() => setShadow3(false)} 
      />
      <Text style={styles.forget}>FORGOT</Text>
    
    </View>

   

    
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign in</Text>
        <Icon name="arrow-right" size={20} color="#888" style={styles.rightarrow} />
      </TouchableOpacity>
      

      <TouchableOpacity >
        <Text style={styles.linkText}>Don't have an account? 
        <Text style={styles.signInText}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    fontFamily:"Montserrat",

  },
  backgroundImage: {
    borderRadius: 40,  
    overflow: 'hidden', 
  },
  topArrow:{
    position: 'absolute',
    top: 50,
    left: 6,
    zIndex: 1,

  },
  titlecontainer: {
    marginBottom: 20,
    marginTop: 80,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    // alignContent: 'center',
    textAlign: 'left',
    marginBottom: 25,
    color: '#333',
  },
  subtitle:{
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 10,
  },
  input: {
    height: 50,
    fontSize: 13,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingLeft: 35,
    width: '100%', 
    // paddingHorizontal: 8,
    backgroundColor: '#fff',
    // For iOS shadow
    
  },
  input2: {
    // Add shadow when focused or text is being typed
    shadowColor: 'gray',            
    shadowOffset: { width: 0, height: 9 },  
    shadowOpacity: 0.85,            
    shadowRadius: 2.5,  
  },
  inputfield: {
    flexDirection: 'row',
   
    alignItems: 'center',
    marginBottom: 20,
  },
  iconArrow: {
    position: 'absolute',
    left: 10, 
    top: '50%',
    transform: [{ translateY: -20 }], 
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    left: 10, 
    top: '50%',
    transform: [{ translateY: -20 }], 
    zIndex: 1,
  },
  forget: {
    position: 'absolute',
    right: 10, 
    bottom: 35,
   
    fontSize: 8,
    color: '#B3A0D1',
  
  },
  
  button: {
    backgroundColor: '#B3A0D1',
    flexDirection: 'row',
    width: '40%',
    height: 50,
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // paddingRight: 12,
    borderRadius: 10,
    alignItems: 'center',
    // flexDirection: 'row', 
    marginTop: 20, 
    marginBottom: 246,
    alignSelf: 'flex-end',
  },
  rightarrow: {
    position: 'absolute',
    color: 'green',
    right: 10, 
    top: '50%',
    transform: [{ translateY: -10 }],
    
    
  },
  buttonText: {
    color: 'green',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,

  },
  signInText: {
    color: '#B3A0D1',
    fontWeight: 'bold',
  },
});

export default SigninView;