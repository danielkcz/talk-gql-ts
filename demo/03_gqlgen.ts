import { request, print } from './lib/request'
import { RedditQuery } from './lib/queries'
import { GReddit } from './types/gqlgen'

const req = request<GReddit.Query, GReddit.Variables>(RedditQuery, {
  subreddit: 'movies',
  username: 'cnrnd',
})

print(req)
