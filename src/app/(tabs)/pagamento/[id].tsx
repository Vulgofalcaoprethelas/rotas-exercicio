import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Product(){
    const { id } = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pagamento Confirmado!</Text>
            <Text style={styles.title}>Código do Pagamento: {id}</Text>
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
    backText:{
        fontSize: 16,
        color: '#fff'
    }

})
