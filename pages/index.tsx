import { useContext, useEffect } from "react";
import Wapper from "../src/components/wapper";
import { AppContext } from "../src/hooks/authContext";
import { useLocalStorage } from "../src/hooks/useLocalStorage";

export default function Home() {
  const [name, setName] = useLocalStorage("abcd", {});

  const { user, setUser, setPhone } = useContext(AppContext);
  console.log(user);

  useEffect(() => {
    // Rest Api...
    // let data = []
    // setUser(data)
  }, []);

  const setValue = (value: any) => {
    // console.log(value);
    // localStorage.setItem("name", value);
    // setName({ value });
    setPhone("1234567890")
  };

  return (
    <Wapper>
      <div onClick={() => setUser("#ff0000")}>Change color</div>
      <div onClick={() => setValue("xyz")}>Set Val</div>
      index...
    </Wapper>
  );
}
