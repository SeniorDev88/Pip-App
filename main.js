import Exponent from "exponent";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";

import * as firebase from "firebase";
import {
  NavigationProvider,
  StackNavigation
} from "./components/ex-navigation";
import Router from "./navigation/Router";
import { scale, scaleByVertical } from './constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "rgba(0,0,0,0.0)"
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyAGUriT9rmXUCPi99dU1TjKuKZsxTNLplI",
  authDomain: "exponenttest-20794.firebaseapp.com",
  databaseURL: "https://exponenttest-20794.firebaseio.com",
  storageBucket: "exponenttest-20794.appspot.com"
};
firebase.initializeApp(firebaseConfig);

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Exponent.Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Exponent.Font.loadAsync(font));
}

class AppContainer extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("./assets/images/Briefcase/Pips.png"),
      require("./assets/images/DealDetail/icon-expand.png"),
      require("./assets/images/DealDetail/icon-funding.png"),
      require("./assets/images/DealDetail/icon-growth.png"),
      require("./assets/images/DealDetail/icon-growth.png"),
      require("./assets/images/DealDetail/icon-hq.png"),
      require("./assets/images/DealDetail/icon-industry.png"),
      require("./assets/images/DealDetail/icon-linkweb.png"),
      require("./assets/images/DealDetail/icon-model.png"),
      require("./assets/images/DealDetail/icon-overview.png"),
      require("./assets/images/DealDetail/icon-revenuestream.png"),
      require("./assets/images/DealDetail/icon-rocket.png"),
      require("./assets/images/DealDetail/icon-target.png"),
      require("./assets/images/DealDetail/icon-teamsize.png"),
      require("./assets/images/DealDetail/icon-time.png"),
      require("./assets/images/DealDetail/location-pin.png"),
      require("./assets/images/Home/AticleImg.png"),
      require("./assets/images/Home/icon-cup.png"),
      require("./assets/images/InvestorType/icon_ok.png"),
      require("./assets/images/InvestorType/invest_advise.png"),
      require("./assets/images/InvestorType/invest_everyday.png"),
      require("./assets/images/InvestorType/invest_highnet.png"),
      require("./assets/images/InvestorType/invest_self.png"),
      require("./assets/images/NewsFeed/back-arrow.png"),
      require("./assets/images/NewsFeed/fourth-image.png"),
      require("./assets/images/NewsFeed/icon-bookmark.png"),
      require("./assets/images/NewsFeed/main-article-img.png"),
      require("./assets/images/NewsFeed/NewsEmptyScreen.png"),
      require("./assets/images/NewsFeed/third-image.png"),
      require("./assets/images/NewsFeed/UKCF-logo.png"),
      require("./assets/images/Profile/ICON_Info.png"),
      require("./assets/images/Profile/ICON_View.png"),
      require("./assets/images/Profile/icon-accept.png"),
      require("./assets/images/Profile/icon-edit.png"),
      require("./assets/images/svg/icon-add.svg"),
      require("./assets/images/svg/icon-arrowBottom.svg"),
      require("./assets/images/svg/icon-arrowTop.svg"),
      require("./assets/images/svg/icon-briefcase.svg"),
      require("./assets/images/svg/icon-cup.svg"),
      require("./assets/images/svg/icon-exit.svg"),
      require("./assets/images/svg/icon-expand.svg"),
      require("./assets/images/svg/icon-filter.svg"),
      require("./assets/images/svg/icon-home.svg"),
      require("./assets/images/svg/icon-info.svg"),
      require("./assets/images/svg/icon-internals.svg"),
      require("./assets/images/svg/icon-market.svg"),
      require("./assets/images/svg/icon-media.svg"),
      require("./assets/images/svg/icon-news.svg"),
      require("./assets/images/svg/icon-overview.svg"),
      require("./assets/images/svg/icon-people.svg"),
      require("./assets/images/svg/icon-profile.svg"),
      require("./assets/images/svg/icon-www.svg"),
      require("./assets/images/exponent-wordmark.png"),
      require("./assets/images/icon-empty.png"),

      require("./assets/images/exponent-wordmark.png"),
      require('./assets/images/NewsFeed/main-article-img.png'),
      require('./assets/images/Onboarding/Pip.png'),
      require('./assets/images/Onboarding/Pip_logo.png'),
      require('./assets/images/Facebook.png'),
      require('./assets/images/GooglePlus.png'),
      require('./assets/images/InvestorType/icon_ok.png'),
      require('./assets/images/Onboarding/arrow_right.png'),
      require('./assets/images/Onboarding/Build.png'),
      require('./assets/images/Onboarding/Discover.png'),
      require('./assets/images/Onboarding/Grow.png'),
      require('./assets/images/Onboarding/ico_tick.png'),
      require('./assets/images/Onboarding/icon-avocado.png'),
      require('./assets/images/Onboarding/icon-cherries.png'),
      require('./assets/images/Onboarding/icon-fruit-bowl.png'),
      require('./assets/images/InvestorType/invest_everyday.png'),
      require('./assets/images/InvestorType/invest_self.png'),
      require('./assets/images/InvestorType/invest_advise.png'),
      require('./assets/images/InvestorType/invest_highnet.png'),
      require('./assets/images/tmp/Placeholder.png'),
      require('./assets/images/tmp/39362308_title.jpg'),
      require('./assets/images/NewsFeed/back-arrow.png'),
      require('./assets/images/NewsFeed/icon-bookmark.png'),
      require('./assets/images/additional_material/icon-home-active.png'),
      require('./assets/images/additional_material/icon-home-inactive.png'),
      require('./assets/images/additional_material/icon-briefcase-active.png'),
      require('./assets/images/additional_material/icon-briefcase-inactive.png'),
      require('./assets/images/additional_material/icon-news-active.png'),
      require('./assets/images/additional_material/icon-news-inactive.png'),
      require('./assets/images/additional_material/icon-profile-active.png'),
      require('./assets/images/additional_material/icon-profile-inactive.png'),
      require('./assets/images/icon-overview-shadow.png'),
      require('./assets/images/icon-people-shadow.png'),
      require('./assets/images/icon-internals-shadow.png'),
      require('./assets/images/icon-market-shadow.png'),
      require('./assets/images/icon-media-shadow.png')
    ]);
    const androidCashFonts = Platform.OS !== 'android' ? {}
    : {
      'Avenir-Medium': require("./assets/fonts/AvenirLTStd-Book.ttf"),
      Avenir: require("./assets/fonts/AvenirLTStd-Book.ttf"),
      'Avenir-Black': require("./assets/fonts/AvenirLTStd-Book.ttf"),
    };
    const fontAssets = cacheFonts([
      { ...{
        "GothamRounded-Book": require("./assets/fonts/GothamRounded-Book.ttf"),
        "GothamRounded-Medium": require("./assets/fonts/GothamRounded-Medium.ttf"),
        "Avenir-Book": require("./assets/fonts/AvenirLTStd-Book.ttf"),
        "Avenir-Light": require("./assets/fonts/AvenirLTStd-Light.ttf"),
        "Avenir-Roman": require("./assets/fonts/AvenirLTStd-Roman.ttf"),
        icomoon: require("./assets/fonts/icomoon/icomoon.ttf")
      },
        ...androidCashFonts }
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
    this.setState({ appIsReady: true });
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="master"
              defaultRouteConfig={{
                navigationBar: {
                  visible: false,
                  backgroundColor: '#00EBC2',
                  tintColor: '#fff',
                  borderBottomWidth: 0,
                  titleStyle: {
                    fontSize: scaleByVertical(24),
                    fontFamily: 'Avenir-Black'
                  }
                }
              }}
              initialRoute={Router.getRoute("onboarding")}
            />
          </NavigationProvider>
          {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}

        </View>
      );
    }
    return <Exponent.Components.AppLoading />;
  }
}

Exponent.registerRootComponent(AppContainer);
