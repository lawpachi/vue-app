/**
 * Created by shenlu on 17/3/31.
 */

export const fetchReq = function fetchReq(url, params = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(res => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};
