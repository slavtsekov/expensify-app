import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render LoginPage correctly", () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);

    expect(wrapper).toMatchSnapshot();
});

test("should start google login on button click", () => {
    const startLoginMock = jest.fn();
    startLoginMock.mockReturnValueOnce({
        then: () => {}
    });
    const wrapper = shallow(<LoginPage startGoogleLogin={startLoginMock} />);

    wrapper.find("button").at(0).simulate("click");

    expect(startLoginMock).toHaveBeenCalled();
});

test("should start facebook login on button click", () => {
    const startLoginMock = jest.fn();
    startLoginMock.mockReturnValueOnce({
        then: () => {}
    });
    const wrapper = shallow(<LoginPage startFacebookLogin={startLoginMock} />);

    wrapper.find("button").at(1).simulate("click");

    expect(startLoginMock).toHaveBeenCalled();
});

test("should start twitter login on button click", () => {
    const startLoginMock = jest.fn();
    startLoginMock.mockReturnValueOnce({
        then: () => {}
    });
    const wrapper = shallow(<LoginPage startTwitterLogin={startLoginMock} />);

    wrapper.find("button").at(2).simulate("click");

    expect(startLoginMock).toHaveBeenCalled();
});

test("should start github login on button click", () => {
    const startLoginMock = jest.fn();
    startLoginMock.mockReturnValueOnce({
        then: () => {}
    });
    const wrapper = shallow(<LoginPage startGithubLogin={startLoginMock} />);

    wrapper.find("button").at(3).simulate("click");

    expect(startLoginMock).toHaveBeenCalled();
});