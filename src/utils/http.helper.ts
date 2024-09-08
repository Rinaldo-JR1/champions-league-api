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
  public static async created(data: any): Promise<HttpResponse> {
    return {
      statusCode: 201,
      body: data,
    };
  }
  public static async notFound(data: any): Promise<HttpResponse> {
    return {
      statusCode: 404,
      body: data,
    };
  }
  public static async badRequest(data: any): Promise<HttpResponse> {
    return {
      statusCode: 400,
      body: data,
    };
  }
}
