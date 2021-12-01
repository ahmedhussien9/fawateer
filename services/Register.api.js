export async function registerUserApi(body) {
  // POST request using fetch with set headers
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const res = await fetch(
    "https://fawateer-test.azurewebsites.net/api/app/tenant-requests",
    requestOptions
  );
  const data = await res.json();
  return await data;
}
