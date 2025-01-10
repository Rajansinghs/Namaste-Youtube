const VideoCard = ({ info }) => {    
    console.log(info, 'info');
    console.log(info?.snippet, 'info snippet');

    const { snippet, statistics } = info;
    console.log(snippet, 'info snippet jk');

    const { channelTitle, title, thumbnails } = snippet;

    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img 
                className="rounded-md" 
                alt="thumbnail" 
                src={thumbnails?.medium?.url}
            />
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard;