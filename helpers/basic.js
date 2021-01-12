class Helpers {
  static capFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static firstChar(str) {
    return str.charAt(0).toUpperCase();
  }
}

export default Helpers;
