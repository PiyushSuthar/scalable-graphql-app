import { Author } from '../../../db/models'

const authorQueries = {
    authors: async (_, { params = { page: 1, pageSize: 8 } }, { loaders }) => {
        const { page, pageSize } = params
        const intPage = parseInt(page)
        const intPageSize = parseInt(pageSize)

        return {
            results: async () => {
                const authors = await Author.find()
                    .skip(pageSize * (page - 1))
                    .limit(pageSize)

                return loaders.author.many(authors.map(({ id }) => id))
            },
            info: async () => {
                const count = await Author.countDocuments()

                const pages = Math.ceil((parseInt(count) / intPageSize))
                const prev = intPage > 1 ? intPage - 1 : null
                const next = intPage < pages ? intPage + 1 : null

                return {
                    count,
                    pages,
                    prev,
                    next
                }
            }
        }
    },
    author: async (_, { id }, { loaders }) => {
        return loaders.author.one(id)
    }
}

export default authorQueries