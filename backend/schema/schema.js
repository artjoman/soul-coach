var {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

var db = require('../db/db');

const Users = new GraphQLObjectType({
    name: 'users',
    description: 'Users object',
    fields: () => {
        return {
                userId: {
                    type: GraphQLInt,
                    resolve (users) {
                        return users.userId;
                    }
                },
                email: {
                    type: GraphQLString,
                    resolve (users) {
                        return users.email
                    }
                },
                defaultLanguage: {
                    type: GraphQLInt,
                    resolve (users) {
                        return users.defaultLanguageId
                    }
                },
                consent: {
                    type: GraphQLString,
                    resolve (users) {
                        return users.consent
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (users) {
                        return users.active
                    }
                }
            }
        }
})

const UserProperties = new GraphQLObjectType({
    name: 'userProperties',
    description: 'User property object',
    fields: () => {
        return {
                userPropertiesId: {
                    type: GraphQLInt,
                    resolve (userProperties) {
                        return userProperties.userPropertiesId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (userProperties) {
                        return userProperties.userId
                    }
                },
                key: {
                    type: GraphQLString,
                    resolve (userProperties) {
                        return userProperties.key
                    }
                },
                value: {
                    type: GraphQLString,
                    resolve (userProperties) {
                        return userProperties.value
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (userProperties) {
                        return userProperties.active
                    }
                }
            }
        }
})

const Streams = new GraphQLObjectType({
    name: 'streams',
    description: 'Stream object',
    fields: () => {
        return {
                streamId: {
                    type: GraphQLInt,
                    resolve (streams) {
                        return streams.streamId;
                    }
                },
                consultantId: {
                    type: GraphQLInt,
                    resolve (streams) {
                        return streams.consultantId
                    }
                },
                communityId: {
                    type: GraphQLInt,
                    resolve (streams) {
                        return streams.communityId
                    }
                },
                streamLink: {
                    type: GraphQLString,
                    resolve (streams) {
                        return streams.streamLink
                    }
                },
                name: {
                    type: GraphQLString,
                    resolve (streams) {
                        return streams.name
                    }
                },
                description: {
                    type: GraphQLString,
                    resolve (streams) {
                        return streams.description
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (streams) {
                        return streams.active
                    }
                }
            }
        }
})

const Communities = new GraphQLObjectType({
    name: 'communities',
    description: 'Communitites object',
    fields: () => {
        return {
                communityId: {
                    type: GraphQLInt,
                    resolve (communities) {
                        return communities.communityId;
                    }
                },
                languageId: {
                    type: GraphQLInt,
                    resolve (communities) {
                        return communities.languageId
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (communities) {
                        return communities.userId
                    }
                },
                name: {
                    type: GraphQLString,
                    resolve (communities) {
                        return communities.name
                    }
                },
                description: {
                    type: GraphQLString,
                    resolve (communities) {
                        return communities.description
                    }
                },
                image: {
                    type: GraphQLString,
                    resolve (communities) {
                        return communities.image
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (communities) {
                        return communities.active
                    }
                }
            }
        }
})

const Consultants = new GraphQLObjectType({
    name: 'consultants',
    description: 'Consultant object',
    fields: () => {
        return {
                consultantId: {
                    type: GraphQLInt,
                    resolve (consultants) {
                        return consultants.consultantId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (consultants) {
                        return consultants.userId;
                    }
                },
                communityId: {
                    type: GraphQLInt,
                    resolve (consultants) {
                        return consultants.communityId;
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (communities) {
                        return communities.active
                    }
                }
            }
        }
})

const Language = new GraphQLObjectType({
    name: 'language',
    description: 'Language object',
    fields: () => {
        return {
                languageId: {
                    type: GraphQLInt,
                    resolve (language) {
                        return language.consultantId;
                    }
                },
                name: {
                    type: GraphQLString,
                    resolve (language) {
                        return language.userId;
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (language) {
                        return language.active
                    }
                }
            }
        }
})

const CommunityMembers = new GraphQLObjectType({
    name: 'communityMembers',
    description: 'Community member object',
    fields: () => {
        return {
                communtyMemberId: {
                    type: GraphQLInt,
                    resolve (communityMembers) {
                        return communityMembers.communtyMemberId;
                    }
                },
                communtyId: {
                    type: GraphQLInt,
                    resolve (communityMembers) {
                        return communityMembers.communtyId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (communityMembers) {
                        return communityMembers.userId;
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (communityMembers) {
                        return communityMembers.active
                    }
                }
            }
        }
})

const News = new GraphQLObjectType({
    name: 'news',
    description: 'News object',
    fields: () => {
        return {
                newsId: {
                    type: GraphQLInt,
                    resolve (news) {
                        return news.newsId;
                    }
                },
                languageId: {
                    type: GraphQLInt,
                    resolve (news) {
                        return news.languageId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (news) {
                        return news.userId;
                    }
                },
                title: {
                    type: GraphQLString,
                    resolve (news) {
                        return news.title
                    }
                },
                content: {
                    type: GraphQLString,
                    resolve (news) {
                        return news.content
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (news) {
                        return news.active
                    }
                },
                firstPage: {
                    type: GraphQLString,
                    resolve (news) {
                        return news.firstPage
                    }
                }
            }
        }
})

const Feedback = new GraphQLObjectType({
    name: 'feedback',
    description: 'Feedback object',
    fields: () => {
        return {
                feedbackId: {
                    type: GraphQLInt,
                    resolve (feedback) {
                        return feedback.feedbackId;
                    }
                },
                consultantId: {
                    type: GraphQLInt,
                    resolve (feedback) {
                        return feedback.consultantId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (feedback) {
                        return feedback.userId;
                    }
                },
                communityId: {
                    type: GraphQLInt,
                    resolve (feedback) {
                        return feedback.communityId;
                    }
                },
                rating: {
                    type: GraphQLInt,
                    resolve (feedback) {
                        return feedback.rating;
                    }
                },
                active: {
                    type: GraphQLString,
                    resolve (feedback) {
                        return feedback.active
                    }
                }
            }
        }
})

const Interactions = new GraphQLObjectType({
    name: 'interactions',
    description: 'Interaction object',
    fields: () => {
        return {
                interactionId: {
                    type: GraphQLInt,
                    resolve (interactions) {
                        return interactions.interactionId;
                    }
                },
                consultantId: {
                    type: GraphQLInt,
                    resolve (interactions) {
                        return interactions.consultantId;
                    }
                },
                userId: {
                    type: GraphQLInt,
                    resolve (interactions) {
                        return interactions.userId;
                    }
                },
            }
        }
})

const Mutation = new GraphQLObjectType ({
    name: 'mutation',
    description: 'Data update functions',
    fields: {
        addUser: {
            type: Users,
            args: {
                email: {
                    type: new GraphQLNonNull (GraphQLString)
                },
                defaultLanguage: {
                    type: new GraphQLNonNull (GraphQLInt)
                },
                consent: {
                    type: new GraphQLNonNull (GraphQLString)
                },
                password: {
                    type: GraphQLString
                },
            },
            resolve(_, args) {
                return db.models.users.create({
                    email: args.email,
                    password: args.password,
                    consent: args.consent,
                    defaultLanguageId: args.defaultLanguage
                })
            }
        },
        updateUser: {
            type: Users,
            args: {
                userId: {
                    type: new GraphQLNonNull (GraphQLInt)
                },
                email: {
                    type: new GraphQLNonNull (GraphQLString)
                },
                defaultLanguage: {
                    type: new GraphQLNonNull (GraphQLInt)
                },
                consent: {
                    type: new GraphQLNonNull (GraphQLString)
                },
                online: {
                    type: new GraphQLNonNull (GraphQLString)
                },
                password: {
                    type: GraphQLString
                },
            },
            resolve(_, args) {
                return db.models.users.update({
                    email: args.email,
                    password: args.password,
                    consent: args.consent,
                    default_language_id: args.defaultLanguage
                }, {
                    where: { userId: args.userId}
                })
            }
        },
            addProperty: {
                type: UserProperties,
                args: {
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    key: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    value: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.userProperties.create({
                        userId: args.userId,
                        key: args.key,
                        value: args.value,
                        active: args.active
                    })
                }
            },
            updateProperty: {
                type: UserProperties,
                args: {
                    userPropertiesId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    key: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    value: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.userProperties.update({
                        value: args.value,
                        active: args.active,
                    }, {
                        where: { userPropertiesId: args.userPropertiesId}
                    })
                }
            },
            addStream: {
                type: Streams,
                args: {
                    communityId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    consultantId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    streamLink: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    name: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    description: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.streams.create({
                        communityId: args.communityId,
                        consultantId: args.consultantId,
                        streamLink: args.streamLink,
                        name: args.name,
                        description: args.description,
                        active: args.active
                    })
                }
            },
            updateStream: {
                type: Streams,
                args: {
                    streamId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    streamLink: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    name: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    description: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.streams.update({
                        streamLink: args.streamLink,
                        name: args.name,
                        description: args.description,
                        active: args.active,
                    }, {
                        where: { streamId: args.streamId}
                    })
                }
            },
            addCommunity: {
                type: Communities,
                args: {
                    languageId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    image: {
                        type: GraphQLString
                    },
                    name: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    description: {
                        type: GraphQLString
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.communities.create({
                        languageId: args.languageId,
                        userId: args.userId,
                        image: args.image,
                        name: args.name,
                        description: args.description,
                        active: args.active
                    })
                }
            },
            updateCommunity: {
                type: Communities,
                args: {
                    communityId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    image: {
                        type: GraphQLString
                    },
                    name: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    description: {
                        type: GraphQLString
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.communities.update({
                        image: args.image,
                        name: args.name,
                        description: args.description,
                        active: args.active,
                    }, {
                        where: { communityId: args.communityId}
                    })
                }
            },
            addConsultant: {
                type: Consultants,
                args: {
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    communityId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.consultants.create({
                        communityId: args.communityId,
                        userId: args.userId,
                        active: args.active
                    })
                }
            },
            updateConsultant: {
                type: Consultants,
                args: {
                    consultantId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    communityId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.communities.update({
                        communityId: args.communityId,
                        active: args.active,
                    }, {
                        where: { consultantId: args.consultantId}
                    })
                }
            },
            addCommunityMember: {
                type: CommunityMembers,
                args: {
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    communityId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.communityMembers.create({
                        communityId: args.communityId,
                        userId: args.userId,
                        active: args.active
                    })
                }
            },
            updateCommunityMember: {
                type: CommunityMembers,
                args: {
                    communityMemberId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.communityMembers.update({
                        active: args.active
                    }, {
                        where: { communityMemberId: args.communityMemberId}
                    })
                }
            },
            addNews: {
                type: News,
                args: {
                    languageId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    title: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    content: {
                        type: new GraphQLNonNull (GraphQLString)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.news.create({
                        languageId: args.languageId,
                        userId: args.userId,
                        title: args.title,
                        content: args.content,
                        active: args.active
                    })
                }
            },
            updateNews: {
                type: News,
                args: {
                    newsId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    title: {
                        type: GraphQLString
                    },
                    content: {
                        type: GraphQLString
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.news.update({
                        title: args.title,
                        content: args.content,
                        active: args.active
                    }, {
                        where: { newsId: args.newsId}
                    })
                }
            },
            addFeedback: {
                type: Feedback,
                args: {
                    consultantId: {
                        type: GraphQLInt
                    },
                    userId: {
                        type: GraphQLInt
                    },
                    communityId: {
                        type: GraphQLInt
                    },
                    rating: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    active: {
                        type: GraphQLString
                    },
                },
                resolve(_, args) {
                    return db.models.feedback.create({
                        consultantId: args.consultantId,
                        userId: args.userId,
                        communityId: args.communityId,
                        rating: args.rating,
                        active: args.active
                    })
                }
            },
            addInteraction: {
                type: Interactions,
                args: {
                    consultantId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    },
                    userId: {
                        type: new GraphQLNonNull (GraphQLInt)
                    }
                },
                resolve(_, args) {
                    return db.models.interactions.create({
                        consultantId: args.consultantId,
                        userId: args.userId
                    })
                }
            }

        }
})

var Query = new GraphQLObjectType({
    name: 'query',
    description: 'Root query object',
    fields: {
        users: {
            type: new GraphQLList(Users),
            args: {
                userId: {
                    type: GraphQLInt
                    },
                password: {
                    type: GraphQLString
                    }
                },
        resolve (root, args) {
        return db.models.users.findAll({ where: args });
            }
        },
        userProperties: {
            type: new GraphQLList(UserProperties),
            args: {
                userId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.userProperties.findAll({ where: args });
            }
        },
        streams: {
            type: new GraphQLList(Streams),
            args: {
                consultantId: {
                    type: GraphQLInt
                    },
                streamId: {
                    type: GraphQLInt
                    },
                communityId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.streams.findAll({ where: args });
            }
        },
        consultants: {
            type: new GraphQLList(Consultants),
            args: {
                communityId: {
                    type: GraphQLInt
                    },
                userId: {
                    type: GraphQLInt
                    },
                },
            resolve (root, args) {
            return db.models.consultants.findAll({ where: args });
            }
        },
        communities: {
            type: new GraphQLList(Communities),
            args: {
                communityId: {
                    type: GraphQLInt
                    },
                languageId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.communities.findAll({ where: args });
            }
        },
        communityMembers: {
            type: new GraphQLList(CommunityMembers),
            args: {
                communityId: {
                    type: GraphQLInt
                    },
                userId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.communityMembers.findAll({ where: args });
            }
        },
        language: {
            type: new GraphQLList(Language),
            resolve (root, args) {
            return db.models.language.findAll();
            }
        },
        news: {
            type: new GraphQLList(News),
            args: {
                languageId: {
                    type: GraphQLInt
                    },
                userId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.news.findAll({ where: args });
            }
        },
        interactions: {
            type: new GraphQLList(News),
            args: {
                userId: {
                    type: GraphQLInt
                    },
                consultantId: {
                    type: GraphQLInt
                    }
                },
            resolve (root, args) {
            return db.models.interactions.findAll({ where: args });
            }
        }
    }
})

var Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
module.exports = Schema;
