let counter = 0;

const incrementMutation = () => {
  counter++;
  return counter;
}

const incrementByValueMutation = (_, { value }) => {
  counter += value;
  return counter;
}

module.exports = {
  incrementMutation,
  incrementByValueMutation
}