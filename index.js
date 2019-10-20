const  { GraphQLServer } = require('graphql-yoga')
const { hello, helloWithName} = require('./src/queries/helloQueries/hello.resolver')
const { incrementMutation, incrementByValueMutation } = require('./src/mutations/helloMutations/hello.resolver')
const  {getTweetByText, getTweet, getTweets, getUserTweets, getTweetComments} = require('./src/queries/tweet/tweet.resolver')
const {addTweet, removeTweet, addLikeToTweet} = require('./src/mutations/tweetMutations/tweet.resolver.js')
const DATABASE_URL = "postgresql://admin321:admin123@htdacademy.cuh9o35zdbq1.eu-west-1.rds.amazonaws.com/graphql"
const {Client} = require('pg')
const {getUser, getUsers} = require('./src/queries/user/user.resolver')
const {getComment} = require('./src/queries/commentQueries/comment.resolver')
const {addComment} = require('./src/mutations/commentMutation/comment.resolver')


const client = new Client({
  connectionString: DATABASE_URL
})

client.connect();
const resolvers = {
  Query: {
    hello,
    helloWithName,
    getTweetByText,
    getTweet,
    getTweets,
    getUser,
    getUserTweets,
    getUsers,
    getComment,
    getTweetComments
  },
  Mutation: {
    incrementMutation, 
    incrementByValueMutation,
    addTweet,
    removeTweet,
    addLikeToTweet,
    addComment
  },
  Tweet : {
    user: (tweet, args, context) => getUser(tweet,{ id: tweet.user }, context),
    comments: (tweet, args, context) => getTweetComments(tweet,{ tweet_id: tweet.id }, context)
  },
  Comment: {
    user: (comment, args, context) => getUser(comment,{ id: comment.user }, context),
    tweet: (comment, args, context) => getTweet(comment,{ id: comment.tweet }, context)
  },
  User: {
    tweets: (user, args, context) => getUserTweets(user,{ user_id: user.id }, context)  
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db: client
  }
})

server.start().then(() => {
  console.log("server running")
}).catch(()=>{
  console.log("Error");
  process.exit(1);
})
