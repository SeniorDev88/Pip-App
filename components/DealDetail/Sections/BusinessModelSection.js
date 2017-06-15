import React, { PropTypes } from "react";
import { View, Image, WebView, Dimensions } from "react-native";
import Heading from "../../Heading";
import HeadingGreenLg from "../../HeadingGreenLg";
import PictureBreak from "../../PictureBreak";
import CarouselCustom from "../../CarouselCustom";
import PersonAll from "../PersonAll";

const width = Dimensions.get('window').width;

const entriesUniqueProperties = [
  {
    cardText: "97% customer satisfaction rating from customers in +50 countries."
  },
  {
    cardText: "Previously secured +£2.82m from Aviva Ventures, Breed Reply & founders."
  },
  {
    cardText: "Funds to expand sales channels, partnerships & reduce production costs"
  },
  {
    cardText: "Founded by a team with three successful UK exits worth +£20m"
  }
];

const entriesPartners = [
  {
    imageUrl: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png",
    title: "Axel Hedfors (Axwell)",
    tagline: "",
    cardTitle: "",
    cardText: "An entrepreneur with years of industry experience, Mikael has worked in various roles for companies like Wattgard, OnTheFlea, and Ideon Innovation.",
    linkWebUrl: "https://linkedin.com"
  },
  {
    imageUrl: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png",
    title: "Partner 1",
    tagline: "",
    cardTitle: "",
    cardText: "Is this real life, or just fantasy?",
    linkWebUrl: "https://linkedin.com"
  }
];

const jsCode2 = `
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Revenue'],
      ['2004',  1000],
      ['2005',  1170],
      ['2006',  660],
      ['2007',  1030]
    ]);

    var options = {
      title: '',
      curveType: 'function',
      legend: 'none',
      colors: ['#00ebc2'],
      animation: {"startup": true},
      lineWidth: 1.5,
      pointSize: 3,
      dataOpacity: .4,
      hAxes: {
        textStyle: {
          color: '#e6e5e6'
        }
      },
      vAxis: {format:'# £'},
      vAxes: {
        textStyle: {
          color: '#e6e5e6'
        }
      },
      'width': ${width}
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));

    chart.draw(data, options);
  }
`;

const html = `
  <html>
    <head>
      <!--Load the AJAX API-->
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      
    </head>

    <body>
      <!--Div that will hold the pie chart-->
      <div id="line_chart_div" style="font-family: serif;"></div>
    </body>
  </html>
`;

const BusinessModelSection = ({ revenueModel, revenueStream }) => (
  <View>
    <Heading>BUSINESS MODEL</Heading>
    {/* Business Model*/}
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <Image
        style={{
          width: 35,
          height: 30,
          marginBottom: 15,
          resizeMode: 'contain'
        }}
        source={require("../../../assets/images/DealDetail/icon-model.png")}
      />
      <HeadingGreenLg>{revenueModel}</HeadingGreenLg>
    </View>

    {/* Revenue Stream*/}
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <Image
        style={{
          width: 29.5,
          height: 25.5,
          marginBottom: 15
        }}
        source={require(
            "../../../assets/images/DealDetail/icon-revenuestream.png"
          )}
      />
      <HeadingGreenLg>{revenueStream}</HeadingGreenLg>
    </View>

    {/* Unique Properties of the business*/}
    <CarouselCustom entries={entriesUniqueProperties} />

    <Heading
      style={{
        marginBottom: 0
      }}
    >REVENUE FORECAST</Heading>

    <View
      style={{
        marginBottom: 20
      }}
    >
      <WebView
          // source={{ uri: "https://exponenttest-20794.firebaseapp.com/" }}
        source={{ html }}
        injectedJavaScript={jsCode2}
        javaScriptEnabledAndroid
        scrollEnabled={false}
        style={{
          height: 175,
          marginBottom: 30
        }}
      />
    </View>

    <Heading
      style={{
        marginBottom: 20
      }}
    >PARTNERS</Heading>

    {/* Need to adjust height of the slides*/}
    <CarouselCustom entries={entriesPartners} />

    <PictureBreak />

    <Heading>LEAD INVESTOR</Heading>

    {/* Lead Investor */}
    <PersonAll
      imageUrl="https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png"
      personName="Daniel Andersson"
      personPosition="Senior ERP Consultant at Visma Software"
      personDescription="An entrepreneur with years of industry experience, Daniel has worked in various roles for companies like Wattgard, OnTheFlea, and Ideon Innovation."
      personLinkWeb="https://linkedin.com"
    />
  </View>
);

BusinessModelSection.propTypes = {
  revenueModel: PropTypes.string,
  revenueStream: PropTypes.string
};

BusinessModelSection.defaultProps = {
  revenueModel: null,
  revenueStream: null
};

export default BusinessModelSection;
