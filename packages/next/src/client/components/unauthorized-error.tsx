import { UIErrorTemplate } from './ui-error-template'

export default function Unauthorized() {
  return (
    <UIErrorTemplate
      pageTitle="401: Unauthorized Access to this page."
      title="401"
      subtitle="Unauthorized Access to this page."
    />
  )
}
