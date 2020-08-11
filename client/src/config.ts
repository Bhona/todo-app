// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'mh16w66flh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/devel`

export const authConfig = {
  domain: 'bhona.auth0.com', // Auth0 domain
  clientId: 'AhgaFb7YwmLaT7bmqvAVhhJGx42m1g0B', // Auth0 client id
  callbackUrl: 'http://134.122.20.151:3000/callback'
}
