import api from './api.js'

export async function productividad() {
  try {
    const { data } = await api.get('/reportes/productividad')
    return data
  } catch (_) {
    const { data } = await api.get('/reportes/productividad/demo')
    return data
  }
}
