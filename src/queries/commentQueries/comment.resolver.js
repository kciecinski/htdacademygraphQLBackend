const getComment = async (_, {id}, context) => {
  const result = await context.db.query('SELECT * FROM "Comment" WHERE id = $1 ', [id])
  return result.rows[0];
}

module.exports = {
  getComment
}