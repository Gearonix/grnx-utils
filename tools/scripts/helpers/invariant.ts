export const invariant = (condition: unknown, message: string) => {
  if (!condition) {
    console.error(message)
    process.exit(1)
  }
}
