import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Carrinho(){
    function pagamento(){
        router.navigate('/(tabs)/pagamento/7782498')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho:</Text>
            <Image source={require("../../../assets/images/MarvelSpiderManMorales.png")}/>
            <Text style={styles.subtitle}>Marvel's Spider-Man: Miles Morales</Text>
            <Text style={styles.desconto}>R$299,90</Text>
            <Text style={styles.preco}>R$199,90</Text>
            <TouchableOpacity style={styles.button} onPress={pagamento}>
                 <Text style={styles.titleButton}>Pagar</Text>
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
        fontSize: 20,
        fontWeight:'bold',
        color: '#fff',
        marginTop: 25
    },
    subtitle:{
        fontSize: 16,
        color: '#fff'
    },
    desconto:{
        fontSize: 18,
        fontWeight: '700',
        textDecorationLine: 'line-through',
        marginTop: -20,
        color: '#fff'
    },
    preco:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: -40
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
    }
})
