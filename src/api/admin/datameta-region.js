import request from '@/utils/request'

// 查询DatametaRegion列表
export function listDatametaRegion(query) {
  return request({
    url: '/api/v1/datameta-region',
    method: 'get',
    params: query
  })
}

// 查询DatametaRegion详细
export function getDatametaRegion(id) {
  return request({
    url: '/api/v1/datameta-region/' + id,
    method: 'get'
  })
}

// 新增DatametaRegion
export function addDatametaRegion(data) {
  return request({
    url: '/api/v1/datameta-region',
    method: 'post',
    data: data
  })
}

// 修改DatametaRegion
export function updateDatametaRegion(data) {
  return request({
    url: '/api/v1/datameta-region/' + data.id,
    method: 'put',
    data: data
  })
}

// 删除DatametaRegion
export function delDatametaRegion(data) {
  return request({
    url: '/api/v1/datameta-region',
    method: 'delete',
    data: data
  })
}

