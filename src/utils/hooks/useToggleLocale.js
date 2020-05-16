import { changeLocale, useIntl } from "gatsby-plugin-intl"
import { useCallback } from "react"

export const useToggleLocale = () => {
  const { locale } = useIntl()
  const toggleLocale = useCallback(() => {
    changeLocale(locale === "en" ? "" : "en")
  }, [locale])
  return { locale, toggleLocale }
}
