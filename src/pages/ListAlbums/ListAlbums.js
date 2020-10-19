import React from "react";

import {
    Link,
} from "react-router-dom";

import albums from "../../data/mockData";
import splitArrayIntoChunks from "../../utils/splitArrayIntoChunks";

const ListAlbums =()=>{
    const chunkedAlbums = splitArrayIntoChunks(albums,3);
    return(
        <div className="container">
            {
                chunkedAlbums.map((row,i)=>{
                    return(
                        <div className="row row top-buffer" key={i}>
                            {row.map((item,j)=>{
                                return(
                                        <div className="col-sm album" key={j}>
                                            <Link to={`/album/${item.id}`}>
                                                <div className="card">
                                                    <div className="image-container">
                                                        <img className="card-img-top" src={item.imageUrl} alt="card"/>
                                                    </div>
                                                    <div className="card-body">
                                                        <span className="name-of-album">{item.name}</span>, <span className="author-title">Author:</span> {item.author}
                                                    </div>
                                                </div>
                                            </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListAlbums;
