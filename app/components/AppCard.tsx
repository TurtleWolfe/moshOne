//TurtleWolfe.com // //custom components
//AppCard
//AppCard // //custom components
//AppCard
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  // ImageRequireSource,
  // ImageSourcePropType,
  // ImageURISource,
  StyleSheet,
  View,
} from 'react-native'

import AppText from "./AppText";
import palette from '../constants/palette';

interface AppCardProps {
  title?: string;
  subTitle?: string;
  // image?: ImageURISource;
  // image?: (id: string)=> void;
  image?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  title = 'default AppCard title',
  subTitle = 'default AppCard subTitle in "Charter Bold Italic"',
  image = require('../assets/images/Turtlewolfe.png'),
}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.detailsContainer}>
        <AppText
          style={styles.title}>
          {title}
        </AppText>
        <AppText
          style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.primary,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    // backgroundColor: 'yellow',
    backgroundColor: palette.secondary,
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    // backgroundColor: palette.lightGrey,
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: palette.secondary,
    fontFamily: "CharterBoldItalic",
    // fontFamily: "MonoSpace",
    fontWeight: "900",
  },
})

export default AppCard