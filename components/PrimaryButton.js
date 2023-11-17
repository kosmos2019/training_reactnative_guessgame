import { Text, View } from "react-native/types";

function PrimaryButton({children}) {
    return(
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default PrimaryButton;