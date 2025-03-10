import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (    (dimen.height === 780 || dimen.width === 780)
          || (dimen.height === 812 || dimen.width === 812)
          || (dimen.height === 844 || dimen.width === 844)
          || (dimen.height === 896 || dimen.width === 896)
          || (dimen.height === 926 || dimen.width === 428)
          || (dimen.height === 852 || dimen.width === 852) // 14 Pro
          || (dimen.height === 932 || dimen.width === 932) // 14 Pro Max
    ));
}

export function hasIsland() {
    const dimen = Dimensions.get('window');
    return (
        isIphone() &&
        ((dimen.height === 852 || dimen.width === 852) // 14 Pro
            || (dimen.height === 932 || dimen.width === 932)) // 14 Pro Max
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight,
        default: 0
    });
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}
