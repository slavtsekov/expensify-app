import React from "react";
import { shallow } from "enzyme";
import DeleteModal from "../../components/DeleteModal";

test("should render DeleteModal correctly", () => {
    const wrapper = shallow(<DeleteModal isOpen={true} handleAccept={()=>{}} handleDecline={()=>{}} />);

    expect(wrapper).toMatchSnapshot();
});

test("should handle primary button click", () => {
    const handleAcceptSpy = jest.fn();
    const wrapper = shallow(<DeleteModal isOpen={true} handleAccept={handleAcceptSpy} handleDecline={()=>{}} />);

    wrapper.find("button").at(0).simulate("click");

    expect(handleAcceptSpy).toHaveBeenCalled();
});

test("should handle secondary button click", () => {
    const handleDeclineSpy = jest.fn();
    const wrapper = shallow(<DeleteModal isOpen={true} handleAccept={()=>{}} handleDecline={handleDeclineSpy} />);

    wrapper.find("button").at(1).simulate("click");

    expect(handleDeclineSpy).toHaveBeenCalled();
});