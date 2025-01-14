function Video({v}){
    return (
        <div>
            <video src={v} width="450" height="225" controls="controls" autoPlay={false} muted="true" />
        </div>
    );
}

export default Video;