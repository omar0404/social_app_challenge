import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/reducers/store';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './src/navigation';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <HomeNavigation />
          <Toast />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
