function OrdersCard({ data }) {
  console.log(data);
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>{data.date}•</span>
        <span>{data.totalPrice}•</span>
        <span>{data.totalProducts}</span>
      </p>
    </div>
  );
}

export default OrdersCard;
