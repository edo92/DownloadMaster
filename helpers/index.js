class Helpers {
    static parseProgress({ totalBytesExpectedToWrite, totalBytesWritten }) {
        return {
            total: totalBytesExpectedToWrite,
            current: totalBytesWritten,
            downloaded: (totalBytesWritten / totalBytesExpectedToWrite) * 100 //Convert to percentage
        }
    }
}

export default Helpers;