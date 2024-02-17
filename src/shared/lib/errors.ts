export class AuthorizatoinError extends Error {
    constructor(message = 'AuthorisationError') {
        super(message);
    }
}

export class NeedAuthError extends Error {
    constructor(message = 'NeedAuthError') {
        super(message);
    }
}

export class BadRequest extends Error {
    constructor(message = 'BadRequest') {
        super(message);
    }
}
