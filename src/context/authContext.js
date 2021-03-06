import React, {createContext, useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await AsyncStorage.getItem('@token');
      if(storageToken) {
        setSigned(true)
      }
    }
    
    loadStorageData();
  }, []);

  function signIn(email, password){
    if(email === "viniciuscalmon" && password === "1234") {
      const token = "uhasBaiwsdiu8Abk"
      setSigned(true)
      AsyncStorage.setItem('@token', token);

    } else {
      Alert.alert("Email ou senha incorretos");
    }
  }

  function signOut(){

  AsyncStorage.clear().then(() => {
        setSigned(false)
      });

  }
  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  );

  
};

export default AuthContext;