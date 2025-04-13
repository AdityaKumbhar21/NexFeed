const CategoryCard = ({ name })=> {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-center font-medium hover:bg-gray-100 cursor-pointer">
        {name}
      </div>
    )
  }

  export default CategoryCard;