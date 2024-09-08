import { HttpResponse } from "../models/HttpResponse";

export class HttpHelper {
  public static async ok(data: any): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: data,
    };
  }
  public static async noContent(data: any): Promise<HttpResponse> {
    return {
      statusCode: 204,
      body: data,
    };
  }
}
