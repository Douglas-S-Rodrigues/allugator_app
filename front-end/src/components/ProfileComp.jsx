import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { getId } from "../services/localStorage";

export default function ProfileComp() {
  const { userInfo, getUserById } = useContext(MyContext);

  useEffect(() => {
    getUserById(getId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Olá, {userInfo.name}</h1>
          <h3>Informações da conta</h3>
      <p>Nome: {userInfo.name}</p>
      <p>email: {userInfo.email}</p>
    </section>
  );
}
