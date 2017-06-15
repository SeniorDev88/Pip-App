import React from "react";
import { StackNavigation } from "../components/ex-navigation";
import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import { scaleByVertical } from '../constants/Layout';

export default function HomeScreen() {
  return (
    <StackNavigation
      initialRoute="feed"
      defaultRouteConfig={{
        navigationBar: {
          backgroundColor: '#00EBC2',
          tintColor: '#fff',
          borderBottomWidth: 0,
          titleStyle: {
            fontSize: scaleByVertical(26),
            fontFamily: 'Avenir-Black',
            fontWeight: '900',
            textAlign: 'center'
          },
          renderLeft: ({ routeName }) => <NavBarLeft routeName={routeName} />,
          renderRight: ({ routeName }) => <NavBarRight routeName={routeName} />,
        }
      }}
    />
  );
}
