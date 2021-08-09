import { Order, Count } from "../generated/schema"

export const DEFAULT_ID = 'all'

export function buildCount(): Count {
  let count = Count.load(DEFAULT_ID)

  if (count == null) {
    count = new Count(DEFAULT_ID)
    count.orderTotal = 0    
    count.started = 0
  }

  return count as Count
}

export function buildCountFromOrder(order: Order): Count {
  let count = buildCount()
  count.orderTotal += 1
  return count
}