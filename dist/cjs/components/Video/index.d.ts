/// <reference types="react" />
interface iVideoPlayer {
    url?: string;
    className?: String;
}
declare const VideoPlayer: ({ url, className }: iVideoPlayer) => JSX.Element;
export default VideoPlayer;
