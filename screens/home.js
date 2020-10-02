import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import royalTree from '../Resources/royaltree-temp.json';

const keys = [];

export const Home = () => {

    const GetRoyalTree  = () =>{
        
        var elizabeth = 
        <View>
            <Image
                style = {styles.imageTree}
                source = {{
                    uri : royalTree.reali["1"].stemma
                }}
            />
            <Text style={{textAlign:"center"}}>
                {royalTree.reali["1"].name}

            </Text>
        </View>
        generateKeys("1",1);

        var generations = new Array(royalTree.height);

        for(i=0;i<royalTree.height;i++){
            for(j=0;j<keys.length;j++){
                if(keys[j].length === i + 1){

                }
            }
        }

        console.log(keys);
  
        return elizabeth;
    }   

    const generateKeys = (key,num) => {

        keyTemp = key + num.toString();
        
        if(num === 1 && !royalTree.reali.hasOwnProperty(keyTemp)) return;
        if(!royalTree.reali.hasOwnProperty(keyTemp)) return;
        keys.push(keyTemp);      
        generateKeys(keyTemp, 1);
        generateKeys(key, num + 1); 
                    
    }

    return(
        <>
        <View >
            {GetRoyalTree()}           
        </View>
        </>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex : 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageTree: {
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: "center"
        },
    }
)