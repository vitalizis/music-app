import React, {useState, useRef, createRef} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
    useParams
} from "react-router-dom";

import albums from "../../data/mockData";

const ListSongs =()=>{
    let { id } = useParams();
    const album  = albums.find(x => x.id === parseInt(id));
    const init = album.songs.map((song)=>{
        return {
            playStatus:false,
            songId:song.id
        }
    })
    const [play,setPlay] = useState(init)
    const elementsRef = useRef(albums.map(() => createRef()));
    const onPlayHandler=(id)=>{
        let newPlay=play;
        newPlay.forEach((item,index)=>{
            if(item.songId === id){
                newPlay[index].playStatus = true
            }else{
                newPlay[index].playStatus = false
                elementsRef.current[index].current.audio.current.pause()
            }
        })
        setPlay(newPlay)
    }
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
                                        onPlay={() =>onPlayHandler(song.id, elementsRef.current[i])}
                                        style={{backgroundColor:'rgb(3 211 182)'}}
                                        ref={elementsRef.current[i]}
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
