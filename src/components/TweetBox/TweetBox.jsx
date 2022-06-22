import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({tweets, setTweets, userProfile, tweetText, setTweetText}) {



const isDisabled = tweetText.length === 0 || tweetText.length > 140

function handleOnSubmit(){


  let newTweet = {

    id: tweets.length,

    name : userProfile.name,

    handle : userProfile.handle,

    text: tweetText,

    comments: 0,

    retweets : 0,

    likes : 0



  }

  setTweets(tweets.concat(newTweet))

  setTweetText("")

}


function handleOnTweetTextChange(event){




  



  setTweetText(event.target.value)






}

  return (
    <div className="tweet-box">
      <TweetInput value = {tweetText} handleOnChange = {handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} isDisabled = {isDisabled}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetText}) {
  // ADD CODE HERE

  const count = (140 - tweetText.length) === 140 ? "": (140 - tweetText.length)
  return <span>{count}</span>
}

export function TweetSubmitButton({handleOnSubmit, isDisabled}) {
  return (



    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled= {isDisabled} onClick={() => handleOnSubmit()}>Tweet</button>
      
    </div>
  )
}
