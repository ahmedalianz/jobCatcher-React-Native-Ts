import React from 'react';

import ProvidersWrapper from './ProvidersWrapper';
import {COLORS, icons} from './src/constants';
import {Home, JobSearch, JobDetails} from './src/screens';
import {ScreenHeaderBtn} from './src/components';
import {SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/navigation';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ProvidersWrapper>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="medium"
                onPress={() => {}}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.profile}
                dimension="max"
                onPress={() => {}}
              />
            ),
            headerTitle: '',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: () => (
                <ScreenHeaderBtn
                  iconUrl={icons.menu}
                  dimension="medium"
                  onPress={() => {}}
                />
              ),
              headerRight: () => (
                <ScreenHeaderBtn
                  iconUrl={icons.profile}
                  dimension="max"
                  onPress={() => {}}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Search"
            component={JobSearch}
            options={{
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.left} dimension="medium" />
              ),
            }}
          />
          <Stack.Screen
            name="JobDetails"
            component={JobDetails}
            options={{
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.left} dimension="medium" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.share} dimension="medium" />
              ),
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </ProvidersWrapper>
  );
};

export default App;
