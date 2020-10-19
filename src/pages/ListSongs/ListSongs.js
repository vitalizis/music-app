import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
    useParams
} from "react-router-dom";

import albums from "../../data/mockData";

const ListSongs =()=>{
    let { id } = useParams();
    const album  = albums.find(x => x.id === parseInt(id));
    console.log(album)
    return(
        <>
        <h2 className="title-album">{album.name}</h2>
        <div className="container">
            {
                album.songs.map((song,i)=>{
                    return(
                        <div className="row row top-buffer" key={i}>
                            <div className="col-sm">
                                <div className="card">
                                    <h5 className="card-title title-song">{song.name}</h5>
                                    <AudioPlayer
                                        src={song.url}
                                        onPlay={e => console.log("onPlay")}
                                        style={{backgroundColor:'rgb(3 211 182)'}}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
 export default ListSongs;
