import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList192512Navigator from '../features/NotificationList192512/navigator';
import Settings192511Navigator from '../features/Settings192511/navigator';
import Settings192503Navigator from '../features/Settings192503/navigator';
import UserProfile192501Navigator from '../features/UserProfile192501/navigator';
import Settings183294Navigator from '../features/Settings183294/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList192512: { screen: NotificationList192512Navigator },
Settings192511: { screen: Settings192511Navigator },
Settings192503: { screen: Settings192503Navigator },
UserProfile192501: { screen: UserProfile192501Navigator },
Settings183294: { screen: Settings183294Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
