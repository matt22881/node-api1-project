const shortid = require('shortid')

let x = 2

let users = [
  { id: shortid.generate(), name: 'Captain', bio: 'Biography' },
  { id: shortid.generate(), name: 'Admiral', bio: 'Biographical Stuff' },
  { id: shortid.generate(), name: 'Lieutenant', bio: 'More Biographical Stuff' },
  { id: shortid.generate(), name: 'Ensign', bio: 'No Biographical Stuff Yet' }
]

module.exports = {
  findAll() {
    console.log('\n ---Users--- \n', users, '\n ---End Users--- \n')
    return Promise.resolve(users)
  },

  findById(id) {
    console.log('id given: ', id)
    const user = users.find(d => d.id == id)
    console.log('user: ', user)
    return Promise.resolve(user)
  },

  create({ name, bio }) {
    const newUser = { id: shortid.generate(), name, bio }
    users.push(newUser)
    return Promise.resolve(newUser)
  },

  update(id, changes) {
    const user = users.find(user => user.id === id)
    if (!user) return Promise.resolve(null)

    const updatedUser = { ...changes, id }
    users = users.map(d => (d.id === id) ? updatedUser : d)
    return Promise.resolve(updatedUser)
  },

  delete(id) {
    const user = users.find(user => user.id === id)
    if (!user) return Promise.resolve(null)
      else {
        delUser = users.filter(d => (d.id !== id))

        return Promise.resolve(delUser)
      }
  },
  
  modify(id, changes) {
    const user = users.find(user => user.id === id);
    if (!user) return Promise.resolve(null)

    const updatedUser = { ...user, ...changes, id }
    users = users.map(d => (d.id === id) ? updatedUser : d)
    return Promise.resolve(updatedUser)
  }
}
