import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly base = '/api/Account';

  private readonly _isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());

  public readonly isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private readonly http: HttpClient) {}

  public login(payload: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/login`, payload);
  }

  public register(payload: any): Observable<any> {
    return this.http.post<any>(`${this.base}/register`, payload);
  }

  public setToken(token?: string | null): void {
    if (token) {
      try { localStorage.setItem('auth_token', token); } catch {}
      this._isLoggedIn$.next(true);
    } else {
      try { localStorage.removeItem('auth_token'); } catch {}
      this._isLoggedIn$.next(false);
    }
  }

  public logout(): void {
    this.setToken(null);
  }

  private getToken(): string | null {
    try { return localStorage.getItem('auth_token'); } catch { return null; }
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
