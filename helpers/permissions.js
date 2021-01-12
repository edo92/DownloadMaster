import * as Permissions from 'expo-permissions';


class Permission {
    static async requestPermissions() {
        try {
            return await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);

        } catch (err) {
            throw err;
        }
    }
}

export default Permission;