import { View , Text, Button} from "react-native";

function Destination({navigation}) {
    return(
        <View>
            <Text>Destination</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('CarSelection')}
      />
        </View>
    )
}
export default Destination