import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen95200348Navigator from '../features/BlankScreen95200348/navigator';
import BlankScreen94200347Navigator from '../features/BlankScreen94200347/navigator';
import BlankScreen93200346Navigator from '../features/BlankScreen93200346/navigator';
import BlankScreen92200345Navigator from '../features/BlankScreen92200345/navigator';
import BlankScreen91200344Navigator from '../features/BlankScreen91200344/navigator';
import UserProfile192541Navigator from '../features/UserProfile192541/navigator';
import Tutorial192540Navigator from '../features/Tutorial192540/navigator';
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
BlankScreen95200348: { screen: BlankScreen95200348Navigator },
BlankScreen94200347: { screen: BlankScreen94200347Navigator },
BlankScreen93200346: { screen: BlankScreen93200346Navigator },
BlankScreen92200345: { screen: BlankScreen92200345Navigator },
BlankScreen91200344: { screen: BlankScreen91200344Navigator },
UserProfile192541: { screen: UserProfile192541Navigator },
Tutorial192540: { screen: Tutorial192540Navigator },
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
