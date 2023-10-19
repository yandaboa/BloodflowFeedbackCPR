/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import FullApp from './FullApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FullApp);
