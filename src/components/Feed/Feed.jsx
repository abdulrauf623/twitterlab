import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed({ tweets, setTweets, userProfile, tweetText, setTweetText }) {
  console.log("Tweets: ", tweets);
  return (
    <div className="col feed">
      {tweets.map((twitterfeed) => {
        return <Tweet tweet={twitterfeed} />;
      })}

      <TweetBox
        tweets={tweets}
        setTweets={setTweets}
        userProfile={userProfile}
        tweetText = {tweetText}
        setTweetText = {setTweetText}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{/* ADD CODE HERE */}</div>
    </div>
  );
}
