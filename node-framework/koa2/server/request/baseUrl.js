let http, cas;
if (process.env.NODE_ENV === 'development') {  // 如果是开发环境
  http = 'http://192.168.11.121:8086';
  cas = 'https://cas.qloudid.com:8443'
} else if (process.env.NODE_ENV === 'production') {  // 如果是生产环境
  http = process.env.host;
  cas = 'https://cas.qloudid.com:8443'
}
module.exports = {
  itg: http,
  cas: cas
};
