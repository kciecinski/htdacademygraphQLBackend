const getUser = async (_, args, context) => {
  const getUsersQuery = 'SELECT * FROM "User" WHERE id = $1'
  const result = await context.db.query(getUsersQuery, [args.id])
  return result.rows[0];
}

const getUsers = async (_, args, context) => {
  const getUsersQuery = 'SELECT * FROM "User"'
  const result = await context.db.query(getUsersQuery)
  return result.rows;
}

module.exports = {getUser, getUsers}