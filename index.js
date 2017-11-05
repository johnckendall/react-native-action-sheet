'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    TouchableOpacity,
    View,
} = ReactNative;

const Button = require('./button.js');
const Overlay = require('./overlay.js');
const Sheet = require('./sheet.js');

class RemobileActionSheet extends React.Component {
  static defaultProps={
    cancelText: 'Cancel',
  }
  getDefaultProps(){
    return myprops;
  }
  render () {
    return (
        <Overlay visible={this.props.visible}>
            <View style={styles.actionSheetContainer}>
                <TouchableOpacity
                    style={{ flex:1 }}
                    onPress={this.props.onCancel} />
                <Sheet visible={this.props.visible}>
                    <View style={styles.buttonContainer}>
                        {this.props.children}
                    </View>
                    <Button
                        buttonStyle={{ marginTop:6, borderRadius:6 }}
                        textStyle={{ color:'red' }}
                        onPress={this.props.onCancel}>{this.props.cancelText}</Button>
                </Sheet>
            </View>
        </Overlay>
    );
  }
}
module.exports=RemobileActionSheet;
module.exports.Button=Button;

const styles = StyleSheet.create({
    actionSheetContainer: {
        flex: 1,
        padding: 10,
        paddingBottom: 6,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
        borderRadius:6,
        overflow: 'hidden',
    },
});
