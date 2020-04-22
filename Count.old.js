import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const styles = StyleSheet.create({
    text: { fontSize: 70 }
});

export const num = 30;

class Count extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    }
    render() {
        return (
            <Text style={styles.text}>{this.props.count}</Text>
        )
    }
}


export default Count;