import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';


class Permission {
    static async requestPermissions() {
        if (Platform.OS === 'ios') {
            await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
        }
        else {
            await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        }
    }
}

export default Permission;