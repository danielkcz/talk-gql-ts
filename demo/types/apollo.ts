

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GReddit
// ====================================================

export interface GReddit_reddit_user {
  /**
   * The user's unique username.
   */
  username: string;
  /**
   * Karma by comments of the user
   */
  commentKarma: number;
  /**
   * Creation date of the user, in ISO8601
   */
  createdISO: string;
}

export interface GReddit_reddit_subreddit_newListings_comments_author {
  /**
   * The user's unique username.
   */
  username: string;
  /**
   * Karma by comments of the user
   */
  commentKarma: number;
  /**
   * Creation date of the user, in ISO8601
   */
  createdISO: string;
}

export interface GReddit_reddit_subreddit_newListings_comments {
  /**
   * Body of the comment
   */
  body: string;
  /**
   * Author of the comment
   */
  author: GReddit_reddit_subreddit_newListings_comments_author;
}

export interface GReddit_reddit_subreddit_newListings {
  /**
   * Title of the link
   */
  title: string;
  /**
   * Comments on the link
   */
  comments: (GReddit_reddit_subreddit_newListings_comments | null)[];
}

export interface GReddit_reddit_subreddit_topListings {
  /**
   * Title of the link
   */
  title: string;
}

export interface GReddit_reddit_subreddit {
  /**
   * Newest listings of the subreddit
   */
  newListings: (GReddit_reddit_subreddit_newListings | null)[];
  /**
   * Top listings of the subreddit
   */
  topListings: (GReddit_reddit_subreddit_topListings | null)[];
}

export interface GReddit_reddit {
  user: GReddit_reddit_user | null;
  subreddit: GReddit_reddit_subreddit | null;
}

export interface GReddit {
  reddit: GReddit_reddit | null;
}

export interface GRedditVariables {
  subreddit: string;
  username: string;
  limit?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GNews
// ====================================================

export interface GNews_hn_topStories {
  /**
   * The comment, story or poll text. HTML.
   */
  text: string | null;
}

export interface GNews_hn {
  /**
   * Up to 500 of the top stories
   */
  topStories: (GNews_hn_topStories | null)[] | null;
}

export interface GNews {
  hn: GNews_hn | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GRedditUser
// ====================================================

export interface GRedditUser {
  /**
   * The user's unique username.
   */
  username: string;
  /**
   * Karma by comments of the user
   */
  commentKarma: number;
  /**
   * Creation date of the user, in ISO8601
   */
  createdISO: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================