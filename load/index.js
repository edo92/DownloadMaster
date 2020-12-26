import * as Font from 'expo-font';

const fonts = [
    {
        family: 'antoutline',
        path: require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    },
    {
        family: 'antfill',
        path: '@ant-design/icons-react-native/fonts/antfill.ttf'
    }
]

class Loader {
    static async loadLibs() {
        return Promise.all(fonts.map(async font => {
            return await Font.loadAsync(font.family, font.path);
        }))
    }
}

export default Loader;