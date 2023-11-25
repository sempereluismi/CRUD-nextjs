import { TableRow } from "./TableRow"

export function Table(props) {

  const {chefs} = props
  return (
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
              <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Nombre
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    chefs.map((chef) => {
                      return <TableRow key={chef.codigo} rowInfo={chef} />
                    })
                  }
              </tbody>
          </table>
      </div>
  )
}