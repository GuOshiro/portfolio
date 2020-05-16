import { useIntl } from "gatsby-plugin-intl"

export const useTranslation = ({ id }) => {
  const { formatMessage } = useIntl()
  return formatMessage({ id })
}
