import * as permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

class Permission {
    static async requestPermissions() {
        let test = await permissions.MEDIA_LIBRARY_WRITE_ONLY;
        console.log('test', test)
    }
}

export default Permission;