import React from "react";

function Home() {
  return (
    <div className="align-element mt-10 rounded-xl 	">
      <section className="bg-base-200 rounded-xl	items-center flex flex-col ">
        <h1 className="pt-16 font-bold text-4xl	mb-3 ">Welcome to our blog</h1>
        <p className="pb-16 ">
          Here you can find a lot of interesting and useful information that you{" "}
          need in gardening and creating a beautiful garden
        </p>
      </section>
      <section className="flex gap-5 mt-5 justify-between">
        <div className="form-control rounded-xl w-5/6">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <select className="select select-bordered  w-full max-w-xs">
          <option disabled selected>
            Recently{" "}
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </section>
      <main className="mt-5  flex ob ">
        <div>
          {" "}
          <div className="bg-base-200 flex cucumber rounded-xl p-2 ">
            <div className="cucumber-2">
              <img
                src="/public/Frame 26.svg"
                className="mb-2 pl-5 pt-5"
                alt=""
              />

              <h2 className=" text-2xl font-bold mb-2 pl-5">
                How to plant spinach correctly in winter
              </h2>
              <p className="mb-2 pl-5">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn mb-5 ml-5 btn1">Read</button>
            </div>
            <div>
              <img src="/public/cucumber.png" width={294} height={300} alt="" />
            </div>
          </div>
          <div className="flex uzum-qulpunoy">
            <div className="bg-base-200 uzum mt-5 rounded-xl">
              {" "}
              <img
                src="/public/Frame 26.svg"
                className="mb-2 pl-5 pt-5"
                alt=""
              />
              <h2 className=" text-2xl font-bold mb-2 pl-5">
                How to plant spinach correctly in winter{" "}
              </h2>
              <button className="btn  ml-5 btn1">Read</button>
              <img className="img1" src="/public/uzum.png" alt="" />
            </div>
            <div className="bg-base-200 uzum mt-5 rounded-xl">
              {" "}
              <img
                src="/public/Frame 26.svg"
                className="mb-2 pl-5 pt-5"
                alt=""
              />
              <h2 className=" text-2xl font-bold mb-2 pl-5">
                How to plant spinach correctly in winter{" "}
              </h2>
              <button className="btn  ml-5 btn1">Read</button>
              <img className="img1" src="/public/qulpinoy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="qizaloq bg-base-200 rounded-xl">
          <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />
          <h2 className=" text-2xl font-bold mb-2 pl-5">
            How to plant spinach correctly in winter{" "}
          </h2>
          <p className="mb-2 pl-5">
            In most areas, successive sowing can be done from early spring until
            early winter, but more often during hotter months...
          </p>
          <button className="btn  ml-5 btn1">Read</button>
          <img className="qzi" src="/public/qiz.png" alt="" />
        </div>
      </main>
      <div className="flex shap">
        <div className="bg-base-200 flex cucumber mt-5 rounded-xl p-2 ">
          <div className="cucumber-2">
            <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />

            <h2 className=" text-2xl font-bold mb-2 pl-5">
              How to plant spinach correctly in winter
            </h2>
            <p className="mb-2 pl-5">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className="btn mb-5 ml-5 btn1">Read</button>
          </div>
          <div>
            <img src="/public/qulpinoy2.png" width={294} height={300} alt="" />
          </div>
        </div>
        <div className="bg-base-200 uzum mt-5 rounded-xl">
          {" "}
          <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />
          <h2 className=" text-2xl font-bold mb-2 pl-5">
            How to plant spinach correctly in winter{" "}
          </h2>
          <button className="btn  ml-5 btn1">Read</button>
          <img className="img1" src="/public/shapka.png" alt="" />
        </div>
      </div>
      <div className="flex ohiri mt-5">
        <div className="qizaloq bg-base-200 rounded-xl">
          <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />
          <h2 className=" text-2xl font-bold mb-2 pl-5">
            How to plant spinach correctly in winter{" "}
          </h2>
          <p className="mb-2 pl-5">
            In most areas, successive sowing can be done from early spring until
            early winter, but more often during hotter months...
          </p>
          <button className="btn  ml-5 btn1">Read</button>
          <img className="qzi" src="/public/kak.png" alt="" />
        </div>
        <div className="qizaloq bg-base-200 rounded-xl">
          <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />
          <h2 className=" text-2xl font-bold mb-2 pl-5">
            How to plant spinach correctly in winter{" "}
          </h2>
          <p className="mb-2 pl-5">
            In most areas, successive sowing can be done from early spring until
            early winter, but more often during hotter months...
          </p>
          <button className="btn  ml-5 btn1">Read</button>
          <img
            className=" qzi1"
            src="/public/uzum2.png"
            alt=""
            width={331}
            height={236}
          />
        </div>
        <div className="qizaloq bg-base-200 rounded-xl">
          <img src="/public/Frame 26.svg" className="mb-2 pl-5 pt-5" alt="" />
          <h2 className=" text-2xl font-bold mb-2 pl-5">
            How to plant spinach correctly in winter{" "}
          </h2>
          <p className="mb-2 pl-5">
            In most areas, successive sowing can be done from early spring until
            early winter, but more often during hotter months...
          </p>
          <button className="btn  ml-5 btn1">Read</button>
          <img className="qzi" src="/public/kak2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
