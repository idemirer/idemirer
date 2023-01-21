export function filterPosts(data) {
  const today = +new Date();
  const filteredPosts = data.filter(({ draft, date }) => {
    const timeZoneOffset = new Date(Date.parse(date)).getTimezoneOffset() * 60 * 1001;
    const postDate = Date.parse(date) + timeZoneOffset;
    return (draft != true) & (today >= postDate);
  });
  return filteredPosts;
}
