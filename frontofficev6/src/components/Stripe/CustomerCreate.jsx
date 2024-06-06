import React, { useState } from 'react';
import { createCustomer } from './customerService';

const CustomerCreate = () => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    paymentMethodId: '',
  });

  const paymentMethods = [
    { name: 'Visa card', id: 'pm_card_visa', imageUrl: './assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'Mastercard', id: 'pm_card_mastercard', imageUrl: 'assets/frontOffice/img/stripeimages/mastercard.jpg' },
    { name: 'American Express', id: 'pm_card_amex', imageUrl: 'assets/frontOffice/img/stripeimages/amex.jpg' },
    { name: 'Discover', id: 'pm_card_discover', imageUrl: 'assets/frontOffice/img/stripeimages/discover.jpg' },
    { name: 'JCB', id: 'pm_card_jcb', imageUrl: 'assets/frontOffice/img/stripeimages/jcb.jpg' },
    { name: 'Diners Club', id: 'pm_card_diners', imageUrl: 'assets/frontOffice/img/stripeimages/diners.jpg' },
    { name: 'UnionPay', id: 'pm_card_unionpay', imageUrl: 'assets/frontOffice/img/stripeimages/unionpay.jpg' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCustomer(customerData);
      // Redirect to the payment page using window.location
      window.location.href = `/payment?customerId=${response.customerId}`;

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title">Create Customer</h2>
    <div className="col">
        <div className="col-md-6">
          <div className="form-grp">
                
          <label>Name:</label>
          <input
         style={{height:"37px", borderStyle:"solid",borderColor:"#A1AFE6",borderWidth:"1px", borderRadius:"5px"}}
          className="form-control"
            type="text"
            value={customerData.name}
            onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
            required
          />
        </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
          <label>Email:</label>
          <input
          style={{height:"37px", borderStyle:"solid",borderColor:"#A1AFE6",borderWidth:"1px", borderRadius:"5px",marginBottom:"20px"}}
          className="form-control"
            type="email"
            value={customerData.email}
            onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
            required
          />
        </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
          <label>Payment Method:</label>
          <select
            value={customerData.paymentMethodId}
            onChange={(e) => setCustomerData({ ...customerData, paymentMethodId: e.target.value })}
            required
            style={{height:"37px", borderStyle:"solid",borderColor:"#A1AFE6",borderWidth:"1px", borderRadius:"5px"}}
          >
            {paymentMethods.map(method => (
              <option key={method.id} value={method.id}>
                <img src={method.imageUrl} alt={method.name} style={{ width: '30px', marginRight: '10px' }} />
                {method.name}
              </option>
            ))}
          </select>
        </div>
        </div>
        <button type="submit" className="btn" style={{width:"100px", backgroundColor:"pink", color:"darkblue",marginTop:"25px"}} >Submit</button>
        </div>

      </form>
  );
};

export default CustomerCreate;
