import React, { useState, useEffect } from 'react';
import Layout from "../layouts/Layout";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import axios from 'axios';

const Policy = () => {
    const [policy, setPolicy] = useState('');

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/crm/660d01ced0f5cf16e3c82b3a');
        const data  = response.data.policy[0];

        setPolicy(data.content);

    } catch (error) {
        console.error('Error fetching policy:', error);
      }
    };

    fetchPolicy();
  }, []);
  return (

<Layout header={1} footer={1}>
        <BreadcrumbArea title={"Privacy Policy"} subtitle={"Policy"} />

    <div style={{ marginLeft: '400px', marginRight: '400px' }}>
      <h1>Privacy Policy of TektAI</h1>
     <p>
        {policy}
     </p>
</div>

        </Layout>  )
}

export default Policy