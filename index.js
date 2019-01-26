import {AppRegistry} from 'react-native';
import App from './src/components/app/App';
import {name as appName} from './app.json';
import { Sentry } from 'react-native-sentry';
import SECRET from './secret.json';

Sentry.config(SECRET.SENTRY_DSN).install();

AppRegistry.registerComponent(appName, () => App);
