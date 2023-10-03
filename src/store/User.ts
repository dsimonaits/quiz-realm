import { makeAutoObservable, observable, action } from "mobx";

interface IUser {
  name: string;
  email: string;
  level: number;
}

class UserStore {
  static instance: UserStore | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserStore();
    }
    return this.instance;
  }

  user: IUser = {
    name: "Deniss",
    email: "dsimonaits@gmail.com",
    level: 5,
  };

  userData = {
    totalGamesPlayed: 0,
    totalGoodAnswers: 0,
    totalBadAnswers: 0,
  };

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      userData: observable,
      setPlayedGames: action,
      setUserResult: action,
    });
  }

  setPlayedGames() {
    this.userData.totalGamesPlayed += 1;
  }

  setUserResult(result: boolean) {
    result
      ? (this.userData.totalGoodAnswers += 1)
      : (this.userData.totalBadAnswers += 1);
  }
}

export default UserStore.getInstance();
