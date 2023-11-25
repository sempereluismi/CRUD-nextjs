import { Table } from "../src/components/chefs/Table"
import { getChefsTableInfo } from "../src/lib/db"

export default async function ChefPage() {
  const chefs = await getChefsTableInfo()
  return (
    <section className="px-5 pt-5">
      <h1 className="dark:text-white text-5xl font-semibold">Nuestros Chefs</h1>

      <Table chefs={chefs} />
    </section>
  )
}