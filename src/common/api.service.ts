import Vue from "vue";
import { injectable, inject } from "../ioc/decorators";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { IApiService } from "./i.api.service";

@injectable()
export class InjectableService {
  public num = 0;

  public increase() {
    this.num += 1;
  }
}

// export interface IApiService {
//   //(): IApiService;
//   list(): any;
// }

@injectable()
export class ApiService implements IApiService {
  public identifier: Number;
  // apiRoot: string = "https://api.ezeep.com/api";
  // results: Object[];
  // constructor(private http:Object) {
  //     this.results = [];
  // }

  constructor() {
    this.identifier = Math.floor(Math.random() * 60) + 1;
  }

  list(): AxiosPromise<object[]> {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  // static init() {
  //   console.log("init ok");
  //   //Vue.use(VueAxios, axios)
  // }

  // static delay<T>(ms: number, value?: T): Promise<T> {
  //   return new Promise<T>(resolve => setTimeout(() => resolve(value), ms));
  // }

  // static list(resource: string, slug = ""): Promise<string[]> {
  //   console.log("waiting...");
  //   const response = this.delay(8000, ["ffff", "gggg"]);
  //   return response;
  // }
}
