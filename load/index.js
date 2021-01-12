import * as Font from "expo-font";

class Loader {
  static async loadLibs() {
    await Font.loadAsync(
      "antoutline",
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );

    await Font.loadAsync(
      "antfill",
      require("@ant-design/icons-react-native/fonts/antfill.ttf")
    );

    await Font.loadAsync(
      "sans-serif",
      require("../assets/fonts/OpenSans-Regular.ttf")
    );

    await Font.loadAsync(
      "sans-serif-bold",
      require("../assets/fonts/OpenSans-Bold.ttf")
    );
  }
}

export default Loader;
