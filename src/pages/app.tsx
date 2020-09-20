import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
import { Router as MyRouter } from "@reach/router"

const Router: () => JSX.Element = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:results" />
    </MyRouter>
  )
}

export default Router
