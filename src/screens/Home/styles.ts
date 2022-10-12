import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161016',
    padding: 24
  },
  titleStyle: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  dateText: {
    color: "#6b6b6b",
    fontSize: 16,
  },
	input: {
		height: 56,
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		color: "#fdfcfe",
		padding: 16,
		fontSize: 16,
		flex: 1,
	},
	buttonText: {
		color: "#fdfcfe",
		fontSize: 24,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31cf67",
		alignItems: "center",
		justifyContent: "center",
	},
	form: {
		flexDirection: "row",
		width: "100%",
		gap: 12,
		marginTop: 36,
		marginBottom: 42,
	},
	listEmptyText: {
		color: "#fdfcfe",
		fontSize: 14,
		textAlign: "center",
	},
});
