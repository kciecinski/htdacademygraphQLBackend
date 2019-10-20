const { tweets } = require('../../queries/tweet/tweet.resolver')

const addTweet = async (_, {text, username}, context) => {

  const getUserQuery = 'SELECT * FROM "User" WHERE username = $1'
  const userResult = await context.db.query(getUserQuery, [username])
  let user
  if(userResult.rows.length == 0){
    const addUserQuery = 'INSERT INTO "User" ("username") VALUES($1) RETURNING *'
    const newUserResult = await context.db.query(addUserQuery, [username])
    user = newUserResult.rows[0];
  }else{
    user = userResult.rows[0];
  }
  const addTweetQuery = 'INSERT INTO "Tweet" ("text", "createdAt", "user") VALUES($1, $2, $3) RETURNING *'
  const newDate = new Date()
  const values = [ text,  newDate.toISOString(), user.id]
  const result = await context.db.query(addTweetQuery, values)
  return result.rows[0];
}

const removeTweet = async (_, {id}, context) => {
  const removeTweetQuery = 'DELETE FROM "Tweet" WHERE id = $1 RETURNING *'
  const result = await context.db.query(removeTweetQuery, [id])
  return result.rows[0];
}

const addLikeToTweet = async (_, {tweet_id}, context) => {
  const updateTweetQuey = 'Update "Tweet" SET likes = likes + 1 WHERE id = $1 RETURNING *'
  const result = await context.db.query(updateTweetQuey, [tweet_id])
  return result.rows[0];
}

const getTweetComments = async(_, {tweet_id}, context) => {
  const getTweetsQuery = 'SELECT * FROM "Comments" WHERE tweet = $1'
  const result = await context.db.query(getTweetsQuery, [tweet_id])
  return result.rows[0];
}
module.exports = {
  addTweet,
  removeTweet,
  addLikeToTweet,
  getTweetComments
}