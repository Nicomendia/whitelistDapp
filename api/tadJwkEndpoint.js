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
            "kid": "hc0vYUBYtaHCmV6mPEsOoGG4ik0Y7p7nUvZ0GPY8PV0",
            "alg": "RS256",
            "n": "iod0Ar6zhY33VuxnJXQo52LqfqdWpz1rlUaNj-rJGcFqMDypxeUeqnIRXlhDxIlcvItu_CS_nDiQwz3h5D3orbdoqdLUiSXDEc3AkK9FVXCfMS-ze--RW--TaY05cbLxhH3TynB8AlwWjtnQEYkdnai8jsEKKZuZbwyfzrs7aS8AucOOPL2SIldVHuZ3zuz7Dl8ciNoxWMkrYLTDwcgPJiteq4rhgPnez1SgmKI44lz_BH70M0psLy2gYn5Eu47GFoY4V8RcQpCvvg5mAEQpyNsnDetPvXDwjqEFmHK1WwiPgKiI2Gan-GENCX0qdm43mg84NVdp8gG5tfpracVrJw"
        }
    ]
  };

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json');
    return res.json(jwkEndpoint);
}

module.exports = allowCors(handler)
