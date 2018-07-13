var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YouTube = /** @class */ (function () {
    function YouTube(channelName, videoTitle, videoID, views, likes, dislikes, duration, comments, autoplay, description, downloadOptionAvailable, numberOfSubscribers, shares, uploadDate) {
        var _this = this;
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.videoID = videoID;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.duration = duration;
        this.comments = comments;
        this.autoplay = autoplay;
        this.description = description;
        this.downloadOptionAvailable = downloadOptionAvailable;
        this.numberOfSubscribers = numberOfSubscribers;
        this.shares = shares;
        this.uploadDate = uploadDate;
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getDescirption = function () {
            return _this.description;
        };
        this.getVideoID = function () {
            return _this.videoID;
        };
        this.getTheNumberOfComments = function () {
            return _this.comments;
        };
        this.setTheNumberOfComments = function (totalComments) {
            _this.comments = totalComments;
        };
        this.getTheNumberOfLikes = function () {
            return _this.likes;
        };
        this.setTheNumberOfLikes = function (totalLikes) {
            _this.likes = totalLikes;
        };
        this.getTheNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.setTheNumberOfDislikes = function (totalDislikes) {
            _this.dislikes = totalDislikes;
        };
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.videoID = videoID;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.duration = duration;
        this.comments = comments;
        this.autoplay = autoplay;
        this.description = description;
        this.downloadOptionAvailable = downloadOptionAvailable;
        this.numberOfSubscribers = numberOfSubscribers;
        this.shares = shares;
        this.uploadDate = uploadDate;
    }
    return YouTube;
}());
var CurrentVideo = /** @class */ (function (_super) {
    __extends(CurrentVideo, _super);
    function CurrentVideo(channelName, videoTitle, isPlaying, videoQuality, addToWatchLaterList, addToFavoriteList) {
        var _this = _super.call(this, channelName, videoTitle) || this;
        _this.channelName = channelName;
        _this.videoTitle = videoTitle;
        _this.isPlaying = isPlaying;
        _this.videoQuality = videoQuality;
        _this.addToWatchLaterList = addToWatchLaterList;
        _this.addToFavoriteList = addToFavoriteList;
        _this.getIsPlaying = function () {
            return _this.isPlaying;
        };
        _this.setIsPlaying = function (playing) {
            _this.isPlaying = playing;
        };
        _this.isPlaying = isPlaying;
        _this.videoQuality = videoQuality;
        _this.addToWatchLaterList = addToWatchLaterList;
        _this.addToFavoriteList = addToFavoriteList;
        return _this;
    }
    return CurrentVideo;
}(YouTube));
var youtubeObj = new YouTube("XYZ-Channel", "BollyWood Music", 1050, 5607, 4506, 520, "2.45 hours", 23, true, "This video contains latest Bollywood songs medley.", true, 21000, 56, "20");
var currentVideoObj = new CurrentVideo(youtubeObj.getChannelName(), youtubeObj.getVideoTitle(), true, 360, true, true);
//printing Youtube  object details before modifying
console.log("Your Current Video details are : " + JSON.stringify(youtubeObj));
//printing Current Video object details before modifying
console.log("Your Current Video details are : " + JSON.stringify(currentVideoObj));
console.log(youtubeObj.getTheNumberOfComments());
console.log(youtubeObj.getTheNumberOfLikes());
console.log(youtubeObj.getTheNumberOfDislikes());
console.log(currentVideoObj.getIsPlaying());
//modifying Comments using setter
youtubeObj.setTheNumberOfComments(29);
console.log("Total Comments : " + youtubeObj.getTheNumberOfComments());
//modifying Likes using setter
youtubeObj.setTheNumberOfLikes(4677);
console.log("Total Likes : " + youtubeObj.getTheNumberOfLikes());
//modifying Dislikes using setter
youtubeObj.setTheNumberOfDislikes(562);
console.log("Total Dislikes : " + youtubeObj.getTheNumberOfDislikes());
//modifying is playing value using setter
currentVideoObj.setIsPlaying(false);
console.log("Your current videos's playing status is : " + currentVideoObj.getIsPlaying());
//printing Youtube object details after modifying
console.log("Your Current Video details are : " + JSON.stringify(youtubeObj));
//printing Current Video object details after modifying
console.log("Your Current Video details are : " + JSON.stringify(currentVideoObj));
