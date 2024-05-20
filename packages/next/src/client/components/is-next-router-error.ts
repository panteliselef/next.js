import { isNotFoundError } from './not-found'
import { isRedirectError } from './redirect'
import { isForbiddenError } from './forbidden'
import { isUnauthorizedError } from './unauthorized'

export function isNextRouterError(error: any): boolean {
  return (
    error &&
    error.digest &&
    (isRedirectError(error) ||
      isNotFoundError(error) ||
      isForbiddenError(error) ||
      isUnauthorizedError(error))
  )
}
