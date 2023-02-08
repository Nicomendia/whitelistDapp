const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
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
            "n": "1M7YdLp1Ps36Y0XvrhJAzp1Qa-YoztngZle59vH4WnKsFEqPveW4mxXp9Rungr9y9Oj9tu02iSmqKOkM5KOYchdub0fyaX8QjaSkI-yX6cOlDPycnQTumaZRTOmFYb3KSL-GJ_cWdWsRM5RntBWjJHm6WqsNxEA0jPbJEJJ0RseKlvwko26IlB5faP_KNlKs8HgrZwND4dVZxBoghNm3viUhR_ZHrvI4hf_VnyqyCE_ZBbAwmADF-nQiZjmnNrm9ulpQS-bTPNA_lcswPCRi0xJNkqqyAEIqxntEbXaatO12-XWPDk3Zd_qw84mOLWU5Nsy7rU4gBJZfDnr5jZfsqw",
            "e": "AQAB"
        }
    ]
  };

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json');
    return res.json(jwkEndpoint);
}

module.exports = allowCors(handler)
