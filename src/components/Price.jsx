import useData from "../hooks/useData";
import "./loader.css";

export default function Price() {
  let { loading , currency, setCurrency, getPrice, apiData} = useData(false);
  
  async function submitHandler(e) {
    e.preventDefault();
    let inputCurrencyName =(e.target[0].value + 'usdt')
    getPrice(inputCurrencyName)
      setCurrency((prev)=>{
        return {...prev,"name": inputCurrencyName, "price": currency.price}
      })
  }
  
  console.log(apiData)
  return !loading ? (

    <form className="w-[90%] md:w-[450px] mx-auto mb-16 space-y-4"
      onSubmit={submitHandler}
      >
      <div className="relative">
        <input
        required
        minLength={2}
          className=" rounded-lg border border-gray-400 py-3 -mt-1 px-4 w-full"
          placeholder="sol"
        />
        <button
          type="submit"
          className="right-2 py-2 px-4 bg-black text-white font-semibold rounded-xl absolute z-40 whitespace-nowrap"
        >
          Check Price
        </button>
      </div>
      <h1 className={`text-center text-2xl ${currency.name? "block" : "hidden"}`}>
         {apiData.hasOwnProperty("error") ? apiData.error.message != "Network Error" ? apiData.error.response.data.error :apiData.error.message : `Current price of ${currency.name.toUpperCase()} is ${currency.price}`}
      </h1>
    </form>
  ) : (
    <div className="progress text-center my-14 mx-auto"></div>
  );
}
