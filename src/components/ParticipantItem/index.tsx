import { Text, TouchableOpacity, View } from "react-native"
import { ParticipantItemProps } from "./types"

import { styles } from "./styles"

export const Participant: React.FC<ParticipantItemProps> = ({ participantName, removeParticipant }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>
				{participantName}
			</Text>

			<TouchableOpacity style={styles.button} onPress={removeParticipant}>
				<Text style={styles.buttonText}>
					-
				</Text>
			</TouchableOpacity>
		</View>
	)
}