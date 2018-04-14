import {Navigation} from 'react-native-navigation';
import WeatherContainer from './modules/weather/WeatherContainer';
import {
  WEATHER_CONTAINER_SCREEN
} from './constants/scrrenKey';

export function registerScreens(store, Provider) {
	Navigation.registerComponent(WEATHER_CONTAINER_SCREEN, () => WeatherContainer, store, Provider);
}