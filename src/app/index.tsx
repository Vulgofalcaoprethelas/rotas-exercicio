import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index(){
    function entrar(){
        router.navigate('/home');
    }
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/images/Ps4Logo.png")} style={styles.image}/>
            <TouchableOpacity style={styles.button} onPress={entrar}>
                <Text style={styles.title}>Entrar na Loja PS4</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        padding:60,
        backgroundColor: '#003791'
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        color: '#fff'
    },
    button:{
        backgroundColor: '#0070f3',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})
