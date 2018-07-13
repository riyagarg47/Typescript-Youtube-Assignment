class YouTube{

    constructor(protected channelName:String,protected videoTitle:String,private videoID?:Number,protected views?:Number,protected likes?:Number,protected dislikes?:Number,protected duration?:String,private comments?:Number,protected autoplay?:Boolean,private description?:String,protected downloadOptionAvailable?:Boolean,protected numberOfSubscribers?:Number,protected shares?:Number,protected uploadDate?:String)
    {
        this.channelName = channelName
        this.videoTitle = videoTitle
        this.videoID = videoID
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.duration = duration
        this.comments = comments
        this.autoplay = autoplay
        this.description = description
        this.downloadOptionAvailable = downloadOptionAvailable
        this.numberOfSubscribers = numberOfSubscribers
        this.shares = shares
        this.uploadDate = uploadDate
    }

    getChannelName = () => {
        return this.channelName
    }

    getVideoTitle = () => {
        return this.videoTitle
    }

    getDescirption = () =>{
        return this.description
    }

    getVideoID = () =>{
        return this.videoID
    }

    getTheNumberOfComments = () =>{
        return this.comments
    }

    setTheNumberOfComments = (totalComments:Number)=>{
        this.comments = totalComments
    }

    getTheNumberOfLikes = () =>{
        return this.likes
    }

    setTheNumberOfLikes = (totalLikes:Number)=>{
        this.likes = totalLikes
    }

    getTheNumberOfDislikes = () =>{
        return this.dislikes
    }

    setTheNumberOfDislikes = (totalDislikes:Number)=>{
        this.dislikes = totalDislikes
    }
}

class CurrentVideo extends YouTube{
    
    constructor(protected channelName:String, protected videoTitle:String,public isPlaying:Boolean,public videoQuality:Number,public addToWatchLaterList:Boolean,public addToFavoriteList:Boolean)
    {
        super(channelName,videoTitle);
        this.isPlaying = isPlaying
        this.videoQuality = videoQuality
        this.addToWatchLaterList = addToWatchLaterList
        this.addToFavoriteList = addToFavoriteList
    }

    getIsPlaying = () =>{
        return this.isPlaying
    }

    setIsPlaying = (playing:Boolean)=>{
        this.isPlaying = playing
    }
    
}

let youtubeObj = new YouTube("XYZ-Channel","BollyWood Music",1050,5607,4506,520,"2.45 hours",23,true,"This video contains latest Bollywood songs medley.",true,21000,56,"20");

let currentVideoObj = new CurrentVideo(youtubeObj.getChannelName(),youtubeObj.getVideoTitle(), true, 360, true, true)
//printing Youtube  object details before modifying
console.log(`Your Current Video details are : ${JSON.stringify(youtubeObj)}`)

//printing Current Video object details before modifying
console.log(`Your Current Video details are : ${JSON.stringify(currentVideoObj)}`)

console.log(youtubeObj.getTheNumberOfComments())
console.log(youtubeObj.getTheNumberOfLikes())
console.log(youtubeObj.getTheNumberOfDislikes())
console.log(currentVideoObj.getIsPlaying())

//modifying Comments using setter
youtubeObj.setTheNumberOfComments(29)
console.log(`Total Comments : ${youtubeObj.getTheNumberOfComments()}`)

//modifying Likes using setter
youtubeObj.setTheNumberOfLikes(4677)
console.log(`Total Likes : ${youtubeObj.getTheNumberOfLikes()}`)

//modifying Dislikes using setter
youtubeObj.setTheNumberOfDislikes(562)
console.log(`Total Dislikes : ${youtubeObj.getTheNumberOfDislikes()}`)

//modifying is playing value using setter
currentVideoObj.setIsPlaying(false)
console.log(`Your current videos's playing status is : ${currentVideoObj.getIsPlaying()}`)

//printing Youtube object details after modifying
console.log(`Your Current Video details are : ${JSON.stringify(youtubeObj)}`)

//printing Current Video object details after modifying
console.log(`Your Current Video details are : ${JSON.stringify(currentVideoObj)}`)