export const login = async (creds) => {
  try {
    const response = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    });
    return await response.json();
  } catch (error) {
    console.trace(error);
  }
};
