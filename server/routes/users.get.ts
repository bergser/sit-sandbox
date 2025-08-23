export default eventHandler((event) => {
  const query = getQuery(event);
  if (!query?.filter || typeof query.filter !== "string") return [];
  return event.context.users.getByName(query.filter);
});
