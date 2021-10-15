import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'koub',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || 'no api key',
})
