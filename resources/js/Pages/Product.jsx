import { Link, Head, router } from '@inertiajs/react';

export default function product({ products }) {

    return (
        <>
            <Head title="Product List" />
            <div className="container columns-3">
                    { products && products.map( (item) => (
                        <div class="max-w-sm rounded overflow-hidden shadow-lg m-20">
                          <img class="w-full" src="https://www.inspiredtaste.net/wp-content/uploads/2023/06/Easy-Hamburger-Recipe-Video.jpg" alt="Sunset in the mountains" />
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"  key={item.id}>{item.name}</div>
                            <p class="text-gray-700 text-base">
                              {item.description}
                            </p>
                          </div>
                          <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#burger</span>
                          </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
