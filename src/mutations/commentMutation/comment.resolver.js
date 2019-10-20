const addComment = async (_, args, context) => {
  const getUserQuery = 'SELECT * FROM "User" WHERE username = $1'
  const userResult = await context.db.query(getUserQuery, [args.username])
  let user
  if(userResult.rows.length == 0){
    const addUserQuery = 'INSERT INTO "User" ("username") VALUES($1) RETURNING *'
    const newUserResult = await context.db.query(addUserQuery, [args.username])
    user = newUserResult.rows[0];
  }else{
    user = userResult.rows[0];
  }
  const addCommentQuery = 'INSERT INTO "Comment" ("text", "createdAt", "user", "tweet") VALUES($1, $2, $3, $4) RETURNING *'
  const newDate = new Date()
  const values = [args.text,  newDate.toISOString(), user.id, args.tweet_id]
  const result = await context.db.query(addCommentQuery, values)
  return result.rows[0];

}

module.exports = {
  addComment
}