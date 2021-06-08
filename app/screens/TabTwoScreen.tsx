import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
//  App components
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppPickerItem from '../components/AppPickerItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

//  App form Components
import AppErrorMessage from '../components/forms/AppErrorMessage';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppSubmitButton from '../components/forms/AppSubmitButton';

//  App lists Components
import AppListItem from '../components/lists/AppListItem';
import AppListItemDeleteAction from '../components/lists/AppListItemDeleteAction';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';

//  App component Screens
import AccountScreen from './componentScreens/AccountScreen';
import ListingDetailsScreen from './componentScreens/ListingDetailsScreen';
import ListingEditScreen from './componentScreens/ListingEditScreen';
import ListingsScreen from './componentScreens/ListingsScreen';
import LoginScreen from './componentScreens/LoginScreen';
import MessagesScreen from './componentScreens/MessagesScreen';
import RegisterScreen from './componentScreens/RegisterScreen';
import ViewImgageScreen from './componentScreens/ViewImageScreen';
import WelcomeScreen from './componentScreens/WelcomeScreen';

import Palette from '../constants/palette';
import defaultStyles from '../constants/styles';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>Components</Text> */}
      {/* <AppButton /> */}
      {/* <AppCard /> */}

      {/* <AppCard
        title='TabTwo'
        subTitle='TabTwo'
        image={require('../assets/images/jacket.jpg')}
      /> */}
      {/* <AppCategoryPickerItem /> */}
      {/* <AppIcon /> */}
      {/* <AppPicker /> */}
      {/* <AppPickerItem /> */}
      {/* <AppScreen /> */}
      {/* <AppText /> */}
      {/* <AppTextInput /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>form Components</Text> */}
      {/* <AppErrorMessage /> */}
      {/* <AppForm /> */}
      {/* <AppFormField /> */}
      {/* <AppFormPicker /> */}
      {/* <AppSubmitButton /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>list Components</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <AppListItem /> */}

      {/* <AppListItem
        image={require("../assets/images/favicon.png")}
        title="Tab Two"
        subTitle="tab 2 demo"
        appListItem={
          styles.appListItem
        }
        appListImage={
          styles.applistImage
        }
      /> */}

      {/* <AppListItemDeleteAction /> */}
      {/* <AppListItemSeparator /> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Text style={styles.title}>component Screens</Text> */}
      {/* <AccountScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <RegisterScreen /> */}
      <ViewImgageScreen />
      {/* <WelcomeScreen /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Palette.mediumGrey,
    // padding: 20,
  },
  // appListItem: {
  //   backgroundColor: Palette.danger,
  //   borderRadius: 50,
  //   // height: 100,
  //   // paddingLeft: 0,
  //   padding: 7,
  //   // width: 100,
  // },
  // applistImage: {
  //   backgroundColor: Palette.highlight,
  //   borderRadius: 50,
  //   height: 100,
  //   // marginRight: 30,
  //   width: 100,
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 6,
    height: 1,
    width: '80%',
  },
});
