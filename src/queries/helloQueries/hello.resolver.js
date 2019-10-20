const hello = () => {
  return 'Hello2'
};

const helloWithName = (parent, args) =>{
  return `Hello ${args.name}`
}

module.exports = {
  hello,
  helloWithName,
}