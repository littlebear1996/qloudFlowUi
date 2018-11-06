const request = require('request');
const baseUrl = require('./baseUrl');
module.exports = {
  post(url, data) {
    const options = {
      // url: url,
      method: "POST",
      json: true,
      // headers: header,
      // "content-type": "application/x-www-form-urlencoded"
      // "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      // form: JSON.stringify(data)
      body: JSON.stringify(data)
      // body: JSON.stringify({
      //   'userName': ctx.request.body.name,
      //   'password': ctx.request.body.password
      // })
    };
    options.url = `${baseUrl.itg}/${url}`;
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body)
        }
        // if (error) {
        //   reject(error);
        // } else {
        //   resolve(body);
        // }
      })
    })
  },
  get (url) {
    let requestUrl = `${baseUrl.itg}/${url}`;
    return new Promise((resolve, reject) => {
      request(requestUrl, (error, response, body) => {
        // if (!error && response.statusCode === 200) {
          resolve(body)
        // }
      })
    })
  },
  getCas (url) {
    let requestUrl = `${baseUrl.cas}/${url}`;
    return new Promise((resolve, reject) => {
      request(requestUrl, (error, response, body) => {
        // if (!error && response.statusCode === 200) {
          resolve(body)
        // }
      })
    })
  },
  delete(url, data) {
    const options = {
      url: `${baseUrl.itg}/${url}`,
      method: "DELETE",
      json: true,
      body: JSON.stringify(data)
    };
    return new Promise((resolve, reject) => {
      request(options, function (err, response, body) {
        resolve(body)
        // if (!error && response.statusCode == 200) {
        //   resolve(body)
        // }
      })
    })
  },
  put(url, data) {
    const options = {
      url: `${baseUrl.itg}/${url}`,
      method: "PUT",
      json: true,
      body: JSON.stringify(data)
    };
    return new Promise((resolve, reject) => {
      request(options, function (err, response, body) {
        resolve(body)
        // if (!error && response.statusCode == 200) {
        //   resolve(body)
        // }
      })
    })
  }
};