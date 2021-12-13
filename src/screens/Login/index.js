import React, {useState, useContext} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import AuthContext from '../../context/authContext';
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient';




export const Login = () => {

    const {signIn} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
  
       <View style={styles.container}>
   
        <RadialGradient 
                        colors={['#708090','#000F18']}
                        stops={[0.000000000001,1.0]}
                        center={[200,0]}
                        radius={90}>
            <View style={styles.header}>
                <Text 
                style={{fontSize: 15,
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: 'white',
                fontFamily:'Motiva Sans'}}>Iniciar Sessão
                </Text>
            </View>
        </RadialGradient>

        <ScrollView >
    
        <View style={{width:'100%', height:55, backgroundColor:'#171a21', alignItems: 'center'}}>
            <Image
                source={require('../../components/header.png')}
                style={{width:'65%', height:'65%', alignSelf: 'center', marginTop: 10}}
                resizeMode='contain'
            />
        </View>



        <View style={styles.containerLogin}>
                <Text 
                style={{
                    color:'white', 
                    padding: 35, 
                    fontSize: 34, 
                    fontFamily:'Motiva Sans'}}>INICIAR SESSÃO
                </Text>
       
            <View style={{width:'80%', justifyContent:'flex-start'}}>
                <Text style={{color:'grey', marginBottom: 7, fontFamily:'Motiva Sans'}}>Nome de usuário Steam</Text>
                <TextInput style={{
                    backgroundColor:'#32353C',
                    width:'100%',
                    borderRadius: 3,
                  
                    }}
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    />
                <Text style={{color:'grey', marginBottom: 7, marginTop:15, fontFamily:'Motiva Sans'}}>Senha</Text>
                <TextInput style={{
                    backgroundColor:'#32353C',
                    width:'100%',
                    borderRadius: 3,
                    marginBottom:20
                    }}
                    placeholder="password"
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                    value={password}
                    />
                
                <TouchableOpacity style={{width:'80%', alignSelf: 'center',  borderRadius: 3}} onPress={() => signIn(email, password)}>
                    <LinearGradient colors={['#1a44c2','#47bfff','#1a44c2']} start={{x: 1, y:0}} end={{x:0, y:1}}>
                        <Text style={{color:'white', textAlign:'center', fontWeight: 'bold', fontFamily:'Motiva Sans', padding:8}}>Iniciar sessão</Text>
                    </LinearGradient>
                    
               </TouchableOpacity>
               <TouchableOpacity style={{marginTop:'5%'}}><Text style={{color: 'white', alignSelf: 'center', fontFamily:'Motiva Sans'}}>Esqueceu a sua senha?</Text></TouchableOpacity>
     
        </View>
       
            </View> 
             
            <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Text style={{marginTop:10, textAlign:'center', textAlignVertical:'center', color: 'grey', fontFamily:'Motiva Sans'}}>
                    Cadastre-se no Steam e descubra{'\n'} milhares de jogos para jogar.
                 </Text>
                   <TouchableOpacity><Text style={{color: 'white', marginTop: 7, alignSelf: 'center',marginBottom:'5%', fontFamily:'Motiva Sans'}}>Saiba mais</Text></TouchableOpacity>
                  <View style={{display:'flex', alignItems: 'center'}}>
                   <Image
                  source={require('../../components/whey.png')}
                  resizeMethod='scale'
                  style={{backgroundColor: 'pink', alignSelf: 'center'}}
                  />
                  </View>
               
            </View>

        
           
            
            <Text style={{color:'grey', alignSelf: 'center', fontFamily:'Motiva Sans'}}>É gratuito e fácil de usar.</Text>
            <TouchableOpacity style ={{color: '#212429', borderWidth:1 ,borderColor:'grey', marginTop:'5%', marginBottom:'25%', alignSelf:'center'}}><Text style={{fontFamily:'Motiva Sans', color:'white', paddingTop:'1%', paddingBottom: '1%', paddingLeft: '4%', paddingRight: '4%'}}>Cadastre-se</Text></TouchableOpacity>
        
        </ScrollView>
     </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212429',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40
    },
    containerLogin:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      marginBottom: '30%'
   
    }
});