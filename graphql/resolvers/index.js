import { authorMutations, authorQueries, authorFields } from "./author";
import { bookMutations, bookQueries, bookFields } from "./book";
import { publisherMutations, publisherQueries, publisherFields } from "./publisher";

import { Author } from "../../db/models";

const resolvers = {
    Query: {
        ...authorQueries,
        ...bookQueries,
        ...publisherQueries
    },
    Mutation: {
        ...authorMutations,
        ...bookMutations,
        ...publisherMutations
    },
    ...authorFields,
    ...bookFields,
    ...publisherFields
}

export default resolvers