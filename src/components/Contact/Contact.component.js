import React from "react"
import { Box, Flex } from "rebass"
import { Input, Label } from "@rebass/forms"
import { useFormik } from "formik"
import { navigate } from "gatsby"
// Components
import TextTranslate from "@components/TextTranslate"
import Button from "@components/Button"
// Utils
import { useTranslate } from "@utils/hooks/useTranslate"
// Utils
import { Form } from "./Contact.styles"

const Contact = ({ contactContent }) => {
  const formatMessage = useTranslate()
  const sendToMautic = async data => {
    await fetch("", {
      method: "post",
      body: JSON.stringify({
        nome1: data.nome,
        sobrenome: data.sobrenome,
        empresa1: "",
        email: data.email,
        telefone: data.phone,
      }),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    navigate("/")
  }

  const { handleSubmit, handleChange, values } = useFormik({
    onSubmit: sendToMautic,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  })

  return (
    <Box>
      <TextTranslate
        as={contactContent.title.as}
        fontWeight="body"
        id={contactContent.title.id}
        textTransform="uppercase"
      />
      <Form onSubmit={handleSubmit}>
        <Flex>
          <Label>
            <TextTranslate id={contactContent.fieldName.id} />
            <Input
              id="firstName"
              required
              value={values.firstName}
              placeholder={formatMessage(`${contactContent.fieldName.id}`)}
              onChange={handleChange}
            />
          </Label>

          <Label>
            <TextTranslate id={contactContent.fieldEmail.id} />
            <Input
              id="email"
              required
              value={values.lastName}
              placeholder={formatMessage(`${contactContent.fieldEmail.id}`)}
              onChange={handleChange}
            />
          </Label>
        </Flex>

        <Label>
          <TextTranslate id={contactContent.fieldMessage.id} />
          <Input
            name="phone"
            required
            value={values.phone}
            placeholder={formatMessage(`${contactContent.fieldMessage.id}`)}
            onChange={handleChange}
          />
        </Label>

        <Button mt={2} type="submit">
          <TextTranslate id="contact.send" />
        </Button>
      </Form>
    </Box>
  )
}

export default Contact
