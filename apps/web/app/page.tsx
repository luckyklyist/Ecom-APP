import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-8 rounded-lg shadow-xl max-w-md">
          <img
            src="https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-anime-girl-87.gif"
            alt="Album"
            className="mx-auto rounded-lg"
            width={300}
          />
          <div className="text-center mt-8">
            <h2 className="text-6xl text-warning font-bold mb-4">
              Welcome to the Digital Art Gallery!
            </h2>
            <p className="text-2xl text-white mb-6">
              Buy the best digital art from the best movies and anime series.
            </p>
            <button className="btn btn-outline btn-warning text-2xl">
              <Link href="/products">Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
