import { Author } from "../../../db/models";

const bookFields = {
    Book: {
        author: async (book, _, { loaders }) => {
            return loaders.author.one(book.author)
        }
    }
}

export default bookFields