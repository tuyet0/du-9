import { datCookie } from "../helpers/cookie";
import { get, post } from "../utils/request";

export const createAnswer = async (options) => {
  const result = await post(`answers`, options);
  return result;
};

export const getAnswer = async (id) => {
  const result = await get(`answers/${id}`);
  return result;
}

export const getAnswerByUserId = async () => {
  const userId = datCookie("id");
  const result = await get(`answers?userId=${userId}`);
  return result;
}