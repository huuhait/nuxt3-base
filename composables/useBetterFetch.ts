import { usePublicStore } from '~/stores/public'

const formatError = (_error: any) => {
  // if (process.server) return

  // const response = error.response
  // const errors: string[] = response.data.errors
  // const router = useRouter()

  // return
}

const csrf_headers = () => {
  if (process.server) return {}

  const csrf_token = localStorage.getItem('csrf_token')
  const headers = { 'X-CSRF-Token': csrf_token }

  return csrf_token ? headers : {}
}

interface BetterFetchBody {
  [key: string]: any
}

interface BetterFetchHeaders {
  [key: string]: string | number | string[]
}

interface BetterFetchOptions {
  method?: 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'DELETE'
  body?: BetterFetchBody
  headers?: BetterFetchHeaders
}

export const useBetterFetch = async <T>(url: string, options?: BetterFetchOptions) => {
  try {
    const publicStore = usePublicStore()
    const headers = publicStore.headers

    const res = await fetch(url, {
      method: options?.method || 'GET',
      body: JSON.stringify(options?.body),
      headers: {
        ...options?.headers,
        ...csrf_headers,
        ...headers,
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      const response: any = res.clone()
      const error: any = new Error(response.statusText)

      response.data = await response.clone().json()
      error.response = response
      throw error
    }

    const data = await res.json() as T

    return Promise.resolve({
      status: res.status,
      data,
    })
  } catch (error) {
    formatError(error)

    return Promise.reject(error)
  }
}
