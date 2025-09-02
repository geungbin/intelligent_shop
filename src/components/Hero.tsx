export default function Hero() {
    return (
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We are 
              one of the best 
              <strong className="font-extrabold text-blue-700 sm:block">
              Online shop
              </strong>
            </h1>
            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Follow follow follow me
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                쇼핑 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  