interface Employ {
  age: number;
  loginId: string;
  name?: string;
  createDate: Date;
  isIntern: boolean;
  unknow: unknown;
}

const employs: Employ[] = [
  {
    age: 21,
    loginId: "loginJahen",
    createDate: new Date(),
    isIntern: false,
    unknow: 1
  },
  {
    age: 22,
    loginId: "loginYeonSu",
    createDate: new Date(),
    isIntern: false,
    unknow: "와일드카드 unknown"
  },
  {
    age: 23,
    loginId: "loginGodBeom",
    createDate: new Date(),
    isIntern: false,
    unknow: undefined
  },
  {
    age: 24,
    loginId: "loginLoha",
    createDate: new Date(),
    isIntern: false,
    unknow: true
  },
  {
    age: 28,
    loginId: "yuJin",
    createDate: new Date(),
    isIntern: false,
    unknow: true
  }
];
export { employs, Employ };
