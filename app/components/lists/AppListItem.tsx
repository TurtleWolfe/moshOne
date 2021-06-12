//TurtleWolfe.com // //custom components
//AppListItem
//AppListItem // //custom components
//AppListItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Animated,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  // Text,
  View,
} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';

import AppText from "../../components/AppText";
import AppDeleteAction from "../../components/lists/AppListItemDeleteAction";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Palette from '../../constants/palette';

interface AppListItemProps {
  title?: string;
  subTitle?: string;
  // image?: string;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactNode;
  appListImage?: {};
  appListItem?: {};
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: ((progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode);
} // typeScript

const AppListItem: React.FC<AppListItemProps> = ({
  title,
  subTitle,
  image,
  IconComponent,
  appListImage,
  appListItem,
  onPress = () => console.log("appListItem"),
  renderRightActions = () => (
    <AppDeleteAction onPress={() => console.log("Render Right Actions")} />
  )
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={Palette.darkGrey}
        onPress={onPress}>
        <View style={[styles.container, appListItem]}>
          {IconComponent}
          {image &&
            <Image
              style={[styles.image, appListImage]}
              source={image} />}
          <View style={styles.detailsContainer}>
            {title && <AppText
              style={styles.title}>
              {title}
            </AppText>}
            {subTitle && <AppText
              style={styles.subTitle}>
              {subTitle}
            </AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
} // App List Item Component

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Palette.lightGrey,
    // paddingLeft: 10,
    padding: 15,
    width: '100%',
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    // marginRight: 10,
  },
  image: {
    backgroundColor: Palette.highlight,
    borderRadius: 35,
    height: 70,
    // marginRight: 10,
    width: 70,

    // width: size,
    // height: size,
    // borderRadius: size / 2,
    // backgroundColor,
    // justifyContent: "center",
    // alignItems: "center",
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
}) // Style Sheet for List Item

export default AppListItem