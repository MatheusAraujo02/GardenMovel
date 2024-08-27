import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    bordaDiario: {
        marginTop: '20%',
        // margin: '20%',
        backgroundColor: '#000',
        width: '80%',
        height: 100, 
        padding: 8,
        borderRadius: 16,
    },
    bordaEmocao: {
        marginTop: '20%',
        // margin: '20%',
        backgroundColor: '#000',
        width: '80%',
        height: 80, 
        padding: 8,
        borderRadius: 16,
    },
    bordaAtividade: {
        marginTop: '20%',
        // margin: '20%',
        backgroundColor: '#000',
        width: '80%',
        height: 60, 
        padding: 8,
        borderRadius: 16,
    },  
    bordaTexto: {
        color: 'White'
    }

    
});

export default styles;