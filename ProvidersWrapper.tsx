import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export default function ProvidersWrapper({children}) {
  // const navigationRef = useNavigationContainerRef();
  const routeNameRef = React.useRef();
  const [initialState, setInitialState] = React.useState();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} initialState={initialState}>
        {children}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
