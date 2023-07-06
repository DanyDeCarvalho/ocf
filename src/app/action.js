"use server";
export async function login(data) {
  const res = await fetch("http://localhost:8000/api/v1/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    }),
  });
  const response = await res.json();
  return response;
}

export async function refreshtoken(refreshtoken) {
  const res = await fetch("http://localhost:8000/api/v1/refresh", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh_token: refreshtoken
    })
  });
  const response = await res.json();
  return response;
}

export async function signup(data) {
  const res = await fetch("http://localhost:8000/api/v1/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    }),
  });
  const response = await res.json();
  return response;
}

export async function addCours(data, myToken) {
  console.log(data.get("url"));
  console.log(myToken);
  const res = await fetch("http://localhost:8000/api/v1/courses/git", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + myToken,
    },
    body: JSON.stringify({
      url: data.get("url"),
    }),
  });
  const response = await res.json();
  return response;
}
