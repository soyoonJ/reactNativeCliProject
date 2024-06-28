import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		marginHorizontal: 20,
		marginVertical: 40,
	},
	inputContainer: {
		fontSize: 16,
		marginBottom: 10,
	},
	inputLayout: {
		minHeight: 50,
		borderColor: '#6c6c6e99',
		borderWidth: 1,
		paddingHorizontal: 10,
	},
	inputLayoutTopRadius: {
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
	},
	inputLayoutBottomRadius: {
		borderBottomLeftRadius: 6,
		borderBottomRightRadius: 6,
	},
	inputLayoutBorderMargin: {
		marginTop: -1,
	},
	selectBoxContainer: {
		width: '100%',
		minHeight: 50,
	},
	selectBoxLayout: {
		minHeight: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	selectBox: {
		width: 100,
		height: 35,
		borderWidth: 1,
		borderColor: '#6c6c6e99',
		textAlign: 'center',
	},
	selectBoxText: {
		textAlign: 'center',
		margin: 'auto',
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	button: {
		backgroundColor: '#09aa5c',
		borderRadius: 5,
		padding: 15,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '900',
		fontSize: 20,
	},
});
