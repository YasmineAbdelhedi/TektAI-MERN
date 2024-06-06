const API_URL = 'http://localhost:3000/api/stripe';

export const createCustomer = async (customerData) => {
  const response = await fetch(`${API_URL}/createcustomer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });

  if (!response.ok) {
    throw new Error('Failed to create customer');
  }

  return await response.json();
};

export const initiatePayment = async (customerId, amount) => {
  const response = await fetch(`${API_URL}/makepayment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerId, amount }),
  });

  if (!response.ok) {
    throw new Error('Failed to initiate payment');
  }

  return await response.json();
};
