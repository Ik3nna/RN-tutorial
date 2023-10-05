import React from "react";
import { 
    Zocial,
    Octicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Foundation,
    EvilIcons,
    Entypo,
    FontAwesome,
    FontAwesome5,
    SimpleLineIcons,
    AntDesign,
    Feather,
    Fontisto
} from "@expo/vector-icons";

const getIconFont = (type) => {
    switch (type) {
        case "fontisto":
            return Fontisto
        case "feather":
            return Feather
        case "ant":
            return AntDesign
        case "simple line":
            return SimpleLineIcons
        case "fa5":
            return FontAwesome5
        case "fa":
            return FontAwesome
        case "entypo":
            return Entypo
        case "evil":
            return EvilIcons
        case "foundation":
            return Foundation
        case "ion":
            return Ionicons
        case "mc":
            return MaterialCommunityIcons
        case "mi":
            return MaterialIcons
        case "oct":
            return Octicons
        case "zocial":
            return Zocial
        default:
            return FontAwesome
    }
}

const Icon = ({ type, ...props })=> { 
    const FontIcon = getIconFont(type);

    return(
        <FontIcon {...props} />
    );
}

export default Icon;