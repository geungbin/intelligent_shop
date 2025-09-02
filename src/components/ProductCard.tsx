export default function ProductCard() {
    return (
      <div className="group relative block overflow-hidden">
        <img
          src="/next.svg"
          alt="상품 이미지"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="relative border border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">예쁜 티셔츠</h3>
          <p className="mt-1.5 text-sm text-gray-700">₩29,000</p>
          <button className="mt-4 block w-full rounded bg-red-600 p-4 text-sm font-medium text-white transition hover:scale-105">
            장바구니 담기
          </button>
        </div>
      </div>
    );
  }
  