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
        }
    }
})

var Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
module.exports = Schema;
