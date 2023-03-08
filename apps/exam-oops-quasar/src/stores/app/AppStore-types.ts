/**
 * @author Shin-BeomChul
 */

export interface User {
  name: string;
  isLogin: boolean;
}

export interface Auth {
  jwtToken: string;
  username: string;
  iss: string;
  iat: number;
  exp: number;
}

export interface AppConfig {
  isAutoLogin: boolean;
  isHttpCache: boolean;
  isStoreCache: boolean;
}
