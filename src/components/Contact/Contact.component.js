import React, { useState } from "react"
import { Box, Flex } from "rebass"
import { Input, Label, Textarea } from "@rebass/forms"
import Fade from "react-reveal/Fade"
import { useFormik } from "formik"
import emailjs from "emailjs-com"
import isEmpty from "lodash.isempty"
// Contents
import contactContent from "@constants/contact"
// Components
import TextTranslate from "@components/TextTranslate"
import Button from "@components/Button"
// Utils
import { useTranslate } from "@utils/hooks/useTranslate"
// Utils
import { Form } from "./Contact.styles"
import Loading from "@components/BaseLayout/Loading"

const Contact = () => {
  const [loadIsVisible, setLoadVisible] = useState(false)
  const formatMessage = useTranslate()
  const sendEmail = async ({ errors, values, resetForm, isValid }) => {
    setLoadVisible(true)
    emailjs
      .send(
        "gmail-site",
        "contact_site",
        values,
        process.env.GATSBY_EMAIL_USER_ID
      )
      .then(
        function (response) {
          setLoadVisible(false)
          resetForm()
        },
        function (error) {
          alert("FAILED...", error)
          setLoadVisible(false)
        }
      )
  }

  const {
    handleSubmit,
    errors,
    values,
    handleChange,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: {
      from_name: "",
      userEmail: "",
      message: "",
    },
    onSubmit: values => sendEmail({ errors, values, resetForm, isValid }),
  })

  if (isEmpty(contactContent)) {
    return null
  }

  return (
    <Box width="100%">
      <Loading isVisible={loadIsVisible} />
      <Fade bottom>
        <TextTranslate
          as={contactContent.title.as}
          fontWeight="bold"
          fontSize={["3rem", "100px"]}
          id={contactContent.title.id}
          textTransform="uppercase"
          mb="50px"
        />
        <Form onSubmit={handleSubmit}>
          <Flex sx={{ flexDirection: ["column", "row"] }}>
            <Label sx={{ mr: [0, 4] }}>
              <Input
                id="from_name"
                name="from_name"
                required
                value={values.from_name}
                placeholder={formatMessage(`${contactContent.fieldName.id}`)}
                onChange={handleChange}
              />
            </Label>

            <Label>
              <Input
                id="userEmail"
                name="userEmail"
                required
                type="email"
                value={values.userEmail}
                placeholder={formatMessage(`${contactContent.fieldEmail.id}`)}
                onChange={handleChange}
              />
            </Label>
          </Flex>

          <Label>
            <Textarea
              id="message"
              name="message"
              required
              value={values.message}
              placeholder={formatMessage(`${contactContent.fieldMessage.id}`)}
              onChange={handleChange}
            />
          </Label>

          <Button variant="primary" mt="2" color="white" type="submit">
            <TextTranslate as="span" color="white" id="contact.send" />
          </Button>
        </Form>
      </Fade>
    </Box>
  )
}

export default Contact
