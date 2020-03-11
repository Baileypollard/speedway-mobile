import React, { Component } from "react";
import { WebView } from 'react-native-webview';

class Tickets extends Component {

    render() {
        return  <WebView
                source={{ uri: 'https://www.riversidespeedway.ca/store/' }}
                style={{ marginTop: 20 }}
                />
    }
}

export default Tickets;