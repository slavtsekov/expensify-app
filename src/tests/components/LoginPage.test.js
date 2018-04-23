import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render LoginPage correctly", () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);

    expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
    const startLoginMock = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginMock} />);

    wrapper.find("button").simulate("click");

    expect(startLoginMock).toHaveBeenCalled();
});