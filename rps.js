import AWS from "aws-sdk";
import nodeFetch from "node-fetch";
import { buildResponse, failure, success } from "./libs/response-lib";

const url = "http://api.aladhan.com/v1/calendar?";

export function main(ev, context, callback) {
  const cal = nodeFetch(
    "http://api.aladhan.com/v1/calendar?latitude=51.509865&longitude=-0.118092&method=2&month=5&year=2019"
  )
    .then(resp => resp.json())
    .then(data => callback(null, data));
}

//    ***********************
//    Same code as above, but using the `Try, Catch` syntax
//    ***********************
// export function main(ev, context){
//   try{
//     const resp = nodeFetch(
//       "http://api.aladhan.com/v1/calendar?latitude=51.509865&longitude=-0.118092&method=2&month=5&year=2019"
//     );
//     return success(resp);
//   } catch(e){
//     return failure({status: false})
//   }
// }
