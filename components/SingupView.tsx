import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { useFonts } from 'expo-font';
const SignupView = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shadow1, setShadow1] = useState(false);
  const [shadow2, setShadow2] = useState(false);
  const [shadow4, setShadow4] = useState(false);
  const [shadow3, setShadow3] = useState(false);
  


  return (
    <ImageBackground 
        source={require('../assets/images/girl.png')} 
        style={[styles.container, styles.backgroundImage]}>
       <View  style={styles.topArrow}>
        <Icon name="arrow-left" size={20} color="black" style={styles.iconArrow} />
      </View>

      <View style={styles.titlecontainer}>
       <Text style={styles.title}>Create Account</Text>
      </View>

     
      <View  style={styles.inputfield}>
        <Icon name="user" size={20} color="#888" style={styles.icon} />
      <TextInput
          style={[styles.input, shadow1 && styles.input2]}
          placeholder="FULL NAME"
          placeholderTextColor="darkgrey"
          value={fullName}
          onChangeText={setFullName}
          onFocus={() => setShadow1(true)} 
          onBlur={() => setShadow1(false)} 
        />

      
      
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
    </View>

    <View style={styles.inputfield}>
      {/* <Text style={styles.label}>Confirm Password</Text> */}
      <Icon name="lock" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={[styles.input, shadow4 && styles.input2]}
        placeholder="CONFIRM PASSWORD"
        placeholderTextColor="darkgrey"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        onFocus={() => setShadow4(true)} 
        onBlur={() => setShadow4(false)}
      />
    </View>

    
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign Up</Text>
        <Icon name="arrow-right" size={20} color="#888" style={styles.rightarrow} />
      </TouchableOpacity>
      

      <TouchableOpacity >
        <Text style={styles.linkText}>Already have an account? 
        <Text style={styles.signInText}> Sign in</Text>
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
    marginTop: 8,
    marginBottom: 10,
  },
  signInText: {
    color: '#B3A0D1',
    fontWeight: 'bold',
  },
});

export default SignupView;