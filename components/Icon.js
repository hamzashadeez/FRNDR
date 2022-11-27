import { TouchableOpacity } from "react-native";

const Icon = ({ size, color, icon }) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size / 2,
        backgroundColor: color,
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default Icon;
