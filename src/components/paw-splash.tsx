import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

type PawSplashProps = {
  onFinished: () => void;
};

export function PawSplash({ onFinished }: PawSplashProps) {
  useEffect(() => {
    // Fallback timeout in case onAnimationFinish is not called
    const timeout = setTimeout(onFinished, 2500);
    return () => clearTimeout(timeout);
  }, [onFinished]);

  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={require("@/assets/paw2.json")}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={styles.animation}
        onAnimationFinish={onFinished}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 260,
    height: 260,
  },
});
