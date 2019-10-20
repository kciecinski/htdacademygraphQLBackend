const tweets = [{id: 1, text: 'Hello Graphqk'}, {id:2, text: 'Hello HTDAcademy!'}]

const getTweetByText = async (_, {text}, context) => {
  const getTweetsQuery = `SELECT * FROM "Tweet" WHERE text LIKE '%text%'`
  const result = await context.db.query(getTweetsQuery, [text])
  return result.rows[0];
}

const getTweet = async (_, {id}, context) => {
  const getTweetQuery = 'SELECT * FROM "Tweet" WHERE id = $1'
  const result = await context.db.query(getTweetQuery, [id])
  return result.rows[0];
}

const getTweets = async (obj, args, context) => {
  let getTweetsQuery = 'SELECT * FROM "Tweet"'

  if(args.limit){
    getTweetsQuery += ` LIMIT ${args.limit}`
  }
  if(args.offset){
    getTweetsQuery += ` OFFSET ${args.offset}`
  }
  const result = await context.db.query(getTweetsQuery)
  return result.rows;
}

const getUserTweets = async (_, {user_id}, context) => {
  console.log(user_id)
  const getTweetsQuery = 'SELECT * FROM "Tweet" WHERE user = $1'
  const result = await context.db.query(getTweetsQuery, [ user_id ])
  console.log(result)
  return result.rows;
}

const getTweetComments = async(_, {tweet_id}, context) => {
  const getTweetsQuery = 'SELECT * FROM "Comment" WHERE tweet = $1'
  const result = await context.db.query(getTweetsQuery, [tweet_id])
  return result.rows;
}


module.exports = {
  getTweetByText,
  getTweet,
  getTweets,
  tweets,
  getUserTweets,
  getTweetComments
}