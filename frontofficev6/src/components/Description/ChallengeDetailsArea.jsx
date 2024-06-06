// import React from "react";
// import { Link } from "react-router-dom";

// const ChallengeDetailsArea = ({ challenge }) => {
//   return (
//     <section className="challenge-details-area pt-130 pb-130">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="challenge-details-wrap">
//               <div className="challenge-item">
//                 <div className="challenge-thumb">
//                   <img src={challenge.image} alt={challenge.challengeName} />
//                 </div>
//                 <div className="challenge-content">
//                   <Link to="/challenges" className="tag">
//                     {challenge.category}
//                   </Link>

//                   <div className="challenge-meta">
//                     <ul className="list-wrap">
//                       <li>
//                         <i className="fas fa-calendar-alt"></i>{challenge.startDate} - {challenge.deadline}
//                       </li>
//                       <li>
//                         <i className="far fa-user"></i>{challenge.companyName}
//                       </li>
//                     </ul>
//                   </div>

//                   <h2 className="title">
//                     {challenge.challengeName}
//                   </h2>

//                   <p>
//                     {challenge.description}
//                   </p>

//                   {/* Ajoutez d'autres détails du challenge ici */}

//                   {/* Ajoutez un lien ou un bouton pour soumettre une solution */}
//                   <Link to={`/solution/${challenge._id}`} className="btn btn-primary">
//                     Submit Solution
//                   </Link>
//                 </div>
//               </div>

//               {/* Ajoutez d'autres éléments comme la pagination, les commentaires, etc., selon vos besoins */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChallengeDetailsArea;