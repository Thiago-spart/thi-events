import React from 'react';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/ParticipantItem';

import { styles } from "./styles"

const mockedUsers = [
	"rodrigo",
	"Amanda",
	"Frodo",
	"Sherlock",
]

const App: React.FC = () => {
	const [users, setUsers] = React.useState(mockedUsers)
	const [newUser, setNewUser] = React.useState("")


	const handleAddParticipant = (newParticipant: string) => {
		if(users.includes(newParticipant)) {
			return Alert.alert("Participant already exist", "There's a participant with the same name on the list, please choose another name")
		}

		setUsers(oldUsers => [...oldUsers, newParticipant])
		setNewUser("")
	}

	const handleDeleteParticipant = (GuessName: string) => {
		Alert.alert("Delete", `Confirm deleting ${GuessName}`, [
			{
				text: "Yes",
				onPress: () => {
					setUsers(users.filter(item => item !== GuessName))
					return Alert.alert("Deletado!")
				}
			},
			{
				text: "No",
				style: "cancel"
			}
		])
		
		
		// const newArr = users.splice(userIdx, 1)


		// setUsers([...newArr])
	}
	
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Nome do Evento</Text>
      <Text style={styles.dateText}>
        Sexta, 4 de Novembro de 2022
      </Text>

			<View style={styles.form}>
				<TextInput 
					style={styles.input} 
					placeholder="Participant Name"
					placeholderTextColor="#6b6b6b"
					value={newUser}
					onChangeText={setNewUser}
				/>

				<TouchableOpacity style={styles.button} onPress={() => handleAddParticipant(newUser)}>
					<Text style={styles.buttonText}>
						+
					</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={users}
				keyExtractor={item => item}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Participant 
						key={item}
						participantName={item} 
						removeParticipant={() => handleDeleteParticipant(item)}
					/>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Participants will appear in here 😈
					</Text>
				)}
			/>

			{/* <ScrollView showsVerticalScrollIndicator={false}>
				{users.map((participant, index) => (
					<Participant 
						key={participant.name}
						participantName={participant.name} 
						removeParticipant={() => handleDeleteParticipant(index)}/>
					))}
			</ScrollView> */}

    </View>
  );
}

export default App