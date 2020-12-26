import * as Font from 'expo-font';

class Loader {
    static async loadLibs() {
        await Font.loadAsync(
            'antoutline',
            require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        )
        await Font.loadAsync(
            'antfill',
            require('@ant-design/icons-react-native/fonts/antfill.ttf')
        );
    }
}

export default Loader;
