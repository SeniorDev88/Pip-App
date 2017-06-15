import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  StatusBar
} from 'react-native';
import { scale, scaleByVertical } from '../constants/Layout';
import TagCloud from '../components/TagCloud';
import NavigatorButton from '../components/NavigatorButton';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  logoImage: {
    height: scaleByVertical(70),
    width: scale(53),
    resizeMode: 'contain'
  },
  titleConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(85)
  },
  titleText: {
    fontSize: scaleByVertical(50),
    color: Colors.titleColor,
    textAlign: 'center',
    width: scale(500),
    fontFamily: 'GothamRounded-Book'
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(50)
  },
  descriptionText: {
    fontSize: scaleByVertical(26),
    color: Colors.boxTextColor,
    textAlign: 'center',
    width: scale(600),
    fontFamily: 'Avenir',
    lineHeight: Math.ceil(scaleByVertical(45))
  },
  container: {
    flex: 1,
    marginTop: scaleByVertical(55),
    marginBottom: scaleByVertical(100),
    marginHorizontal: scale(40)
  },
  notEnoughContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { height: scaleByVertical(-100) },
    shadowOpacity: 0.5,
    shadowColor: "white",
    height: 40,
    marginBottom: scaleByVertical(-30)
  },
  notEnoughText: {
    alignSelf: 'center',
    fontSize: scaleByVertical(26),
    fontFamily: 'Avenir',
    color: Colors.tintColor
  },
  continueButtonContainer: {
    shadowOffset: { height: scaleByVertical(-80) },
    shadowOpacity: 0.5,
    shadowColor: "white",
    height: Platform.OS === 'ios' ? scaleByVertical(75) : scaleByVertical(105)
  },
  continueButton: {
    marginTop: Platform.OS === 'ios' ? scaleByVertical(20) : scaleByVertical(10),
  }
});

const MIN_ALLOWED_ITEMS = 5;

export default class InterestsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {
          name: 'Regulations',
          follow: false
        },
        {
          name: 'Food',
          follow: false
        },
        {
          name: 'Healthy',
          follow: false
        },
        {
          name: 'Eco-Project',
          follow: false
        },
        {
          name: 'Fintech',
          follow: false
        },
        {
          name: 'Investing',
          follow: false
        },
        {
          name: 'Regulations1',
          follow: false
        },
        {
          name: 'Food1',
          follow: false
        },
        {
          name: 'Healthy1',
          follow: false
        },
        {
          name: 'Eco-Project1',
          follow: false
        },
        {
          name: 'Fintech1',
          follow: false
        },
        {
          name: 'Investing1',
          follow: false
        },
        {
          name: 'Regulations2',
          follow: false
        },
        {
          name: 'Food2',
          follow: false
        },
        {
          name: 'Healthy2',
          follow: false
        },
        {
          name: 'Eco-Project2',
          follow: false
        },
        {
          name: 'Fintech2',
          follow: false
        },
        {
          name: 'Investing2',
          follow: false
        },
        {
          name: 'Regulations3',
          follow: false
        },
        {
          name: 'Food3',
          follow: false
        },
        {
          name: 'Healthy3',
          follow: false
        },
        {
          name: 'Eco-Project3',
          follow: false
        },
        {
          name: 'Fintech3',
          follow: false
        },
        {
          name: 'Investing3',
          follow: false
        }
      ],
      activeTagAmount: 0
    };
  }

  onTagPress(tagIndex) {
    const { tags, activeTagAmount } = this.state;
    const addTag = tags[tagIndex].follow ? -1 : 1;
    tags[tagIndex].follow = !tags[tagIndex].follow;
    this.setState({ activeTagAmount: activeTagAmount + addTag, tags });
  }

  renderLogo() {
    return (
      <View style={{ justifyContent: 'flex-start' }}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/Onboarding/Pip.png')}
        />

      </View>
    );
  }

  renderTitle(title) {
    return (
      <View style={styles.titleConatiner}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    );
  }

  renderDescription(text) {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {text}
        </Text>
      </View>
    );
  }

  renderTagContainer() {
    const { tags } = this.state;
    return (

        <View style={{ flex: 1, paddingBottom: scaleByVertical(20) }}>
          <ScrollView style={{ marginTop: scaleByVertical(40) }}>
            <TagCloud
              tags={tags}
              onPress={i => this.onTagPress(i)}
            />
          </ScrollView>
          <View style={{}}>

          </View>
        </View>


    );
  }

  renderContinueButton() {
    return (
      <View style={styles.continueButtonContainer}>
        <NavigatorButton
          buttonText="Continue"
          style={styles.continueButton}
          onPress={() => this.props.navigator.replace('rootNavigation')}
        />
      </View>
    );
  }

  renderNotEnoughTags() {
    return (
      <View style={styles.notEnoughContainer}>
        <Text style={styles.notEnoughText}>
          Select a minimum of {MIN_ALLOWED_ITEMS}
        </Text>
      </View>
    );
  }

  render() {
    const { activeTagAmount } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          hidden={true}
        />
        {this.renderLogo()}

        {this.renderTitle("Interests")}

        {this.renderDescription("Apart from fruit, what do you find ‘appealing’?")}

        {this.renderTagContainer()}

        {activeTagAmount < MIN_ALLOWED_ITEMS ?
          this.renderNotEnoughTags() :
          this.renderContinueButton()
        }

      </View>
    );
  }
}

