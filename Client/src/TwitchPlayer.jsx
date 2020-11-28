import React, {Component} from 'react';
import { TwitchPlayer } from 'react-twitch-embed';

class Stream extends Component {

	render(){
		return (
			<div style={{display:"block", margin:"auto", textAlign:"center"}}>
				<TwitchPlayer video="333014765" />
			</div>
		)
	}

}

export default Stream