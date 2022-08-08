test("login test with default email and password", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});
