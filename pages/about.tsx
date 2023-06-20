import { useContext } from "react";
import { AppContext } from "../src/hooks/authContext";
import Wapper from '../src/components/wapper'


export default function About() {
  const {user} = useContext(AppContext);
  console.log(user);
  return (
    <Wapper>
    about...
  </Wapper>
  )
}
