export const paginator = (items, currentPage, limit) => {
  const page = currentPage || 1
  const perPage = limit || 10
  const offset = (page - 1) * perPage

  return items.slice(offset).slice(0, limit)
}