const jwkEndpoint = {
    "keys": [
        {
            "kty": "RSA",
            "n": "1M7YdLp1Ps36Y0XvrhJAzp1Qa-YoztngZle59vH4WnKsFEqPveW4mxXp9Rungr9y9Oj9tu02iSmqKOkM5KOYchdub0fyaX8QjaSkI-yX6cOlDPycnQTumaZRTOmFYb3KSL-GJ_cWdWsRM5RntBWjJHm6WqsNxEA0jPbJEJJ0RseKlvwko26IlB5faP_KNlKs8HgrZwND4dVZxBoghNm3viUhR_ZHrvI4hf_VnyqyCE_ZBbAwmADF-nQiZjmnNrm9ulpQS-bTPNA_lcswPCRi0xJNkqqyAEIqxntEbXaatO12-XWPDk3Zd_qw84mOLWU5Nsy7rU4gBJZfDnr5jZfsqw",
            "e": "AQAB"
        }
    ]
  };

export default function handler(req, res) {
  return res.json(jwkEndpoint);
}
