import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({ name, message, time, count, image, logoComponent, rightIcon, messageLeftIcon }: any) => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.leftContainer}>
                <View>
                    <Image source={image} style={styles.image} />
                    {logoComponent}
                </View>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.flexRow}>
                        {messageLeftIcon}
                        <Text style={styles.message}>{message}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {time && <Text style={styles.time}>{time}</Text>}
                {!!count && (
                    <View style={styles.messageCountContainer}>
                        <Text style={styles.messageCount}>{count}</Text>
                    </View>
                )}
                {rightIcon}
            </View>
        </TouchableOpacity>
    )
}

export default MessageCard

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(8)
    },
    image: {
        height: moderateScale(53),
        width: moderateScale(53)
    },
    name: {
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        color: 'black',
        paddingVertical: verticalScale(4)
    },
    message: {
        fontSize: moderateScale(13),
        color: '#889095',
        fontWeight: '500'
    },
    time: {
        color: '#998E8E',
        fontWeight: 'bold',
        fontSize: moderateScale(12)
    },
    messageCountContainer: {
        backgroundColor: '#036A01',
        width: moderateScale(22),
        height: moderateScale(22),
        borderRadius: moderateScale(22),
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageCount: {
        color: 'white',
        fontSize: moderateScale(12)
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10)
    },
    rightContainer: {
        alignItems: 'flex-end',
        gap: verticalScale(8)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(5)
    }
})