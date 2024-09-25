import { nextTestSetup } from 'e2e-utils'

describe('unstable-rethrow', () => {
  const { next, isNextStart } = nextTestSetup({
    files: __dirname,
  })

  it('should correctly trigger the not found page as not found', async () => {
    const browser = await next.browser('/not-found-page')
    expect(await browser.elementByCss('body').text()).toContain(
      'This page could not be found.'
    )
  })

  it('should correctly trigger the forbidden page as forbidden', async () => {
    const browser = await next.browser('/forbidden-page')
    expect(await browser.elementByCss('body').text()).toContain(
      'This page is forbidden.'
    )
  })

  it('should handle an internal error that gets propagated to the `cause` field', async () => {
    const browser = await next.browser('/cause')
    expect(await browser.elementByCss('body').text()).toContain('hello world')
  })

  if (isNextStart) {
    it('should not log any errors at build time', async () => {
      expect(next.cliOutput).toContain('[test assertion]: checking error')
      expect(next.cliOutput).not.toContain('[test assertion]: error leaked')
    })

    it('should correctly mark the dynamic page as dynamic', async () => {
      expect(next.cliOutput).toContain('ƒ /dynamic-error')
    })
  }
})
