export async function getPosts(taxonomy = 'beststories') {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${taxonomy}.json`
  )

  return res.json()
}
