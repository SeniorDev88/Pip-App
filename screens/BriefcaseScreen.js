import React from "react";
import { StackNavigation } from "@exponent/ex-navigation";
import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import { scaleByVertical } from '../constants/Layout';

export default function BriefcaseScreen() {
  return (
    <StackNavigation
      initialRoute="overview"
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
