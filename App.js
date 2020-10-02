import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {

  Profile
} from './Screens/profile';

const App = () => {
  return (
    <>
    <View>

      <Profile id = "betta"></Profile>
       
    </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
