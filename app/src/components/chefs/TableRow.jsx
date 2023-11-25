import Link from "next/link"

export function TableRow(props) {
  const { rowInfo } = props

  return (
    <tr className="odd:bg-white odd:dark:bg-neutral-900 even:bg-neutral-50 even:dark:bg-neutral-800 border-b dark:border-neutral-700">
      <th scope="row" className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white">
        {rowInfo.nombre}
      </th>
      <td className="px-6 py-4">
        {rowInfo.nombreartistico}
      </td>
      <td className="px-6 py-4">
        {rowInfo.localidad}
      </td>
      <td className="px-6 py-4">
        <Link href={`chefs/${rowInfo.codigo}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
      </td>
    </tr>    
  )
}
