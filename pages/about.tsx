import { useContext } from "react";
import { AppContext } from "../src/hooks/authContext";
import Wapper from '../src/components/wapper'
import { useLocalStorage } from "../src/hooks/useLocalStorage";

export default function About() {
  const [name, setName] = useLocalStorage("abcd", "");
  const {user, phone} = useContext(AppContext);
  // console.log(user);
  // console.log('val ...', typeof window !== "undefined" ?  localStorage.getItem("name") : null)
  console.log('val12 ...', phone)
  return (
    <Wapper>
    about...
  </Wapper>
  )
}
