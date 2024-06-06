// // import React, { useState, useEffect } from 'react';
// // import Layout from "../layouts/Layout";
// // import axios from 'axios';

// // import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";




// // const Solution = () => {
// //   useEffect(() => {
// //     gsapTitleAnimation();
// //   }, []);
// //   const [solutions, setSolutions] = useState([]);
// //   useEffect(() => {
// //     const fetchSolutions = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3000/api/solution/getBYChallengeId/${challenge._id}`);
// //         setSolutions(response.data);

// //       } catch (error) {
// //         console.error('Failed to fetch solutions:', error.message);
// //       }
// //     };

// //     fetchSolutions();
// //   }, [challenge._id]);
// //   return (
// //     <Layout header={1} footer={1}>
// //      <div>
        
// //      </div>
// //     </Layout>
// //   );
// // };

// // export default Solution;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Layout from "../layouts/Layout";
// import axios from 'axios';
// import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

// const Solution = () => {
//   useEffect(() => {
//     gsapTitleAnimation();
//   }, []);

//   const { challengeId } = useParams(); // Collecting challengeId from the URL

//   const [solutions, setSolutions] = useState([]);

//   useEffect(() => {
//     const fetchSolutions = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/solution/getBYChallengeId/${challengeId}`);
//         setSolutions(response.data);
//       } catch (error) {
//         console.error('Failed to fetch solutions:', error.message);
//       }
//     };

//     fetchSolutions();
//   }, [challengeId]);

//   return (
//     <Layout header={1} footer={1}>
//       <div>
//         {/* Render solutions here */}
//       </div>
//     </Layout>
//   );
// };

// export default Solution;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../layouts/Layout";
import axios from 'axios';
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const Solution = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  const { challengeId } = useParams(); // Collecting challengeId from the URL

  const [solutions, setSolutions] = useState([]);
  const [solutionData, setSolutionData] = useState({
    challengeId: '',
    output: '',
    dataset: { data: '', contentType: '' },
    readMeFile: { data: '', contentType: '' },
    rapport: { data: '', contentType: '' },
    demo: { data: '', contentType: '' },
    sourceCode: { data: '', contentType: '' },
  });
  useEffect(() => {
    const fetchSolutionData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/solution/getBYChallengeId/${challengeId}`);
        const solution = response.data; // Assuming response.data is the solution object
        setSolutionData({
          challengeId: solution.challengeId || '',
          output: solution.output || '',
        });
      } catch (error) {
        console.error('Failed to fetch solution data:', error.message);
      }
    };

    fetchSolutionData();
  }, [challengeId]);
  // useEffect(() => {
  //   const fetchSolutions = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/api/solution/getBYChallengeId/${challengeId}`);
  //       setSolutions(response.data);
  //     } catch (error) {
  //       console.error('Failed to fetch solutions:', error.message);
  //     }
  //   };

  //   fetchSolutions();
  // }, [challengeId]);

  return (
    <Layout header={1} footer={1}>
      <div>
        <h2>Solution for Challenge {solutionData.challengeId}</h2>
        <p>Output: {solutionData.output}</p>
        {/* Render other solution data fields as needed */}
      </div>
    </Layout>
  );
};

export default Solution;
