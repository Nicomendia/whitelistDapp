const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  //res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const jwkEndpoint = {
    "keys": [
        {
            "kty": "RSA",
            "e": "AQAB",
            "use": "sig",
            "kid": "MFqurkGGV-lT3fbgJy6uDjQ8b4l1CsSMiinOGvB0D6E",
            "alg": "RS256",
            "n": "zZXLEHaBh6jDL_sFBG_KX7UlpjsoLbbI5ncyuD6q3Yp25uHu2yNDjsv1vleUYxjTgS9JMwEDWMb85hj6PbelOdZo4v8shPt7SoIU7KXJDkDNUaIXSBqQkKF5TpvoEOZOnpDcIu5CzMamm9AhILufAhQbLThMsJ7xoukHmeUpn8nINBJJ2LWl0HFN2Q9EsZvQ7PuO5-5Oa8SY0m7BPgVEJH0eTUH6s7DPI5hBKx0fXT1qLSIwslkr0xLP2uCQ6uSPJPoxeNL6aFOKJTftKQDM-vRb6rE3KjeMN4V55jVGvmmjHRMkF81wR26iJxWM1Gg1g0USmTc7aMUl3C8ZesIcLQ"
        }
    ]
  };

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json');
    return res.json(jwkEndpoint);
}

module.exports = allowCors(handler)
