import { Text, View } from "react-native";
import styles from "./styles";

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.bordaDiario}>
                <Text> Diario </Text>
            </View>

            <View style={styles.bordaEmocao}>
                <Text> Emoção </Text>
            </View>

            <View style={styles.bordaAtividade}>
                <Text> Atividades </Text>
            </View>
        </View>
    )
};
