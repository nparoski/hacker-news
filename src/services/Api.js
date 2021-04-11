export async function getPosts(taxonomy = 'beststories') {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${taxonomy}.json`)

  return res.json()
}

export async function getPost(postId) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)

  return res.json()
}

export async function getUser(userId) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`)

  return res.json()
}
