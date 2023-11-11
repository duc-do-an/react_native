import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 2, 
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#ffae',
        alignItems: 'center',
        justifyContent: 'center'
    },

    number: {
        fontWeight: 16,
        fontWeight: '700',
        color: '#000'
    },

    content: {
        width: '80%',
        fontSize: 16
    }
})

export default styles;