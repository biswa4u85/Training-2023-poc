import { useContext, useEffect } from "react";
import Wapper from "../src/components/wapper";
import { AppContext } from "../src/hooks/authContext";

export default function Home() {
  const { user, setUser } = useContext(AppContext);
  console.log(user);

  useEffect(() => {
    // Rest Api...
    // let data = []
    // setUser(data)
  }, []);

  return (
    <Wapper>
      <div onClick={() => setUser("#ff0000")}>Change color</div>
      index...
    </Wapper>
  );
}
