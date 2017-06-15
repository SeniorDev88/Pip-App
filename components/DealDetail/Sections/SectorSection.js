import React from "react";
import { View, WebView, Dimensions, Image } from "react-native";
import Heading from "../../Heading";
import MarketSize from "../MarketSize";
import CarouselCustom from "../../CarouselCustom";

const CHART_WIDTH = Dimensions.get('window').width;
const CHART_HEIGHT = 220;

const entriesPartners = [
  {
    imageUrl: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png",
    title: "Pops",
    cardText: "Premium Ice Popsicles made in Britain using natural ingredients and creators of the world's first champagne ice popsicle.",
    linkWebUrl: "https://example.com"
  },
  {
    imageUrl: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png",
    title: "Axel Hedfors (Axwell)",
    cardText: "An entrepreneur with years of industry experience, Mikael has worked in various roles for companies like Wattgard, OnTheFlea, and Ideon Innovation.",
    linkWebUrl: "https://linkedin.com"
  }
];

const jsCode2 = `
  google.charts.load('current', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
      ['Country'],
      ['United States'],
      ['United Kingdom']
    ]);

    var options = {
      defaultColor: '#00EBC2'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geo_chart_div'));

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
      <div id="geo_chart_div" style="width: ${CHART_WIDTH}; height: ${CHART_HEIGHT};"></div>
    </body>
  </html>
`;

export default function TeamSection() {
  return (
    <View>
      <Heading>SECTOR DETAILS</Heading>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Image
          style={{
            width: 25,
            height: 26.5,
            marginBottom: 15,
            resizeMode: 'contain'
          }}
          source={require("../../../assets/images/additional_material/icon-sector.png")}
        />
        <Heading
          style={{
            fontSize: 24,
            color: '#00EBC2',
            marginBottom: 60
          }}
          uppercase={false}
        >Frozen Alcoholic Goods</Heading>
      </View>

      <Heading>GEOGRAPHIC MARKETS</Heading>
      <WebView
        // source={{ uri: "https://exponenttest-20794.firebaseapp.com/" }}
        source={{ html }}
        injectedJavaScript={jsCode2}
        javaScriptEnabledAndroid
        scrollEnabled={false}
        style={{
          height: CHART_HEIGHT,
          marginBottom: 25
        }}
      />
      <Heading
        style={{
          fontSize: 24,
          color: '#00EBC2',
          marginBottom: 60
        }}
        uppercase={false}
      >UK and USA</Heading>

      <Heading>MARKET SIZE</Heading>

      <MarketSize
        som="£960 M"
        sam="£2.8 B"
        tam="£37.9 B"
      />

      {/* Market Highlights Carousel */}

      <Heading>COMPETITORS</Heading>

      <CarouselCustom entries={entriesPartners} />

      {/* Competitors Carousel */}

    </View>
  );
}

TeamSection.propTypes = {};

TeamSection.defaultProps = {};
