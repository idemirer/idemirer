import { getSortedPostsData } from '../../lib/posts';

export default function (req, res) {
  const { page } = req.query;
  const allPostsData = getSortedPostsData();
  const perPage = 6;
  const totalPosts = allPostsData.length;
  const totalPages = Math.round(totalPosts / perPage, 0);
  const start = (page - 1) * perPage;
  let end = start + perPage;
  if (end > totalPosts) {
    end = totalPosts;
  }

  res.status(200).json({
    currentPage: page,
    perPage: perPage,
    totalCount: totalPosts,
    pageCount: totalPages,
    start: start,
    end: end,
    posts: allPostsData.slice(start, end),
  });
}
