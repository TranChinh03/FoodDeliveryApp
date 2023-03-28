import { Dimensions } from "react-native";



export default scale = (number, string='w') => {
    let scaleNumber;
    const designHeight = 896;
    const designWidth = 414;
    if (string === 'h') {
        const currentDeviceHeight = Dimensions.get('window').height;
        scaleNumber = (number/designHeight) * currentDeviceHeight;
        return scaleNumber;
        
    }
    else {
        const currentDeviceWidth = Dimensions.get('window').width;
        scaleNumber = (number/designWidth) * currentDeviceWidth;
        return scaleNumber;
    }
}


