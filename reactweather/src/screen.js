import {Navigation} from 'react-native-navigation';
import WeatherContainer from './modules/weather/WeatherContainer';
import footer from './modules/weather/footer';
import setting from './modules/weather/setting';
import menu from './modules/weather/menu';
import {
  WEATHER_CONTAINER_SCREEN,
  WEATHER_FOOTER_SCREEN,
  WEATHER_SETTING_SCREEN,
  WEATHER_MENU_SCREEN
} from './constants/scrrenKey';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(WEATHER_CONTAINER_SCREEN, () => WeatherContainer, store, Provider);
  Navigation.registerComponent(WEATHER_FOOTER_SCREEN, () => footer, store, Provider);
  Navigation.registerComponent(WEATHER_SETTING_SCREEN, () => setting, store, Provider);
  Navigation.registerComponent(WEATHER_MENU_SCREEN, () => menu, store, Provider);
}