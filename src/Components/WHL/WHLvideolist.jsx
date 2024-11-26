import React from 'react';
import Showvideolist from '../Showvideolist/Showvideolist';

const WHLvideolist = ({ page, currentuser, videolist }) => {
    console.log("currentuser:", currentuser);
    console.log("videolist:", videolist);

    return (
        <>
            {currentuser ? (
                <>
                    {videolist
                        .filter(video => video.viewer === currentuser._id) // Adjust filter condition as per your data structure
                        .map(video => (
                            <Showvideolist key={video._id} videoid={video._id} />
                        ))}
                </>
            ) : (
                <h2 style={{ color: "white" }}>Please login to watch your {page}</h2>
            )}
        </>
    );
};

export default WHLvideolist;
