import { useIntl } from "gatsby-plugin-intl"
export function useTranslate() {
  const { formatMessage } = useIntl()
  return id => formatMessage({ id })
}
