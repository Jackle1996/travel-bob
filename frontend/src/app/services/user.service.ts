import { Injectable } from '@angular/core';
import { User, CreateNewUserRequest, CreateNewUserReply } from '../../../../api/grpc-web-ts/users_pb';
import { LogInRequest, LogInReply, VerifyTokenRequest, VerifyTokenReply } from '../../../../api/grpc-web-ts/users_pb';
import { UsersAPIClient } from '../../../../api/grpc-web-ts/UsersServiceClientPb';
import { Error } from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private grpcClient: UsersAPIClient;

  constructor() {
    this.grpcClient = new UsersAPIClient('http://localhost:8080', null, null);
  }

  createUser(user: User, callback) {
    const request = new CreateNewUserRequest();
    request.setUser(user);
    this.grpcClient.createNewUser(request, {}, (err: Error | null, response: CreateNewUserReply) => {
      if (err) { console.log('CreateNewUserRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(); });
  }

  login(user: User, callback) {
    const request = new LogInRequest();
    request.setEmail(user.getEmail());
    request.setPassword(user.getPassword());
    this.grpcClient.logIn(request, {}, (err: Error | null, response: LogInReply) => {
      if (err) { console.log('LogInRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getJwt()); });
  }

  verifyToken(jwt: string, callback) {
    const request = new VerifyTokenRequest();
    request.setJwt(jwt);
    this.grpcClient.verifyToken(request, {}, (err: Error | null, response: VerifyTokenReply) => {
      if (err) { console.log('VerifyTokenRequest Error:: ', err); }
      console.log('response', response);
    }).on('data', data => { callback(data.getValid()); });
  }
}
