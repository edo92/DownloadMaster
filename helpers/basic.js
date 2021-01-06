class Helpers {
    static longText(str, max) {
        if (str.length < max) {
            return str;
        }
        else {
            return str.slice(0, max) + '...';
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