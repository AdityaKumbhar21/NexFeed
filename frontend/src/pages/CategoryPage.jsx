import CategoryCard from "../components/CategoryCard"
import Sidebar from "../components/Sidebar"

const CategoryPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">News Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard name="Politics" />
          <CategoryCard name="Technology" />
          <CategoryCard name="Health" />
          <CategoryCard name="Sports" />
        </div>
      </main>
    </div>
  )
}
export default CategoryPage;