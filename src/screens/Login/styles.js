import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: SIZES.borderRadius,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: SIZES.borderRadius,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
        color: COLORS.primary,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
  }
});