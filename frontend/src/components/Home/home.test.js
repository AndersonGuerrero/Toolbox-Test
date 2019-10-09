import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './index'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

test('Home render', () => {
	const component = renderer.create(
		<Home textdisplay={'Testing'} isLoading={false} />
	)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})

test('Home Check Render', () => {
	const header = shallow(<Home textdisplay={'Testing'} isLoading={false} />)
	expect(header.find('h1').text()).toEqual('Testing')
})