import { AppRegistry, Platform } from 'react-native';
import App from './App';
import Main from './src/Main'

AppRegistry.registerComponent('speedway', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('speedway', { rootTag });
}
