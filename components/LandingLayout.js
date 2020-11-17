import React from "react"
import { Flex } from "@chakra-ui/core"
import { Layout } from "layout"

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {... props}
    >
      {props.children}
    </Flex>
  )
}