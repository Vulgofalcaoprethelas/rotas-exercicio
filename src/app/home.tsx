import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home(){

    function verCatalogo(){
        router.navigate('/(tabs)')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à loja oficial da PS4!</Text>
            <Text style={styles.subtitle}> Aqui você encontra todos os jogos originais da PS4. Entre no nosso catálogo e aproveite o melhor do gaming:</Text>
            <TouchableOpacity style={styles.button} onPress={verCatalogo}>
                <Text style={styles.titleButton}>Catálogo</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        padding:60,
        backgroundColor: '#003791'
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#fff'
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    },
    titleButton:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#fff'
    },
    button:{
        backgroundColor: '#0070f3',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10,
    },
    backText:{
        fontSize: 16,
        color: '#fff'
    }
})
