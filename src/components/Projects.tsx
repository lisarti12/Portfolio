function Projects(){
    return (
        <div className="mt-16 text-white mb-64 ml-11" id="down">
            <div className="w-10/12 ml-24 flex justify-center grid-rows-3 gap-16">
                <div className="bg-slate-200 flex rounded w-80 container">
                    <a href="./Source Code/index.html" target="_blank">
                        <div className="img-container">
                            <img src="./logo2.png" alt="" className="image"/>
                        </div>
                        <footer className="bg-blue-500 rounded-b text-center mt-5 h-7">
                            <h5>ShopSwift</h5>  
                        </footer>
                    </a>
                </div>
                <div className="bg-slate-200 rounded w-80 container">
                    <a href="./calculator/calculator.html" target="_blank">
                        <div className="justify-center flex">
                            <img src="./calculator.png" alt="" className="w-64 m-5 image" />
                        </div>
                        <footer className="bg-blue-500 rounded-b text-center h-7">
                            <h5>Calculator</h5>  
                        </footer>
                    </a>
                </div>
                <div className="bg-slate-200 rounded w-80 container">
                    <a href="./data/data.html" target="_blank">
                        <div className="justify-center flex">
                            <img src="./database-management.png" alt="" className="w-72 image" />
                        </div>
                        <footer className="bg-blue-500 rounded-b text-center mt-2 h-7">
                            <h5>Data</h5>  
                        </footer>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;

