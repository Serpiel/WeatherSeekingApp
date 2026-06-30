import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  historyItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: SIZES.borderRadius,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  date: {
    fontSize: 12,
    color: '#888',
  }
});