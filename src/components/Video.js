function Video({v}){
    return (
        <div>
            <video src={v} width="450" height="225" controls="controls" autoplay="false" />
        </div>
    );
}

export default Video;