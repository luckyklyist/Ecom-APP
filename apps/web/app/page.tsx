export default function Page() {
  return (
    <>
      <div className="card lg:card-side bg-primary-focus shadow-xl conatiner m-6">
        <img src="https://static.nike.com/a/images/t_default/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" alt="Album" width={300} />
        <div className="card-body ml-10">
          <h2 className="card-title text-5xl text-warning font-bold ">Welcome to ECOM NEPAL</h2>
          <p className="text-sm">Find the best deal in Nepal !!</p>
          <div className="card-actions justify-end mr-6">
            <button className="btn btn-neutral">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
