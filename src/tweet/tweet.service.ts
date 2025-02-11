import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly usersService: UsersService) {}

  tweets: { text: string; date: Date; userId: number }[] = [
    { text: 'tweet 1', date: new Date('2024-12-02'), userId: 1 },
    { text: 'tweet 2', date: new Date('2024-12-02'), userId: 1 },
    { text: 'tweet 3', date: new Date('2024-12-02'), userId: 3 },
  ];

  getTweets(userId: number) {
    const tweet = this.tweets.filter((x) => x.userId === userId);
    // verify if user have undifined as value

    const response = tweet.map((t) => {
      return {
        text: t.text,
        date: t.date,
      };
    });
    return response;
  }
}
