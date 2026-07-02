import api from './api.js'

export async function listarMora() {
  try {
    const { data } = await api.get('/cobranza/mora')
    return data
  } catch (_) {
    const { data } = await api.get('/cobranza/mora/demo')
    return data
  }
}

export async function registrarAccion(payload) {
  try {
    const { data } = await api.post('/cobranza/accion', payload)
    return data
  } catch (_) {
    const { data } = await api.post('/cobranza/accion/demo', payload)
    return data
  }
}
