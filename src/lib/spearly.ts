import { SpearlyApiClient } from "@spearly/sdk-js";

const apiClient = new SpearlyApiClient(import.meta.env.SPEARlY_API_KEY);
const fetchPostsData = async () => {
  return await apiClient.getList("sample-post");
};
const fetchLimitPostsData = async (perPage: number, pageNum: number) => {
  const data = await apiClient.getList("sample-post", {
    limit: perPage,
    offset: 1 + (pageNum - 1) * perPage,
  });
  return data;
};

export { fetchPostsData, fetchLimitPostsData };
