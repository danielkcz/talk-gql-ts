/* tslint:disable */

/** Parse user provided identity */
export type UserIdentity = any

export interface SetValueForKeyInput {
  id: string
  value: string
  clientMutationId: string
}
/** The type of item */
export enum ItemType {
  job = 'job',
  story = 'story',
  comment = 'comment',
  poll = 'poll',
  pollopt = 'pollopt',
}
/** Time interval by which listings are queried */
export enum TimeInterval {
  hour = 'hour',
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
  all = 'all',
}
/** Either user unique ID, or screen name */
export enum UserIdentifier {
  id = 'id',
  name = 'name',
}
/** Type of search response. */
export enum SearchReponse {
  mixed = 'mixed',
  recent = 'recent',
  popular = 'popular',
}
/** The rating of a GIF */
export enum GiphyRatingType {
  y = 'y',
  g = 'g',
  pg = 'pg',
  pg13 = 'pg13',
  r = 'r',
}

export namespace GReddit {
  export type Variables = {
    subreddit: string
    username: string
    limit?: number | null
  }

  export type Query = {
    __typename?: 'Query'
    reddit?: Reddit | null
  }

  export type Reddit = {
    __typename?: 'RedditAPI'
    user?: User | null
    subreddit?: Subreddit | null
  }

  export type User = GRedditUser.Fragment

  export type Subreddit = {
    __typename?: 'RedditSubreddit'
    newListings: (NewListings | null)[]
    topListings: (TopListings | null)[]
  }

  export type NewListings = {
    __typename?: 'RedditLink'
    title: string
    comments: (Comments | null)[]
  }

  export type Comments = {
    __typename?: 'RedditComment'
    body: string
    author: Author
  }

  export type Author = GRedditUser.Fragment

  export type TopListings = {
    __typename?: 'RedditLink'
    title: string
  }
}

export namespace GNews {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'
    hn?: Hn | null
  }

  export type Hn = {
    __typename?: 'HackerNewsAPI'
    topStories?: (TopStories | null)[] | null
  }

  export type TopStories = {
    __typename?: 'HackerNewsItem'
    text?: string | null
  }
}

export namespace GRedditUser {
  export type Fragment = {
    __typename?: 'RedditUser'
    username: string
    commentKarma: number
    createdISO: string
  }
}
