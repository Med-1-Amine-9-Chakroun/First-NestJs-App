import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  //localhost:3000/tweet
  @Get()
  public getAllTweest() {}

  @Get(':userid')
  public getTweest(@Param('userid', ParseIntPipe) userid: number) {
    return this.tweetService.getTweets(userid);
  }
}
