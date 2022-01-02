import { Handler } from '@netlify/functions';
import { isEmpty } from 'lodash';

import { errorResponse } from '../api';

export type CreateRequestBody = {
  username: string,
  date: string,
  time: number,
};

const FAUNA_ACCESS_TOKEN = process.env.FAUNA_ACCESS_TOKEN;

const handler: Handler = async (event, context) => {
  const { username, date, time }: CreateRequestBody = JSON.parse(event.body);

  // if (isEmpty(lat) || isEmpty(lon)) {
  //   return errorResponse({
  //     statusCode: 400,
  //     message: `Both lat (${lat}) and lan (${lon}) are required.`
  //   });
  // }

  // run query

  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}

export { handler };
