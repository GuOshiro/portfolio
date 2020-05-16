import { useIntl } from "gatsby-plugin-intl"

export const useTranslate = () => {
  const { formatMessage } = useIntl()
  return id => formatMessage({ id })
}
