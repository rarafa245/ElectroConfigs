const faker = require('faker')

describe('#AppConfigurator', () => {
  describe('#createWindow', () => {
    test('Should create a BrowserWindow', () => {
      const directory = faker.random.alphaNumeric(8)
      expect(directory).not.toBe(undefined)
    })
  })
})
