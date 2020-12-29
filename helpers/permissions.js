import * as permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

class Permission {
    static async requestPermissions() {
        await permissions.MEDIA_LIBRARY_WRITE_ONLY;
    }
}

export default Permission;