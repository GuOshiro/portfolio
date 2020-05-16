import { useIntl } from "gatsby-plugin-intl"

export function useTranslation(id) {
  const { formatMessage } = useIntl()
  return formatMessage({ id })
}
