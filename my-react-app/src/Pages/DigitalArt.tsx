export default function DigitalArt () {

  return (
    <div className="bg-black min-h-screen text-white">


      <div className="h-px bg-gray-300 w-full my-4 mt-0"></div>

        <h1 className="text-yellow-500 text-3xl font-bold flex justify-center font-anonymous text-2xl p-10">Digital Art</h1>

         
        <div className="flex flex-wrap inline-space-x-4 justify-center">
          <div className="bg-white w-60 h-80 m-10 hover:scale-125 hover:shadow-lg hover:shadow-black/30 rounded-lg">Item 1</div>
          <div className="bg-white w-60 h-80 m-10 hover:scale-125 hover:shadow-lg hover:shadow-black/30 rounded-lg">Item 2</div>
       </div>
    </div>

  );
}