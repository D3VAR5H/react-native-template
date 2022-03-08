import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Notifications from './src/services/NotificationService';

export default function App() {
	useEffect(() => {
		const registerHandler = (token) => {
			// console.log('Device Token Received ', token);
			// Make your API call to save the token here
		};

		Notifications.init(registerHandler);

		// Notifications.localNotification({
		//     title: 'Local Notification',
		//     message: 'This is a local notification',
		// })

		return () => {
			Notifications.delete();
		};
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
