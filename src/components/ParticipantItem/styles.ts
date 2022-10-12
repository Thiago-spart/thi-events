import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		marginBottom: 16,
	},
	name: {
		flex: 1,
		fontSize: 16,
		padding: 10,
		color: "#fdfcfe",
	},
	buttonText: {
		color: "#fdfcfe",
		fontSize: 24,
	},
	button: {
		marginLeft: 16,
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#e23c44",
		alignItems: "center",
		justifyContent: "center",
	},
})