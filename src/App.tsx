import React, { useState, useMemo, useCallback, useRef } from "react";

interface User {
  name: string;
  login: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<User>();
  const [users, setUsers] = useState<Array<User>>();

  async function loadUser() {
    const response = await fetch("https://api.github.com.br/users/avrcoelho");
    const data = await response.json();

    setUserData(data);
  }

  // o useMemo não sofre tanto efeito, pois ele consegue pegar a tipagem automaticamente
  //  metodo join retorna um stringify, entçoa por padrão a constate name vai ser tipado como string
  const name = useMemo(() => users?.map(user => user.name).join(", "), [users]);

  // o mesmo é ocorrido com o useCallback. ELe pega a tipagem automaticamente
  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), []);

  inputRef.current?.focus();

  return (
    <>
      <div>{userData?.name}</div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </>
  );
};

export default App;
