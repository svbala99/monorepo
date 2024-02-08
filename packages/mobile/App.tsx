import {Text, View} from 'react-native';
import React from 'react';
import {SharedButton} from 'shared';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Hello world'}</Text>
      <SharedButton onPress={()=>alert('button click handled from Mobile repo')}/>
    </View>
  );
};

export default App;
