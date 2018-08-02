import { request, print } from './lib/request'
import { RedditQuery } from './lib/queries'

const req = request(RedditQuery, {
  subreddit: 'movies',
  username: 'cnrnd',
})

print(req)
