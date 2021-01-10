import * as Permissions from 'expo-permissions';

class Permission {
    static async requestPermissions() {
        await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        // await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
    }
}

export default Permission;