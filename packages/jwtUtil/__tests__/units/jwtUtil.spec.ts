import { JwtUtil, BaseJwtToken } from "../../src/index";
interface AppJwtToken extends BaseJwtToken {
  authorities: string[];
}
const mockToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJzYmMwODMwbmV3Iiwic2NvcGUiOlsib3BlbmlkIl0sIm5hbWUiOiLsi6DrspTssqAiLCJleHAiOjE2MTU4MTU4ODQsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfREVOVElTVCJdLCJqdGkiOiJmY2U3MzU4OC1kZjBhLTQwNDUtOTBjMy01Njk3MDUxN2JhOTQiLCJjbGllbnRfaWQiOiJkdHYtd2ViYXBwIn0.kfqdjUK0TSjwWKysDJYTNJdARpTzro3Jga4g45jqPqopdPIb1OR1JkdZyXi_yx20eyXmIriKVKsejqDDMr6hzTPz8uCl-gwEYNk8C8tLWA23dzgnjKZUIrMIxm0t4hB0xQPRxVJVBcj2_JqGr5xuziMJ_Kh7s1XzU24kyGcuXSk2W-MzBdqGzUtXl0LQXI96m1l4mL5SAiBSrsUYHPPfshjwKjHZrEi-60eU1e3dpdQ3PBKsYtF_aKa_UMRtSnqCqDSJoVqnAwT-e0yLoLXsxmF6tvTeAdteqYFnkqSj3sr4x6OqcRLrYSXTChyxEloS7oe_vn5hLdrpD92tgwKDuw";
const jwtTokenUtil = new JwtUtil<AppJwtToken>();

describe("jwtUtil Jnit Test", () => {
  test("Parse Test", () => {
    const parsedJwToken = jwtTokenUtil.to(mockToken);
    return expect(parsedJwToken.authorities).toEqual([
      "ROLE_USER",
      "ROLE_DENTIST"
    ]);
  });

  test("만료 테스트", () => {
    const isTokenExpire = jwtTokenUtil.isTokenExpire(mockToken);
    return expect(isTokenExpire).toEqual(true);
  });

  test("만료일 가져오기", () => {
    const expireDate: Date | undefined =
      jwtTokenUtil.getTokenExpireDate(mockToken);
    console.log("expireDate Print :", expireDate);
    return expect(expireDate?.getFullYear()).toEqual(2021);
  });

  test("BaseJwtToken 멤버 확인(exp)", () => {
    const parsedJwToken: AppJwtToken = jwtTokenUtil.to(mockToken);
    return expect(parsedJwToken.exp).toEqual(1615815884);
  });
});

/**
     {
     "user_name": "sbc0830new",
    "scope": [
        "openid"
    ],
    "name": "신범철",
    "exp": 1615815884,
    "authorities": [
        "ROLE_USER",
        "ROLE_DENTIST"
    ],
    "jti": "fce73588-df0a-4045-90c3-56970517ba94",
    "client_id": "dtv-webapp"
    }
 */
