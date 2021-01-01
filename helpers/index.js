class Helpers {
    static parseProgress({ totalBytesExpectedToWrite, totalBytesWritten }) {
        if (totalBytesExpectedToWrite && totalBytesWritten) {
            return {
                total: totalBytesExpectedToWrite,
                current: totalBytesWritten,
                downloaded: (totalBytesWritten / totalBytesExpectedToWrite) * 100 //Convert to percentage
            }
        }
    }

    static capFirstChar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    static firstChar(str) {
        return str.charAt(0).toUpperCase();
    }
}

export default Helpers;