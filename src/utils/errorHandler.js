import { auth, getProviderNameForProviderId } from "../firebase/firebase";

const errorCodes = {
    EMAIL_ALREADY_USED: "auth/account-exists-with-different-credential",
    NETWORK_ERROR: "auth/network-request-failed"
};

const errorHandler = (error) => {
    if (error.code === errorCodes.EMAIL_ALREADY_USED) {
        var email = error.email;
        return auth.fetchSignInMethodsForEmail(email).then((methods) => {
            var provider = getProviderNameForProviderId(methods[0]);
            return `This provider's email is already used by your ${provider} account.`;
        });
    } else if (error.code === errorCodes.NETWORK_ERROR) {
        return "The auth provider has experienced a network error (such as timeout, interrupted connection or unreachable host).";
    } else {
        return error.message;
    }
};

export { errorCodes, errorHandler as default };