import { View, Text } from "react-native";
import { Consulta } from "../interfaces/consulta";
import { styles } from "../styles/header.styles";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

export default function Header({ consulta }: ConsultaCardProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>Sistema de Consultas</Text>
            <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>
    )
}