import {Text, View} from 'react-native';
import styles from './style';

export default function Result(props){
    let color
    if(props.imc < 18.5){
        color = styles.corAbaixoPeso;
    }else if(props.imc >= 18.5 && props.imc < 24.9){
        color = styles.corNormal;
    }else if(props.imc >= 25 && props.imc < 29.9){
        color = styles.corSobrepeso;
    }else if(props.imc >= 30 && props.imc < 34.9){
        color = styles.corObesoI;
    }else if(props.imc >= 35 && props.imc < 39.9){
        color = styles.corObesoII;
    }else{
        color = styles.corObesoIII;
    }
    return (
        <View style={styles.resultadoIMC}>
            <Text style={styles.info}>Seu IMC é de:</Text>
            <Text style={styles.imc}>{props.imc}</Text>
            <Text style={[styles.msgResultado, color]}>{props.msgResultado}</Text>
        </View>
    );
}