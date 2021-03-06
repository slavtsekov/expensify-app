import { configureAuthentication, auth } from "../../firebase/firebase";

test("Login handler should be called on login", () => {
    const user = "user1";
    const startLoginMock = jest.fn();
    const startLogoutMock = jest.fn();
    configureAuthentication(startLoginMock, startLogoutMock);
    
    auth.changeState(user);

    expect(startLoginMock).toHaveBeenLastCalledWith(user);
});

test("Logout handler should be called on logout", () => {
    const startLoginMock = jest.fn();
    const startLogoutMock = jest.fn();
    configureAuthentication(startLoginMock, startLogoutMock);
    
    auth.changeState();

    expect(startLogoutMock).toHaveBeenCalled();
});