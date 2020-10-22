import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const frameworkInit: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      // menor: result.rows,
    }, null, 2),
  };
}
