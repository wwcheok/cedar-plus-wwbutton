import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const propTypes = {
	title: PropTypes.string.isRequired,
	btnStyle: PropTypes.object,
	btnTitleStyle: PropTypes.object,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	footer: PropTypes.bool
};

const defaultProps = {
	btnStyle: {
		alignSelf: 'stretch',
		borderColor: 'black',
		backgroundColor: 'white',
		elevation: 3,
		shadowOpacity: 0.3,
		shadowRadius: 5
	},
	btnTitleStyle: {
		fontSize: 15,
		textAlign: 'center',
		color: 'black',
		margin: 15,
		fontWeight: 'bold'
	},
	onPress: undefined,
	disabled: false,
	footer: false
};

export default function Button({
	title,
	btnStyle,
	btnTitleStyle,
	onPress,
	disabled,
	footer,
	...rest
}) {
	let btnStyles = [];
	btnStyles.push(btnStyle);
	if (footer) {
		btnStyles.push(styles.footerAbsolute);
	}

	return (
		<View {...rest}>
			<TouchableOpacity
				style={btnStyles}
				onPress={() => !disabled && onPress && onPress()}
			>
				<Text style={btnTitleStyle}>
					{title.toUpperCase()}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footerAbsolute: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	}
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
