import dayjs from "dayjs";
import jwtDecode from "jwt-decode";

export interface BaseJwtToken {
  exp: number;
}
/**
 * @author Shin-BeomChul
 * @description jwtToken Utils
 * @since 22-05-11
 */
class JwtUtil<T extends BaseJwtToken> {
  /** 토큰만료 여부 */
  isTokenExpire(token: string): boolean {
    if (token == undefined) return true;
    const decodedToken = jwtDecode<T>(token);
    const exp: number = decodedToken == undefined ? 0 : decodedToken.exp;
    return dayjs().isAfter(dayjs.unix(exp));
  }

  /** 토큰 만료일 */
  getTokenExpireDate(token?: string): Date | undefined {
    if (token == undefined) return undefined;
    const decodedToken = jwtDecode<T>(token);
    const exp: number = token == undefined ? 0 : decodedToken.exp;
    return dayjs.unix(exp).toDate();
  }
  to(token: string): T {
    return jwtDecode<T>(token);
  }
}
export default JwtUtil;
