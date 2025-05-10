// export default function EducationCard({ title, place, date }) {
//     return (
//         <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 transition-colors">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                 <div>
//                     <h3 className="font-bold text-xl">{title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400 mt-1">{place}</p>
//                 </div>
//                 <p className="text-blue-600 font-medium mt-2 md:mt-0">{date}</p>
//             </div>
//         </div>
//     );
// }


// export default function EducationCard({ title, place, date, description }) {
//     return (
//         <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 transition-colors">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                 <div>
//                     <h3 className="font-bold text-xl">{title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400 mt-1">{place}</p>
//                     {description && <p className="mt-2">{description}</p>}
//                 </div>
//                 {date && <p className="text-blue-600 font-medium mt-2 md:mt-0">{date}</p>}
//             </div>
//         </div>
//     );
// }


export default function EducationCard({title, place, date, description}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="space-y-3">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mt-1">{place}</p>

                    {description && (
                        <p className="mt-2 text-sm">
                            {description}
                        </p>
                    )}
                </div>

                {date && (
                    <p className="text-blue-600 font-medium mt-2">
                        {date}
                    </p>
                )}

            </div>
        </div>
    );
}
