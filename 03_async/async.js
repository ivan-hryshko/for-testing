const axios = require('axios')
class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error('error'))
        }
      }, 250)
    })
  }

  static async get() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log('response :>> ', response);
      return response.data
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}

module.exports = Ajax