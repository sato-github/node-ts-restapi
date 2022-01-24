export default {
  port: 8080,
  host: '0.0.0.0',
  // dbUri: 'mongodb://localhost:27017/rest-api', //  localhost
  dbUri: 'mongodb://host.docker.internal:27017/rest-api', // for docker
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `MIICXAIBAAKBgQCh0O7DpfOzj2EcxuaM5aQ50BkOUOew8CmGNlrBzZGY9J51Zmoa`,
};
