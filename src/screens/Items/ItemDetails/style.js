import { StyleSheet } from 'react-native';

export const background = {
  flex: 1,
  backgroundColor: '#f1edff',
};

export const screen = {
  backgroundColor: '#ffffff',
  borderColor: '#ddd4ff',
  borderWidth: 2,
  borderBottomColor: 'transparent',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  marginTop: 40,
  flex: 1,
};

export const iconWrapper = {
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 90,
  backgroundColor: '#f1edff',
  width: 180,
  height: 180,
  shadowColor: '#171717',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  elevation: 12,
  shadowOpacity: 0.1,
  shadowRadius: 20,
};

export const icon = {
  width: 120,
  height: 120,
  margin: 10,
};

export const productName = {
  fontWeight: '700',
  fontSize: 26,
  paddingTop: 20,
};

export const priceAndBtn = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 30,
};

export const productPrice = {
  marginRight: 40,
  letterSpacing: 1,
  color: '#3a3a3a',
  fontWeight: '700',
  fontSize: 22,
};

export const scrollPadding = {
  marginTop: -15,
  paddingTop: 15,
};

export const colorSquare = (color) => ({
  backgroundColor: color,
  width: 12,
  height: 12,
  bottom: -2,
});

export const styles = StyleSheet.create({
  background,
  screen,
  iconWrapper,
  icon,
  productName,
  priceAndBtn,
  productPrice,
  scrollPadding,
  colorSquare,
});
