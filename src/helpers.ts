import axios, {AxiosPromise} from "axios";

export function postRequest(url: string, data: Record<string, string>): AxiosPromise {
  return axios({
    method: 'post',
    url: url,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: URLEncodeObject(data)
  })
}

export function getRequest(url: string): AxiosPromise {
  return axios({
    method: 'get',
    url: url,
  })
}

function URLEncodeObject(x: Record<string, string>): string {
  // encodeURIComponent("bla bla")
  let s = "";
  let cnt = 0;
  const len = Object.entries(x).length;

  for (const [key, value] of Object.entries(x)) {
    cnt += 1;
    s += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    if (cnt + 1 != len) {
      s += "&";
    }
  }

  return s;

}