import { SpearlyApiClient } from "@spearly/sdk-js";

const apiClient = new SpearlyApiClient(import.meta.env.SPEARlY_API_KEY);

const fetchPostsData = async () => {
  return await apiClient.getList("my-blog-posts");
};

const fetchLimitPostsData = async (perPage: number, pageNum: number) => {
  const data = await apiClient.getList("my-blog-posts", {
    limit: perPage,
    offset: pageNum <= 1 ? 0 : (pageNum - 1) * perPage + 1,
  });
  return data;
};

export { fetchPostsData, fetchLimitPostsData };
