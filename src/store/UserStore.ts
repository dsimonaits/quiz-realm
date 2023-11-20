import { makeAutoObservable, observable, action } from "mobx";

interface IUser {
  name: string;
  email: string;
}

interface IResult {
  good: number;
  fault: number;
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
  };

  userProgress = {
    totalGamesPlayed: 0,
    totalQuestionsAnsweredGames: 0,
    totalGoodAnswers: 0,
    totalBadAnswers: 0,
    currentLevel: 0,
    averageScore: 0,
  };

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      userProgress: observable,
      setPlayedGames: action,
      setUserResult: action,
    });
  }

  setPlayedGames() {
    this.userProgress.totalGamesPlayed += 1;
  }

  setUserResult(result: IResult) {
    if (result) {
      this.userProgress.totalGoodAnswers += result.good;
      this.userProgress.totalBadAnswers += result.fault; // Now TypeScript can properly narrow down the type
    }
  }
}

export default UserStore.getInstance();
