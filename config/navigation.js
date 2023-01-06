import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pickup from '../screen/Pickup';
import Destination from '../screen/Destination';
import CarSelection from '../screen/CarSelection';


const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="CarSelection" component={CarSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}