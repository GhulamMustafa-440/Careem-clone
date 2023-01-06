import { View, Text, Image,TouchableOpacity,StyleSheet } from "react-native";

function CarSelection() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA5cn36LAmha1A8hYpfs-oudPENwuZ10kWw&usqp=CAU' }}
                    style={{ width: 150, height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tNoONVEYI7FJtbCSKUI_0SyzJfEdPCe54Q&usqp=CAU' }}
                    style={{ width: 150, height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeSCEYwQGzVOYOHstGu4I8tmjny3DR1ojug&usqp=CAU' }}
                    style={{ width: 150, height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

   container: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-evenly",
        
       
    },

});
export default CarSelection;