import errorHandler, { errorCodes } from "../../utils/errorHandler";

test("Correct message is returned when email is already in use", (done) => {
    const error = {
        code: errorCodes.EMAIL_ALREADY_USED,
        email: "test@test.te"
    };
    const promise = new Promise((resolve, reject) => {
        reject(error);
    });

    promise.catch(errorHandler).then((res) => {
        expect(res).toBe("This provider's email is already used by your Google account.");
        done();
    });  
});

test("Correct message is returned on network error", (done) => {
    const error = {
        code: errorCodes.NETWORK_ERROR
    };
    const promise = new Promise((resolve, reject) => {
        reject(error);
    });

    promise.catch(errorHandler).then((res) => {
        expect(res).toBe("The auth provider has experienced a network error (such as timeout, interrupted connection or unreachable host).");
        done();
    });  
});

test("Default message is returned when no code is recognized", (done) => {
    const message = "error";
    const error = {
        code: "test",
        message
    };
    const promise = new Promise((resolve, reject) => {
        reject(error);
    });

    promise.catch(errorHandler).then((res) => {
        expect(res).toBe(message);
        done();
    });  
});