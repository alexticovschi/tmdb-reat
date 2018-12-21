import React, { Component } from 'react';
import ActorImage from '../../components/ActorImage/ActorImage';
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

import './ActorImages.css';

export default class ActorImages extends Component {

    state = {
        actorImages: [],
        actorProfileInfo: []
    };
    
    componentDidMount() {
        const { actor_id } = this.props.match.params;
        this.getActorImages(actor_id);
        this.getActorProfileInfo(actor_id);
    }

    getActorProfileInfo = async ID => {
        const APIKEY = "9baa3cbfd9b62ea4f97966abadf41653";
        const resp = await fetch(
          `https://api.themoviedb.org/3/person/${ID}?api_key=${APIKEY}&language=en-US`
        );
    
        const actorProfileInfo = await resp.json();
        this.setState({ actorProfileInfo });
      };

    getActorImages = async ID => {
        const APIKEY = "9baa3cbfd9b62ea4f97966abadf41653";
        const resp = await fetch(
          `https://api.themoviedb.org/3/person/${ID}/images?api_key=${APIKEY}`
        );
    
        const actorImages = await resp.json();
        this.setState({ actorImages: actorImages.profiles });
    }; 

    render() {
        const { actorImages } = this.state;
        const name = this.state.actorProfileInfo.name; 

        console.log(actorImages)
        return (
            <div className="actor-images-wrapper">
                <Navbar/>

                <div className="container actors" style={{marginTop:"70px"}}>
                    <h1 className="actor_images_name"><strong>{name}</strong></h1>
                    
                    <hr className="separator"/>

                    <main className="main-content actors">
                        {actorImages && actorImages.map((img,i) => (
                            <ActorImage key={i} img_path={img.file_path}/>
                        ))}
                    </main>

                    <button
                        className="bio_btn actor_img_btn"
                        onClick={() => this.props.history.goBack()}
                    >
                        Back to main
                    </button>
                </div>

                <Loader/>

                <footer></footer>
            </div>
        )
    }
}