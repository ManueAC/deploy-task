import { Auth, AUTH_STRATEGIES } from '@8base/auth';

console.log('ENV: ', process.env);
// console.log('DOMAIN: ', domain);
export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0,
    // subscribable: true,
  },
  {
    domain: 'dev--awjecdv.us.auth0.com',
    clientId: 'VjauOM0zdsHUpNvWziKOuPDyXM7PsxSx',
    redirectUri: `${window.location.origin}/auth/callback`,
    logoutRedirectUri: `${window.location.origin}/logout`,
  },
);
