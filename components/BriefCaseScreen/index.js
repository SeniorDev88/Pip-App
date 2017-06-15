import React from 'react';
import { View, StyleSheet } from 'react-native';

import Opportunities from '../HomeScreen/Opportunities';

const opportunities = [
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  }
];

const BriefCaseScreen = () => (
  <View>
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 15,
        borderColor: '#A2B7C0',
        borderStyle: 'solid',
        borderBottomWidth: StyleSheet.hairlineWidth
      }}
    />
    <Opportunities
      items={opportunities}
    />
  </View>
);

export default BriefCaseScreen;
