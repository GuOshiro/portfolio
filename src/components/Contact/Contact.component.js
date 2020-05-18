import React from "react"
import { Box, Flex } from "rebass"
import { Input, Label, Textarea } from "@rebass/forms"
import Fade from "react-reveal/Fade"
import { useFormik } from "formik"
import emailjs from "emailjs-com"
import isEmpty from "lodash.isempty"
// Components
import TextTranslate from "@components/TextTranslate"
import Button from "@components/Button"
// Utils
import { useTranslate } from "@utils/hooks/useTranslate"
// Utils
import { Form } from "./Contact.styles"

const Contact = ({ contactContent }) => {
  const formatMessage = useTranslate()
  const sendEmail = async ({ errors, values, resetForm, isValid }) => {
    console.log(values)
    emailjs
      .send(
        "gmail-site",
        "contact_site",
        values,
        process.env.user_VzvI079uAR4rcxwRZmXLY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
          alert("Foi sucesso maluquete")
          resetForm()
        },
        function (error) {
          console.log("FAILED...", error)
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
      <Fade left>
        <TextTranslate
          as={contactContent.title.as}
          fontWeight="body"
          id={contactContent.title.id}
          textTransform="uppercase"
        />
      </Fade>
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
    </Box>
  )
}

export default Contact
