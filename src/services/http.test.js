import axios from 'axios'

jest.mock('axios')

import {
  BASE_URL,
  get,
  post,
  patch,
  remove
} from 'services/http'

describe('http service', () => {
  let axiosGetMock
  let axiosPostMock
  let axiosPatchMock
  let axiosDeleteMock

  beforeAll(() => {
    axiosGetMock = jest.spyOn(axios, 'get')
    axiosPostMock = jest.spyOn(axios, 'post')
    axiosPatchMock = jest.spyOn(axios, 'patch')
    axiosDeleteMock = jest.spyOn(axios, 'delete')
  })

  describe('GET', () => {
    it('calls GET endpoints', async () => {
      await get('some-get-endpoint')
      expect(axiosGetMock).toHaveBeenCalledWith(`${BASE_URL}/some-get-endpoint`)
    })
  })

  describe('POST', () => {
    it('calls POST endpoints', async () => {
      await post('some-post-endpoint', {
        name: 'Richard',
        age: 42
      })
      expect(axiosPostMock).toHaveBeenCalledWith(`${BASE_URL}/some-post-endpoint`, {
        name: 'Richard',
        age: 42
      })
    })

    it('sends an empty object if no data is passed', async () => {
      await post('some-post-endpoint')
      expect(axiosPostMock).toHaveBeenCalledWith(`${BASE_URL}/some-post-endpoint`, {})
    })
  })

  describe('PATCH', () => {
    it('calls PATCH endpoints', async () => {
      await patch('some-patch-endpoint', {
        name: 'Edited Richard',
        age: 40
      })
      expect(axiosPatchMock).toHaveBeenCalledWith(`${BASE_URL}/some-patch-endpoint`, {
        name: 'Edited Richard',
        age: 40
      })
    })

    it('sends an empty object if no data is passed', async () => {
      await patch('some-patch-endpoint')
      expect(axiosPatchMock).toHaveBeenCalledWith(`${BASE_URL}/some-patch-endpoint`, {})
    })
  })

  it('calls DELETE endpoints', async () => {
    await remove('some-delete-endpoint')
    expect(axiosDeleteMock).toHaveBeenCalledWith(`${BASE_URL}/some-delete-endpoint`)
  })
})
