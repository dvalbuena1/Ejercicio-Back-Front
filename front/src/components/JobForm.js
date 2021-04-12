import React from 'react';

const JobForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      company: event.target.company.value,
      salary: event.target.salary.value,
      city: event.target.city.value,
    };

    fetch('/offers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>New Offer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <input type="text" id="salary" name="salary" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default JobForm;
