import { createUIError } from './ui-error-builder'

const { thrower, matcher } = createUIError('NEXT_UNAUTHORIZED')

// TODO(@panteliselef): Update docs
const unauthorized = thrower

// TODO(@panteliselef): Update docs
const isUnauthorizedError = matcher

export { unauthorized, isUnauthorizedError }
