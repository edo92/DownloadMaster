import * as Permissions from 'expo-permissions';

class Permission {
    static async requestPermissions(platform) {
        // Permission based on platform
        const permType = platform ? 'MEDIA_LIBRARY' : 'MEDIA_LIBRARY_WRITE_ONLY';
        await Permissions.askAsync(Permissions[permType]); // Request permission
    }
}

export default Permission;