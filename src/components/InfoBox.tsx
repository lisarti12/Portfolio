import 'C:/Users/User/Desktop/Sample website/sample-website/src/index.css'; 
function InfoBox(){

    return (
        <div  className="flex items-center justify-center bg-slate-900 text-white mt-28">
            <div className="flex info-box slide-up mb-4 shadow-2xl">
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img className="rounded-l-lg" src="./professional_pic.png" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente ullam nulla saepe possimus, odio laboriosam totam itaque et odit quaerat blanditiis explicabo perspiciatis doloremque distinctio sit molestias consequuntur non!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente ullam nulla saepe possimus, odio laboriosam totam itaque et odit quaerat blanditiis explicabo perspiciatis doloremque distinctio sit molestias consequuntur non!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente ullam nulla saepe possimus, odio laboriosam totam itaque et odit quaerat blanditiis explicabo perspiciatis doloremque distinctio sit molestias consequuntur non!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente ullam nulla saepe possimus, odio laboriosam totam itaque et odit quaerat blanditiis explicabo perspiciatis doloremque distinctio sit molestias consequuntur non!

                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Lisart Mella
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                Student
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </div>
    )
}



export default InfoBox; 