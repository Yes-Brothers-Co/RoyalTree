import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';


import data from '../Resources/royaltree.json';


const Slider = ({id}) => {

    return(

        <View>
            <Image
                style = {styles.profileIcon}
                source  = {

                    {uri:data.reali[id].stemma}
                }
                
            >   
            </Image>
            <Text> {data.reali[id].birthday} </Text>
        </View>
            
    );
        
}
export const Profile = ({id}) => {

    return(

        <View style = {styles.container}>
            <Slider id = {id}></Slider>
            <ScrollView style = {styles.view}>
                <Text style = {styles.name}> {data.reali[id].name}</Text>
                <Text style = {styles.resume}> {data.reali[id].resume} </Text>
            </ScrollView> 
        </View>
                   
        
    );
}


 const styles = StyleSheet.create({

    name:{
        fontSize: 45,
        textAlign: 'center',
        color : '#F2B950',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        marginLeft: 20,
        marginRight: 20,

    },
    resume:{

        fontSize: 30,
        textAlign: 'center',
        color: '#F2B950',
        
    },
    view:{

        backgroundColor: '#8C5320',
    
    },
    container:{

        flexDirection: 'row',

    },
    profileIcon:{

        width: 150,
        height: 150,

    }

 })

    

        
    

