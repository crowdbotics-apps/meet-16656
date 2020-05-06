import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile38971Navigator from '../features/UserProfile38971/navigator';
import Tutorial38970Navigator from '../features/Tutorial38970/navigator';
import NotificationList38942Navigator from '../features/NotificationList38942/navigator';
import Settings38941Navigator from '../features/Settings38941/navigator';
import Settings38933Navigator from '../features/Settings38933/navigator';
import UserProfile38931Navigator from '../features/UserProfile38931/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile38971: { screen: UserProfile38971Navigator },
Tutorial38970: { screen: Tutorial38970Navigator },
NotificationList38942: { screen: NotificationList38942Navigator },
Settings38941: { screen: Settings38941Navigator },
Settings38933: { screen: Settings38933Navigator },
UserProfile38931: { screen: UserProfile38931Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
