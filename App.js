/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, 
	ImageBackground, TouchableHighlight
		} from 'react-native';

const Images = [
    {
        uri: "https://i.imgur.com/mxgtWKt.jpg",
        label: "Cat on a blue blanket"
    },

    {
        uri: "https://i.imgur.com/XCRnNWn.jpg",
        label: "A cat toy"
    },

    {
        uri: "https://i.imgur.com/dqQX1K0.jpg",
        label: "A close up of a dog"
    },

    {
        uri: "https://i.imgur.com/nZXbSbh.jpg",
        label: "Sheep next to a cat"
    },

    {
        uri: "https://i.imgur.com/mXCjefR.jpg",
        label: "Cat laying on the grass"
    },

    {
        uri: "https://i.imgur.com/AGyxRcc.jpg",
        label: "Bird sitting on a railing"
    }
];

type Props = {};
export default class App extends Component {
	state = {
		index: 0,
		imageWidth: null
	}

	nextImage(event) {
		const {index, imageWidth}  = this.state,
			X = event.nativeEvent.locationX,
			delta = (X < imageWidth / 2) ? -1: +1;

		let newIndex = (index + delta) % Images.length;

		if(newIndex < 0) {
			newIndex = Images.length - Math.abs(newIndex)
		}

		this.setState({
			index: newIndex
		});
	}

	onImageLayout(event) {
		this.setState({
			imageWidth: event.nativeEvent.layout.width
		});
	}
	render() {
		const image = Images[this.state.index];
	  	return (
	        <View style={styles.container}>
	            <View style={styles.empty} />
	            <TouchableHighlight onPress={this.nextImage.bind(this)}
	            					style={styles.image}>
	            <ImageBackground source={{uri: image.uri}}
	                   style={styles.image}
	                   onLayout={this.onImageLayout.bind(this)}>
	                <Text style={styles.imageLabel}>{image.label}</Text>
	            </ImageBackground>
	            </TouchableHighlight>
	            <View style={styles.empty} />
	        </View>
	    );
  	}
}

const styles = StyleSheet.create({
  container: {
  	position: 'absolute',
  	top: 310,
  	left: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  image: {
  	flex: 2,
  	width: 320,
  	height: 320,
  	justifyContent: 'flex-end',
  	alignItems: 'center'
  },
  imageLabel: {
  	textAlign: 'center',
  	backgroundColor: 'rgba(100, 100, 100, 0.5)',
  	color: 'white',
  	width: 320,

  },
  empty: {
  	position: 'absolute',
  	flex: 1
  }
});
