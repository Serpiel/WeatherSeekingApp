import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    logoutText: {
        color: COLORS.error,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        borderRadius: SIZES.borderRadius,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
    },
    searchButton: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: SIZES.borderRadius,
        justifyContent: 'center',
    },
    searchButtonText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    errorText: {
        color: COLORS.error,
        marginBottom: 15,
        textAlign: 'center',
    },
    weatherCard: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: SIZES.borderRadius,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    temperature: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 10,
    },
    conditions: {
        fontSize: 18,
        textTransform: 'capitalize',
        marginBottom: 20,
    },
        detailsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 15,
    },
        detailText: {
        fontSize: 16,
        color: '#555',
    },
    navButton: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: SIZES.borderRadius,
        alignItems: 'center',
        marginBottom: 20,
    },
    navButtonText: {
        color: COLORS.text,
        fontWeight: 'bold',
    },
    favoriteButton: {
        marginTop: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        alignItems: 'center',
    },
    favoriteButtonActive: {
        backgroundColor: COLORS.primary,
    },
    favoriteButtonText: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    favoriteButtonTextActive: {
        color: COLORS.white,
    },
});