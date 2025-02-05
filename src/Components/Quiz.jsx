function Quiz(props) {

    return (

       <>
        <quiz className="flex justify-center">
          <section>
            <div className="text-center mt-1 font-bold"> 
              <h1 className="text-xl">Static Quiz App</h1>
              <h1 className="mt-2 text-xl">Project name: quiz-app</h1>
            </div>
            <div className="mt-4 bg-white shadow-sm shadow-black w-100 h-55 p-5 rounded-sm">
              <p className="font-bold">{props.quiz1}</p>
              <article className="mt-3">
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a1}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a2}</p></div>
                <div className="bg-green-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a3}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a4}</p></div>
              </article>
            </div>
            <div className="mt-3 bg-white shadow-sm shadow-black w-100 h-55 p-5 rounded-sm">
              <p className="font-bold">{props.quiz2}</p>
              <article className="mt-3">
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a5}</p></div>
                <div className="bg-green-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a6}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a7}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a8}</p></div>
              </article>
            </div>
            <div className="mt-3 bg-white shadow-sm shadow-black w-100 h-60 p-5 rounded-sm">
              <p className="font-bold">{props.quiz3}</p>
              <article className="mt-3">
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a9}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a10}</p></div>
                <div className="bg-green-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a11}</p></div>
                <div className="bg-red-300 pt-1 pb-1 pl-1 rounded-sm mb-1"><p>{props.a12}</p></div>
              </article>
            </div>
  
          </section>
        </quiz>
      </>
    )
  
  }
  
  export default Quiz;