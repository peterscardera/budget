import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Test", () => {
  //define it outside the scope of the function so that it is acceible at every test
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<App />);
  })
  //before each so we dont need to have a const wrapper = shallow(<app />) inside every test!
  test("renders the title", () => {
    //ENZYME
    //shallow creates an instance of our componant
  
    // console.log(wrapper.debug())
    expect(wrapper.find('h1').text()).toContain("This is a test")
    //shallow wont render inner comps no children component

    //JEST
    // const { getByText } = render(<App />);
    // const linkElement = getByText("This is a test");
    // expect(linkElement).toBeInTheDocument();
  });
});
