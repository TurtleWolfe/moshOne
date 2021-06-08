//TurtleWolfe.com // //custom components
//AppListItem
//AppListItem // //custom components
//AppListItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  // Text,
  View,
} from 'react-native'

import AppText from "../../components/AppText";
import Palette from '../../constants/palette';

interface AppListItemProps {
  title?: string;
  subTitle?: string;
  image?: string;
  appListImage?: {};
  appListItem?: {};
}

const AppListItem: React.FC<AppListItemProps> = ({
  title = 'default App List Item title',
  subTitle = 'default App List Item subTitle',
  image = require('../../assets/images/Turtlewolfe.png'),
  appListImage,
  appListItem,
}) => {
  return (
    <View style={[styles.container, appListItem]}>
      <Image
        style={[styles.image, appListImage]}
        source={image} />
      <View>
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
  container: {
    flexDirection: "row",
    backgroundColor: Palette.highlight,
    // paddingLeft: 10,
    width: '100%',
  },
  image: {
    backgroundColor: Palette.highlight,
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  title: {
    color: Palette.black,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 20,
    fontWeight: '900',
    // marginVertical: 10,
  },
  subTitle: {
    color: Palette.mediumGrey,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 25,
    fontWeight: '900',
    // marginVertical: 10,
  },
})

export default AppListItem