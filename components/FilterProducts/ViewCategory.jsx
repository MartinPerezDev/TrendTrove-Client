import Link from 'next/link'
import { useRouter } from 'next/router';

import { CgOptions } from 'react-icons/cg'

const ViewCategory = ({categories, viewMenuCategory, changeViewCategory}) => {
  const { pathname } = useRouter();

  return (
    <div className="relative flex flex-col w-1/2">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg custom-gradient-buttons"
          onClick={changeViewCategory}
        >
          <CgOptions color="white" size={20} />
        </div>
        {viewMenuCategory && (
          <div className="absolute flex flex-wrap px-2 text-white min-h-10 mt-14 border-gray-900 rounded-lg rounded-tl-none bg-gray-500 bg-opacity-75">
            {
              pathname !== "/products" && (
                <Link
                onClick={changeViewCategory}
                href='/products'
                className="rounded-lg custom-gradient-buttons px-3 py-2 mr-2 my-2"
              >
                Todo
              </Link>
              )
            }
            {categories.map((categorie, i) => (
              <Link
                onClick={changeViewCategory}
                href={`/products/category/${String(categorie).toLowerCase()}`}
                key={categorie + i}
                className="rounded-lg custom-gradient-buttons px-3 py-2 mr-2 my-2"
              >
                {categorie}
              </Link>
            ))}
          </div>
        )}
      </div>
  )
}

export default ViewCategory