const user = {
  name: 'Ivan',
  age: 30
}

// module.exports = user

module.exports = {
  user: user,
  sayHello() {
    console.log('HEllo ' + user.name)
  }
}