import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import ytdl from "react-native-ytdl";

// class Downloader {
//     constructor(config) {
//         this.inputUrl = config.inputUrl;
//         this.options = config.options
//     }

//     callback = downloadProgress => {
//         const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
//         console.log('progress----', progress)
//     };

//     ytdl = async () => {
//         console.log('testing', this.inputUrl)
//         const url = 'https://www.youtube.com/watch?v=R2kovI6tpRE'


//         const urls = await ytdl(url, { quality: 'highestvideo' });
//         const path = `${FileSystem.cacheDirectory}imagexxx.mp4`;

//         const downloadable = FileSystem.createDownloadResumable(
//             urls[0].url,
//             path,
//             {},
//             this.callback
//         );

//         try {
//             return await downloadable.downloadAsync();
//         }
//         catch (err) {
//             console.log('error-----', err)
//         }
//     }

//     saveToGallery = async uri => {
//         try {
//             await MediaLibrary.requestPermissionsAsync();  // Permission for andorid
//             await MediaLibrary.createAssetAsync(uri); // Save to gallery
//         }
//         catch (err) {
//             console.log('permission error:', err)
//         }
//     }

//     download = async () => {
//         let { uri } = await this.ytdl();
//         // setInterval(() => {
//         //     console.log('tesitng', this.testing)
//         // }, 1000);

//         console.log('uri', uri)
//         await this.saveToGallery(uri);
//     }
// }

// export default Downloader;




class Downloader {
    constructor(pref) {
        this.url = pref.url;
    }

    donwloadableUrl = async () => {
        const urls = await ytdl(this.url, { quality: 'highestvideo' });
        const path = `${FileSystem.cacheDirectory}imagexxx.mp4`;
        return { url: urls[0].url, path: path };
    }

    createDownloadable = (url, path, callback) => {
        return FileSystem.createDownloadResumable(
            url, path, {}, callback
        );
    }

    saveToGallery = async uri => {
        try {
            await MediaLibrary.requestPermissionsAsync();  // Permission for andorid
            await MediaLibrary.createAssetAsync(uri); // Save to gallery
        }
        catch (err) {
            console.log('permission error:', err)
        }
    }

    download = async callback => {
        let { url, path } = await this.donwloadableUrl();

        const downloadable = this.createDownloadable(url, path, callback);

        let { uri } = await downloadable.downloadAsync();

        try {
            await MediaLibrary.requestPermissionsAsync();  // Permission for andorid
            await MediaLibrary.createAssetAsync(uri); // Save to gallery
        }
        catch (err) {
            console.log('permission error:', err)
        }
    }
}

export default Downloader;