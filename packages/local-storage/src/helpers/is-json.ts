export const isJson = (value: string): boolean => {
  try {
    JSON.parse(value)
  } catch (error) {
    return false
  }
  return true
}
