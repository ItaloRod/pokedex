import React from 'react'
import { StatusBar as RNStatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function StatusBar<React,FC>(props: any):JSX.Element | null {
    const isFocused = useIsFocused()
    return isFocused ? <RNStatusBar {...props} /> : null
}

export default StatusBar
