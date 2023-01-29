import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pizzaContext } from "../App";

function ActivateUser() {
  const { id } = useParams();
  const { serverApi } = useContext(pizzaContext);
  const checkActivationResponse = useCallback(async (response) => {
    const data = await response.json();
    // console.log("data is", data);
    if (response.status === 200 || 401) {
      window.location.href = "http://localhost:3000";
    } else {
      console.log(data.message);
    }
  }, []);

  const getUserActivated = useCallback(() => {
    fetch(`${serverApi}/activate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        activationtoken: id,
      },
    })
      .then((response) => checkActivationResponse(response))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    getUserActivated();
  }, []);
  return (
    <>
      <h1>url redirection Please wait {id}</h1>
    </>
  );
}

export { ActivateUser };
