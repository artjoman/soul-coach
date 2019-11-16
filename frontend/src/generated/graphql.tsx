import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** Communitites object */
export type Communities = {
   __typename?: 'communities',
  communityId?: Maybe<Scalars['Int']>,
  languageId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
};

/** Community member object */
export type CommunityMembers = {
   __typename?: 'communityMembers',
  communtyMemberId?: Maybe<Scalars['Int']>,
  communtyId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['String']>,
};

/** Consultant object */
export type Consultants = {
   __typename?: 'consultants',
  consultantId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  communityId?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['String']>,
};

/** Feedback object */
export type Feedback = {
   __typename?: 'feedback',
  feedbackId?: Maybe<Scalars['Int']>,
  consultantId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  communityId?: Maybe<Scalars['Int']>,
  rating?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['String']>,
};

/** Interaction object */
export type Interactions = {
   __typename?: 'interactions',
  interactionId?: Maybe<Scalars['Int']>,
  consultantId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
};

/** Language object */
export type Language = {
   __typename?: 'language',
  languageId?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
};

/** Data update functions */
export type Mutation = {
   __typename?: 'mutation',
  addUser?: Maybe<Users>,
  updateUser?: Maybe<Users>,
  addProperty?: Maybe<UserProperties>,
  updateProperty?: Maybe<UserProperties>,
  addStream?: Maybe<Streams>,
  updateStream?: Maybe<Streams>,
  addCommunity?: Maybe<Communities>,
  updateCommunity?: Maybe<Communities>,
  addConsultant?: Maybe<Consultants>,
  updateConsultant?: Maybe<Consultants>,
  addCommunityMember?: Maybe<CommunityMembers>,
  updateCommunityMember?: Maybe<CommunityMembers>,
  addNews?: Maybe<News>,
  updateNews?: Maybe<News>,
  addFeedback?: Maybe<Feedback>,
  addInteraction?: Maybe<Interactions>,
};


/** Data update functions */
export type MutationAddUserArgs = {
  email: Scalars['String'],
  defaultLanguage: Scalars['Int'],
  consent: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateUserArgs = {
  userId: Scalars['Int'],
  email: Scalars['String'],
  defaultLanguage: Scalars['Int'],
  consent: Scalars['String'],
  online: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddPropertyArgs = {
  userId: Scalars['Int'],
  key: Scalars['String'],
  value: Scalars['String'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdatePropertyArgs = {
  userPropertiesId: Scalars['Int'],
  key: Scalars['String'],
  value: Scalars['String'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddStreamArgs = {
  communityId: Scalars['Int'],
  consultantId: Scalars['Int'],
  streamLink: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateStreamArgs = {
  streamId: Scalars['Int'],
  streamLink: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddCommunityArgs = {
  languageId: Scalars['Int'],
  userId: Scalars['Int'],
  image?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateCommunityArgs = {
  communityId: Scalars['Int'],
  image?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddConsultantArgs = {
  userId: Scalars['Int'],
  communityId: Scalars['Int'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateConsultantArgs = {
  consultantId: Scalars['Int'],
  communityId: Scalars['Int'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddCommunityMemberArgs = {
  userId: Scalars['Int'],
  communityId: Scalars['Int'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateCommunityMemberArgs = {
  communityMemberId: Scalars['Int'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddNewsArgs = {
  languageId: Scalars['Int'],
  userId: Scalars['Int'],
  title: Scalars['String'],
  content: Scalars['String'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationUpdateNewsArgs = {
  newsId: Scalars['Int'],
  userId: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddFeedbackArgs = {
  consultantId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  communityId?: Maybe<Scalars['Int']>,
  rating: Scalars['Int'],
  active?: Maybe<Scalars['String']>
};


/** Data update functions */
export type MutationAddInteractionArgs = {
  consultantId: Scalars['Int'],
  userId: Scalars['Int']
};

/** News object */
export type News = {
   __typename?: 'news',
  newsId?: Maybe<Scalars['Int']>,
  languageId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
  firstPage?: Maybe<Scalars['String']>,
};

/** Root query object */
export type Query = {
   __typename?: 'query',
  users?: Maybe<Array<Maybe<Users>>>,
  userProperties?: Maybe<Array<Maybe<UserProperties>>>,
  streams?: Maybe<Array<Maybe<Streams>>>,
  consultants?: Maybe<Array<Maybe<Consultants>>>,
  communities?: Maybe<Array<Maybe<Communities>>>,
  communityMembers?: Maybe<Array<Maybe<CommunityMembers>>>,
  language?: Maybe<Array<Maybe<Language>>>,
  news?: Maybe<Array<Maybe<News>>>,
  interactions?: Maybe<Array<Maybe<News>>>,
};


/** Root query object */
export type QueryUsersArgs = {
  userId?: Maybe<Scalars['Int']>,
  password?: Maybe<Scalars['String']>
};


/** Root query object */
export type QueryUserPropertiesArgs = {
  userId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryStreamsArgs = {
  consultantId?: Maybe<Scalars['Int']>,
  streamId?: Maybe<Scalars['Int']>,
  communityId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryConsultantsArgs = {
  communityId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryCommunitiesArgs = {
  communityId?: Maybe<Scalars['Int']>,
  languageId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryCommunityMembersArgs = {
  communityId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryNewsArgs = {
  languageId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
};


/** Root query object */
export type QueryInteractionsArgs = {
  userId?: Maybe<Scalars['Int']>,
  consultantId?: Maybe<Scalars['Int']>
};

/** Stream object */
export type Streams = {
   __typename?: 'streams',
  streamId?: Maybe<Scalars['Int']>,
  consultantId?: Maybe<Scalars['Int']>,
  communityId?: Maybe<Scalars['Int']>,
  streamLink?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
};

/** User property object */
export type UserProperties = {
   __typename?: 'userProperties',
  userPropertiesId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>,
  key?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
};

/** Users object */
export type Users = {
   __typename?: 'users',
  userId?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  defaultLanguage?: Maybe<Scalars['Int']>,
  consent?: Maybe<Scalars['String']>,
  active?: Maybe<Scalars['String']>,
};


