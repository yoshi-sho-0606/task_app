import { mount, shallowMount } from '@vue/test-utils'
import App from '../app.vue'

describe('HelloWorld', () => {
  test('display Hello World', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toBe("Top page!")
  })
})