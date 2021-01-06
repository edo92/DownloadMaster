import * as Font from 'expo-font';

class Loader {
    static async loadLibs() {
        await Font.loadAsync(
            'antoutline',
            require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        );

        await Font.loadAsync(
            'antfill',
            require('@ant-design/icons-react-native/fonts/antfill.ttf')
        );

        await Font.loadAsync(
            'roboto-mono-italic',
            require('../assets/fonts/RobotoMono-Italic-VariableFont_wght.ttf')
        );

        await Font.loadAsync(
            'roboto-mono',
            require('../assets/fonts/RobotoMono-VariableFont_wght.ttf')
        );
    }
}

export default Loader;