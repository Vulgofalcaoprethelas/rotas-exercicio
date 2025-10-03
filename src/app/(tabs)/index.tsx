import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Produtos(){
    function carrinho(){
        router.navigate('/(tabs)/carrinho')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Confira nosso catálogo de jogos PS4!</Text>
            <Image source={require("../../../assets/images/GodOfWar.png")} style={styles.image}/>
            <Text style={styles.subtitle}>God of War</Text>
            <Image source={require("../../../assets/images/MarvelSpiderman.png")} style={styles.image}/>
            <Text style={styles.subtitle}>Marvel's Spider-Man</Text>
            <Image source={require("../../../assets/images/GhostOfTsushima.png")} style={styles.image}/>
            <Text style={styles.subtitle}>Ghost of Tsushima</Text>
            <TouchableOpacity style={styles.button} onPress={carrinho}>
                <Text style={styles.textButton}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        backgroundColor: '#003791'
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        color: '#fff'
    },
    subtitle:{
        fontSize: 16,
        color: '#fff'
    },
    textButton:{
        fontSize: 18,
        color: '#fff'
    },
    button:{
        backgroundColor: '#0070f3',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10
    },
    image:{
        width: 110,
        height: 110,
    },
    backText:{
        fontSize: 16,
        color: '#fff'
    }
})
