import { Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {Device.brand?.toUpperCase()}: {Device.modelName}
      </Text>
      <Text>Device year class: {Device.deviceYearClass}</Text>
      <Text>{Device.osName} & {Device.osVersion}</Text>
      <Text>Memory: {Device.totalMemory}</Text>
    </View>
  );
}