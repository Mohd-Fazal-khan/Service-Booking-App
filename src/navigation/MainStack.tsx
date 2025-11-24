import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ConfirmBookingScreen from '../screens/Main/ConfirmBookingScreen';
import BookingScreen from '../screens/Main/BookingScreen';

export type MainStackParamList = {
  Tabs: undefined;
  BookingScreen: { 
    title: string;
    price: string;
    image: any;
    desc: string;
    time: string;
    rating: number;
  };
  ConfirmBookingScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
}