import { Updates } from "expo";

// handle ota update and show alert for update to confirm
const handleUpdate = async () => {
	try {
		await Updates.fetchUpdateAsync();
		Alert.alert("Update Downloaded", "The new update is downloaded. Do you want to reload the app to see the changes?", [
			{ text: "Cancel", style: "cancel" },
			{ text: "Reload", onPress: () => Updates.reloadAsync() },
		]);
	} catch (e) {}
};

// check ota update and show alert for update to confirm
const checkOtaUpdate = async () => {
	try {
		const update = await Updates.checkForUpdateAsync();
		if (update.isAvailable) {
			Alert.alert("New Update Available", "An update is available, do you want to update now?", [{ text: "OK", onPress: handleUpdate }], {
				cancelable: false,
			});
		}
	} catch (e) {}
};

export default checkOtaUpdate;
