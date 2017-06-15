import { createRouter } from '../components/ex-navigation';

import DealDetailScreen from '../screens/DealDetailScreen';
import DealDetailAll from "../components/DealDetail/DealDetailAll";
import LinksScreen from '../screens/LinksScreen';

import SavedDealsScreen from '../screens/SavedDealsScreen';
import RootNavigation from './RootNavigation';

import LoginScreen from '../screens/LoginScreen';
import InvestorTypeScreen from '../screens/InvestorTypeScreen';
import Onboarding from '../screens/Onboarding';
import InterestsScreen from '../screens/InterestsScreen';
import LoginChooseOptionsScreen from '../components/Onboarding/Login';
import SignUpChooseOptionsScreen from '../components/Onboarding/Signup';
import LogInEmailScreen from '../screens/LogInEmailScreen';
import DemographicScreen from '../screens/DemographicScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import HomeFeed from '../components/HomeScreen/Feed';
import HomeOpportunities from '../components/HomeScreen/Opportunities';
import HomeYourPips from '../components/HomeScreen/YourPips';
import HomeTags from '../components/HomeScreen/Tags';
import AddTag from '../components/HomeScreen/AddTag';
import MostViewed from '../components/HomeScreen/MostViewed';

import NewsScreen from '../screens/NewsScreen';
import FullNews from '../components/FullNews';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettings from '../components/Profile/ProfileSettings';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileNotifications from '../components/Profile/Notifications';
import ProfileAbout from '../components/Profile/About';
import ProfilePassword from '../components/Profile/ProfilePassword';
import ProfileDetails from '../components/Profile/ProfileDetails';
import ProfileInvestor from '../components/Profile/InvestorTypeWithClose';

import Bookmarks from '../components/BriefCaseScreen/Bookmarks';
import Overview from '../components/BriefCaseScreen/Overview';
import Glossary from '../components/BriefCaseScreen/Glossary';

const commonRoutes = {
  rootNavigation: () => RootNavigation,
};

const onBoardingRoutes = {
  loginEmail: () => LogInEmailScreen,
  demographic: () => DemographicScreen,
  signUp: () => SignUpScreen,
  forgotPass: () => ForgotPasswordScreen,
  login: () => LoginScreen,
  investorOnboarding: () => InvestorTypeScreen,
  onboarding: () => Onboarding,
  interests: () => InterestsScreen,
  loginChooseOptions: () => LoginChooseOptionsScreen,
  signUpChooseOptions: () => SignUpChooseOptionsScreen
};

const homeRoutes = {
  feed: () => HomeFeed,
  tags: () => HomeTags,
  opportunities: () => HomeOpportunities,
  yourPips: () => HomeYourPips,
  dealDetailAll: () => DealDetailAll,
  dealDetails: () => DealDetailScreen,
  news: () => NewsScreen,
  fullNews: () => FullNews,
  links: () => LinksScreen,
  savedDeals: () => SavedDealsScreen,
  rootNavigation: () => RootNavigation,
  login: () => LoginScreen,
  investor: () => InvestorTypeScreen,
  onboarding: () => Onboarding,
  interests: () => InterestsScreen,
  profileSettings: () => ProfileSettings,
  addTag: () => AddTag,
  mostViewed: () => MostViewed,
};

const internalHomeRouteMap = {
  feed: {
    prev: "yourPips",
    next: "opportunities",
  },
  opportunities: {
    prev: "feed",
    next: "tags",
  },
  tags: {
    prev: "opportunities",
    next: "yourPips",
  },
  yourPips: {
    prev: "tags",
    next: "feed",
  },
};

const newsRoutes = {
  news: () => NewsScreen,
  fullNews: () => FullNews,
};


const profileRoutes = {
  profile: () => ProfileScreen,
  notifications: () => ProfileNotifications,
  about: () => ProfileAbout,
  settings: () => ProfileSettings,
  profilePassword: () => ProfilePassword,
  profileDetails: () => ProfileDetails,
  profileInvestor: () => ProfileInvestor
};

const internalProfileRouteMap = {
  profile: {
    prev: "notifications",
    next: "about",
  },
  notifications: {
    prev: "about",
    next: "profile",
  },
  about: {
    prev: "profile",
    next: "notifications",
  },
};

const briefcaseRoutes = {
  bookmarks: () => Bookmarks,
  overview: () => Overview,
  glossary: () => Glossary
};

const internalBriefcaseRouteMap = {
  overview: {
    prev: "glossary",
    next: "bookmarks",
  },
  bookmarks: {
    prev: "overview",
    next: "glossary",
  },
  glossary: {
    prev: "bookmarks",
    next: "overview",
  }
};

const router = createRouter(() => ({
  ...onBoardingRoutes,
  ...homeRoutes,
  ...newsRoutes,
  ...commonRoutes,
  ...profileRoutes,
  ...briefcaseRoutes,
}));

export const internalRouteMap = {
  ...internalHomeRouteMap,
  ...internalBriefcaseRouteMap,
  ...internalProfileRouteMap
};


export default router;
