import gql from 'graphql-tag'

export const RedditQuery = gql`
  query GReddit($subreddit: String!, $username: String!, $limit: Int = 2) {
    reddit {
      user(username: $username) {
        ...GRedditUser
      }
      subreddit(name: $subreddit) {
        newListings(limit: $limit) {
          title
          comments {
            body
            author {
              ...GRedditUser
            }
          }
        }
        topListings(timeInterval: hour) {
          title
        }
      }
    }
  }
  fragment GRedditUser on RedditUser {
    username
    commentKarma
    createdISO
  }
`

export const NewsQuery = gql`
  query GNews {
    hn {
      topStories(limit: 2) {
        text
      }
    }
  }
`
