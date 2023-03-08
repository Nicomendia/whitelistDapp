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
      "kid": "1bb9605c36e98e30117a69517569386830202b2d",
      "n": "pAbfKmQ1ljT6yZcrdxaJxqsB7EupbBFcCLiMzmuFQMuk3y_g-vVPR8ZwTJbalwBxD-vUPmxmZAVok_iNthw1mnW0POg3kEwtl1qambgNKlaTeO8S3D-KGlUNV6bU-JXbyquds7v8bQjmIQ5oXhwIQt6x55bEyZTOCQDl3ZHy1XxeBWFyiPUXXnqkO51EFeVNiMi8Ihue16UY_lIizhivl2C_UwJ0Ymx9eWJ-nefPBo7Lr_fIxh81NaLMB6t5L8123RSIaaIcR_r1H_ZbEe9VNTfnGdYS3A0u-pNS_bm5jRSBo1qt01OFu0xEsjcO7-NESTBr8w8SUqGK86tg9oQz5w",
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "MFqurkGGV-lT3fbgJy6uDjQ8b4l1CsSMiinOGvB0D6E",
      "n": "zZXLEHaBh6jDL_sFBG_KX7UlpjsoLbbI5ncyuD6q3Yp25uHu2yNDjsv1vleUYxjTgS9JMwEDWMb85hj6PbelOdZo4v8shPt7SoIU7KXJDkDNUaIXSBqQkKF5TpvoEOZOnpDcIu5CzMamm9AhILufAhQbLThMsJ7xoukHmeUpn8nINBJJ2LWl0HFN2Q9EsZvQ7PuO5-5Oa8SY0m7BPgVEJH0eTUH6s7DPI5hBKx0fXT1qLSIwslkr0xLP2uCQ6uSPJPoxeNL6aFOKJTftKQDM-vRb6rE3KjeMN4V55jVGvmmjHRMkF81wR26iJxWM1Gg1g0USmTc7aMUl3C8ZesIcLQ",
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "alg": "RS256",
      "kid": "c53624af1600da79f31f0314f205d4f37ad6e246",
      "use": "sig",
      "n": "sinuWOLB7u0NoJ5Cy92AUqC7clH0ErjTjrI_b_dBbndg0rrFZryKfbvH4ncZW_yQ9izl2mjLsjsBzVwAyzWIn83QRhTtisdV7k9AkhSGdNu-cG_qPkedhqFPIn_uyBnVpxksp8clMRALetdHncUqcTfhIpngQp_JxFHle0fNsylU510fH-iZfphLO9mMpq6eB5QGynttgpdsLxLuXe1CffNQya0pmtLkU4ATfVdXV_bMqzRxxbDOnzIaLjzUJdsMuScCTjQX93xdfzEu-Vk6zOpdkrBRUuopgAX1e8NPQz150XEOTInkh0Mfhw0t1GeB7zbbjYJDmCgYTIW1g4teBw"
    }
  ]
};

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json');
    return res.json(jwkEndpoint);
}

module.exports = allowCors(handler)
