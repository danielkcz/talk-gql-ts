import { request, print } from './lib/request'
import { RedditQuery } from './lib/queries'
import { GReddit, GRedditVariables } from './types/apollo'

const req = request<GReddit, GRedditVariables>(RedditQuery, {
  subreddit: 'movies',
  username: 'cnrnd',
})

print(req)
