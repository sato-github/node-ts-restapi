export default {
  port: 8881,
  host: 'localhost',
  dbUri: 'mongodb://localhost:27017/rest-api',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `
  -----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCh0O7DpfOzj2EcxuaM5aQ50BkOUOew8CmGNlrBzZGY9J51Zmoa
Mm6v+DT2mpUXy2u4epJbQTx80ABdFllrCXT/6AczOmg2BykMe1BlKBBH2MX3+/0Z
Do9+BHQV/6aKbqovvMUoPU6kqCAAYACcuGX4ys11/3CAF8ll0oZAQRJTAwIDAQAB
AoGALoR5nxTd8giNylADhw2dIGGKUms/r8XaqhKGFKCb8nSf+O/wIIfO+hdIYnwd
0DFSTj4uRL2EPf0tnZUHL5YQY+suqaLA+CP4T98RAsTVgOGp6cON+C9i3GamJUHv
4t77hSADj63iI4nbp/f90fZ2ulDaWj6oA5NapcQxzF2aEQECQQDfjiPPAxwuYsp+
YDubqeMrhwZi2pSBSSgZaMuMvDyMjeGh0ESc/IG0yCnybObBB6EfyqOtGq5wGrVO
rnrQ8ZVzAkEAuUz4Iy3ywS3o95l/46+w/7cEHMeyyZCHk2SzrJFRfGJ4/ubC/sK8
R2IH8qls27+DlynN9bAfVU7nwLk3sepoMQJAVnSA8rEQN/wqtX7/7m5gFVhNpvND
VVB2eoUlmxK9E9pW9R43OsMIYmK6ni9xehs6O7JBZFOaPG6HyZr+kkmrcwJAYnE6
rm3dtrVuPARHhi2zidawD54kJKNs82gfcEFvmfYys7DizTelkQLKmCdcVs5C2Y7z
BWCA9PBLfP6pURLoMQJBAMWQAVRpQ0RkPYh7Fa27Ln5/qlIYXyR4VoMwAOhr/no6
sjEin1z8sgK4Y821cVH3WgsExBMJ+EArUuPPik5b2X4=
-----END RSA PRIVATE KEY-----`,
};
