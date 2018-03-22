import React, { Component } from 'react';
import{ StyleSheet, ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: require('../../assets/image/logo.png')
    }
  }
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:26}}>Scroll me plz</Text>
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Text style={{fontSize:26}}>If you like</Text>
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Text style={{fontSize:26}}>Scrolling down</Text>
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Text style={{fontSize:26}}>Framework around?</Text>
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Image style={styles.imageStyle} source={this.state.url} />
          <Text style={{fontSize:20}}>React Native</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 20,
    height: 20
  }
});
