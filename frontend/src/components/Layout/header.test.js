import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Header } from './Header'

configure({ adapter: new Adapter() })

test('Header Render', () => {
  const header = shallow(<Header onSelectMenu={null} />)
  expect(header.find('a').text()).toEqual('ToolBox Test')
})