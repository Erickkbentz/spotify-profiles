import { getSpotifyProfile, MY_PROFILE } from '../utils/spotify';
import React from 'react';

async function getSpotifyProfileData() {
    return await getSpotifyProfile(MY_PROFILE);
}


class Profile extends React.Component {
    state = {
        profile: null
    };

    handleClick = () => {
        getSpotifyProfileData().then((data) => {
            this.setState({ profile: data });
            console.log(data);
        });
    }

    render() {
        return (
        <div>
            <h1>Spotify Profile</h1>
            <button onClick={this.handleClick} style={{ fontSize: '20px', padding: '10px 20px' }}>
            </button>
            {this.state.profile ? <p>{this.state.profile.display_name}</p> : <p>Click the button to get your Spotify profile</p>}
            <div>
                {this.state.profile ? <img src={this.state.profile.images[1].url} alt="profile" style={{ width: '300px'}} /> : null}
            </div>
        </div>
        
        );
    }
}

export default Profile;