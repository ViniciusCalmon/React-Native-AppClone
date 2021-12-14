// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../context/authContext';


const DATA = [
    {

        id: '1',
        imagem: require('../../assets/amigo1.png'),
        title: 'FiberflyCOMP',
        status: 'Icarus',
    },

    {
        id: '2',
        imagem: require('../../assets/amigo2.png'),
        title: 'MEGA',
        status: 'Dragon Age Inquisition',
    },

    {
        id: '3',
        imagem: require('../../assets/amigo3.png'),
        title: 'Zapdos',
        status: 'PUBG: BATTLEGROUNDS',
    },

    {
        id: '4',
        imagem: require('../../assets/amigo4.png'),
        title: 'Chuck',
        status: 'Disponível',
    },

    {
        id: '5',
        imagem: require('../../assets/amigo5.png'),
        title: 'czaR',
        status: 'Disponível',
    },

    {
        id: '6',
        imagem: require('../../assets/amigo6.png'),
        title: 'gameouverbrazil',
        status: 'Disponível',
    },

    {
        id: '7',
        imagem: require('../../assets/amigo7.png'),
        title: 'Gezin',
        status: 'Disponível',
    },

    {
        id: '8',
        imagem: require('../../assets/amigo8.png'),
        title: 'Giovani_Miguel',
        status: 'Disponível',
    },

    {
        id: '9',
        imagem: require('../../assets/amigo9.png'),
        title: 'jubz',
        status: 'Disponível',
    },

    {
        id: '10',
        imagem: require('../../assets/amigo10.png'),
        title: 'Kayden',
        status: 'Disponível',
    },

    {
        id: '11',
        imagem: require('../../assets/amigo11.png'),
        title: 'Leonardo Fonseca',
        status: 'Disponível',
    },

    {
        id: '12',
        imagem: require('../../assets/amigo12.png'),
        title: 'Lokitto',
        status: 'Disponível',
    },

    {
        id: '13',
        imagem: require('../../assets/amigo13.png'),
        title: 'Luizera',
        status: 'Disponível',
    },

    {
        id: '14',
        imagem: require('../../assets/amigo14.png'),
        title: 'Mark',
        status: 'Disponível',
    },

];


export const Home = ({navigation}) => {

    const {signOut} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <RadialGradient 
                        colors={['#708090','#000F18']}
                        stops={[0.000000000001,1.0]}
                        center={[200,0]}
                        radius={90}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.icone} onPress={()=>{
                    Alert.alert('Em manutenção, favor voltar no projeto final')
                    signOut()
                    }}>
                    <Icon name="menu" color='white' size={40}/>
                </TouchableOpacity>
                
                <Text 
                style={{fontSize: 15,
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: 'white',
                fontFamily:'Motiva Sans'}}>Amigos
                </Text>
                
            </View>
            

        </RadialGradient>

        <View style={{height:55, alignItems: 'center'}}>
            <Image
                source={require('../../assets/amigos.jpg')}
                style={{width:'150%', height:'85%', alignSelf: 'center'}}
                resizeMode='contain'
            />
        </View>
        
        <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
           <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: '5%'}}>
               <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                    <Image source={item.imagem} width={50} height={50} resizeMode='contain'/>
                </View>
                <View style={{display:'flex', flexDirection:'column', paddingLeft:'3%'}}>
                {item.status !=='Disponível'?<Text style={{color:'#90ba3c'}}>{item.title}</Text> 
                    : <Text style={{color:'#57cbde'}}>{item.title}</Text>}

                    {item.status !=='Disponível'?<Text style={{color:'#90ba3c'}}>{item.status}</Text> 
                    : <Text style={{color:'#57cbde'}}>{item.status}</Text>}
                </View>
                </View>
                <Icon name="chatbox-outline" color='white' size={30} style={{marginRight:0}}/>
            </View>
        )}
          
        />
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101214',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40
    },
    icone:{
        marginLeft:0,
        marginRight: '35%'
    }

});

