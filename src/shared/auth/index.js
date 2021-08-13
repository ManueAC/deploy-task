import { Auth, AUTH_STRATEGIES } from '@8base/auth';

export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0,
    
  },
  {
    domain: 'dev--awjecdv.us.auth0.com',
    clientId: 'VjauOM0zdsHUpNvWziKOuPDyXM7PsxSx',
    redirectUri: `${window.location.origin}`,
    logoutRedirectUri: `${window.location.origin}`,
  },
);
