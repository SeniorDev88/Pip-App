import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Animated } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../ScrollableTabBar';
import OverviewSection from "./Sections/OverviewSection";
import TeamSection from "./Sections/TeamSection";
import BusinessModelSection from "./Sections/BusinessModelSection";
import SectorSection from "./Sections/SectorSection";
import MediaSection from "./Sections/MediaSection";
import LinkedButton from "../LinkedButton";
import PlatformLogo from "../PlatformLogo";

const styles = StyleSheet.create({
  ico: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
});

const logoPath = "http://3xrowsd5xzn1nczoz32qcdku.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/Crowdcube_logo_exclusion_3a40fc925656b045955d392d7e9f9c80.jpg";

const SectionTabs = () => (
  <ScrollableTabView
    tabBarActiveTextColor="#607D8B"
    tabBarInactiveTextColor="#607D8B"
    renderTabBar={(...args) => <ScrollableTabBar
      {...args} style={{
        borderColor: '#E4E7EA',
        marginBottom: 40
      }}
    />}

  >
    <View tabLabel="icon-overview">
      <OverviewSection />
      <LinkedButton buttonText="Go To Opportunity" />
      <PlatformLogo
        logoPath={logoPath}
      />
    </View>

    <View tabLabel="icon-people">
      <TeamSection />
      <LinkedButton buttonText="Go To Opportunity" />
      <PlatformLogo
        logoPath={logoPath}
      />
    </View>

    <View tabLabel="icon-internals">
      <BusinessModelSection
        revenueModel="Business-to-Consumer"
        revenueStream="Sales of Frozen Cocktails"
      />
      <LinkedButton buttonText="Go To Opportunity" />
      <PlatformLogo
        logoPath={logoPath}
      />
    </View>

    <View tabLabel="icon-market">
      <SectorSection />
      <LinkedButton buttonText="Go To Opportunity" />
      <PlatformLogo
        logoPath={logoPath}
      />
    </View>

    <View tabLabel="icon-media">
      <MediaSection />
      <LinkedButton buttonText="Go To Opportunity" />
      <PlatformLogo
        logoPath={logoPath}
      />
    </View>
  </ScrollableTabView>
);

export default SectionTabs;
