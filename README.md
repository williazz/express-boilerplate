# express-boilerplate

## auth module

| Path                 | Method | Details                                                                                                                                    |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| /users/authenticate/ | POST   | Public route that accepts {username, password} in body and returns a refresh token cookie (HTTP only) else 401                             |
| /users/refresh-token | POST   | Public route that accepts and validates a refresh token, returns a new resfresh token cookie (HTTP only), and invalidates the old else 401 |
| /users/revoke-token  | POST   | Secure route that accepts and invalidates a token                                                                                          |
| /users/{id}          | GET    | Secure route that gets user information                                                                                                    |
| /api-docs            | GET    | Swagger docs                                                                                                                               |
