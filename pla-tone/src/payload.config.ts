import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: 'users',
    },
    collections: [
        {
            slug: 'users',
            auth: true,
            fields: [],
        },
        {
            slug: 'models',
            fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'series', type: 'text' },
                { name: 'specs', type: 'json' },
            ],
        },
    ],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
})
