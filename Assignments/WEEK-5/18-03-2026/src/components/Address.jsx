function Address({ title, city, postalCode }) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p>{city}</p>
      <p>{postalCode}</p>
    </div>
  );
}

export default Address;
